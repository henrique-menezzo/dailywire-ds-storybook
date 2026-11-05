import{u as i,j as e,M as a,C as r,A as d}from"./iframe-BaE-r_tL.js";import{L as o,D as l,C as c,I as h,a as x,S as j,T as p}from"./Loader.stories-FfrVLN4S.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";function t(n){const s={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o}),`
`,e.jsx(s.h1,{id:"loader",children:"Loader"}),`
`,e.jsx(s.p,{children:`The system's indeterminate loading indicator: three dots that signal work in progress without implying how long it will take.
It is designed to be dropped inside other components (buttons, players, lists) rather than used on its own.
Nothing moves — the dots sit at fixed positions and only their opacity animates, a highlight travelling left to right — so it never shifts the surrounding layout.`}),`
`,e.jsxs(s.p,{children:["Spec reviewed against Figma ",e.jsx(s.code,{children:"Loader / Dots"}),` (13455:15617, doc frame 13529:213291), 9 variants: Color × Frame.
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Loader } from '@henriquemenezzo/dailywire-ds/components/loader'
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Loader label="Loading episodes" />
<Loader color="always-light" label="Loading video" />
`})}),`
`,e.jsxs(s.p,{children:["The root is a ",e.jsx(s.code,{children:'role="status"'})," region; ",e.jsx(s.code,{children:"label"})," is announced to screen readers and hidden visually. The dots are ",e.jsx(s.code,{children:"aria-hidden"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default"})," — ",e.jsx(s.code,{children:"icon/neutral/bold"}),"; follows the theme (dark dots in Light, light dots in Dark)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Always light"})," — ",e.jsx(s.code,{children:"icon/always/light"}),"; on imagery, video or brand surfaces."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Inverse"})," — ",e.jsx(s.code,{children:"icon/inverse/bold"}),"; on inverse surfaces (e.g. inside a primary button)."]}),`
`]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"animation",children:"Animation"}),`
`,e.jsxs(s.p,{children:["Figma prototype: ",e.jsx(s.em,{children:"After delay 10ms → Smart Animate 280ms, ease-in-out"}),", Frame 1 → 2 → 3 → 1. One loop is 3 × (10 + 280) = ",e.jsx(s.strong,{children:"870ms"}),`; the lit dot is at opacity 1 and the others at 0.3.
Code uses one `,e.jsx(s.code,{children:"@keyframes"})," with the dots offset by −580ms / −290ms — the same curve as the ",e.jsx(s.code,{children:"Button"}),` loading state.
With `,e.jsx(s.code,{children:"prefers-reduced-motion: reduce"})," the loop slows to 2.6s."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick color and frame. The loader is drawn at 2× with its real measurements (36×16, 8px dots, 6px apart); the panel lists the tokens that apply."}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["Every Figma variant — Color × Frame 1 / 2 / 3 (frozen with ",e.jsx(s.code,{children:"data-frame"}),") — plus the running loop:"]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"Loader.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(d,{of:o}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"color"})," | ",e.jsx(s.code,{children:"'default' \\| 'always-light' \\| 'inverse'"})," | ",e.jsx(s.code,{children:"'default'"}),` | Dot color |
| `,e.jsx(s.code,{children:"label"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Loading'"}),` | Screen-reader text of the status region |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<span>"})," attributes via spread. ",e.jsx(s.code,{children:'data-frame="1" | "2" | "3"'})," freezes a Figma frame (docs / visual QA only)."]}),`
`]})]})}function k(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{k as default};
