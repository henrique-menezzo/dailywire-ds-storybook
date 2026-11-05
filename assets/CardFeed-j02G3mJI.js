import{u as t,j as e,M as o,C as i,A as c}from"./iframe-BaE-r_tL.js";import{C as d,D as l,a as h,B as a,S as x,F as j,I as p,b as m,T as u}from"./CardFeed.stories-Dv2KQI8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./ArticleHeading.module-Ca3flQOu.js";import"./index-DO2tlVwn.js";import"./index-nDlySgPZ.js";import"./ArticleHeading-BgCBkznm.js";import"./ArticleVideo-DY64P19u.js";import"./IconButton-C0K0oZpp.js";import"./Icon-D8yVe6yW.js";import"./Avatar-DfOPemCI.js";import"./Badge-DXeWmLrm.js";import"./Byline-CDW89dVi.js";import"./Link-Bo7zJKQL.js";function s(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"cardfeed",children:"CardFeed"}),`
`,e.jsxs(n.p,{children:[`A feed item for articles, episodes, live blogs and shorts: avatar, byline row with a more button, title, optional description and media.
The whole card is one link (the title), with the more button, a linked byline and the shorts video as separate controls on top.
Spec from Figma `,e.jsx(n.code,{children:"Card Feed"}),` (12354:203104, doc frame 11904:206370), section "Article" (8413:56868) on page "↳ Content":
`,e.jsx(n.code,{children:"Content"})," Article Free | Article Premium | Episode | Live Blog | Shorts × ",e.jsx(n.code,{children:"Breakpoint"})," Desktop | Mobile × ",e.jsx(n.code,{children:"InteractionState"}),` default | hovered | pressed (30 variants).
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { CardFeed } from '@henriquemenezzo/dailywire-ds/components/card-feed'

<CardFeed
  content="article-free"
  href="/news/three-counties"
  author="Jennie Tyler"
  label="Article"
  date="3 min ago"
  dateTime="2026-11-05T14:57:00Z"
  title="Three Counties That Decide Pennsylvania"
  description="The FBI recently warned California authorities…"
  imageSrc="/media/three-counties.jpg"
  onMoreClick={openMenu}
/>
`})}),`
`,e.jsxs(n.p,{children:["Built from DS parts: ",e.jsx(n.code,{children:"Avatar"}),", ",e.jsx(n.code,{children:"Byline"})," (primary), ",e.jsx(n.code,{children:"IconButton"})," (ghost · ",e.jsx(n.code,{children:"dots-vertical"}),"), ",e.jsx(n.code,{children:"ArticleHeading"})," (the stretched title link), ",e.jsx(n.code,{children:"Badge"})," (translucid, episode duration) and ",e.jsx(n.code,{children:"ArticleVideo"}),` (shorts).
Figma's Thumbnail and Episode thumb live outside the Article section, so the picture is a plain `,e.jsx(n.code,{children:"<img>"})," (",e.jsx(n.code,{children:"imageSrc"})," / ",e.jsx(n.code,{children:"imageAlt"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Content"})," is the ",e.jsx(n.code,{children:"content"})," prop. It sets the default texts and avatar type of each kind, and what the card draws:"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"content"}),` | Avatar | Label | Title | Description | Media |
|-----------|--------|-------|-------|-------------|-------|
| `,e.jsx(n.code,{children:"article-free"})," | ",e.jsx(n.code,{children:"initials"}),` | "Article" | Libre Franklin | yes | 16:9 picture |
| `,e.jsx(n.code,{children:"article-premium"})," | ",e.jsx(n.code,{children:"host"}),' | "Opinion" | ',e.jsx(n.strong,{children:"Libre Caslon"})," (",e.jsx(n.code,{children:'ArticleHeading tone="exclusive"'}),`) | yes | 16:9 picture |
| `,e.jsx(n.code,{children:"episode"})," | ",e.jsx(n.code,{children:"show"}),' (rounded square) | "Ep. 1520" | Libre Franklin | — | 16:9 thumbnail + duration ',e.jsx(n.code,{children:"Badge"}),` |
| `,e.jsx(n.code,{children:"live-blog"})," | ",e.jsx(n.code,{children:"dw-plus"}),` | brand dot + "Live blog" | Libre Franklin | yes | 16:9 picture |
| `,e.jsx(n.code,{children:"shorts"})," | ",e.jsx(n.code,{children:"host"}),' | "Short" | Libre Franklin | — | 9:16 ',e.jsx(n.code,{children:"ArticleVideo"})," |"]}),`
`,e.jsxs(n.p,{children:["Every text is a prop with the Figma text as default (",e.jsx(n.code,{children:"author"}),", ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"description"}),", ",e.jsx(n.code,{children:"duration"}),"). An empty ",e.jsx(n.code,{children:"description"}),` hides it.
Figma draws no lock or premium badge on Article Premium: the serif title is the only difference.`]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Breakpoint"})," axis is ",e.jsx(n.strong,{children:"not a prop"}),". The card is a size container and switches on its own width (",e.jsx(n.code,{children:"tokens.css"})," has no breakpoint tokens, so the limit sits between the Figma frames, 608 and 361):"]}),`
`,e.jsxs(n.p,{children:[`| Breakpoint | Card width | Avatar | Byline row | Title | More button | Column gap | Shorts video |
|------------|------------|--------|------------|-------|-------------|------------|--------------|
| Desktop | ≥ 480 | `,e.jsx(n.code,{children:"sm"})," 48 | label/400/md (14) | heading/500/md (24) | ghost · ",e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"--spacing-4xl"}),` | 3/5 of the column |
| Mobile | < 480 | `,e.jsx(n.code,{children:"2xsm"})," 32 | label/400/sm (12) | heading/500/xs (16) | ghost · ",e.jsx(n.code,{children:"xsm"})," | ",e.jsx(n.code,{children:"--spacing-3xl"})," | 2/3 of the column |"]}),`
`,e.jsxs(n.p,{children:["The episode badge goes from ",e.jsx(n.code,{children:"md"})," to ",e.jsx(n.code,{children:"sm"})," and the live dot from 8 to 6px."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"card-link-and-secondary-actions",children:"Card link and secondary actions"}),`
`,e.jsxs(n.p,{children:["The title is the card's only link: ",e.jsx(n.code,{children:"ArticleHeading"})," with ",e.jsx(n.code,{children:"stretched"}),`, so its hit area covers the whole card and hovering anywhere on it recolors the title.
Controls that do something else sit `,e.jsx(n.strong,{children:"outside"})," the ",e.jsx(n.code,{children:"<a>"})," and above it:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["the more button (",e.jsx(n.code,{children:"onMoreClick"}),", ",e.jsx(n.code,{children:"moreLabel"}),", ",e.jsx(n.code,{children:"moreButtonProps"})," for ",e.jsx(n.code,{children:"aria-haspopup"})," / ",e.jsx(n.code,{children:"aria-expanded"}),");"]}),`
`,e.jsxs(n.li,{children:["the byline, when ",e.jsx(n.code,{children:"authorHref"})," is set (a ",e.jsx(n.code,{children:"Link"}),"); without it the byline is plain text and clicks go to the card;"]}),`
`,e.jsx(n.li,{children:"the shorts video (mute and play / pause buttons, click to play)."}),`
`]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"in-a-feed",children:"In a feed"}),`
`,e.jsx(n.p,{children:"The card has no outer spacing: the page sets the gap between items."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Keyboard focus lands on the title link and draws ",e.jsx(n.code,{children:"--focus-ring-width"})," in ",e.jsx(n.code,{children:"--color-focus-info-bold-default"})," around the ",e.jsx(n.strong,{children:"whole card"})," (",e.jsx(n.code,{children:"--focus-ring-offset"}),", ",e.jsx(n.code,{children:"--border-radius-md"})," corners), since the link covers it. Figma has no focused variant; ",e.jsx(n.code,{children:'interactionState="focused"'})," shows it in the docs."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsxs(n.p,{children:["Pick Content, Breakpoint and InteractionState. The card is drawn at the Figma frame width with its real measurements; the panel lists the card tokens that apply, plus the title rules from ",e.jsx(n.code,{children:"ArticleHeading"})," (which owns the hovered / pressed colors)."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:["All 30 Figma variants (plus the focus ring), Desktop then Mobile. ",e.jsx(n.code,{children:"InteractionState"})," only recolors the title: ",e.jsx(n.code,{children:"--color-text-neutral-bold-default"})," → ",e.jsx(n.code,{children:"-hovered"})," → ",e.jsx(n.code,{children:"-pressed"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"CardFeed.module.css"})," with the token it uses, resolved for the active theme: Desktop (base) first, then the Mobile container query. ",e.jsx(n.code,{children:"Avatar"}),", ",e.jsx(n.code,{children:"Byline"}),", ",e.jsx(n.code,{children:"IconButton"}),", ",e.jsx(n.code,{children:"ArticleHeading"}),", ",e.jsx(n.code,{children:"Badge"})," and ",e.jsx(n.code,{children:"ArticleVideo"})," document their own tokens."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The root is an ",e.jsx(n.code,{children:"<article>"})," named by its title (",e.jsx(n.code,{children:"aria-labelledby"}),"). ",e.jsx(n.code,{children:"headingLevel"})," sets the title element (default ",e.jsx(n.code,{children:"h3"}),")."]}),`
`,e.jsx(n.li,{children:"One link per card (the title); no interactive element is nested in it. The avatar, label, date, description and picture belong to the link's hit area."}),`
`,e.jsxs(n.li,{children:["The more button is an ",e.jsx(n.code,{children:"IconButton"})," named by ",e.jsx(n.code,{children:"moreLabel"}),' ("More options"); pass ',e.jsx(n.code,{children:"moreButtonProps"})," for menu semantics. Its hit area grows to ",e.jsx(n.code,{children:"--touch-target-min"})," on touch screens."]}),`
`,e.jsxs(n.li,{children:["The picture is decorative by default (",e.jsx(n.code,{children:'imageAlt=""'}),"): the title names the card. Set ",e.jsx(n.code,{children:"imageAlt"})," when the picture adds information."]}),`
`,e.jsxs(n.li,{children:['The live dot is decorative; "Live blog" carries the meaning. The duration badge has a screen-reader prefix (',e.jsx(n.code,{children:"durationLabel"}),', "Duration").']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dateTime"})," renders the date as ",e.jsx(n.code,{children:"<time dateTime>"}),"."]}),`
`,e.jsxs(n.li,{children:["Avatar, more button and duration badge exist once per breakpoint; the other one is ",e.jsx(n.code,{children:"display: none"}),", so it is neither visible nor announced."]}),`
`,e.jsxs(n.li,{children:["The title color transition stops under ",e.jsx(n.code,{children:"prefers-reduced-motion"})," (ArticleHeading)."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(c,{of:d}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"content"})," | ",e.jsx(n.code,{children:"'article-free' \\| 'article-premium' \\| 'episode' \\| 'live-blog' \\| 'shorts'"})," | ",e.jsx(n.code,{children:"'article-free'"})," | Figma ",e.jsx(n.code,{children:"Content"}),`; sets defaults and media |
| `,e.jsx(n.code,{children:"href"})," | ",e.jsx(n.code,{children:"string"}),` | — | Card destination (the title link) |
| `,e.jsx(n.code,{children:"linkProps"})," | ",e.jsx(n.code,{children:"AnchorHTMLAttributes"})," | — | Extra attributes for the title ",e.jsx(n.code,{children:"<a>"})," (",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"rel"}),", ",e.jsx(n.code,{children:"onClick"}),`…) |
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"string"}),` | Figma text | Card title |
| `,e.jsx(n.code,{children:"headingLevel"})," | ",e.jsx(n.code,{children:"2 \\| 3 \\| 4 \\| 5 \\| 6"})," | ",e.jsx(n.code,{children:"3"}),` | Title element |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"string"})," | Figma text (article / live blog) | 3 lines max; ",e.jsx(n.code,{children:"''"}),` hides it |
| `,e.jsx(n.code,{children:"author"})," · ",e.jsx(n.code,{children:"authorHref"})," | ",e.jsx(n.code,{children:"string"})," | Figma text · — | Byline; with ",e.jsx(n.code,{children:"authorHref"}),` it is a link outside the card link |
| `,e.jsx(n.code,{children:"avatar"})," | ",e.jsx(n.code,{children:"{ type?, src?, initials? }"})," | per ",e.jsx(n.code,{children:"content"}),` | Leading avatar (decorative); initials fall back to the author's |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"}),` | Figma text | Kind label after the byline |
| `,e.jsx(n.code,{children:"date"})," · ",e.jsx(n.code,{children:"dateTime"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'3 min ago'"})," · — | Date text; ",e.jsx(n.code,{children:"dateTime"})," renders ",e.jsx(n.code,{children:"<time>"}),` |
| `,e.jsx(n.code,{children:"imageSrc"})," · ",e.jsx(n.code,{children:"imageAlt"})," | ",e.jsx(n.code,{children:"string"})," | — · ",e.jsx(n.code,{children:"''"})," | 16:9 picture (all but ",e.jsx(n.code,{children:"shorts"}),`) |
| `,e.jsx(n.code,{children:"duration"})," · ",e.jsx(n.code,{children:"durationLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'1h 20m'"})," · ",e.jsx(n.code,{children:"'Duration'"}),` | Episode badge |
| `,e.jsx(n.code,{children:"video"})," | ",e.jsx(n.code,{children:"ArticleVideoProps"})," (no ",e.jsx(n.code,{children:"aspect"}),") | — | Shorts video (",e.jsx(n.code,{children:"src"}),", ",e.jsx(n.code,{children:"poster"}),", ",e.jsx(n.code,{children:"autoPlay"}),", ",e.jsx(n.code,{children:"muted"}),"…); ",e.jsx(n.code,{children:"label"}),` defaults to the title |
| `,e.jsx(n.code,{children:"showMore"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | Figma Icon Button |
| `,e.jsx(n.code,{children:"moreLabel"})," · ",e.jsx(n.code,{children:"onMoreClick"})," · ",e.jsx(n.code,{children:"moreButtonProps"})," | — | ",e.jsx(n.code,{children:"'More options'"}),` | More button |
| `,e.jsx(n.code,{children:"interactionState"})," | ",e.jsx(n.code,{children:"'default' \\| 'hovered' \\| 'pressed' \\| 'focused'"})," | ",e.jsx(n.code,{children:"'default'"}),` | Forces a state for docs / QA |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra class on the root |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ref"})," points at the root ",e.jsx(n.code,{children:"<article>"}),". Other ",e.jsx(n.code,{children:"<article>"})," attributes are forwarded."]}),`
`]})]})}function P(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{P as default};
