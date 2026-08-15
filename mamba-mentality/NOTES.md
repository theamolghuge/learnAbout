# Notes

Working notes for this workspace — read before starting a new session.

---

## Origin

Built from a single, extremely detailed opening brief (2026-08-13) rather than an interview — the user already knows why they want this and what they don't want. Treat the brief as durable instruction, not a one-off request. Full text isn't reproduced here; [[MISSION.md]] and this file distill the parts that steer future sessions.

## Non-negotiables from the brief

- **No generic motivational content.** No listicles of quotes, no "here are 10 books," no famous-person-worship for its own sake. Every figure or quote included must teach a specific, applicable principle.
- **Primary sources first.** Kobe's own book over summaries of it, translated primary texts over paraphrase. See [[RESOURCES.md]] tiering.
- **Label every claim's kind**: evidence-based / philosophical / historical / anecdotal. Never let a philosophical claim (e.g. from the Gita) read as an empirical fact, and never let an evidence-based finding (e.g. Duckworth's ~4% variance) get oversold as bigger than it is.
- **The dark side is not optional garnish.** Every stage that could tip into obsession (Discipline, Mastery, Performance especially) needs its "what NOT to imitate" counterpart given real weight — see Stage 8 and the Goggins/perfectionism material in [[RESOURCES.md]].
- **Confrontation, not flattery.** Every lesson needs at least one question that's genuinely uncomfortable to answer honestly (see the brief's Section 11 list — "what would you pursue if nobody applauded," "are you pursuing mastery or validation," etc.). These get used as actual reflection prompts across lessons, not all dumped into one.
- **Small resource list, tiered.** User explicitly doesn't want "100 books." Resist the urge to keep appending sources — prune before adding, per [[RESOURCES.md]]'s own rules.
- **Eventual capstone**: a personal "Mamba Mentality Manifesto" at Stage 10 (Integration) — a short, reread-every-morning document synthesizing all ten stages. Don't build this early; it needs the full arc underneath it to be earned rather than generic.

## Cross-workspace boundaries

- [[anvikshiki]] already covers reasoning, decision method, and bias-correction (classical Indian logic + modern cognitive science), 22 lessons deep. This workspace does NOT re-teach reasoning/inquiry — it covers character, discipline, and excellence. Where the two would naturally touch (self-inquiry, detachment from a belief, viveka), cross-link to the anvikshiki lesson rather than duplicating it.
- [[attention]] already covers deep work, focus mechanics, and choosing a vital few (Cal Newport, attention residue, essentialism), 5 lessons deep. This workspace's Stage 4 (Discipline) and the "what deserves my time" thread should cross-link there for focus mechanics rather than re-deriving them — this curriculum's job is the *why* (dharma, tapas, discipline vs. compulsion), not re-teaching deep-work tactics.

## Glossary policy override

This topic spans Sanskrit (dharma, tapas, vairagya, abhyasa, nishkama karma), Greek (arete, ataraxia, apatheia), and Japanese (bushido, mushin) vocabulary the user has no prior exposure to. Per-lesson glossary entries only after demonstrated mastery would leave the reader without a reference while still learning the words. Overriding: `reference/glossary.html` is populated as each term is *introduced*, not after it's mastered — same override [[attention]] used. Mastery is still tracked separately via [[learning-records]], not implied by glossary presence.

## Pacing

This is designed as a multi-year curriculum (ten stages, [[MISSION.md]] "The arc"). Don't try to compress stages to satisfy the scope of the original brief in fewer sessions than the material needs — one tightly-scoped lesson per session, zone-of-proximal-development permitting. If the user says "continue" without direction, advance to the next lesson in the current stage; only jump stages if they ask or if a learning record shows they're ready.

---

## What's built (as of 2026-08-13)

| Asset | Notes |
|---|---|
| `MISSION.md` | Full mission + ten-stage arc |
| `RESOURCES.md` | Tiered (Essential/Deepening/Optional), all sources verified via web search this session — see citations |
| `assets/style.css` | New palette (ink/charcoal + restrained gold accent — deliberately not Lakers purple/gold), reuses attention/'s proven component patterns (callouts, quiz, gloss-term) plus a new `.confront` callout and `.journal` reflection widget |
| `lessons/0001-why-pursue-excellence.html` | Stage 1 — Awakening. Mastery vs. validation axis, nishkama karma, SDT competence, Kobe's own words on playing to figure things out vs. playing not to fail |
| `lessons/0002-what-you-actually-control.html` | Stage 1 — Awakening. Epictetus's dichotomy of control, Meditations Book 8, responsibility defined precisely (not fatalism, not self-blame), explicit cross-tradition link back to Lesson 1's nishkama karma. **Stage 1 is now complete (2 lessons).** |
| `reference/glossary.html` | Seeded with Lessons 1–2's terms (dharma, nishkama karma, mastery-/validation-orientation, SDT competence, dichotomy of control, responsibility) |
| `index.html` | Full ten-stage roadmap; Stage 1 marked complete, Stage 2 marked up next |

