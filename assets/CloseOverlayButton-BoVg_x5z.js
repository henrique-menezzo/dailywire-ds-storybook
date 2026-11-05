import{u as i,j as e,M as c,C as o,A as l}from"./iframe-BaE-r_tL.js";import{C as r,D as a,O as d,S as h,I as x,T as j}from"./CloseOverlayButton.stories-BYB_b0Hp.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Icon-D8yVe6yW.js";function t(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(s.h1,{id:"close-overlay-button",children:"Close Overlay Button"}),`
`,e.jsxs(s.p,{children:[`Round, icon-only button that closes an overlay (player, sheet, image viewer).
Its accessible name defaults to `,e.jsx(s.strong,{children:'"Close"'}),"; pass a more specific ",e.jsx(s.code,{children:"aria-label"}),` when the page has several overlays (for example "Close player").
Spec reviewed against Figma `,e.jsx(s.code,{children:"Close Overlay"}),` (1649:2227).
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Legacy source."})," Figma binds old variables: ",e.jsx(s.code,{children:"Background/Container"})," (#151515) → ",e.jsx(s.code,{children:"--color-background-neutral-subtle-default"}),`;
the `,e.jsx(s.code,{children:"Close_24px"})," icon is ",e.jsx(s.code,{children:"Icon/Strong"})," (white) at 30% opacity → ",e.jsx(s.code,{children:"--color-icon-neutral-subtlest-default"}),` (no opacity token);
`,e.jsx(s.code,{children:"radius-pill"})," → ",e.jsx(s.code,{children:"--border-radius-full"}),". The shadow (4, 4, blur 16, black 40%) and background blur (90) have no token; it uses ",e.jsx(s.code,{children:"--shadow-lg"})," and no blur."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { CloseOverlayButton } from '@henriquemenezzo/dailywire-ds/components/close-overlay-button'
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(s.p,{children:"On an overlay:"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:["One size: 56 × 56 (16px padding around the 24px ",e.jsx(s.code,{children:"x"})," icon). Larger than ",e.jsx(s.code,{children:"--touch-target-min"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsx(s.p,{children:`Figma draws only the default. Hover, pressed and disabled use the neutral-subtle family for the surface and the neutral-subtlest family for the icon.
Hover, pressed and focus are forced for review:`}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(s.h3,{id:"focus",children:"Focus"}),`
`,e.jsxs(s.p,{children:["Keyboard focus shows the DS ring: ",e.jsx(s.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(s.code,{children:"--focus-ring-width"}),", with a transparent ",e.jsx(s.code,{children:"--focus-ring-offset"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick a state. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts."}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"CloseOverlayButton.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(l,{of:r}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"aria-label"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Close'"}),` | Accessible name (the button only shows an icon) |
| `,e.jsx(s.code,{children:"disabled"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"}),` | Disables the button |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<button>"})," attributes via spread (",e.jsx(s.code,{children:"onClick"}),", ",e.jsx(s.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function v(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{v as default};
