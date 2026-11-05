import{u as r,j as e,M as o,C as s,A as c}from"./iframe-BaE-r_tL.js";import{A as d,D as a,V as l,S as h,W as x,a as j,b as m,I as p,c as u,F as f,T as b}from"./ArticleMetadata.stories-HNgS4AJd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DO2tlVwn.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./ArticleMetadata-Wi7f2L0h.js";import"./Byline-CDW89dVi.js";import"./Avatar-DfOPemCI.js";import"./Link-Bo7zJKQL.js";import"./Icon-D8yVe6yW.js";import"./LabeledIconButton-CKdeHl5r.js";function t(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"articlemetadata",children:"ArticleMetadata"}),`
`,e.jsxs(n.p,{children:[`The row of facts under an article title: an optional action (Listen), the author, the publish date, the read time and the episode number, separated by bullets.
Four types, two sizes, the action on or off, and a `,e.jsx(n.code,{children:"show*"}),` flag per item.
Spec from Figma `,e.jsx(n.code,{children:"Metadata"}),' (8210:45735, doc frame 8413:61610), section "Article" on page "↳ Content". It nests the DS ',e.jsx(n.code,{children:"LabeledIconButton"}),' (Figma "Libeled Icon Button") and ',e.jsx(n.code,{children:"Byline"}),`.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ArticleMetadata } from '@henriquemenezzo/dailywire-ds/components/article-metadata'

<ArticleMetadata
  variant="feed"
  action={{ icon: 'player-play-filled', label: 'Listen', onClick: play }}
  author="Ben Shapiro"
  publishDate={new Date(article.publishedAt)}
  readTime={6}
  episodeNumber={2381}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Type"})," axis is the ",e.jsx(n.code,{children:"variant"})," prop. Colors are identical in every type: the type sets the ",e.jsx(n.strong,{children:"order"})," of the items. The action, when present, always comes first."]}),`
`,e.jsxs(n.p,{children:[`| Type | Order |
|------|-------|
| `,e.jsx(n.code,{children:"default"}),` | read time · episode · date · author |
| `,e.jsx(n.code,{children:"feed"}),` (default) | date · read time · episode · author |
| `,e.jsx(n.code,{children:"inverted"}),` | author · episode · date · read time |
| `,e.jsx(n.code,{children:"article"})," | author · episode · read time · date |"]}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"feed"})," without an action the date leads the row and is emphasized: ",e.jsx(n.code,{children:"label/500"})," (",e.jsx(n.code,{children:"--Medium"}),") in ",e.jsx(n.code,{children:"text-neutral-bold-default"}),"."]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[`| Size | Items | Action label | Height |
|------|-------|--------------|--------|
| `,e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"label/400/sm"})," (",e.jsx(n.code,{children:"--font-size-xs"}),", 12) | ",e.jsx(n.code,{children:"label/600/sm"}),` | 12 · 32 with action |
| `,e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"label/400/md"})," (",e.jsx(n.code,{children:"--font-size-sm"}),", 14) | ",e.jsx(n.code,{children:"label/600/md"})," | 14 · 32 with action |"]}),`
`,e.jsxs(n.p,{children:["Items and bullets are ",e.jsx(n.code,{children:"text-neutral-subtlest-default"}),", ",e.jsx(n.code,{children:"--spacing-sm"})," (6px) apart, vertically centered. The row wraps when it runs out of width."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"action",children:"Action"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Libeled Icon Button"})," On/Off is the ",e.jsx(n.code,{children:"action"})," prop: pass ",e.jsx(n.code,{children:"{ icon, label, onClick }"})," (any ",e.jsx(n.code,{children:"LabeledIconButton"})," prop) for On, omit it for Off. Figma's default is ",e.jsx(n.code,{children:"player-play-filled"}),' + "Listen".']}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"items-and-data",children:"Items and data"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Author"})," — ",e.jsx(n.code,{children:"author"})," renders a secondary ",e.jsx(n.code,{children:"Byline"})," at the row size. Add ",e.jsx(n.code,{children:"authorHref"})," to make it a link; omit it when the metadata sits inside a card that is already one link. ",e.jsx(n.code,{children:"bylineProps"})," passes the rest (",e.jsx(n.code,{children:"showAvatar"}),", ",e.jsx(n.code,{children:"avatar"}),", ",e.jsx(n.code,{children:"disabled"}),"…)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Publish date"})," — rendered as ",e.jsx(n.code,{children:"<time>"}),". A ",e.jsx(n.code,{children:"Date"})," is formatted with ",e.jsx(n.code,{children:"formatDate"}),' (default "Nov 5, 2026", en-US) and fills ',e.jsx(n.code,{children:"dateTime"}),' with its ISO string; a string ("1 day ago") is shown as is, with ',e.jsx(n.code,{children:"dateTime"})," set by the prop of that name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Read time"}),' — a number renders as "6 min"; a string is shown as is.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Episode number"}),' — a number renders as "Ep. 2381"; a string is shown as is.']}),`
`]}),`
`,e.jsxs(n.p,{children:["In a card whose title link is stretched over it (",e.jsx(n.code,{children:"ArticleHeading"})," with ",e.jsx(n.code,{children:"stretched"}),"), the action and a linked author sit above that link (",e.jsx(n.code,{children:"z-index: 1"}),") and stay clickable; a static author lets clicks through to the card link."]}),`
`,e.jsxs(n.p,{children:["An item renders only when its ",e.jsx(n.code,{children:"show*"})," flag is on (Figma ",e.jsx(n.code,{children:"Show Author"}),", ",e.jsx(n.code,{children:"Show Publish Date"}),", ",e.jsx(n.code,{children:"Show ReadTime"}),", ",e.jsx(n.code,{children:"Show Ep Number"}),"; all on by default) ",e.jsx(n.strong,{children:"and"})," it has a value. Bullets follow the visible items and are hidden from assistive technology."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick type, size and action. The row is drawn with its real measurements; the panel lists the tokens that apply. Hover a token to see where it acts."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:["The row has no state of its own; its interactive children do. The action (",e.jsx(n.code,{children:"LabeledIconButton"}),") and the author link (",e.jsx(n.code,{children:"Byline"}),") in every Figma state (hover, pressed and focus are forced for review):"]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"full-matrix",children:"Full matrix"}),`
`,e.jsx(n.p,{children:"All 16 Figma variants: type × action × size."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"ArticleMetadata.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar). The action and the author link use the ",e.jsx(n.code,{children:"LabeledIconButton"})," and ",e.jsx(n.code,{children:"Byline"})," tokens."]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(c,{of:d}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'default' \\| 'feed' \\| 'inverted' \\| 'article'"})," | ",e.jsx(n.code,{children:"'feed'"})," | Figma ",e.jsx(n.code,{children:"Type"}),`: order of the items |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'md'"})," | ",e.jsx(n.code,{children:"'sm'"}),` | 12 or 14 px items |
| `,e.jsx(n.code,{children:"action"})," | ",e.jsx(n.code,{children:"LabeledIconButtonProps"})," (",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"onClick"}),`…) | — | Leading action; omit for Off |
| `,e.jsx(n.code,{children:"author"})," | ",e.jsx(n.code,{children:"string"}),` | — | Author name (Byline) |
| `,e.jsx(n.code,{children:"authorHref"})," | ",e.jsx(n.code,{children:"string"}),` | — | Author page; omit for static text |
| `,e.jsx(n.code,{children:"bylineProps"})," | ",e.jsx(n.code,{children:"Partial<BylineProps>"})," | — | ",e.jsx(n.code,{children:"showAvatar"}),", ",e.jsx(n.code,{children:"avatar"}),", ",e.jsx(n.code,{children:"disabled"}),`… |
| `,e.jsx(n.code,{children:"publishDate"})," | ",e.jsx(n.code,{children:"string \\| Date"})," | — | Shown in a ",e.jsx(n.code,{children:"<time>"}),` |
| `,e.jsx(n.code,{children:"dateTime"})," | ",e.jsx(n.code,{children:"string"})," | ISO of a ",e.jsx(n.code,{children:"Date"})," | ",e.jsx(n.code,{children:"<time dateTime>"}),` |
| `,e.jsx(n.code,{children:"formatDate"})," | ",e.jsx(n.code,{children:"(date: Date) => string"}),' | "Nov 5, 2026" | Formats a ',e.jsx(n.code,{children:"Date"})," ",e.jsx(n.code,{children:"publishDate"}),` |
| `,e.jsx(n.code,{children:"readTime"})," | ",e.jsx(n.code,{children:"string \\| number"}),` | — | Number → "6 min" |
| `,e.jsx(n.code,{children:"episodeNumber"})," | ",e.jsx(n.code,{children:"string \\| number"}),` | — | Number → "Ep. 50" |
| `,e.jsx(n.code,{children:"showAuthor"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show Author"}),` |
| `,e.jsx(n.code,{children:"showPublishDate"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show Publish Date"}),` |
| `,e.jsx(n.code,{children:"showReadTime"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show ReadTime"}),` |
| `,e.jsx(n.code,{children:"showEpisodeNumber"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show Ep Number"}),` |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<div>"})," attributes via spread (",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"aria-*"}),", ",e.jsx(n.code,{children:"data-*"}),", etc.)."]}),`
`]})]})}function M(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{M as default};
