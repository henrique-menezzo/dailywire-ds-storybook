import{u as t,j as e,M as o,C as s,A as r}from"./iframe-BaE-r_tL.js";import{A as d,D as l,L as h,W as a,S as x,a as j,E as p,I as m,b as u,T as g}from"./ArticleBlock.stories-b8BfA_-E.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./ArticleHeading-BgCBkznm.js";import"./ArticleBlock-DA1qK7aW.js";import"./ArticleMetadata-Wi7f2L0h.js";import"./Byline-CDW89dVi.js";import"./Avatar-DfOPemCI.js";import"./Link-Bo7zJKQL.js";import"./Icon-D8yVe6yW.js";import"./LabeledIconButton-CKdeHl5r.js";import"./IconButton-C0K0oZpp.js";function c(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"articleblock",children:"ArticleBlock"}),`
`,e.jsxs(n.p,{children:[`The text block of an article: title, description, metadata row and a "more" (vertical dots) action. It is the text part of article cards and lists.
Five sizes and three states, plus a flag per part.
Spec from Figma `,e.jsx(n.code,{children:"ArticleBlock"}),' (8214:53232), section "Article" on page "↳ Content". It nests the DS ',e.jsx(n.code,{children:"ArticleHeading"}),", ",e.jsx(n.code,{children:"ArticleMetadata"})," and ",e.jsx(n.code,{children:"IconButton"}),`.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ArticleBlock } from '@henriquemenezzo/dailywire-ds/components/article-block'

<ArticleBlock
  size="md"
  title="FBI Alert Warns Iran May Eye Drone Attack On American Soil"
  href="/news/fbi-alert-iran-drones"
  description="The FBI recently warned California authorities…"
  metadata={{ author: 'Jennie Taer', publishDate: new Date(article.publishedAt), readTime: 5, showEpisodeNumber: false }}
  onMoreClick={openArticleMenu}
/>
`})}),`
`,e.jsxs(n.p,{children:["Renders a ",e.jsx(n.code,{children:"<div>"})," with the title (",e.jsx(n.code,{children:"ArticleHeading"}),", ",e.jsx(n.code,{children:"h3"})," by default), a ",e.jsx(n.code,{children:"<p>"})," description and the metadata row."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"one-link-per-block",children:"One link per block"}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"href"}),", the title is the block's only link and its hit area is ",e.jsx(n.strong,{children:"stretched"})," over the whole block (the accessible card pattern): pointing at or pressing anywhere on the block drives the title's hover and pressed colors, and screen readers hear one link named by the title."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:'"more" button'})," (",e.jsx(n.code,{children:"IconButton"}),", ",e.jsx(n.code,{children:"dots-vertical"}),") and the metadata ",e.jsx(n.strong,{children:"action"})," (Listen) are separate buttons. They are not inside the ",e.jsx(n.code,{children:"<a>"}),"; they sit above the stretched link (",e.jsx(n.code,{children:"z-index: 1"}),") and stay clickable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'linkArea="container"'})," stretches the link over the nearest positioned ancestor instead of the block, so a card that also holds an image is one link (",e.jsx(n.code,{children:"ArticleCard"})," does this)."]}),`
`,e.jsxs(n.li,{children:["Without ",e.jsx(n.code,{children:"href"})," the block is static text."]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["| Size | Title (",e.jsx(n.code,{children:"ArticleHeading"}),`) | Description | Gap: headline ↔ metadata | Gap: title ↔ description | "More" button | Metadata type |
|------|------|------|------|------|------|------|
| `,e.jsx(n.code,{children:"xl"})," | ",e.jsx(n.code,{children:"xl"})," semibold (",e.jsx(n.code,{children:"heading/600/lg"}),", 32) | ",e.jsx(n.code,{children:"body/400/md"})," (16) | ",e.jsx(n.code,{children:"--spacing-3xl"})," | ",e.jsx(n.code,{children:"--spacing-xl"})," | ",e.jsx(n.code,{children:"md"})," (40) | ",e.jsx(n.code,{children:"default"}),` |
| `,e.jsx(n.code,{children:"lg"})," | ",e.jsx(n.code,{children:"lg"})," semibold (",e.jsx(n.code,{children:"heading/600/md"}),", 24) | ",e.jsx(n.code,{children:"body/400/sm"})," (14) | ",e.jsx(n.code,{children:"--spacing-3xl"})," | ",e.jsx(n.code,{children:"--spacing-xl"})," | ",e.jsx(n.code,{children:"md"})," (40) | ",e.jsx(n.code,{children:"default"}),` |
| `,e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"md"})," medium (",e.jsx(n.code,{children:"heading/500/sm"}),", 20) | ",e.jsx(n.code,{children:"body/400/sm"})," | ",e.jsx(n.code,{children:"--spacing-lg"})," | ",e.jsx(n.code,{children:"--spacing-xl"})," | ",e.jsx(n.code,{children:"sm"})," (32) | ",e.jsx(n.code,{children:"article"}),` |
| `,e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"sm"})," medium (",e.jsx(n.code,{children:"heading/500/xs"}),", 16) | ",e.jsx(n.code,{children:"body/400/sm"})," | ",e.jsx(n.code,{children:"--spacing-lg"})," | ",e.jsx(n.code,{children:"--spacing-xl"})," | ",e.jsx(n.code,{children:"sm"})," (32) | ",e.jsx(n.code,{children:"article"}),` |
| `,e.jsx(n.code,{children:"xsm"})," | ",e.jsx(n.code,{children:"xsm"})," medium (",e.jsx(n.code,{children:"title/500/sm"}),", 14) | ",e.jsx(n.code,{children:"body/400/sm"})," | ",e.jsx(n.code,{children:"--spacing-sm"})," | ",e.jsx(n.code,{children:"--spacing-sm"})," | ",e.jsx(n.code,{children:"sm"})," (32) | ",e.jsx(n.code,{children:"article"})," |"]}),`
`,e.jsxs(n.p,{children:['The title and the "more" button share a top-aligned row with ',e.jsx(n.code,{children:"--spacing-md"})," between them. The description is ",e.jsx(n.code,{children:"text-neutral-subtlest-default"})," at a 150% line height and wraps freely. The metadata row is ",e.jsx(n.code,{children:"ArticleMetadata"})," size ",e.jsx(n.code,{children:"sm"}),"; its ",e.jsx(n.code,{children:"variant"})," follows the table unless ",e.jsx(n.code,{children:"metadata.variant"})," is set. In Figma the Listen action is on for ",e.jsx(n.code,{children:"xl"})," and ",e.jsx(n.code,{children:"lg"}),": pass ",e.jsx(n.code,{children:"metadata.action"})," for it."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"parts",children:"Parts"}),`
`,e.jsxs(n.p,{children:["The Figma booleans: ",e.jsx(n.code,{children:"showHeading"})," (Figma ",e.jsx(n.code,{children:"Show Heading title"}),": the title row, with the dots), ",e.jsx(n.code,{children:"showMore"})," (",e.jsx(n.code,{children:"Show dots"}),"), ",e.jsx(n.code,{children:"showDescription"}),", ",e.jsx(n.code,{children:"showMetadata"}),". A part also needs content to render (",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"description"}),", ",e.jsx(n.code,{children:"metadata"}),")."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"exclusive",children:"Exclusive"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'tone="exclusive"'})," gives the title the serif ",e.jsx(n.code,{children:"…/exclusive"})," text style (Libre Caslon Text, tight tracking). It is not a Figma axis of this set: exclusive ",e.jsx(n.code,{children:"ArticleCard"}),"s override the nested title this way."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick size and state. The block is drawn with its real measurements; the panel lists the tokens that apply. Hover a token to see where it acts."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"All 15 Figma variants (size × state) plus keyboard focus; hover, pressed and focus are forced for review:"}),`
`,e.jsx(s,{of:u}),`
`,e.jsxs(n.p,{children:[`| State | Title | Description, metadata, dots |
|---|---|---|
| Default | `,e.jsx(n.code,{children:"text-neutral-bold-default"}),` | unchanged |
| Hovered | `,e.jsx(n.code,{children:"text-neutral-bold-hovered"}),` | unchanged |
| Pressed | `,e.jsx(n.code,{children:"text-neutral-bold-pressed"}),` | unchanged |
| Focus | `,e.jsx(n.code,{children:"text-neutral-bold-default"})," + ",e.jsx(n.code,{children:"focus-info-bold-default"})," ring around the title | unchanged |"]}),`
`,e.jsxs(n.p,{children:["The color change uses ",e.jsx(n.code,{children:"--duration-slow"})," with ",e.jsx(n.code,{children:"--easing-ease-out"})," (Figma: on hover, dissolve 300ms ease-out) and is turned off under ",e.jsx(n.code,{children:"prefers-reduced-motion"}),". Focus has no Figma variant in this set: it is the title link's ring from ",e.jsx(n.code,{children:"ArticleHeading"}),'. The "more" button and the Listen action keep their own ',e.jsx(n.code,{children:"IconButton"})," / ",e.jsx(n.code,{children:"LabeledIconButton"})," states."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"ArticleBlock.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar). Title colors are ",e.jsx(n.code,{children:"ArticleHeading"}),"'s; the row and its action use ",e.jsx(n.code,{children:"ArticleMetadata"})," and ",e.jsx(n.code,{children:"LabeledIconButton"})," tokens."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(r,{of:d}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | Article title |
| `,e.jsx(n.code,{children:"href"})," | ",e.jsx(n.code,{children:"string"}),` | — | Article URL: the title becomes the block's stretched link |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | Standfirst under the title |
| `,e.jsx(n.code,{children:"metadata"})," | ",e.jsx(n.code,{children:"ArticleMetadataProps"})," | — | Metadata row (",e.jsx(n.code,{children:"size"})," ",e.jsx(n.code,{children:"sm"}),"; ",e.jsx(n.code,{children:"variant"}),` by block size) |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'xsm' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'"})," | ",e.jsx(n.code,{children:"'xl'"}),` | See Sizes |
| `,e.jsx(n.code,{children:"tone"})," | ",e.jsx(n.code,{children:"'default' \\| 'exclusive'"})," | ",e.jsx(n.code,{children:"'default'"}),` | Serif title for exclusive content |
| `,e.jsx(n.code,{children:"headingAs"})," | ",e.jsx(n.code,{children:"'h1'"}),"–",e.jsx(n.code,{children:"'h6' \\| 'p' \\| 'span'"})," | ",e.jsx(n.code,{children:"'h3'"}),` | Title element |
| `,e.jsx(n.code,{children:"linkProps"})," | ",e.jsx(n.code,{children:"AnchorHTMLAttributes"})," | — | Extra attributes for the title ",e.jsx(n.code,{children:"<a>"}),` |
| `,e.jsx(n.code,{children:"linkArea"})," | ",e.jsx(n.code,{children:"'block' \\| 'container'"})," | ",e.jsx(n.code,{children:"'block'"}),` | What the stretched link covers |
| `,e.jsx(n.code,{children:"onMoreClick"})," | ",e.jsx(n.code,{children:"MouseEventHandler"}),` | — | "More" button click |
| `,e.jsx(n.code,{children:"moreLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'More options'"}),` | Accessible name of the "more" button |
| `,e.jsx(n.code,{children:"moreButtonProps"})," | ",e.jsx(n.code,{children:"Partial<IconButtonProps>"})," | — | ",e.jsx(n.code,{children:"aria-haspopup"}),", ",e.jsx(n.code,{children:"aria-expanded"}),", ",e.jsx(n.code,{children:"disabled"}),`… |
| `,e.jsx(n.code,{children:"showHeading"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show Heading title"}),` |
| `,e.jsx(n.code,{children:"showMore"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show dots"}),` |
| `,e.jsx(n.code,{children:"showDescription"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show Description"}),` |
| `,e.jsx(n.code,{children:"showMetadata"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show Metadata"}),` |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<div>"})," attributes via spread (",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"aria-*"}),", ",e.jsx(n.code,{children:"data-*"}),", etc.)."]}),`
`]})]})}function C(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{C as default};
