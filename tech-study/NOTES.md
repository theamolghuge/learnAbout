# Notes

## Track B — Java + Spring Boot (5 YOE backend readiness)
User pasted a full 22-section Java/Spring/DevOps curriculum and asked to be taught it in order. Pacing turned out flexible — first asked for topics one at a time, then "continue and finish 2, 3, 4, 5", then "next 5 as well" to finish the rest. Batch however asked; don't assume one-topic-at-a-time is fixed.

**All 10 topics complete** as of this session — full roadmap and links in [MISSION.md](MISSION.md). Folders: `java/`, `sql-jdbc/`, `spring-boot/` (Core+Boot+REST), `spring-data-jpa/` (+Validation+Exceptions), `spring-security/` (+JWT), `testing/`, `devtools/` (Git+Maven+API tools), `docker-cloud/` (+CI/CD), `microservices-kafka/`, `system-design/` (+Kubernetes). Same 3-file format as Track A throughout (Notes / Interview Q&A / Quick Revision).

Track B is now in maintenance mode: no more new topics to build from the original curriculum. Future work here is likely revision, deeper dives into a specific subtopic, or mock-interview-style drilling — not new reference docs, unless the user names something the original list missed.

## Track A — JavaScript Stack

## Structure (9 files, 3 topics)

### JavaScript
1. [JavaScript Notes](javascript/reference/javascript-notes.html)
2. [Interview Q&A](javascript/reference/interview-qa.html)
3. [Quick Revision](javascript/reference/quick-revision.html)

### Node.js
1. [Node.js Notes](nodejs/reference/nodejs-notes.html)
2. [Interview Q&A](nodejs/reference/interview-qa.html)
3. [Quick Revision](nodejs/reference/quick-revision.html)

### React.js
1. [React.js Notes](reactjs/reference/reactjs-notes.html) — tiered guide (Tier 1 → 3) for senior Full Stack
2. [Interview Q&A](reactjs/reference/interview-qa.html)
3. [Quick Revision](reactjs/reference/quick-revision.html)

## Study order
1. **JavaScript** — follow [tiered study guide](javascript/reference/javascript-notes.html#study-guide): Tier 1 (must master) → Tier 2 → Tier 3
2. **Node.js** — follow [tiered study guide](nodejs/reference/nodejs-notes.html#study-guide): Event Loop ⭐, Streams, Express, Auth, SQL/Redis, distributed systems

### Node.js learning progression
V8/libuv → Event Loop ⭐ → EventEmitter → Streams ⭐ → Express/Middleware → REST → Auth → PostgreSQL/Transactions → Redis → Queues → Testing → Docker → Microservices/Kafka → System Design
3. **React.js** — hooks (useEffect ⭐), React Query, rendering, Next.js, architecture

### React learning progression
JSX → Components → Props → State → Events → Lists/Keys → useState → useEffect ⭐ → useRef → useMemo/useCallback → useContext → Custom Hooks → Forms → React Query → Redux → Rendering/Reconciliation → Performance → Suspense → SSR/RSC → Next.js → Fiber → MFE

### JavaScript learning progression
Fundamentals → Functions → Scope + Hoisting → Execution Context → Closures → this + call/apply/bind → Objects + Prototypes → ES6+ → Async (Promises → async/await → Event Loop ⭐) → DOM → Modules → Error Handling → Map/Set/Iterators → FP → Memory → Performance → Security → Design Patterns → V8/Engine

## How to study
1. Read each topic's **Notes** section by section
2. Practice **Interview Q&A** out loud
3. Before interview: **Quick Revision** only for relevant topics
