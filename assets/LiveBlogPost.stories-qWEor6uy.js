import{r as d,j as e}from"./iframe-BaE-r_tL.js";import{C as se}from"./CssTokens-DoMUOAyj.js";import{I as L,C as Ie}from"./ComponentInspector-aQuGSI0z.js";import{V as Pe}from"./index-DTA9Iiqt.js";import{H as Oe}from"./index-DO2tlVwn.js";import Ee from"./pinned-filled-C84GsqaS.js";import{a as Be}from"./ArticleVideo-DY64P19u.js";import{b as ie}from"./Avatar-DfOPemCI.js";import{b as le}from"./Byline-CDW89dVi.js";import{I as Fe}from"./IconButton-C0K0oZpp.js";import{c as Me}from"./Link-Bo7zJKQL.js";import{a as Re}from"./Icon-D8yVe6yW.js";const K=`/* ==============================================
 * LiveBlogPost — Daily Wire Design System
 * Figma: Live Blog Article (10033:13086), page "↳ Content", section "Article".
 * CardState Closed | Opened × Content VerticalVideo | Text | Image | Twitter Post | HorizontalVideo |
 * Youtube video × Breakpoint Mobile | Tablet | Desktop × Type Default | Pinned, + Show Avatar (72 variants).
 * Nested: Avatar, Byline, Icon Button (outline · share-2), Link Button ("Show more"), Video Article Resource.
 *
 * The breakpoint axis is responsive CSS: container queries on the post's own width (.root is the
 * container, .card draws the post). The Figma frames are Mobile 393 · Desktop 640 · Tablet 768:
 * Desktop is the 640px live-blog column (the page supplies the gutters), Tablet is a full-width post
 * that draws its own 48px gutters. Hence: < 640 Mobile · 640–767 Desktop · ≥ 768 Tablet.
 * tokens.css has no breakpoint tokens: the limits are the Figma frame widths.
 * All other values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: the query container ───────────────── */

.root {
  display: block;
  box-sizing: border-box;
  width: 100%;
  container-name: dw-live-blog-post;
  container-type: inline-size;
}

/* ── Card: surface, bottom stroke, vertical rhythm (Mobile first) ── */

.card {
  /* Horizontal padding of the text sections */
  --lbp-gutter: var(--spacing-xl);
  /* Horizontal padding of image / video / YouTube media (0 = edge to edge) */
  --lbp-media-inset: var(--spacing-none);
  --lbp-media-radius: var(--border-radius-none);
  --lbp-surface: var(--color-background-neutral-bold-default);

  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  box-sizing: border-box;
  padding-block: var(--spacing-4xl);
  background-color: var(--lbp-surface);
  /* Figma: 1px bottom stroke, inside */
  border-block-end: var(--border-default) solid var(--color-border-neutral-bold-default);
  border-radius: var(--border-radius-none);
  color: var(--color-text-neutral-bold-default);
}

/* Figma Type=Pinned: subtle surface, no stroke */
.root[data-variant='pinned'] .card {
  --lbp-surface: var(--color-background-neutral-subtle-default);
  border-block-end-width: var(--border-none);
}

/* ── Head: pinned marker, author row, headline (Figma article-content, gap spacing-xl) ── */

.head {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  padding-inline: var(--lbp-gutter);
}

/* Pinned marker: label/500/md (label/500/lg from 640px), subtlest text + filled pin */
.pinned {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin: var(--spacing-none);
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Medium);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-subtlest-default);
}

.pinIcon {
  display: block;
  flex-shrink: 0;
  width: var(--size-md);
  height: var(--size-md);
  color: var(--color-icon-neutral-subtlest-default);
}

/* Author row: avatar + (timestamp / byline) on the start, share on the end */
.meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Figma: 10px, no variable bound; closest token */
  gap: var(--spacing-md);
}

/* Figma: avatar and the text column are top-aligned, spacing-lg apart */
.author {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  min-inline-size: 0;
}

.metaText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-xxs);
  min-inline-size: 0;
}

/* label/500/sm (label/500/md from 640px), neutral-bold */
.timestamp {
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-xs);
  font-weight: var(--Medium);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-bold-default);
}

/* Figma overrides the Byline name with an underline (the nested Link Button is underline=off) */
.byline span {
  text-decoration-line: underline;
}

/* Headline: heading/500/md (heading/500/lg from 640px) */
.title {
  margin: var(--spacing-none);
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-xl);
  font-weight: var(--Medium);
  line-height: var(--line-height-120);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-bold-default);
  text-wrap: pretty;
  overflow-wrap: anywhere;
}

/* ── One DS size per range: the copy for the other range is removed ── */

.compact {
  display: contents;
}

.regular {
  display: none;
}

/* ── Media: image, video or embed (Figma "Frame 4") ── */

.media {
  padding-inline: var(--lbp-media-inset);
}

/* Figma: the tweet card always sits inside the text gutter */
.root[data-content='twitter'] .media {
  padding-inline: var(--lbp-gutter);
}

.frame {
  overflow: hidden;
  border-radius: var(--lbp-media-radius);
}

/* The tweet card draws its own corners */
.root[data-content='twitter'] .frame {
  border-radius: var(--border-radius-none);
}

.figure {
  margin: var(--spacing-none);
}

/* Figma image fill: FILL (cover) in a 16:9 box */
.image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* Not drawn in Figma: body/400/sm, subtlest, kept inside the text gutter when the image bleeds */
.caption {
  margin-block-start: var(--spacing-md);
  padding-inline: calc(var(--lbp-gutter) - var(--lbp-media-inset));
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-subtlest-default);
}

.embed {
  display: block;
}

/* Figma Youtube video: a 16:9 player; the slot content fills it (iframe, facade, placeholder) */
.root[data-content='youtube'] .embed {
  aspect-ratio: 16 / 9;
}

.root[data-content='youtube'] .embed > * {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}

/* ── Body + disclosure (Figma article-content, gap spacing-xl, items centered) ── */

.bodySection {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xl);
  padding-inline: var(--lbp-gutter);
}

/* body/400/md, paragraph spacing spacing-lg */
.body {
  --lbp-paragraph-gap: var(--spacing-lg);

  align-self: stretch;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-md);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-bold-default);
  overflow-wrap: anywhere;
}

.body > * {
  margin-block: var(--spacing-none);
}

.body > * + * {
  margin-block-start: var(--lbp-paragraph-gap);
}

/* Figma CardState=Closed: 10 lines (8 from 640px) with an ellipsis */
.root[data-expanded='false'] .body {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
}

/* Link Button secondary · md · underline · regular; the hit area grows on touch screens */
.toggle {
  position: relative;
}

@media (pointer: coarse) {
  .toggle::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: max(100%, var(--touch-target-min));
    height: max(100%, var(--touch-target-min));
    transform: translate(-50%, -50%);
  }
}

/* ── Tablet + Desktop (≥ 640): larger type, avatar, byline and share ── */

@container dw-live-blog-post (width >= 640px) {
  .pinned {
    font-size: var(--font-size-md);
  }

  .pinIcon {
    width: var(--size-lg);
    height: var(--size-lg);
  }

  .timestamp {
    font-size: var(--font-size-sm);
  }

  .title {
    font-size: var(--font-size-2xl);
  }

  .compact {
    display: none;
  }

  .regular {
    display: contents;
  }

  /* Figma: image, horizontal video, YouTube and tweet posts space their sections spacing-4xl apart */
  .root[data-content='image'] .card,
  .root[data-content='horizontal-video'] .card,
  .root[data-content='youtube'] .card,
  .root[data-content='twitter'] .card {
    gap: var(--spacing-4xl);
  }

  .root[data-expanded='false'] .body {
    -webkit-line-clamp: 8;
  }
}

/* ── Desktop (640 – 767): the live-blog column, no gutters, body/400/lg ── */

@container dw-live-blog-post (640px <= width < 768px) {
  .card {
    --lbp-gutter: var(--spacing-none);
    --lbp-media-radius: var(--border-radius-md);
  }

  /* Figma Type=Pinned: a rounded card with its own gutter; media runs edge to edge */
  .root[data-variant='pinned'] .card {
    --lbp-gutter: var(--spacing-4xl);
    --lbp-media-radius: var(--border-radius-none);
    border-radius: var(--border-radius-lg);
  }

  .body {
    --lbp-paragraph-gap: var(--spacing-xl);
    font-size: var(--font-size-lg);
  }
}

/* ── Tablet (≥ 768): full-width post with spacing-6xl gutters; media inset, rounded ── */

@container dw-live-blog-post (width >= 768px) {
  .card {
    --lbp-gutter: var(--spacing-6xl);
    --lbp-media-inset: var(--spacing-6xl);
    --lbp-media-radius: var(--border-radius-md);
  }
}
`,Ve="_root_v1wez_8",qe="_card_v1wez_9",De="_head_v1wez_56",$e="_pinned_v1wez_64",He="_pinIcon_v1wez_77",Ke="_meta_v1wez_86",We="_author_v1wez_95",Ye="_metaText_v1wez_102",Ge="_timestamp_v1wez_111",Ue="_byline_v1wez_121",Xe="_title_v1wez_126",Je="_compact_v1wez_140",Ze="_regular_v1wez_144",Qe="_media_v1wez_150",et="_frame_v1wez_159",tt="_figure_v1wez_169",nt="_image_v1wez_174",at="_caption_v1wez_182",rt="_embed_v1wez_193",ot="_bodySection_v1wez_211",st="_body_v1wez_211",it="_toggle_v1wez_250",a={root:Ve,card:qe,head:De,pinned:$e,pinIcon:He,meta:Ke,author:We,metaText:Ye,timestamp:Ge,byline:Ue,title:Xe,compact:Je,regular:Ze,media:Qe,frame:et,figure:tt,image:nt,caption:at,embed:rt,bodySection:ot,body:st,toggle:it},I=["vertical-video","text","image","twitter","horizontal-video","youtube"];function lt(t){const n=t.trim().split(/\s+/).filter(Boolean);return(n.length>1?[n[0],n[n.length-1]]:n).map(o=>o[0]?.toUpperCase()??"").join("")}const dt=t=>t==="vertical-video"||t==="horizontal-video",m=d.forwardRef(function({title:n,headingLevel:r=2,timestamp:o,dateTime:s,author:u,authorHref:c,avatar:i,showAvatar:y=!0,pinned:B=!1,pinnedLabel:F="Pinned",content:g="text",imageSrc:M,imageAlt:f="",imageCaption:Y,video:D,embed:$,children:R,expanded:G,defaultExpanded:be=!1,onExpandedChange:ve,showMoreLabel:ye="Show more",showLessLabel:xe="Show less",onShare:U,shareLabel:we="Share",className:Te,..._e},Se){const X=d.useId(),J=`${X}-title`,Z=`${X}-body`,[je,ke]=d.useState(be),b=G??je,Q=d.useRef(null),[Ne,ze]=d.useState(!0);d.useLayoutEffect(()=>{const h=Q.current;if(!h||b)return;const re=()=>ze(h.scrollHeight-h.clientHeight>1);re();const oe=new ResizeObserver(re);return oe.observe(h),()=>oe.disconnect()},[b,R]);const Ae=()=>{const h=!b;G===void 0&&ke(h),ve?.(h)},Ce=`h${r}`,ee=R!=null&&R!==!1,Le=ee&&(b||Ne),te={type:i?.type??"host",src:i?.src,initials:i?.initials??lt(u)},ne=h=>e.jsx(Fe,{type:"outline",size:h,icon:"share-2","aria-label":we,onClick:U}),ae=g==="image"?M?e.jsxs("figure",{className:a.figure,children:[e.jsx("div",{className:a.frame,children:e.jsx("img",{className:a.image,src:M,alt:f,decoding:"async"})}),Y!=null&&e.jsx("figcaption",{className:a.caption,children:Y})]}):null:dt(g)?D?e.jsx("div",{className:a.frame,children:e.jsx(Be,{...D,aspect:D.aspect??(g==="vertical-video"?"2/3":"16/9")})}):null:g==="twitter"||g==="youtube"?$==null||$===!1?null:e.jsx("div",{className:a.frame,children:e.jsx("div",{className:a.embed,children:$})}):null;return e.jsx("article",{ref:Se,className:[a.root,Te].filter(Boolean).join(" "),"aria-labelledby":J,"data-variant":B?"pinned":"default","data-content":g,"data-expanded":b?"true":"false",..._e,children:e.jsxs("div",{className:a.card,children:[e.jsxs("div",{className:a.head,children:[B&&e.jsxs("p",{className:a.pinned,children:[e.jsx(Ee,{className:a.pinIcon,"aria-hidden":"true",focusable:"false"}),e.jsx("span",{children:F})]}),e.jsxs("div",{className:a.meta,children:[e.jsxs("div",{className:a.author,children:[y&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:a.compact,children:e.jsx(ie,{...te,size:"2xsm"})}),e.jsx("span",{className:a.regular,children:e.jsx(ie,{...te,size:"xsm"})})]}),e.jsxs("div",{className:a.metaText,children:[s?e.jsx("time",{className:a.timestamp,dateTime:s,children:o}):e.jsx("span",{className:a.timestamp,children:o}),e.jsx("span",{className:a.compact,children:e.jsx(le,{className:a.byline,author:u,href:c,size:"sm",variant:"secondary"})}),e.jsx("span",{className:a.regular,children:e.jsx(le,{className:a.byline,author:u,href:c,size:"md",variant:"secondary"})})]})]}),U&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:a.compact,children:ne("xsm")}),e.jsx("span",{className:a.regular,children:ne("md")})]})]}),e.jsx(Ce,{id:J,className:a.title,children:n})]}),ae&&e.jsx("div",{className:a.media,children:ae}),ee&&e.jsxs("div",{className:a.bodySection,children:[e.jsx("div",{ref:Q,id:Z,className:a.body,children:R}),Le&&e.jsx(Me,{as:"button",className:a.toggle,variant:"secondary",size:"md",weight:"regular",underline:!0,"aria-expanded":b,"aria-controls":Z,onClick:Ae,children:b?xe:ye})]})]})})});m.__docgenInfo={description:'One entry of a live blog (Figma `Live Blog Article` 10033:13086): pinned marker, author row with share,\nheadline, optional media (image, video or an embed slot) and a body that opens with "Show more".\nThe `Breakpoint` axis is responsive CSS (container queries on the post\'s own width).',methods:[],displayName:"LiveBlogPost",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"Post headline (Figma heading/500/md on Mobile, heading/500/lg from 640px)"},headingLevel:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Heading element for the title. Default `2` (the live blog page owns the `h1`).",defaultValue:{value:"2",computed:!1}},timestamp:{required:!0,tsType:{name:"string"},description:'Relative or formatted time shown above the author, e.g. "3 min ago"'},dateTime:{required:!1,tsType:{name:"string"},description:"Machine-readable date (ISO 8601). When set, the timestamp renders as `<time dateTime>`."},author:{required:!0,tsType:{name:"string"},description:"Author name (DS `Byline`)"},authorHref:{required:!1,tsType:{name:"string"},description:"Author page. Without it the name is static text."},avatar:{required:!1,tsType:{name:"BylineAvatar"},description:"Author avatar data (photo `src`, `type`, `initials`); initials default to the author's"},showAvatar:{required:!1,tsType:{name:"boolean"},description:"Figma `Show Avatar`: the author avatar before the timestamp and name",defaultValue:{value:"true",computed:!1}},pinned:{required:!1,tsType:{name:"boolean"},description:'Figma `Type=Pinned`: "Pinned" marker and the subtle surface',defaultValue:{value:"false",computed:!1}},pinnedLabel:{required:!1,tsType:{name:"string"},description:"Text of the pinned marker",defaultValue:{value:"'Pinned'",computed:!1}},content:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LIVE_BLOG_POST_CONTENTS)[number]"},description:"Figma `Content`: which media sits between the headline and the body.\n`text` = no media. `image` uses `imageSrc` / `imageAlt` / `imageCaption`; the videos use `video`;\n`twitter` and `youtube` render the `embed` slot.",defaultValue:{value:"'text'",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:'Picture for `content="image"` (16:9, cover)'},imageAlt:{required:!1,tsType:{name:"string"},description:"Alternative text of the picture. Required for a meaningful image; `''` marks it decorative.",defaultValue:{value:"''",computed:!1}},imageCaption:{required:!1,tsType:{name:"ReactNode"},description:"Optional caption under the picture (`<figcaption>`; not drawn in Figma)"},video:{required:!1,tsType:{name:"ArticleVideoProps"},description:'`ArticleVideo` props for `content="vertical-video"` / `"horizontal-video"`.\nThe box ratio defaults to the Figma frames: 2:3 (vertical) and 16:9 (horizontal); `video.aspect` overrides it.'},embed:{required:!1,tsType:{name:"ReactNode"},description:'Embed for `content="twitter"` / `"youtube"`. The component never loads third-party scripts or iframes:\npass your own embed, a click-to-load facade or a static placeholder. `youtube` gets a 16:9 frame.'},children:{required:!1,tsType:{name:"ReactNode"},description:"Post body: paragraphs (`<p>`) or any rich text. Clamped while closed."},expanded:{required:!1,tsType:{name:"boolean"},description:"Figma `CardState=Opened` (controlled)"},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"Figma `CardState=Opened` (uncontrolled initial value)",defaultValue:{value:"false",computed:!1}},onExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:'Called with the new value when "Show more" / "Show less" is used'},showMoreLabel:{required:!1,tsType:{name:"string"},description:"Disclosure label while closed",defaultValue:{value:"'Show more'",computed:!1}},showLessLabel:{required:!1,tsType:{name:"string"},description:"Disclosure label while opened",defaultValue:{value:"'Show less'",computed:!1}},onShare:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Share action (outline `IconButton`). The button is rendered only when this is set."},shareLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of the share button",defaultValue:{value:"'Share'",computed:!1}}},composes:["Omit"]};const ct=""+new URL("live-blog-image-DcyCKiAz.jpg",import.meta.url).href,pt="_tweet_15zu6_9",mt="_tweetHeader_15zu6_24",ut="_tweetAvatar_15zu6_32",gt="_tweetNames_15zu6_41",ht="_tweetName_15zu6_41",ft="_tweetHandle_15zu6_57",bt="_tweetLogo_15zu6_64",vt="_tweetText_15zu6_72",yt="_tweetDate_15zu6_73",xt="_tweetImage_15zu6_80",wt="_tweetRule_15zu6_86",Tt="_tweetLink_15zu6_94",_t="_youtubeLink_15zu6_113",St="_youtube_15zu6_113",jt="_youtubeThumb_15zu6_127",l={tweet:pt,tweetHeader:mt,tweetAvatar:ut,tweetNames:gt,tweetName:ht,tweetHandle:ft,tweetLogo:bt,tweetText:vt,tweetDate:yt,tweetImage:xt,tweetRule:wt,tweetLink:Tt,youtubeLink:_t,youtube:St,youtubeThumb:jt},kt=t=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},d.createElement("path",{d:"M10.488 14.651L15.25 21H22.25L14.392 10.522L20.93 3H18.28L13.163 8.886L8.75 3H1.75L9.26 13.015L2.32 21H4.97L10.488 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z",fill:"currentColor"})),Nt=""+new URL("tweet-avatar-B_FJL859.png",import.meta.url).href,zt=""+new URL("tweet-image-DSWLCwj2.jpg",import.meta.url).href,At=""+new URL("youtube-thumbnail-CDNncEKV.jpg",import.meta.url).href;function ce({name:t="COGAT",handle:n="@cogatonline",avatarSrc:r=Nt,text:o="Following the missile attacks launched by Iran against the State of Israel, a number of necessary security measures have been implemented, including the closure of the crossings.",imageSrc:s=zt,imageAlt:u="Graphic reading “Important notice” with the COGAT emblem",date:c="6:03 PM Jun 7, 2026",dateTime:i="2026-06-07T18:03",href:y="https://x.com/cogatonline"}){return e.jsxs("figure",{className:l.tweet,"data-theme":"light","aria-label":`Post by ${t} on X (placeholder)`,children:[e.jsxs("div",{className:l.tweetHeader,children:[e.jsx("img",{className:l.tweetAvatar,src:r,alt:""}),e.jsxs("span",{className:l.tweetNames,children:[e.jsx("span",{className:l.tweetName,children:t}),e.jsx("span",{className:l.tweetHandle,children:n})]}),e.jsx(kt,{className:l.tweetLogo,"aria-hidden":"true",focusable:"false"})]}),e.jsx("p",{className:l.tweetText,children:o}),s&&e.jsx("img",{className:l.tweetImage,src:s,alt:u}),e.jsx("time",{className:l.tweetDate,dateTime:i,children:c}),e.jsx("hr",{className:l.tweetRule}),e.jsx("a",{className:l.tweetLink,href:y,target:"_blank",rel:"noreferrer",children:"View on X"})]})}function pe({title:t="Michael Knowles reacts to the Iran proposal",thumbnailSrc:n=At,href:r="https://www.youtube.com/"}){return e.jsxs("div",{className:l.youtube,children:[e.jsx("img",{className:l.youtubeThumb,src:n,alt:t}),e.jsxs("a",{className:l.youtubeLink,href:r,target:"_blank",rel:"noreferrer",children:[e.jsx(Re,{name:"brand-youtube",size:"md"}),"Watch on YouTube"]})]})}ce.__docgenInfo={description:'Mirrors the Figma tweet card (frame 10033:13531 › Frame 4): Figma pins it to the Light color mode,\nso the placeholder sets `data-theme="light"` and every token resolves to its light value.',methods:[],displayName:"TweetPlaceholder",props:{name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'COGAT'",computed:!1}},handle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'@cogatonline'",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"tweetAvatar",computed:!0}},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Following the missile attacks launched by Iran against the State of Israel, a number of necessary security measures have been implemented, including the closure of the crossings.'",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"tweetImage",computed:!0}},imageAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Graphic reading “Important notice” with the COGAT emblem'",computed:!1}},date:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'6:03 PM Jun 7, 2026'",computed:!1}},dateTime:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'2026-06-07T18:03'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:'Post URL for "View on X"',defaultValue:{value:"'https://x.com/cogatonline'",computed:!1}}}};pe.__docgenInfo={description:'Mirrors the Figma "Youtube video" frame (a still of the player) with a "Watch on YouTube" link instead of an iframe.',methods:[],displayName:"YouTubePlaceholder",props:{title:{required:!1,tsType:{name:"string"},description:"Video title: the thumbnail's alt text",defaultValue:{value:"'Michael Knowles reacts to the Iran proposal'",computed:!1}},thumbnailSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"youtubeThumbnail",computed:!0}},href:{required:!1,tsType:{name:"string"},description:'Video URL for "Watch on YouTube"',defaultValue:{value:"'https://www.youtube.com/'",computed:!1}}}};const Ct=ct,{fn:de}=__STORYBOOK_MODULE_TEST__,p={Mobile:393,Desktop:640,Tablet:768},P=Object.keys(p),V={"vertical-video":"VerticalVideo",text:"Text",image:"Image",twitter:"Twitter Post","horizontal-video":"HorizontalVideo",youtube:"Youtube video"},W=["Closed","Opened"],me=["Default","Pinned"],Lt=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"President Trump said Thursday that he immediately rejected Iran’s latest proposal after reading what he described as an unacceptable opening line related to Tehran’s nuclear program."}),e.jsx("p",{children:"Speaking to reporters, Trump said the proposal failed to satisfy his demand that Iran permanently abandon any nuclear capability."}),e.jsx("p",{children:"“Well I looked at it and if I don’t like the first sentence I just throw it away,” Trump said. “They fully agreed — no nuclear. And if they have any nuclear of any form, I don’t read the rest of the letter.”"}),e.jsx("p",{children:"Iran’s Assembly of Experts said the younger Khamenei had been chosen with a “decisive vote” and urged Iranians to rally behind him."})]});function v(t){switch(t){case"image":return{content:t,imageSrc:Ct,imageAlt:"A cleric in a black turban walks through a crowd"};case"vertical-video":case"horizontal-video":return{content:t,video:{poster:Pe,label:"Explosions light up the skyline"}};case"twitter":return{content:t,embed:e.jsx(ce,{})};case"youtube":return{content:t,embed:e.jsx(pe,{})};default:return{content:t}}}const ue={title:"The One Line In Iran’s Proposal That Made Trump ‘Throw It Away’",timestamp:"3 min ago",dateTime:"2026-11-05T14:57:00Z",author:"Ben Shapiro",avatar:{src:Oe["Ben Shapiro"],type:"host"},showAvatar:!0,pinned:!1,headingLevel:2,children:Lt},ge={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"};function O({width:t,label:n,children:r}){return e.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[n&&e.jsx("div",{style:ge,children:n}),e.jsx("div",{style:{width:t,flexShrink:0},children:r})]})}const E={padding:24,overflowX:"auto"},q={display:"flex",alignItems:"flex-start",gap:32},It={component:m,title:"Components/LiveBlogPost",parameters:{layout:"padded"},argTypes:{title:{control:"text"},headingLevel:{control:"inline-radio",options:[2,3,4,5,6]},timestamp:{control:"text"},dateTime:{control:"text"},author:{control:"text"},authorHref:{control:"text"},avatar:{control:"object"},showAvatar:{control:"boolean"},pinned:{control:"boolean"},pinnedLabel:{control:"text"},content:{control:"select",options:[...I]},imageSrc:{control:"text"},imageAlt:{control:"text"},imageCaption:{control:"text"},video:{control:"object"},embed:{control:!1},children:{control:!1},expanded:{control:"boolean"},defaultExpanded:{control:"boolean"},showMoreLabel:{control:"text"},showLessLabel:{control:"text"},shareLabel:{control:"text"}},args:{...ue,...v("image"),onShare:de(),onExpandedChange:de()}},x={},w={parameters:{layout:"fullscreen"},render:t=>e.jsx("div",{style:{...E,...q},children:I.map(n=>e.jsx(O,{width:p.Mobile,label:`${V[n]} · content="${n}"`,children:e.jsx(m,{...t,...v(n)})},n))})},T={parameters:{layout:"fullscreen"},render:t=>e.jsx("div",{style:{...E,...q},children:P.map(n=>e.jsx(O,{width:p[n],label:`${n} · ${p[n]}`,children:e.jsx(m,{...t})},n))})},_={parameters:{layout:"fullscreen"},args:{pinned:!0},render:t=>e.jsx("div",{style:{...E,...q},children:P.map(n=>e.jsx(O,{width:p[n],label:`${n} · Pinned`,children:e.jsx(m,{...t})},n))})},S={parameters:{layout:"fullscreen"},args:{...v("text")},render:t=>e.jsx("div",{style:{...E,...q},children:W.map(n=>e.jsx(O,{width:p.Mobile,label:`CardState=${n}`,children:e.jsx(m,{...t,expanded:n==="Opened"})},n))})},j={args:{showAvatar:!1,...v("text")},render:t=>e.jsx("div",{style:{maxWidth:p.Mobile},children:e.jsx(m,{...t})})},k={args:{imageCaption:"Mojtaba Khamenei at a rally in Tehran. Photo: Reuters"},render:t=>e.jsx("div",{style:{maxWidth:p.Mobile},children:e.jsx(m,{...t})})};function Pt(t){const[n,r]=d.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:p.Mobile},children:[e.jsx(m,{...t,expanded:n,onExpandedChange:o=>{r(o),t.onExpandedChange?.(o)}}),e.jsxs("div",{style:ge,children:["expanded: ",e.jsx("b",{children:String(n)})]})]})}const N={args:{...v("text")},render:t=>e.jsx(Pt,{...t})},z={parameters:{layout:"fullscreen"},argTypes:{breakpoint:{control:"inline-radio",options:P}},args:{breakpoint:"Mobile"},render:({breakpoint:t,...n})=>e.jsx("div",{style:{...E,display:"grid",gap:48},children:I.map(r=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:24},children:W.flatMap(o=>me.map(s=>e.jsx(O,{width:p[t],label:`${V[r]} · ${o} · ${s} · ${t}`,children:e.jsx(m,{...n,...v(r),pinned:s==="Pinned",expanded:o==="Opened"})},`${o}-${s}`)))},r))})};function Ot(t){const n=t.replace(/\/\*[\s\S]*?\*\//g,""),r=[];let o=0,s=0,u=0,c="";for(let i=0;i<n.length;i++)n[i]==="{"?(o===0&&(c=n.slice(s,i).trim(),u=i+1),o++):n[i]==="}"&&(o--,o===0&&(c.startsWith("@container")&&r.push({condition:c.replace(/^@container\s+[\w-]+\s*/,""),body:n.slice(u,i)}),s=i+1));return r}const he=Ot(K);function fe(t,n){const r=t.match(/width < (\d+)px/),o=t.match(/width >= (\d+)px/)??t.match(/(\d+)px <= width/);return(!r||n<Number(r[1]))&&(!o||n>=Number(o[1]))}const Et=t=>P.filter(n=>fe(t,p[n])).join(" + "),H={"--lbp-gutter":"text gutter","--lbp-media-inset":"media inset","--lbp-media-radius":"media radius","--lbp-surface":"surface","--lbp-paragraph-gap":"paragraph gap"},A={tags:["!test"],parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"8px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:"All breakpoints (Mobile base)"}),e.jsx(se,{css:K,aliases:H}),he.map(t=>e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"32px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:[`${Et(t.condition)} `,e.jsx("code",{style:{fontSize:12,fontWeight:400,color:"var(--color-text-neutral-subtle-default)"},children:t.condition})]}),e.jsx(se,{css:t.body,aliases:H})]},t.condition))]})},Bt={Mobile:.8,Desktop:.6,Tablet:.55},Ft=I.map(t=>V[t]),Mt=["On","Off"];function Rt(){const[t,n]=d.useState("VerticalVideo"),[r,o]=d.useState("Closed"),[s,u]=d.useState("Default"),[c,i]=d.useState("Mobile"),[y,B]=d.useState("On"),F=I.find(f=>V[f]===t)??"text",g=p[c],M=[K,...he.filter(f=>fe(f.condition,g)).map(f=>f.body)].join(`
`);return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(L,{label:"Content",options:Ft,value:t,onChange:n}),e.jsx(L,{label:"CardState",options:W,value:r,onChange:o}),e.jsx(L,{label:"Type",options:me,value:s,onChange:u}),e.jsx(L,{label:"Breakpoint",options:P,value:c,onChange:i}),e.jsx(L,{label:"Avatar",options:Mt,value:y,onChange:B}),e.jsx(Ie,{css:M,aliases:H,group:s==="Pinned"?"pinned":"default",state:"default",scale:Bt[c],children:e.jsx(m,{...ue,...v(F),style:{width:g,marginInline:-g/2},pinned:s==="Pinned",expanded:r==="Opened",showAvatar:y==="On",onShare:()=>{}})},`${c}-${F}`)]})}const C={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(Rt,{})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"{}",...x.parameters?.docs?.source},description:{story:"Full width of the canvas: resize the viewport to see the breakpoints switch (< 640 Mobile · 640–767 Desktop · ≥ 768 Tablet).",...x.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    ...row
  }}>
      {LIVE_BLOG_POST_CONTENTS.map(content => <Frame key={content} width={BREAKPOINTS.Mobile} label={\`\${CONTENT_NAMES[content]} · content="\${content}"\`}>
          <LiveBlogPost {...args} {...mediaFor(content)} />
        </Frame>)}
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Figma `Content`, at the Mobile frame: video (2:3 and 16:9), text only, image, tweet and YouTube embeds.",...w.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    ...row
  }}>
      {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · \${BREAKPOINTS[bp]}\`}>
          <LiveBlogPost {...args} />
        </Frame>)}
    </div>
}`,...T.parameters?.docs?.source},description:{story:"Figma `Breakpoint`: Mobile 393 (edge-to-edge media), Desktop 640 (the live-blog column, no gutters) and Tablet 768 (48px gutters, inset media).",...T.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    pinned: true
  },
  render: args => <div style={{
    ...scroller,
    ...row
  }}>
      {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · Pinned\`}>
          <LiveBlogPost {...args} />
        </Frame>)}
    </div>
}`,..._.parameters?.docs?.source},description:{story:'Figma `Type=Pinned` (`pinned`): "Pinned" marker, subtle surface, no bottom stroke; a rounded card with its own gutter on Desktop.',..._.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    ...mediaFor('text')
  },
  render: args => <div style={{
    ...scroller,
    ...row
  }}>
      {CARD_STATES.map(state => <Frame key={state} width={BREAKPOINTS.Mobile} label={\`CardState=\${state}\`}>
          <LiveBlogPost {...args} expanded={state === 'Opened'} />
        </Frame>)}
    </div>
}`,...S.parameters?.docs?.source},description:{story:'Figma `CardState`: Closed clamps the body to 10 lines (8 from 640px) with "Show more"; Opened shows all of it with "Show less".',...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    showAvatar: false,
    ...mediaFor('text')
  },
  render: args => <div style={{
    maxWidth: BREAKPOINTS.Mobile
  }}>
      <LiveBlogPost {...args} />
    </div>
}`,...j.parameters?.docs?.source},description:{story:"Figma `Show Avatar` off: timestamp and byline only.",...j.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    imageCaption: 'Mojtaba Khamenei at a rally in Tehran. Photo: Reuters'
  },
  render: args => <div style={{
    maxWidth: BREAKPOINTS.Mobile
  }}>
      <LiveBlogPost {...args} />
    </div>
}`,...k.parameters?.docs?.source},description:{story:"`imageCaption` adds a `<figcaption>` under the picture (not drawn in Figma), kept inside the text gutter.",...k.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...mediaFor('text')
  },
  render: args => <ControlledDemo {...args} />
}`,...N.parameters?.docs?.source},description:{story:"`expanded` + `onExpandedChange` hand the open state to the parent (e.g. to open the post linked from a URL).",...N.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    breakpoint: {
      control: 'inline-radio',
      options: BREAKPOINT_NAMES
    }
  },
  args: {
    breakpoint: 'Mobile'
  },
  render: ({
    breakpoint,
    ...args
  }) => <div style={{
    ...scroller,
    display: 'grid',
    gap: 48
  }}>
      {LIVE_BLOG_POST_CONTENTS.map(content => <div key={content} style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 24
    }}>
          {CARD_STATES.flatMap(state => TYPES.map(type => <Frame key={\`\${state}-\${type}\`} width={BREAKPOINTS[breakpoint]} label={\`\${CONTENT_NAMES[content]} · \${state} · \${type} · \${breakpoint}\`}>
                <LiveBlogPost {...args} {...mediaFor(content)} pinned={type === 'Pinned'} expanded={state === 'Opened'} />
              </Frame>))}
        </div>)}
    </div>
}`,...z.parameters?.docs?.source},description:{story:"All Figma variants at one breakpoint: Content (rows) × CardState · Type (columns). Pick the breakpoint in Controls.",...z.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
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
    }}>All breakpoints (Mobile base)</p>
      <CssTokens css={postCss} aliases={ALIASES} />
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
}`,...A.parameters?.docs?.source},description:{story:"Properties and tokens read from LiveBlogPost.module.css, resolved for the active theme: shared (Mobile) rules, then each breakpoint range.",...A.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <PostInspect />
}`,...C.parameters?.docs?.source},description:{story:"Pick Content, CardState, Type, Breakpoint (frame width) and Show Avatar; see real measurements and the tokens that apply.",...C.parameters?.docs?.description}}};const Vt=["Default","Content","Breakpoints","Pinned","CardStates","WithoutAvatar","ImageCaption","Controlled","States","Tokens","Inspect"],Qt=Object.freeze(Object.defineProperty({__proto__:null,Breakpoints:T,CardStates:S,Content:w,Controlled:N,Default:x,ImageCaption:k,Inspect:C,Pinned:_,States:z,Tokens:A,WithoutAvatar:j,__namedExportsOrder:Vt,default:It},Symbol.toStringTag,{value:"Module"}));export{T as B,w as C,x as D,k as I,Qt as P,z as S,A as T,j as W,_ as a,S as b,N as c,C as d};
