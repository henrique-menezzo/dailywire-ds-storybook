import{u as c,j as e,M as o,C as n,A as t}from"./iframe-BaE-r_tL.js";import{C as d,D as l,M as a,a as h,R as x,B as j,b as p,I as u,c as m,d as g,S as f,T as b}from"./CardFeedAd.stories-BlOPaScK.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./ArticleHeading.module-Ca3flQOu.js";import"./index-DO2tlVwn.js";import"./index-nDlySgPZ.js";import"./ArticleHeading-BgCBkznm.js";import"./ArticleVideo-DY64P19u.js";import"./IconButton-C0K0oZpp.js";import"./Icon-D8yVe6yW.js";import"./Avatar-DfOPemCI.js";import"./Badge-DXeWmLrm.js";import"./Byline-CDW89dVi.js";import"./Link-Bo7zJKQL.js";import"./Button-D39Hxs63.js";function r(s){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(i.h1,{id:"cardfeedad",children:"CardFeedAd"}),`
`,e.jsxs(i.p,{children:[`A sponsored item for the feed: advertiser avatar, an "Advertisement" label, headline, description, then a picture, a video or a product carousel with a caption and a call to action.
The whole card is one link (the headline) to the advertiser; the video controls and the carousel products are separate controls on top.
Spec from Figma `,e.jsx(i.code,{children:"Card Feed Ad"}),` (12432:14077, doc frame 12447:22595), section "Article" (8413:56868) on page "↳ Content":
`,e.jsx(i.code,{children:"Media"})," Image | Video | Carousel × ",e.jsx(i.code,{children:"Ratio"})," 1x1 | 16x9 | 9x16 × ",e.jsx(i.code,{children:"Breakpoint"})," Desktop | Mobile × ",e.jsx(i.code,{children:"InteractionState"}),` default | hovered | pressed (54 variants),
plus `,e.jsx(i.code,{children:"Show caption"}),", ",e.jsx(i.code,{children:"Show description"}),", ",e.jsx(i.code,{children:"Show caption subtitle"}),", ",e.jsx(i.code,{children:"Show CTA"}),", ",e.jsx(i.code,{children:"Headline"}),", ",e.jsx(i.code,{children:"Description"}),", ",e.jsx(i.code,{children:"Caption title"})," and ",e.jsx(i.code,{children:"Caption subtitle"}),`.
All visual values come from tokens in `,e.jsx(i.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"import",children:"Import"}),`
`,e.jsxs(i.p,{children:["Import design tokens ",e.jsx(i.strong,{children:"once"})," in the app entry (",e.jsx(i.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { CardFeedAd } from '@henriquemenezzo/dailywire-ds/components/card-feed-ad'

<CardFeedAd
  media="image"
  ratio="16/9"
  href="https://advertiser.example/pumpkin-spice"
  linkProps={{ target: '_blank', onClick: trackAdClick }}
  headline="PUMPKIN SPICE"
  description="The season's here and so is the coffee to match…"
  imageSrc="/ads/pumpkin-spice.jpg"
  captionTitle="PUMPKIN SPICE"
  captionSubtitle="$26.95"
  ctaLabel="GET"
/>
`})}),`
`,e.jsxs(i.p,{children:["Built from DS parts: ",e.jsx(i.code,{children:"Avatar"}),", ",e.jsx(i.code,{children:"ArticleHeading"})," (the stretched headline link), ",e.jsx(i.code,{children:"ArticleVideo"})," (",e.jsx(i.code,{children:'media="video"'}),", with the ",e.jsx(i.code,{children:"aspect"})," of ",e.jsx(i.code,{children:"ratio"}),"), ",e.jsx(i.code,{children:"Button"})," (secondary · sm CTA) and ",e.jsx(i.code,{children:"Icon"})," (",e.jsx(i.code,{children:"star-filled"})," / ",e.jsx(i.code,{children:"star-half"})," / ",e.jsx(i.code,{children:"star-outline"}),`).
Figma's Thumbnail lives outside the Article section, so pictures are plain `,e.jsx(i.code,{children:"<img>"})," elements."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"media",children:"Media"}),`
`,e.jsxs(i.p,{children:["Figma's ",e.jsx(i.code,{children:"Media"})," is the ",e.jsx(i.code,{children:"media"})," prop:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"image"})," — ",e.jsx(i.code,{children:"imageSrc"})," / ",e.jsx(i.code,{children:"imageAlt"})," in a bordered shell, caption bar below."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"video"})," — an ",e.jsx(i.code,{children:"ArticleVideo"})," (",e.jsx(i.code,{children:"video"})," props: ",e.jsx(i.code,{children:"src"}),", ",e.jsx(i.code,{children:"poster"}),", ",e.jsx(i.code,{children:"autoPlay"}),", ",e.jsx(i.code,{children:"muted"}),"…) in the same shell. Its mute and play / pause buttons are its own controls; clicking the picture plays / pauses instead of opening the ad."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"carousel"})," — a horizontal list of products (",e.jsx(i.code,{children:"items"}),"), each with picture, name, stars, reviews and price, and no CTA."]}),`
`]}),`
`,e.jsx(n,{of:a}),`
`,e.jsxs(i.h3,{id:"why-a-private-carousel-not-liveupdatesslider",children:["Why a private carousel (not ",e.jsx(i.code,{children:"LiveUpdatesSlider"}),")"]}),`
`,e.jsxs(i.p,{children:["Figma's carousel is a scrolling ",e.jsx(i.strong,{children:"track"}),` that shows two-and-a-bit products at once, with no arrows, dots or "n of m" slides; it bleeds to the card's left edge while scrolling.
`,e.jsx(i.code,{children:"LiveUpdatesSlider"})," is a one-slide-at-a-time slider with arrows, dots and slide semantics. So the carousel is a private scroll-snap list (",e.jsx(i.code,{children:'<ul aria-label="Products">'}),`):
swipe, trackpad or Shift + wheel to scroll (a thin scrollbar shows for mouse users), and every product is a link that keyboard users reach with Tab (the track scrolls it into view).
Each product links to `,e.jsx(i.code,{children:"items[].href"}),", or to the card ",e.jsx(i.code,{children:"href"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"ratio",children:"Ratio"}),`
`,e.jsxs(i.p,{children:["Figma's ",e.jsx(i.code,{children:"Ratio"})," (",e.jsx(i.code,{children:"16/9"}),", ",e.jsx(i.code,{children:"1/1"}),", ",e.jsx(i.code,{children:"9/16"}),") shapes the picture, the video or each carousel picture (cover). A ",e.jsx(i.code,{children:"9/16"})," picture or video takes 3/5 of the column (Figma 332 of 548px; no width token)."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(i.p,{children:["Figma's ",e.jsx(i.code,{children:"Breakpoint"})," axis is ",e.jsx(i.strong,{children:"not a prop"}),". The card is a size container and switches on its own width (",e.jsx(i.code,{children:"tokens.css"})," has no breakpoint tokens, so the limit sits between the Figma frames, 608 and 361):"]}),`
`,e.jsxs(i.p,{children:[`| Breakpoint | Card width | Avatar | Headline | Media indent | Carousel product |
|------------|------------|--------|----------|--------------|------------------|
| Desktop | ≥ 480 | `,e.jsx(i.code,{children:"sm"})," 48 | heading/500/md (24) | ",e.jsx(i.code,{children:"--size-3xl"})," + ",e.jsx(i.code,{children:"--spacing-lg"}),` | 43 % of the track |
| Mobile | < 480 | `,e.jsx(i.code,{children:"2xsm"})," 32 | heading/500/xs (16) | ",e.jsx(i.code,{children:"--size-xl"})," + ",e.jsx(i.code,{children:"--spacing-lg"})," | 50 % of the track |"]}),`
`,e.jsxs(i.p,{children:["On Mobile, the narrow ",e.jsx(i.code,{children:"9/16"})," shell stacks its caption and the CTA takes the full width."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"caption-options",children:"Caption options"}),`
`,e.jsxs(i.p,{children:["The Figma boolean props map 1:1: ",e.jsx(i.code,{children:"showDescription"}),", ",e.jsx(i.code,{children:"showCaption"})," (the caption bar, or each product's text), ",e.jsx(i.code,{children:"showCaptionSubtitle"})," (price) and ",e.jsx(i.code,{children:"showCta"}),`.
The 9x16 variants label the CTA "SHOP" (`,e.jsx(i.code,{children:"ctaLabel"}),")."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"cta",children:"CTA"}),`
`,e.jsxs(i.p,{children:["The CTA does what the card does, so by default it is drawn by ",e.jsx(i.code,{children:"Button"})," but ",e.jsx(i.strong,{children:"inert"}),`: a click on it is a click on the card link, it is not a second tab stop, and its label is part of the link's name ("PUMPKIN SPICE GET").
Pass `,e.jsx(i.code,{children:"onCtaClick"})," when it does something else (e.g. add to cart): it becomes a real button above the card link."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"in-a-feed",children:"In a feed"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"sponsored-labelling",children:"Sponsored labelling"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["The label above the headline (",e.jsx(i.code,{children:"sponsoredLabel"}),`, "Advertisement", drawn uppercase like Figma's "ADVERTISEMENT") is visible text, never an icon or color only.`]}),`
`,e.jsxs(i.li,{children:["The root ",e.jsx(i.code,{children:"<article>"}),' is named "Advertisement PUMPKIN SPICE" (',e.jsx(i.code,{children:"aria-labelledby"})," = label + headline)."]}),`
`,e.jsxs(i.li,{children:["The headline link is described by the label (",e.jsx(i.code,{children:"aria-describedby"}),'), so a link list reads "PUMPKIN SPICE GET, Advertisement".']}),`
`,e.jsxs(i.li,{children:["Links get ",e.jsx(i.code,{children:'rel="sponsored"'})," by default (override with ",e.jsx(i.code,{children:"linkProps.rel"}),")."]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(i.p,{children:["Keyboard focus on the headline link draws ",e.jsx(i.code,{children:"--focus-ring-width"})," in ",e.jsx(i.code,{children:"--color-focus-info-bold-default"})," around the ",e.jsx(i.strong,{children:"whole card"})," (",e.jsx(i.code,{children:"--focus-ring-offset"}),", ",e.jsx(i.code,{children:"--border-radius-md"})," corners). Carousel products draw the same ring around themselves. Figma has no focused variant; ",e.jsx(i.code,{children:'interactionState="focused"'})," shows it in the docs."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsxs(i.p,{children:["Pick Media, Ratio, Breakpoint and InteractionState. The card is drawn at the Figma frame width with its real measurements; the panel lists the card tokens that apply, plus the headline rules from ",e.jsx(i.code,{children:"ArticleHeading"})," (which owns the hovered / pressed colors)."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"states",children:"States"}),`
`,e.jsxs(i.p,{children:["All 54 Figma variants (plus the focus ring), Desktop then Mobile. ",e.jsx(i.code,{children:"InteractionState"})," only recolors the headline: ",e.jsx(i.code,{children:"--color-text-neutral-bold-default"})," → ",e.jsx(i.code,{children:"-hovered"})," → ",e.jsx(i.code,{children:"-pressed"}),"."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(i.p,{children:["Every property of ",e.jsx(i.code,{children:"CardFeedAd.module.css"})," with the token it uses, resolved for the active theme: Desktop (base) first, then the Mobile container query. ",e.jsx(i.code,{children:"Avatar"}),", ",e.jsx(i.code,{children:"ArticleHeading"}),", ",e.jsx(i.code,{children:"ArticleVideo"}),", ",e.jsx(i.code,{children:"Button"})," and ",e.jsx(i.code,{children:"Icon"})," document their own tokens."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"One card link (the headline); nothing interactive is nested in it. Avatar, label, description, picture and caption belong to its hit area."}),`
`,e.jsxs(i.li,{children:["Pictures are decorative by default (",e.jsx(i.code,{children:'imageAlt=""'}),", ",e.jsx(i.code,{children:'items[].alt=""'}),"): the headline and product names describe them."]}),`
`,e.jsxs(i.li,{children:["Stars are decorative; a screen-reader sentence carries the rating (",e.jsx(i.code,{children:"ratingLabel"}),', "Rated 4 out of 5"). Half stars round to the nearest 0.5.']}),`
`,e.jsxs(i.li,{children:["Without a caption, each product link is named by its title (",e.jsx(i.code,{children:"aria-label"}),")."]}),`
`,e.jsxs(i.li,{children:["The avatar exists once per breakpoint; the other one is ",e.jsx(i.code,{children:"display: none"}),"."]}),`
`,e.jsxs(i.li,{children:["Carousel smooth scrolling and the headline color transition stop under ",e.jsx(i.code,{children:"prefers-reduced-motion"}),"."]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(t,{of:d}),`
`,e.jsxs(i.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(i.code,{children:"media"})," | ",e.jsx(i.code,{children:"'image' \\| 'video' \\| 'carousel'"})," | ",e.jsx(i.code,{children:"'image'"})," | Figma ",e.jsx(i.code,{children:"Media"}),` |
| `,e.jsx(i.code,{children:"ratio"})," | ",e.jsx(i.code,{children:"'16/9' \\| '1/1' \\| '9/16'"})," | ",e.jsx(i.code,{children:"'16/9'"})," | Figma ",e.jsx(i.code,{children:"Ratio"}),` |
| `,e.jsx(i.code,{children:"href"})," | ",e.jsx(i.code,{children:"string"}),` | — | Advertiser destination (the headline link) |
| `,e.jsx(i.code,{children:"linkProps"})," | ",e.jsx(i.code,{children:"AnchorHTMLAttributes"})," | ",e.jsx(i.code,{children:"{ rel: 'sponsored' }"}),` | Extra attributes for the headline and product links |
| `,e.jsx(i.code,{children:"sponsoredLabel"})," | ",e.jsx(i.code,{children:"string"})," | ",e.jsx(i.code,{children:"'Advertisement'"}),` | Visible sponsorship label |
| `,e.jsx(i.code,{children:"avatar"})," | ",e.jsx(i.code,{children:"{ type?, src?, initials? }"})," | ",e.jsx(i.code,{children:"{ type: 'dw-plus' }"}),` | Advertiser avatar (decorative) |
| `,e.jsx(i.code,{children:"headline"})," · ",e.jsx(i.code,{children:"headingLevel"})," | ",e.jsx(i.code,{children:"string"})," · ",e.jsx(i.code,{children:"2–6"})," | ",e.jsx(i.code,{children:"'PUMPKIN SPICE'"})," · ",e.jsx(i.code,{children:"3"})," | Figma ",e.jsx(i.code,{children:"Headline"}),` |
| `,e.jsx(i.code,{children:"description"})," · ",e.jsx(i.code,{children:"showDescription"})," | ",e.jsx(i.code,{children:"string"})," · ",e.jsx(i.code,{children:"boolean"})," | Figma text · ",e.jsx(i.code,{children:"true"})," | Figma ",e.jsx(i.code,{children:"Description"})," / ",e.jsx(i.code,{children:"Show description"}),` |
| `,e.jsx(i.code,{children:"imageSrc"})," · ",e.jsx(i.code,{children:"imageAlt"})," | ",e.jsx(i.code,{children:"string"})," | — · ",e.jsx(i.code,{children:"''"})," | ",e.jsx(i.code,{children:'media="image"'}),` |
| `,e.jsx(i.code,{children:"video"})," | ",e.jsx(i.code,{children:"ArticleVideoProps"})," (no ",e.jsx(i.code,{children:"aspect"}),") | — | ",e.jsx(i.code,{children:'media="video"'}),"; ",e.jsx(i.code,{children:"label"}),` defaults to the headline |
| `,e.jsx(i.code,{children:"items"})," · ",e.jsx(i.code,{children:"itemsLabel"})," | ",e.jsx(i.code,{children:"CardFeedAdItem[]"})," · ",e.jsx(i.code,{children:"string"})," | 3 Figma slides · ",e.jsx(i.code,{children:"'Products'"})," | ",e.jsx(i.code,{children:'media="carousel"'}),": ",e.jsx(i.code,{children:"{ src?, alt?, title?, rating?, reviewCount?, price?, href? }"}),` |
| `,e.jsx(i.code,{children:"showCaption"})," | ",e.jsx(i.code,{children:"boolean"})," | ",e.jsx(i.code,{children:"true"})," | Figma ",e.jsx(i.code,{children:"Show caption"}),` |
| `,e.jsx(i.code,{children:"captionTitle"})," · ",e.jsx(i.code,{children:"captionSubtitle"})," · ",e.jsx(i.code,{children:"showCaptionSubtitle"})," | ",e.jsx(i.code,{children:"string"})," · ",e.jsx(i.code,{children:"string"})," · ",e.jsx(i.code,{children:"boolean"})," | ",e.jsx(i.code,{children:"'PUMPKIN SPICE'"})," · ",e.jsx(i.code,{children:"'$26.95'"})," · ",e.jsx(i.code,{children:"true"}),` | Caption texts (also the products' defaults) |
| `,e.jsx(i.code,{children:"showCta"})," · ",e.jsx(i.code,{children:"ctaLabel"})," · ",e.jsx(i.code,{children:"onCtaClick"})," | ",e.jsx(i.code,{children:"boolean"})," · ",e.jsx(i.code,{children:"string"})," · handler | ",e.jsx(i.code,{children:"true"})," · ",e.jsx(i.code,{children:"'GET'"})," · — | CTA (image / video); inert unless ",e.jsx(i.code,{children:"onCtaClick"}),` |
| `,e.jsx(i.code,{children:"ratingLabel"})," | ",e.jsx(i.code,{children:"(rating) => string"})," | ",e.jsx(i.code,{children:"Rated n out of 5"}),` | Screen-reader text of the stars |
| `,e.jsx(i.code,{children:"interactionState"})," | ",e.jsx(i.code,{children:"'default' \\| 'hovered' \\| 'pressed' \\| 'focused'"})," | ",e.jsx(i.code,{children:"'default'"}),` | Forces a state for docs / QA |
| `,e.jsx(i.code,{children:"className"})," | ",e.jsx(i.code,{children:"string"})," | — | Extra class on the root |"]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"ref"})," points at the root ",e.jsx(i.code,{children:"<article>"}),". Other ",e.jsx(i.code,{children:"<article>"})," attributes are forwarded."]}),`
`]})]})}function U(s={}){const{wrapper:i}={...c(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(r,{...s})}):r(s)}export{U as default};
