import{r as u,j as l}from"./iframe-BaE-r_tL.js";import{b as E}from"./Icon-D8yVe6yW.js";import{I as y}from"./IconButton-C0K0oZpp.js";import{C as M}from"./CssTokens-DoMUOAyj.js";const z="_card_1i43u_6",P="_artworkContainer_1i43u_18",O="_artwork_1i43u_18",H="_artworkImg_1i43u_30",$="_content_1i43u_42",L="_publishedDate_1i43u_52",W="_episodeName_1i43u_61",F="_showName_1i43u_74",K="_footer_1i43u_85",U="_leftControls_1i43u_94",V="_rightControls_1i43u_102",J="_duration_1i43u_109",i={card:z,artworkContainer:P,artwork:O,artworkImg:H,content:$,publishedDate:L,episodeName:W,showName:F,footer:K,leftControls:U,rightControls:V,duration:J};function _(e){const a=e.replace("#","");return[parseInt(a.slice(0,2),16),parseInt(a.slice(2,4),16),parseInt(a.slice(4,6),16)]}function C(e,a,n){const t=r=>Math.max(0,Math.min(255,Math.round(r)));return`#${[e,a,n].map(r=>t(r).toString(16).padStart(2,"0")).join("")}`}function G(e,a){const[n,t,r]=_(e);return C(n*(1-a),t*(1-a),r*(1-a))}function Q(e,a){const[n,t,r]=_(e);return C(n+(255-n)*a,t+(255-t)*a,r+(255-r)*a)}function X(e){const[a,n]=u.useState(null),t=u.useRef(e);return u.useEffect(()=>{if(!e){n(null);return}e!==t.current&&(n(null),t.current=e);const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{try{const s=document.createElement("canvas");s.width=1,s.height=1;const m=s.getContext("2d");if(!m)return;m.drawImage(r,0,0,1,1);const[g,w,k]=m.getImageData(0,0,1,1).data;n(C(g,w,k))}catch{n(null)}},r.onerror=()=>n(null),r.src=e},[e]),a}function h({artworkSrc:e,episodeName:a,showName:n,publishedDate:t,episodeDuration:r,onPlay:s,onDownload:m,onShare:g,playIcon:w="player-play-filled",downloadIcon:k="arrow-bar-to-down",shareIcon:j="share-2",className:I}){const f=X(e),b=u.useRef(null),[R,A]=u.useState(!0);u.useEffect(()=>{if(!b.current)return;const B=b.current.closest("[data-theme]");A(B?.getAttribute("data-theme")!=="light")});const S=f&&/^#[0-9A-Fa-f]{6}$/.test(f)?R?G(f,.3):Q(f,.3):void 0,q=S?`linear-gradient(to bottom, ${S}, var(--color-background-neutral-subtle-default) 85%)`:"var(--color-background-neutral-subtle-default)";return l.jsxs("article",{ref:b,className:[i.card,I].filter(Boolean).join(" "),style:{background:q},"aria-label":`${a} — ${n}`,children:[l.jsx("div",{className:i.artworkContainer,children:l.jsx("div",{className:i.artwork,children:l.jsx("img",{className:i.artworkImg,src:e,alt:`${n} artwork`})})}),l.jsxs("div",{className:i.content,children:[t&&l.jsx("p",{className:i.publishedDate,children:l.jsx("time",{children:t})}),l.jsx("h3",{className:i.episodeName,children:a}),l.jsx("p",{className:i.showName,children:n})]}),l.jsxs("div",{className:i.footer,role:"group","aria-label":"Episode controls",children:[l.jsxs("div",{className:i.leftControls,children:[l.jsx(y,{icon:w,buttonStyle:"primary","aria-label":`Play ${a}`,onClick:s}),r&&l.jsx("span",{className:i.duration,children:r})]}),l.jsxs("div",{className:i.rightControls,children:[l.jsx(y,{icon:k,buttonStyle:"secondary","aria-label":`Download ${a}`,onClick:m}),l.jsx(y,{icon:j,buttonStyle:"secondary","aria-label":`Share ${a}`,onClick:g})]})]})]})}h.__docgenInfo={description:"",methods:[],displayName:"PodcastSpotlightCard",props:{artworkSrc:{required:!0,tsType:{name:"string"},description:""},episodeName:{required:!0,tsType:{name:"string"},description:""},showName:{required:!0,tsType:{name:"string"},description:""},publishedDate:{required:!1,tsType:{name:"string"},description:""},episodeDuration:{required:!1,tsType:{name:"string"},description:""},onPlay:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onShare:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},playIcon:{required:!1,tsType:{name:"union",raw:"keyof typeof ICONS",elements:[{name:"literal",value:"'adjustments-horizontal'"},{name:"literal",value:"'albums'"},{name:"literal",value:"'alert-circle'"},{name:"literal",value:"'arrow-back-up'"},{name:"literal",value:"'arrow-bar-to-down'"},{name:"literal",value:"'arrow-down'"},{name:"literal",value:"'arrow-left'"},{name:"literal",value:"'arrow-narrow-left'"},{name:"literal",value:"'arrow-narrow-right'"},{name:"literal",value:"'arrow-right'"},{name:"literal",value:"'arrow-up'"},{name:"literal",value:"'arrows-diagonal'"},{name:"literal",value:"'audio'"},{name:"literal",value:"'badge-cc-filled'"},{name:"literal",value:"'badge-cc-outline'"},{name:"literal",value:"'bell'"},{name:"literal",value:"'bell-checked'"},{name:"literal",value:"'bell-minus'"},{name:"literal",value:"'bell-off'"},{name:"literal",value:"'bookmark-filled'"},{name:"literal",value:"'bookmark-outline'"},{name:"literal",value:"'box-multiple'"},{name:"literal",value:"'brand-safari'"},{name:"literal",value:"'brand-youtube'"},{name:"literal",value:"'calendar-dollar'"},{name:"literal",value:"'calendar-up'"},{name:"literal",value:"'cast'"},{name:"literal",value:"'check'"},{name:"literal",value:"'check-small'"},{name:"literal",value:"'chevron-down'"},{name:"literal",value:"'chevron-left'"},{name:"literal",value:"'chevron-right'"},{name:"literal",value:"'chevron-up'"},{name:"literal",value:"'circle-check'"},{name:"literal",value:"'clock-exclamation'"},{name:"literal",value:"'cloud-off'"},{name:"literal",value:"'credit-card'"},{name:"literal",value:"'device-speaker'"},{name:"literal",value:"'device-tv-old'"},{name:"literal",value:"'dots-vertical'"},{name:"literal",value:"'download'"},{name:"literal",value:"'download-done'"},{name:"literal",value:"'download-completed'"},{name:"literal",value:"'download-starting-ring'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'external-link'"},{name:"literal",value:"'eye'"},{name:"literal",value:"'eye-off'"},{name:"literal",value:"'eye-search'"},{name:"literal",value:"'file-description'"},{name:"literal",value:"'file-info'"},{name:"literal",value:"'file-upload'"},{name:"literal",value:"'gavel'"},{name:"literal",value:"'grip-vertical'"},{name:"literal",value:"'headphones'"},{name:"literal",value:"'headphones-off'"},{name:"literal",value:"'heart-filled'"},{name:"literal",value:"'heart-outline'"},{name:"literal",value:"'help-octagon'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'home-1'"},{name:"literal",value:"'hourglass-empty'"},{name:"literal",value:"'icon-skip-15-back'"},{name:"literal",value:"'icon-skip-15-forward'"},{name:"literal",value:"'info-circle'"},{name:"literal",value:"'license'"},{name:"literal",value:"'loader'"},{name:"literal",value:"'lock'"},{name:"literal",value:"'mail'"},{name:"literal",value:"'menu-2'"},{name:"literal",value:"'message-circle'"},{name:"literal",value:"'messages'"},{name:"literal",value:"'microphone'"},{name:"literal",value:"'movie'"},{name:"literal",value:"'photo-plus'"},{name:"literal",value:"'pinned'"},{name:"literal",value:"'pinned-filled'"},{name:"literal",value:"'player-pause'"},{name:"literal",value:"'player-play-filled'"},{name:"literal",value:"'player-play-outline'"},{name:"literal",value:"'player-skip-back-filled'"},{name:"literal",value:"'player-skip-back-outline'"},{name:"literal",value:"'player-skip-forward-filled'"},{name:"literal",value:"'player-skip-forward-outline'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'plus-tv'"},{name:"literal",value:"'rating-18-plus'"},{name:"literal",value:"'re-download'"},{name:"literal",value:"'receipt-2'"},{name:"literal",value:"'reduce-viewport'"},{name:"literal",value:"'refresh'"},{name:"literal",value:"'rosette-discount-check'"},{name:"literal",value:"'ruler'"},{name:"literal",value:"'search'"},{name:"literal",value:"'server-2'"},{name:"literal",value:"'settings'"},{name:"literal",value:"'share-2'"},{name:"literal",value:"'shareplay'"},{name:"literal",value:"'sort-descending'"},{name:"literal",value:"'square'"},{name:"literal",value:"'square-plus'"},{name:"literal",value:"'star-filled'"},{name:"literal",value:"'star-half'"},{name:"literal",value:"'star-outline'"},{name:"literal",value:"'thumb-down'"},{name:"literal",value:"'thumb-up'"},{name:"literal",value:"'trailer-play'"},{name:"literal",value:"'trash'"},{name:"literal",value:"'user'"},{name:"literal",value:"'user-share'"},{name:"literal",value:"'users-group'"},{name:"literal",value:"'video'"},{name:"literal",value:"'video-off'"},{name:"literal",value:"'video-plus'"},{name:"literal",value:"'volume'"},{name:"literal",value:"'volume-2'"},{name:"literal",value:"'volume-3'"},{name:"literal",value:"'volume-off'"},{name:"literal",value:"'wifi-off'"},{name:"literal",value:"'world-off'"},{name:"literal",value:"'x'"},{name:"literal",value:"'zoom-reset'"}]},description:"",defaultValue:{value:"'player-play-filled'",computed:!1}},downloadIcon:{required:!1,tsType:{name:"union",raw:"keyof typeof ICONS",elements:[{name:"literal",value:"'adjustments-horizontal'"},{name:"literal",value:"'albums'"},{name:"literal",value:"'alert-circle'"},{name:"literal",value:"'arrow-back-up'"},{name:"literal",value:"'arrow-bar-to-down'"},{name:"literal",value:"'arrow-down'"},{name:"literal",value:"'arrow-left'"},{name:"literal",value:"'arrow-narrow-left'"},{name:"literal",value:"'arrow-narrow-right'"},{name:"literal",value:"'arrow-right'"},{name:"literal",value:"'arrow-up'"},{name:"literal",value:"'arrows-diagonal'"},{name:"literal",value:"'audio'"},{name:"literal",value:"'badge-cc-filled'"},{name:"literal",value:"'badge-cc-outline'"},{name:"literal",value:"'bell'"},{name:"literal",value:"'bell-checked'"},{name:"literal",value:"'bell-minus'"},{name:"literal",value:"'bell-off'"},{name:"literal",value:"'bookmark-filled'"},{name:"literal",value:"'bookmark-outline'"},{name:"literal",value:"'box-multiple'"},{name:"literal",value:"'brand-safari'"},{name:"literal",value:"'brand-youtube'"},{name:"literal",value:"'calendar-dollar'"},{name:"literal",value:"'calendar-up'"},{name:"literal",value:"'cast'"},{name:"literal",value:"'check'"},{name:"literal",value:"'check-small'"},{name:"literal",value:"'chevron-down'"},{name:"literal",value:"'chevron-left'"},{name:"literal",value:"'chevron-right'"},{name:"literal",value:"'chevron-up'"},{name:"literal",value:"'circle-check'"},{name:"literal",value:"'clock-exclamation'"},{name:"literal",value:"'cloud-off'"},{name:"literal",value:"'credit-card'"},{name:"literal",value:"'device-speaker'"},{name:"literal",value:"'device-tv-old'"},{name:"literal",value:"'dots-vertical'"},{name:"literal",value:"'download'"},{name:"literal",value:"'download-done'"},{name:"literal",value:"'download-completed'"},{name:"literal",value:"'download-starting-ring'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'external-link'"},{name:"literal",value:"'eye'"},{name:"literal",value:"'eye-off'"},{name:"literal",value:"'eye-search'"},{name:"literal",value:"'file-description'"},{name:"literal",value:"'file-info'"},{name:"literal",value:"'file-upload'"},{name:"literal",value:"'gavel'"},{name:"literal",value:"'grip-vertical'"},{name:"literal",value:"'headphones'"},{name:"literal",value:"'headphones-off'"},{name:"literal",value:"'heart-filled'"},{name:"literal",value:"'heart-outline'"},{name:"literal",value:"'help-octagon'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'home-1'"},{name:"literal",value:"'hourglass-empty'"},{name:"literal",value:"'icon-skip-15-back'"},{name:"literal",value:"'icon-skip-15-forward'"},{name:"literal",value:"'info-circle'"},{name:"literal",value:"'license'"},{name:"literal",value:"'loader'"},{name:"literal",value:"'lock'"},{name:"literal",value:"'mail'"},{name:"literal",value:"'menu-2'"},{name:"literal",value:"'message-circle'"},{name:"literal",value:"'messages'"},{name:"literal",value:"'microphone'"},{name:"literal",value:"'movie'"},{name:"literal",value:"'photo-plus'"},{name:"literal",value:"'pinned'"},{name:"literal",value:"'pinned-filled'"},{name:"literal",value:"'player-pause'"},{name:"literal",value:"'player-play-filled'"},{name:"literal",value:"'player-play-outline'"},{name:"literal",value:"'player-skip-back-filled'"},{name:"literal",value:"'player-skip-back-outline'"},{name:"literal",value:"'player-skip-forward-filled'"},{name:"literal",value:"'player-skip-forward-outline'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'plus-tv'"},{name:"literal",value:"'rating-18-plus'"},{name:"literal",value:"'re-download'"},{name:"literal",value:"'receipt-2'"},{name:"literal",value:"'reduce-viewport'"},{name:"literal",value:"'refresh'"},{name:"literal",value:"'rosette-discount-check'"},{name:"literal",value:"'ruler'"},{name:"literal",value:"'search'"},{name:"literal",value:"'server-2'"},{name:"literal",value:"'settings'"},{name:"literal",value:"'share-2'"},{name:"literal",value:"'shareplay'"},{name:"literal",value:"'sort-descending'"},{name:"literal",value:"'square'"},{name:"literal",value:"'square-plus'"},{name:"literal",value:"'star-filled'"},{name:"literal",value:"'star-half'"},{name:"literal",value:"'star-outline'"},{name:"literal",value:"'thumb-down'"},{name:"literal",value:"'thumb-up'"},{name:"literal",value:"'trailer-play'"},{name:"literal",value:"'trash'"},{name:"literal",value:"'user'"},{name:"literal",value:"'user-share'"},{name:"literal",value:"'users-group'"},{name:"literal",value:"'video'"},{name:"literal",value:"'video-off'"},{name:"literal",value:"'video-plus'"},{name:"literal",value:"'volume'"},{name:"literal",value:"'volume-2'"},{name:"literal",value:"'volume-3'"},{name:"literal",value:"'volume-off'"},{name:"literal",value:"'wifi-off'"},{name:"literal",value:"'world-off'"},{name:"literal",value:"'x'"},{name:"literal",value:"'zoom-reset'"}]},description:"",defaultValue:{value:"'arrow-bar-to-down'",computed:!1}},shareIcon:{required:!1,tsType:{name:"union",raw:"keyof typeof ICONS",elements:[{name:"literal",value:"'adjustments-horizontal'"},{name:"literal",value:"'albums'"},{name:"literal",value:"'alert-circle'"},{name:"literal",value:"'arrow-back-up'"},{name:"literal",value:"'arrow-bar-to-down'"},{name:"literal",value:"'arrow-down'"},{name:"literal",value:"'arrow-left'"},{name:"literal",value:"'arrow-narrow-left'"},{name:"literal",value:"'arrow-narrow-right'"},{name:"literal",value:"'arrow-right'"},{name:"literal",value:"'arrow-up'"},{name:"literal",value:"'arrows-diagonal'"},{name:"literal",value:"'audio'"},{name:"literal",value:"'badge-cc-filled'"},{name:"literal",value:"'badge-cc-outline'"},{name:"literal",value:"'bell'"},{name:"literal",value:"'bell-checked'"},{name:"literal",value:"'bell-minus'"},{name:"literal",value:"'bell-off'"},{name:"literal",value:"'bookmark-filled'"},{name:"literal",value:"'bookmark-outline'"},{name:"literal",value:"'box-multiple'"},{name:"literal",value:"'brand-safari'"},{name:"literal",value:"'brand-youtube'"},{name:"literal",value:"'calendar-dollar'"},{name:"literal",value:"'calendar-up'"},{name:"literal",value:"'cast'"},{name:"literal",value:"'check'"},{name:"literal",value:"'check-small'"},{name:"literal",value:"'chevron-down'"},{name:"literal",value:"'chevron-left'"},{name:"literal",value:"'chevron-right'"},{name:"literal",value:"'chevron-up'"},{name:"literal",value:"'circle-check'"},{name:"literal",value:"'clock-exclamation'"},{name:"literal",value:"'cloud-off'"},{name:"literal",value:"'credit-card'"},{name:"literal",value:"'device-speaker'"},{name:"literal",value:"'device-tv-old'"},{name:"literal",value:"'dots-vertical'"},{name:"literal",value:"'download'"},{name:"literal",value:"'download-done'"},{name:"literal",value:"'download-completed'"},{name:"literal",value:"'download-starting-ring'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'external-link'"},{name:"literal",value:"'eye'"},{name:"literal",value:"'eye-off'"},{name:"literal",value:"'eye-search'"},{name:"literal",value:"'file-description'"},{name:"literal",value:"'file-info'"},{name:"literal",value:"'file-upload'"},{name:"literal",value:"'gavel'"},{name:"literal",value:"'grip-vertical'"},{name:"literal",value:"'headphones'"},{name:"literal",value:"'headphones-off'"},{name:"literal",value:"'heart-filled'"},{name:"literal",value:"'heart-outline'"},{name:"literal",value:"'help-octagon'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'home-1'"},{name:"literal",value:"'hourglass-empty'"},{name:"literal",value:"'icon-skip-15-back'"},{name:"literal",value:"'icon-skip-15-forward'"},{name:"literal",value:"'info-circle'"},{name:"literal",value:"'license'"},{name:"literal",value:"'loader'"},{name:"literal",value:"'lock'"},{name:"literal",value:"'mail'"},{name:"literal",value:"'menu-2'"},{name:"literal",value:"'message-circle'"},{name:"literal",value:"'messages'"},{name:"literal",value:"'microphone'"},{name:"literal",value:"'movie'"},{name:"literal",value:"'photo-plus'"},{name:"literal",value:"'pinned'"},{name:"literal",value:"'pinned-filled'"},{name:"literal",value:"'player-pause'"},{name:"literal",value:"'player-play-filled'"},{name:"literal",value:"'player-play-outline'"},{name:"literal",value:"'player-skip-back-filled'"},{name:"literal",value:"'player-skip-back-outline'"},{name:"literal",value:"'player-skip-forward-filled'"},{name:"literal",value:"'player-skip-forward-outline'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'plus-tv'"},{name:"literal",value:"'rating-18-plus'"},{name:"literal",value:"'re-download'"},{name:"literal",value:"'receipt-2'"},{name:"literal",value:"'reduce-viewport'"},{name:"literal",value:"'refresh'"},{name:"literal",value:"'rosette-discount-check'"},{name:"literal",value:"'ruler'"},{name:"literal",value:"'search'"},{name:"literal",value:"'server-2'"},{name:"literal",value:"'settings'"},{name:"literal",value:"'share-2'"},{name:"literal",value:"'shareplay'"},{name:"literal",value:"'sort-descending'"},{name:"literal",value:"'square'"},{name:"literal",value:"'square-plus'"},{name:"literal",value:"'star-filled'"},{name:"literal",value:"'star-half'"},{name:"literal",value:"'star-outline'"},{name:"literal",value:"'thumb-down'"},{name:"literal",value:"'thumb-up'"},{name:"literal",value:"'trailer-play'"},{name:"literal",value:"'trash'"},{name:"literal",value:"'user'"},{name:"literal",value:"'user-share'"},{name:"literal",value:"'users-group'"},{name:"literal",value:"'video'"},{name:"literal",value:"'video-off'"},{name:"literal",value:"'video-plus'"},{name:"literal",value:"'volume'"},{name:"literal",value:"'volume-2'"},{name:"literal",value:"'volume-3'"},{name:"literal",value:"'volume-off'"},{name:"literal",value:"'wifi-off'"},{name:"literal",value:"'world-off'"},{name:"literal",value:"'x'"},{name:"literal",value:"'zoom-reset'"}]},description:"",defaultValue:{value:"'share-2'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Y=`/* ==============================================
 * PodcastSpotlightCard — Daily Wire Design System
 * Figma node 7553-28505
 * ============================================== */

.card {
  display: flex;
  flex-direction: column;
  width: 298px;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  font-family: var(--default), sans-serif;
  transition: background 300ms ease;
}

/* ── Artwork ─────────────────────────────────── */

.artworkContainer {
  padding: var(--spacing-xl);
}

.artwork {
  position: relative;
  width: 100%;
  aspect-ratio: 266 / 149;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
}

.artworkImg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-sm);
  pointer-events: none;
}

