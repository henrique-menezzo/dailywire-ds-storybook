import{u as t,j as e,M as c,C as i,a as l,A as a}from"./iframe-BaE-r_tL.js";import{R as d,D as r,a as h,M as x,I as j,S as p,F as m,T as u}from"./NativeAdRow.stories-BJjrMMFH.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./index-DKiqy9gl.js";import"./Avatar-DfOPemCI.js";import"./Badge-DXeWmLrm.js";import"./Icon-D8yVe6yW.js";import"./IconButton-C0K0oZpp.js";function o(s){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"nativeadrow",children:"NativeAdRow"}),`
`,e.jsxs(n.p,{children:[`A sponsored row for article feeds: creative (image or muted video), title, description and a "Sponsored by …" byline. The whole row is one link.
Spec reviewed against Figma `,e.jsx(n.code,{children:"Native Ad Ep Row"}),` (12761:20029, 20 variants: Media × Breakpoint × State), section "Article" (8413:56868), page "↳ Content".
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { NativeAdRow } from '@henriquemenezzo/dailywire-ds/components/native-ad-row'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<NativeAdRow
  media={{ type: 'image', src: creative.url }}
  href="https://advertiser.example/offer"
  title="Roasted by veterans, for early mornings"
  description="Black Rifle Coffee Company is a veteran-founded coffee company…"
  sponsor="Black Rifle Coffee"
  onLinkClick={trackAdClick}
/>
`})}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"breakpoint",children:"Breakpoint"}),`
`,e.jsxs(n.p,{children:["The Figma ",e.jsx(n.code,{children:"Breakpoint"})," axis is ",e.jsx(n.strong,{children:"not a prop"}),": the row measures its own width with a container query."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobile"})," (row narrower than 768px, Figma 369px): a 160px 16:9 creative next to the title (",e.jsx(n.code,{children:"body/400/sm"}),", 3 lines), then the description (",e.jsx(n.code,{children:"body/400/sm"}),", 3 lines) and the byline (",e.jsx(n.code,{children:"body/400/xsm"}),", 1 line). Page surface, 16px bottom padding and a 1px bottom divider."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Desktop"})," (768px and wider, Figma 912px): a 1 : 2 grid — creative left (16:9, radius xl), title (",e.jsx(n.code,{children:"title/400/lg"}),", 2 lines), description (",e.jsx(n.code,{children:"body/400/md"}),", 3 lines) and byline (",e.jsx(n.code,{children:"body/400/md"}),", 2 lines) right. No surface, no divider."]}),`
`]}),`
`,e.jsxs(n.p,{children:["tokens.css has no breakpoint tokens; 768px is the tablet limit already used by ",e.jsx(n.code,{children:"Header"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"media",children:"Media"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"Media"}),": ",e.jsx(n.strong,{children:"image"})," or ",e.jsx(n.strong,{children:"video"}),". The creative is a plain ",e.jsx(n.code,{children:"<img>"})," / ",e.jsx(n.code,{children:"<video>"})," (Figma nests ",e.jsx(n.code,{children:"Thumbnail"}),", which lives outside the Article section), decorative unless you pass ",e.jsx(n.code,{children:"alt"}),`.
A video runs muted, looped and without native controls, and never starts with `,e.jsx(n.em,{children:"reduced motion"})," (the poster stays). The duration badge (",e.jsx(n.code,{children:"Badge"})," translucid · sm) and the mute toggle (",e.jsx(n.code,{children:"IconButton"})," translucid, sm on Mobile and md on Desktop, ",e.jsx(n.code,{children:"aria-pressed"}),") are always visible."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick media, breakpoint (frame width) and state. The row is drawn at its Figma width with its real measurements; the panel lists the tokens that apply at that width, including the container-query rules — hover a token to see where it acts."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:["All 20 Figma variants. Hover, pressed and focus are forced with ",e.jsx(n.code,{children:"data-state"})," for review."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"hovered"}),": the title turns ",e.jsx(n.code,{children:"text/neutral/bold/hovered"}),'; an image dims and shows "Visit site" (a video does not).']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"pressed"}),": the title turns ",e.jsx(n.code,{children:"text/neutral/bold/pressed"}),"; the creative dims more."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"focused"}),": the standard focus ring around the row (",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(n.code,{children:"--focus-ring-width"}),", ",e.jsx(n.code,{children:"--focus-ring-offset"}),"), the page surface, no divider, radius sm."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"}),": the row at ",e.jsx(n.code,{children:"--opacity-disabled"}),", title ",e.jsx(n.code,{children:"text/neutral/bold/disabled"}),"; the link loses its ",e.jsx(n.code,{children:"href"})," and is announced as a disabled link."]}),`
`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.p,{children:"A feed of rows:"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`| Requirement | Implementation |
|---|---|
| One link | The title `,e.jsx(n.code,{children:"<a>"})," is the row's only link; its ",e.jsx(n.code,{children:"::after"}),` covers the row, so creative, description and byline are part of the hit area |
| Sponsored | The visible "Sponsored by" + sponsor name is part of the link's accessible name (`,e.jsx(n.code,{children:"aria-labelledby"})," = title + sponsored label); ",e.jsx(n.code,{children:'rel="sponsored"'}),` by default |
| No nested controls | The mute toggle is a sibling of the link, stacked above it, with its own name and `,e.jsx(n.code,{children:"aria-pressed"}),". Two toggles are rendered (sm / md) and the container query displays one; the hidden one is ",e.jsx(n.code,{children:"display: none"}),` |
| Heading | The title is an `,e.jsx(n.code,{children:"h3"})," by default (",e.jsx(n.code,{children:"headingLevel"}),` 2–6) |
| Focus | One ring around the whole row (`,e.jsx(n.code,{children:":has(.link:focus-visible)"}),`) |
| Disabled | `,e.jsx(n.code,{children:'aria-disabled="true"'})," on the link, no ",e.jsx(n.code,{children:"href"}),`; mute toggle disabled |
| Motion | Video never auto-starts with `,e.jsx(n.code,{children:"prefers-reduced-motion: reduce"}),"; overlay and color transitions are removed |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"NativeAdRow.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar). Mobile rules first, then the Desktop container query:"]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"figma-values-without-a-token",children:"Figma values without a token"}),`
`,e.jsxs(n.p,{children:[`| Figma | Token used |
|---|---|
| Hovered overlay `,e.jsx(n.code,{children:"#0a0909"})," @ 40% | ",e.jsx(n.code,{children:"--color-overlay-neutral-subtle-default"}),` (black @ 40%) |
| Pressed overlay `,e.jsx(n.code,{children:"#0a0909"})," @ 60% | ",e.jsx(n.code,{children:"--color-overlay-neutral-bold-default"}),` (black @ 60%) |
| "Visit site" 15px SemiBold `,e.jsx(n.code,{children:"#fafafa"}),", no text style | ",e.jsx(n.code,{children:"label/600/md"})," (14px) + ",e.jsx(n.code,{children:"--color-text-always-light"}),` |
| Desktop title 20px Regular / 25px, no text style | `,e.jsx(n.code,{children:"title/400/lg"})," (20px, ",e.jsx(n.code,{children:"--line-height-120"}),`) |
| Desktop creative radius 15 | `,e.jsx(n.code,{children:"--border-radius-xl"}),` (16) |
| Mobile creative width 160 | `,e.jsx(n.code,{children:"calc(var(--size-2xl) * 4)"}),` |
| Byline gap 6 (unbound) | `,e.jsx(n.code,{children:"--spacing-sm"}),` |
| Disabled layer opacity 40% | `,e.jsx(n.code,{children:"--opacity-disabled"})," (38%) |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(a,{of:d}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"media"})," | ",e.jsx(n.code,{children:"{ type: 'image'; src; alt? } \\| { type: 'video'; src?; poster?; alt?; duration? }"})," | — | Creative (Figma ",e.jsx(n.code,{children:"Media"}),`) |
| `,e.jsx(n.code,{children:"href"})," | ",e.jsx(n.code,{children:"string"}),` | — | Advertiser destination; the whole row is this link |
| `,e.jsx(n.code,{children:"target"})," | ",e.jsx(n.code,{children:"string"}),` | — | Link target |
| `,e.jsx(n.code,{children:"rel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'sponsored'"}),` | Link relationship |
| `,e.jsx(n.code,{children:"onLinkClick"})," | ",e.jsx(n.code,{children:"MouseEventHandler<HTMLAnchorElement>"}),` | — | Row link click (ad tracking) |
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Roasted by veterans, for early mornings'"})," | Figma ",e.jsx(n.code,{children:"Title"}),` |
| `,e.jsx(n.code,{children:"headingLevel"})," | ",e.jsx(n.code,{children:"2 \\| 3 \\| 4 \\| 5 \\| 6"})," | ",e.jsx(n.code,{children:"3"}),` | Heading element of the title |
| `,e.jsx(n.code,{children:"description"})," | ",e.jsx(n.code,{children:"string"}),` | Figma text | Description (3 lines) |
| `,e.jsx(n.code,{children:"sponsoredLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Sponsored by'"}),` | First part of the sponsored label (bold) |
| `,e.jsx(n.code,{children:"sponsor"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Black Rifle Coffee'"}),` | Advertiser name (subtlest) |
| `,e.jsx(n.code,{children:"avatar"})," | ",e.jsx(n.code,{children:"{ type?; src?; initials? }"})," | ",e.jsx(n.code,{children:"{ type: 'dw-plus' }"})," | Byline ",e.jsx(n.code,{children:"Avatar"}),` (3xsm, decorative) |
| `,e.jsx(n.code,{children:"hoverLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Visit site'"}),` | Label on the hovered image |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | Figma ",e.jsx(n.code,{children:"State=disabled"}),` |
| `,e.jsx(n.code,{children:"muted"})," / ",e.jsx(n.code,{children:"defaultMuted"})," | ",e.jsx(n.code,{children:"boolean"})," | — / ",e.jsx(n.code,{children:"true"}),` | Video sound, controlled / initial |
| `,e.jsx(n.code,{children:"onMutedChange"})," | ",e.jsx(n.code,{children:"(muted: boolean) => void"}),` | — | Mute toggle callback |
| `,e.jsx(n.code,{children:"muteLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Mute'"}),` | Accessible name of the mute toggle |
| `,e.jsx(n.code,{children:"durationLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Duration'"}),` | Screen-reader prefix of the duration badge |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<div>"})," attributes via spread on the root (",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"style"}),", ",e.jsx(n.code,{children:"data-*"}),", …). ",e.jsx(n.code,{children:"ref"})," points to the root ",e.jsx(n.code,{children:"<div>"}),", which is the container-query container: give it a width from its parent."]}),`
`]})]})}function D(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{D as default};
