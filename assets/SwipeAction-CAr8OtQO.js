import{u as r,j as e,M as c,C as o,A as d}from"./iframe-BaE-r_tL.js";import{S as t,D as a,R as h,C as l,a as x,I as j,T as p}from"./SwipeAction.stories-CXD3o6G-.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D8yVe6yW.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:t}),`
`,e.jsx(n.h1,{id:"swipe-action",children:"Swipe Action"}),`
`,e.jsxs(n.p,{children:["The action revealed behind a list row when the user swipes it (for example ",e.jsx(n.strong,{children:"Remove"}),`).
This component is only the button; the swipe gesture belongs to the list that hosts it.
Spec reviewed against Figma `,e.jsx(n.code,{children:"Swipe Action"}),` (99:8040, Section 1 · 13898:9752).
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Legacy source."})," Figma binds the old ",e.jsx(n.code,{children:"[Old] 2.0 Semantic Color"})," variable ",e.jsx(n.code,{children:"Background/Accent"}),` (#db3d3b) and raw text values.
They are mapped to the closest DS tokens: brand bold background, `,e.jsx(n.code,{children:"--font-size-xs"}),", ",e.jsx(n.code,{children:"--Semibold"}),", ",e.jsx(n.code,{children:"--line-height-120"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SwipeAction } from '@henriquemenezzo/dailywire-ds/components/swipe-action'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.p,{children:"In context — the action sits at the end of a row and takes the row's height:"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsx(n.p,{children:"Figma draws a caps label only. Its vertical auto layout (8px gap) also takes an optional icon above the label."}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:["One size. Figma is 92 × 92; there is no 92px token, so the button uses ",e.jsx(n.code,{children:"--primitive-dimension-dimension-24"})," (96px) as minimum width and height and grows with the row."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:["Figma draws only the default. Hover, pressed and disabled use the brand-bold family (",e.jsx(n.code,{children:"--color-background-brand-bold-hovered"})," / ",e.jsx(n.code,{children:"-pressed"})," / ",e.jsx(n.code,{children:"-disabled"}),`), like Button's brand variant.
Hover, pressed and focus are forced for review:`]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Keyboard focus shows the DS ring: ",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(n.code,{children:"--focus-ring-width"}),", with a transparent ",e.jsx(n.code,{children:"--focus-ring-offset"}),`.
If the row clips its overflow, leave room for the ring.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick the state and content. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts."}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"SwipeAction.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(d,{of:t}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Remove'"}),` | Action text, shown in caps (Figma layer "Action Copy") |
| `,e.jsx(n.code,{children:"icon"})," | ",e.jsx(n.code,{children:"IconName"}),` | — | Optional icon above the label |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disables the action |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<button>"})," attributes via spread (",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function y(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{y as default};
