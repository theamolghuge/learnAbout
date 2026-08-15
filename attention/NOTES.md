# Notes

Working notes for this workspace — preferences, what's built, what's still open, and what to do next. Read this before starting a new session.

---

## User preferences

- **Self-contained guide.** Lessons and reference docs must teach the full concept on their own. External sources are cited for trust and optional depth, never as required reading to understand a lesson.
- **Index hub.** `index.html` at the workspace root is the navigation entry point: mission summary, ordered lesson list, reference docs, resources.
- **Glossary policy override.** Normally glossary terms are added only after demonstrated understanding. Here, `reference/glossary.html` is populated up front as a full reference (terms introduced across lessons so far). Presence in the glossary ≠ mastery — mastery is tracked via [[learning-records]].
- **No time budget confirmed yet.** Assume short, self-contained lessons (~10–20 min, one tangible win) until the user says otherwise.

---

## Mission (confirmed 2026-08-05)

**Core ask:** stop diverting focus across many pursuits; concentrate on a few so depth can compound into greatness instead of mediocrity everywhere.

**Two layers — teach both, don't conflate them:**

| Layer | Skill | Covered in |
|-------|-------|------------|
| Session | Sustained, undistracted attention once you've chosen what to work on | Lessons 1–3 |
| Life/project | Choosing *which few things* deserve that attention and excluding the rest | Lesson 4+ |

See [[MISSION.md]] and [[learning-records/0001-mission-is-breadth-vs-depth]] for the full framing. A lesson that only teaches session-level focus will feel incomplete against this mission.

**Still open (by design):** the user's actual "vital few" — what domains/skills/projects make the list. Lesson 4's forced-ranking exercise (25/5-style) is the intended way to surface this, not a direct chat question (a similar question went unanswered earlier in session 1).

---

## What's built (as of 2026-08-05)

| Asset | Notes |
|-------|-------|
| Lessons 1–5 | Fragmentation → environment → time blocking/shutdown → choosing vital few → recovery/flow |
| `reference/glossary.html` | Full term reference, kept in sync with lessons |
| `reference/quick-reference.html` | One-page cheat sheet (facts, checklist, if-then templates) |
| `assets/style.css` | Shared styles; includes reusable `.block-form` / `.block-list` for localStorage-backed list builders (used in Lesson 3's time-block builder — reuse in future interactive lessons) |
| `learning-records/0001-…` | Mission reframed as breadth vs. depth |
| `index.html` | Navigation hub with "next lesson" callout |

**No learning-records beyond 0001 yet.** Per LEARNING-RECORD-FORMAT.md, coverage isn't learning — records come from demonstrated understanding or disclosed prior knowledge, not from having read a lesson.

---

## Conventions for future builds

- **Reuse `.block-form` / `.block-list`** for any lesson needing a persistent list or ranking UI — don't reinvent.
- **Lesson 4 caveat:** the 25/5 prioritization exercise is presented with its disputed Buffett origin noted; logic (forced ranking + explicit avoid list) is sound regardless. See [[RESOURCES.md]] "used with a caveat."
- **Cross-link layers.** Later lessons should explicitly connect session skills (Lessons 1–3) to life-level choices (Lesson 4+) so the guide feels like one system, not two unrelated tracks.
- **Self-contained citations.** When introducing a concept, teach it in the lesson body; link to RESOURCES.md for the primary source, not as a prerequisite.

---

## Still unknown — worth revisiting when natural

These weren't blocking session 1, but concrete answers would sharpen later lessons:

1. **The vital few (specific domains)** — intentionally deferred to Lesson 4's exercise. If the user completes it and shares results, future lessons can reference *their* list instead of generic examples.
2. **Time budget / cadence** — how often they study, how long per session. Affects lesson length assumptions and homework design.
3. **Biggest current obstacle** — phone/notifications, self-initiated switching, can't enter flow, no dedicated time. Would help prioritize among the queued topics below.

Don't re-ask these as a batch of chat questions if they've been dismissed before; surface them through lesson exercises or when the user naturally brings up progress.

---

## Next up (queued, not built)

**Lesson 6 — Protecting the vital few (life layer)**
- Natural follow-on to Lesson 4, best once the user has actually done the ranking exercise.
- Saying no to new opportunities, auditing existing commitments against the vital-few / avoid lists.
- Mechanisms beyond willpower (reserve clauses, opportunity filters, periodic commitment audits).

**Index callout** already mentions both; update it when either lesson ships.

---

## Session log

### 2026-08-05 — Session 1 (cold start → 4 lessons)

Built MISSION.md, RESOURCES.md, assets/style.css, glossary, quick reference, index, Lessons 1–2. User said "continue" → added Lesson 3 (time blocking + shutdown ritual + `.block-form` component). User confirmed mission (breadth vs. depth) → updated MISSION.md, wrote learning-record 0001, built Lesson 4 (career capital, essentialism, goal-conflict research, 25/5 exercise).

### 2026-08-05 — Session 2 (continue)

User said "/teach continue" → built Lesson 5 (ART, soft fascination, challenge-skill balance, flow diagnostic). Updated index, glossary (soft fascination term), Lesson 4 footer/nav.
