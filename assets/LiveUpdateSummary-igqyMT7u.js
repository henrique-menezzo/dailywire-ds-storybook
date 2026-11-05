import{u as d,j as e,M as a,C as n,A as o}from"./iframe-BaE-r_tL.js";import{L as i,D as c,W as h,a as l,b as x,F as j,I as m,S as p,T as u}from"./LiveUpdateSummary.stories-eIO5ea57.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./LiveUpdateSummary-BOvBgxA7.js";import"./ArticleHeading-BgCBkznm.js";import"./ArticleMetadata-Wi7f2L0h.js";import"./Byline-CDW89dVi.js";import"./Avatar-DfOPemCI.js";import"./Link-Bo7zJKQL.js";import"./Icon-D8yVe6yW.js";import"./LabeledIconButton-CKdeHl5r.js";function r(s){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(t.h1,{id:"liveupdatesummary",children:"LiveUpdateSummary"}),`
`,e.jsxs(t.p,{children:["One entry of a live coverage feed: when it was posted, then a short headline. With ",e.jsx(t.code,{children:"href"}),` the whole entry is one link.
Three Figma states (Default, hover, pressed) plus keyboard focus.
Spec from Figma `,e.jsx(t.code,{children:"Live Updates Article Summary"}),' (9133:58532, doc frame 9158:64719), section "Article" on page "↳ Content". It nests the DS ',e.jsx(t.code,{children:"ArticleMetadata"}),' (Figma "Metadata": Type Inverted, size sm, Publish Date only) and ',e.jsx(t.code,{children:"ArticleHeading"}),' (Figma "Heading-Article-Content": size xsm, weight medium). Through the metadata row it can also show ',e.jsx(t.code,{children:"Byline"})," / ",e.jsx(t.code,{children:"Avatar"})," and a ",e.jsx(t.code,{children:"LabeledIconButton"}),` action.
All visual values come from tokens in `,e.jsx(t.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"import",children:"Import"}),`
`,e.jsxs(t.p,{children:["Import design tokens ",e.jsx(t.strong,{children:"once"})," in the app entry (",e.jsx(t.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { LiveUpdateSummary } from '@henriquemenezzo/dailywire-ds/components/live-update-summary'

<LiveUpdateSummary
  href="/live/oil-prices#update-42"
  publishDate={new Date(update.publishedAt)}
  formatDate={timeAgo}
  title="New report shows glaciers melting faster than previously thought, experts say"
/>
`})}),`
`,e.jsxs(t.p,{children:["Renders an ",e.jsx(t.code,{children:"<article>"}),": the ",e.jsx(t.code,{children:"ArticleMetadata"})," row (the date as ",e.jsx(t.code,{children:"<time>"}),"), then the headline as an ",e.jsx(t.code,{children:"h3"})," (",e.jsx(t.code,{children:"headingLevel"})," changes it)."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(t.p,{children:[`| Part | Component | Figma |
|------|-----------|-------|
| Date | `,e.jsx(t.code,{children:"ArticleMetadata"})," ",e.jsx(t.code,{children:'variant="inverted"'})," ",e.jsx(t.code,{children:'size="sm"'})," | Metadata · Type Inverted · size sm · Publish Date only. Override: ",e.jsx(t.code,{children:"text-neutral-bold-default"}),` (the row's default is subtlest). |
| Headline | `,e.jsx(t.code,{children:"ArticleHeading"})," ",e.jsx(t.code,{children:'size="xsm"'})," ",e.jsx(t.code,{children:'weight="medium"'})," | Heading-Article-Content · ",e.jsx(t.code,{children:"title/500/sm"})," (14px, 120%) |"]}),`
`,e.jsxs(t.p,{children:["The two parts sit ",e.jsx(t.code,{children:"--spacing-md"})," (8px) apart in a column. The entry is fluid; Figma draws it at 348px."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"link",children:"Link"}),`
`,e.jsxs(t.p,{children:["With ",e.jsx(t.code,{children:"href"}),", the headline is the entry's only link and its hit area is stretched over the whole entry (",e.jsx(t.code,{children:"ArticleHeading"})," ",e.jsx(t.code,{children:"stretched"}),"): the accessible card pattern, one ",e.jsx(t.code,{children:"<a>"})," whose name is the headline. Hovering or pressing anywhere on the entry recolors the date and the headline together. Extra ",e.jsx(t.code,{children:"<a>"})," attributes go in ",e.jsx(t.code,{children:"linkProps"}),"."]}),`
`,e.jsxs(t.p,{children:["Without ",e.jsx(t.code,{children:"href"})," the entry is static text:"]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"data",children:"Data"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"publishDate"}),' takes a string ("10 min ago") or a ',e.jsx(t.code,{children:"Date"}),". A ",e.jsx(t.code,{children:"Date"})," fills ",e.jsx(t.code,{children:"<time dateTime>"})," with its ISO string and is shown through ",e.jsx(t.code,{children:"formatDate"}),' (default "Nov 5, 2026"); pass a relative formatter for "2 hours ago".']}),`
`,e.jsx(n,{of:l}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"metadataProps"})," reaches the rest of ",e.jsx(t.code,{children:"ArticleMetadata"})," (author, read time, an action). Items without a value are not drawn, so by default the row is the date alone, as in Figma. A linked author or an action sits above the stretched link and stays clickable."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsxs(t.p,{children:["A plain stack of entries (the timeline version with status dots is ",e.jsx(t.code,{children:"SummaryNews"}),"):"]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(t.p,{children:"Pick a state. The entry is drawn with its real measurements; the panel lists the tokens that apply. Hover a token to see where it acts."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"states",children:"States"}),`
`,e.jsxs(t.p,{children:["The Figma states plus keyboard focus (forced for review with ",e.jsx(t.code,{children:"data-state"}),"):"]}),`
`,e.jsx(n,{of:p}),`
`,e.jsxs(t.p,{children:[`| State | Date | Headline | Ring |
|---|---|---|---|
| Default | `,e.jsx(t.code,{children:"text-neutral-bold-default"})," | ",e.jsx(t.code,{children:"text-neutral-bold-default"}),` | — |
| Hover | `,e.jsx(t.code,{children:"text-neutral-bold-hovered"})," | ",e.jsx(t.code,{children:"text-neutral-bold-hovered"}),` | — |
| Pressed | `,e.jsx(t.code,{children:"text-neutral-bold-pressed"})," | ",e.jsx(t.code,{children:"text-neutral-bold-pressed"}),` | — |
| Focus | `,e.jsx(t.code,{children:"text-neutral-bold-default"})," | ",e.jsx(t.code,{children:"text-neutral-bold-default"})," | ",e.jsx(t.code,{children:"focus-info-bold-default"})," around the headline (ArticleHeading) |"]}),`
`,e.jsxs(t.p,{children:["Figma's hover is a 600ms dissolve, ease-out: both colors change over ",e.jsx(t.code,{children:"--duration-slower"})," (closest token) with ",e.jsx(t.code,{children:"--easing-ease-out"}),", and not at all under ",e.jsx(t.code,{children:"prefers-reduced-motion"}),"."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(t.p,{children:["Every property of ",e.jsx(t.code,{children:"LiveUpdateSummary.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar). The headline and the metadata row use the ",e.jsx(t.code,{children:"ArticleHeading"})," and ",e.jsx(t.code,{children:"ArticleMetadata"})," tokens."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(o,{of:i}),`
`,e.jsxs(t.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(t.code,{children:"title"})," | ",e.jsx(t.code,{children:"ReactNode"}),` | Figma headline | The headline (Figma "Headline") |
| `,e.jsx(t.code,{children:"href"})," | ",e.jsx(t.code,{children:"string"}),` | — | Makes the entry one link (stretched headline link) |
| `,e.jsx(t.code,{children:"linkProps"})," | ",e.jsx(t.code,{children:"AnchorHTMLAttributes"})," | — | Extra attributes for the ",e.jsx(t.code,{children:"<a>"})," (",e.jsx(t.code,{children:"target"}),", ",e.jsx(t.code,{children:"rel"}),", ",e.jsx(t.code,{children:"onClick"}),`…) |
| `,e.jsx(t.code,{children:"headingLevel"})," | ",e.jsx(t.code,{children:"2 \\| 3 \\| 4 \\| 5 \\| 6"})," | ",e.jsx(t.code,{children:"3"}),` | Heading element of the headline |
| `,e.jsx(t.code,{children:"publishDate"})," | ",e.jsx(t.code,{children:"string \\| Date"})," | ",e.jsx(t.code,{children:"'10 min ago'"})," | Shown in a ",e.jsx(t.code,{children:"<time>"}),` |
| `,e.jsx(t.code,{children:"dateTime"})," | ",e.jsx(t.code,{children:"string"})," | ISO of a ",e.jsx(t.code,{children:"Date"})," | ",e.jsx(t.code,{children:"<time dateTime>"}),` |
| `,e.jsx(t.code,{children:"formatDate"})," | ",e.jsx(t.code,{children:"(date: Date) => string"}),' | "Nov 5, 2026" | Formats a ',e.jsx(t.code,{children:"Date"})," ",e.jsx(t.code,{children:"publishDate"}),` |
| `,e.jsx(t.code,{children:"metadataProps"})," | ",e.jsx(t.code,{children:"Partial<ArticleMetadataProps>"})," | — | Author, read time, action… (not ",e.jsx(t.code,{children:"variant"}),", ",e.jsx(t.code,{children:"size"}),` or the date props) |
| `,e.jsx(t.code,{children:"className"})," | ",e.jsx(t.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Also accepts native ",e.jsx(t.code,{children:"<article>"})," attributes via spread (",e.jsx(t.code,{children:"id"}),", ",e.jsx(t.code,{children:"aria-*"}),", ",e.jsx(t.code,{children:"data-*"}),", etc.). ",e.jsx(t.code,{children:'data-state="hover|pressed|focus"'})," forces a state for docs and QA."]}),`
`]})]})}function I(s={}){const{wrapper:t}={...d(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}export{I as default};
