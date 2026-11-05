import{u as c,j as e,M as t,C as s,A as o}from"./iframe-BaE-r_tL.js";import{A as i,D as l,F as a,V as h,S as x,a as j,I as m,b as p,c as u,T as g}from"./ArticleCard.stories-Cy70NG5U.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./ArticleHeading-BgCBkznm.js";import"./index-DTA9Iiqt.js";import"./index-dPPx6LzB.js";import"./ArticleBlock-DA1qK7aW.js";import"./ArticleMetadata-Wi7f2L0h.js";import"./Byline-CDW89dVi.js";import"./Avatar-DfOPemCI.js";import"./Link-Bo7zJKQL.js";import"./Icon-D8yVe6yW.js";import"./LabeledIconButton-CKdeHl5r.js";import"./IconButton-C0K0oZpp.js";import"./Badge-DXeWmLrm.js";function r(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:i}),`
`,e.jsx(n.h1,{id:"articlecard",children:"ArticleCard"}),`
`,e.jsxs(n.p,{children:[`An article teaser for feeds and grids: an image with an optional badge, the title, the metadata row and a "more" action. The whole card is one link.
Three types, three sizes and four states, plus `,e.jsx(n.code,{children:"Show Badge"}),`.
Spec from Figma `,e.jsx(n.code,{children:"Article Card"}),' (8214:53996), section "Article" on page "↳ Content". It nests the DS ',e.jsx(n.code,{children:"ArticleBlock"})," (with ",e.jsx(n.code,{children:"ArticleHeading"}),", ",e.jsx(n.code,{children:"ArticleMetadata"})," › ",e.jsx(n.code,{children:"Byline"}),", ",e.jsx(n.code,{children:"IconButton"}),") and ",e.jsx(n.code,{children:"Badge"}),`.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ArticleCard } from '@henriquemenezzo/dailywire-ds/components/article-card'

<ArticleCard
  size="md"
  title="FBI Alert Warns Iran May Eye Drone Attack On American Soil"
  href="/news/fbi-alert-iran-drones"
  image={{ src: article.imageUrl, alt: '' }}
  badge="Breaking"
  metadata={{ author: 'Jennie Taer', publishDate: new Date(article.publishedAt), readTime: 5, showEpisodeNumber: false }}
  onMoreClick={openArticleMenu}
/>
`})}),`
`,e.jsxs(n.p,{children:["Renders an ",e.jsx(n.code,{children:"<article>"}),": the image (",e.jsx(n.code,{children:"<img>"})," in a frame with the badge), then an ",e.jsx(n.code,{children:"ArticleBlock"})," with the title (",e.jsx(n.code,{children:"h3"})," by default) and the metadata row."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"one-link-per-card",children:"One link per card"}),`
`,e.jsxs(n.p,{children:["The title is the card's only link, and its hit area is ",e.jsx(n.strong,{children:"stretched"})," over the whole card (",e.jsx(n.code,{children:"ArticleBlock"})," with ",e.jsx(n.code,{children:'linkArea="container"'}),"): pointing at the image, the badge or the text drives the title's hover and pressed colors, and screen readers hear one link named by the title."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:'"more" button'})," and a metadata ",e.jsx(n.strong,{children:"action"})," are separate buttons, not inside the ",e.jsx(n.code,{children:"<a>"}),". They sit above the stretched link and stay clickable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard focus"})," lands on the title link and draws the ring around the whole card (see States)."]}),`
`,e.jsxs(n.li,{children:["The image usually repeats the title: give it ",e.jsx(n.code,{children:"alt: ''"}),". Describe it only when it adds information."]}),`
`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"type"})," axis is the ",e.jsx(n.code,{children:"variant"})," prop."]}),`
`,e.jsxs(n.p,{children:[`| Type | Image | Title |
|------|-------|-------|
| `,e.jsx(n.code,{children:"default"})," | 16:9 (Figma 301 × 169) | ",e.jsx(n.code,{children:"--default"}),` family |
| `,e.jsx(n.code,{children:"upstream"})," | 4:3 (Figma 301 × 226) | ",e.jsx(n.code,{children:"--default"}),` family |
| `,e.jsx(n.code,{children:"exclusive"})," | 4:3 | ",e.jsx(n.code,{children:"--exclusive"})," serif family, ",e.jsx(n.code,{children:"--letter-spacing-tight"})," (",e.jsx(n.code,{children:"…/exclusive"})," text styles) |"]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["| Size | Nested ",e.jsx(n.code,{children:"ArticleBlock"}),` | Title |
|------|------|------|
| `,e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"xsm"})," | ",e.jsx(n.code,{children:"title/500/sm"})," (",e.jsx(n.code,{children:"--font-size-sm"}),`, 14) |
| `,e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"heading/500/xs"})," (",e.jsx(n.code,{children:"--font-size-md"}),`, 16) |
| `,e.jsx(n.code,{children:"lg"})," | ",e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"heading/500/sm"})," (",e.jsx(n.code,{children:"--font-size-lg"}),", 20) |"]}),`
`,e.jsxs(n.p,{children:["The image and the text block are ",e.jsx(n.code,{children:"--spacing-xl"})," apart. The image fills the card width with ",e.jsx(n.code,{children:"--border-radius-sm"})," corners and ",e.jsx(n.code,{children:"object-fit: cover"}),'. The card has no fixed width: it fills its column (Figma draws it at 301px). The description is off in every Figma variant; the "more" button is a 32px minimal ',e.jsx(n.code,{children:"IconButton"}),"; the metadata row is ",e.jsx(n.code,{children:"ArticleMetadata"})," type ",e.jsx(n.code,{children:"article"}),", size ",e.jsx(n.code,{children:"sm"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"badge",children:"Badge"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Show Badge"}),": a ",e.jsx(n.code,{children:"Badge"})," (brand, ",e.jsx(n.code,{children:"md"}),", regular, square) ",e.jsx(n.code,{children:"--spacing-xl"})," from the image's top-left corner. Pass the label as ",e.jsx(n.code,{children:"badge"}),"; ",e.jsx(n.code,{children:"badgeProps"})," overrides the rest (",e.jsx(n.code,{children:"statusDot"}),", ",e.jsx(n.code,{children:"leadingIcon"}),", ",e.jsx(n.code,{children:"variant"}),"). The badge lives on the image, so a card without ",e.jsx(n.code,{children:"image"})," has no badge."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick type, state, size and badge. The card is drawn with its real measurements; the panel lists the tokens that apply. Hover a token to see where it acts."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Every type in every Figma state (hover, pressed and focused are forced for review; pick the size in Controls):"}),`
`,e.jsx(s,{of:p}),`
`,e.jsxs(n.p,{children:[`| State | Title | Card |
|---|---|---|
| Default | `,e.jsx(n.code,{children:"text-neutral-bold-default"}),` | — |
| Hover | `,e.jsx(n.code,{children:"text-neutral-bold-hovered"}),` | — |
| Pressed | `,e.jsx(n.code,{children:"text-neutral-bold-pressed"}),` | — |
| Focused | `,e.jsx(n.code,{children:"text-neutral-bold-default"})," | ",e.jsx(n.code,{children:"background-neutral-bold-default"})," fill, ",e.jsx(n.code,{children:"--border-radius-sm"}),", ",e.jsx(n.code,{children:"--focus-ring-width"})," ring in ",e.jsx(n.code,{children:"focus-info-bold-default"})," at ",e.jsx(n.code,{children:"--focus-ring-offset"})," |"]}),`
`,e.jsxs(n.p,{children:["The title color change uses ",e.jsx(n.code,{children:"--duration-slow"})," with ",e.jsx(n.code,{children:"--easing-ease-out"})," and is turned off under ",e.jsx(n.code,{children:"prefers-reduced-motion"}),`. On focus the title link's own ring is replaced by the card ring. The "more" button keeps its own `,e.jsx(n.code,{children:"IconButton"})," states."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"full-matrix",children:"Full matrix"}),`
`,e.jsx(n.p,{children:"All 36 Figma variants: state × type × size."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"ArticleCard.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar). The text block uses ",e.jsx(n.code,{children:"ArticleBlock"}),", ",e.jsx(n.code,{children:"ArticleHeading"})," and ",e.jsx(n.code,{children:"ArticleMetadata"})," tokens; the badge uses ",e.jsx(n.code,{children:"Badge"})," tokens."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(o,{of:i}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'default' \\| 'upstream' \\| 'exclusive'"})," | ",e.jsx(n.code,{children:"'default'"})," | Figma ",e.jsx(n.code,{children:"type"}),` |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'md' \\| 'lg'"})," | ",e.jsx(n.code,{children:"'sm'"}),` | 14 / 16 / 20 px title |
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | Article title |
| `,e.jsx(n.code,{children:"href"})," | ",e.jsx(n.code,{children:"string"}),` | — | Article URL: the card's one link |
| `,e.jsx(n.code,{children:"image"})," | ",e.jsx(n.code,{children:"{ src, alt, …img attributes }"})," | — | Top image (plain ",e.jsx(n.code,{children:"<img>"}),`) |
| `,e.jsx(n.code,{children:"badge"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | Badge label on the image |
| `,e.jsx(n.code,{children:"showBadge"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show Badge"}),` |
| `,e.jsx(n.code,{children:"badgeProps"})," | ",e.jsx(n.code,{children:"Partial<BadgeProps>"})," | — | ",e.jsx(n.code,{children:"statusDot"}),", ",e.jsx(n.code,{children:"leadingIcon"}),", ",e.jsx(n.code,{children:"variant"}),`… |
| `,e.jsx(n.code,{children:"metadata"})," | ",e.jsx(n.code,{children:"ArticleMetadataProps"})," | — | Metadata row (type ",e.jsx(n.code,{children:"article"}),", size ",e.jsx(n.code,{children:"sm"}),` by default) |
| `,e.jsx(n.code,{children:"showMetadata"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | Shows the metadata row |
| `,e.jsx(n.code,{children:"onMoreClick"})," | ",e.jsx(n.code,{children:"MouseEventHandler"}),` | — | "More" button click |
| `,e.jsx(n.code,{children:"moreLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'More options'"}),` | Accessible name of the "more" button |
| `,e.jsx(n.code,{children:"moreButtonProps"})," | ",e.jsx(n.code,{children:"Partial<IconButtonProps>"})," | — | ",e.jsx(n.code,{children:"aria-haspopup"}),", ",e.jsx(n.code,{children:"aria-expanded"}),`… |
| `,e.jsx(n.code,{children:"showMore"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | Shows the "more" button |
| `,e.jsx(n.code,{children:"headingAs"})," | ",e.jsx(n.code,{children:"'h1'"}),"–",e.jsx(n.code,{children:"'h6' \\| 'p' \\| 'span'"})," | ",e.jsx(n.code,{children:"'h3'"}),` | Title element |
| `,e.jsx(n.code,{children:"linkProps"})," | ",e.jsx(n.code,{children:"AnchorHTMLAttributes"})," | — | Extra attributes for the title ",e.jsx(n.code,{children:"<a>"}),` |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<article>"})," attributes via spread (",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"aria-*"}),", ",e.jsx(n.code,{children:"data-*"}),", etc.)."]}),`
`]})]})}function q(d={}){const{wrapper:n}={...c(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{q as default};
