---
title: "WanderWing: Moving from Gemini Canvas to a standalone web app"
category: "Web Application"
description: "How a family trip to Sikkim and a frustrating experience with disappearing AI chats led me to rebuild my custom travel planner as a permanent, standalone tool."
technologies: ["HTML", "Vanilla CSS", "JavaScript", "Gemini API"]
date: 2026-06-20
---

WanderWing was my first real taste of "vibe coding." 

I had gotten into the Google Gemini discord and the mods hosted a cool session showing off the new Canvas feature. Around the same time, I was planning a family trip to Sikkim. Instead of wrestling with a standard travel planner, I used Canvas to build a tool that actually understood context. I wanted something that could adapt on the fly—shifting gears depending on whether we wanted a leisurely family vacation, a shoestring-budget adventure, or a luxurious couples' getaway. Gemini was the engine under the hood, but I wanted the output to have actual personality rather than reading like a dry, generated list of coordinates.

I ended up spending way too much time on it. I polished the tone of the itinerary and wrote custom loading messages to keep things interesting while the AI churned in the background. We actually followed the generated Sikkim itinerary pretty closely, right up until my wife caught a stomach bug and we had to sit out the Kanchenjunga Falls. 

<div class="post-image-frame">
  <img src="/assets/sikkim-monastery.jpg" alt="Enchey Monastery in Sikkim under a blue sky">
  <span class="post-image-caption">Enchey Monastery, Sikkim – an architectural marvel under a clear blue sky.</span>
</div>

During development, I had a sudden brainwave: "Daily Hidden Gems & Secrets." The idea was to surface one weird or interesting local fact for each day of the trip. I also added a PDF export option, mostly out of sheer necessity so I could easily download the itinerary and share it with my in-laws.

Honestly, WanderWing was born out of my own impatience. I didn't want to go to Gemini every single time and manually pre-fill the same prerequisites—that I was traveling with senior citizens, that we preferred budget hotels, or that we wanted to splurge. If I'm traveling with my in-laws, the app needs to know *not* to schedule steep hikes or high-altitude treks (cause it's easier to gaslight your wife into believing that the hike is not so difficult rather than your in-laws). If it's just my wife and me, I want romantic spots and a willingness to blow the budget on a nice stay. WanderWing handles all of that via simple, pre-selected options.

<div class="post-image-frame">
  <img src="/assets/sikkim-road.jpg" alt="Winding mountain roads and valleys in Sikkim">
  <span class="post-image-caption">Winding mountain passes cutting through the lush, misty valleys of Sikkim en route Nathu La.</span>
</div>

But Canvas had its limits. The biggest issue was that the link had to be manually saved, and the conversation would inevitably get buried under a mountain of newer chats. It also used to just randomly bug out and would not build the app no matter how much you prompted. You would have to copy the project and make a fresh attempt to coax it to iron out its bugs. So, fresh off building [EndoQuiz](/projects/endoquiz/), I decided to use Antigravity to rebuild WanderWing from scratch as a proper web app. Frustratingly, I ran into a wall of UI bugs, and it took a lot of late-night wrangling to get the layout to cooperate.

It still has a few quirks I need to iron out, but this project has spent enough time in the oven. I don't want to overcook it in a futile quest for perfection. The plan now is to ship the MVP, treat it like a SaaS product, and iterate on it. Hopefully, someone else finds it useful enough to grab the code and adapt it for their own travels.

<div class="post-image-frame">
  <img src="/assets/sikkim-cablecar.jpg" alt="Cable car view overlooking Gangtok">
  <span class="post-image-caption">Gazing down at Gangtok from the ropeway cable car.</span>
</div>

Like all my projects, the source code is open on GitHub for anyone who wants to fork it and build something better. I am currently investigating how to host this website - the most easiest option is vercel, but I am also exploring if I can host it at my own domain. 

<div class="post-image-frame">
  <img src="/assets/sikkim-lake.jpg" alt="Tsomgo Lake with prayer flags in Sikkim">
  <span class="post-image-caption">The serene waters of Tsomgo Lake framed by vibrant prayer flags.</span>
</div>

## Code & Resources

- **GitHub Repository:** [github.com/ravi-e/wanderwing](https://github.com/ravi-e) *(Simulated)*
- **Live App:** [wanderwing.ravi-e.com](https://ravi-e.com) *(Simulated)*

