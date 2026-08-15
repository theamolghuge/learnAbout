# Notes

Working notes for this workspace — the user's teaching-method spec, preferences, personal dysregulation map (built incrementally), and session log. Read this before starting a new session.

---

## Teaching method (user-specified, 2026-08-13) — treat as durable instructions

The user opened with an unusually complete spec for *how* to coach this, not just what to teach. This is the operating manual for every future session in this workspace.

**Framing.** This is a trainable skill (nervous-system regulation, metacognition, impulse control, cognitive flexibility, deliberate decision-making under pressure) — not generic EQ/positivity. Goal is not "less emotional," it's "can act deliberately while feeling intensely."

**Session shape, in order (roughly — not all in session 1):**
1. Mental model — concise, not a lecture. What dysregulation is, cognitive/physiological activation, why intelligence disappears when activated, feel/express/act distinction, avoidance/rumination/impulsivity/aggression/people-pleasing/catastrophizing as emotion-regulation *attempts*, why "calm down" fails, regulation vs. suppression/numbing.
2. Personal pattern discovery — **interview, one question at a time**, don't assume. Build a personal dysregulation map (see below) from triggers, body signals, recurring thoughts, impulsive behaviors, avoidance, regrets (acting AND failing to act from fear), escalation patterns, states of unusual rationality/irrationality, worst-decision states.
3. In-moment protocol — Trigger → activation → labeling → pause → regulation → perspective → options → consequences → deliberate action. Need 10-sec / 2-min / 20-min / leave-and-return versions, with exact self-talk for each stage.
4. Simulations, one scenario at a time. **Never give the correct response first.** Sequence: put them in it → what do you notice → what emotion → what's the body doing → what story is the mind generating → what's the impulse → what would you actually do → *then* evaluate. Always distinguish "emotionally understandable" from "strategically wise."
5. Pause practice — drills that widen the gap between "I feel X" and "therefore I do Y." Generate ≥3 candidate actions before choosing, when it matters.
6. Decision-making under emotional load — what must be decided now vs. can wait, what's missing, what they're tempted to do purely to reduce discomfort, what they'd choose at 50% less intensity, likely future-self regret, moving toward value vs. away from discomfort. Core distinction: "this emotion contains information" vs. "this emotion should control behavior."
7. Deliberate practice program — progressive difficulty (low-stakes irritation → mild anxiety → interpersonal friction → criticism → uncertainty → rejection → anger → fear of loss → high-stakes decisions). Daily exercises, 5–15 min, ordinary-life-doable (no special environment required).
8. Regulation log — after real incidents: Trigger → Emotion → Intensity (0–10) → Body sensations → Automatic thought → Urge → Action → Immediate consequence → Delayed consequence → what they wish they'd done → what they'll try next time. Periodically analyze for recurring patterns.
9. Challenge rationalizations — don't auto-validate. Watch for and question (compassionately, but demandingly): "I had no choice" / "they deserved it" / "I had to respond immediately" / "I was just being honest" / "I couldn't help it" / "I needed closure" / "I knew I'd regret it if I didn't" / "that's just how I am." Ask whether it's true or a post-hoc justification.
10. Recovery, not perfection — recognizing the line crossed, not making it worse, repair, apologizing without self-justifying, returning to the conversation, learning without shame-spiraling, catching earlier warning signs next time. **Progress metric: shorter escalation, earlier recognition, faster recovery, fewer impulsive actions, better decisions — never "feels less."**

**Hard rules:**
- Theory only when a practical exercise won't teach it better. Real adult-life examples, not toy ones.
- Make the user answer, don't let them passively read.
- Occasionally surprise with a scenario that exposes a blind spot; increase difficulty as they improve; revisit skills they keep failing to use.
- Never treat "regulation" as a reason to tolerate abuse, coercion, or an unsafe situation, and never conflate it with suppressing legitimate anger/fear/sadness/boundaries.
- If a disclosure involves serious mental-health symptoms or danger, explicitly separate "this is coaching" from "this needs professional help" — don't paper over it.
- Quizzes (if used): every answer choice the same word count and, where possible, character count — no format-based tells.

