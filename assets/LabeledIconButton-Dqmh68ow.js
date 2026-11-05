import{u as c,j as e,M as d,C as s,A as t}from"./iframe-BaE-r_tL.js";import{L as i,D as l,E as a,I as h,S as x,a as j,K as u,T as b}from"./LabeledIconButton.stories-DF4LtyF_.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D8yVe6yW.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./LabeledIconButton-CKdeHl5r.js";function r(o){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(n.h1,{id:"labelediconbutton",children:"LabeledIconButton"}),`
`,e.jsxs(n.p,{children:[`A compact action that pairs an outlined icon circle with a short label to its right. Use it where an icon alone is not clear enough, but a full-width button would be too heavy (for example "Listen", "Watch", "Share" on a content card).
Spec reviewed against Figma `,e.jsx(n.code,{children:"Libeled Icon Button"})," (8202:43538, doc frame 8370:15111). It has a single ",e.jsx(n.code,{children:"state"}),` axis.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { LabeledIconButton } from '@henriquemenezzo/dailywire-ds/components/labeled-icon-button'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<LabeledIconButton icon="headphones" label="Listen" onClick={play} />
`})}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Circle"})," — the Figma ",e.jsx(n.code,{children:"Icon Button"})," (outline · xsm): 32px, ",e.jsx(n.code,{children:"--spacing-md"})," padding, 16px glyph (",e.jsx(n.code,{children:"--size-sm"}),"), 1px inside stroke, ",e.jsx(n.code,{children:"--border-radius-full"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," — text style ",e.jsx(n.code,{children:"label/600/sm"})," (",e.jsx(n.code,{children:"--font-size-xs"}),", ",e.jsx(n.code,{children:"--Semibold"}),", ",e.jsx(n.code,{children:"--line-height-100"}),"), single line."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gap"})," — ",e.jsx(n.code,{children:"--spacing-sm"})," (6px)."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The whole row is ",e.jsx(n.strong,{children:"one"})," ",e.jsx(n.code,{children:"<button>"}),". The circle is drawn inside it with the same tokens as ",e.jsx(n.code,{children:"IconButton"})," (outline) rather than nesting an ",e.jsx(n.code,{children:"IconButton"}),`, because a button cannot contain another button. Hover, press and focus apply to the unit: pointing at the label also fills the circle, and the focus ring wraps both.
The label is the accessible name, so no `,e.jsx(n.code,{children:"aria-label"})," is needed."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Keyboard focus draws ",e.jsx(n.code,{children:"--focus-ring-width"})," in ",e.jsx(n.code,{children:"--color-focus-info-bold-default"})," around the whole component, with a ",e.jsx(n.code,{children:"--focus-ring-offset"})," gap and ",e.jsx(n.code,{children:"--border-radius-sm"})," corners."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsxs(n.p,{children:["Pick a state. The component is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state (rows marked ",e.jsx(n.code,{children:"· circle"})," act on the icon circle) — hover a token to see where it acts."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Every Figma state (hover, pressed and focus are forced for review):"}),`
`,e.jsx(s,{of:x}),`
`,e.jsxs(n.p,{children:[`| State | Label | Circle fill | Circle stroke | Icon |
|---|---|---|---|---|
| Default | `,e.jsx(n.code,{children:"text-neutral-bold-default"})," | — | ",e.jsx(n.code,{children:"border-neutral-subtle-default"})," | ",e.jsx(n.code,{children:"icon-neutral-bold-default"}),` |
| Hover | `,e.jsx(n.code,{children:"text-neutral-bold-hovered"})," | ",e.jsx(n.code,{children:"background-neutral-bold-hovered"})," | ",e.jsx(n.code,{children:"border-neutral-bold-hovered"})," | ",e.jsx(n.code,{children:"icon-neutral-bold-default"}),` |
| Pressed | `,e.jsx(n.code,{children:"text-neutral-bold-pressed"})," | ",e.jsx(n.code,{children:"background-neutral-bold-pressed"})," | ",e.jsx(n.code,{children:"border-neutral-bold-pressed"})," | ",e.jsx(n.code,{children:"icon-neutral-bold-default"}),` |
| Focus | `,e.jsx(n.code,{children:"text-neutral-bold-default"})," | — | ",e.jsx(n.code,{children:"border-neutral-subtle-default"})," | ",e.jsx(n.code,{children:"icon-neutral-bold-default"}),` |
| Disabled | `,e.jsx(n.code,{children:"text-neutral-bold-disabled"})," | — | ",e.jsx(n.code,{children:"border-neutral-bold-disabled"})," | ",e.jsx(n.code,{children:"icon-neutral-bold-disabled"})," |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["Native ",e.jsx(n.code,{children:"disabled"})," plus ",e.jsx(n.code,{children:'aria-disabled="true"'}),"; clicks are ignored."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`| Requirement | Implementation |
|---|---|
| Accessible name | The visible `,e.jsx(n.code,{children:"label"}),` |
| Keyboard | Native `,e.jsx(n.code,{children:"<button>"}),": ",e.jsx(n.code,{children:"Tab"})," to focus, ",e.jsx(n.code,{children:"Space"})," / ",e.jsx(n.code,{children:"Enter"}),` to activate |
| Focus | `,e.jsx(n.code,{children:":focus-visible"}),` ring around the whole unit |
| Touch target | The row is 32px tall; on coarse pointers the hit area grows to `,e.jsx(n.code,{children:"--touch-target-min"}),` (44px) without changing layout |
| Motion | 300ms ease-out color transitions (`,e.jsx(n.code,{children:"--duration-slow"}),", ",e.jsx(n.code,{children:"--easing-ease-out"}),"), removed under ",e.jsx(n.code,{children:"prefers-reduced-motion"})," |"]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"LabeledIconButton.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(t,{of:i}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"icon"})," | ",e.jsx(n.code,{children:"IconName"}),` | — | Glyph inside the circle (required) |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"}),` | — | Visible label and accessible name (required) |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disables the button |
| `,e.jsx(n.code,{children:"type"})," | ",e.jsx(n.code,{children:"'button' \\| 'submit' \\| 'reset'"})," | ",e.jsx(n.code,{children:"'button'"})," | Native ",e.jsx(n.code,{children:"<button type>"}),` |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<button>"})," attributes via spread (",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function D(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{D as default};
