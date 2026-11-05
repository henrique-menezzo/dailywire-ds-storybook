import{u as o,j as e,M as c,C as s,A as l}from"./iframe-BaE-r_tL.js";import{B as r,D as d,V as a,S as h,W as x,a as j,b as p,I as u,c as m,d as f,e as g,T as b}from"./Button.stories-BHIAbOI6.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D8yVe6yW.js";import"./ShowcaseBox-CvpXiMzv.js";import"./PlatformCodeTabs-C6Sz3Igl.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Button-D39Hxs63.js";function t(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsxs(n.p,{children:[`Daily Wire Design System button with six visual variants, three sizes, and support for icons, loading, and disabled states.
Spec reviewed against Figma `,e.jsx(n.code,{children:"Button"})," (7387:18485) — link is its own component (",e.jsx(n.code,{children:"Link"}),`).
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from '@henriquemenezzo/dailywire-ds/components/button'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.p,{children:"Six visual variants:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary"})," — highest contrast (inverse surface)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secondary"})," — outline."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tertiary"})," — neutral fill."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ghost"})," — text only."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Danger"})," — destructive actions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Brand"})," — brand red, for brand moments; not the default call to action."]}),`
`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Three sizes with matching text styles: ",e.jsx(n.strong,{children:"sm"})," 32px (",e.jsx(n.code,{children:"label/600/sm"}),"), ",e.jsx(n.strong,{children:"md"})," 48px (",e.jsx(n.code,{children:"label/600/md"}),"), ",e.jsx(n.strong,{children:"lg"})," 56px (",e.jsx(n.code,{children:"label/600/lg"}),`).
Includes rows with leading icons and icon-only examples.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"with-icons",children:"With Icons"}),`
`,e.jsx(n.p,{children:"Leading icon next to the label; works with the full icon catalog."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"icon-only",children:"Icon only"}),`
`,e.jsx(n.p,{children:"No label—icon only. The button becomes square."}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"loading",children:"Loading"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"Loader / Dots"}),": three 8px dots pulse in sequence (280ms, ease-in-out). The label is hidden visually and kept for screen readers."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Keyboard focus shows the same ring on every variant: ",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(n.code,{children:"--focus-ring-width"}),", with a transparent ",e.jsx(n.code,{children:"--focus-ring-offset"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick variant, state, size and icons. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Every variant in every state (hover, pressed and focus are forced for review):"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:"All variants in the disabled state."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"full-matrix",children:"Full matrix"}),`
`,e.jsx(n.p,{children:"All combinations of variant × size × state:"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"Button.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(l,{of:r}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'primary' \\| 'secondary' \\| 'tertiary' \\| 'ghost' \\| 'danger' \\| 'brand'"})," | ",e.jsx(n.code,{children:"'primary'"}),` | Visual variant |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'md' \\| 'lg'"})," | ",e.jsx(n.code,{children:"'md'"}),` | Button size (32/48/56 px) |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Button'"}),` | Button label text |
| `,e.jsx(n.code,{children:"showLabel"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Show or hide the label (icon-only when ",e.jsx(n.code,{children:"false"}),`) |
| `,e.jsx(n.code,{children:"leadingIcon"})," | ",e.jsx(n.code,{children:"IconName"}),` | — | Icon before the label |
| `,e.jsx(n.code,{children:"trailingIcon"})," | ",e.jsx(n.code,{children:"IconName"}),` | — | Icon after the label |
| `,e.jsx(n.code,{children:"isLoading"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Replaces content with the dots loader |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disables the button |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<button>"})," attributes via spread (",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function T(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{T as default};
