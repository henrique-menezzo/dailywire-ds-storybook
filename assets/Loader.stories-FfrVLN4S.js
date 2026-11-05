import{r as h,j as e}from"./iframe-BaE-r_tL.js";import{S as C}from"./ShowcaseBox-CvpXiMzv.js";import{C as w}from"./CssTokens-DoMUOAyj.js";import{I as x,C as k}from"./ComponentInspector-aQuGSI0z.js";const b=`/* ==============================================
 * Loader / Dots — Daily Wire Design System
 * Figma: Loader / Dots (13455:15617) · doc frame 13529:213291.
 * 36×16 frame, three 8px dots at x 0 / 14 / 28 (6px apart).
 * Prototype: After delay 10ms → Smart Animate 280ms ease-in-out, Frame 1 → 2 → 3 → 1
 * = 870ms loop; the lit dot is opacity 1, the others 0.3.
 * data-variant = color. data-frame="1|2|3" freezes a Figma frame (docs / QA).
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.loader {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

/* ── Color ───────────────────────────────────── */

.loader[data-variant='default'] {
  --ld-dot: var(--color-icon-neutral-bold-default);
}

.loader[data-variant='always-light'] {
  --ld-dot: var(--color-icon-always-light);
}

.loader[data-variant='inverse'] {
  --ld-dot: var(--color-icon-inverse-bold-default);
}

/* ── Dots ────────────────────────────────────── */

.dots {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  height: var(--size-sm);
}

.dots > i {
  display: block;
  width: var(--size-2xs);
  height: var(--size-2xs);
  border-radius: var(--border-radius-full);
  background-color: var(--ld-dot);
  animation: loaderDots 870ms ease-in-out infinite;
}
.dots > i:nth-child(2) {
  animation-delay: -580ms;
}
.dots > i:nth-child(3) {
  animation-delay: -290ms;
}

/* Same curve as the Button loading dots: each dot fades 1 → 0.3 over one Smart Animate step,
   rests while the highlight moves on, then fades back in. */
@keyframes loaderDots {
  0%,
  100% {
    opacity: 1;
  }
  32%,
  67% {
    opacity: 0.3;
  }
}

/* ── Frozen frames (Figma Frame 1 / 2 / 3) ───── */

.loader[data-frame] .dots > i {
  animation: none;
  opacity: 0.3;
}
.loader[data-frame='1'] .dots > i:nth-child(1),
.loader[data-frame='2'] .dots > i:nth-child(2),
.loader[data-frame='3'] .dots > i:nth-child(3) {
  opacity: 1;
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* Reduced motion: keep the signal, slow it down (same as Button) */
@media (prefers-reduced-motion: reduce) {
  .dots > i {
    animation-duration: 2.6s;
  }
}
`,A="_loader_1br2k_12",R="_dots_1br2k_36",_="_srOnly_1br2k_83",f={loader:A,dots:R,srOnly:_},p=["default","always-light","inverse"],n=h.forwardRef(function({color:r="default",label:t="Loading",className:u,...j},L){return e.jsxs("span",{ref:L,role:"status",className:[f.loader,u].filter(Boolean).join(" "),"data-variant":r,...j,children:[e.jsxs("span",{className:f.dots,"aria-hidden":"true",children:[e.jsx("i",{}),e.jsx("i",{}),e.jsx("i",{})]}),e.jsx("span",{className:f.srOnly,children:t})]})});n.__docgenInfo={description:`Loader / Dots — indeterminate loading indicator (Figma 13455:15617).
Three dots at fixed positions; only their opacity animates (a highlight travelling left to right).`,methods:[],displayName:"Loader",props:{color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LOADER_COLORS)[number]"},description:"Dot color. `default` = icon/neutral/bold (follows the theme), `always-light` = icon/always/light\n(on imagery or brand surfaces), `inverse` = icon/inverse/bold (on inverse surfaces).",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Text announced by the status region. Hidden visually.",defaultValue:{value:"'Loading'",computed:!1}}},composes:["Omit"]};const O={component:n,title:"Components/Loader",parameters:{layout:"centered"},argTypes:{color:{control:"select",options:[...p]},label:{control:"text"}},args:{color:"default",label:"Loading"}},y={default:"var(--color-background-neutral-bold-default)","always-light":"var(--color-background-always-dark)",inverse:"var(--color-background-inverse-bold-default)"},m=({color:a,children:r})=>e.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:24,borderRadius:"var(--border-radius-md)",border:"1px solid var(--color-border-neutral-subtlest-default)",background:y[a]},children:r}),c={render:a=>e.jsx(m,{color:a.color??"default",children:e.jsx(n,{...a})})},o={render:()=>e.jsx(C,{children:p.map(a=>e.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:8,fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx(m,{color:a,children:e.jsx(n,{color:a,label:`Loading (${a})`})}),e.jsx("span",{children:a})]},a))})},s={name:"In context",render:()=>e.jsx("div",{style:{display:"grid",placeItems:"center",width:320,height:180,borderRadius:"var(--border-radius-lg)",background:"var(--color-background-always-dark)"},children:e.jsx(n,{color:"always-light",label:"Loading video"})})},g=["1","2","3"],l={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${g.length+1}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),g.map(a=>e.jsxs("div",{style:{textAlign:"center"},children:["Frame ",a]},a)),e.jsx("div",{style:{textAlign:"center"},children:"Animated"}),p.map(a=>e.jsxs(I,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:a}),g.map(r=>e.jsx(v,{children:e.jsx(m,{color:a,children:e.jsx(n,{color:a,label:`${a} frame ${r}`,"data-frame":r})})},r)),e.jsx(v,{children:e.jsx(m,{color:a,children:e.jsx(n,{color:a,label:`${a} animated`})})})]},a))]})};function I({children:a}){return e.jsx(e.Fragment,{children:a})}function v({children:a}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a})}const d={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(w,{css:b,aliases:S})},S={"--ld-dot":"color"},F=["animated","frame 1","frame 2","frame 3"];function D(){const[a,r]=h.useState("default"),[t,u]=h.useState("frame 1");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(x,{label:"Color",options:p,value:a,onChange:r}),e.jsx(x,{label:"Frame",options:F,value:t,onChange:u}),e.jsx(k,{css:b,aliases:S,group:a,state:t,children:e.jsx(n,{color:a,label:`Loading (${a})`,style:a==="default"?void 0:{background:y[a],boxShadow:`0 0 0 12px ${y[a]}`,borderRadius:2},...t!=="animated"?{"data-frame":t.replace("frame ","")}:{}})})]})}const i={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(D,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Surface color={args.color ?? 'default'}>
      <Loader {...args} />
    </Surface>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      {LOADER_COLORS.map(color => <div key={color} style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 8,
      fontSize: 12,
      color: 'var(--color-text-neutral-subtlest-default)'
    }}>
          <Surface color={color}>
            <Loader color={color} label={\`Loading (\${color})\`} />
          </Surface>
          <span>{color}</span>
        </div>)}
    </ShowcaseBox>
}`,...o.parameters?.docs?.source},description:{story:"The three colors, each on the surface it is meant for.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'In context',
  render: () => <div style={{
    display: 'grid',
    placeItems: 'center',
    width: 320,
    height: 180,
    borderRadius: 'var(--border-radius-lg)',
    background: 'var(--color-background-always-dark)'
  }}>
      <Loader color="always-light" label="Loading video" />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Composition: the loader dropped inside a content placeholder.",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: \`auto repeat(\${FRAMES.length + 1}, 1fr)\`,
    gap: '20px 12px',
    padding: 24,
    alignItems: 'center',
    fontSize: 12,
    color: 'var(--color-text-neutral-subtlest-default)'
  }}>
      <div />
      {FRAMES.map(f => <div key={f} style={{
      textAlign: 'center'
    }}>Frame {f}</div>)}
      <div style={{
      textAlign: 'center'
    }}>Animated</div>
      {LOADER_COLORS.map(color => <Row key={color}>
          <div style={{
        textTransform: 'capitalize'
      }}>{color}</div>
          {FRAMES.map(f => <Cell key={f}>
              <Surface color={color}>
                <Loader color={color} label={\`\${color} frame \${f}\`} data-frame={f} />
              </Surface>
            </Cell>)}
          <Cell>
            <Surface color={color}>
              <Loader color={color} label={\`\${color} animated\`} />
            </Surface>
          </Cell>
        </Row>)}
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Every Figma variant: Color × Frame. Frames are frozen with `data-frame`; the last column runs the loop.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={loaderCss} aliases={LOADER_ALIASES} />
}`,...d.parameters?.docs?.source},description:{story:"Properties and tokens read from Loader.module.css, resolved for the active theme.",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <LoaderInspect />
}`,...i.parameters?.docs?.source},description:{story:"Pick color and frame; see real measurements (dots are boxed) and the tokens that apply.",...i.parameters?.docs?.description}}};const E=["Default","Colors","InContext","States","Tokens","Inspect"],M=Object.freeze(Object.defineProperty({__proto__:null,Colors:o,Default:c,InContext:s,Inspect:i,States:l,Tokens:d,__namedExportsOrder:E,default:O},Symbol.toStringTag,{value:"Module"}));export{o as C,c as D,s as I,M as L,l as S,d as T,i as a};
