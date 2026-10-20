---
name: gotcha-personal-assistant-setup-v2
description: >-
  Interview a person and build the first version of their local personal assistant: an AGENTS.md plus a small Context folder (Me, People, To-dos, Notes) with a tidy-up routine. Use when someone asks to set up, start, rebuild or simplify their Gotcha personal assistant in the current folder.
---

# Gotcha Personal Assistant Setup (v2)

Simpler than v1: `AGENTS.md` describes how the assistant works; everything it knows lives in a small `Context` folder.

Build a useful first version in about ten minutes. The person works by talking to the assistant. The files are the assistant's memory; the person doesn't have to maintain them.

Keep it small. This is enough to start:

```text
AGENTS.md          How the assistant works. Read at the start of every conversation.
Context/
  Me.md            Who the person is: role, organisation, goals, how they like to work.
  People.md        The people they work with: who they are, their role, what matters about them.
  To-dos.md        What's open: their to-dos, the assistant's to-dos, what they're waiting on.
  Notes/           Everything else worth finding later: meeting notes, useful information.
                   One note per file, named with the date first (2026-10-20 Meeting with Eva.md).
```

Add another file in `Context/` only when one kind of information clearly needs its own place (for example a big project), and add it to the map in `AGENTS.md`.

Use [assets/AGENTS-template.md](assets/AGENTS-template.md) as the starting point for `AGENTS.md`. Fill every placeholder and remove anything that doesn't help this person.

## 1. Check the folder

Confirm that the current folder should become the personal assistant.

If it already has files, look at them first. Don't overwrite existing instructions or notes; explain any conflict before continuing. If an older setup used other files (`Person.md`, `Work.md`, `Actions.md`, `Now.md`, `Inbox/`), offer to move their content into the new structure and keep the originals until the person agrees.

Say once:

> I'll interview you and use your answers to set up your assistant. Share only what you're allowed and comfortable to let it read and remember. You can skip any question.

## 2. Interview in short rounds

Ask four to six numbered questions at a time, each easy to answer in one spoken reply. Rough dictation is fine. Confirm only mistakes that could change a name, number, date, responsibility or boundary.

**Round 1: the person and their work.** Name, role and organisation. What the organisation does and for whom. Its main goals this year. What the person is responsible for and wants to improve. What they'd like the assistant to take off their plate.

**Round 2: people and ways of working.** The closest colleagues and what each one does. Other relationships only when they matter day to day. How the person likes answers and writing. What often gets forgotten. What the assistant may do on its own and what needs approval.

**Round 3: what's open now.** Current priorities, open to-dos and things they're waiting on. Which sources the assistant may use (documents, email, calendar). Optional personal context that genuinely helps.

Don't try to document their whole life. The assistant keeps learning through normal work.

## 3. Confirm before writing

Show a short summary: who they are, their organisation, goals, key people, how the assistant should work, its boundaries, and what's open. Ask them to correct mistakes and approve before you create any files.

## 4. Build the files

After approval, create the files and the Notes folder above.

- **`AGENTS.md`**: from the template. It describes how the assistant operates, not what it knows: the purpose, how to work with this person, how to use each file in `Context/` (what goes where and when to save there), what it may do alone and what needs approval, how it keeps memory current and improves itself, and source and privacy rules. Keep it lean: short, specific lines. No placeholders left.
- **`Context/Me.md`**: facts about the person and their work. No instructions.
- **`Context/People.md`**: one short entry per person: name, role, how they relate to the person, anything worth remembering. Only people who came up.
- **`Context/To-dos.md`**: a *Last tidy-up* date and a short *Now* line (the one to three things that matter most) at the top, then *Mine*, *Assistant* and *Waiting on others*. Give each to-do the date it was added. Only to-dos that were actually mentioned or agreed.
- **`Context/Notes/`**: create the folder. Add a note only if the interview produced something worth keeping that doesn't fit the other files.

## 5. Check and hand over

Re-read every file you created. Check names, roles, dates and goals against the interview, that `AGENTS.md` only points to files that exist, and that nothing is invented.

Explain in plain language what each file is for, that the assistant will offer a tidy-up about once a week so old to-dos and notes don't pile up, and that they can ask it at any time to review its own `AGENTS.md` and propose improvements. Mention that `.md` files are plain text files they can open in any text editor, but that they can also just tell the assistant what to change. Invite one last correction, then stop:

> Your first version is ready. Talk to it as you work; it keeps these files up to date.