**No learning-records yet.** Both sessions so far were builds from the brief / auto-continue, not interactive demonstration of understanding — nothing qualifies yet per the format's rules (coverage isn't learning). The next session should actively check in on what the user got out of Lessons 1–2's journal prompts before assuming Stage 2 readiness.

| `lessons/0003-the-quote-aristotle-never-said.html` | Stage 2 — Philosophy, Lesson 1. Opens with the Will Durant misattribution as a live demonstration of distorted philosophy, then Aristotle's actual claim (arete as hexis, eudaimonia as "a complete life," NE I.7 and II.1), then an honest Aristotle-vs-Gita comparison: converge on excellence as sustained practice, diverge on whether it's for your own flourishing or performed regardless of what it gets you. |

| `lessons/0004-one-good-or-many.html` | Stage 2, Lesson 2. The actual Stoic doctrine (virtue alone good, everything else *adiaphora* — preferred/dispreferred indifferents) set directly against Aristotle's Book I.8–9 claim that eudaimonia needs external "equipment." Corrects the common flattening of Stoicism into a generic calm-focus toolkit compatible with everything. |

| `lessons/0005-no-fixed-self-to-defend.html` | Stage 2, Lesson 3. Four Noble Truths (dukkha/tanha/nirodha/magga) and anatta (no-self), deliberately sourced from Fronsdal's Dhammapada rather than Easwaran's (documented fidelity concerns — a Hindu-inflected translator is the wrong choice for a text whose core doctrine denies the Hindu atman). States the Buddhism/Gita disagreement on the self plainly rather than blending "Indian philosophy" into one voice. |

| `lessons/0006-what-they-actually-agree-on.html` | Stage 2, Lesson 4 (closing). Synthesis via comparison table (tradition × ultimate point × stable self? × non-attachment target) — deliberately shows the real fault lines don't split East vs. West (Aristotle/Gita align on stable-self-and-externals-matter more than either aligns with Stoicism/Buddhism). No new sources; pure synthesis. Ends with the user stating their own position, not picking a tradition to cite. **Stage 2 complete (4 lessons).** Added `.compare-table` component to `assets/style.css` — reusable for future stage-closing synthesis lessons (e.g. Stage 9). |

| `lessons/0007-what-yoga-actually-means.html` | Stage 3, Lesson 1. Opens by correcting the "yoga = postures" distortion (Sutra 1.2's actual definition: stilling the mind's fluctuations), then the abhyasa+vairagya twin mechanism (Sutras 1.12–1.16) as the technical version of Stage 2's "practice + don't cling" convergence. Names two failure modes (grinding vs. avoidance) that preview Stage 8's discipline-vs-compulsion material. No new resource — uses the Yoga Sutras already in RESOURCES.md Tier 2. |

| `lessons/0008-composure-is-a-technique.html` | Stage 3, Lesson 2. Physiological (not cognitive) emotional regulation — explicitly cross-links to [[anvikshiki]] for the reasoning/reframing side rather than duplicating it. Cyclic sighing (Balban et al. 2023 Stanford RCT) as the evidence-based technique, with an honest caveat about the popular "Yerkes-Dodson law" being a later overinterpretation of a 1908 mice study (same pattern as the Aristotle misattribution in Lesson 3 — a recurring workspace move worth keeping up). Added Balban et al. to RESOURCES.md Tier 2 (2 web searches: the RCT itself, and verifying the Yerkes-Dodson caveat before using it). |

| `lessons/0009-build-the-daily-practice.html` | Stage 3, Lesson 3 (closing). Interactive practice-builder (new `.practice-card`/`.practice-form` component in `assets/style.css`, localStorage-backed like the block-form pattern in [[attention]]) turning Lessons 7–8 into one concrete daily practice, then an honest confront: would the user actually do this on their worst day, or is it a wish? Deliberately ends Stage 3 admitting a gap ("motivation isn't reliable") that Stage 4 exists to close — a narrative hook rather than a loose thread. **Stage 3 complete (3 lessons).** |

