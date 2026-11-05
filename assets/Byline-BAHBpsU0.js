import{u as d,j as e,M as a,C as s,A as o}from"./iframe-BaE-r_tL.js";import{B as r,D as c,V as l,S as h,W as x,a as j,I as u,b as m,c as p,F as f,T as v}from"./Byline.stories-BvOkSfIe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DO2tlVwn.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Link.module-BLmoWX-e.js";import"./Byline-CDW89dVi.js";import"./Avatar-DfOPemCI.js";import"./Link-Bo7zJKQL.js";import"./Icon-D8yVe6yW.js";function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(n.h1,{id:"byline",children:"Byline"}),`
`,e.jsxs(n.p,{children:["The author of an article: the name as a link, with an optional avatar before it. It is built from two DS components, ",e.jsx(n.code,{children:"Avatar"})," and ",e.jsx(n.code,{children:"Link"}),`.
Two styles, two sizes, an avatar on or off, and four states (default, hover, focus, disabled).
Spec from Figma `,e.jsx(n.code,{children:"Byline"}),` (8210:45616, doc frame 8413:61617), section "Article" on page "↳ Content".
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Byline } from '@henriquemenezzo/dailywire-ds/components/byline'

<Byline
  author="Ben Shapiro"
  href="/authors/ben-shapiro"
  showAvatar
  avatar={{ type: 'host', src: benShapiroPhoto }}
/>
`})}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"href"})," it renders the DS ",e.jsx(n.code,{children:"Link"})," (a native ",e.jsx(n.code,{children:"<a>"}),`) around the avatar and the name, so hover, focus and the hit area cover both. The name is the accessible name; the avatar is decorative.
Without `,e.jsx(n.code,{children:"href"})," it renders a ",e.jsx(n.code,{children:"<span>"})," with the same look and no interaction — use that inside a card that is already one link (a link cannot contain another link)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styles",children:"Styles"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"style"})," axis is the ",e.jsx(n.code,{children:"variant"})," prop, passed to the nested ",e.jsx(n.code,{children:"Link"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secondary"})," (default) — ",e.jsx(n.code,{children:"text/neutral/subtlest"})," tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary"})," — ",e.jsx(n.code,{children:"text/neutral/bold"})," tokens."]}),`
`]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[`| Size | Text style | Font size | Avatar | Height |
|------|-----------|-----------|--------|--------|
| `,e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"label/400/sm"})," | ",e.jsx(n.code,{children:"--font-size-xs"})," (12) | ",e.jsx(n.code,{children:"2xsm"}),` (32) | 12 · 32 with avatar |
| `,e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"label/400/md"})," | ",e.jsx(n.code,{children:"--font-size-sm"})," (14) | ",e.jsx(n.code,{children:"2xsm"})," (32) | 14 · 32 with avatar |"]}),`
`,e.jsxs(n.p,{children:["The avatar sits ",e.jsx(n.code,{children:"--spacing-sm"})," (6px) before the name, vertically centered."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Show Avatar"})," boolean is ",e.jsx(n.code,{children:"showAvatar"})," (off by default). The ",e.jsx(n.code,{children:"avatar"})," prop carries the data: ",e.jsx(n.code,{children:"type"})," (",e.jsx(n.code,{children:"host"})," by default, as in Figma, or ",e.jsx(n.code,{children:"person"}),", ",e.jsx(n.code,{children:"initials"}),"), ",e.jsx(n.code,{children:"src"})," and ",e.jsx(n.code,{children:"initials"}),`.
Without `,e.jsx(n.code,{children:"initials"}),', they are derived from the author name ("Georgia Howe" → "GH"), and they also stand in when the photo fails to load.']}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"static-no-link",children:"Static (no link)"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"hover-and-focus",children:"Hover and focus"}),`
`,e.jsxs(n.p,{children:["Hover underlines the name and switches it to the ",e.jsx(n.code,{children:"hovered"})," token. Keyboard focus draws the ",e.jsx(n.code,{children:"Link"})," ring — ",e.jsx(n.code,{children:"--focus-ring-width"})," in ",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(n.code,{children:"--focus-ring-offset"})," gap, ",e.jsx(n.code,{children:"--border-radius-sm"})," corners — around the avatar and the name, and the name switches to ",e.jsx(n.code,{children:"text-neutral-subtlest-selected"}),"."]}),`
`,e.jsxs(n.p,{children:["On touch screens the hit area grows to ",e.jsx(n.code,{children:"--touch-target-min"})," without changing the layout."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["A disabled byline renders ",e.jsx(n.code,{children:'aria-disabled="true"'})," and ",e.jsx(n.code,{children:'role="link"'}),", drops its ",e.jsx(n.code,{children:"href"})," (so it cannot navigate or take focus) and ignores clicks."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsxs(n.p,{children:["Pick style, state, size, avatar and link mode. The byline is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state (with a link, the nested ",e.jsx(n.code,{children:"Link"})," rules are included). Hover a token to see where it acts."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Every style × avatar in every Figma state (hover and focus are forced for review):"}),`
`,e.jsx(s,{of:p}),`
`,e.jsxs(n.p,{children:[`| State | Secondary | Primary |
|---|---|---|
| Default | `,e.jsx(n.code,{children:"text-neutral-subtlest-default"})," | ",e.jsx(n.code,{children:"text-neutral-bold-default"}),` |
| Hover (+ underline) | `,e.jsx(n.code,{children:"text-neutral-subtlest-hovered"})," | ",e.jsx(n.code,{children:"text-neutral-bold-hovered"}),` |
| Focus | `,e.jsx(n.code,{children:"text-neutral-subtlest-selected"})," | ",e.jsx(n.code,{children:"text-neutral-subtlest-selected"}),` |
| Disabled | `,e.jsx(n.code,{children:"text-neutral-subtlest-disabled"})," | ",e.jsx(n.code,{children:"text-neutral-bold-disabled"})," |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"full-matrix",children:"Full matrix"}),`
`,e.jsx(n.p,{children:"All 16 Figma variants (state × size × style), with the avatar off and on."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"Byline.module.css"}),", then the nested ",e.jsx(n.code,{children:"Link.module.css"})," that colors the linked byline, with the token each uses resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(o,{of:r}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"author"})," | ",e.jsx(n.code,{children:"string"}),` | — | Author name; the visible text and the accessible name |
| `,e.jsx(n.code,{children:"href"})," | ",e.jsx(n.code,{children:"string"}),` | — | Author page. Omit for static text |
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'secondary' \\| 'primary'"})," | ",e.jsx(n.code,{children:"'secondary'"})," | Figma ",e.jsx(n.code,{children:"style"}),` |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'md'"})," | ",e.jsx(n.code,{children:"'sm'"}),` | 12 or 14 px name |
| `,e.jsx(n.code,{children:"showAvatar"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | 32px avatar before the name |
| `,e.jsx(n.code,{children:"avatar"})," | ",e.jsx(n.code,{children:"{ src?: string; type?: 'host' \\| 'person' \\| 'initials'; initials?: string }"}),` | — | Avatar data |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | ",e.jsx(n.code,{children:"aria-disabled"}),", no ",e.jsx(n.code,{children:"href"}),`, clicks blocked |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<a>"})," attributes via spread (",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"rel"}),", ",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function C(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{C as default};
