import{r as p,j as e}from"./iframe-BaE-r_tL.js";import{S}from"./ShowcaseBox-CvpXiMzv.js";import{C as L}from"./CssTokens-DoMUOAyj.js";import{I as h,C as O}from"./ComponentInspector-aQuGSI0z.js";import{a as P}from"./Icon-D8yVe6yW.js";const x=`/* ==============================================
 * MediaSwapButton — Daily Wire Design System
 * Figma: Swap_Video (5599:8341), Type = Video / Audio.
 * Legacy component: Figma binds [Old] 2.0 variables (Background/Light Container,
 * Background/Base, Text/Default/Base, Text/Default/Strong, Icon/Strong and
 * Icon/Solid at 30% opacity) and raw spacing; each one is mapped to the closest
 * token in tokens.css. Figma draws only the two selections; hover / pressed /
 * disabled on the segments use the neutral-subtlest family.
 * ============================================== */

.mediaSwap {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  min-inline-size: var(--spacing-none);
  margin: var(--spacing-none);
  padding: var(--spacing-xs);
  border: none;
  border-radius: var(--border-radius-full);

  /* Background/Light Container (#1f1f1f) → neutral subtlest */
  --msb-track: var(--color-background-neutral-subtlest-default);
  background-color: var(--msb-track);
}

.mediaSwap:disabled {
  --msb-track: var(--color-background-neutral-subtlest-disabled);
}

/* ── Segment (unselected) ── */

.segment {
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-full);
  cursor: pointer;
  /* Figma: Libre Franklin Regular 14 / 150% / 2% → body/400/sm metrics */
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color var(--duration-fast) var(--easing-ease-out),
    color var(--duration-fast) var(--easing-ease-out);

  --seg-bg: transparent;
  /* Text/Default/Strong (#8f8f8f) → neutral subtlest */
  --seg-text: var(--color-text-neutral-subtlest-default);
  /* Icon/Solid (#8f8f8f) drawn at 30% opacity → neutral subtlest icon, dimmed */
  --seg-icon: var(--color-icon-neutral-subtlest-disabled);
  background-color: var(--seg-bg);
  color: var(--seg-text);
}

/* Touch target: segments are 29px tall; this invisible area makes them 44px */
.segment::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: calc((100% - var(--touch-target-min)) / 2);
  bottom: calc((100% - var(--touch-target-min)) / 2);
}

/* ── Segment (selected: aria-pressed) ── */

.segment[aria-pressed='true'] {
  /* Background/Base (#0a0909) → neutral bold */
  --seg-bg: var(--color-background-neutral-bold-default);
  /* Text/Default/Base (#fff) → neutral bold */
  --seg-text: var(--color-text-neutral-bold-default);
  /* Icon/Strong (#fff) drawn at 30% opacity → neutral subtlest icon */
  --seg-icon: var(--color-icon-neutral-subtlest-default);
  cursor: default;
}

/* [data-state] on the root forces hover / pressed / focus for docs and QA (States story) */

.segment:hover:not(:disabled):not([aria-pressed='true']),
.mediaSwap[data-state='hover'] .segment:not([aria-pressed='true']) {
  --seg-bg: var(--color-background-neutral-subtlest-hovered);
  --seg-text: var(--color-text-neutral-subtlest-hovered);
}

.segment:active:not(:disabled):not([aria-pressed='true']),
.mediaSwap[data-state='pressed'] .segment:not([aria-pressed='true']) {
  --seg-bg: var(--color-background-neutral-subtlest-pressed);
  --seg-text: var(--color-text-neutral-subtlest-pressed);
}

.segment:disabled {
  --seg-text: var(--color-text-neutral-bold-disabled);
  --seg-icon: var(--color-icon-neutral-bold-disabled);
  cursor: not-allowed;
}

.segment[aria-pressed='true']:disabled {
  --seg-bg: var(--color-background-neutral-bold-disabled);
}

/* ── Focus ring: same ring as Button ── */

.segment:focus-visible,
.mediaSwap[data-state='focus'] .segment[aria-pressed='true'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

@media (prefers-reduced-motion: reduce) {
  .segment {
    transition: none;
  }
}
`,V="_mediaSwap_1tzzc_11",R="_segment_1tzzc_32",b={mediaSwap:V,segment:R},v=["video","audio"],W=[{mode:"video",icon:"video"},{mode:"audio",icon:"headphones"}],o=p.forwardRef(function({mode:a,defaultMode:s="video",onModeChange:g,videoLabel:k="Video",audioLabel:M="Audio",disabled:T=!1,"aria-label":j="Playback mode",className:A,...C},_){const[E,I]=p.useState(s),f=a??E,B={video:k,audio:M},D=n=>{n!==f&&(a===void 0&&I(n),g?.(n))};return e.jsx("fieldset",{ref:_,className:[b.mediaSwap,A].filter(Boolean).join(" "),"aria-label":j,"data-mode":f,disabled:T,...C,children:W.map(({mode:n,icon:z})=>{const F=n===f;return e.jsxs("button",{type:"button",className:b.segment,"aria-pressed":F,onClick:()=>D(n),children:[e.jsx(P,{name:z,size:"md",color:"var(--seg-icon)"}),e.jsx("span",{className:b.label,children:B[n]})]},n)})})});o.__docgenInfo={description:"Audio ↔ video toggle: two segments in a pill, the selected one filled.\nEach segment is a toggle button (`aria-pressed`) inside a labelled group.",methods:[],displayName:"MediaSwapButton",props:{mode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof MEDIA_SWAP_MODES)[number]"},description:"Selected mode, controlled (Figma variant `Type`: Video / Audio)"},defaultMode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof MEDIA_SWAP_MODES)[number]"},description:"Initial mode when `mode` is not controlled",defaultValue:{value:"'video'",computed:!1}},onModeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(mode: MediaSwapMode) => void",signature:{arguments:[{type:{name:"unknown[number]",raw:"(typeof MEDIA_SWAP_MODES)[number]"},name:"mode"}],return:{name:"void"}}},description:"Called with the new mode when the user picks the other segment"},videoLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Video'",computed:!1}},audioLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Audio'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name of the group",defaultValue:{value:"'Playback mode'",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const q={component:o,title:"Components/MediaSwapButton",parameters:{layout:"centered"},argTypes:{defaultMode:{control:"inline-radio",options:[...v]},videoLabel:{control:"text"},audioLabel:{control:"text"},disabled:{control:"boolean"},"aria-label":{control:"text"}},args:{defaultMode:"video",videoLabel:"Video",audioLabel:"Audio",disabled:!1,"aria-label":"Playback mode"}},r={},d={render:()=>e.jsxs(S,{direction:"column",children:[e.jsx(o,{mode:"video"}),e.jsx(o,{mode:"audio"})]})};function N(){const[t,a]=p.useState("video");return e.jsxs(S,{direction:"column",children:[e.jsx(o,{mode:t,onModeChange:a}),e.jsxs("span",{style:{fontFamily:"var(--default), sans-serif",fontSize:"var(--font-size-sm)",color:"var(--color-text-neutral-subtle-default)"},children:["Now playing as: ",e.jsx("strong",{children:t})]})]})}const i={render:()=>e.jsx(N,{})},m=["default","hover","pressed","focus","disabled"],y=["hover","pressed","focus"];function H({children:t}){return e.jsx(e.Fragment,{children:t})}function $({children:t}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t})}const l={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${m.length}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),m.map(t=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:t},t)),v.map(t=>e.jsxs(H,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:t}),m.map(a=>e.jsx($,{children:e.jsx(o,{mode:t,disabled:a==="disabled",...y.includes(a)?{"data-state":a}:{}})},a))]},t))]})},w={"--msb-track":"background","--seg-bg":"background","--seg-text":"color","--seg-icon":"icon color"},c={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(L,{css:x,aliases:w})};function G(){const[t,a]=p.useState("video"),[s,g]=p.useState("default");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(h,{label:"Mode",options:v,value:t,onChange:a}),e.jsx(h,{label:"State",options:m,value:s,onChange:g}),e.jsx(O,{css:x,aliases:w,group:t,state:s,children:e.jsx(o,{mode:t,onModeChange:a,disabled:s==="disabled",...y.includes(s)?{"data-state":s}:{}})})]})}const u={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(G,{})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Uncontrolled: click the other segment to swap.",...r.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column">
      <MediaSwapButton mode="video" />
      <MediaSwapButton mode="audio" />
    </ShowcaseBox>
}`,...d.parameters?.docs?.source},description:{story:"Figma variants: Type = Video and Type = Audio.",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />
}`,...i.parameters?.docs?.source},description:{story:"Controlled with `mode` + `onModeChange`.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      {MEDIA_SWAP_MODES.map(mode => <Row key={mode}>
          <div style={{
        textTransform: 'capitalize'
      }}>{mode}</div>
          {STATES.map(s => <Cell key={s}>
              <MediaSwapButton mode={mode} disabled={s === 'disabled'} {...FORCED.includes(s) ? {
          'data-state': s
        } : {}} />
            </Cell>)}
        </Row>)}
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Both modes in every state. Figma only draws the two selections; hover / pressed (on the\nunselected segment) and disabled come from the neutral-subtlest token family. Hover / pressed /\nfocus are forced with `data-state` on the root (focus rings the selected segment).",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={mediaSwapCss} aliases={MEDIA_SWAP_ALIASES} />
}`,...c.parameters?.docs?.source},description:{story:"Properties and tokens read from MediaSwapButton.module.css, resolved for the active theme.",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <MediaSwapInspect />
}`,...u.parameters?.docs?.source},description:{story:`Pick mode and state; see real measurements and the tokens that apply. The inspector measures the
group (track) and the first segment's icon and label. Hover a token to locate it.`,...u.parameters?.docs?.description}}};const Q=["Default","Modes","Controlled","States","Tokens","Inspect"],Z=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:r,Inspect:u,Modes:d,States:l,Tokens:c,__namedExportsOrder:Q,default:q},Symbol.toStringTag,{value:"Module"}));export{i as C,r as D,u as I,Z as M,l as S,c as T,d as a};
