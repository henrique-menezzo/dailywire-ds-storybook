import{u as d,j as e,M as o,C as t,A as a}from"./iframe-BaE-r_tL.js";import{S as i,D as c,B as l,a as h,b as x,W as j,I as m,c as p,T as u}from"./SummaryNews.stories-D4BW0Nqh.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./SummaryNews-TPwkPb1M.js";import"./LiveUpdateSummary-BOvBgxA7.js";import"./ArticleHeading-BgCBkznm.js";import"./ArticleMetadata-Wi7f2L0h.js";import"./Byline-CDW89dVi.js";import"./Avatar-DfOPemCI.js";import"./Link-Bo7zJKQL.js";import"./Icon-D8yVe6yW.js";import"./LabeledIconButton-CKdeHl5r.js";function r(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(s.h1,{id:"summarynews",children:"SummaryNews"}),`
`,e.jsxs(s.p,{children:["The latest entries of a live coverage, as a timeline: a status dot and a rail line on the leading side of each ",e.jsx(s.code,{children:"LiveUpdateSummary"}),`.
Three Figma breakpoints (Desktop, Tablet, Mobile) that differ in width only, and four dot statuses.
Spec from Figma `,e.jsx(s.code,{children:"Summary news"}),' (9113:51329, doc frame 9131:57788), section "Article" on page "↳ Content". Each row nests a ',e.jsx(s.code,{children:"Live Updates Article Summary"})," (the DS ",e.jsx(s.code,{children:"LiveUpdateSummary"}),", which nests ",e.jsx(s.code,{children:"ArticleMetadata"}),") and a ",e.jsx(s.code,{children:"StatusDot"}),`. StatusDot is not a DS component: the dot is drawn inside this component.
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { SummaryNews } from '@henriquemenezzo/dailywire-ds/components/summary-news'

<SummaryNews
  headingLevel={4}
  items={updates.map((u) => ({
    id: u.id,
    href: \`/live/\${story.slug}#\${u.id}\`,
    publishDate: new Date(u.publishedAt),
    formatDate: timeAgo,
    title: u.headline,
  }))}
/>
`})}),`
`,e.jsxs(s.p,{children:["Renders a ",e.jsx(s.code,{children:'<ul role="list">'}),"; each entry is an ",e.jsx(s.code,{children:"<li>"})," holding the decorative rail and a ",e.jsx(s.code,{children:"LiveUpdateSummary"})," (",e.jsx(s.code,{children:"<article>"}),", headline as ",e.jsx(s.code,{children:"h3"})," by default)."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(s.p,{children:[`| Part | Spec |
|------|------|
| Surface | `,e.jsx(s.code,{children:"background-neutral-bold-default"}),", ",e.jsx(s.code,{children:"--spacing-lg"}),` (12) above and below the entries |
| Row | Rail (`,e.jsx(s.code,{children:"--size-xs"}),", 12) + entry, ",e.jsx(s.code,{children:"--spacing-2xl"}),` (20) apart; rows touch, so the rail lines join the dots |
| Status dot | Figma StatusDot · Size sm: a 6px dot (`,e.jsx(s.code,{children:"--primitive-dimension-dimension-1-5"}),") centered in a 12px box, ",e.jsx(s.code,{children:"--border-radius-full"}),` |
| Rail line | `,e.jsx(s.code,{children:"--border-default"})," (1px) wide, ",e.jsx(s.code,{children:"border-neutral-bold-default"}),`, from under the dot to the bottom of the row |
| Entry | `,e.jsx(s.code,{children:"LiveUpdateSummary"}),", ",e.jsx(s.code,{children:"--spacing-2xl"}),` (20) below it |
| Edge fades | Figma "Overlay top / bottom": `,e.jsx(s.code,{children:"--size-md"})," (20) tall gradients from the surface color to ",e.jsx(s.code,{children:"overlay-neutral-subtlest-default"})," (transparent), over the entries and ignored by the pointer |"]}),`
`,e.jsxs(s.p,{children:["The rail is ",e.jsx(s.code,{children:"aria-hidden"}),": the date carries the time, the dot only echoes it."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(s.p,{children:["Figma's ",e.jsx(s.code,{children:"Breakpoint"})," axis (Desktop 480, Tablet 672, Mobile 361) changes nothing but the width, so the list is fluid and has no container query. Long headlines wrap and the rail grows with them."]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"status",children:"Status"}),`
`,e.jsxs(s.p,{children:["Figma draws every dot as StatusDot ",e.jsx(s.code,{children:"recent"})," and overrides the fill per row: bold, then subtlest, then subtlest disabled. Those are StatusDot's ",e.jsx(s.code,{children:"recent"}),", ",e.jsx(s.code,{children:"older"})," and ",e.jsx(s.code,{children:"stale"})," colors, so the dot defaults to that sequence by position (1st recent, 2nd older, the rest stale). Set ",e.jsx(s.code,{children:"status"})," on an item to choose it; ",e.jsx(s.code,{children:"live"})," is the red dot of a developing entry."]}),`
`,e.jsxs(s.p,{children:[`| Status | Dot |
|---|---|
| `,e.jsx(s.code,{children:"live"})," | ",e.jsx(s.code,{children:"icon-live-bold-default"}),` |
| `,e.jsx(s.code,{children:"recent"})," | ",e.jsx(s.code,{children:"icon-neutral-bold-default"}),` |
| `,e.jsx(s.code,{children:"older"})," | ",e.jsx(s.code,{children:"icon-neutral-subtlest-default"}),` |
| `,e.jsx(s.code,{children:"stale"})," | ",e.jsx(s.code,{children:"icon-neutral-subtlest-disabled"})," |"]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"links-and-data",children:"Links and data"}),`
`,e.jsxs(s.p,{children:["Each item takes the ",e.jsx(s.code,{children:"LiveUpdateSummary"})," props (",e.jsx(s.code,{children:"title"}),", ",e.jsx(s.code,{children:"href"}),", ",e.jsx(s.code,{children:"publishDate"}),", ",e.jsx(s.code,{children:"dateTime"}),", ",e.jsx(s.code,{children:"formatDate"}),", ",e.jsx(s.code,{children:"linkProps"}),", ",e.jsx(s.code,{children:"metadataProps"}),") plus ",e.jsx(s.code,{children:"id"})," (React key) and ",e.jsx(s.code,{children:"status"}),". With ",e.jsx(s.code,{children:"href"}),", the entry is one link stretched over its row text. Without, it is static text, as Figma draws it:"]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick a breakpoint. The list is drawn at that Figma width with its real measurements; the panel lists the tokens that apply. Hover a token to see where it acts."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["The list has no state of its own. Each entry has the ",e.jsx(s.code,{children:"LiveUpdateSummary"})," states (date and headline turn hovered or pressed together; focus rings the headline), shown here forced with ",e.jsx(s.code,{children:"data-state"}),":"]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"SummaryNews.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar). The entries use the ",e.jsx(s.code,{children:"LiveUpdateSummary"})," tokens."]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(a,{of:i}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"items"})," | ",e.jsx(s.code,{children:"SummaryNewsItem[]"})," | Figma's three entries | Newest first. ",e.jsx(s.code,{children:"LiveUpdateSummary"})," props + ",e.jsx(s.code,{children:"id?"})," + ",e.jsx(s.code,{children:"status?"}),` |
| `,e.jsx(s.code,{children:"headingLevel"})," | ",e.jsx(s.code,{children:"2 \\| 3 \\| 4 \\| 5 \\| 6"})," | ",e.jsx(s.code,{children:"3"}),` | Heading element of every headline |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"SummaryNewsItem.status"}),": ",e.jsx(s.code,{children:"'live' \\| 'recent' \\| 'older' \\| 'stale'"}),", default by position."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<ul>"})," attributes via spread (",e.jsx(s.code,{children:"id"}),", ",e.jsx(s.code,{children:"aria-*"}),", ",e.jsx(s.code,{children:"data-*"}),", etc.). Name the list with ",e.jsx(s.code,{children:"aria-label"})," when nothing labels it."]}),`
`]})]})}function M(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{M as default};
