import{r as o,j as e}from"./iframe-BaE-r_tL.js";import{a as F,b as D}from"./Icon-D8yVe6yW.js";import{S as B}from"./ShowcaseBox-CvpXiMzv.js";import{C as L}from"./CssTokens-DoMUOAyj.js";import{I as s,C as P}from"./ComponentInspector-aQuGSI0z.js";const A=`/* ==============================================
 * OttButton — Daily Wire Design System · TV / OTT (10-foot UI)
 * Figma: Ott_Button (12235:151805), Type Primary / Secondary × State Default / Hover /
 * Inactive / Focus. Legacy component: Figma binds [Old] 2.0 variables (Background/*,
 * Text/*, Stroke/*, Icon/* at 30% opacity) and raw padding, radius and type values;
 * each one is mapped to the closest token in tokens.css.
 * ============================================== */

.ottButton {
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  /* Figma: 72px tall (Primary fixed, Secondary hug) */
  min-height: var(--primitive-dimension-dimension-18);
  /* Figma strokes sit inside the box: take the 1px border out of the padding */
  padding: calc(var(--primitive-dimension-dimension-5-5) - var(--border-default))
    calc(var(--ott-pad-x) - var(--border-default));
  border: var(--border-default) solid var(--ott-border, transparent);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  /* Figma: Libre Franklin SemiBold 20 / 130% / 4%, caps → label/600/xl metrics */
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-lg);
  font-weight: var(--Semibold);
  line-height: var(--line-height-120);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  white-space: nowrap;
  user-select: none;
  transition:
    background-color var(--duration-fast) var(--easing-ease-out),
    color var(--duration-fast) var(--easing-ease-out),
    border-color var(--duration-fast) var(--easing-ease-out);

  background-color: var(--ott-bg, transparent);
  color: var(--ott-text);
}

/* ── Type: Primary (no fill) ─────────────────── */

.ottButton[data-variant='primary'] {
  --ott-pad-x: var(--spacing-3xl);
  --ott-icon-size: var(--size-xl);
  --ott-bg: transparent;
  /* Text/Default/Base (#fff) → neutral bold */
  --ott-text: var(--color-text-neutral-bold-default);
  /* Icon/Strong (#fff) at 30% opacity → neutral subtlest icon */
  --ott-icon: var(--color-icon-neutral-subtlest-default);
  --ott-border: transparent;
}

/* Inactive (Figma State = Inactive) and disabled share the dimmed look */
.ottButton[data-variant='primary'][data-inactive],
.ottButton[data-variant='primary']:disabled {
  /* Text/Default/Subtle (#525252) → neutral bold disabled */
  --ott-text: var(--color-text-neutral-bold-disabled);
  /* raw #525252 at 30% opacity → neutral subtlest icon disabled */
  --ott-icon: var(--color-icon-neutral-subtlest-disabled);
}

/* [data-state] forces hover / focus for docs and QA (States story) */

.ottButton[data-variant='primary']:hover:not(:disabled):not([data-inactive]),
.ottButton[data-variant='primary'][data-state='hover'] {
  /* Background/Inverse Base (#fff) → inverse bold */
  --ott-bg: var(--color-background-inverse-bold-default);
  /* Text/Inverse/Base (#0a0909) → inverse bold */
  --ott-text: var(--color-text-inverse-bold-default);
  /* Icon/Soft (#151515) at 30% opacity → inverse subtlest icon */
  --ott-icon: var(--color-icon-inverse-subtlest-default);
}

.ottButton[data-variant='primary']:focus-visible,
.ottButton[data-variant='primary'][data-state='focus'] {
  --ott-text: var(--color-text-neutral-bold-default);
  --ott-icon: var(--color-icon-neutral-subtlest-default);
  /* Stroke/Default/Strong (#8f8f8f) → neutral subtlest border */
  --ott-border: var(--color-border-neutral-subtlest-default);
}

/* ── Type: Secondary (filled) ────────────────── */

.ottButton[data-variant='secondary'] {
  --ott-pad-x: var(--primitive-dimension-dimension-5-5);
  --ott-icon-size: var(--primitive-dimension-dimension-7);
  /* Background/Light Container (#1f1f1f) → neutral subtlest */
  --ott-bg: var(--color-background-neutral-subtlest-default);
  --ott-text: var(--color-text-neutral-bold-default);
  --ott-icon: var(--color-icon-neutral-subtlest-default);
  --ott-border: transparent;
}

.ottButton[data-variant='secondary'][data-inactive],
.ottButton[data-variant='secondary']:disabled {
  /* Background/Container (#151515) → neutral subtle */
  --ott-bg: var(--color-background-neutral-subtle-default);
  /* Text/Default/Strong (#8f8f8f) → neutral subtlest */
  --ott-text: var(--color-text-neutral-subtlest-default);
  /* Icon/Solid (#8f8f8f) at 30% opacity → neutral subtlest icon disabled */
  --ott-icon: var(--color-icon-neutral-subtlest-disabled);
}

.ottButton[data-variant='secondary']:hover:not(:disabled):not([data-inactive]),
.ottButton[data-variant='secondary'][data-state='hover'] {
  --ott-bg: var(--color-background-inverse-bold-default);
  --ott-text: var(--color-text-inverse-bold-default);
  --ott-icon: var(--color-icon-inverse-subtlest-default);
}

.ottButton[data-variant='secondary']:focus-visible,
.ottButton[data-variant='secondary'][data-state='focus'] {
  --ott-bg: var(--color-background-neutral-subtlest-default);
  --ott-text: var(--color-text-neutral-bold-default);
  --ott-icon: var(--color-icon-neutral-subtlest-default);
  /* Stroke/Default/Subtle (#525252) → neutral subtle border */
  --ott-border: var(--color-border-neutral-subtle-default);
}

/* ── Focus ring: Figma focus border + the DS ring ── */

.ottButton:focus-visible,
.ottButton[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

.ottButton:disabled {
  cursor: not-allowed;
}

/* ── Content ── */

.content {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.icon {
  flex-shrink: 0;
  width: var(--ott-icon-size);
  height: var(--ott-icon-size);
}

.host {
  flex-shrink: 0;
  width: var(--size-4xl);
  height: var(--size-4xl);
  border-radius: var(--border-radius-full);
  object-fit: cover;
}

.label {
  text-transform: uppercase;
}

/* Figma progress bar: 5px track (raw #a0a0a0 at 52%) with a Stroke/Default/Accent fill */
.progress {
  position: absolute;
  left: var(--ott-pad-x);
  right: var(--ott-pad-x);
  bottom: var(--spacing-md);
  height: var(--border-strong);
  overflow: hidden;
  border-radius: var(--border-radius-full);
  background-color: var(--color-border-neutral-subtlest-default);
}

.progressValue {
  display: block;
  height: 100%;
  border-radius: var(--border-radius-full);
  background-color: var(--color-border-brand-bold-default);
}

@media (prefers-reduced-motion: reduce) {
  .ottButton {
    transition: none;
  }
}
`,H="_ottButton_1tigb_9",M="_content_1tigb_133",U="_icon_1tigb_139",G="_host_1tigb_145",W="_label_1tigb_153",$="_progress_1tigb_158",Q="_progressValue_1tigb_169",r={ottButton:H,content:M,icon:U,host:G,label:W,progress:$,progressValue:Q},j=["primary","secondary"],l=o.forwardRef(function({variant:t="primary",label:n="Text",showLabel:w=!0,icon:f="box-multiple",showIcon:k=!0,trailingIcon:i="lock",showTrailingIcon:T=!1,hostImageSrc:b,hostImageAlt:S="",progress:h,isInactive:I=!1,disabled:O=!1,className:R,..._},q){const C=w&&!!n;typeof globalThis<"u"&&!C&&!_["aria-label"]&&console.warn("[OttButton] Buttons without visible text require an aria-label for accessibility.");const E=h===void 0?void 0:Math.min(1,Math.max(0,h));return e.jsxs("button",{ref:q,type:"button",className:[r.ottButton,R].filter(Boolean).join(" "),"data-variant":t,"data-inactive":I||void 0,disabled:O,"aria-disabled":O||void 0,..._,children:[e.jsxs("span",{className:r.content,children:[k&&f&&e.jsx(F,{name:f,size:"xl",className:r.icon,color:"var(--ott-icon)"}),b&&e.jsx("img",{className:r.host,src:b,alt:S}),C&&e.jsx("span",{className:r.label,children:n}),T&&i&&e.jsx(F,{name:i,size:"xl",className:r.icon,color:"var(--ott-icon)"})]}),E!==void 0&&e.jsx("span",{className:r.progress,"aria-hidden":"true",children:e.jsx("span",{className:r.progressValue,style:{width:`${E*100}%`}})})]})});l.__docgenInfo={description:"Legacy TV / OTT (10-foot UI) button.",methods:[],displayName:"OttButton",props:{variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof OTT_BUTTON_VARIANTS)[number]"},description:"Figma `Type`",defaultValue:{value:"'primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Figma `Text`; shown in caps",defaultValue:{value:"'Text'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Figma `Show Text`",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"keyof typeof ICONS",elements:[{name:"literal",value:"'adjustments-horizontal'"},{name:"literal",value:"'albums'"},{name:"literal",value:"'alert-circle'"},{name:"literal",value:"'arrow-back-up'"},{name:"literal",value:"'arrow-bar-to-down'"},{name:"literal",value:"'arrow-down'"},{name:"literal",value:"'arrow-left'"},{name:"literal",value:"'arrow-narrow-left'"},{name:"literal",value:"'arrow-narrow-right'"},{name:"literal",value:"'arrow-right'"},{name:"literal",value:"'arrow-up'"},{name:"literal",value:"'arrows-diagonal'"},{name:"literal",value:"'audio'"},{name:"literal",value:"'badge-cc-filled'"},{name:"literal",value:"'badge-cc-outline'"},{name:"literal",value:"'bell'"},{name:"literal",value:"'bell-checked'"},{name:"literal",value:"'bell-minus'"},{name:"literal",value:"'bell-off'"},{name:"literal",value:"'bookmark-filled'"},{name:"literal",value:"'bookmark-outline'"},{name:"literal",value:"'box-multiple'"},{name:"literal",value:"'brand-safari'"},{name:"literal",value:"'brand-youtube'"},{name:"literal",value:"'calendar-dollar'"},{name:"literal",value:"'calendar-up'"},{name:"literal",value:"'cast'"},{name:"literal",value:"'check'"},{name:"literal",value:"'check-small'"},{name:"literal",value:"'chevron-down'"},{name:"literal",value:"'chevron-left'"},{name:"literal",value:"'chevron-right'"},{name:"literal",value:"'chevron-up'"},{name:"literal",value:"'circle-check'"},{name:"literal",value:"'clock-exclamation'"},{name:"literal",value:"'cloud-off'"},{name:"literal",value:"'credit-card'"},{name:"literal",value:"'device-speaker'"},{name:"literal",value:"'device-tv-old'"},{name:"literal",value:"'dots-vertical'"},{name:"literal",value:"'download'"},{name:"literal",value:"'download-done'"},{name:"literal",value:"'download-completed'"},{name:"literal",value:"'download-starting-ring'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'external-link'"},{name:"literal",value:"'eye'"},{name:"literal",value:"'eye-off'"},{name:"literal",value:"'eye-search'"},{name:"literal",value:"'file-description'"},{name:"literal",value:"'file-info'"},{name:"literal",value:"'file-upload'"},{name:"literal",value:"'gavel'"},{name:"literal",value:"'grip-vertical'"},{name:"literal",value:"'headphones'"},{name:"literal",value:"'headphones-off'"},{name:"literal",value:"'heart-filled'"},{name:"literal",value:"'heart-outline'"},{name:"literal",value:"'help-octagon'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'home-1'"},{name:"literal",value:"'hourglass-empty'"},{name:"literal",value:"'icon-skip-15-back'"},{name:"literal",value:"'icon-skip-15-forward'"},{name:"literal",value:"'info-circle'"},{name:"literal",value:"'license'"},{name:"literal",value:"'loader'"},{name:"literal",value:"'lock'"},{name:"literal",value:"'mail'"},{name:"literal",value:"'menu-2'"},{name:"literal",value:"'message-circle'"},{name:"literal",value:"'messages'"},{name:"literal",value:"'microphone'"},{name:"literal",value:"'movie'"},{name:"literal",value:"'photo-plus'"},{name:"literal",value:"'pinned'"},{name:"literal",value:"'pinned-filled'"},{name:"literal",value:"'player-pause'"},{name:"literal",value:"'player-play-filled'"},{name:"literal",value:"'player-play-outline'"},{name:"literal",value:"'player-skip-back-filled'"},{name:"literal",value:"'player-skip-back-outline'"},{name:"literal",value:"'player-skip-forward-filled'"},{name:"literal",value:"'player-skip-forward-outline'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'plus-tv'"},{name:"literal",value:"'rating-18-plus'"},{name:"literal",value:"'re-download'"},{name:"literal",value:"'receipt-2'"},{name:"literal",value:"'reduce-viewport'"},{name:"literal",value:"'refresh'"},{name:"literal",value:"'rosette-discount-check'"},{name:"literal",value:"'ruler'"},{name:"literal",value:"'search'"},{name:"literal",value:"'server-2'"},{name:"literal",value:"'settings'"},{name:"literal",value:"'share-2'"},{name:"literal",value:"'shareplay'"},{name:"literal",value:"'sort-descending'"},{name:"literal",value:"'square'"},{name:"literal",value:"'square-plus'"},{name:"literal",value:"'star-filled'"},{name:"literal",value:"'star-half'"},{name:"literal",value:"'star-outline'"},{name:"literal",value:"'thumb-down'"},{name:"literal",value:"'thumb-up'"},{name:"literal",value:"'trailer-play'"},{name:"literal",value:"'trash'"},{name:"literal",value:"'user'"},{name:"literal",value:"'user-share'"},{name:"literal",value:"'users-group'"},{name:"literal",value:"'video'"},{name:"literal",value:"'video-off'"},{name:"literal",value:"'video-plus'"},{name:"literal",value:"'volume'"},{name:"literal",value:"'volume-2'"},{name:"literal",value:"'volume-3'"},{name:"literal",value:"'volume-off'"},{name:"literal",value:"'wifi-off'"},{name:"literal",value:"'world-off'"},{name:"literal",value:"'x'"},{name:"literal",value:"'zoom-reset'"}]},description:"Figma `Default Icon`",defaultValue:{value:"'box-multiple'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Figma `Show Icon`",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"union",raw:"keyof typeof ICONS",elements:[{name:"literal",value:"'adjustments-horizontal'"},{name:"literal",value:"'albums'"},{name:"literal",value:"'alert-circle'"},{name:"literal",value:"'arrow-back-up'"},{name:"literal",value:"'arrow-bar-to-down'"},{name:"literal",value:"'arrow-down'"},{name:"literal",value:"'arrow-left'"},{name:"literal",value:"'arrow-narrow-left'"},{name:"literal",value:"'arrow-narrow-right'"},{name:"literal",value:"'arrow-right'"},{name:"literal",value:"'arrow-up'"},{name:"literal",value:"'arrows-diagonal'"},{name:"literal",value:"'audio'"},{name:"literal",value:"'badge-cc-filled'"},{name:"literal",value:"'badge-cc-outline'"},{name:"literal",value:"'bell'"},{name:"literal",value:"'bell-checked'"},{name:"literal",value:"'bell-minus'"},{name:"literal",value:"'bell-off'"},{name:"literal",value:"'bookmark-filled'"},{name:"literal",value:"'bookmark-outline'"},{name:"literal",value:"'box-multiple'"},{name:"literal",value:"'brand-safari'"},{name:"literal",value:"'brand-youtube'"},{name:"literal",value:"'calendar-dollar'"},{name:"literal",value:"'calendar-up'"},{name:"literal",value:"'cast'"},{name:"literal",value:"'check'"},{name:"literal",value:"'check-small'"},{name:"literal",value:"'chevron-down'"},{name:"literal",value:"'chevron-left'"},{name:"literal",value:"'chevron-right'"},{name:"literal",value:"'chevron-up'"},{name:"literal",value:"'circle-check'"},{name:"literal",value:"'clock-exclamation'"},{name:"literal",value:"'cloud-off'"},{name:"literal",value:"'credit-card'"},{name:"literal",value:"'device-speaker'"},{name:"literal",value:"'device-tv-old'"},{name:"literal",value:"'dots-vertical'"},{name:"literal",value:"'download'"},{name:"literal",value:"'download-done'"},{name:"literal",value:"'download-completed'"},{name:"literal",value:"'download-starting-ring'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'external-link'"},{name:"literal",value:"'eye'"},{name:"literal",value:"'eye-off'"},{name:"literal",value:"'eye-search'"},{name:"literal",value:"'file-description'"},{name:"literal",value:"'file-info'"},{name:"literal",value:"'file-upload'"},{name:"literal",value:"'gavel'"},{name:"literal",value:"'grip-vertical'"},{name:"literal",value:"'headphones'"},{name:"literal",value:"'headphones-off'"},{name:"literal",value:"'heart-filled'"},{name:"literal",value:"'heart-outline'"},{name:"literal",value:"'help-octagon'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'home-1'"},{name:"literal",value:"'hourglass-empty'"},{name:"literal",value:"'icon-skip-15-back'"},{name:"literal",value:"'icon-skip-15-forward'"},{name:"literal",value:"'info-circle'"},{name:"literal",value:"'license'"},{name:"literal",value:"'loader'"},{name:"literal",value:"'lock'"},{name:"literal",value:"'mail'"},{name:"literal",value:"'menu-2'"},{name:"literal",value:"'message-circle'"},{name:"literal",value:"'messages'"},{name:"literal",value:"'microphone'"},{name:"literal",value:"'movie'"},{name:"literal",value:"'photo-plus'"},{name:"literal",value:"'pinned'"},{name:"literal",value:"'pinned-filled'"},{name:"literal",value:"'player-pause'"},{name:"literal",value:"'player-play-filled'"},{name:"literal",value:"'player-play-outline'"},{name:"literal",value:"'player-skip-back-filled'"},{name:"literal",value:"'player-skip-back-outline'"},{name:"literal",value:"'player-skip-forward-filled'"},{name:"literal",value:"'player-skip-forward-outline'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'plus-tv'"},{name:"literal",value:"'rating-18-plus'"},{name:"literal",value:"'re-download'"},{name:"literal",value:"'receipt-2'"},{name:"literal",value:"'reduce-viewport'"},{name:"literal",value:"'refresh'"},{name:"literal",value:"'rosette-discount-check'"},{name:"literal",value:"'ruler'"},{name:"literal",value:"'search'"},{name:"literal",value:"'server-2'"},{name:"literal",value:"'settings'"},{name:"literal",value:"'share-2'"},{name:"literal",value:"'shareplay'"},{name:"literal",value:"'sort-descending'"},{name:"literal",value:"'square'"},{name:"literal",value:"'square-plus'"},{name:"literal",value:"'star-filled'"},{name:"literal",value:"'star-half'"},{name:"literal",value:"'star-outline'"},{name:"literal",value:"'thumb-down'"},{name:"literal",value:"'thumb-up'"},{name:"literal",value:"'trailer-play'"},{name:"literal",value:"'trash'"},{name:"literal",value:"'user'"},{name:"literal",value:"'user-share'"},{name:"literal",value:"'users-group'"},{name:"literal",value:"'video'"},{name:"literal",value:"'video-off'"},{name:"literal",value:"'video-plus'"},{name:"literal",value:"'volume'"},{name:"literal",value:"'volume-2'"},{name:"literal",value:"'volume-3'"},{name:"literal",value:"'volume-off'"},{name:"literal",value:"'wifi-off'"},{name:"literal",value:"'world-off'"},{name:"literal",value:"'x'"},{name:"literal",value:"'zoom-reset'"}]},description:"Figma `Right Icon`",defaultValue:{value:"'lock'",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Figma `Show Right Icon`",defaultValue:{value:"false",computed:!1}},hostImageSrc:{required:!1,tsType:{name:"string"},description:"Figma `Show Host`: round host picture after the icon"},hostImageAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},progress:{required:!1,tsType:{name:"number"},description:"Figma `Show Progress Bar`: watch progress from 0 to 1; the bar shows when set"},isInactive:{required:!1,tsType:{name:"boolean"},description:"Figma `State = Inactive`: dimmed look while the TV focus is in another part of the\nscreen. The button stays focusable; use `disabled` when it cannot be used.",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const z=Object.keys(D).sort((a,t)=>a.localeCompare(t)),J="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=112&h=112&fit=crop&q=80",K={component:l,title:"Components/OttButton",parameters:{layout:"centered"},argTypes:{variant:{control:"inline-radio",options:[...j]},label:{control:"text"},showLabel:{control:"boolean"},icon:{control:"select",options:z},showIcon:{control:"boolean"},trailingIcon:{control:"select",options:z},showTrailingIcon:{control:"boolean"},hostImageSrc:{control:"text"},progress:{control:{type:"range",min:0,max:1,step:.05}},isInactive:{control:"boolean"},disabled:{control:"boolean"}},args:{variant:"primary",label:"Episodes",showLabel:!0,icon:"box-multiple",showIcon:!0,trailingIcon:"lock",showTrailingIcon:!1,isInactive:!1,disabled:!1}},g={},u={render:()=>e.jsxs(B,{children:[e.jsx(l,{variant:"primary",label:"Episodes"}),e.jsx(l,{variant:"secondary",label:"Episodes"})]})},c={render:()=>e.jsxs(B,{direction:"column",style:{alignItems:"flex-start"},children:[e.jsx(l,{variant:"secondary",label:"Episodes"}),e.jsx(l,{variant:"secondary",label:"Episodes",showIcon:!1}),e.jsx(l,{variant:"secondary",showLabel:!1,"aria-label":"Episodes and more"}),e.jsx(l,{variant:"secondary",label:"Members only",showTrailingIcon:!0}),e.jsx(l,{variant:"secondary",label:"Host",showIcon:!1,hostImageSrc:J}),e.jsx(l,{variant:"secondary",label:"Resume",icon:"player-play-outline",progress:.53})]})},d={render:()=>e.jsxs(B,{children:[e.jsx(l,{variant:"secondary",label:"Play",icon:"player-play-filled","data-state":"hover"}),e.jsx(l,{variant:"secondary",label:"Episodes"}),e.jsx(l,{variant:"secondary",label:"Watchlist",icon:"plus"})]})},x=["default","hover","focus","inactive","disabled"],V=["hover","focus"];function X({children:a}){return e.jsx(e.Fragment,{children:a})}function Y({children:a}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a})}const m={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${x.length}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),x.map(a=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:a},a)),j.map(a=>e.jsxs(X,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:a}),x.map(t=>e.jsx(Y,{children:e.jsx(l,{variant:a,label:"Text",isInactive:t==="inactive",disabled:t==="disabled",...V.includes(t)?{"data-state":t}:{}})},t))]},a))]})},N={"--ott-bg":"background","--ott-text":"color","--ott-border":"border-color","--ott-icon":"icon color","--ott-pad-x":"padding","--ott-icon-size":"icon size"},v={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(L,{css:A,aliases:N})},y=["on","off"];function Z(){const[a,t]=o.useState("primary"),[n,w]=o.useState("default"),[f,k]=o.useState("on"),[i,T]=o.useState("on"),[b,S]=o.useState("off"),[h,I]=o.useState("off");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(s,{label:"Type",options:j,value:a,onChange:t}),e.jsx(s,{label:"State",options:x,value:n,onChange:w}),e.jsx(s,{label:"Icon",options:y,value:f,onChange:k}),e.jsx(s,{label:"Text",options:y,value:i,onChange:T}),e.jsx(s,{label:"Right icon",options:y,value:b,onChange:S}),e.jsx(s,{label:"Progress",options:y,value:h,onChange:I}),e.jsx(P,{css:A,aliases:N,group:a,state:n,children:e.jsx(l,{variant:a,label:"Text",showIcon:f==="on",showLabel:i==="on",showTrailingIcon:b==="on",progress:h==="on"?.53:void 0,"aria-label":i==="off"?"Episodes and more":void 0,isInactive:n==="inactive",disabled:n==="disabled",...V.includes(n)?{"data-state":n}:{}})})]})}const p={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(Z,{})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <OttButton variant="primary" label="Episodes" />
      <OttButton variant="secondary" label="Episodes" />
    </ShowcaseBox>
}`,...u.parameters?.docs?.source},description:{story:"Figma `Type`: Primary (no fill) and Secondary (filled).",...u.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    alignItems: 'flex-start'
  }}>
      <OttButton variant="secondary" label="Episodes" />
      <OttButton variant="secondary" label="Episodes" showIcon={false} />
      <OttButton variant="secondary" showLabel={false} aria-label="Episodes and more" />
      <OttButton variant="secondary" label="Members only" showTrailingIcon />
      <OttButton variant="secondary" label="Host" showIcon={false} hostImageSrc={HOST_IMAGE} />
      <OttButton variant="secondary" label="Resume" icon="player-play-outline" progress={0.53} />
    </ShowcaseBox>
}`,...c.parameters?.docs?.source},description:{story:"Figma boolean props: Show Text, Show Icon, Show Right Icon, Show Host, Show Progress Bar.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <OttButton variant="secondary" label="Play" icon="player-play-filled" data-state="hover" />
      <OttButton variant="secondary" label="Episodes" />
      <OttButton variant="secondary" label="Watchlist" icon="plus" />
    </ShowcaseBox>
}`,...d.parameters?.docs?.source},description:{story:"A row of TV actions, as on a show page.",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: \`auto repeat(\${STATES.length}, 1fr)\`,
    gap: '20px 12px',
    padding: 24,
    alignItems: 'center',
    fontSize: 12,
    color: 'var(--color-text-neutral-subtlest-default)'
  }}>
      <div />
      {STATES.map(s => <div key={s} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {OTT_BUTTON_VARIANTS.map(variant => <Row key={variant}>
          <div style={{
        textTransform: 'capitalize'
      }}>{variant}</div>
          {STATES.map(s => <Cell key={s}>
              <OttButton variant={variant} label="Text" isInactive={s === 'inactive'} disabled={s === 'disabled'} {...FORCED.includes(s) ? {
          'data-state': s
        } : {}} />
            </Cell>)}
        </Row>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Every type in every Figma state (Default / Hover / Focus / Inactive) plus disabled, which shares\nthe Inactive look. Hover and focus are forced with `data-state`.",...m.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={ottButtonCss} aliases={OTT_ALIASES} />
}`,...v.parameters?.docs?.source},description:{story:"Properties and tokens read from OttButton.module.css, resolved for the active theme.",...v.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <OttButtonInspect />
}`,...p.parameters?.docs?.source},description:{story:"Pick type, state and content; see real measurements and the tokens that apply. Hover a token to locate it.",...p.parameters?.docs?.description}}};const ee=["Default","Types","Content","ActionRow","States","Tokens","Inspect"],oe=Object.freeze(Object.defineProperty({__proto__:null,ActionRow:d,Content:c,Default:g,Inspect:p,States:m,Tokens:v,Types:u,__namedExportsOrder:ee,default:K},Symbol.toStringTag,{value:"Module"}));export{d as A,c as C,g as D,p as I,oe as O,m as S,u as T,v as a};
