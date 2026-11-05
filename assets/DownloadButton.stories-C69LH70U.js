import{r as d,j as e}from"./iframe-BaE-r_tL.js";import{S as T}from"./ShowcaseBox-CvpXiMzv.js";import{C as q}from"./CssTokens-DoMUOAyj.js";import{I as D,C as F}from"./ComponentInspector-aQuGSI0z.js";import{a as x}from"./Icon-D8yVe6yW.js";import M from"./download-completed-DKx7PzTF.js";import $ from"./download-starting-ring-DH9AhwhU.js";const L=`/* ==============================================
 * Download Button — Daily Wire Design System
 * Figma: Download Button (8589:136144) · doc frame 8577:138445.
 * Type minimal × Size xsm / sm / md / lg × Interaction State × Download State (100 variants).
 * data-variant = download state (default · starting · ongoing · paused · completed · expired).
 * The container is transparent in every state; only the glyph color changes with interaction.
 * The progress ring (track + arc) keeps its default colors in every interaction state, as in Figma.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.downloadButton {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  border-radius: var(--border-radius-full);
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: color var(--duration-fast) var(--easing-ease-out);

  --db-track: var(--color-icon-neutral-subtlest-default);
  --db-progress: var(--color-icon-neutral-bold-default);
  /* Paused play glyph is 12px in every size */
  --db-play-size: var(--size-xs);

  color: var(--db-glyph);
}

/* Touch target: invisible hit area of at least --touch-target-min around the smaller sizes */
.downloadButton::before {
  content: '';
  position: absolute;
  inset: min(var(--spacing-none), calc((100% - var(--touch-target-min)) / 2));
  border-radius: inherit;
}

/* ── Sizes (padding + glyph; the box hugs them: 24 · 32 · 40 · 48) ── */

.downloadButton[data-size='xsm'] {
  padding: var(--spacing-xxs);
  --db-glyph-size: var(--size-md);
  --db-inner-size: var(--size-2xs);
}

.downloadButton[data-size='sm'] {
  padding: var(--spacing-xs);
  --db-glyph-size: var(--size-lg);
  --db-inner-size: var(--size-xs);
}

.downloadButton[data-size='md'] {
  padding: var(--spacing-md);
  --db-glyph-size: var(--size-lg);
  --db-inner-size: var(--size-xs);
}

.downloadButton[data-size='lg'] {
  padding: var(--spacing-lg);
  --db-glyph-size: var(--size-lg);
  --db-inner-size: var(--size-xs);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

/* ── Neutral subtlest: default (download) · completed (check) ── */

.downloadButton[data-variant='default'],
.downloadButton[data-variant='completed'] {
  --db-glyph: var(--color-icon-neutral-subtlest-default);
}
.downloadButton[data-variant='default']:hover:not(:disabled),
.downloadButton[data-variant='default'][data-state='hover'],
.downloadButton[data-variant='completed']:hover:not(:disabled),
.downloadButton[data-variant='completed'][data-state='hover'] {
  --db-glyph: var(--color-icon-neutral-subtlest-hovered);
}
.downloadButton[data-variant='default']:active:not(:disabled),
.downloadButton[data-variant='default'][data-state='pressed'],
.downloadButton[data-variant='completed']:active:not(:disabled),
.downloadButton[data-variant='completed'][data-state='pressed'] {
  --db-glyph: var(--color-icon-neutral-subtlest-pressed);
}
.downloadButton[data-variant='default']:disabled,
.downloadButton[data-variant='completed']:disabled {
  --db-glyph: var(--color-icon-neutral-subtlest-disabled);
}

/* ── Neutral bold: starting (dashed ring + stop) · ongoing (stop) · paused (play) ── */

.downloadButton[data-variant='starting'],
.downloadButton[data-variant='ongoing'],
.downloadButton[data-variant='paused'] {
  --db-glyph: var(--color-icon-neutral-bold-default);
}
.downloadButton[data-variant='starting']:hover:not(:disabled),
.downloadButton[data-variant='starting'][data-state='hover'],
.downloadButton[data-variant='ongoing']:hover:not(:disabled),
.downloadButton[data-variant='ongoing'][data-state='hover'],
.downloadButton[data-variant='paused']:hover:not(:disabled),
.downloadButton[data-variant='paused'][data-state='hover'] {
  --db-glyph: var(--color-icon-neutral-bold-hovered);
}
.downloadButton[data-variant='starting']:active:not(:disabled),
.downloadButton[data-variant='starting'][data-state='pressed'],
.downloadButton[data-variant='ongoing']:active:not(:disabled),
.downloadButton[data-variant='ongoing'][data-state='pressed'],
.downloadButton[data-variant='paused']:active:not(:disabled),
.downloadButton[data-variant='paused'][data-state='pressed'] {
  --db-glyph: var(--color-icon-neutral-bold-pressed);
}
/* Figma draws Disabled only for Download State=default; other states follow their own color family */
.downloadButton[data-variant='starting']:disabled,
.downloadButton[data-variant='ongoing']:disabled,
.downloadButton[data-variant='paused']:disabled {
  --db-glyph: var(--color-icon-neutral-bold-disabled);
}

/* ── Warning: expired (clock) ────────────────── */

.downloadButton[data-variant='expired'] {
  --db-glyph: var(--color-icon-warning-bold-default);
}
.downloadButton[data-variant='expired']:hover:not(:disabled),
.downloadButton[data-variant='expired'][data-state='hover'] {
  --db-glyph: var(--color-icon-warning-bold-hovered);
}
.downloadButton[data-variant='expired']:active:not(:disabled),
.downloadButton[data-variant='expired'][data-state='pressed'] {
  --db-glyph: var(--color-icon-warning-bold-pressed);
}
.downloadButton[data-variant='expired']:disabled {
  --db-glyph: var(--color-icon-warning-bold-disabled);
}

/* ── Focus ring: Figma draws one 2px spread shadow right at the edge (no gap).
      The focused fill in Figma is a workaround for the shadow and is not reproduced. ── */

.downloadButton:focus-visible,
.downloadButton[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--spacing-none);
}

/* ── Disabled ────────────────────────────────── */

.downloadButton:disabled {
  cursor: not-allowed;
}

/* ── Glyph stack: ring and inner glyph share one cell, centered ── */

.content {
  display: grid;
  place-items: center;
  width: var(--db-glyph-size);
  height: var(--db-glyph-size);
}

.content > * {
  grid-area: 1 / 1;
}

.glyph,
.ring {
  display: block;
  width: var(--db-glyph-size);
  height: var(--db-glyph-size);
}

.inner {
  display: block;
  width: var(--db-inner-size);
  height: var(--db-inner-size);
}

.play {
  display: block;
  width: var(--db-play-size);
  height: var(--db-play-size);
}

.track {
  fill: none;
  stroke: var(--db-track);
}

.progress {
  fill: none;
  stroke: var(--db-progress);
  transition: stroke-dasharray var(--duration-normal) var(--easing-ease-out);
}

/* Starting: the dashed ring turns (no prototype reaction in Figma — 1 turn per second, linear) */
.spin {
  animation: dbSpin calc(var(--duration-slower) * 2) var(--easing-linear) infinite;
}

@keyframes dbSpin {
  to {
    transform: rotate(1turn);
  }
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .downloadButton,
  .progress {
    transition: none;
  }

  .spin {
    animation: none;
  }
}
`,G="_downloadButton_m13q5_12",U="_content_m13q5_157",V="_glyph_m13q5_168",Z="_ring_m13q5_169",H="_inner_m13q5_175",K="_play_m13q5_181",Q="_track_m13q5_187",X="_progress_m13q5_192",Y="_spin_m13q5_199",J="_srOnly_m13q5_209",o={downloadButton:G,content:U,glyph:V,ring:Z,inner:H,play:K,track:Q,progress:X,spin:Y,srOnly:J},z=["default","starting","ongoing","paused","completed","expired"],_=["xsm","sm","md","lg"],ee={default:"Download",starting:"Cancel download",ongoing:"Pause download",paused:"Resume download",completed:"Downloaded",expired:"Download expired"},ne="0 0 26 26",g=13,A=12,E=2;function C({value:n}){const a=Math.round(n*1e3)/10;return e.jsxs("svg",{className:o.ring,viewBox:ne,"aria-hidden":"true",focusable:"false",children:[e.jsx("circle",{className:o.track,cx:g,cy:g,r:A,strokeWidth:E}),e.jsx("circle",{className:o.progress,cx:g,cy:g,r:A,strokeWidth:E,pathLength:100,strokeDasharray:`${a} 100`,transform:`rotate(-90 ${g} ${g})`})]})}const l=d.forwardRef(function({downloadState:a="default",size:t="xsm",progress:s=0,labels:r,disabled:i=!1,className:c,"aria-describedby":p,...k},R){const I=d.useId(),O=Math.min(1,Math.max(0,Number.isFinite(s)?s:0)),N=a==="ongoing"||a==="paused",W=r?.[a]??ee[a];let u;switch(a){case"starting":u=e.jsxs(e.Fragment,{children:[e.jsx($,{className:[o.glyph,o.spin].join(" "),"aria-hidden":"true",focusable:"false"}),e.jsx(x,{name:"square",size:"xs",className:o.inner})]});break;case"ongoing":u=e.jsxs(e.Fragment,{children:[e.jsx(C,{value:O}),e.jsx(x,{name:"square",size:"xs",className:o.inner})]});break;case"paused":u=e.jsxs(e.Fragment,{children:[e.jsx(C,{value:O}),e.jsx(x,{name:"player-play-filled",size:"xs",className:o.play})]});break;case"completed":u=e.jsx(M,{className:o.glyph,"aria-hidden":"true",focusable:"false"});break;case"expired":u=e.jsx(x,{name:"clock-exclamation",className:o.glyph});break;default:u=e.jsx(x,{name:"download",className:o.glyph})}return e.jsxs("button",{ref:R,type:"button",className:[o.downloadButton,c].filter(Boolean).join(" "),"data-variant":a,"data-size":t,disabled:i,"aria-disabled":i||void 0,"aria-label":W,"aria-describedby":[N?I:void 0,p].filter(Boolean).join(" ")||void 0,...k,children:[e.jsx("span",{className:o.content,children:u}),N&&e.jsxs("span",{id:I,className:o.srOnly,children:[Math.round(O*100),"%"]})]})});l.__docgenInfo={description:`Download Button — stateful control for the lifecycle of a content download (Figma 8589:136144).
Interaction state (hover / pressed / focus / disabled) and download state are independent axes.`,methods:[],displayName:"DownloadButton",props:{downloadState:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof DOWNLOAD_STATES)[number]"},description:"Business state of the download (Figma `Download State`).",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof DOWNLOAD_BUTTON_SIZES)[number]"},description:"xsm 24 · sm 32 · md 40 · lg 48 px",defaultValue:{value:"'xsm'",computed:!1}},progress:{required:!1,tsType:{name:"number"},description:"0–1. Drawn as the ring arc (clockwise from 12 o'clock) in `ongoing` and `paused`; exposed as a description.",defaultValue:{value:"0",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof DOWNLOAD_STATES)[number]"},{name:"string"}],raw:"Record<DownloadState, string>"}],raw:"Partial<Record<DownloadState, string>>"},description:"Override the accessible name of any state (e.g. localisation)."},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ae={component:l,title:"Components/DownloadButton",parameters:{layout:"centered"},argTypes:{downloadState:{control:"select",options:[...z]},size:{control:"inline-radio",options:[..._]},progress:{control:{type:"range",min:0,max:1,step:.01}},disabled:{control:"boolean"}},args:{downloadState:"default",size:"sm",progress:.125,disabled:!1}},B={fontSize:12,color:"var(--color-text-neutral-subtlest-default)",textTransform:"capitalize"},S={},m={name:"Download states",render:()=>e.jsx(T,{style:{gap:24},children:z.map(n=>e.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:8},children:[e.jsx(l,{size:"md",downloadState:n,progress:.125}),e.jsx("span",{style:B,children:n})]},n))})},h={render:()=>e.jsx(T,{direction:"column",style:{gap:16},children:_.map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...B,width:32},children:n}),z.map(a=>e.jsx(l,{size:n,downloadState:a,progress:.125},a))]},n))})},te=[0,.125,.25,.5,.75,1],y={render:()=>e.jsx(T,{direction:"column",style:{gap:16},children:["ongoing","paused"].map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...B,width:64},children:n}),te.map(a=>e.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:4},children:[e.jsx(l,{size:"lg",downloadState:n,progress:a}),e.jsxs("span",{style:B,children:[Math.round(a*100),"%"]})]},a))]},n))})},v={render:function(a){const[t,s]=d.useState("default"),[r,i]=d.useState(0);d.useEffect(()=>{if(t==="starting"){const p=setTimeout(()=>s("ongoing"),1200);return()=>clearTimeout(p)}if(t==="ongoing"){const p=setInterval(()=>i(k=>Math.min(1,k+.02)),100);return()=>clearInterval(p)}},[t]),d.useEffect(()=>{r>=1&&s("completed")},[r]);const c={default:()=>{i(0),s("starting")},starting:()=>s("default"),ongoing:()=>s("paused"),paused:()=>s("ongoing"),completed:()=>{i(0),s("default")},expired:()=>{i(0),s("starting")}};return e.jsxs(T,{direction:"column",children:[e.jsx(l,{...a,size:a.size??"md",downloadState:t,progress:r,onClick:c[t]}),e.jsxs("span",{style:B,children:[t,t==="ongoing"||t==="paused"?` · ${Math.round(r*100)}%`:""]})]})}},j=["default","hover","pressed","focus","disabled"];function se({children:n}){return e.jsx(e.Fragment,{children:n})}function oe({children:n}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n})}const f={parameters:{layout:"fullscreen"},argTypes:{size:{control:"inline-radio",options:[..._]}},args:{size:"sm",progress:.125},render:({size:n,progress:a})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${j.length}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),j.map(t=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:t},t)),z.map(t=>e.jsxs(se,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:t}),j.map(s=>e.jsx(oe,{children:e.jsx(l,{size:n,downloadState:t,progress:a,disabled:s==="disabled",...["hover","pressed","focus"].includes(s)?{"data-state":s}:{}})},s))]},t))]})},w={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(q,{css:L,aliases:P})},P={"--db-glyph":"color","--db-track":"ring track","--db-progress":"ring progress","--db-glyph-size":"glyph size","--db-inner-size":"inner glyph size","--db-play-size":"play glyph size"},re=["minimal"];function de(){const[n,a]=d.useState("minimal"),[t,s]=d.useState("ongoing"),[r,i]=d.useState("default"),[c,p]=d.useState("md");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(D,{label:"Type",options:re,value:n,onChange:a}),e.jsx(D,{label:"Download",options:z,value:t,onChange:s}),e.jsx(D,{label:"State",options:j,value:r,onChange:i}),e.jsx(D,{label:"Size",options:_,value:c,onChange:p}),e.jsx(F,{css:L,aliases:P,group:t,state:r,size:c,children:e.jsx(l,{size:c,downloadState:t,progress:.125,disabled:r==="disabled",...["hover","pressed","focus"].includes(r)?{"data-state":r}:{}})})]})}const b={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(de,{})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"{}",...S.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Download states',
  render: () => <ShowcaseBox style={{
    gap: 24
  }}>
      {DOWNLOAD_STATES.map(s => <div key={s} style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 8
    }}>
          <DownloadButton size="md" downloadState={s} progress={0.125} />
          <span style={caption}>{s}</span>
        </div>)}
    </ShowcaseBox>
}`,...m.parameters?.docs?.source},description:{story:"Figma `Download State`: each state renders its own glyph. Ongoing and paused draw the progress arc.",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    gap: 16
  }}>
      {DOWNLOAD_BUTTON_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <span style={{
        ...caption,
        width: 32
      }}>{size}</span>
          {DOWNLOAD_STATES.map(s => <DownloadButton key={s} size={size} downloadState={s} progress={0.125} />)}
        </div>)}
    </ShowcaseBox>
}`,...h.parameters?.docs?.source},description:{story:"xsm 24 (20px glyph) · sm 32 · md 40 · lg 48 (24px glyph).",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    gap: 16
  }}>
      {(['ongoing', 'paused'] as const).map(s => <div key={s} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <span style={{
        ...caption,
        width: 64
      }}>{s}</span>
          {STEPS.map(p => <div key={p} style={{
        display: 'grid',
        justifyItems: 'center',
        gap: 4
      }}>
              <DownloadButton size="lg" downloadState={s} progress={p} />
              <span style={caption}>{Math.round(p * 100)}%</span>
            </div>)}
        </div>)}
    </ShowcaseBox>
}`,...y.parameters?.docs?.source},description:{story:'`progress` (0–1) draws the arc clockwise from 12 o\'clock; the screen reader hears it as the description ("45%").',...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [state, setState] = useState<DownloadState>('default');
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      if (state === 'starting') {
        const t = setTimeout(() => setState('ongoing'), 1200);
        return () => clearTimeout(t);
      }
      if (state === 'ongoing') {
        const t = setInterval(() => setProgress(p => Math.min(1, p + 0.02)), 100);
        return () => clearInterval(t);
      }
    }, [state]);
    useEffect(() => {
      if (progress >= 1) setState('completed');
    }, [progress]);
    const next: Record<DownloadState, () => void> = {
      default: () => {
        setProgress(0);
        setState('starting');
      },
      starting: () => setState('default'),
      ongoing: () => setState('paused'),
      paused: () => setState('ongoing'),
      completed: () => {
        setProgress(0);
        setState('default');
      },
      expired: () => {
        setProgress(0);
        setState('starting');
      }
    };
    return <ShowcaseBox direction="column">
        <DownloadButton {...args} size={args.size ?? 'md'} downloadState={state} progress={progress} onClick={next[state]} />
        <span style={caption}>{state}{state === 'ongoing' || state === 'paused' ? \` · \${Math.round(progress * 100)}%\` : ''}</span>
      </ShowcaseBox>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Composition: a simulated download. Click to start, pause, resume; it completes on its own.",...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [...DOWNLOAD_BUTTON_SIZES]
    }
  },
  args: {
    size: 'sm',
    progress: 0.125
  },
  render: ({
    size,
    progress
  }) => <div style={{
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
      {DOWNLOAD_STATES.map(ds => <Row key={ds}>
          <div style={{
        textTransform: 'capitalize'
      }}>{ds}</div>
          {STATES.map(s => <Cell key={s}>
              <DownloadButton size={size} downloadState={ds} progress={progress} disabled={s === 'disabled'} {...['hover', 'pressed', 'focus'].includes(s) ? {
          'data-state': s
        } : {}} />
            </Cell>)}
        </Row>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Every Figma variant: Download State × Interaction State (Type is always minimal). Hover / pressed / focus are forced\nwith `data-state`. Figma only draws Disabled for Download State=default; the other disabled cells follow the code.",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={downloadCss} aliases={DOWNLOAD_ALIASES} />
}`,...w.parameters?.docs?.source},description:{story:"Properties and tokens read from DownloadButton.module.css, resolved for the active theme.",...w.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <DownloadButtonInspect />
}`,...b.parameters?.docs?.source},description:{story:"Pick download state, interaction state and size; see real measurements and the tokens that apply.",...b.parameters?.docs?.description}}};const ie=["Default","DownloadStates","Sizes","Progress","Lifecycle","States","Tokens","Inspect"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:S,DownloadStates:m,Inspect:b,Lifecycle:v,Progress:y,Sizes:h,States:f,Tokens:w,__namedExportsOrder:ie,default:ae},Symbol.toStringTag,{value:"Module"}));export{ye as D,b as I,v as L,y as P,h as S,w as T,S as a,m as b,f as c};
