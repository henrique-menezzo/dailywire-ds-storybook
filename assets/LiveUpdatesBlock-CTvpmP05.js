import{u as r,j as e,M as l,C as i,A as o}from"./iframe-BaE-r_tL.js";import{L as t,D as c,B as a,C as h,W as x,I as p,S as j,T as m}from"./LiveUpdatesBlock.stories-C9FyBsJi.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./index-DTA9Iiqt.js";import"./index-dPPx6LzB.js";import"./ArticleBlock-DA1qK7aW.js";import"./ArticleHeading-BgCBkznm.js";import"./ArticleMetadata-Wi7f2L0h.js";import"./Byline-CDW89dVi.js";import"./Avatar-DfOPemCI.js";import"./Link-Bo7zJKQL.js";import"./Icon-D8yVe6yW.js";import"./LabeledIconButton-CKdeHl5r.js";import"./IconButton-C0K0oZpp.js";import"./LiveUpdatesSlider-CxilVZVN.js";import"./ArticleVideo-DY64P19u.js";import"./SummaryNews-TPwkPb1M.js";import"./LiveUpdateSummary-BOvBgxA7.js";function n(d){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...r(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(s.h1,{id:"liveupdatesblock",children:"LiveUpdatesBlock"}),`
`,e.jsxs(s.p,{children:[`The live coverage module of a news page: a "Live Updates" header, the lead story, the media slider, the latest updates as a timeline and a link to all of them.
Three Figma breakpoints (Desktop, Tablet, Mobile), switched by the block's own width.
Spec from Figma `,e.jsx(s.code,{children:"Live Updates block"}),' (9113:51726, doc frame 9160:66974), section "Article" on page "↳ Content". It nests the DS ',e.jsx(s.code,{children:"ArticleBlock"}),", ",e.jsx(s.code,{children:"LiveUpdatesSlider"}),' (Figma "Slider Live Updates"), ',e.jsx(s.code,{children:"SummaryNews"})," and ",e.jsx(s.code,{children:"Link"}),` (Figma "Link Button"). Figma's `,e.jsx(s.code,{children:"SectionHeader"})," and ",e.jsx(s.code,{children:"StatusDot"})," are not DS components: the default header is drawn inside this component, and ",e.jsx(s.code,{children:"header"}),` replaces it.
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { LiveUpdatesBlock } from '@henriquemenezzo/dailywire-ds/components/live-updates-block'

<LiveUpdatesBlock
  timestamp={new Date(story.updatedAt)}
  formatTimestamp={timeAgo}
  article={{ href: story.url, title: story.title, description: story.standfirst, onMoreClick: openMenu }}
  slides={story.media.map((m) => ({ type: 'image', src: m.url, alt: m.alt }))}
  updates={story.updates.map((u) => ({ id: u.id, href: u.url, publishDate: new Date(u.at), formatDate: timeAgo, title: u.headline }))}
  viewAllHref={\`\${story.url}#updates\`}
/>
`})}),`
`,e.jsxs(s.p,{children:["Renders a ",e.jsx(s.code,{children:"<section>"})," named by its header label. Headings: the label is an ",e.jsx(s.code,{children:"h2"})," (",e.jsx(s.code,{children:"headingLevel"}),"), the lead title an ",e.jsx(s.code,{children:"h3"}),", each update an ",e.jsx(s.code,{children:"h4"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.p,{children:"The block fills its container; resize the canvas to see it switch layouts."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(s.p,{children:[`| Part | Component | Figma |
|------|-----------|-------|
| Header | private (`,e.jsx(s.code,{children:"header"}),` slot replaces it) | SectionHeader · static · live · sm · Show Timestamp: live dot, label, bullet, timestamp |
| Lead story | `,e.jsx(s.code,{children:"ArticleBlock"})," (",e.jsx(s.code,{children:"article"}),` prop) | ArticleBlock · xl (lg on mobile) · Show Metadata off |
| Media | `,e.jsx(s.code,{children:"LiveUpdatesSlider"})," (",e.jsx(s.code,{children:"slides"}),", ",e.jsx(s.code,{children:"sliderProps"}),`) | Slider Live Updates · Content 3 |
| Updates | `,e.jsx(s.code,{children:"SummaryNews"})," (",e.jsx(s.code,{children:"updates"}),`) | Summary news |
| View all | `,e.jsx(s.code,{children:"Link"})," primary · md · semibold · underline · ",e.jsx(s.code,{children:"arrow-right"})," (",e.jsx(s.code,{children:"viewAllHref"}),') | Link Button "View All Updates" |']}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Default header"})," — a 16px box (",e.jsx(s.code,{children:"--size-sm"}),") with an 8px ",e.jsx(s.code,{children:"icon-live-bold-default"})," dot (",e.jsx(s.code,{children:"--size-2xs"}),", Figma StatusDot · live · md), then the label (",e.jsx(s.code,{children:"label/600/md"}),", ",e.jsx(s.code,{children:"text-neutral-bold-default"}),", the heading), a bullet (",e.jsx(s.code,{children:"label/400/md"}),", ",e.jsx(s.code,{children:"text-neutral-subtlest-default"}),", hidden from assistive technology) and the timestamp (",e.jsx(s.code,{children:"label/600/sm"}),", ",e.jsx(s.code,{children:"text-brand-bold-default"}),", a ",e.jsx(s.code,{children:"<time>"}),"), ",e.jsx(s.code,{children:"--spacing-sm"})," apart. ",e.jsx(s.code,{children:"timestamp={null}"})," hides the bullet and timestamp (Figma Show Timestamp off)."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(s.p,{children:["Figma's ",e.jsx(s.code,{children:"Breakpoint"})," axis is responsive CSS: container queries on the block's own width, with the Figma frame widths as limits (tokens.css has no breakpoint tokens)."]}),`
`,e.jsxs(s.p,{children:[`| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 768 | One column: lead (`,e.jsx(s.code,{children:"--spacing-4xl"})," top and bottom, ",e.jsx(s.code,{children:"--spacing-xl"})," sides) · slider full bleed · updates (",e.jsx(s.code,{children:"--spacing-xl"})," sides, ",e.jsx(s.code,{children:"--spacing-3xl"})," above, between and below). ArticleBlock ",e.jsx(s.code,{children:"lg"}),`. |
| Tablet | 768 – 1375 | Mobile layout with `,e.jsx(s.code,{children:"--spacing-6xl"})," sides. ArticleBlock ",e.jsx(s.code,{children:"xl"}),`. |
| Desktop | ≥ 1376 | Lead, updates and link in a column beside the slider (480 : 864, the Figma widths at 1376), `,e.jsx(s.code,{children:"--spacing-4xl"})," gaps, no outer padding. ArticleBlock ",e.jsx(s.code,{children:"xl"}),". |"]}),`
`,e.jsxs(s.p,{children:["The slider picks its own ratio and corners from its width (rounded from 864px). Desktop starts at 1376px so the slider always gets its desktop size beside the lead column. The ArticleBlock size is a prop, so the block renders an ",e.jsx(s.code,{children:"xl"})," and an ",e.jsx(s.code,{children:"lg"})," copy and shows one per width (",e.jsx(s.code,{children:"display: none"})," keeps the other out of the accessibility tree and the tab order). For that reason ",e.jsx(s.code,{children:"article"})," takes no ",e.jsx(s.code,{children:"id"}),"."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"header-slot",children:"Header slot"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"header"})," replaces the default header. Name the section yourself then, with ",e.jsx(s.code,{children:"aria-labelledby"})," or ",e.jsx(s.code,{children:"aria-label"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"data",children:"Data"}),`
`,e.jsxs(s.p,{children:["Every text is a prop with the Figma text as default: ",e.jsx(s.code,{children:"label"}),' ("Live Updates"), ',e.jsx(s.code,{children:"timestamp"}),' ("1m ago"), the ',e.jsx(s.code,{children:"article"})," title and description, the ",e.jsx(s.code,{children:"updates"})," and ",e.jsx(s.code,{children:"viewAllLabel"}),' ("View All Updates"). ',e.jsx(s.code,{children:"slides"})," is required (images, videos or custom content; no default media). Without ",e.jsx(s.code,{children:"viewAllHref"})," the link is not drawn. A ",e.jsx(s.code,{children:"Date"})," ",e.jsx(s.code,{children:"timestamp"})," fills ",e.jsx(s.code,{children:"<time dateTime>"})," and goes through ",e.jsx(s.code,{children:"formatTimestamp"}),"."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick a breakpoint. The block is drawn at that Figma width with its real measurements; the panel lists the tokens that apply at that width. Hover a token to see where it acts."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["The block has no state of its own; its links do. The lead story (",e.jsx(s.code,{children:"ArticleBlock"}),"), every update (",e.jsx(s.code,{children:"LiveUpdateSummary"}),') and "View All Updates" (',e.jsx(s.code,{children:"Link"}),") forced to each state with ",e.jsx(s.code,{children:"data-state"}),":"]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"LiveUpdatesBlock.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar): shared rules, then each breakpoint range. Nested components use their own tokens."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(o,{of:t}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"slides"})," | ",e.jsx(s.code,{children:"LiveUpdatesSlide[]"})," | — (required) | Slider media: ",e.jsx(s.code,{children:"{ type: 'image', src, alt }"}),", ",e.jsx(s.code,{children:"{ type: 'video', … }"}),", ",e.jsx(s.code,{children:"{ type: 'custom', content }"}),` |
| `,e.jsx(s.code,{children:"sliderProps"})," | ",e.jsx(s.code,{children:"Partial<LiveUpdatesSliderProps>"})," | — | ",e.jsx(s.code,{children:"defaultIndex"}),", ",e.jsx(s.code,{children:"index"}),", ",e.jsx(s.code,{children:"onIndexChange"}),", ",e.jsx(s.code,{children:"label"}),`… |
| `,e.jsx(s.code,{children:"article"})," | ",e.jsx(s.code,{children:"Partial<ArticleBlockProps>"})," (no ",e.jsx(s.code,{children:"size"}),", ",e.jsx(s.code,{children:"headingAs"}),", ",e.jsx(s.code,{children:"id"}),") | Figma title + description | The lead story: ",e.jsx(s.code,{children:"href"}),", ",e.jsx(s.code,{children:"title"}),", ",e.jsx(s.code,{children:"description"}),", ",e.jsx(s.code,{children:"metadata"}),", ",e.jsx(s.code,{children:"onMoreClick"}),`… |
| `,e.jsx(s.code,{children:"updates"})," | ",e.jsx(s.code,{children:"SummaryNewsItem[]"}),` | Figma's three entries | The latest updates, newest first |
| `,e.jsx(s.code,{children:"header"})," | ",e.jsx(s.code,{children:"ReactNode"}),` | — | Replaces the default header |
| `,e.jsx(s.code,{children:"label"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Live Updates'"}),` | Default header label (the section's name) |
| `,e.jsx(s.code,{children:"timestamp"})," | ",e.jsx(s.code,{children:"string \\| Date \\| null"})," | ",e.jsx(s.code,{children:"'1m ago'"})," | Default header timestamp; ",e.jsx(s.code,{children:"null"}),` hides it |
| `,e.jsx(s.code,{children:"timestampDateTime"})," | ",e.jsx(s.code,{children:"string"})," | ISO of a ",e.jsx(s.code,{children:"Date"})," | ",e.jsx(s.code,{children:"<time dateTime>"}),` |
| `,e.jsx(s.code,{children:"formatTimestamp"})," | ",e.jsx(s.code,{children:"(date: Date) => string"}),' | "3:45 PM" | Formats a ',e.jsx(s.code,{children:"Date"})," ",e.jsx(s.code,{children:"timestamp"}),` |
| `,e.jsx(s.code,{children:"headingLevel"})," | ",e.jsx(s.code,{children:"2 \\| 3 \\| 4 \\| 5 \\| 6"})," | ",e.jsx(s.code,{children:"2"}),` | Label level; lead title +1, updates +2 (max h6) |
| `,e.jsx(s.code,{children:"viewAllHref"})," | ",e.jsx(s.code,{children:"string"}),` | — | "View All Updates" target; omit to hide the link |
| `,e.jsx(s.code,{children:"viewAllLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'View All Updates'"}),` | Link text |
| `,e.jsx(s.code,{children:"viewAllProps"})," | ",e.jsx(s.code,{children:"Partial<LinkProps>"})," | — | Extra ",e.jsx(s.code,{children:"Link"}),` props |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<section>"})," attributes via spread (",e.jsx(s.code,{children:"id"}),", ",e.jsx(s.code,{children:"aria-*"}),", ",e.jsx(s.code,{children:"data-*"}),", etc.)."]}),`
`]})]})}function z(d={}){const{wrapper:s}={...r(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(n,{...d})}):n(d)}export{z as default};