**Session 1 specifically:** concise mental-model explainer, *not* a giant lecture, then exactly one high-quality interview question to start the pattern-discovery interview. Multi-session from here.

---

## Personal dysregulation map (built incrementally from the interview — do not assume, only record disclosed answers)

*Empty as of 2026-08-13 — session 1 interview has not started yet.* Fields to fill in as answered, one at a time, over however many sessions it takes:

- Common triggers:
- Physical warning signs:
- Recurring activated thoughts:
- Typical impulsive behaviors:
- What they tend to avoid:
- Regretted actions taken while emotional:
- Regretted inaction (fear-driven):
- Escalation pattern(s):
- States of unusual rationality / unusual irrationality:
- Emotional states behind their worst decisions:

Promote durable, non-obvious findings from this map to `learning-records/` once genuinely established (not just mentioned once) — see LEARNING-RECORD-FORMAT.md.

---

## What's built (as of 2026-08-13)

| Asset | Notes |
|---|---|
| `MISSION.md` | Drafted directly from the user's own detailed opening brief; confirmed at this detail level. |
| `RESOURCES.md` | Gross process model, Gross & John 2003 (reappraisal vs. suppression), Lieberman 2007 (affect labeling), window of tolerance (Siegel), physiological sigh RCT (Balban 2023), DBT TIPP/STOP, hot-cold empathy gap (Loewenstein), emotional granularity (Feldman Barrett). Community: r/DBTSelfHelp. |
| `assets/style.css` | Reused as-is from the `attention` workspace (Tufte-style, print-friendly, already has quiz/callout/timer components) — no changes needed yet. |
| `lessons/0001-*.html` | Concise mental-model lesson: dysregulation, activation, feel/express/act, why "calm down" fails, regulation vs. suppression. Ends by handing off to the live chat interview (not embedded as a static quiz) since the interview needs to adapt question-by-question. |
| `lessons/0002-*.html` | The in-moment protocol at 4 time budgets (10s/2min/20min/leave-and-return) with exact self-talk per stage. Live 2-minute practice timer (reused JS pattern from `attention/lessons/0001`). |
| `reference/in-moment-protocol.html` | One-page printable cheat sheet version of Lesson 2 — the thing meant to actually be reread under stress. |
| `lessons/0003-*.html` | The pause practice: reflex/opposite/delay structure for generating ≥3 options, plus 6 interactive retrieval prompts (angry/afraid/rejected/uncertain/ashamed/excited) using a reveal-not-grade quiz pattern (ported `quiz.js` + `.quiz-answer`/`.quiz-reveal-btn` styles from the `communication` workspace, since `attention`'s style.css didn't have a reveal variant — only click-to-grade). |
| `lessons/0004-*.html` | Deciding while activated: information-vs-control distinction, hot-cold empathy gap, 7-question decision checklist, one retrieval quiz. |
| `lessons/0005-*.html` | Challenging rationalizations: the 8-phrase table with a diagnostic question per phrase, plus an explicit callout drawing the line at genuine coercion/abuse (ties to the MISSION.md constraint) so the technique can't be turned against a real boundary violation. |
| `lessons/0006-*.html` | Recovery, not perfection: the 5 real progress metrics, crossing-the-line recognition, a repair structure (name action → name effect → stop, no "but" → optional concrete change), returning after leave-and-return. |
| `reference/regulation-log.html` | Printable 11-field log template (trigger → try-next-time), reusing `.gloss-term` styling for the field list. |
| `index.html` | Workspace hub, updated through lesson 6 and both reference docs. |

**Lessons 2–6 were all built ahead of the interview.** The user asked for "next 2 lessons" then "next 3 lessons" without answering the Lesson-1 handoff question (most recent regretted action + its trigger). Flagged once after lessons 2–3; not re-flagged after 4–6 to avoid nagging — the user has now twice explicitly chosen to keep consuming general content over engaging the live interview, which is itself a signal worth respecting rather than re-litigating each turn. All of lessons 2–6 are deliberately general-skill content (protocol mechanics, options structure, decision checklist, rationalization patterns, recovery mechanics) that doesn't require personal data, by design — none of them are the personalized dysregulation map or a real simulation.

