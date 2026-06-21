---
title: "Local LLM Setup: Ollama + Kilo.ai + Qwen 14B"
date: 2026-06-10
---

Experimenting with a fully local technical writing assistant setup. 

Running **Ollama** on my development machine hosting the **Qwen2.5-14B-Instruct** model, paired with **Kilo.ai** for context retrieval. 

The instruct model handles code-to-prose translations (like generating CLI options tables from a `.json` schema) with high accuracy. The response latency is under 1.5 seconds, which is impressive for local execution.

### Basic CLI Verification Command

```bash
ollama run qwen2.5:14b "Summarize this API structure..."
```

Keeping data local means no proprietary APIs receive drafts of unreleased product features.
