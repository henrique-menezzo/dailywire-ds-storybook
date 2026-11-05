import{u as c,j as e,M as t,C as s,A as o}from"./iframe-BaE-r_tL.js";import{A as d,D as l,T as h,S as a,W as x,a as j,b as p,I as u,c as m,F as f,d as g}from"./ArticleHeading.stories-CrEYw4-e.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./ArticleHeading.module-Ca3flQOu.js";import"./ArticleHeading-BgCBkznm.js";function r(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(n.h1,{id:"articleheading",children:"ArticleHeading"}),`
`,e.jsxs(n.p,{children:["The title of an article, as it appears on cards and article pages. It is usually the card's link text, so it has hover, pressed and focus states; without ",e.jsx(n.code,{children:"href"}),` it renders as plain text.
Five sizes, two weights, two tones and four states.
Spec from Figma `,e.jsx(n.code,{children:"Heading-Article-Content"}),` (7958:8107, doc frame 9022:21077), section "Article" on page "↳ Content".
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ArticleHeading } from '@henriquemenezzo/dailywire-ds/components/article-heading'

<ArticleHeading as="h3" size="md" href="/news/oil-prices">
  Oil Prices Plummet, Stocks Climb After Trump Update On Iran War
</ArticleHeading>
`})}),`
`,e.jsxs(n.p,{children:["Renders the element named by ",e.jsx(n.code,{children:"as"})," (default ",e.jsx(n.code,{children:"h3"}),"; any heading level, ",e.jsx(n.code,{children:"p"})," or ",e.jsx(n.code,{children:"span"}),"). With ",e.jsx(n.code,{children:"href"}),", the text is wrapped in a native ",e.jsx(n.code,{children:"<a>"})," that fills the title block."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tone",children:"Tone"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"tone"})," axis. ",e.jsx(n.code,{children:"exclusive"})," marks Daily Wire exclusive content by typography alone: no prefix, label or color change."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"})," — ",e.jsx(n.code,{children:"--default"})," family (Libre Franklin), ",e.jsx(n.code,{children:"--letter-spacing-default"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exclusive"})," — ",e.jsx(n.code,{children:"--exclusive"})," family (Libre Caslon Text, serif), ",e.jsx(n.code,{children:"--letter-spacing-tight"})," (−2%). Text styles ",e.jsx(n.code,{children:"…/exclusive"}),"."]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Every size uses a 120% line height (",e.jsx(n.code,{children:"--line-height-120"}),"). The text wraps; the component has no fixed height."]}),`
`,e.jsxs(n.p,{children:[`| Size | Text style | Font size |
|------|-----------|-----------|
| `,e.jsx(n.code,{children:"xl"})," | ",e.jsx(n.code,{children:"heading/600/lg"})," · ",e.jsx(n.code,{children:"heading/500/lg"})," | ",e.jsx(n.code,{children:"--font-size-2xl"}),` (32) |
| `,e.jsx(n.code,{children:"lg"})," | ",e.jsx(n.code,{children:"heading/600/md"})," · ",e.jsx(n.code,{children:"heading/500/md"})," | ",e.jsx(n.code,{children:"--font-size-xl"}),` (24) |
| `,e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"heading/600/sm"})," · ",e.jsx(n.code,{children:"heading/500/sm"})," | ",e.jsx(n.code,{children:"--font-size-lg"}),` (20) |
| `,e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"heading/600/xs"})," · ",e.jsx(n.code,{children:"heading/500/xs"})," | ",e.jsx(n.code,{children:"--font-size-md"}),` (16) |
| `,e.jsx(n.code,{children:"xsm"})," | ",e.jsx(n.code,{children:"title/600/sm"})," · ",e.jsx(n.code,{children:"title/500/sm"})," | ",e.jsx(n.code,{children:"--font-size-sm"})," (14) |"]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"weight",children:"Weight"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"semibold"})," uses the ",e.jsx(n.code,{children:"*/600/*"})," text styles (",e.jsx(n.code,{children:"--Semibold"}),"), ",e.jsx(n.code,{children:"medium"})," uses ",e.jsx(n.code,{children:"*/500/*"})," (",e.jsx(n.code,{children:"--Medium"}),")."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"in-a-card",children:"In a card"}),`
`,e.jsxs(n.p,{children:["An article card that navigates should have ",e.jsx(n.strong,{children:"one"})," link. Two ways to do it:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Stretched title link"})," — give the heading ",e.jsx(n.code,{children:"href"})," and ",e.jsx(n.code,{children:"stretched"}),", and the card ",e.jsx(n.code,{children:"position: relative"}),". The link's hit area covers the card, so hovering anywhere on it drives the title's hover color. Secondary actions in the card (Listen, Save…) stay clickable when they sit above it with ",e.jsx(n.code,{children:"position: relative; z-index: 1"}),", and they are not nested inside the ",e.jsx(n.code,{children:"<a>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Card wrapped in an ",e.jsx(n.code,{children:"<a>"})]})," — render the heading without ",e.jsx(n.code,{children:"href"}),". It still follows the link: hover and press on any ancestor ",e.jsx(n.code,{children:"<a>"})," switch it to the hovered and pressed colors."]}),`
`]}),`
`,e.jsx(s,{of:j}),`
`,e.jsxs(n.p,{children:["Without ",e.jsx(n.code,{children:"href"})," and outside a link, the title is plain text:"]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Keyboard focus draws ",e.jsx(n.code,{children:"--focus-ring-width"})," in ",e.jsx(n.code,{children:"--color-focus-info-bold-default"})," around the whole title block, with a ",e.jsx(n.code,{children:"--focus-ring-offset"})," gap and ",e.jsx(n.code,{children:"--border-radius-sm"})," corners. The text keeps its default color."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick tone, state, size and weight. The heading is drawn with its real measurements; the panel lists the tokens that apply in that state. Hover a token to see where it acts."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Every tone × weight in every Figma state (hover, pressed and focus are forced for review):"}),`
`,e.jsx(s,{of:m}),`
`,e.jsxs(n.p,{children:[`| State | Text | Ring |
|---|---|---|
| Default | `,e.jsx(n.code,{children:"text-neutral-bold-default"}),` | — |
| Hover | `,e.jsx(n.code,{children:"text-neutral-bold-hovered"}),` | — |
| Pressed | `,e.jsx(n.code,{children:"text-neutral-bold-pressed"}),` | — |
| Focus | `,e.jsx(n.code,{children:"text-neutral-bold-default"})," | ",e.jsx(n.code,{children:"focus-info-bold-default"})," |"]}),`
`,e.jsxs(n.p,{children:["The color change uses ",e.jsx(n.code,{children:"--duration-slow"})," with ",e.jsx(n.code,{children:"--easing-ease-out"})," (Figma: dissolve, 400ms ease-out) and is turned off under ",e.jsx(n.code,{children:"prefers-reduced-motion"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"full-matrix",children:"Full matrix"}),`
`,e.jsx(n.p,{children:"All 80 Figma variants: state × tone × weight × size."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"ArticleHeading.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(o,{of:d}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'xsm' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'"})," | ",e.jsx(n.code,{children:"'xl'"}),` | 14 / 16 / 20 / 24 / 32 px |
| `,e.jsx(n.code,{children:"weight"})," | ",e.jsx(n.code,{children:"'semibold' \\| 'medium'"})," | ",e.jsx(n.code,{children:"'semibold'"})," | ",e.jsx(n.code,{children:"*/600/*"})," or ",e.jsx(n.code,{children:"*/500/*"}),` text styles |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'default' \\| 'exclusive'"})," | ",e.jsx(n.code,{children:"'default'"})," | Exclusive = serif ",e.jsx(n.code,{children:"--exclusive"}),` family, tight tracking |
| `,e.jsx(n.code,{children:"as"})," | ",e.jsx(n.code,{children:"'h1'"}),"–",e.jsx(n.code,{children:"'h6' \\| 'p' \\| 'span'"})," | ",e.jsx(n.code,{children:"'h3'"}),` | Element to render |
| `,e.jsx(n.code,{children:"href"})," | ",e.jsx(n.code,{children:"string"}),` | — | Renders the title as a link |
| `,e.jsx(n.code,{children:"stretched"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | The link covers the nearest positioned ancestor (only with ",e.jsx(n.code,{children:"href"}),`) |
| `,e.jsx(n.code,{children:"linkProps"})," | ",e.jsx(n.code,{children:"AnchorHTMLAttributes"})," | — | Extra attributes for the ",e.jsx(n.code,{children:"<a>"})," (",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"rel"}),", ",e.jsx(n.code,{children:"onClick"}),`…) |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | The title text |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native heading attributes on the root via spread (",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"aria-*"}),", ",e.jsx(n.code,{children:"data-*"}),", etc.)."]}),`
`]})]})}function F(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{F as default};
