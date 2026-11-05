import{u as i,j as e,M as d,C as o,A as t}from"./iframe-BaE-r_tL.js";import{O as c,D as l,A as h,T as a,C as x,S as j,I as u,a as p}from"./OttButton.stories-D5nFTZ6J.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D8yVe6yW.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";function r(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(n.h1,{id:"ott-button",children:"OTT Button"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"TV / OTT (10-foot UI)."})," Legacy button for the TV apps, driven by a remote's D-pad. Do not use it on web or mobile screens; use ",e.jsx(n.code,{children:"Button"})," there."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Large action button with an optional icon, host picture, trailing icon and watch-progress bar.
Spec reviewed against Figma `,e.jsx(n.code,{children:"Ott_Button"})," (12235:151805): ",e.jsx(n.code,{children:"Type"})," Primary / Secondary × ",e.jsx(n.code,{children:"State"}),` Default / Hover / Inactive / Focus.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Legacy source."})," The Figma component binds only old ",e.jsx(n.code,{children:"[Old] 2.0 Semantic Color"}),` variables (dark-only, one mode) and uses raw values for padding (22 / 24), gap (16), radius (8), height (72) and type (20 / 22px).
Mapping used here:`]}),`
`,e.jsxs(n.p,{children:[`| Figma | Token |
|---|---|
| `,e.jsx(n.code,{children:"Background/Light Container"})," #1f1f1f | ",e.jsx(n.code,{children:"--color-background-neutral-subtlest-default"}),` |
| `,e.jsx(n.code,{children:"Background/Container"})," #151515 | ",e.jsx(n.code,{children:"--color-background-neutral-subtle-default"}),` |
| `,e.jsx(n.code,{children:"Background/Inverse Base"})," #fff | ",e.jsx(n.code,{children:"--color-background-inverse-bold-default"}),` |
| `,e.jsx(n.code,{children:"Text/Default/Base"})," #fff | ",e.jsx(n.code,{children:"--color-text-neutral-bold-default"}),` |
| `,e.jsx(n.code,{children:"Text/Default/Strong"})," #8f8f8f | ",e.jsx(n.code,{children:"--color-text-neutral-subtlest-default"}),` |
| `,e.jsx(n.code,{children:"Text/Default/Subtle"})," #525252 | ",e.jsx(n.code,{children:"--color-text-neutral-bold-disabled"}),` |
| `,e.jsx(n.code,{children:"Text/Inverse/Base"})," #0a0909 | ",e.jsx(n.code,{children:"--color-text-inverse-bold-default"}),` |
| `,e.jsx(n.code,{children:"Icon/Strong"})," · ",e.jsx(n.code,{children:"Icon/Solid"})," · ",e.jsx(n.code,{children:"Icon/Soft"})," at 30% opacity | ",e.jsx(n.code,{children:"--color-icon-neutral-subtlest-default"})," · ",e.jsx(n.code,{children:"--color-icon-neutral-subtlest-disabled"})," · ",e.jsx(n.code,{children:"--color-icon-inverse-subtlest-default"}),` |
| `,e.jsx(n.code,{children:"Stroke/Default/Strong"})," #8f8f8f · ",e.jsx(n.code,{children:"Stroke/Default/Subtle"})," #525252 | ",e.jsx(n.code,{children:"--color-border-neutral-subtlest-default"})," · ",e.jsx(n.code,{children:"--color-border-neutral-subtle-default"}),` |
| `,e.jsx(n.code,{children:"Stroke/Default/Accent"})," (progress) | ",e.jsx(n.code,{children:"--color-border-brand-bold-default"}),` |
| padding 22 / 24, gap 16, radius 8, height 72 | `,e.jsx(n.code,{children:"--primitive-dimension-dimension-5-5"})," / ",e.jsx(n.code,{children:"--spacing-3xl"}),", ",e.jsx(n.code,{children:"--spacing-xl"}),", ",e.jsx(n.code,{children:"--border-radius-md"}),", ",e.jsx(n.code,{children:"--primitive-dimension-dimension-18"}),` |
| icon 32 / 28 | `,e.jsx(n.code,{children:"--size-xl"})," / ",e.jsx(n.code,{children:"--primitive-dimension-dimension-7"}),` |
| text 20 SemiBold, 130%, 4% | `,e.jsx(n.code,{children:"--font-size-lg"}),", ",e.jsx(n.code,{children:"--Semibold"}),", ",e.jsx(n.code,{children:"--line-height-120"}),", ",e.jsx(n.code,{children:"--letter-spacing-default"})," |"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { OttButton } from '@henriquemenezzo/dailywire-ds/components/ott-button'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary"})," — no fill; text and icon only until focused or hovered."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secondary"})," — filled surface."]}),`
`]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:["Figma booleans map to props: ",e.jsx(n.code,{children:"Show Text"})," → ",e.jsx(n.code,{children:"showLabel"}),", ",e.jsx(n.code,{children:"Show Icon"})," → ",e.jsx(n.code,{children:"showIcon"})," (+ ",e.jsx(n.code,{children:"icon"}),"), ",e.jsx(n.code,{children:"Show Right Icon"})," → ",e.jsx(n.code,{children:"showTrailingIcon"})," (+ ",e.jsx(n.code,{children:"trailingIcon"}),"), ",e.jsx(n.code,{children:"Show Host"})," → ",e.jsx(n.code,{children:"hostImageSrc"}),", ",e.jsx(n.code,{children:"Show Progress Bar"})," → ",e.jsx(n.code,{children:"progress"}),` (0–1).
Without visible text, pass `,e.jsx(n.code,{children:"aria-label"}),". The progress bar is decorative; put the progress in the label when it matters."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n.p,{children:`One size: 72px tall, icon 32px (Primary) or 28px (Secondary).
Figma's Hover variant also grows the button (Primary padding 24 / 26, icon 35px, text 22px); there are no tokens for those values, so hover changes colors only.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:["| Figma ",e.jsx(n.code,{children:"State"}),` | Web |
|---|---|
| Default | default |
| Hover | `,e.jsx(n.code,{children:":hover"}),` — inverse surface (white in dark theme) |
| Focus | `,e.jsx(n.code,{children:":focus-visible"}),` — Figma's 1px border plus the DS focus ring |
| Inactive | `,e.jsx(n.code,{children:"isInactive"}),` — dimmed while the TV focus is elsewhere; still focusable |
| — | `,e.jsx(n.code,{children:"disabled"})," — same look as Inactive, not focusable |"]}),`
`,e.jsx(n.p,{children:"Hover and focus are forced for review:"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick type, state and content. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts."}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"OttButton.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'primary' \\| 'secondary'"})," | ",e.jsx(n.code,{children:"'primary'"})," | Figma ",e.jsx(n.code,{children:"Type"}),` |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Text'"})," | Button text, shown in caps (Figma ",e.jsx(n.code,{children:"Text"}),`) |
| `,e.jsx(n.code,{children:"showLabel"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show Text"}),` |
| `,e.jsx(n.code,{children:"icon"})," | ",e.jsx(n.code,{children:"IconName"})," | ",e.jsx(n.code,{children:"'box-multiple'"})," | Leading icon (Figma ",e.jsx(n.code,{children:"Default Icon"}),`, "Episodes_and_more") |
| `,e.jsx(n.code,{children:"showIcon"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show Icon"}),` |
| `,e.jsx(n.code,{children:"trailingIcon"})," | ",e.jsx(n.code,{children:"IconName"})," | ",e.jsx(n.code,{children:"'lock'"})," | Trailing icon (Figma ",e.jsx(n.code,{children:"Right Icon"}),`) |
| `,e.jsx(n.code,{children:"showTrailingIcon"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | Figma ",e.jsx(n.code,{children:"Show Right Icon"}),` |
| `,e.jsx(n.code,{children:"hostImageSrc"})," | ",e.jsx(n.code,{children:"string"})," | — | Round host picture (Figma ",e.jsx(n.code,{children:"Show Host"}),`) |
| `,e.jsx(n.code,{children:"hostImageAlt"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"''"}),` | Alt text for the host picture |
| `,e.jsx(n.code,{children:"progress"})," | ",e.jsx(n.code,{children:"number"})," | — | Watch progress 0–1; shows the bar (Figma ",e.jsx(n.code,{children:"Show Progress Bar"}),`) |
| `,e.jsx(n.code,{children:"isInactive"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | Figma ",e.jsx(n.code,{children:"State = Inactive"}),` |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disables the button |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<button>"})," attributes via spread (",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function k(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{k as default};