| `lessons/0010-motivation-was-never-the-plan.html` | Stage 4, Lesson 1. Tapas (Yoga Sutras 2.1, kriya yoga) as "discipline should have friction, that's not a bug" + Wendy Wood's context-cue habit research (new Tier 2 source) as the evidence-based mechanism — directly answers Lesson 9's "will you actually do it on your worst day" with "not willpower, a stable cue." Confirmed no overlap with [[attention]] (that workspace covers deep-work scheduling, not cue-based habit mechanics — safe to introduce Wood fresh here). |

| `lessons/0011-the-lapse-isnt-the-problem.html` | Stage 4, Lesson 2. Corrects the "66 days" myth's false precision (real range 18–254 days) and surfaces the study's more load-bearing finding: missing a day doesn't materially hurt habit formation. Pairs with the abstinence violation effect (Marlatt & Gordon, addiction-relapse research, explicitly flagged as a borrowed mechanism, not equivalence) — the guilt story after a lapse causes abandonment, not the lapse. Added both to RESOURCES.md Tier 2. |
| `lessons/0012-the-plan-for-not-feeling-like-it.html` | Stage 4, Lesson 3 (closing). Implementation intentions, deliberately reused from [[attention]]'s RESOURCES.md rather than re-sourced — two saved if-then plans (resistance, lapse). Closes Stage 4 by confronting whether the user expected "having a system" to also make the effort stop feeling effortful — sets up Stage 5 honestly (deliberate practice is supposed to feel hard). **Stage 4 complete (3 lessons).** |

| `lessons/0013-10000-hours-wasnt-the-finding.html` | Stage 5, Lesson 1. Deliberate practice's real definition (Peak, Tier 1) plus the honest research history: Ericsson et al. 1993 (48% variance explained) vs. Macnamara & Maitra's 2019 replication (26%, no significant practice-time gap between "best" and "good" violinists) — added both to RESOURCES.md Tier 2. Diagnostic ending: does your practice have a real feedback loop, or is it hour-counting as validation. |
| `lessons/0014-the-corroborated-version.html` | Stage 5, Lesson 2. Deliberately uses the well-corroborated 2008 Olympics 4am story (independent accounts from Bosh and Wade) instead of the vague, unattributed "Kobe always worked out at 4am" legend — added to RESOURCES.md Tier 3 as anecdotal-but-corroborated. Ends by explicitly *not* resolving whether this is admirable or a red flag, flagged as a question Stage 8 revisits — first deliberate seed of the dark-side material. |
| `lessons/0015-a-thousand-days-to-forge.html` | Stage 5, Lesson 3 (closing). Musashi's "1,000 days to forge, 10,000 to refine" (Book of Five Rings, Tier 2) resets the timescale — most "not good enough yet" frustration is a timeframe error. Interactive weekly practice-structure builder (target/feedback/stretch) operationalizes Lesson 13's diagnostic into something repeatable. **Stage 5 complete (3 lessons).** |

| `lessons/0016-the-freedom-that-cant-be-taken.html` | Stage 6, Lesson 1. First actual use of Frankl (Tier 1 since session 1). Careful to distinguish "meaning can be found in unavoidable suffering" from "suffering is good/happens for a reason." Journal prompt could surface real material — added an explicit note that this curriculum isn't a substitute for professional support. |
| `lessons/0017-a-torn-achilles-and-two-free-throws.html` | Stage 6, Lesson 2. Kobe's 2013 Achilles tear, using his own real-time quote ("it's probably not a good idea") and later documentary quote (fear of career ending) rather than the sanitized highlight-reel version. Directly practices the brief's "pain tolerance vs. ignoring legitimate limits" distinction on a concrete case instead of leaving it abstract for Stage 8. |
| `lessons/0018-what-adversity-actually-does.html` | Stage 6, Lesson 3 (closing). Honest post-traumatic growth treatment (Tedeschi & Calhoun + a 2019 critical review, both added to RESOURCES.md Tier 2) — real but not automatic, PTGI measures self-report not verified change. Interactive failure-review protocol (what happened / what's up to me / what it reveals / next action) operationalizes the honest version rather than leaving it as a caveat. **Stage 6 complete (3 lessons).** |

| `lessons/0019-dont-watch-yourself-do-it.html` | Stage 7, Lesson 1. Beilock's explicit-monitoring research on choking — added to RESOURCES.md Tier 2. Two failure modes (monitoring a well-learned skill's mechanics vs. distraction on cognitively demanding tasks), practical fix is simulated-pressure practice, not "focus harder." |
| `lessons/0020-study-them-dont-measure-yourself-by-them.html` | Stage 7, Lesson 2. Festinger's social comparison theory (new Tier 2 source) reframed as "comparison isn't optional, what you extract from it is" — information vs. verdict distinction, applying Lesson 1's mastery/validation axis directly to competition. Kobe's opponent film study as the case study. |
| `lessons/0021-your-pre-performance-routine.html` | Stage 7, Lesson 3 (closing). Interactive routine builder combining Stage 3 (cyclic sighing), Lesson 19 (external attention cue), Lesson 20 (comparison reset) into one fixed sequence. Cross-links flow/challenge-skill balance already in [[attention]] rather than re-deriving. **Stage 7 complete (3 lessons).** |

