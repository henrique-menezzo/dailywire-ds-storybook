import{r as p,j as e}from"./iframe-BaE-r_tL.js";import{C as h}from"./CssTokens-DoMUOAyj.js";import{I as x,C}from"./ComponentInspector-aQuGSI0z.js";import{a as O}from"./Icon-D8yVe6yW.js";const v=`/* ==============================================
 * CloseOverlayButton — Daily Wire Design System
 * Figma: Close Overlay (1649:2227).
 * Legacy component: Figma binds [Old] variables (Background/Container,
 * Icon/Strong at 30% opacity, radius-pill); each one is mapped to the closest
 * token in tokens.css. Figma draws only the default state; hover / pressed /
 * disabled use the neutral-subtle (surface) and neutral-subtlest (icon) families.
 * ============================================== */

.closeOverlay {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* 16 padding + 24 icon = 56 (Figma 56×56) */
  padding: var(--spacing-xl);
  border: none;
  /* Bases/Corner Radius/radius-pill */
  border-radius: var(--border-radius-full);
  /* Figma: drop shadow 4,4 blur 16 #000 40% + background blur 90 — no matching token */
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color var(--duration-fast) var(--easing-ease-out),
    color var(--duration-fast) var(--easing-ease-out);

  /* Background/Container (#151515) → neutral subtle */
  --cob-bg: var(--color-background-neutral-subtle-default);
  /* Icon/Strong (#fff) drawn at 30% opacity → neutral subtlest icon */
  --cob-icon: var(--color-icon-neutral-subtlest-default);
  background-color: var(--cob-bg);
  color: var(--cob-icon);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

.closeOverlay:hover:not(:disabled),
.closeOverlay[data-state='hover'] {
  --cob-bg: var(--color-background-neutral-subtle-hovered);
  --cob-icon: var(--color-icon-neutral-subtlest-hovered);
}

.closeOverlay:active:not(:disabled),
.closeOverlay[data-state='pressed'] {
  --cob-bg: var(--color-background-neutral-subtle-pressed);
  --cob-icon: var(--color-icon-neutral-subtlest-pressed);
}

.closeOverlay:disabled {
  --cob-bg: var(--color-background-neutral-subtle-disabled);
  --cob-icon: var(--color-icon-neutral-subtlest-disabled);
  cursor: not-allowed;
}

/* ── Focus ring: same ring as Button ── */

.closeOverlay:focus-visible,
.closeOverlay[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

.content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@media (prefers-reduced-motion: reduce) {
  .closeOverlay {
    transition: none;
  }
}
`,S="_closeOverlay_1940g_10",k="_content_1940g_66",u={closeOverlay:S,content:k},l=p.forwardRef(function({"aria-label":c="Close",disabled:d=!1,className:y,...g},f){return e.jsx("button",{ref:f,type:"button",className:[u.closeOverlay,y].filter(Boolean).join(" "),"aria-label":c,disabled:d,"aria-disabled":d||void 0,...g,children:e.jsx("span",{className:u.content,children:e.jsx(O,{name:"x",size:"lg"})})})});l.__docgenInfo={description:"Round, icon-only button that closes an overlay (player, sheet, image viewer).",methods:[],displayName:"CloseOverlayButton",props:{"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name; the button only shows an icon",defaultValue:{value:"'Close'",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const j={component:l,title:"Components/CloseOverlayButton",parameters:{layout:"centered"},argTypes:{"aria-label":{control:"text"},disabled:{control:"boolean"}},args:{"aria-label":"Close",disabled:!1}},n={},s={parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{position:"relative",maxWidth:480,aspectRatio:"16 / 9",borderRadius:"var(--border-radius-md)",backgroundColor:"var(--color-background-always-dark)"},children:e.jsx("div",{style:{position:"absolute",top:"var(--spacing-xl)",right:"var(--spacing-xl)"},children:e.jsx(l,{"aria-label":"Close player"})})})},i=["default","hover","pressed","focus","disabled"],b=["hover","pressed","focus"],r={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i.length}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[i.map(a=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:a},a)),i.map(a=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(l,{disabled:a==="disabled",...b.includes(a)?{"data-state":a}:{}})},a))]})},m={"--cob-bg":"background","--cob-icon":"color"},t={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(h,{css:v,aliases:m})};function T(){const[a,c]=p.useState("default");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(x,{label:"State",options:i,value:a,onChange:c}),e.jsx(C,{css:v,aliases:m,group:"close overlay",state:a,children:e.jsx(l,{disabled:a==="disabled",...b.includes(a)?{"data-state":a}:{}})})]})}const o={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(T,{})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    position: 'relative',
    maxWidth: 480,
    aspectRatio: '16 / 9',
    borderRadius: 'var(--border-radius-md)',
    backgroundColor: 'var(--color-background-always-dark)'
  }}>
      <div style={{
      position: 'absolute',
      top: 'var(--spacing-xl)',
      right: 'var(--spacing-xl)'
    }}>
        <CloseOverlayButton aria-label="Close player" />
      </div>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"In the corner of an overlay (player, sheet, image viewer).",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
          <CloseOverlayButton disabled={s === 'disabled'} {...FORCED.includes(s) ? {
        'data-state': s
      } : {}} />
        </div>)}
    </div>
}`,...r.parameters?.docs?.source},description:{story:"Every state. Figma only draws the default; hover / pressed / disabled come from the\nneutral-subtle (surface) and neutral-subtlest (icon) token families. Hover / pressed / focus\nare forced with `data-state`.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={closeOverlayCss} aliases={CLOSE_ALIASES} />
}`,...t.parameters?.docs?.source},description:{story:"Properties and tokens read from CloseOverlayButton.module.css, resolved for the active theme.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <CloseOverlayInspect />
}`,...o.parameters?.docs?.source},description:{story:"Pick a state; see real measurements and the tokens that apply. Hover a token to locate it.",...o.parameters?.docs?.description}}};const I=["Default","OnOverlay","States","Tokens","Inspect"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Inspect:o,OnOverlay:s,States:r,Tokens:t,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{A as C,n as D,o as I,s as O,r as S,t as T};
