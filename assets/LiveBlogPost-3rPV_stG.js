import{u as r,j as e,M as t,C as i,A as c}from"./iframe-BaE-r_tL.js";import{P as o,D as a,C as l,I as h,a as x,b as j,c as p,W as m,B as g,d as u,S as b,T as w}from"./LiveBlogPost.stories-qWEor6uy.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./index-DTA9Iiqt.js";import"./index-DO2tlVwn.js";import"./pinned-filled-C84GsqaS.js";import"./ArticleVideo-DY64P19u.js";import"./IconButton-C0K0oZpp.js";import"./Icon-D8yVe6yW.js";import"./Avatar-DfOPemCI.js";import"./Byline-CDW89dVi.js";import"./Link-Bo7zJKQL.js";function s(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(n.h1,{id:"liveblogpost",children:"LiveBlogPost"}),`
`,e.jsxs(n.p,{children:[`One entry of a live blog: an optional "Pinned" marker, the author row (avatar, timestamp, byline) with a share button, the headline, optional media (image, video, or a tweet / YouTube embed slot) and a body that opens with "Show more".
Spec from Figma `,e.jsx(n.code,{children:"Live Blog Article"}),' (10033:13086) in the "Article" section of the "↳ Content" page: ',e.jsx(n.code,{children:"CardState"})," Closed | Opened × ",e.jsx(n.code,{children:"Content"})," VerticalVideo | Text | Image | Twitter Post | HorizontalVideo | Youtube video × ",e.jsx(n.code,{children:"Breakpoint"})," Mobile | Tablet | Desktop × ",e.jsx(n.code,{children:"Type"})," Default | Pinned, plus ",e.jsx(n.code,{children:"Show Avatar"}),` (72 variants).
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { LiveBlogPost } from '@henriquemenezzo/dailywire-ds/components/live-blog-post'

<LiveBlogPost
  title="The One Line In Iran’s Proposal That Made Trump ‘Throw It Away’"
  timestamp="3 min ago"
  dateTime="2026-11-05T14:57:00Z"
  author="Ben Shapiro"
  authorHref="/author/ben-shapiro"
  avatar={{ src: '/hosts/ben-shapiro.jpg' }}
  content="image"
  imageSrc="/media/tehran-rally.jpg"
  imageAlt="A cleric in a black turban walks through a crowd"
  onShare={() => navigator.share?.({ url: '/live/iran#post-123' })}
>
  <p>President Trump said Thursday that he immediately rejected Iran’s latest proposal…</p>
  <p>Speaking to reporters, Trump said the proposal failed to satisfy his demand…</p>
</LiveBlogPost>
`})}),`
`,e.jsxs(n.p,{children:["Built from DS parts: ",e.jsx(n.code,{children:"Avatar"})," (Hosts · 2xsm / xsm), ",e.jsx(n.code,{children:"Byline"})," (secondary · sm / md, no avatar), ",e.jsx(n.code,{children:"IconButton"})," (outline · share-2 · xsm / md), ",e.jsx(n.code,{children:"Link"})," (secondary · md · underline, as a ",e.jsx(n.code,{children:"<button>"}),") and ",e.jsx(n.code,{children:"ArticleVideo"})," (the video content). The filled pin is ",e.jsx(n.code,{children:"icons/pinned-filled.svg"}),", exported from the Figma frame."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Content"})," axis is the ",e.jsx(n.code,{children:"content"})," prop. It picks what sits between the headline and the body:"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"content"}),` | Figma | Renders |
|-----------|-------|---------|
| `,e.jsx(n.code,{children:"text"}),` | Text | No media |
| `,e.jsx(n.code,{children:"image"})," | Image | ",e.jsx(n.code,{children:"imageSrc"})," / ",e.jsx(n.code,{children:"imageAlt"})," as an ",e.jsx(n.code,{children:"<img>"})," in a 16:9 box (cover), optional ",e.jsx(n.code,{children:"imageCaption"})," (",e.jsx(n.code,{children:"<figcaption>"}),`, not drawn in Figma) |
| `,e.jsx(n.code,{children:"vertical-video"})," | VerticalVideo | ",e.jsx(n.code,{children:"ArticleVideo"})," with the ",e.jsx(n.code,{children:"video"}),` props, 2:3 box (the Figma frames are 393 × 606 · 640 × 965 · 672 × 1003) |
| `,e.jsx(n.code,{children:"horizontal-video"})," | HorizontalVideo | ",e.jsx(n.code,{children:"ArticleVideo"})," with the ",e.jsx(n.code,{children:"video"}),` props, 16:9 box |
| `,e.jsx(n.code,{children:"twitter"})," | Twitter Post | The ",e.jsx(n.code,{children:"embed"}),` slot, inside the text gutter |
| `,e.jsx(n.code,{children:"youtube"})," | Youtube video | The ",e.jsx(n.code,{children:"embed"})," slot in a 16:9 frame; its child is stretched to fill it |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"video.aspect"})," overrides the video ratio (e.g. ",e.jsx(n.code,{children:"'9/16'"})," for a full-height short)."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"embeds-twitter--x-and-youtube",children:"Embeds (Twitter / X and YouTube)"}),`
`,e.jsxs(n.p,{children:["The component ",e.jsx(n.strong,{children:"never loads third-party scripts or iframes"}),". Pass your own embed in ",e.jsx(n.code,{children:"embed"}),": a click-to-load facade, a server-rendered card, or an iframe your app is allowed to load. The stories use static placeholders built from tokens: a tweet card (Figma pins it to the Light color mode, so it sets ",e.jsx(n.code,{children:'data-theme="light"'}),') with a "View on X" link, and a still of the player with a "Watch on YouTube" link.']}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"type-pinned",children:"Type: Pinned"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"pinned"})," is Figma ",e.jsx(n.code,{children:"Type=Pinned"}),': a "Pinned" marker (',e.jsx(n.code,{children:"pinnedLabel"}),", filled pin, subtlest label/500/md · lg) above the author row, the ",e.jsx(n.code,{children:"--color-background-neutral-subtle-default"})," surface and no bottom stroke. On Desktop the pinned post becomes a card: ",e.jsx(n.code,{children:"--border-radius-lg"})," corners and its own ",e.jsx(n.code,{children:"--spacing-4xl"})," gutter, with image and video running edge to edge."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"cardstate-closed--opened",children:"CardState: Closed / Opened"}),`
`,e.jsxs(n.p,{children:["The only difference between Figma's Closed and Opened is the body: Closed clamps it to ",e.jsx(n.strong,{children:"10 lines"})," on Mobile and ",e.jsx(n.strong,{children:"8 lines"}),' from 640px, with an ellipsis and "Show more"; Opened shows all of it with "Show less". Headline and media do not change.']}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uncontrolled: ",e.jsx(n.code,{children:"defaultExpanded"}),". Controlled: ",e.jsx(n.code,{children:"expanded"})," + ",e.jsx(n.code,{children:"onExpandedChange"}),"."]}),`
`,e.jsxs(n.li,{children:["The toggle is the DS ",e.jsx(n.code,{children:"Link"})," rendered as a ",e.jsx(n.code,{children:"<button>"})," with ",e.jsx(n.code,{children:"aria-expanded"})," and ",e.jsx(n.code,{children:"aria-controls"})," pointing at the body."]}),`
`,e.jsx(n.li,{children:"While closed, the toggle only appears when the clamp actually hides text."}),`
`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"show-avatar",children:"Show Avatar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"showAvatar"})," (default ",e.jsx(n.code,{children:"true"}),") is Figma ",e.jsx(n.code,{children:"Show Avatar"}),": the author avatar before the timestamp and name. It is decorative (the author name follows it)."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Breakpoint"})," axis is ",e.jsx(n.strong,{children:"not a prop"}),": the post switches with CSS container queries on its own width. The Figma frames are Mobile 393, ",e.jsx(n.strong,{children:"Desktop 640"})," and ",e.jsx(n.strong,{children:"Tablet 768"}),": Desktop is the 640px live-blog column of a desktop page (the page supplies the gutters), Tablet is a full-width post that draws its own gutters. ",e.jsx(n.code,{children:"tokens.css"})," has no breakpoint tokens, so the limits are the Figma frame widths:"]}),`
`,e.jsxs(n.p,{children:[`| Breakpoint | Post width | Text gutter | Image / video / YouTube | Headline · body | Avatar · share | Closed body |
|------------|------------|-------------|-------------------------|-----------------|----------------|-------------|
| Mobile | < 640 | `,e.jsx(n.code,{children:"--spacing-xl"})," | Edge to edge, square corners | heading/500/md · body/400/md | 32 (",e.jsx(n.code,{children:"2xsm"}),") · 32 (",e.jsx(n.code,{children:"xsm"}),`) | 10 lines |
| Desktop | 640 – 767 | none (Pinned: `,e.jsx(n.code,{children:"--spacing-4xl"}),") | Full width, ",e.jsx(n.code,{children:"--border-radius-md"})," (Pinned: edge to edge, square) | heading/500/lg · body/400/lg | 40 (",e.jsx(n.code,{children:"xsm"}),") · 40 (",e.jsx(n.code,{children:"md"}),`) | 8 lines |
| Tablet | ≥ 768 | `,e.jsx(n.code,{children:"--spacing-6xl"})," | Inside the gutter, ",e.jsx(n.code,{children:"--border-radius-md"})," | heading/500/lg · body/400/md | 40 (",e.jsx(n.code,{children:"xsm"}),") · 40 (",e.jsx(n.code,{children:"md"}),") | 8 lines |"]}),`
`,e.jsxs(n.p,{children:["From 640px, image, horizontal video, YouTube and tweet posts space their sections ",e.jsx(n.code,{children:"--spacing-4xl"})," apart (",e.jsx(n.code,{children:"--spacing-3xl"})," otherwise, as in Figma). The avatar, byline and share button switch DS size at 640px: one copy per range is rendered and the other is ",e.jsx(n.code,{children:"display: none"}),", so only one is ever in the accessibility tree."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick Content, CardState, Type, Breakpoint and Show Avatar. The post is drawn at the frame width (scaled to fit) with its real measurements; the panel lists the tokens that apply at that width, including the container-query rules."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Every Figma variant at one breakpoint: Content (rows) × CardState · Type (columns). Switch the breakpoint in Controls."}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"LiveBlogPost.module.css"})," with the token it uses, resolved for the active theme: the shared (Mobile) rules first, then each breakpoint range. ",e.jsx(n.code,{children:"Avatar"}),", ",e.jsx(n.code,{children:"Byline"}),", ",e.jsx(n.code,{children:"IconButton"}),", ",e.jsx(n.code,{children:"Link"})," and ",e.jsx(n.code,{children:"ArticleVideo"})," document their own tokens."]}),`
`,e.jsx(i,{of:w}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The root is an ",e.jsx(n.code,{children:"<article>"})," named by its headline (",e.jsx(n.code,{children:"aria-labelledby"}),"). The headline level is ",e.jsx(n.code,{children:"headingLevel"})," (default ",e.jsx(n.code,{children:"h2"}),": the live blog page owns the ",e.jsx(n.code,{children:"h1"}),")."]}),`
`,e.jsxs(n.li,{children:["The timestamp is a ",e.jsx(n.code,{children:"<time dateTime>"})," when ",e.jsx(n.code,{children:"dateTime"})," is set."]}),`
`,e.jsxs(n.li,{children:["Share is an ",e.jsx(n.code,{children:"IconButton"})," named by ",e.jsx(n.code,{children:"shareLabel"}),' ("Share"); it is rendered only when ',e.jsx(n.code,{children:"onShare"})," is set. On touch screens its hit area grows to ",e.jsx(n.code,{children:"--touch-target-min"}),"."]}),`
`,e.jsxs(n.li,{children:['"Show more" / "Show less" is a ',e.jsx(n.code,{children:"<button>"})," with ",e.jsx(n.code,{children:"aria-expanded"})," and ",e.jsx(n.code,{children:"aria-controls"}),"; its hit area also grows to ",e.jsx(n.code,{children:"--touch-target-min"})," on touch screens. The clamp is visual only: screen readers read the whole body in both states."]}),`
`,e.jsxs(n.li,{children:["Images need a real ",e.jsx(n.code,{children:"imageAlt"}),"; videos a ",e.jsx(n.code,{children:"video.label"}),". Embeds are never fetched by the component."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(c,{of:o}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | Headline |
| `,e.jsx(n.code,{children:"headingLevel"})," | ",e.jsx(n.code,{children:"2 \\| 3 \\| 4 \\| 5 \\| 6"})," | ",e.jsx(n.code,{children:"2"}),` | Headline element |
| `,e.jsx(n.code,{children:"timestamp"})," · ",e.jsx(n.code,{children:"dateTime"})," | ",e.jsx(n.code,{children:"string"})," · ",e.jsx(n.code,{children:"string"}),' | — | Visible time ("3 min ago") and its ISO date for ',e.jsx(n.code,{children:"<time>"}),` |
| `,e.jsx(n.code,{children:"author"})," · ",e.jsx(n.code,{children:"authorHref"})," | ",e.jsx(n.code,{children:"string"})," · ",e.jsx(n.code,{children:"string"}),` | — | Byline name and optional author page |
| `,e.jsx(n.code,{children:"avatar"})," · ",e.jsx(n.code,{children:"showAvatar"})," | ",e.jsx(n.code,{children:"{ src?, type?, initials? }"})," · ",e.jsx(n.code,{children:"boolean"})," | — · ",e.jsx(n.code,{children:"true"})," | Author avatar (Figma ",e.jsx(n.code,{children:"Show Avatar"}),`) |
| `,e.jsx(n.code,{children:"pinned"})," · ",e.jsx(n.code,{children:"pinnedLabel"})," | ",e.jsx(n.code,{children:"boolean"})," · ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"false"})," · ",e.jsx(n.code,{children:"'Pinned'"})," | Figma ",e.jsx(n.code,{children:"Type=Pinned"}),` |
| `,e.jsx(n.code,{children:"content"})," | ",e.jsx(n.code,{children:"'vertical-video' \\| 'text' \\| 'image' \\| 'twitter' \\| 'horizontal-video' \\| 'youtube'"})," | ",e.jsx(n.code,{children:"'text'"})," | Figma ",e.jsx(n.code,{children:"Content"}),` |
| `,e.jsx(n.code,{children:"imageSrc"})," · ",e.jsx(n.code,{children:"imageAlt"})," · ",e.jsx(n.code,{children:"imageCaption"})," | ",e.jsx(n.code,{children:"string"})," · ",e.jsx(n.code,{children:"string"})," · ",e.jsx(n.code,{children:"ReactNode"})," | — · ",e.jsx(n.code,{children:"''"})," · — | ",e.jsx(n.code,{children:'content="image"'}),` |
| `,e.jsx(n.code,{children:"video"})," | ",e.jsx(n.code,{children:"ArticleVideoProps"})," | — | ",e.jsx(n.code,{children:'content="vertical-video" \\| "horizontal-video"'}),` |
| `,e.jsx(n.code,{children:"embed"})," | ",e.jsx(n.code,{children:"ReactNode"})," | — | ",e.jsx(n.code,{children:'content="twitter" \\| "youtube"'}),` |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | Body (paragraphs) |
| `,e.jsx(n.code,{children:"expanded"})," · ",e.jsx(n.code,{children:"defaultExpanded"})," · ",e.jsx(n.code,{children:"onExpandedChange"})," | ",e.jsx(n.code,{children:"boolean"})," · ",e.jsx(n.code,{children:"boolean"})," · ",e.jsx(n.code,{children:"(expanded) => void"})," | — · ",e.jsx(n.code,{children:"false"})," · — | Figma ",e.jsx(n.code,{children:"CardState"})," (Opened = ",e.jsx(n.code,{children:"true"}),`) |
| `,e.jsx(n.code,{children:"showMoreLabel"})," · ",e.jsx(n.code,{children:"showLessLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Show more'"})," · ",e.jsx(n.code,{children:"'Show less'"}),` | Disclosure labels |
| `,e.jsx(n.code,{children:"onShare"})," · ",e.jsx(n.code,{children:"shareLabel"})," | ",e.jsx(n.code,{children:"(event) => void"})," · ",e.jsx(n.code,{children:"string"})," | — · ",e.jsx(n.code,{children:"'Share'"}),` | Share button |
| `,e.jsx(n.code,{children:"className"})," · ",e.jsx(n.code,{children:"style"})," | — | — | Root ",e.jsx(n.code,{children:"<article>"})," |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ref"})," points at the root ",e.jsx(n.code,{children:"<article>"}),". Other ",e.jsx(n.code,{children:"<article>"})," attributes are forwarded."]}),`
`]})]})}function V(d={}){const{wrapper:n}={...r(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(s,{...d})}):s(d)}export{V as default};
