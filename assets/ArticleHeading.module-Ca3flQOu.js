const n=`/* ==============================================
 * ArticleHeading — Daily Wire Design System
 * Figma: Heading-Article-Content (7958:8107), doc frame 9022:21077, section "Article" (8413:56868).
 * state default | hover | pressed | focused × size xsm … xl × weight semibold | medium
 * × tone default | exclusive (80 variants). Text only: no container in any state but focus.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base (120% line height in every text style of the set) ── */

.heading {
  --ah-text: var(--color-text-neutral-bold-default);

  display: block;
  margin: 0;
  border-radius: var(--border-radius-sm);
  font-family: var(--default), sans-serif;
  font-weight: var(--ah-weight, var(--Semibold));
  line-height: var(--line-height-120);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  text-wrap: pretty;
  overflow-wrap: break-word;
  color: var(--ah-text);
  /* Figma: On hover → Change to, Dissolve 400ms ease-out; no 400ms token, closest --duration-slow */
  transition: color var(--duration-slow) var(--easing-ease-out);
}

/* ── Sizes ───────────────────────────────────────
 * xl = heading/600|500/lg · lg = heading/600|500/md · md = heading/600|500/sm
 * sm = heading/600|500/xs · xsm = title/600|500/sm */

.heading[data-size='xl'] {
  font-size: var(--font-size-2xl);
}

.heading[data-size='lg'] {
  font-size: var(--font-size-xl);
}

.heading[data-size='md'] {
  font-size: var(--font-size-lg);
}

.heading[data-size='sm'] {
  font-size: var(--font-size-md);
}

.heading[data-size='xsm'] {
  font-size: var(--font-size-sm);
}

/* ── Weight ──────────────────────────────────── */

.heading[data-weight='medium'] {
  --ah-weight: var(--Medium);
}

/* ── Tone: Exclusive (the …/exclusive text styles: serif family, tight tracking) ── */

.heading[data-variant='exclusive'] {
  font-family: var(--exclusive), serif;
  letter-spacing: calc(var(--letter-spacing-tight) * 1em);
}

/* ── Link ────────────────────────────────────── */

.link {
  display: block;
  border-radius: inherit;
  color: var(--ah-text);
  text-decoration: none;
  transition: color var(--duration-slow) var(--easing-ease-out);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story).
 * :where(a:hover) and :where(a:active) cover a heading without href inside a card that is one <a>. */

/* ── Hover ───────────────────────────────────── */

.link:hover,
.heading[data-state='hover'],
:where(a:hover) .heading {
  --ah-text: var(--color-text-neutral-bold-hovered);
}

/* ── Pressed ─────────────────────────────────── */

.link:active,
.heading[data-state='pressed'],
:where(a:active) .heading {
  --ah-text: var(--color-text-neutral-bold-pressed);
}

/* ── Focus: ring around the whole title block; text keeps its default color ── */

.link:focus-visible,
.heading[data-state='focus'] .link {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Stretched link: the <a> covers the nearest positioned ancestor (a card) ── */

.heading[data-stretched] .link::after {
  content: '';
  position: absolute;
  inset: 0;
}

/* ── Touch target ────────────────────────────── */
/* A one-line xsm title is ~17px tall. On touch screens the hit area grows to
 * --touch-target-min without changing layout (a stretched link already covers its card). */

@media (pointer: coarse) {
  .heading[data-linked]:not([data-stretched]) .link {
    position: relative;
  }

  .heading[data-linked]:not([data-stretched]) .link::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: max(100%, var(--touch-target-min));
    transform: translateY(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .heading,
  .link {
    transition: none;
  }
}
`;export{n as a};
