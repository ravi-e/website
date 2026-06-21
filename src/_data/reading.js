import { promises as fs } from 'fs';
import path from 'path';

// Clean CDATA and extract tag content from item block
function extractTag(itemXml, tag) {
  const match = itemXml.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\/${tag}>`));
  if (!match) return '';
  const val = (match[1] || match[2] || '').trim();
  // Decode basic HTML entities
  return val
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function fetchShelf(userId, shelf) {
  const url = `https://www.goodreads.com/review/list_rss/${userId}?shelf=${shelf}`;
  
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) EleventyBuildProcess'
      }
    });
    
    if (!res.ok) {
      throw new Error(`Goodreads returned status ${res.status}`);
    }
    
    const xml = await res.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    
    while ((match = itemRegex.exec(xml)) !== null) {
      const itemXml = match[1];
      
      const title = extractTag(itemXml, 'title');
      const author = extractTag(itemXml, 'author_name');
      const bookId = extractTag(itemXml, 'book_id');
      const cover = extractTag(itemXml, 'book_large_image_url') || extractTag(itemXml, 'book_medium_image_url') || extractTag(itemXml, 'book_image_url');
      const rating = parseInt(extractTag(itemXml, 'user_rating'), 10) || 0;
      const readAt = extractTag(itemXml, 'user_read_at') || extractTag(itemXml, 'pubDate') || '';
      const description = extractTag(itemXml, 'book_description');
      const link = extractTag(itemXml, 'link');
      const pages = parseInt(extractTag(itemXml, 'num_pages'), 10) || null;
      const published = extractTag(itemXml, 'book_published');

      items.push({
        title,
        author,
        bookId,
        cover,
        rating,
        readAt,
        description,
        link,
        pages,
        published
      });
    }
    
    return items;
  } catch (err) {
    console.error(`Error fetching Goodreads shelf "${shelf}":`, err.message);
    return []; // fallback to empty array so the build doesn't crash
  }
}

export default async function() {
  const userId = '8863121';
  
  console.log(`[11ty] Fetching Goodreads data for user ${userId}...`);
  
  const currentlyReading = await fetchShelf(userId, 'currently-reading');
  const read = await fetchShelf(userId, 'read');
  
  console.log(`[11ty] Loaded ${currentlyReading.length} currently reading books and ${read.length} read books.`);
  
  return {
    currently_reading: currentlyReading,
    read: read
  };
}
