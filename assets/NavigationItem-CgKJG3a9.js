import{u as r,j as e,M as o,C as s,A as l}from"./iframe-BaE-r_tL.js";import{N as d,D as t,T as h,S as a,a as x,W as j,I as p,b as u,c as g,F as m,d as f}from"./NavigationItem.stories-M-WJ_qRy.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D8yVe6yW.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./NavigationItem-CHo8eRdd.js";function c(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"navigationitem",children:"NavigationItem"}),`
`,e.jsxs(n.p,{children:[`A single entry of a navigation bar (the web header's News, Shows & Movies, Kids…), with an optional leading and trailing icon.
Two types, three sizes, a selected state, and five interaction states (default, hover, pressed, focused, disabled).
Spec from Figma `,e.jsx(n.code,{children:"Navigation item"}),` (7808:44857) on the "↳ Navigation" page: 60 variants.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { NavigationItem } from '@henriquemenezzo/dailywire-ds/components/navigation-item'

<nav aria-label="Main">
  <NavigationItem href="/news" selected>News</NavigationItem>
  <NavigationItem href="/kids">Kids</NavigationItem>
</nav>
`})}),`
`,e.jsx(n.p,{children:"The rendered element follows what the item does:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'type="link"'})," always renders ",e.jsx(n.code,{children:"<a>"}),". When ",e.jsx(n.code,{children:"selected"}),", it gets ",e.jsx(n.code,{children:'aria-current="page"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'type="button"'})," renders ",e.jsx(n.code,{children:'<button type="button">'}),". Give it an ",e.jsx(n.code,{children:"href"})," and it renders ",e.jsx(n.code,{children:"<a>"})," with the same pill look (",e.jsx(n.code,{children:'aria-current="page"'})," when selected), which is what the web header does for its sections."]}),`
`,e.jsxs(n.li,{children:["A selected ",e.jsx(n.code,{children:"<button>"})," gets ",e.jsx(n.code,{children:'aria-current="true"'}),". When the item opens a menu (the default Figma chevron), pass ",e.jsx(n.code,{children:"aria-expanded"})," / ",e.jsx(n.code,{children:"aria-haspopup"})," yourself; they are forwarded."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"type"})," axis is the ",e.jsx(n.code,{children:"type"})," prop:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Button"})," — no surface at rest; a pill fills on hover (",e.jsx(n.code,{children:"background/neutral/bold/hovered"}),"), press (",e.jsx(n.code,{children:"…/pressed"}),") and focus (",e.jsx(n.code,{children:"…/default"}),"). The label color never changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link"})," — no surface; hover and press switch the label and icon to ",e.jsx(n.code,{children:"text/neutral/bold/hovered"}),"."]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[`| Size | Text style | Font size | Right icon | Button type height | Button type padding |
|------|-----------|-----------|------------|--------------------|---------------------|
| `,e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"label/400/md"})," · ",e.jsx(n.code,{children:"label/600/md"})," | ",e.jsx(n.code,{children:"--font-size-sm"})," (14) | ",e.jsx(n.code,{children:"--size-sm"})," (16) | ",e.jsx(n.code,{children:"--size-xl"})," (32) | ",e.jsx(n.code,{children:"--spacing-lg"}),` (12) |
| `,e.jsx(n.code,{children:"lg"})," | ",e.jsx(n.code,{children:"label/400/lg"})," · ",e.jsx(n.code,{children:"label/600/lg"})," | ",e.jsx(n.code,{children:"--font-size-md"})," (16) | ",e.jsx(n.code,{children:"--size-md"})," (20) | ",e.jsx(n.code,{children:"--size-2xl"})," (40) | ",e.jsx(n.code,{children:"--spacing-lg"}),` (12) |
| `,e.jsx(n.code,{children:"xl"})," | ",e.jsx(n.code,{children:"label/400/xl"})," · ",e.jsx(n.code,{children:"label/600/xl"})," | ",e.jsx(n.code,{children:"--font-size-lg"})," (20) | ",e.jsx(n.code,{children:"--size-md"})," (20) | ",e.jsx(n.code,{children:"--size-3xl"})," (48) | ",e.jsx(n.code,{children:"--spacing-xl"})," (16) |"]}),`
`,e.jsxs(n.p,{children:["The left icon is ",e.jsx(n.code,{children:"--size-md"})," (20) on every size. Icon to label gap is ",e.jsx(n.code,{children:"--spacing-xs"}),". The link type has no padding and hugs its content."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"selected",children:"Selected"}),`
`,e.jsxs(n.p,{children:["Selection changes the label weight only: ",e.jsx(n.code,{children:"label/400/*"})," → ",e.jsx(n.code,{children:"label/600/*"}),". There is no indicator bar or fill."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"with-icons",children:"With icons"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Show left icon"})," and ",e.jsx(n.code,{children:"Show right icon"})," booleans are the ",e.jsx(n.code,{children:"leadingIcon"})," and ",e.jsx(n.code,{children:"trailingIcon"})," props, which take any name from the icon catalog. Figma's default glyphs are ",e.jsx(n.code,{children:"device-tv-old"})," (left, hidden by default) and ",e.jsx(n.code,{children:"chevron-down"})," (right, shown by default)."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Keyboard focus shows the DS ring on both types: ",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(n.code,{children:"--focus-ring-width"}),", with a transparent ",e.jsx(n.code,{children:"--focus-ring-offset"}),". The surface becomes ",e.jsx(n.code,{children:"background/neutral/bold/default"}),". Corners: pill on the button type, ",e.jsx(n.code,{children:"--border-radius-sm"})," on the link type."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["Label and icons switch to ",e.jsx(n.code,{children:"text/neutral/bold/disabled"})," and ",e.jsx(n.code,{children:"icon/neutral/bold/disabled"}),". A ",e.jsx(n.code,{children:"<button>"})," gets the native ",e.jsx(n.code,{children:"disabled"})," attribute; a link gets ",e.jsx(n.code,{children:'aria-disabled="true"'})," and ",e.jsx(n.code,{children:'role="link"'}),", drops its ",e.jsx(n.code,{children:"href"})," and ignores clicks."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick type, state, selection, size and icons. The item is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state. Hover a token to see where it acts."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Every type × selection in every Figma state (hover, pressed and focus are forced for review):"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"full-matrix",children:"Full matrix"}),`
`,e.jsx(n.p,{children:"All 60 Figma variants: type × selection × state × size."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"NavigationItem.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Put items inside a ",e.jsx(n.code,{children:'<nav aria-label="…">'})," landmark; mark the current page with ",e.jsx(n.code,{children:"selected"}),"."]}),`
`,e.jsxs(n.li,{children:["On touch screens the hit area grows to ",e.jsx(n.code,{children:"--touch-target-min"})," around the item without changing the layout."]}),`
`,e.jsxs(n.li,{children:["Hover and press transitions are removed under ",e.jsx(n.code,{children:"prefers-reduced-motion: reduce"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(l,{of:d}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"type"})," | ",e.jsx(n.code,{children:"'button' \\| 'link'"})," | ",e.jsx(n.code,{children:"'button'"})," | Figma ",e.jsx(n.code,{children:"type"}),": pill surface or text only. ",e.jsx(n.code,{children:"link"})," renders ",e.jsx(n.code,{children:"<a>"}),"; ",e.jsx(n.code,{children:"button"})," renders ",e.jsx(n.code,{children:"<button>"}),", or ",e.jsx(n.code,{children:"<a>"})," with ",e.jsx(n.code,{children:"href"}),` |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'md' \\| 'lg' \\| 'xl'"})," | ",e.jsx(n.code,{children:"'md'"}),` | 14 / 16 / 20 px text |
| `,e.jsx(n.code,{children:"selected"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | 600 weight + ",e.jsx(n.code,{children:"aria-current"})," (",e.jsx(n.code,{children:"page"})," on ",e.jsx(n.code,{children:"<a>"}),", ",e.jsx(n.code,{children:"true"})," on ",e.jsx(n.code,{children:"<button>"}),`) |
| `,e.jsx(n.code,{children:"leadingIcon"})," | ",e.jsx(n.code,{children:"IconName"})," | — | Icon before the label (Figma ",e.jsx(n.code,{children:"Show left icon"}),`) |
| `,e.jsx(n.code,{children:"trailingIcon"})," | ",e.jsx(n.code,{children:"IconName"})," | — | Icon after the label (Figma ",e.jsx(n.code,{children:"Show right icon"}),`) |
| `,e.jsx(n.code,{children:"href"})," | ",e.jsx(n.code,{children:"string"}),` | — | Link target |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | Disabled colors; ",e.jsx(n.code,{children:"disabled"})," on ",e.jsx(n.code,{children:"<button>"}),", ",e.jsx(n.code,{children:"aria-disabled"})," + no ",e.jsx(n.code,{children:"href"})," on ",e.jsx(n.code,{children:"<a>"}),` |
| `,e.jsx(n.code,{children:"htmlType"})," | ",e.jsx(n.code,{children:"'button' \\| 'submit' \\| 'reset'"})," | ",e.jsx(n.code,{children:"'button'"})," | Native button type, only when a ",e.jsx(n.code,{children:"<button>"}),` is rendered |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | Label |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native attributes via spread (",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"rel"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function T(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{T as default};
