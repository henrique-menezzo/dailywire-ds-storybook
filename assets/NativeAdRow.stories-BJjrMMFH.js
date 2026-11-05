import{r as p,j as e}from"./iframe-BaE-r_tL.js";import{C as q}from"./CssTokens-DoMUOAyj.js";import{I as M,C as le}from"./ComponentInspector-aQuGSI0z.js";import{A as L,b as _}from"./index-DKiqy9gl.js";import{b as de}from"./Avatar-DfOPemCI.js";import{d as ce}from"./Badge-DXeWmLrm.js";import{I as V}from"./IconButton-C0K0oZpp.js";const N=`/* ==============================================
 * NativeAdRow — Daily Wire Design System
 * Figma: Native Ad Ep Row (12761:20029), page "↳ Content", section "Article" (8413:56868).
 * Media Image | Video × Breakpoint Mobile | Desktop × State default | hovered | pressed | focused | disabled.
 * The Breakpoint axis is responsive CSS: container queries on the row's own width.
 * tokens.css has no breakpoint tokens: Mobile is drawn 369px wide, Desktop 912px; the switch is at 768px
 * (the tablet limit used by Header).
 * Nested: Avatar (DW+, 3xsm), Badge (translucid · sm · radius sm), Icon Button (translucid · sm | md).
 * All other values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: the container ─────────────────────── */

.row {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  container-name: dw-native-ad-row;
  container-type: inline-size;
  font-family: var(--default), sans-serif;
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
}

/* ── States (both breakpoints) ───────────────── */

/* hovered: title hovered; the image dims (Figma #0a0909 @ 40%) and shows "Visit site" */
.row:hover:not([data-disabled]),
.row[data-state='hover'] {
  --nar-title: var(--color-text-neutral-bold-hovered);
}

.row[data-variant='image']:hover:not([data-disabled]),
.row[data-variant='image'][data-state='hover'] {
  --nar-overlay: var(--color-overlay-neutral-subtle-default);
  --nar-hover-label: 1;
}

/* pressed: title pressed; the creative dims more (Figma #0a0909 @ 60%) */
.row:has(.link:active):not([data-disabled]),
.row[data-state='pressed'] {
  --nar-title: var(--color-text-neutral-bold-pressed);
  --nar-overlay: var(--color-overlay-neutral-bold-default);
  --nar-hover-label: 0;
}

/* focused: ring around the row, page surface, no divider, radius sm (Figma two drop shadows) */
.row:has(.link:focus-visible),
.row[data-state='focus'] {
  --nar-surface: var(--color-background-neutral-bold-default);
  --nar-divider: transparent;
  border-radius: var(--border-radius-sm);
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* disabled: the row at 40% opacity, title disabled */
.row[data-disabled] {
  --nar-title: var(--color-text-neutral-bold-disabled);
  opacity: var(--opacity-disabled);
}

/* ── Layout: Mobile (Figma 369 wide) ─────────────
 * [media 160 | title] / description / byline; gaps 12 (row) and 16 (stack); 16 bottom padding,
 * page surface and a 1px bottom divider drawn inside. */

.layout {
  position: relative;
  /* The stretched link (z 1) and the mute toggle (z 2) stack inside the row only */
  isolation: isolate;
  display: grid;
  grid-template-columns: calc(var(--size-2xl) * 4) minmax(0, 1fr);
  grid-template-areas:
    'media title'
    'description description'
    'byline byline';
  align-items: start;
  column-gap: var(--spacing-lg);
  row-gap: var(--spacing-xl);
  box-sizing: border-box;
  padding-bottom: var(--spacing-xl);
  border-radius: inherit;
  background-color: var(--nar-surface, var(--color-background-neutral-bold-default));
  box-shadow: inset 0 calc(-1 * var(--border-default)) 0 var(--nar-divider, var(--color-border-neutral-bold-default));
}

/* ── Media (Figma "Thumbnail" 16:9, radius md on Mobile) ── */

.media {
  position: relative;
  grid-area: media;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  aspect-ratio: 16 / 9;
}

.asset {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Figma "State overlay" + "Visit site" */
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nar-overlay, transparent);
  transition: background-color var(--duration-slow) var(--easing-ease-out);
}

/* Figma: 15px SemiBold #fafafa, no text style → label/600/md */
.hoverLabel {
  font-size: var(--font-size-sm);
  font-weight: var(--Semibold);
  line-height: var(--line-height-100);
  color: var(--color-text-always-light);
  opacity: var(--nar-hover-label, 0);
  transition: opacity var(--duration-slow) var(--easing-ease-out);
}

/* Figma Badge "10:00": 8px from the bottom-right corner (.media scope outranks the Badge base rule) */
.media .duration {
  position: absolute;
  right: var(--spacing-md);
  bottom: var(--spacing-md);
}

/* Figma Icon Button: sm 8px from the top-right corner on Mobile, md 12px on Desktop; above the row link */
.media .muteSm,
.media .muteMd {
  position: absolute;
  z-index: 2;
}

.media .muteSm {
  top: var(--spacing-md);
  right: var(--spacing-md);
}

.media .muteMd {
  display: none;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
}

/* ── Title (Mobile: body/400/sm, 3 lines) ────── */

.title {
  grid-area: title;
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  color: var(--nar-title, var(--color-text-neutral-bold-default));
  overflow-wrap: anywhere;
  transition: color var(--duration-slow) var(--easing-ease-out);
}

.link {
  color: inherit;
  text-decoration: none;
  /* The focus ring is drawn on the whole row (.row:has(.link:focus-visible)) */
  outline: none;
}

/* Stretched link: the whole row is the hit area */
.link::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

.link[aria-disabled='true'] {
  cursor: default;
}

/* ── Description (Mobile: body/400/sm, subtlest, 3 lines) ── */

.description {
  grid-area: description;
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  color: var(--color-text-neutral-subtlest-default);
}

/* ── Byline (Avatar 24 + sponsored label, gap 6) ── */

.byline {
  grid-area: byline;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 0;
}

/* Mobile: body/400/xsm, 1 line; "Sponsored by" bold + sponsor subtlest */
.sponsored {
  display: -webkit-box;
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  font-size: var(--font-size-xs);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  color: var(--color-text-neutral-bold-default);
}

.sponsor {
  color: var(--color-text-neutral-subtlest-default);
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* ── Desktop (Figma 912 wide): media 1fr | content 2fr, no surface, no divider ── */

@container dw-native-ad-row (width >= 768px) {
  .layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    grid-template-rows: auto auto auto 1fr;
    grid-template-areas:
      'media title'
      'media description'
      'media byline'
      'media .';
    /* Figma: no column gap (media = exactly 1/3); the content column has a 16px left padding */
    column-gap: var(--spacing-none);
    row-gap: var(--spacing-lg);
    padding-bottom: var(--spacing-none);
    background-color: var(--nar-surface, transparent);
    box-shadow: none;
  }

  /* Figma radius 15 (raw) */
  .media {
    border-radius: var(--border-radius-xl);
  }

  .title,
  .description,
  .byline {
    padding-left: var(--spacing-xl);
  }

  .media .muteSm {
    display: none;
  }

  .media .muteMd {
    display: inline-flex;
  }

  /* Figma: 20px Regular, no text style → title/400/lg, 2 lines */
  .title {
    -webkit-line-clamp: 2;
    line-clamp: 2;
    font-size: var(--font-size-lg);
    line-height: var(--line-height-120);
  }

  /* body/400/md, 3 lines */
  .description {
    font-size: var(--font-size-md);
  }

  /* body/400/md, 2 lines */
  .sponsored {
    -webkit-line-clamp: 2;
    line-clamp: 2;
    font-size: var(--font-size-md);
  }
}

@media (prefers-reduced-motion: reduce) {
  .overlay,
  .hoverLabel,
  .title {
    transition: none;
  }
}
`,pe="_row_7z7zf_14",ue="_link_7z7zf_39",me="_layout_7z7zf_66",ve="_media_7z7zf_88",fe="_asset_7z7zf_96",ge="_overlay_7z7zf_106",he="_hoverLabel_7z7zf_117",ye="_duration_7z7zf_127",be="_muteSm_7z7zf_134",we="_muteMd_7z7zf_135",xe="_title_7z7zf_153",ke="_description_7z7zf_190",Se="_byline_7z7zf_206",_e="_sponsored_7z7zf_215",Ae="_sponsor_7z7zf_215",Te="_srOnly_7z7zf_234",r={row:pe,link:ue,layout:me,media:ve,asset:fe,overlay:ge,hoverLabel:he,duration:ye,muteSm:be,muteMd:we,title:xe,description:ke,byline:Se,sponsored:_e,sponsor:Ae,srOnly:Te},je=()=>typeof window<"u"&&!!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,l=p.forwardRef(function({media:n,href:a,target:i,rel:d="sponsored",onLinkClick:m,title:c="Roasted by veterans, for early mornings",headingLevel:s=3,description:v="Black Rifle Coffee Company is a veteran-founded coffee company serving premium, American-roasted coffee while supporting veterans, first responders, and their communities.",sponsoredLabel:U="Sponsored by",sponsor:E="Black Rifle Coffee",avatar:X={type:"dw-plus"},hoverLabel:I="Visit site",disabled:o=!1,muted:F,defaultMuted:J=!0,onMutedChange:Q,muteLabel:Z="Mute",durationLabel:ee="Duration",className:ne,...te},ae){const B=p.useId(),C=`${B}-title`,D=`${B}-sponsor`,re=`h${s}`,z=p.useRef(null),[ie,se]=p.useState(J),f=F??ie,oe=n.type==="video"?n.src:void 0;p.useEffect(()=>{z.current&&(z.current.muted=f)},[f]),p.useEffect(()=>{const g=z.current;g&&(o||je()?g.pause():g.play().catch(()=>{}))},[o,oe]);const O={type:"translucid",icon:f?"volume-3":"volume","aria-label":Z,"aria-pressed":f,disabled:o,onClick:()=>{const g=!f;F===void 0&&se(g),Q?.(g)}};return e.jsx("div",{ref:ae,className:[r.row,ne].filter(Boolean).join(" "),"data-variant":n.type,"data-disabled":o||void 0,...te,children:e.jsxs("div",{className:r.layout,children:[e.jsxs("div",{className:r.media,children:[n.type==="image"?e.jsx("img",{className:r.asset,src:n.src,alt:n.alt??"",draggable:!1,decoding:"async"}):e.jsx("video",{ref:z,className:r.asset,src:n.src,poster:n.poster,muted:f,loop:!0,playsInline:!0,preload:"metadata",...n.alt?{role:"img","aria-label":n.alt}:{"aria-hidden":!0}}),e.jsx("span",{className:r.overlay,"aria-hidden":"true",children:n.type==="image"&&I&&e.jsx("span",{className:r.hoverLabel,children:I})}),n.type==="video"&&n.duration&&e.jsxs(ce,{className:r.duration,variant:"translucid",size:"sm",radius:"sm",children:[e.jsx("span",{className:r.srOnly,children:`${ee} `}),n.duration]}),n.type==="video"&&e.jsxs(e.Fragment,{children:[e.jsx(V,{className:r.muteSm,size:"sm",...O}),e.jsx(V,{className:r.muteMd,size:"md",...O})]})]}),e.jsx(re,{className:r.title,children:e.jsx("a",{className:r.link,href:o?void 0:a,role:o?"link":void 0,target:o?void 0:i,rel:o?void 0:d,"aria-disabled":o||void 0,"aria-labelledby":`${C} ${D}`,onClick:o?void 0:m,children:e.jsx("span",{id:C,children:c})})}),v&&e.jsx("p",{className:r.description,children:v}),e.jsxs("div",{className:r.byline,children:[e.jsx(de,{size:"3xsm",...X}),e.jsxs("p",{className:r.sponsored,id:D,children:[U,E&&e.jsxs(e.Fragment,{children:[" ",e.jsx("span",{className:r.sponsor,children:E})]})]})]})]})})});l.__docgenInfo={description:'Native ad row for article feeds (Figma "Native Ad Ep Row" 12761:20029). The Figma `Breakpoint` axis is\nresponsive CSS: below 768px of its own width the row stacks (Mobile), from 768px it is a 1 : 2 grid (Desktop).\nAccessible pattern: the title link is the only link and its `::after` covers the row; the mute toggle\nsits outside the link, above it.',methods:[],displayName:"NativeAdRow",props:{media:{required:!0,tsType:{name:"union",raw:`| { type: 'image'; src: string; alt?: string }
| { type: 'video'; src?: string; poster?: string; alt?: string; /** Figma Badge "10:00" */ duration?: string }`,elements:[{name:"signature",type:"object",raw:"{ type: 'image'; src: string; alt?: string }",signature:{properties:[{key:"type",value:{name:"literal",value:"'image'",required:!0}},{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{ type: 'video'; src?: string; poster?: string; alt?: string; /** Figma Badge "10:00" */ duration?: string }`,signature:{properties:[{key:"type",value:{name:"literal",value:"'video'",required:!0}},{key:"src",value:{name:"string",required:!1}},{key:"poster",value:{name:"string",required:!1}},{key:"alt",value:{name:"string",required:!1}},{key:"duration",value:{name:"string",required:!1},description:'Figma Badge "10:00"'}]}}]},description:"Ad creative (Figma `Media`). Decorative by default (`alt` omitted). A video runs muted, looped and\nwithout native controls; `poster` shows until it plays and stays when motion is reduced."},href:{required:!0,tsType:{name:"string"},description:"Advertiser destination. The whole row is this one link."},target:{required:!1,tsType:{name:"HTMLAttributeAnchorTarget"},description:""},rel:{required:!1,tsType:{name:"string"},description:"Defaults to `sponsored` (paid link)",defaultValue:{value:"'sponsored'",computed:!1}},onLinkClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEventHandler<HTMLAnchorElement>"},description:"Called when the row link is activated (ad click tracking)"},title:{required:!1,tsType:{name:"string"},description:"Figma `Title`",defaultValue:{value:"'Roasted by veterans, for early mornings'",computed:!1}},headingLevel:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Heading element of the title",defaultValue:{value:"3",computed:!1}},description:{required:!1,tsType:{name:"string"},description:'Figma "Description" (3 lines, then truncated)',defaultValue:{value:"'Black Rifle Coffee Company is a veteran-founded coffee company serving premium, American-roasted coffee while supporting veterans, first responders, and their communities.'",computed:!1}},sponsoredLabel:{required:!1,tsType:{name:"string"},description:'First part of the Figma "Sponsored label", drawn in the bold text color. Keep the word "Sponsored" in it.',defaultValue:{value:"'Sponsored by'",computed:!1}},sponsor:{required:!1,tsType:{name:"string"},description:"Advertiser name: second part of the sponsored label, drawn in the subtlest text color",defaultValue:{value:"'Black Rifle Coffee'",computed:!1}},avatar:{required:!1,tsType:{name:"Pick",elements:[{name:"AvatarProps"},{name:"union",raw:"'type' | 'src' | 'initials'",elements:[{name:"literal",value:"'type'"},{name:"literal",value:"'src'"},{name:"literal",value:"'initials'"}]}],raw:"Pick<AvatarProps, 'type' | 'src' | 'initials'>"},description:"Byline avatar. Figma draws the Daily Wire mark (`dw-plus`, 24px). Decorative.",defaultValue:{value:"{ type: 'dw-plus' }",computed:!1}},hoverLabel:{required:!1,tsType:{name:"string"},description:"Label centered on the image while hovered (image only)",defaultValue:{value:"'Visit site'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Figma `State=disabled`: the link loses its `href` and is announced as disabled",defaultValue:{value:"false",computed:!1}},muted:{required:!1,tsType:{name:"boolean"},description:"Video sound, controlled. Videos start muted."},defaultMuted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onMutedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(muted: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"muted"}],return:{name:"void"}}},description:""},muteLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of the mute toggle (`aria-pressed` = muted)",defaultValue:{value:"'Mute'",computed:!1}},durationLabel:{required:!1,tsType:{name:"string"},description:"Screen-reader prefix of the duration badge",defaultValue:{value:"'Duration'",computed:!1}}},composes:["Omit"]};const{fn:P}=__STORYBOOK_MODULE_TEST__,u={Mobile:369,Desktop:912},A=Object.keys(u),T={image:{type:"image",src:L},video:{type:"video",poster:L,duration:"10:00"}},$={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"};function W({width:t,label:n,children:a}){return e.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[n&&e.jsx("div",{style:$,children:n}),e.jsx("div",{style:{width:t,flexShrink:0},children:a})]})}const j={padding:24,overflowX:"auto"},ze={component:l,title:"Components/NativeAdRow",parameters:{layout:"fullscreen"},argTypes:{media:{control:"object"},title:{control:"text"},headingLevel:{control:"inline-radio",options:[2,3,4,5,6]},description:{control:"text"},sponsoredLabel:{control:"text"},sponsor:{control:"text"},hoverLabel:{control:"text"},disabled:{control:"boolean"},href:{control:"text"}},args:{media:T.image,href:"#",title:"Roasted by veterans, for early mornings",description:"Black Rifle Coffee Company is a veteran-founded coffee company serving premium, American-roasted coffee while supporting veterans, first responders, and their communities.",sponsoredLabel:"Sponsored by",sponsor:"Black Rifle Coffee",disabled:!1,onLinkClick:P(),onMutedChange:P()}},h={render:t=>e.jsx("div",{style:{...j,display:"grid",gap:32},children:A.map(n=>e.jsx(W,{width:u[n],label:`${n} · ${u[n]}px`,children:e.jsx(l,{...t})},n))})},y={parameters:{controls:{include:["title","sponsor"]}},render:t=>e.jsx("div",{style:{...j,display:"grid",gap:32},children:A.map(n=>e.jsx("div",{style:{display:"flex",gap:32,alignItems:"start"},children:_.map(a=>e.jsx(W,{width:u[n],label:`${n} · ${a}`,children:e.jsx(l,{...t,media:T[a]})},a))},n))})},b={render:t=>e.jsx("div",{style:j,children:e.jsx("div",{style:{resize:"horizontal",overflow:"hidden",width:640,minWidth:320,maxWidth:1200,padding:8,border:"1px dashed var(--color-border-neutral-subtle-default)"},children:e.jsx(l,{...t})})})},w={parameters:{controls:{include:["sponsor"]}},render:t=>e.jsx("div",{style:j,children:e.jsxs("div",{style:{width:u.Mobile,display:"grid",gap:16},children:[e.jsx(l,{...t}),e.jsx(l,{...t,media:T.video,title:"Fresh roasted coffee, delivered to your door every month"}),e.jsx(l,{...t,description:"Short description."})]})})},K=["default","hover","pressed","focus","disabled"],H=t=>["hover","pressed","focus"].includes(t)?{"data-state":t}:{},x={parameters:{controls:{include:["title","description","sponsor"]}},render:t=>e.jsx("div",{style:{...j,display:"grid",gap:40},children:A.map(n=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${_.length}, ${u[n]}px)`,gap:"16px 32px",alignItems:"start",justifyContent:"start",...$},children:[e.jsx("div",{style:{fontWeight:600},children:n}),_.map(a=>e.jsx("div",{style:{textTransform:"capitalize"},children:a},a)),K.map(a=>e.jsxs(Me,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:a}),_.map(i=>e.jsx(l,{...t,media:T[i],disabled:a==="disabled",...H(a)},i))]},a))]},n))})};function Me({children:t}){return e.jsx(e.Fragment,{children:t})}function Re(t){const n=t.replace(/\/\*[\s\S]*?\*\//g,""),a=[];let i=0,d=0,m=0,c="";for(let s=0;s<n.length;s++)n[s]==="{"?(i===0&&(c=n.slice(d,s).trim(),m=s+1),i++):n[s]==="}"&&(i--,i===0&&(c.startsWith("@container")&&a.push({condition:c.replace(/^@container\s+[\w-]+\s*/,""),body:n.slice(m,s)}),d=s+1));return a}const Y=Re(N);function G(t,n){const a=t.match(/width < (\d+)px/),i=t.match(/width >= (\d+)px/);return(!a||n<Number(a[1]))&&(!i||n>=Number(i[1]))}const Ne=t=>A.filter(n=>G(t,u[n])).join(" + "),R={"--nar-surface":"background","--nar-divider":"divider color","--nar-overlay":"media overlay","--nar-title":"title color","--nar-hover-label":"hover label opacity"},k={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"8px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:"Mobile (base rules, all widths)"}),e.jsx(q,{css:N,aliases:R}),Y.map(t=>e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"32px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:[`${Ne(t.condition)} `,e.jsx("code",{style:{fontSize:12,fontWeight:400,color:"var(--color-text-neutral-subtle-default)"},children:t.condition})]}),e.jsx(q,{css:t.body,aliases:R})]},t.condition))]})},Ee={Mobile:1.25,Desktop:.75};function Ie(){const[t,n]=p.useState("image"),[a,i]=p.useState("Mobile"),[d,m]=p.useState("default"),c=u[a],s=[N,...Y.filter(v=>G(v.condition,c)).map(v=>v.body)].join(`
`);return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(M,{label:"Media",options:_,value:t,onChange:n}),e.jsx(M,{label:"Breakpoint",options:A,value:a,onChange:i}),e.jsx(M,{label:"State",options:K,value:d,onChange:m}),e.jsx(le,{css:s,aliases:R,group:t,state:d,scale:Ee[a],children:e.jsx(l,{style:{width:c,marginInline:-c/2},media:T[t],href:"#",disabled:d==="disabled",...H(d)})},a)]})}const S={tags:["!test"],parameters:{controls:{disable:!0}},render:()=>e.jsx(Ie,{})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 32
  }}>
      {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · \${BREAKPOINTS[bp]}px\`}>
          <NativeAdRow {...args} />
        </Frame>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:"Figma defaults (Image · default) at both breakpoint widths.",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['title', 'sponsor']
    }
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 32
  }}>
      {BREAKPOINT_NAMES.map(bp => <div key={bp} style={{
      display: 'flex',
      gap: 32,
      alignItems: 'start'
    }}>
          {NATIVE_AD_MEDIA_TYPES.map(type => <Frame key={type} width={BREAKPOINTS[bp]} label={\`\${bp} · \${type}\`}>
              <NativeAdRow {...args} media={MEDIA[type]} />
            </Frame>)}
        </div>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Figma `Media`: image, or a muted video with its duration badge and mute toggle (always visible).",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={scroller}>
      <div style={{
      resize: 'horizontal',
      overflow: 'hidden',
      width: 640,
      minWidth: 320,
      maxWidth: 1200,
      padding: 8,
      border: '1px dashed var(--color-border-neutral-subtle-default)'
    }}>
        <NativeAdRow {...args} />
      </div>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"The breakpoint follows the row's own width: drag the handle to resize the frame across 768px.",...b.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['sponsor']
    }
  },
  render: args => <div style={scroller}>
      <div style={{
      width: BREAKPOINTS.Mobile,
      display: 'grid',
      gap: 16
    }}>
        <NativeAdRow {...args} />
        <NativeAdRow {...args} media={MEDIA.video} title="Fresh roasted coffee, delivered to your door every month" />
        <NativeAdRow {...args} description="Short description." />
      </div>
    </div>
}`,...w.parameters?.docs?.source},description:{story:"A feed of rows (Mobile): each row ends with the divider.",...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['title', 'description', 'sponsor']
    }
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 40
  }}>
      {BREAKPOINT_NAMES.map(bp => <div key={bp} style={{
      display: 'grid',
      gridTemplateColumns: \`auto repeat(\${NATIVE_AD_MEDIA_TYPES.length}, \${BREAKPOINTS[bp]}px)\`,
      gap: '16px 32px',
      alignItems: 'start',
      justifyContent: 'start',
      ...muted
    }}>
          <div style={{
        fontWeight: 600
      }}>{bp}</div>
          {NATIVE_AD_MEDIA_TYPES.map(type => <div key={type} style={{
        textTransform: 'capitalize'
      }}>{type}</div>)}
          {STATES.map(s => <Row key={s}>
              <div style={{
          textTransform: 'capitalize'
        }}>{s}</div>
              {NATIVE_AD_MEDIA_TYPES.map(type => <NativeAdRow key={type} {...args} media={MEDIA[type]} disabled={s === 'disabled'} {...STATE_ATTRS(s)} />)}
            </Row>)}
        </div>)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:"All 20 Figma variants: Media × Breakpoint × State. Hover / pressed / focus are forced with `data-state`.",...x.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    }}>Mobile (base rules, all widths)</p>
      <CssTokens css={rowCss} aliases={ROW_ALIASES} />
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
          <CssTokens css={b.body} aliases={ROW_ALIASES} />
        </div>)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:"Properties and tokens read from NativeAdRow.module.css, resolved for the active theme: Mobile (base) rules, then the Desktop container query.",...k.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <RowInspect />
}`,...S.parameters?.docs?.source},description:{story:"Pick media, breakpoint (frame width) and state; see real measurements and the tokens that apply at that width.",...S.parameters?.docs?.description}}};const Fe=["Default","Media","Responsive","Feed","States","Tokens","Inspect"],$e=Object.freeze(Object.defineProperty({__proto__:null,Default:h,Feed:w,Inspect:S,Media:y,Responsive:b,States:x,Tokens:k,__namedExportsOrder:Fe,default:ze},Symbol.toStringTag,{value:"Module"}));export{h as D,w as F,S as I,y as M,$e as R,x as S,k as T,b as a};