| `lessons/0022-the-discriminating-question.html` | Stage 8, Lesson 1. Schaufeli's work-engagement-vs-workaholism research (new Tier 2 source) — compulsion, not hours, is the discriminating factor. Goggins case study using the critique already flagged since session 1. Explicitly resolves (with honest limits) the two open questions from Lesson 14 and Lesson 17. |
| `lessons/0023-what-happens-when-youre-challenged.html` | Stage 8, Lesson 2. Kernis's secure-vs-fragile self-esteem research (new Tier 2 source) + Hewitt & Flett (Tier 2 since session 1, first use) — both converge on one diagnostic (defensiveness/harshness under challenge). Confidence vs. ego, high standards vs. perfectionism. |
| `lessons/0024-ten-lines-and-a-checklist.html` + `reference/dark-side-checklist.html` | Stage 8, Lesson 3 (closing). New standalone reference doc completing all 10 dark-side distinctions from the original brief, honestly split into "Researched" (4 rows, cited) vs. "Reasoned" (3 rows, this workspace's own logic, not sourced) vs. case-study/core-theme (2 rows). Self-audit journal: where are you actually on the dark side right now, not hypothetically. **Stage 8 complete (3 lessons) — the mission's most emphasized section is now covered.** |

| `lessons/0025-greater-than-infinity.html` | Stage 9, Lesson 1. Verified Kobe post-retirement facts (Dear Basketball/Oscar, Granity Studios — "Mamba Sports Academy" specifically could NOT be verified this session, deliberately omitted rather than asserted). Second-act/dharma-isn't-fixed theme, added source to RESOURCES.md Tier 2. |
| `lessons/0026-you-could-leave-life-right-now.html` | Stage 9, Lesson 2. First use of Meditations for mortality specifically (2.11, verified). Explicit caveat distinguishing deliberate memento mori practice from anxious rumination — added given the psychological weight of the topic. |
| `lessons/0027-what-it-was-always-for.html` | Stage 9, Lesson 3 (closing). Gita's lokasangraha (3.20, 3.25, verified) as purpose after personal stakes fall away. Directly returns to Lesson 6's "what is excellence for" question, asking whether the user's answer has moved after Stages 3–9's lived material. **Stage 9 complete (3 lessons).** |

| `lessons/0028-the-operating-system.html` | Stage 10, Lesson 1. Pure synthesis/retrieval — the brief's 10 operating-system principles, each pointed back to the specific stage/lesson it was built in, with a single combined journal for the user's own one-line answers to all 10. No new research. |
| `lessons/0029-the-manifesto.html` | Stage 10, Lesson 2 (final). The capstone artifact — 12-question interactive builder (new `.manifesto-doc`/`.manifesto-form` component in `assets/style.css`, print-friendly, styled distinctly from other practice-cards since it's meant to be reread/screenshotted long-term) generating a formatted, personal Manifesto from the brief's Section 12 questions. Closes by explicitly framing this as a foundation, not a finished project — invites the user back for anything future life raises that the 10 stages didn't anticipate. **Stage 10 complete (2 lessons). Curriculum core arc (all 10 stages, 29 lessons) complete.** |

## Curriculum status: core arc complete (2026-08-14)

All 10 stages built across 4 sessions (29 lessons total). What exists now: MISSION.md, tiered RESOURCES.md (~35 sourced entries, every claim verified via web search before writing — nothing was written from parametric memory), a glossary spanning Sanskrit/Greek/Japanese/psychological vocabulary, a Dark Side Checklist reference doc, and a Manifesto-generating capstone lesson.

**What's NOT done, and shouldn't be assumed done:** the user's actual engagement with any of it. Journal entries live in each lesson's own localStorage and aren't visible to the teacher — there's no way to confirm from here whether lessons were read, reflections written, or the Manifesto actually generated. Per the pacing note from sessions 2–3 (confirmed resolved in session 4: user wants back-to-back building, no pacing check-ins), lessons were built continuously across 4 sessions without waiting for confirmation of engagement — that was the user's explicit, confirmed preference, not an assumption to keep making silently forever if the pattern ever seems to stop serving them.

## Gap-filling pass (2026-08-14, session 5)

User caught a real miss: after declaring the core arc "complete," a systematic re-check against the original brief found substantial gaps that had been silently dropped rather than deliberately scoped out. Lesson for future sessions: **"the core arc is complete" was premature** — should have run this same audit before declaring completion, not after being asked to check. Confirmed gaps and fixes:

- **Section 4 case studies** (biggest miss) — zero use of any named figure besides Kobe/Musashi/Goggins, and zero Indian figures despite an explicit "significant attention" ask. Fixed: `reference/case-studies.html` (Ramanujan, Kalam, Tendulkar, Feynman, Beethoven, Munger — 3 of 6 Indian) + Lesson 30 (extends Stage 5).
- **Grit and Mindset** sourced since session 1, never taught. Fixed: Lesson 31 (extends Stage 5).
- **Sleep/recovery** — explicitly requested, not covered. Fixed: Lesson 32 (extends Stage 3) — Mah et al. Stanford basketball sleep-extension study.
- **Delayed gratification** — not covered at all. Fixed: Lesson 33 (extends Stage 4) — Watts et al.'s marshmallow-test replication, presented as a genuinely live methodological debate (Duckworth's counter-argument included, not just "debunked").
- **Zen and Taoism** — Buddhism got a lesson, Zen didn't; Tao Te Ching sourced but unused. Fixed: Lesson 34 (extends Stage 2) — mushin's real convergence with Beilock's choking research, wu wei's real tension with tapas, held honestly rather than synthesized away.
- **Kobe: childhood, criticism, leadership, evolution, misconceptions** — never got dedicated treatment. Fixed: Lesson 35 (extends Stage 8) — his Italian childhood, the documented early-career "toxic culture" reputation (not just intensity — real cost, players avoiding the Lakers), and the 2008–09 shift.

**Curriculum is now 35 lessons.** Stage lesson counts: 1→2, 2→5, 3→4, 4→4, 5→5, 6→3, 7→3, 8→4, 9→3, 10→2.

**Still not covered**, lower priority, flagged for future sessions if the user wants them: self-efficacy (Bandura), goal-setting theory (Locke & Latham), a dedicated "how to handle success" practice (failure got Lesson 18's review protocol, success has no equivalent), Jain philosophy ("where relevant" — brief's own hedge suggests this is genuinely optional), Socrates and Plato specifically (Aristotle covered virtue ethics; Socratic method itself wasn't touched).

## Second gap-filling pass (2026-08-14, session 5 continued)

User asked "anything left any gaps" a second time — right to ask again; the first pass wasn't actually exhaustive. Ran a full grep-verified audit (not just memory) against every remaining brief item. Found and fixed four more real gaps:

- **Self-efficacy (Bandura) + goal-setting theory (Locke & Latham)** — Lesson 36 (extends Stage 4).
- **Handling success** — failure had Lesson 18's review protocol, success had nothing. Lesson 37 (extends Stage 6): hedonic adaptation and the arrival fallacy, framed as the empirical companion to Lesson 1's philosophical case against validation-orientation.
- **Memory/retrieval practice** — explicitly named in the brief, never covered. Lesson 38 (extends Stage 5): the testing effect, named explicitly as *why this workspace's own lessons end in journal prompts instead of summaries* — ties the curriculum's own design back to its content.
- **Socrates** — only hit in a grep search was a stray `plato.stanford.edu` URL; never actually covered. Lesson 39 (extends Stage 2): the elenchus, named explicitly as the structural template behind every "confront" callout across all 39 lessons.

**Curriculum is now 39 lessons.** Updated stage counts: 1→2, 2→6, 3→4, 4→5, 5→6, 6→4, 7→3, 8→4, 9→3, 10→2.

**Deliberately still not covered — treated as out of scope, not oversights:** Jain philosophy (the brief's own phrasing hedged this as "where relevant," a signal it's optional) and Plato's theory of forms specifically (a deep metaphysical topic with less direct daily-practice application than what Socrates/Aristotle already cover — Plato's ethical dialogues, via Socrates, are covered in Lesson 39). If the user wants either closed anyway, that's a real ask, not implied by anything here.

## Lesson for future sessions

Two audits were needed because the first "complete" declaration wasn't actually checked against the brief — it was checked against a mental model of the brief. **Before declaring anything complete going forward: grep the actual lesson files against the actual brief's named concepts, don't rely on recall of what was planned.** The second audit (this one) did that and found real gaps the first pass, done from memory, missed entirely (self-efficacy, goal-setting, memory, Socrates — none of these were even on the "still not covered" list from the first pass, meaning that list itself was incomplete).

## Third pass: structural gaps, not topic gaps (2026-08-14, session 5 continued again)

User asked "any major chapter left" — a different question than "any topic missing," and it surfaced two genuinely structural gaps the first two topic-level audits missed because grepping for keywords doesn't catch a missing *system*:

- **The Wisdom pillar** (of this skill's own Knowledge/Skills/Wisdom philosophy) had been stalled since session 1 — `RESOURCES.md`'s "Gaps" section explicitly deferred both community asks ("worth asking once Stage 2–3 exist," "once Stage 5 exists") and neither was ever revisited even after those stages were long since built. Resolved: added Chinmaya Mission (1,000+ weekly Gita/Vedanta study groups worldwide, resolves the karma-yoga-practice gap) and r/Ultralearning (deliberate-practice community, though its current activity level is flagged as unverified rather than asserted) to RESOURCES.md's Wisdom section.
- **Weekly and monthly practice cadence** — the brief explicitly asked for daily/weekly/monthly practices; only daily (Lesson 9) got built. Resolved: Lesson 40 (extends Stage 10) — a scheduled weekly check (dark-side self-audit + unprocessed wins/failures) and monthly Manifesto reread-and-revise ritual, explicitly framed as what actually makes multi-decade consistency survivable per Lesson 10's own context-cue research.

**Curriculum is now 40 lessons.** Stage 10 → 3 lessons.

## Lesson for future sessions (updated)

Three different audit *types* were needed, not just three passes of the same check: (1) grep lesson content against named brief concepts — catches missing topics; (2) re-read the brief's own structural asks (cadences, pillars, "for decades") against what actually exists — catches missing systems, which keyword search won't surface since a system's absence doesn't grep for anything. Before declaring complete again, run both types, not just one.

## Next up

No queued lesson. Three full audit passes are done (topics, topics again, structure). Future sessions should be user-driven: revisiting/deepening a stage, working through Tier 2/3 resources, applying the Manifesto to real life, closing the Jain/Plato items if actually wanted, or extending past the original 10 stages.

## Pacing preference (confirmed 2026-08-13, session 4)

Asked directly after three straight "continue"s: user wants lessons **built back-to-back, no confirmation needed between them** — they'll read and do the journal reflections at their own pace outside the chat. Stop asking about pacing going forward; treat "continue" at face value every time. (This resolves the pacing note from sessions 2–3 below, kept for history.)

## Session log

### 2026-08-13 — Session 1 (cold start from detailed brief)
Built workspace from scratch: MISSION.md, RESOURCES.md (6 web searches to verify translations/editions/research citations before writing), NOTES.md, assets/style.css, Lesson 1, glossary seed, index.html.

### 2026-08-13 — Session 2 (`/loop continue`, single iteration)
Added Epictetus's Enchiridion to RESOURCES.md Tier 2 (1 web search to verify translation options), built Lesson 2 (dichotomy of control / responsibility), updated glossary and index to mark Stage 1 complete. Loop stopped deliberately after one iteration.

### 2026-08-13 — Session 3 (plain "continue")
Added Aristotle's Nicomachean Ethics to RESOURCES.md Tier 1 (2 web searches: translation choice, and verifying/debunking the "we are what we repeatedly do" misattribution plus the authentic "one swallow" quote before using either). Built Lesson 3, opening Stage 2. Updated glossary and index.
