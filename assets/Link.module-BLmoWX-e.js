const n=`/* ==============================================
 * Link — Daily Wire Design System
 * Figma: Link Button (7797:24559), docs frame 8370:15678.
 * No container in any state: text color, optional underline and icons only.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.link {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  gap: var(--spacing-xs);
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: var(--default), sans-serif;
  /* label/400 text styles by default; [data-weight='semibold'] switches to label/600 */
  font-weight: var(--link-weight, var(--Regular));
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  text-align: inherit;
  text-decoration: none;
  /* Figma: On hover → Change to, Dissolve 400ms ease-out; no 400ms token, closest --duration-slow */
  transition: color var(--duration-slow) var(--easing-ease-out);

  color: var(--link-text);
}

/* ── Sizes (text styles label/400|600/sm · md · lg) ── */

.link[data-size='sm'] {
  font-size: var(--font-size-xs);
}

.link[data-size='md'] {
  font-size: var(--font-size-sm);
}

.link[data-size='lg'] {
  font-size: var(--font-size-md);
}

/* ── Weight ──────────────────────────────────── */

.link[data-weight='semibold'] {
  --link-weight: var(--Semibold);
}

/* ── Disabled ────────────────────────────────────
 * <a> cannot match :disabled, so anchors use [aria-disabled='true']; :disabled covers as="button".
 * Both outrank the style defaults below by specificity. They are declared first on purpose:
 * the docs token parser (_docs/CssTokens) only recognizes :disabled and would otherwise read the
 * [aria-disabled] selector as the default state. */

.link[data-variant='primary']:disabled,
.link[data-variant='primary'][aria-disabled='true'] {
  --link-text: var(--color-text-neutral-bold-disabled);
  --link-icon: var(--color-icon-neutral-bold-disabled);
}

.link[data-variant='secondary']:disabled,
.link[data-variant='secondary'][aria-disabled='true'] {
  --link-text: var(--color-text-neutral-subtlest-disabled);
  --link-icon: var(--color-icon-neutral-subtlest-disabled);
}

/* [data-state] forces hover / focus for docs and QA (States story) */

/* ── Style: Primary (neutral-bold) ───────────── */

.link[data-variant='primary'] {
  --link-text: var(--color-text-neutral-bold-default);
  --link-icon: var(--color-icon-neutral-bold-default);
}
.link[data-variant='primary']:hover:not(:disabled):not([aria-disabled='true']),
.link[data-variant='primary'][data-state='hover'] {
  --link-text: var(--color-text-neutral-bold-hovered);
  --link-icon: var(--color-icon-neutral-bold-hovered);
}
/* Figma binds the primary focused label to text/neutral/subtlest/selected (icon: icon/neutral/bold/selected) */
.link[data-variant='primary']:focus-visible,
.link[data-variant='primary'][data-state='focus'] {
  --link-text: var(--color-text-neutral-subtlest-selected);
  --link-icon: var(--color-icon-neutral-bold-selected);
}

/* ── Style: Secondary (neutral-subtlest) ─────── */

.link[data-variant='secondary'] {
  --link-text: var(--color-text-neutral-subtlest-default);
  --link-icon: var(--color-icon-neutral-subtlest-default);
}
.link[data-variant='secondary']:hover:not(:disabled):not([aria-disabled='true']),
.link[data-variant='secondary'][data-state='hover'] {
  --link-text: var(--color-text-neutral-subtlest-hovered);
  --link-icon: var(--color-icon-neutral-subtlest-hovered);
}
.link[data-variant='secondary']:focus-visible,
.link[data-variant='secondary'][data-state='focus'] {
  --link-text: var(--color-text-neutral-subtlest-selected);
  --link-icon: var(--color-icon-neutral-subtlest-selected);
}

/* ── Underline (label only, never under the icons) ── */

.link[data-underline='on'] .label {
  text-decoration-line: underline;
}

/* ── Focus ring: transparent offset, same ring on both styles ── */

.link:focus-visible,
.link[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
  border-radius: var(--border-radius-sm);
}

/* ── Disabled cursor ─────────────────────────── */

.link:disabled,
.link[aria-disabled='true'] {
  cursor: not-allowed;
}

.content {
  display: inline-flex;
  align-items: center;
  gap: inherit;
}

.icon {
  flex-shrink: 0;
  transition: color var(--duration-slow) var(--easing-ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .link,
  .icon {
    transition: none;
  }
}
`;export{n as l};
