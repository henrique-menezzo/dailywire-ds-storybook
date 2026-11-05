import{u as r,j as e,M as a,C as n,a as c,A as l}from"./iframe-BaE-r_tL.js";import{C as i,D as o,L as h,M as x,W as j,a as p,I as u,S as m,b as g,T as f}from"./NativeAdCarouselCard.stories-BrQLMzfJ.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./index-DKiqy9gl.js";import"./Avatar-DfOPemCI.js";import"./Badge-DXeWmLrm.js";import"./Icon-D8yVe6yW.js";import"./IconButton-C0K0oZpp.js";function t(d){const s={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(s.h1,{id:"nativeadcarouselcard",children:"NativeAdCarouselCard"}),`
`,e.jsxs(s.p,{children:[`A sponsored card for article carousels: creative (image or muted video), title, a "Sponsored by …" byline and an optional call to action.
One component covers two Figma sets — `,e.jsx(s.code,{children:"Native Ad Carousel EP (Web)"})," (12761:19853, 10 variants) and ",e.jsx(s.code,{children:"Native Ad Carousel EP (App)"})," (12761:19950, 6 variants) — through the ",e.jsx(s.code,{children:"layout"}),` prop.
Section "Article" (8413:56868), page "↳ Content". All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { NativeAdCarouselCard } from '@henriquemenezzo/dailywire-ds/components/native-ad-carousel-card'
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<NativeAdCarouselCard
  media={{ type: 'image', src: creative.url }}
  href="https://advertiser.example/offer"
  title="Roasted by veterans, for early mornings"
  sponsor="Black Rifle Coffee"
  onLinkClick={trackAdClick}
/>

<NativeAdCarouselCard
  layout="app"
  media={{ type: 'video', src: creative.mp4, poster: creative.poster, duration: '10:00' }}
  href="https://advertiser.example/offer"
  sponsor="Black Rifle Coffee"
/>
`})}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(s.p,{children:"The card fills the width of its slot (Figma draws it at 320px for web and 290px for app). In a carousel, give every slot the same width and let the cards stretch: the text block grows so the CTAs line up."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"layouts-one-component-or-two",children:"Layouts: one component or two?"}),`
`,e.jsxs(s.p,{children:["The two Figma sets share the same parts (creative, title, Avatar + sponsored label, Button) but not the same anatomy, so they are one component with a ",e.jsx(s.code,{children:"layout"})," prop:"]}),`
`,e.jsxs(s.p,{children:["| | ",e.jsx(s.code,{children:'layout="web"'})," (12761:19853) | ",e.jsx(s.code,{children:'layout="app"'}),` (12761:19950) |
|---|---|---|
| Surface | none, media flush with the card edge | gradient surface, media and texts inset 12px |
| Media | 320 × 175 | 16:9 |
| Title | `,e.jsx(s.code,{children:"title/500/md"}),", unclamped | ",e.jsx(s.code,{children:"title/500/md"}),`, 2 lines |
| Sponsored label | `,e.jsx(s.code,{children:"body/400/sm"})," | ",e.jsx(s.code,{children:"body/400/xsm"}),` |
| CTA | 46px tall | 38px tall |
| Video controls | revealed on hover / focus | always visible |
| States | default · hovered · pressed · focused · disabled | default · pressed (drawn as default) · disabled |`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"media",children:"Media"}),`
`,e.jsxs(s.p,{children:["Figma ",e.jsx(s.code,{children:"Media"}),": ",e.jsx(s.strong,{children:"image"})," or ",e.jsx(s.strong,{children:"video"}),". The creative is a plain ",e.jsx(s.code,{children:"<img>"})," / ",e.jsx(s.code,{children:"<video>"})," (Figma nests ",e.jsx(s.code,{children:"Thumbnail"}),", which lives outside the Article section). It is decorative unless you pass ",e.jsx(s.code,{children:"alt"}),", because the title and sponsor already describe the ad."]}),`
`,e.jsxs(s.p,{children:["Videos are always muted at first and have no native controls. On ",e.jsx(s.strong,{children:"web"})," the video plays while the card is hovered or focused; on ",e.jsx(s.strong,{children:"app"})," it plays on its own. With ",e.jsx(s.em,{children:"reduced motion"})," it never starts and the poster stays. The duration badge (",e.jsx(s.code,{children:"Badge"})," translucid · sm) and the mute toggle (",e.jsx(s.code,{children:"IconButton"})," translucid · md, ",e.jsx(s.code,{children:"aria-pressed"}),") sit on the creative."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"call-to-action",children:"Call to action"}),`
`,e.jsxs(s.p,{children:["Figma ",e.jsx(s.code,{children:"Show CTA"}),". The CTA is drawn like ",e.jsx(s.code,{children:"Button"})," (secondary · md · radius sm) but it is ",e.jsx(s.strong,{children:"not a second control"}),": it does the same thing as the card, so it is a presentational ",e.jsx(s.code,{children:'<span aria-hidden="true">'}),` and its text is added to the link's accessible name (the visible "Shop now" stays speakable for voice control).`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.p,{children:'When the sponsored label runs long, it wraps to 2 lines and then truncates (Figma note "When there are 2 lines of metadata"):'}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick layout, media, state and CTA. The card is drawn at 1.25× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["Every Figma variant. Hover, pressed and focus are forced with ",e.jsx(s.code,{children:"data-state"})," for review."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"hovered"}),' (web): the image dims and shows "Visit site"; a video reveals its mute toggle and duration.']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"pressed"})," (web): the creative dims less and the title turns subtlest. Figma's app ",e.jsx(s.code,{children:"pressed"})," is drawn identical to ",e.jsx(s.code,{children:"default"}),", so the app layout does not change."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"focused"}),": the standard focus ring around the whole card (",e.jsx(s.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(s.code,{children:"--focus-ring-width"}),", ",e.jsx(s.code,{children:"--focus-ring-offset"}),"); on web the card also takes the page surface."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"disabled"}),": the card is drawn at ",e.jsx(s.code,{children:"--opacity-disabled"}),", the link loses its ",e.jsx(s.code,{children:"href"})," and is announced as a disabled link."]}),`
`]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.p,{children:"A carousel row, with cards of different content heights:"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:[`| Requirement | Implementation |
|---|---|
| One link | The title `,e.jsx(s.code,{children:"<a>"})," is the card's only link; its ",e.jsx(s.code,{children:"::after"}),` covers the card, so the creative, byline and CTA are all part of the hit area |
| Sponsored | The visible "Sponsored by" + sponsor name is part of the link's accessible name (`,e.jsx(s.code,{children:"aria-labelledby"})," = title + sponsored label + CTA); ",e.jsx(s.code,{children:'rel="sponsored"'}),` by default |
| No nested controls | The CTA is presentational; the mute toggle is a sibling of the link, stacked above it, with its own name and `,e.jsx(s.code,{children:"aria-pressed"}),` |
| Heading | The title is an `,e.jsx(s.code,{children:"h3"})," by default (",e.jsx(s.code,{children:"headingLevel"}),` 2–6) |
| Focus | One ring around the whole card (`,e.jsx(s.code,{children:":has(.link:focus-visible)"}),"); hidden web video controls appear on ",e.jsx(s.code,{children:":focus-within"}),` and on touch screens |
| Disabled | `,e.jsx(s.code,{children:'aria-disabled="true"'})," on the link, no ",e.jsx(s.code,{children:"href"}),`; mute toggle disabled |
| Motion | Video never auto-starts with `,e.jsx(s.code,{children:"prefers-reduced-motion: reduce"}),"; overlay and fade transitions are removed |"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"NativeAdCarouselCard.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h3,{id:"figma-values-without-a-token",children:"Figma values without a token"}),`
`,e.jsxs(s.p,{children:[`| Figma | Token used |
|---|---|
| App surface gradient top `,e.jsx(s.code,{children:"#1e2229"})," (raw) | ",e.jsx(s.code,{children:"--color-background-neutral-subtlest-default"}),` |
| Web hovered overlay `,e.jsx(s.code,{children:"#0a0909"})," @ 55% | ",e.jsx(s.code,{children:"--color-overlay-neutral-bold-default"}),` (black @ 60%) |
| Web pressed overlay `,e.jsx(s.code,{children:"#0a0909"})," @ 35% | ",e.jsx(s.code,{children:"--color-overlay-neutral-subtle-default"}),` (black @ 40%) |
| "Visit site" 15px SemiBold `,e.jsx(s.code,{children:"#fafafa"}),", no text style | ",e.jsx(s.code,{children:"label/600/md"})," (14px) + ",e.jsx(s.code,{children:"--color-text-always-light"}),` |
| Disabled layer opacity 40% | `,e.jsx(s.code,{children:"--opacity-disabled"}),` (38%) |
| Title line height 22px | `,e.jsx(s.code,{children:"title/500/md"})," recipe (",e.jsx(s.code,{children:"--line-height-120"}),") |"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(l,{of:i}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"layout"})," | ",e.jsx(s.code,{children:"'web' \\| 'app'"})," | ",e.jsx(s.code,{children:"'web'"}),` | Card anatomy (the two Figma sets) |
| `,e.jsx(s.code,{children:"media"})," | ",e.jsx(s.code,{children:"{ type: 'image'; src; alt? } \\| { type: 'video'; src?; poster?; alt?; duration? }"})," | — | Creative (Figma ",e.jsx(s.code,{children:"Media"}),`) |
| `,e.jsx(s.code,{children:"href"})," | ",e.jsx(s.code,{children:"string"}),` | — | Advertiser destination; the whole card is this link |
| `,e.jsx(s.code,{children:"target"})," | ",e.jsx(s.code,{children:"string"}),` | — | Link target |
| `,e.jsx(s.code,{children:"rel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'sponsored'"}),` | Link relationship |
| `,e.jsx(s.code,{children:"onLinkClick"})," | ",e.jsx(s.code,{children:"MouseEventHandler<HTMLAnchorElement>"}),` | — | Card link click (ad tracking) |
| `,e.jsx(s.code,{children:"title"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Roasted by veterans, for early mornings'"})," | Figma ",e.jsx(s.code,{children:"Title"}),` |
| `,e.jsx(s.code,{children:"headingLevel"})," | ",e.jsx(s.code,{children:"2 \\| 3 \\| 4 \\| 5 \\| 6"})," | ",e.jsx(s.code,{children:"3"}),` | Heading element of the title |
| `,e.jsx(s.code,{children:"sponsoredLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Sponsored by'"})," | First part of the Figma ",e.jsx(s.code,{children:"Sponsored label"}),` (bold) |
| `,e.jsx(s.code,{children:"sponsor"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Black Rifle Coffee'"}),` | Advertiser name (subtlest) |
| `,e.jsx(s.code,{children:"avatar"})," | ",e.jsx(s.code,{children:"{ type?; src?; initials? }"})," | ",e.jsx(s.code,{children:"{ type: 'dw-plus' }"})," | Byline ",e.jsx(s.code,{children:"Avatar"}),` (3xsm, decorative) |
| `,e.jsx(s.code,{children:"showCta"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"true"})," | Figma ",e.jsx(s.code,{children:"Show CTA"}),` |
| `,e.jsx(s.code,{children:"ctaLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Shop now'"}),` | CTA text |
| `,e.jsx(s.code,{children:"hoverLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Visit site'"}),` | Label on the hovered image (web) |
| `,e.jsx(s.code,{children:"disabled"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"})," | Figma ",e.jsx(s.code,{children:"State=disabled"}),` |
| `,e.jsx(s.code,{children:"muted"})," / ",e.jsx(s.code,{children:"defaultMuted"})," | ",e.jsx(s.code,{children:"boolean"})," | — / ",e.jsx(s.code,{children:"true"}),` | Video sound, controlled / initial |
| `,e.jsx(s.code,{children:"onMutedChange"})," | ",e.jsx(s.code,{children:"(muted: boolean) => void"}),` | — | Mute toggle callback |
| `,e.jsx(s.code,{children:"muteLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Mute'"}),` | Accessible name of the mute toggle |
| `,e.jsx(s.code,{children:"durationLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Duration'"}),` | Screen-reader prefix of the duration badge |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class on the root |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<div>"})," attributes via spread on the root (",e.jsx(s.code,{children:"id"}),", ",e.jsx(s.code,{children:"style"}),", ",e.jsx(s.code,{children:"data-*"}),", …). ",e.jsx(s.code,{children:"ref"})," points to the root ",e.jsx(s.code,{children:"<div>"}),"."]}),`
`]})]})}function M(d={}){const{wrapper:s}={...r(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(t,{...d})}):t(d)}export{M as default};
