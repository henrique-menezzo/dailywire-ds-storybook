import{r as C,j as e}from"./iframe-BaE-r_tL.js";import{C as oe}from"./CssTokens-DoMUOAyj.js";import{I as O,C as Se}from"./ComponentInspector-aQuGSI0z.js";import{a as _e}from"./ArticleHeading.module-Ca3flQOu.js";import{H as ke}from"./index-DO2tlVwn.js";import{b as le,c as de}from"./index-nDlySgPZ.js";import{d as Ce}from"./ArticleHeading-BgCBkznm.js";import{a as je}from"./ArticleVideo-DY64P19u.js";import{b as Te}from"./Avatar-DfOPemCI.js";import{b as Fe}from"./Button-D39Hxs63.js";import{a as Ee}from"./Icon-D8yVe6yW.js";const H=`/* ==============================================
 * CardFeedAd — Daily Wire Design System
 * Figma: Card Feed Ad (12432:14077), doc frame 12447:22595, section "Article" (8413:56868), page "↳ Content".
 * Media Image | Video | Carousel × Ratio 1x1 | 16x9 | 9x16 × Breakpoint Desktop | Mobile
 * × InteractionState default | hovered | pressed (54 variants)
 * + Show caption / Show description / Show caption subtitle / Show CTA, Headline / Description / Caption title / subtitle.
 * Nests Avatar, Heading-Article-Content (ArticleHeading), Video Article Resource (ArticleVideo), Button (secondary · sm)
 * and tabler star icons. Thumbnail lives outside the section: a plain <img>.
 * Breakpoint is responsive: the card is a size container; Desktop is the base, Mobile below 480px
 * (between the Figma frames, 608 and 361; tokens.css has no breakpoint tokens).
 * InteractionState only recolors the headline (ArticleHeading: text/neutral/bold default → hovered → pressed).
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: query container, positioning context of the stretched headline link ── */

.card {
  position: relative;
  display: block;
  box-sizing: border-box;
  min-width: 0;
  container-name: dw-card-feed-ad;
  container-type: inline-size;
  /* Not drawn in Figma: shapes the card focus ring */
  border-radius: var(--border-radius-md);
}

/* ── Layout: header › media block (Figma gap spacing-4xl on both breakpoints) ── */

.layout {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xl);
}

.header {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
}

.avatar {
  display: flex;
  flex-shrink: 0;
}

/* Figma Avatar Size=sm (48) on Desktop, 2xsm (32) on Mobile: one of the two is displayed */
.avatar[data-bp='mobile'] {
  display: none;
}

/* sponsored label › text: spacing-lg */
.content {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: var(--spacing-lg);
  min-width: 0;
}

/* Figma: Byline instance overridden to "ADVERTISEMENT", 10px, raw #8F8F8F (no style, no variable):
 * --font-size-xxs and --color-text-neutral-subtlest-default (#8F8F8F in dark) */
.sponsored {
  margin: 0;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-xxs);
  font-weight: var(--Regular);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  text-transform: uppercase;
  color: var(--color-text-neutral-subtlest-default);
}

/* headline › description: spacing-lg */
.text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* Headline: heading/500/md (ArticleHeading lg · medium), 3 lines max (Figma maxLines 3).
 * The clamp sits on the <a>: its stretched ::after belongs to the card, so it is not clipped. */
.card .title a {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
}

/* The card shows one focus ring around the whole card (below), not the headline ring */
.card .title a:focus-visible {
  outline: none;
}

/* body/400/sm, 3 lines max */
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  margin: 0;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-subtlest-default);
}

/* ── Media block: aligned with the text column (Figma padding-left 60 / 44 = avatar + gap, raw values) ── */

.mediaBlock {
  padding-inline-start: calc(var(--size-3xl) + var(--spacing-lg));
}

/* ── Image / video: Figma "media-shell" (fill background/neutral/bold, stroke border/neutral/bold inside, radius md) ── */

.shell {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  border: var(--border-default) solid var(--color-border-neutral-bold-default);
  border-radius: var(--border-radius-md);
  background-color: var(--color-background-neutral-bold-default);
  /* The picture and caption belong to the card: clicks and hover fall through to the stretched headline link */
  pointer-events: none;
}

/* 9x16: Figma shell 332 of 548px (Desktop) · 192 of 317px (Mobile); no width token */
.card[data-ratio='9/16'] .shell {
  width: calc(100% * 3 / 5);
}

/* Thumbnail: fill background/neutral/subtle under the image (cover) */
.picture,
.slideMedia {
  display: block;
  /* The ratio wins over the picture's own size (no content-based minimum height) */
  overflow: hidden;
  min-height: var(--spacing-none);
  background-color: var(--color-background-neutral-subtle-default);
}

.card[data-ratio='16/9'] .picture,
.card[data-ratio='16/9'] .slideMedia {
  aspect-ratio: 16 / 9;
}

.card[data-ratio='1/1'] .picture,
.card[data-ratio='1/1'] .slideMedia {
  aspect-ratio: 1 / 1;
}

.card[data-ratio='9/16'] .picture,
.card[data-ratio='9/16'] .slideMedia {
  aspect-ratio: 9 / 16;
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* The video controls (mute, play / pause, click to play) are their own controls */
.video {
  pointer-events: auto;
}

/* ── Caption: title + price, CTA (padding spacing-xl, gap spacing-md) ── */

.caption {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
}

.captionText {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: var(--spacing-md);
  min-width: 0;
}

/* title/600/sm, 2 lines max */
.captionTitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  margin: 0;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Semibold);
  line-height: var(--line-height-120);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-bold-default);
}

/* label/400/md, 1 line max */
.captionSubtitle {
  overflow: hidden;
  margin: 0;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-subtle-default);
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Figma Button · secondary · sm · radius sm. Inert by default (the card link does the same thing). */
.cta {
  flex-shrink: 0;
}

.cta[data-interactive] {
  pointer-events: auto;
}

/* ── Carousel: horizontal scroll-snap list (Figma media-block: overflow horizontal, clip, radius md) ── */

.card[data-variant='carousel'] .mediaBlock {
  padding-inline-start: var(--spacing-none);
}

.slides {
  position: relative;
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-padding-inline-start: calc(var(--size-3xl) + var(--spacing-lg));
  /* Room for the slide focus rings (offset + width) without moving the layout */
  margin: calc(-1 * var(--spacing-xs)) var(--spacing-none);
  padding: var(--spacing-xs) var(--spacing-xs) var(--spacing-xs) calc(var(--size-3xl) + var(--spacing-lg));
  border-radius: var(--border-radius-md);
  list-style: none;
  scrollbar-width: none;
}

/* Figma slide 237 of 548px (Desktop) · 160 of 317px (Mobile); no width token: share of the visible track */
.slide {
  display: flex;
  flex: 0 0 43%;
  min-width: 0;
  scroll-snap-align: start;
}

/* Figma slide: fill background/neutral/bold, stroke border/neutral/bold inside, radius md */
.slideLink {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;
  border: var(--border-default) solid var(--color-border-neutral-bold-default);
  border-radius: var(--border-radius-md);
  background-color: var(--color-background-neutral-bold-default);
  color: inherit;
  text-decoration: none;
}

.slideLink:focus-visible {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* Figma slide "Frame": padding spacing-xl, gap spacing-lg */
.slideCaption {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
}

/* stars + reviews: gap spacing-sm */
.rating {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 0;
}

/* tabler star filled / light, 16px, gap spacing-xxs, icon/neutral/bold */
.stars {
  display: flex;
  flex-shrink: 0;
  gap: var(--spacing-xxs);
  color: var(--color-icon-neutral-bold-default);
}

/* label/400/md, 1 line max */
.reviews {
  overflow: hidden;
  min-width: 0;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-subtlest-default);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.srOnly {
  position: absolute;
  width: var(--border-default);
  height: var(--border-default);
  margin: calc(-1 * var(--border-default));
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* ── Focus: the headline link is focused; the ring goes around the card it covers ── */

.card:has(.title a:focus-visible),
.card[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* Mouse and trackpad users get a thin scrollbar (Figma draws none); touch keeps swiping */
@media (pointer: fine) {
  .slides {
    scrollbar-width: thin;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .slides {
    scroll-behavior: smooth;
  }
}

/* ── Breakpoint Mobile (Figma frame 361) ─────── */

@container dw-card-feed-ad (width < 480px) {
  .avatar[data-bp='desktop'] {
    display: none;
  }

  .avatar[data-bp='mobile'] {
    display: flex;
  }

  /* Figma: raw 16px, no text style; heading/500/xs used */
  .card .title[data-size] {
    font-size: var(--font-size-md);
  }

  .mediaBlock {
    padding-inline-start: calc(var(--size-xl) + var(--spacing-lg));
  }

  .slides {
    scroll-padding-inline-start: calc(var(--size-xl) + var(--spacing-lg));
    padding-inline-start: calc(var(--size-xl) + var(--spacing-lg));
  }

  .slide {
    flex-basis: 50%;
  }

  /* 9x16: the narrow shell stacks the caption, CTA full width (gap spacing-xl) */
  .card[data-ratio='9/16'] .caption {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-xl);
  }

  .card[data-ratio='9/16'] .captionText {
    flex: none;
  }

  .card[data-ratio='9/16'] .cta {
    width: 100%;
  }
}
`,Ie="_card_1hdj3_17",De="_layout_1hdj3_30",Me="_header_1hdj3_36",Ne="_avatar_1hdj3_42",Re="_content_1hdj3_53",Pe="_sponsored_1hdj3_63",Oe="_text_1hdj3_75",$e="_title_1hdj3_83",Be="_description_1hdj3_97",ze="_mediaBlock_1hdj3_114",Le="_shell_1hdj3_120",Ve="_picture_1hdj3_139",Ke="_slideMedia_1hdj3_140",qe="_image_1hdj3_163",Ge="_video_1hdj3_171",He="_caption_1hdj3_177",We="_captionText_1hdj3_184",Ue="_captionTitle_1hdj3_193",Qe="_captionSubtitle_1hdj3_209",Je="_cta_1hdj3_223",Xe="_slides_1hdj3_237",Ye="_slide_1hdj3_140",Ze="_slideLink_1hdj3_262",ea="_slideCaption_1hdj3_282",aa="_rating_1hdj3_290",na="_stars_1hdj3_298",ta="_reviews_1hdj3_306",ia="_srOnly_1hdj3_319",i={card:Ie,layout:De,header:Me,avatar:Ne,content:Re,sponsored:Pe,text:Oe,title:$e,description:Be,mediaBlock:ze,shell:Le,picture:Ve,slideMedia:Ke,image:qe,video:Ge,caption:He,captionText:We,captionTitle:Ue,captionSubtitle:Qe,cta:Je,slides:Xe,slide:Ye,slideLink:Ze,slideCaption:ea,rating:aa,stars:na,reviews:ta,srOnly:ia},E=["image","video","carousel"],I=["16/9","1/1","9/16"],W=["default","hovered","pressed","focused"],ra="The season's here and so is the coffee to match. Pumpkin Spice is back in ground and K-Cups®, roasted the same way it always has been, no shortcuts, no fluff. Grab a bag before the season moves on without you.",sa=[{rating:4,reviewCount:12},{rating:4,reviewCount:12},{rating:4,reviewCount:12}],oa={default:void 0,hovered:"hover",pressed:"pressed",focused:"focus"},q=5;function la({rating:a}){const n=Math.min(q,Math.max(0,Math.round(a*2)/2));return e.jsx("span",{className:i.stars,"aria-hidden":"true",children:Array.from({length:q},(t,r)=>e.jsx(Ee,{name:n>=r+1?"star-filled":n>=r+.5?"star-half":"star-outline",size:"sm"},r))})}const da=a=>`Rated ${a} out of ${q}`,d=C.forwardRef(function({media:n="image",ratio:t="16/9",href:r,linkProps:l,sponsoredLabel:h="Advertisement",avatar:u={type:"dw-plus"},headline:c="PUMPKIN SPICE",headingLevel:T=3,description:M=ra,showDescription:F=!0,imageSrc:U,imageAlt:ue="",video:me,items:he=sa,itemsLabel:fe="Products",showCaption:N=!0,captionTitle:Q="PUMPKIN SPICE",captionSubtitle:L="$26.95",showCaptionSubtitle:J=!0,showCta:X=!0,ctaLabel:ge="GET",onCtaClick:Y,ratingLabel:ve=da,interactionState:be="default",className:xe,...ye},we){const R=C.useId(),V=`${R}-sponsored`,Z=`${R}-headline`,ee=`${R}-headline-text`,ae=`${R}-cta`,K=oa[be],P=n!=="carousel"&&N&&X&&!Y,ne=l?.rel??"sponsored",te=s=>e.jsx(Te,{size:s,type:u.type??"dw-plus",src:u.src,initials:u.initials});return e.jsx("article",{ref:we,className:[i.card,xe].filter(Boolean).join(" "),"data-variant":n,"data-ratio":t,"data-state":K,"aria-labelledby":`${V} ${Z}`,...ye,children:e.jsxs("div",{className:i.layout,children:[e.jsxs("div",{className:i.header,children:[e.jsx("span",{className:i.avatar,"data-bp":"desktop",children:te("sm")}),e.jsx("span",{className:i.avatar,"data-bp":"mobile",children:te("2xsm")}),e.jsxs("div",{className:i.content,children:[e.jsx("p",{className:i.sponsored,id:V,children:h}),e.jsxs("div",{className:i.text,children:[e.jsx(Ce,{id:Z,className:i.title,size:"lg",weight:"medium",as:`h${T}`,href:r,stretched:!0,linkProps:{...l,rel:ne,"aria-describedby":V,"aria-labelledby":P?`${ee} ${ae}`:void 0},"data-state":K==="focus"?void 0:K,children:e.jsx("span",{id:ee,children:c})}),F&&M&&e.jsx("p",{className:i.description,children:M})]})]})]}),n==="carousel"?e.jsx("div",{className:i.mediaBlock,children:e.jsx("ul",{className:i.slides,"aria-label":fe,children:he.map((s,Ae)=>{const ie=s.title??Q,re=s.price??L,se=typeof s.reviewCount=="number"?`${s.reviewCount} ${s.reviewCount===1?"review":"reviews"}`:s.reviewCount;return e.jsx("li",{className:i.slide,children:e.jsxs("a",{...l,className:i.slideLink,href:s.href??r,rel:ne,"aria-label":N?void 0:ie||s.alt||void 0,children:[e.jsx("span",{className:i.slideMedia,children:s.src&&e.jsx("img",{className:i.image,src:s.src,alt:s.alt??"",loading:"lazy",decoding:"async",draggable:!1})}),N&&e.jsxs("span",{className:i.slideCaption,children:[e.jsx("span",{className:i.captionTitle,children:ie}),s.rating!=null&&e.jsxs("span",{className:i.rating,children:[e.jsx(la,{rating:s.rating}),e.jsx("span",{className:i.srOnly,children:`${ve(s.rating)}, `}),se&&e.jsx("span",{className:i.reviews,children:se})]}),J&&re&&e.jsx("span",{className:i.captionSubtitle,children:re})]})]})},Ae)})})}):e.jsx("div",{className:i.mediaBlock,children:e.jsxs("div",{className:i.shell,children:[n==="video"?e.jsx("div",{className:i.video,children:e.jsx(je,{label:c,...me,aspect:t})}):e.jsx("div",{className:i.picture,children:U&&e.jsx("img",{className:i.image,src:U,alt:ue,loading:"lazy",decoding:"async",draggable:!1})}),N&&e.jsxs("div",{className:i.caption,children:[e.jsxs("div",{className:i.captionText,children:[e.jsx("p",{className:i.captionTitle,children:Q}),J&&L&&e.jsx("p",{className:i.captionSubtitle,children:L})]}),X&&e.jsx(Fe,{id:ae,className:i.cta,"data-interactive":P?void 0:"",variant:"secondary",size:"sm",label:ge,inert:P||void 0,tabIndex:P?-1:void 0,onClick:Y})]})]})})]})})});d.__docgenInfo={description:`Sponsored feed item (image, video or product carousel). Accessible card pattern: the headline is the link and
covers the card; the sponsorship label names the card and describes the link. The video controls, an interactive
CTA and the carousel (scrollable, one link per product) sit above the card link.`,methods:[],displayName:"CardFeedAd",props:{media:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CARD_FEED_AD_MEDIA)[number]"},description:"Figma `Media`: a picture, an `ArticleVideo`, or a horizontal product carousel",defaultValue:{value:"'image'",computed:!1}},ratio:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CARD_FEED_AD_RATIOS)[number]"},description:"Figma `Ratio` of the picture / video / carousel pictures",defaultValue:{value:"'16/9'",computed:!1}},href:{required:!0,tsType:{name:"string"},description:"Advertiser destination. The headline is the card's link and covers the whole card."},linkProps:{required:!1,tsType:{name:"ArticleHeadingProps['linkProps']",raw:"ArticleHeadingProps['linkProps']"},description:"Extra attributes for the headline `<a>` (and the carousel links): `target`, `onClick` (ad click tracking)… `rel` defaults to `sponsored`."},sponsoredLabel:{required:!1,tsType:{name:"string"},description:'Sponsorship label above the headline (Figma "ADVERTISEMENT"; drawn uppercase). Keep it explicit.',defaultValue:{value:"'Advertisement'",computed:!1}},avatar:{required:!1,tsType:{name:"CardFeedAdAvatar"},description:"Advertiser avatar (48px Desktop, 32px Mobile). Decorative.",defaultValue:{value:"{ type: 'dw-plus' }",computed:!1}},headline:{required:!1,tsType:{name:"string"},description:"Figma `Headline`",defaultValue:{value:"'PUMPKIN SPICE'",computed:!1}},headingLevel:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Heading element of the headline",defaultValue:{value:"3",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Figma `Description` (body/400/sm, 3 lines max)",defaultValue:{value:`"The season's here and so is the coffee to match. Pumpkin Spice is back in ground and K-Cups®, roasted the same way it always has been, no shortcuts, no fluff. Grab a bag before the season moves on without you."`,computed:!1}},showDescription:{required:!1,tsType:{name:"boolean"},description:"Figma `Show description`",defaultValue:{value:"true",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:"`image`: the picture. Thumbnail is outside the Article section: a plain `<img>`."},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text of the picture. Default `''` (decorative: the headline names the ad).",defaultValue:{value:"''",computed:!1}},video:{required:!1,tsType:{name:"Omit",elements:[{name:"ArticleVideoProps"},{name:"literal",value:"'aspect'"}],raw:"Omit<ArticleVideoProps, 'aspect'>"},description:"`video`: props of the `ArticleVideo` (src, poster, autoPlay, muted…). `aspect` follows `ratio`; `label` defaults to the headline."},items:{required:!1,tsType:{name:"Array",elements:[{name:"CardFeedAdItem"}],raw:"CardFeedAdItem[]"},description:"`carousel`: the products. Default: three Figma slides without pictures.",defaultValue:{value:`[
  { rating: 4, reviewCount: 12 },
  { rating: 4, reviewCount: 12 },
  { rating: 4, reviewCount: 12 },
]`,computed:!1}},itemsLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of the carousel list",defaultValue:{value:"'Products'",computed:!1}},showCaption:{required:!1,tsType:{name:"boolean"},description:"Figma `Show caption` (the bar under the picture / video, or each slide's text)",defaultValue:{value:"true",computed:!1}},captionTitle:{required:!1,tsType:{name:"string"},description:"Figma `Caption title`",defaultValue:{value:"'PUMPKIN SPICE'",computed:!1}},captionSubtitle:{required:!1,tsType:{name:"string"},description:"Figma `Caption subtitle` (price)",defaultValue:{value:"'$26.95'",computed:!1}},showCaptionSubtitle:{required:!1,tsType:{name:"boolean"},description:"Figma `Show caption subtitle`",defaultValue:{value:"true",computed:!1}},showCta:{required:!1,tsType:{name:"boolean"},description:"Figma `Show CTA` (image and video only; the carousel has none)",defaultValue:{value:"true",computed:!1}},ctaLabel:{required:!1,tsType:{name:"string"},description:'Figma Button label ("GET"; the 9x16 variants use "SHOP")',defaultValue:{value:"'GET'",computed:!1}},onCtaClick:{required:!1,tsType:{name:"ButtonProps['onClick']",raw:"ButtonProps['onClick']"},description:"Makes the CTA its own button (above the card link). Without it the CTA is drawn by `Button` but inert:\na click on it is a click on the card link, and its label is part of the link's name."},ratingLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(rating: number) => string",signature:{arguments:[{type:{name:"number"},name:"rating"}],return:{name:"string"}}},description:"Screen-reader text of the stars",defaultValue:{value:"(rating: number) => `Rated ${rating} out of ${STARS}`",computed:!1}},interactionState:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CARD_FEED_AD_INTERACTION_STATES)[number]"},description:"Forces a Figma `InteractionState` for docs and QA. Real hover / press / focus work without it.",defaultValue:{value:"'default'",computed:!1}}},composes:["Omit"]};const ca=""+new URL("ad-landscape-C66CJyTi.jpg",import.meta.url).href,pa=""+new URL("ad-portrait-AQrI3iva.jpg",import.meta.url).href,j={Landscape:ca,Portrait:pa},{fn:ua}=__STORYBOOK_MODULE_TEST__,o={Desktop:608,Mobile:361},B=Object.keys(o),z={image:"Image",video:"Video",carousel:"Carousel"},$={"16/9":"16x9","1/1":"1x1","9/16":"9x16"},ma=a=>a==="16/9"?j.Landscape:j.Portrait;function ha(a,n){const t=ma(n);return{avatar:{type:"host",src:ke["DW Logo"]},ctaLabel:n==="9/16"?"SHOP":"GET",...a==="image"&&{imageSrc:t},...a==="video"&&{video:{poster:t}},...a==="carousel"&&{items:[1,2,3].map(()=>({src:t,rating:4,reviewCount:12}))}}}function p(a){const n=Object.fromEntries(Object.entries(a).filter(([,t])=>t!==void 0));return{...ha(a.media??"image",a.ratio??"16/9"),...n}}const fa={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},D={padding:24,overflowX:"auto"};function m({width:a,label:n,children:t}){return e.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[n&&e.jsx("div",{style:fa,children:n}),e.jsx("div",{style:{width:a,flexShrink:0},children:t})]})}const ga={component:d,title:"Components/CardFeedAd",parameters:{layout:"centered"},argTypes:{media:{control:"inline-radio",options:[...E]},ratio:{control:"inline-radio",options:[...I]},interactionState:{control:"inline-radio",options:[...W]},headingLevel:{control:"inline-radio",options:[2,3,4,5,6]},href:{control:"text"},sponsoredLabel:{control:"text"},headline:{control:"text"},description:{control:"text"},showDescription:{control:"boolean"},showCaption:{control:"boolean"},captionTitle:{control:"text"},captionSubtitle:{control:"text"},showCaptionSubtitle:{control:"boolean"},showCta:{control:"boolean"},ctaLabel:{control:"text"},imageSrc:{control:"text"},imageAlt:{control:"text"},itemsLabel:{control:"text"},avatar:{control:"object"},video:{control:"object"},items:{control:"object"}},args:{media:"image",ratio:"16/9",href:"#",headingLevel:3,showDescription:!0,showCaption:!0,showCaptionSubtitle:!0,showCta:!0,interactionState:"default"},render:a=>e.jsx("div",{style:{width:o.Desktop},children:e.jsx(d,{...p(a)})})},f={},g={parameters:{layout:"fullscreen"},render:a=>e.jsx("div",{style:{...D,display:"flex",alignItems:"flex-start",gap:48},children:E.map(n=>e.jsx(m,{width:o.Desktop,label:z[n],children:e.jsx(d,{...p({...a,media:n})})},n))})},v={parameters:{layout:"fullscreen"},render:a=>e.jsx("div",{style:{...D,display:"grid",gap:48},children:E.map(n=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:48},children:I.map(t=>e.jsx(m,{width:o.Desktop,label:`${z[n]} · ${$[t]}`,children:e.jsx(d,{...p({...a,media:n,ratio:t})})},t))},n))})},b={parameters:{layout:"fullscreen"},render:a=>e.jsx("div",{style:{...D,display:"grid",gap:48},children:I.map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:48},children:[B.map(t=>e.jsx(m,{width:o[t],label:`${z[a.media??"image"]} · ${$[n]} · ${t} ${o[t]}`,children:e.jsx(d,{...p({...a,ratio:n})})},t)),e.jsx(m,{width:o.Mobile,label:`Carousel · ${$[n]} · Mobile ${o.Mobile}`,children:e.jsx(d,{...p({...a,media:"carousel",ratio:n})})})]},n))})},x={parameters:{layout:"fullscreen"},render:a=>e.jsxs("div",{style:{...D,display:"flex",alignItems:"flex-start",gap:48},children:[e.jsx(m,{width:o.Mobile,label:"Show description off",children:e.jsx(d,{...p({...a,showDescription:!1})})}),e.jsx(m,{width:o.Mobile,label:"Show CTA off",children:e.jsx(d,{...p({...a,showCta:!1})})}),e.jsx(m,{width:o.Mobile,label:"Show caption subtitle off",children:e.jsx(d,{...p({...a,showCaptionSubtitle:!1})})}),e.jsx(m,{width:o.Mobile,label:"Show caption off",children:e.jsx(d,{...p({...a,showCaption:!1})})})]})},y={args:{onCtaClick:ua()}},w={args:{media:"carousel",ratio:"1/1",items:[{src:j.Portrait,title:"Pumpkin Spice · Ground",rating:4,reviewCount:12,price:"$26.95",href:"#ground"},{src:j.Portrait,title:"Pumpkin Spice · K-Cups®",rating:4.5,reviewCount:31,price:"$28.95",href:"#k-cups"},{src:j.Portrait,title:"Pumpkin Spice · Whole Bean",rating:5,reviewCount:1,price:"$26.95",href:"#whole-bean"},{src:j.Portrait,title:"Fall Sampler",rating:3,reviewCount:8,price:"$44.95",href:"#sampler"}]}},A={parameters:{layout:"padded"},render:a=>e.jsxs("ul",{style:{display:"grid",gap:48,maxWidth:o.Desktop,margin:"0 auto",padding:0,listStyle:"none"},children:[e.jsx("li",{children:e.jsx(le,{content:"article-free",href:"#",headingLevel:2,imageSrc:de["Article Free"]})}),e.jsx("li",{children:e.jsx(d,{...p({...a,headingLevel:2})})}),e.jsx("li",{children:e.jsx(le,{content:"live-blog",href:"#",headingLevel:2,imageSrc:de["Live Blog"]})})]})},S={parameters:{layout:"fullscreen"},render:a=>e.jsx("div",{style:{...D,display:"grid",gap:56},children:B.map(n=>e.jsx("div",{style:{display:"grid",gap:40},children:E.flatMap(t=>I.map(r=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:32},children:W.map(l=>e.jsx(m,{width:o[n],label:`${n} · ${z[t]} · ${$[r]} · ${l}`,children:e.jsx(d,{...p({...a,media:t,ratio:r,interactionState:l})})},l))},`${t}-${r}`)))},n))})};function va(a){const n=a.replace(/\/\*[\s\S]*?\*\//g,""),t=[];let r=0,l=0,h=0,u="";for(let c=0;c<n.length;c++)n[c]==="{"?(r===0&&(u=n.slice(l,c).trim(),h=c+1),r++):n[c]==="}"&&(r--,r===0&&(u.startsWith("@container")&&t.push({condition:u.replace(/^@container\s+[\w-]+\s*/,""),body:n.slice(h,c)}),l=c+1));return t}const ce=va(H);function pe(a,n){const t=a.match(/width < (\d+)px/),r=a.match(/width >= (\d+)px/);return(!t||n<Number(t[1]))&&(!r||n>=Number(r[1]))}const ba=a=>B.filter(n=>pe(a,o[n])).join(" + "),G={"--ah-text":"title color","--ah-weight":"title weight"},_={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"8px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:"All breakpoints (Desktop base)"}),e.jsx(oe,{css:H,aliases:G}),ce.map(a=>e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"32px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:[`${ba(a.condition)} `,e.jsx("code",{style:{fontSize:12,fontWeight:400,color:"var(--color-text-neutral-subtle-default)"},children:a.condition})]}),e.jsx(oe,{css:a.body,aliases:G})]},a.condition))]})},xa={default:"default",hovered:"hover",pressed:"pressed",focused:"focus"},ya={Desktop:.75,Mobile:1};function wa(){const[a,n]=C.useState("image"),[t,r]=C.useState("16/9"),[l,h]=C.useState("Desktop"),[u,c]=C.useState("default"),T=o[l],M=[H,...ce.filter(F=>pe(F.condition,T)).map(F=>F.body),_e].join(`
`);return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(O,{label:"Media",options:E,value:a,onChange:n}),e.jsx(O,{label:"Ratio",options:I,value:t,onChange:r}),e.jsx(O,{label:"Breakpoint",options:B,value:l,onChange:h}),e.jsx(O,{label:"InteractionState",options:W,value:u,onChange:c}),e.jsx(Se,{css:M,aliases:G,group:a,state:xa[u],scale:ya[l],children:e.jsx(d,{style:{width:T,marginInline:-T/2},...p({media:a,ratio:t,href:"#",interactionState:u})})},`${l}-${a}-${t}`)]})}const k={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(wa,{})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source},description:{story:"Figma default: Media Image · Ratio 16x9 · Desktop (608px frame).",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 48
  }}>
      {CARD_FEED_AD_MEDIA.map(media => <Frame key={media} width={BREAKPOINTS.Desktop} label={MEDIA_NAMES[media]}>
          <CardFeedAd {...withSamples({
        ...args,
        media
      })} />
        </Frame>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Figma `Media`: a picture, an `ArticleVideo`, or a product carousel (here at 16x9, Desktop).",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 48
  }}>
      {CARD_FEED_AD_MEDIA.map(media => <div key={media} style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 48
    }}>
          {CARD_FEED_AD_RATIOS.map(ratio => <Frame key={ratio} width={BREAKPOINTS.Desktop} label={\`\${MEDIA_NAMES[media]} · \${RATIO_NAMES[ratio]}\`}>
              <CardFeedAd {...withSamples({
          ...args,
          media,
          ratio
        })} />
            </Frame>)}
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:"Figma `Ratio` × `Media` at the Desktop width. 9x16 pictures and videos take 3/5 of the column; carousel ratios shape each product picture.",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 48
  }}>
      {CARD_FEED_AD_RATIOS.map(ratio => <div key={ratio} style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 48
    }}>
          {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${MEDIA_NAMES[args.media ?? 'image']} · \${RATIO_NAMES[ratio]} · \${bp} \${BREAKPOINTS[bp]}\`}>
              <CardFeedAd {...withSamples({
          ...args,
          ratio
        })} />
            </Frame>)}
          <Frame width={BREAKPOINTS.Mobile} label={\`Carousel · \${RATIO_NAMES[ratio]} · Mobile \${BREAKPOINTS.Mobile}\`}>
            <CardFeedAd {...withSamples({
          ...args,
          media: 'carousel',
          ratio
        })} />
          </Frame>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Figma `Breakpoint`: Desktop (608) and Mobile (361) frames, per Ratio of the picture. On Mobile the 9x16 caption stacks with a full-width CTA.",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 48
  }}>
      <Frame width={BREAKPOINTS.Mobile} label="Show description off">
        <CardFeedAd {...withSamples({
        ...args,
        showDescription: false
      })} />
      </Frame>
      <Frame width={BREAKPOINTS.Mobile} label="Show CTA off">
        <CardFeedAd {...withSamples({
        ...args,
        showCta: false
      })} />
      </Frame>
      <Frame width={BREAKPOINTS.Mobile} label="Show caption subtitle off">
        <CardFeedAd {...withSamples({
        ...args,
        showCaptionSubtitle: false
      })} />
      </Frame>
      <Frame width={BREAKPOINTS.Mobile} label="Show caption off">
        <CardFeedAd {...withSamples({
        ...args,
        showCaption: false
      })} />
      </Frame>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Figma boolean props: `Show description`, `Show caption`, `Show caption subtitle`, `Show CTA`.",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onCtaClick: fn()
  }
}`,...y.parameters?.docs?.source},description:{story:"With `onCtaClick` the CTA is its own button above the card link (e.g. add to cart). Without it the CTA is inert and clicks go to the card link.",...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    media: 'carousel',
    ratio: '1/1',
    items: [{
      src: AD_IMAGES.Portrait,
      title: 'Pumpkin Spice · Ground',
      rating: 4,
      reviewCount: 12,
      price: '$26.95',
      href: '#ground'
    }, {
      src: AD_IMAGES.Portrait,
      title: 'Pumpkin Spice · K-Cups®',
      rating: 4.5,
      reviewCount: 31,
      price: '$28.95',
      href: '#k-cups'
    }, {
      src: AD_IMAGES.Portrait,
      title: 'Pumpkin Spice · Whole Bean',
      rating: 5,
      reviewCount: 1,
      price: '$26.95',
      href: '#whole-bean'
    }, {
      src: AD_IMAGES.Portrait,
      title: 'Fall Sampler',
      rating: 3,
      reviewCount: 8,
      price: '$44.95',
      href: '#sampler'
    }]
  }
}`,...w.parameters?.docs?.source},description:{story:"Carousel products with their own pages (`items[].href`), ratings and reviews. Scroll / swipe the track; each product is a link.",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <ul style={{
    display: 'grid',
    gap: 48,
    maxWidth: BREAKPOINTS.Desktop,
    margin: '0 auto',
    padding: 0,
    listStyle: 'none'
  }}>
      <li>
        <CardFeed content="article-free" href="#" headingLevel={2} imageSrc={CARD_FEED_IMAGES['Article Free']} />
      </li>
      <li>
        <CardFeedAd {...withSamples({
        ...args,
        headingLevel: 2
      })} />
      </li>
      <li>
        <CardFeed content="live-blog" href="#" headingLevel={2} imageSrc={CARD_FEED_IMAGES['Live Blog']} />
      </li>
    </ul>
}`,...A.parameters?.docs?.source},description:{story:"An ad between feed items (spacing is the page's, not the card's).",...A.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 56
  }}>
      {BREAKPOINT_NAMES.map(bp => <div key={bp} style={{
      display: 'grid',
      gap: 40
    }}>
          {CARD_FEED_AD_MEDIA.flatMap(media => CARD_FEED_AD_RATIOS.map(ratio => <div key={\`\${media}-\${ratio}\`} style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 32
      }}>
                {CARD_FEED_AD_INTERACTION_STATES.map(state => <Frame key={state} width={BREAKPOINTS[bp]} label={\`\${bp} · \${MEDIA_NAMES[media]} · \${RATIO_NAMES[ratio]} · \${state}\`}>
                    <CardFeedAd {...withSamples({
            ...args,
            media,
            ratio,
            interactionState: state
          })} />
                  </Frame>)}
              </div>))}
        </div>)}
    </div>
}`,...S.parameters?.docs?.source},description:{story:"All 54 Figma variants: Media × Ratio (rows) × InteractionState (columns), Desktop then Mobile. `focused` (not in Figma) is the card ring.",...S.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div>
      <p style={{
      margin: '8px 0 0',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-text-neutral-bold-default)'
    }}>All breakpoints (Desktop base)</p>
      <CssTokens css={cardCss} aliases={ALIASES} />
      {BLOCKS.map(b => <div key={b.condition}>
          <p style={{
        margin: '32px 0 0',
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--color-text-neutral-bold-default)'
      }}>
            {\`\${breakpointsOf(b.condition)} \`}
            <code style={{
          fontSize: 12,
          fontWeight: 400,
          color: 'var(--color-text-neutral-subtle-default)'
        }}>{b.condition}</code>
          </p>
          <CssTokens css={b.body} aliases={ALIASES} />
        </div>)}
    </div>
}`,..._.parameters?.docs?.source},description:{story:"Properties and tokens read from CardFeedAd.module.css, resolved for the active theme: Desktop (base), then Mobile.",..._.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <CardFeedAdInspect />
}`,...k.parameters?.docs?.source},description:{story:"Pick Media, Ratio, Breakpoint and InteractionState; see real measurements and the tokens that apply.",...k.parameters?.docs?.description}}};const Aa=["Default","Media","Ratios","Breakpoints","CaptionOptions","InteractiveCta","Carousel","InAFeed","States","Tokens","Inspect"],Ra=Object.freeze(Object.defineProperty({__proto__:null,Breakpoints:b,CaptionOptions:x,Carousel:w,Default:f,InAFeed:A,Inspect:k,InteractiveCta:y,Media:g,Ratios:v,States:S,Tokens:_,__namedExportsOrder:Aa,default:ga},Symbol.toStringTag,{value:"Module"}));export{b as B,Ra as C,f as D,y as I,g as M,v as R,S,_ as T,w as a,x as b,A as c,k as d};
