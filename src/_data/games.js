function decodeHtmlEntities(str) {
  if (!str) return '';
  
  const namedEntities = {
    amp: '&', lt: '<', gt: '>', quot: '"', apos: "'",
    nbsp: ' ', ndash: '–', mdash: '—',
    lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”',
    middot: '·', hellip: '…',
    ouml: 'ö', auml: 'ä', uuml: 'ü',
    Ouml: 'Ö', Auml: 'Ä', Uuml: 'Ü',
    eacute: 'é', aacute: 'á', oacute: 'ó', iacute: 'í', uacute: 'ú',
    Eacute: 'É', Aacute: 'Á', Oacute: 'Ó', Iacute: 'Í', Uacute: 'Ú'
  };

  return str
    .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    .replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&([a-zA-Z0-9]+);/g, (match, name) => namedEntities[name] || match);
}

// Clean CDATA and extract tag content from item block
function extractTag(itemXml, tag) {
  const match = itemXml.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\/${tag}>`));
  if (!match) return '';
  const val = (match[1] || match[2] || '').trim();
  return decodeHtmlEntities(val);
}

export default async function() {
  const customUrl = 'snowfire88';
  const url = `https://steamcommunity.com/id/${customUrl}/?xml=1`;
  
  console.log(`[11ty] Fetching Steam profile data for user "${customUrl}"...`);
  
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) EleventyBuildProcess'
      }
    });
    
    if (!res.ok) {
      throw new Error(`Steam returned status ${res.status}`);
    }
    
    const xml = await res.text();
    const games = [];
    
    // Check if the profile XML contains most played games block
    if (xml.includes('<mostPlayedGames>')) {
      const gameRegex = /<mostPlayedGame>([\s\S]*?)<\/mostPlayedGame>/g;
      let match;
      
      while ((match = gameRegex.exec(xml)) !== null) {
        const gameXml = match[1];
        
        const title = extractTag(gameXml, 'gameName');
        const link = extractTag(gameXml, 'gameLink');
        const icon = extractTag(gameXml, 'gameIcon');
        const logo = extractTag(gameXml, 'gameLogo');
        const hours2Weeks = parseFloat(extractTag(gameXml, 'hoursOn2Weeks')) || 0;
        const hoursTotal = parseFloat(extractTag(gameXml, 'hoursPlayed')) || 0;
        
        games.push({
          title,
          link,
          icon,
          logo,
          hours2Weeks,
          hoursTotal,
          isMock: false
        });
      }
    }
    
    // If no games found (e.g. game details set to Private or 0.0 hours played recently), provide games from user's public showcases
    if (games.length === 0) {
      console.log(`[11ty] Steam profile game details are private or 2-week hours is 0.0. Loading games from public showcases.`);
      return {
        isPrivate: true,
        list: [
          {
            title: "No Man's Sky",
            link: "https://store.steampowered.com/app/275850/No_Mans_Sky/",
            logo: "https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg",
            hours2Weeks: 0.0,
            hoursTotal: 72.4,
            isMock: true
          },
          {
            title: "Half-Life: Alyx",
            link: "https://store.steampowered.com/app/546560/HalfLife_Alyx/",
            logo: "https://cdn.akamai.steamstatic.com/steam/apps/546560/header.jpg",
            hours2Weeks: 0.0,
            hoursTotal: 32.5,
            isMock: true
          },
          {
            title: "UNCHARTED™: Legacy of Thieves Collection",
            link: "https://store.steampowered.com/app/1659420/UNCHARTED_Legacy_of_Thieves_Collection/",
            logo: "https://cdn.akamai.steamstatic.com/steam/apps/1659420/header.jpg",
            hours2Weeks: 0.0,
            hoursTotal: 24.8,
            isMock: true
          },
          {
            title: "HOT WHEELS UNLEASHED™",
            link: "https://store.steampowered.com/app/1271700/HOT_WHEELS_UNLEASHED/",
            logo: "https://cdn.akamai.steamstatic.com/steam/apps/1271700/header.jpg",
            hours2Weeks: 0.0,
            hoursTotal: 18.5,
            isMock: true
          }
        ]
      };
    }
    
    console.log(`[11ty] Successfully loaded ${games.length} recently played Steam games.`);
    return {
      isPrivate: false,
      list: games
    };
    
  } catch (err) {
    console.error(`Error fetching Steam data:`, err.message);
    return {
      isPrivate: true,
      list: []
    };
  }
}
