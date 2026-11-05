import{u as a,j as e,M as o,C as n,a as l,A as c}from"./iframe-BaE-r_tL.js";import{B as t,D as d,V as h,S as x,W as j,R as m,a as g,b as u,I as p,c as b,F as f,T as w}from"./Badge.stories-TvnZCHJG.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D8yVe6yW.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Badge-DXeWmLrm.js";function r(i){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
`,e.jsx(s.h1,{id:"badge",children:"Badge"}),`
`,e.jsxs(s.p,{children:[`A compact, non-interactive label that surfaces content metadata, status or editorial categorisation on thumbnails, cards and headers.
It has four visual styles, three sizes, three font weights, two corner radii, an optional status dot and an optional leading icon.
Spec reviewed against Figma `,e.jsx(s.code,{children:"Badge"}),` (6:10067, doc frame 2:12332, page "Badges, Labels, Filters, Chips, Tags").
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Badge } from '@henriquemenezzo/dailywire-ds/components/badge'
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Badge>New</Badge>
<Badge variant="translucid" size="md" weight="semibold" radius="sm" statusDot>Live</Badge>
<Badge variant="subtle" size="sm" leadingIcon="calendar-up">Coming soon</Badge>
`})}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(l,{of:d}),`
`,e.jsxs(s.p,{children:["The defaults (",e.jsx(s.code,{children:'variant="brand"'}),", ",e.jsx(s.code,{children:'size="xsm"'}),", ",e.jsx(s.code,{children:'weight="regular"'}),", ",e.jsx(s.code,{children:'radius="none"'}),`) match the Figma component defaults.
Badge renders a `,e.jsx(s.code,{children:"<span>"}),": it has no interaction. If a badge needs to act, put it inside the interactive parent (card, link, button)."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.p,{children:["Four styles (Figma ",e.jsx(s.code,{children:"style"}),"):"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Brand"})," — brand red surface, light label. Editorial highlights."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Inverse"})," — light surface, dark label, in both themes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Translucid"})," — dark glass (",e.jsx(s.code,{children:"--color-overlay-neutral-strong-default"})," + background blur), light label, in both themes. Made to sit on imagery."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Subtle"})," — neutral fill that follows the theme."]}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(s.p,{children:["Three sizes; the height hugs the label: ",e.jsx(s.strong,{children:"xsm"})," 18px (",e.jsx(s.code,{children:"label/*/xs"}),", 10px), ",e.jsx(s.strong,{children:"sm"})," 20px (",e.jsx(s.code,{children:"label/*/sm"}),", 12px), ",e.jsx(s.strong,{children:"md"})," 26px (",e.jsx(s.code,{children:"label/*/md"}),`, 14px).
With a status dot or an icon (16px each) the badge grows to 24 / 24 / 28px, as the Figma auto layout does.`]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"weights",children:"Weights"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"regular"})," (400), ",e.jsx(s.code,{children:"medium"})," (500) and ",e.jsx(s.code,{children:"semibold"})," (600), the ",e.jsx(s.code,{children:"label/400 · 500 · 600"})," text styles."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"border-radius",children:"Border radius"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"none"})," (square) or ",e.jsx(s.code,{children:"sm"})," (",e.jsx(s.code,{children:"--border-radius-sm"}),", 4px). Figma draws ",e.jsx(s.code,{children:"sm"})," only for sizes ",e.jsx(s.strong,{children:"sm"})," and ",e.jsx(s.strong,{children:"md"}),"; ",e.jsx(s.code,{children:'size="xsm"'})," always renders square (a dev warning is logged if ",e.jsx(s.code,{children:'radius="sm"'})," is passed)."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"status-dot-and-icon",children:"Status dot and icon"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Status dot"})," (Figma ",e.jsx(s.code,{children:"Show Status Dot"}),", ",e.jsx(s.code,{children:"StatusDot / live / md"}),"): a 16px box with an 8px dot, before the label. It is decorative (",e.jsx(s.code,{children:"aria-hidden"}),'), so the label must say what it means ("Live", "New").']}),`
`,e.jsx(n,{of:g}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Leading icon"})," (Figma ",e.jsx(s.code,{children:"Show left icon"}),", ",e.jsx(s.code,{children:"utility / Size=sm"}),"): a 16px glyph after the dot and before the label. The Figma default glyph is ",e.jsx(s.code,{children:"calendar-up"}),"; any catalog icon works."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Figma binds the icon (and the brand dot) to theme-flipping icon tokens that lose contrast in Light mode. The web component pairs them with the label color instead: always-light on brand and translucid, always-dark on inverse, neutral-bold on subtle. In Dark mode the result equals the Figma rendering."}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick style, size, weight, radius, status dot and icon. The badge is drawn at 2× with its real measurements; the panel lists the tokens that apply — hover a token to see where it acts."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["Badge is a static display element: Figma draws ",e.jsx(s.strong,{children:"no hover, pressed, focus or disabled"}),` states, so none are implemented.
This grid shows every style × radius × weight, each with the status dot and icon off and on. Use the `,e.jsx(s.code,{children:"size"})," control to switch sizes."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"full-matrix",children:"Full matrix"}),`
`,e.jsx(s.p,{children:"Every size × style × weight (radius none), as laid out in the Figma component set:"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:[`| Requirement | Implementation |
|---|---|
| Semantics | Plain `,e.jsx(s.code,{children:"<span>"}),` with visible text; not focusable, no role |
| Status dot | `,e.jsx(s.code,{children:'aria-hidden="true"'}),`; meaning must be in the label |
| Icon | `,e.jsx(s.code,{children:'aria-hidden="true"'}),` (decorative) |
| Contrast | Label and icon colors come from paired text / icon tokens on each surface |
| Zoom | No fixed height: padding + `,e.jsx(s.code,{children:"--line-height-100"})," let the badge grow with the text |"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"Badge.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(c,{of:t}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"variant"})," | ",e.jsx(s.code,{children:"'brand' \\| 'inverse' \\| 'translucid' \\| 'subtle'"})," | ",e.jsx(s.code,{children:"'brand'"})," | Visual style (Figma ",e.jsx(s.code,{children:"style"}),`) |
| `,e.jsx(s.code,{children:"size"})," | ",e.jsx(s.code,{children:"'xsm' \\| 'sm' \\| 'md'"})," | ",e.jsx(s.code,{children:"'xsm'"}),` | 18 / 20 / 26 px tall |
| `,e.jsx(s.code,{children:"weight"})," | ",e.jsx(s.code,{children:"'regular' \\| 'medium' \\| 'semibold'"})," | ",e.jsx(s.code,{children:"'regular'"}),` | Label font weight |
| `,e.jsx(s.code,{children:"radius"})," | ",e.jsx(s.code,{children:"'none' \\| 'sm'"})," | ",e.jsx(s.code,{children:"'none'"})," | Corner radius; ",e.jsx(s.code,{children:"xsm"})," is always ",e.jsx(s.code,{children:"none"}),` |
| `,e.jsx(s.code,{children:"statusDot"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"}),` | Shows the 8px status dot before the label |
| `,e.jsx(s.code,{children:"leadingIcon"})," | ",e.jsx(s.code,{children:"IconName"}),` | — | 16px icon before the label |
| `,e.jsx(s.code,{children:"children"})," | ",e.jsx(s.code,{children:"ReactNode"}),` | — | Label text |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<span>"})," attributes via spread (",e.jsx(s.code,{children:"id"}),", ",e.jsx(s.code,{children:"title"}),", ",e.jsx(s.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function T(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{T as default};
