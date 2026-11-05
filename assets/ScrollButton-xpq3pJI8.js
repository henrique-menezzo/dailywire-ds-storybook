import{u as c,j as e,M as i,C as t,A as l}from"./iframe-BaE-r_tL.js";import{S as o,D as d,O as a,L as h,a as x,I as j,T as p}from"./ScrollButton.stories-B2YDGd5g.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";function r(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(s.h1,{id:"scroll-button",children:"Scroll Button"}),`
`,e.jsxs(s.p,{children:[`Floating pill that brings the user back to the latest content, for example in a live chat or a feed.
Spec reviewed against Figma `,e.jsx(s.code,{children:"Scroll Button"}),` (1522:16829).
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Legacy source."})," Figma binds old variables (",e.jsx(s.code,{children:"Background/Light Container"})," #1f1f1f, ",e.jsx(s.code,{children:"Text/Default/Base"}),", ",e.jsx(s.code,{children:"Bases/Spacings/spacing-sm (8)"})," / ",e.jsx(s.code,{children:"spacing-lg (16)"}),", ",e.jsx(s.code,{children:"radius-pill"}),`).
They are mapped to `,e.jsx(s.code,{children:"--color-background-neutral-subtlest-default"}),", ",e.jsx(s.code,{children:"--color-text-neutral-bold-default"}),", ",e.jsx(s.code,{children:"--spacing-md"})," / ",e.jsx(s.code,{children:"--spacing-xl"})," and ",e.jsx(s.code,{children:"--border-radius-full"}),`.
The Figma shadow (4, 4, blur 16, black 40%) and background blur (90) have no token; the button uses `,e.jsx(s.code,{children:"--shadow-lg"})," and no blur."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { ScrollButton } from '@henriquemenezzo/dailywire-ds/components/scroll-button'
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(s.p,{children:"Floating over a list:"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"labels",children:"Labels"}),`
`,e.jsxs(s.p,{children:["The Figma ",e.jsx(s.code,{children:"Text"})," prop maps to ",e.jsx(s.code,{children:"label"}),"."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:["One size: 8 / 16 padding with ",e.jsx(s.code,{children:"body/600/sm"})," text (37px tall). An invisible area extends the touch target to ",e.jsx(s.code,{children:"--touch-target-min"})," (44px) without changing the pill."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["Figma draws only the default. Hover, pressed and disabled use the neutral-subtlest family (",e.jsx(s.code,{children:"--color-background-neutral-subtlest-hovered"})," / ",e.jsx(s.code,{children:"-pressed"})," / ",e.jsx(s.code,{children:"-disabled"}),`).
Hover, pressed and focus are forced for review:`]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(s.h3,{id:"focus",children:"Focus"}),`
`,e.jsxs(s.p,{children:["Keyboard focus shows the DS ring: ",e.jsx(s.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(s.code,{children:"--focus-ring-width"}),", with a transparent ",e.jsx(s.code,{children:"--focus-ring-offset"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick a state. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts."}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"ScrollButton.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(l,{of:o}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"label"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Scroll to latest'"})," | Button text (Figma prop ",e.jsx(s.code,{children:"Text"}),`) |
| `,e.jsx(s.code,{children:"disabled"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"}),` | Disables the button |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<button>"})," attributes via spread (",e.jsx(s.code,{children:"onClick"}),", ",e.jsx(s.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function w(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{w as default};
