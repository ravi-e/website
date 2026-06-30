---
title: "EndoQuiz: A dental exam prep PWA"
category: "Progressive Web App"
description: "How my wife's exam prep turned into a quest to prevent AI from hallucinating incorrect medical advice."
technologies: ["HTML", "Vanilla CSS", "JavaScript", "Service Workers", "Python", "Gemini API", "GitHub Actions"]
date: 2026-06-15
---

When Google Antigravity launched, I did what I usually do with hyped-up tech: absolutely nothing. I watched from the sidelines until curiosity finally won, and I downloaded it just to see what the fuss was about. 

Naturally, I needed a test project. My wife happened to be studying for her dental licensing exams (specifically the DHA) and was looking for practice questions. Hoping to score some brownie points and also wanting to test Antigravity's capabilities, I decided to build her a quiz app.

But once I slide into a rabbit hole, I tend to go deep. A basic MVP was never going to be enough. I spent weeks tweaking the UI, adding QoL features, and using Claude to review my code. The LLM actually came up with some solid ideas, suggesting a Spaced Repetition System (SRS) powered by the SM-2 algorithm to resurface failed questions before they slipped her mind, advanced performance analytics featuring a 2x2 Cognitive Tier Grid (from Recall to Expert Synthesis) alongside per-domain accuracy charts, and dynamic difficulty tiers that scaled based on how badly she was bruising her ego. I finally understood why people hyped up Claude so much.

Of course, not all my ideas came from AI. I had some of my own, including a split-card layout to show explanations, a post-quiz error review, an "Unanswered Question Guard" with a shake animation and tooltip (I really enjoy that little animation!), a configurable timer, and a daily pipeline to generate fresh questions.

I even toyed with generating AI images of x-rays to go with the questions. The [first (and only) six images](https://github.com/ravi-e/EndoQuiz/tree/main/images) I generated looked shockingly realistic, though at the cost of burning through my available tokens. Google was mighty generous back then! But a few days later, I hit a wall. Google's image generation API had changed, and I was no longer allowed to generate images. I spent a whole day trying out different models from Google to no avail. I experimented with other open-source models, but none of them came close to the quality of the earlier generated images. I scrapped the code for image generation and shifted the daily pipeline to generate text-only clinical scenarios to avoid subpar AI artifacts (and save some tokens).

Playing with AI-generated medical questions also made me think: if the model hallucinated a wrong answer, I could actively make my wife a worse dentist! To prevent this, I added interactive source references. Every question has a direct link to the textbook or paper it was pulled from, so she can fact-check the AI against primary literature whenever it looks suspicious.

I built the whole thing as a Progressive Web App (PWA). Dealing with the Google Play Store wasn't something I wanted to do at the time, and I didn't want to get derailed from my main goal. A PWA meant I could just send her a link, she could tap "Install" on her phone, and she was good to go. 

It worked. I got my brownie points, and she got a fast way to test herself while commuting between clinics. 

I have open-sourced the code. If you aren't studying endodontics, you can just swap out the prompt in `generate.py` to fit whatever you're learning—whether that's orthodontics, coding, or history.

## Live Project & Code

- **GitHub Repository:** [github.com/ravi-e/EndoQuiz](https://github.com/ravi-e/EndoQuiz)
- **Interactive App:** [EndoQuiz](https://ravi-e.github.io/EndoQuiz/) 