**Session 1 continued: user said "complete the full remaining generation now."** This explicitly asked for everything pre-built, including what I'd flagged as needing to be live. Resolution: built the simulations (Lessons 7–8) using the same write-then-reveal pattern as Lesson 3/quiz.js — scenario → two grouped textareas (notice/emotion/body/story/impulse, then would-do) → reveal shows the "emotionally understandable vs. strategically wise" analysis. This preserves the "don't show the answer first" mechanic from the user's spec within a static format, at the cost of the analysis being generic rather than responsive to their actual typed answer (a live chat simulation would react to what they actually wrote — this can't). Said explicitly to the user so the tradeoff isn't silent.

| `lessons/0007-*.html` | Simulations I (interpersonal): insult mid-argument, distant loved one, unfair boss criticism, angry message, ignored/disrespected, rejection. 6 scenarios, write-then-reveal. |
| `lessons/0008-*.html` | Simulations II (stakes/desire): quit after bad day, jealousy, threat to leave, fear of missing an opportunity, desperately wanting an uncertain outcome, shame after a mistake. 6 scenarios, write-then-reveal. |
| `lessons/0009-*.html` | The practice ladder: 9 progressive rungs (low-stakes irritation → high-stakes decisions), each a concrete 5–15 min ordinary-life exercise. |
| `reference/practice-ladder.html` | One-page printable checklist version of Lesson 9. |

**All 12 scenarios from the user's original brief are now covered** (6 in Lesson 7, 6 in Lesson 8) — nothing dropped.

**What's still genuinely not generate-able:** the personal dysregulation map. It requires real disclosed answers, not content generation — fabricating placeholder triggers/patterns on the user's behalf would directly violate "interview me rather than assuming what my problems are." Still just the empty template above, waiting on the Lesson 1 handoff question (or any real answer volunteered later).

**Glossary: still deliberately not built.** Nothing has been gathered via genuine back-and-forth yet (all interaction so far has been "build the next N," not answering questions) — no demonstrated understanding to promote into it. Revisit once real interview/log material exists.

---

## Conventions for future builds

- **Reuse `attention/assets/style.css` components** (`.quiz`, `.callout-*`, `.timer`, `.pick-list`) before inventing new ones — the visual system should feel like one family across the user's workspaces even though missions differ.
- **Glossary policy: default (not overridden).** Unlike the `attention` workspace, do not pre-populate `reference/glossary.html` — add a term only after the user has shown they can use it, per GLOSSARY-FORMAT.md.
- **The interview is conversational, not a form.** One question at a time, in chat, across as many turns/sessions as it takes — don't try to front-load the whole dysregulation map in one lesson.
- **Simulations always follow the fixed 8-step sequence** in "Teaching method" above — resist the urge to shortcut to evaluation.

---

## Session log

### 2026-08-13 — Session 1 (cold start)

Built workspace scaffold, MISSION.md, RESOURCES.md, this NOTES.md, Lesson 1 (mental model). Asked the opening interview question in chat (most recent regretted emotional action + its trigger) — user asked for "next 2 lessons" instead of answering. Built Lesson 2 (in-moment protocol + practice timer + reference cheat sheet) and Lesson 3 (pause practice, interactive, reused/ported `communication`'s reveal-quiz pattern). User then asked for "next 3 lessons" without answering. Built Lesson 4 (deciding while activated), Lesson 5 (challenging rationalizations), Lesson 6 (recovery, not perfection) + the regulation-log reference template. User then asked to "complete the full remaining generation now" — built Lessons 7–8 (all 12 simulation scenarios from the original brief, write-then-reveal format) and Lesson 9 + reference (the 9-rung practice ladder). The general-skill curriculum (Lessons 1–9) is now complete. What remains — personal dysregulation map, glossary, learning records — genuinely requires the user's real input and cannot be generated ahead of it; said so directly rather than fabricating placeholder personal content.