/* ── Content ─────────────────────────────────── */

.content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding-inline: var(--spacing-xl);
  padding-top: 0;
  padding-bottom: var(--spacing-xl);
  margin: 0;
}

.publishedDate {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-100);
  font-weight: var(--Regular);
  color: var(--color-text-neutral-bold-default);
  white-space: nowrap;
  margin: 0;
}

.episodeName {
  font-size: var(--font-size-md);
  line-height: var(--line-height-150);
  font-weight: var(--Regular);
  color: var(--color-text-neutral-bold-default);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-wrap: pretty;
  margin: 0;
}

.showName {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-100);
  font-weight: var(--Medium);
  color: var(--color-text-neutral-subtlest-default);
  white-space: nowrap;
  margin: 0;
}

/* ── Footer ──────────────────────────────────── */

.footer {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  padding-inline: var(--spacing-lg);
  padding-top: 0;
  padding-bottom: var(--spacing-lg);
}

.leftControls {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex: 1 0 0;
  min-width: 0;
}

.rightControls {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-shrink: 0;
}

.duration {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-100);
  font-weight: var(--Medium);
  color: var(--color-text-neutral-bold-default);
  white-space: nowrap;
}

/* ── Reduced motion ─────────────────────────── */

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
`,x=Object.keys(E).sort((e,a)=>e.localeCompare(a)),N="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=532&h=298&fit=crop&q=80",T="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=532&h=298&fit=crop&q=80",D="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=532&h=298&fit=crop&q=80",Z={component:h,title:"Components/PodcastSpotlightCard",parameters:{layout:"centered"},argTypes:{artworkSrc:{control:"text"},episodeName:{control:"text"},showName:{control:"text"},publishedDate:{control:"text"},episodeDuration:{control:"text"},playIcon:{control:"select",options:x},downloadIcon:{control:"select",options:x},shareIcon:{control:"select",options:x}},args:{artworkSrc:N,episodeName:"Here is why Kamala Harries has lied to the American people",showName:"The Ben Shapiro Show",publishedDate:"MAR 19, 2025",episodeDuration:"1H 45Min",playIcon:"player-play-filled",downloadIcon:"arrow-bar-to-down",shareIcon:"share-2"}},v={},d={name:"Blue Artwork",args:{artworkSrc:T,episodeName:"The future of conservative media in 2025",showName:"The Daily Wire Backstage",publishedDate:"JAN 05, 2025",episodeDuration:"2H 10Min"}},c={name:"Red Artwork",args:{artworkSrc:D,episodeName:"Breaking down the latest Supreme Court ruling",showName:"The Michael Knowles Show",publishedDate:"FEB 14, 2025",episodeDuration:"58Min"}},p={name:"Three-up",parameters:{layout:"padded"},render:e=>l.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap",justifyContent:"center"},children:[l.jsx(h,{...e,artworkSrc:N}),l.jsx(h,{...e,artworkSrc:T,showName:"The Daily Wire Backstage",episodeName:"The future of conservative media in 2025"}),l.jsx(h,{...e,artworkSrc:D,showName:"The Michael Knowles Show",episodeName:"Breaking down the latest Supreme Court ruling"})]})},o={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>l.jsx(M,{css:Y})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"{}",...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Blue Artwork',
  args: {
    artworkSrc: BLUE_ART,
    episodeName: 'The future of conservative media in 2025',
    showName: 'The Daily Wire Backstage',
    publishedDate: 'JAN 05, 2025',
    episodeDuration: '2H 10Min'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Red Artwork',
  args: {
    artworkSrc: RED_ART,
    episodeName: 'Breaking down the latest Supreme Court ruling',
    showName: 'The Michael Knowles Show',
    publishedDate: 'FEB 14, 2025',
    episodeDuration: '58Min'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Three-up',
  parameters: {
    layout: 'padded'
  },
  render: args => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
      <PodcastSpotlightCard {...args} artworkSrc={PLACEHOLDER_ART} />
      <PodcastSpotlightCard {...args} artworkSrc={BLUE_ART} showName="The Daily Wire Backstage" episodeName="The future of conservative media in 2025" />
      <PodcastSpotlightCard {...args} artworkSrc={RED_ART} showName="The Michael Knowles Show" episodeName="Breaking down the latest Supreme Court ruling" />
    </div>
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={cardCss} />
}`,...o.parameters?.docs?.source},description:{story:"Properties and tokens read from PodcastSpotlightCard.module.css, resolved for the active theme.",...o.parameters?.docs?.description}}};const ee=["Default","BlueArtwork","RedArtwork","ThreeUp","Tokens"],ie=Object.freeze(Object.defineProperty({__proto__:null,BlueArtwork:d,Default:v,RedArtwork:c,ThreeUp:p,Tokens:o,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{d as B,ie as C,v as D,c as R,p as T,o as a};
