import{u as d,j as e,M as t,C as n,A as l}from"./iframe-BaE-r_tL.js";import{S as o,D as c,C as a,a as h,B as x,b as j,I as p,c as m,T as u}from"./LiveUpdatesSlider.stories-CmgpAHDh.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./index-DTA9Iiqt.js";import"./LiveUpdatesSlider-CxilVZVN.js";import"./ArticleVideo-DY64P19u.js";import"./IconButton-C0K0oZpp.js";import"./Icon-D8yVe6yW.js";import"./index-dPPx6LzB.js";function r(i){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(s.h1,{id:"liveupdatesslider",children:"LiveUpdatesSlider"}),`
`,e.jsxs(s.p,{children:[`The media carousel of a live updates block: one slide at a time (images, a video, or any node), previous / next arrows and position dots.
Spec from Figma `,e.jsx(s.code,{children:"Slider Live Updates"}),' (9096:6145) in the "Article" section of the "↳ Content" page: ',e.jsx(s.code,{children:"Content"})," 1 | 2 | 3 × ",e.jsx(s.code,{children:"Breakpoint"}),` Mobile | Tablet | Desktop (9 variants).
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark; the overlay controls look the same in both themes."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { LiveUpdatesSlider } from '@henriquemenezzo/dailywire-ds/components/live-updates-slider'

<LiveUpdatesSlider
  label="Iran strikes: photos and video"
  slides={[
    { type: 'image', src: '/media/launch.jpg', alt: 'A missile lifts off from its launch pad' },
    { type: 'image', src: '/media/stamps.jpg', alt: 'Collage of torn Iranian stamps' },
    { type: 'video', src: '/media/skyline.mp4', poster: '/media/skyline.jpg', label: 'Explosions light up the skyline' },
  ]}
/>
`})}),`
`,e.jsxs(s.p,{children:["Built from DS parts: ",e.jsx(s.code,{children:"IconButton"})," (translucid · lg: chevrons) and ",e.jsx(s.code,{children:"ArticleVideo"})," (video slides, with its own mute toggle)."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"content",children:"Content"}),`
`,e.jsxs(s.p,{children:["Figma's ",e.jsx(s.code,{children:"Content 1 / 2 / 3"})," is the ",e.jsx(s.strong,{children:"active slide"})," of a three-slide set (image, image, video), not a prop of its own: use ",e.jsx(s.code,{children:"index"})," (controlled) or ",e.jsx(s.code,{children:"defaultIndex"}),". Previous is disabled on the first slide and next on the last one (no wrap-around, no auto-rotation, as in Figma). On the video slide the volume button top-right is the ",e.jsx(s.code,{children:"ArticleVideo"})," mute toggle. Leaving a slide pauses its video."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(s.h3,{id:"slides",children:"Slides"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slides"})," is an array of:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"{ type: 'image', src, alt }"}),": a picture covering the slide (Figma image fill, cover)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"{ type: 'video', ...ArticleVideoProps }"}),": an ",e.jsx(s.code,{children:"ArticleVideo"})," stretched to the slide (",e.jsx(s.code,{children:'aspect="fill"'}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"{ type: 'custom', content }"}),": any node stretched to the slide, e.g. a placeholder for an embed (embeds are never fetched)."]}),`
`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(s.p,{children:["Figma's ",e.jsx(s.code,{children:"Breakpoint"})," axis is ",e.jsx(s.strong,{children:"not a prop"}),". The slider switches with CSS container queries on its own width. ",e.jsx(s.code,{children:"tokens.css"})," has no breakpoint or ratio tokens, so the limits and ratios are the Figma frame sizes:"]}),`
`,e.jsxs(s.p,{children:[`| Breakpoint | Slider width | Ratio (Figma frame) | Corners |
|------------|--------------|---------------------|---------|
| Mobile | < 768 | 393 × 470 | `,e.jsx(s.code,{children:"--border-radius-none"}),` |
| Tablet | 768 – 863 | 768 × 627 | `,e.jsx(s.code,{children:"--border-radius-none"}),` |
| Desktop | ≥ 864 | 864 × 547 | `,e.jsx(s.code,{children:"--border-radius-md"})," |"]}),`
`,e.jsxs(s.p,{children:["On every breakpoint the arrows sit ",e.jsx(s.code,{children:"--spacing-xl"})," from the bottom-right corner (",e.jsx(s.code,{children:"--spacing-sm"})," apart) and the dots pill is centered on the frame, on the arrows' center line."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"swipe",children:"Swipe"}),`
`,e.jsx(s.p,{children:"Figma's prototype changes slide on drag. On touch and pen, a horizontal swipe over 15 % of the slide width goes to the next / previous slide; vertical swipes keep scrolling the page. Mouse drags are ignored so a click on a video still plays / pauses."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"controlled",children:"Controlled"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick Content and Breakpoint. The slider is drawn at the frame width (scaled to fit) with its real measurements; the panel lists the tokens that apply at that width, including the container-query rules."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsx(s.p,{children:"All 9 Figma variants, at the Figma frame widths:"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"LiveUpdatesSlider.module.css"})," with the token it uses, resolved for the active theme: the shared (Mobile) rules first, then each breakpoint range. ",e.jsx(s.code,{children:"IconButton"})," and ",e.jsx(s.code,{children:"ArticleVideo"})," document their own tokens."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(s.p,{children:"Follows the WAI-ARIA APG carousel pattern (no auto-rotation):"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The root is a ",e.jsx(s.code,{children:"<section>"})," region with ",e.jsx(s.code,{children:'aria-roledescription="carousel"'}),", named by ",e.jsx(s.code,{children:"label"}),' ("Live updates").']}),`
`,e.jsxs(s.li,{children:["Each slide is a ",e.jsx(s.code,{children:"group"})," with ",e.jsx(s.code,{children:'aria-roledescription="slide"'}),' named "n of m" (',e.jsx(s.code,{children:"slideLabel"}),"). Hidden slides are ",e.jsx(s.code,{children:"aria-hidden"})," and ",e.jsx(s.code,{children:"inert"}),", so their controls leave the tab order."]}),`
`,e.jsxs(s.li,{children:["The slides container is ",e.jsx(s.code,{children:'aria-live="polite"'}),": moving with the arrows announces the new slide."]}),`
`,e.jsxs(s.li,{children:["Previous / next come first in reading order, named by ",e.jsx(s.code,{children:"previousLabel"})," / ",e.jsx(s.code,{children:"nextLabel"})," and pointing at the slides with ",e.jsx(s.code,{children:"aria-controls"}),". When one gets disabled at either end, focus moves to the other."]}),`
`,e.jsxs(s.li,{children:["The dots are decorative (",e.jsx(s.code,{children:"aria-hidden"}),"); position is in the slide names."]}),`
`,e.jsxs(s.li,{children:["Image slides need a real ",e.jsx(s.code,{children:"alt"}),". Transitions stop under ",e.jsx(s.code,{children:"prefers-reduced-motion"}),"."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(l,{of:o}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"slides"})," | ",e.jsx(s.code,{children:"LiveUpdatesSlide[]"})," | — | ",e.jsx(s.code,{children:"image"})," · ",e.jsx(s.code,{children:"video"})," · ",e.jsx(s.code,{children:"custom"}),` slides, in order |
| `,e.jsx(s.code,{children:"index"})," · ",e.jsx(s.code,{children:"defaultIndex"})," · ",e.jsx(s.code,{children:"onIndexChange"})," | ",e.jsx(s.code,{children:"number"})," · ",e.jsx(s.code,{children:"number"})," · ",e.jsx(s.code,{children:"(index) => void"})," | — · ",e.jsx(s.code,{children:"0"})," · — | Active slide, 0-based (Figma ",e.jsx(s.code,{children:"Content"}),`) |
| `,e.jsx(s.code,{children:"label"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Live updates'"}),` | Name of the carousel region |
| `,e.jsx(s.code,{children:"previousLabel"})," · ",e.jsx(s.code,{children:"nextLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Previous slide'"})," · ",e.jsx(s.code,{children:"'Next slide'"}),` | Arrow names |
| `,e.jsx(s.code,{children:"slideLabel"})," | ",e.jsx(s.code,{children:"(position, total) => string"})," | ",e.jsx(s.code,{children:"`${position} of ${total}`"}),` | Slide names |
| `,e.jsx(s.code,{children:"className"})," · ",e.jsx(s.code,{children:"style"})," | — | — | Root ",e.jsx(s.code,{children:"<section>"})," |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ref"})," points at the root ",e.jsx(s.code,{children:"<section>"}),". Other ",e.jsx(s.code,{children:"<section>"})," attributes are forwarded."]}),`
`]})]})}function T(i={}){const{wrapper:s}={...d(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{T as default};
