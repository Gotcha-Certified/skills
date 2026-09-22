# Gotcha Skills

This is the public source of truth for skills created and maintained by Gotcha.

A skill is a small set of written instructions that teaches an AI agent how to handle a recurring kind of work. Most skills are one `SKILL.md` file, sometimes supported by templates or examples.

## Available skills

| Skill | What it helps with |
| --- | --- |
| [Competitor Analysis](skills/gotcha-competitor-analysis/) | Compare a company with a competitor using public evidence and turn the findings into practical improvements. |
| [Interview Me](skills/interview-me/) | Relentlessly interview someone about a plan until its decisions and dependencies are clear. |
| [Interview Me with Docs](skills/interview-me-with-docs/) | Run the same interview while preserving terminology, decisions and open questions in the project documentation. |
| [Lead Research](skills/gotcha-lead-research/) | Find and rank organisations that appear to fit a company, with evidence for timing and relevance. |
| [Market Exploration](skills/gotcha-market-exploration/) | Explore whether a new market or customer segment is worth testing. |
| [Personal Assistant Setup](skills/gotcha-personal-assistant-setup/) | Interview someone and build the first version of a local personal-assistant workspace. |
| [Purchase Research](skills/gotcha-purchase-research/) | Compare business purchases and prepare a decision brief. |
| [Week Preparation](skills/gotcha-week-preparation/) | Prepare the coming week from calendars, messages, notes, goals and commitments. |
| [Writing Fragments](skills/writing-fragments/) | Gather ideas, examples and sharp lines through conversation, without choosing an article structure. |
| [Writing Shape](skills/writing-shape/) | Turn raw material into an article, agreeing on each paragraph or block as you go. |
| [Writing Beats](skills/writing-beats/) | Build an article one beat at a time, choosing between possible next moves. |

## Write with these skills

Start with **Writing Fragments** when you're still finding what you want to say. It gathers material in one Markdown file without imposing an outline.

Once you have enough material, choose **Writing Shape** or **Writing Beats**. They're two ways to build the article; you don't need to use both. Shape works paragraph by paragraph. Beats offers a choice of directions at each step. Both establish what the reader already knows and introduce new ideas before relying on them.

After installing the skills, ask your agent to use one by name. For example:

> Use writing-fragments to help me explore why teams struggle to edit AI drafts. Save the fragments to `drafts/editing-fragments.md`.

Then choose one of these:

> Use writing-shape with `drafts/editing-fragments.md`. Help me write an article for team leads, and save it to `drafts/editing-article.md`.

> Use writing-beats with `drafts/editing-fragments.md`. Offer me a choice of starting beats, and save the article to `drafts/editing-article.md`.

These are conversations. Expect questions and choices as you work through the piece.

## Install a skill

Open the folder of the skill you want, copy its GitHub URL and give that URL to your agent.

For example:

> Install this skill in my current project:  
> https://github.com/Gotcha-Certified/skills/tree/main/skills/gotcha-competitor-analysis

The agent reads the files and copies the skill into the right place. It is not a separate application running in the background.

You can ask the agent to explain the skill before installing it:

> Read this skill first. What will it ask you to do, what files does it contain and is there anything I should check before I install it?

That is all a skill is: written instructions, plus any supporting files it needs.
