import{r as m,j as e}from"./iframe-BaE-r_tL.js";import{S as y}from"./ShowcaseBox-CvpXiMzv.js";import{C as S}from"./CssTokens-DoMUOAyj.js";import{I as B,C as k}from"./ComponentInspector-aQuGSI0z.js";const b=`/* ==============================================
 * ScrollButton — Daily Wire Design System
 * Figma: Scroll Button (1522:16829).
 * Legacy component: Figma binds [Old] variables (Background/Light Container,
 * Text/Default/Base, Bases/Spacings, Bases/Corner Radius); each one is mapped to
 * the closest token in tokens.css. Figma draws only the default state; hover /
 * pressed / disabled use the neutral-subtlest family.
 * ============================================== */

.scrollButton {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* Bases/Spacings spacing-sm (8) · spacing-lg (16) */
  padding: var(--spacing-md) var(--spacing-xl);
  border: none;
  /* Bases/Corner Radius/radius-pill */
  border-radius: var(--border-radius-full);
  /* Figma: drop shadow 4,4 blur 16 #000 40% + background blur 90 — no matching token */
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  /* Figma: Libre Franklin SemiBold 14 / 150% / 2% → body/600/sm metrics */
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Semibold);
  line-height: var(--line-height-150);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color var(--duration-fast) var(--easing-ease-out),
    color var(--duration-fast) var(--easing-ease-out);

  /* Background/Light Container (#1f1f1f) → neutral subtlest */
  --sb-bg: var(--color-background-neutral-subtlest-default);
  /* Text/Default/Base (#fff) → neutral bold */
  --sb-text: var(--color-text-neutral-bold-default);
  background-color: var(--sb-bg);
  color: var(--sb-text);
}

/* Touch target: the pill is 37px tall; this invisible area makes it 44px without changing its look */
.scrollButton::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: calc((100% - var(--touch-target-min)) / 2);
  bottom: calc((100% - var(--touch-target-min)) / 2);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

.scrollButton:hover:not(:disabled),
.scrollButton[data-state='hover'] {
  --sb-bg: var(--color-background-neutral-subtlest-hovered);
}

.scrollButton:active:not(:disabled),
.scrollButton[data-state='pressed'] {
  --sb-bg: var(--color-background-neutral-subtlest-pressed);
}

.scrollButton:disabled {
  --sb-bg: var(--color-background-neutral-subtlest-disabled);
  --sb-text: var(--color-text-neutral-bold-disabled);
  cursor: not-allowed;
}

/* ── Focus ring: same ring as Button ── */

.scrollButton:focus-visible,
.scrollButton[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

.content {
  display: inline-flex;
  align-items: center;
}

@media (prefers-reduced-motion: reduce) {
  .scrollButton {
    transition: none;
  }
}
`,j="_scrollButton_n4571_10",C="_content_n4571_81",u={scrollButton:j,content:C},n=m.forwardRef(function({label:s="Scroll to latest",disabled:p=!1,className:v,...h},x){return e.jsx("button",{ref:x,type:"button",className:[u.scrollButton,v].filter(Boolean).join(" "),disabled:p,"aria-disabled":p||void 0,...h,children:e.jsx("span",{className:u.content,children:e.jsx("span",{className:u.label,children:s})})})});n.__docgenInfo={description:"Floating pill that brings the user back to the latest content (e.g. a chat or a feed).",methods:[],displayName:"ScrollButton",props:{label:{required:!1,tsType:{name:"string"},description:'Figma prop "Text"',defaultValue:{value:"'Scroll to latest'",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const T={component:n,title:"Components/ScrollButton",parameters:{layout:"centered"},argTypes:{label:{control:"text"},disabled:{control:"boolean"}},args:{label:"Scroll to latest",disabled:!1}},d={},r={render:()=>e.jsxs(y,{children:[e.jsx(n,{label:"Scroll to latest"}),e.jsx(n,{label:"New messages"}),e.jsx(n,{label:"Back to top"})]})},a={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{position:"relative",maxWidth:360,height:240,overflow:"hidden",borderRadius:"var(--border-radius-md)",border:"var(--border-default) solid var(--color-border-neutral-subtle-default)",backgroundColor:"var(--color-background-neutral-bold-default)",fontFamily:"var(--default), sans-serif"},children:[Array.from({length:6},(t,s)=>e.jsxs("p",{style:{margin:0,padding:"var(--spacing-md) var(--spacing-xl)",fontSize:"var(--font-size-sm)",color:"var(--color-text-neutral-subtle-default)"},children:["Chat message ",s+1]},s)),e.jsx("div",{style:{position:"absolute",left:0,right:0,bottom:"var(--spacing-xl)",display:"flex",justifyContent:"center"},children:e.jsx(n,{})})]})},c=["default","hover","pressed","focus","disabled"],g=["hover","pressed","focus"],o={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`repeat(${c.length}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[c.map(t=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:t},t)),c.map(t=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(n,{disabled:t==="disabled",...g.includes(t)?{"data-state":t}:{}})},t))]})},f={"--sb-bg":"background","--sb-text":"color"},l={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(S,{css:b,aliases:f})};function w(){const[t,s]=m.useState("default");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(B,{label:"State",options:c,value:t,onChange:s}),e.jsx(k,{css:b,aliases:f,group:"scroll button",state:t,children:e.jsx(n,{disabled:t==="disabled",...g.includes(t)?{"data-state":t}:{}})})]})}const i={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(w,{})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <ScrollButton label="Scroll to latest" />
      <ScrollButton label="New messages" />
      <ScrollButton label="Back to top" />
    </ShowcaseBox>
}`,...r.parameters?.docs?.source},description:{story:'The Figma "Text" prop with other copy.',...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    position: 'relative',
    maxWidth: 360,
    height: 240,
    overflow: 'hidden',
    borderRadius: 'var(--border-radius-md)',
    border: 'var(--border-default) solid var(--color-border-neutral-subtle-default)',
    backgroundColor: 'var(--color-background-neutral-bold-default)',
    fontFamily: 'var(--default), sans-serif'
  }}>
      {Array.from({
      length: 6
    }, (_, i) => <p key={i} style={{
      margin: 0,
      padding: 'var(--spacing-md) var(--spacing-xl)',
      fontSize: 'var(--font-size-sm)',
      color: 'var(--color-text-neutral-subtle-default)'
    }}>
          Chat message {i + 1}
        </p>)}
      <div style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 'var(--spacing-xl)',
      display: 'flex',
      justifyContent: 'center'
    }}>
        <ScrollButton />
      </div>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Floating over a scrolling list, centered near the bottom.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: \`repeat(\${STATES.length}, 1fr)\`,
    gap: '20px 12px',
    padding: 24,
    alignItems: 'center',
    fontSize: 12,
    color: 'var(--color-text-neutral-subtlest-default)'
  }}>
      {STATES.map(s => <div key={s} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {STATES.map(s => <div key={s} style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
          <ScrollButton disabled={s === 'disabled'} {...FORCED.includes(s) ? {
        'data-state': s
      } : {}} />
        </div>)}
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Every state. Figma only draws the default; hover / pressed / disabled come from the\nneutral-subtlest token family. Hover / pressed / focus are forced with `data-state`.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={scrollButtonCss} aliases={SCROLL_ALIASES} />
}`,...l.parameters?.docs?.source},description:{story:"Properties and tokens read from ScrollButton.module.css, resolved for the active theme.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ScrollButtonInspect />
}`,...i.parameters?.docs?.source},description:{story:"Pick a state; see real measurements and the tokens that apply. Hover a token to locate it.",...i.parameters?.docs?.description}}};const _=["Default","Labels","OverContent","States","Tokens","Inspect"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Inspect:i,Labels:r,OverContent:a,States:o,Tokens:l,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{d as D,i as I,r as L,a as O,z as S,l as T,o as a};
