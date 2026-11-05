import{r as b,j as e}from"./iframe-BaE-r_tL.js";import{S as w}from"./ShowcaseBox-CvpXiMzv.js";import{C as T}from"./CssTokens-DoMUOAyj.js";import{I as x,C as _}from"./ComponentInspector-aQuGSI0z.js";import{a as I}from"./Icon-D8yVe6yW.js";const k=`/* ==============================================
 * Play button — Daily Wire Design System
 * Figma: Play button (13220:37305) · doc frame 13220:37367.
 * Action Play / Pause × InteractionState Default / Hover / Pressed / Focus / Disabled × Size md / sm.
 * Figma fills / effects on this set are raw values (no variables); see the token notes per rule.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.playButton {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: var(--spacing-none);
  border: none;
  border-radius: var(--border-radius-full);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  /* Figma: drop shadow 0 4 blur 250 #000 50% (raw) → closest elevation token */
  box-shadow: var(--shadow-xl);
  /* Figma: background blur 4 (raw) → 4px dimension primitive */
  -webkit-backdrop-filter: blur(var(--primitive-dimension-dimension-1));
  backdrop-filter: blur(var(--primitive-dimension-dimension-1));
  transition:
    background-color var(--duration-fast) var(--easing-ease-out),
    margin var(--duration-fast) var(--easing-ease-out);

  /* Figma: #000 25% (raw) → closest overlay token */
  --pb-bg: var(--color-overlay-neutral-subtle-default);
  /* Figma binds background/always/light on the glyph */
  --pb-icon-color: var(--color-background-always-light);

  background-color: var(--pb-bg);
  color: var(--pb-icon-color);
}

/* ── Sizes ───────────────────────────────────── */

.playButton[data-size='md'] {
  padding: var(--spacing-3xl);
  --pb-icon: var(--size-xl);
}

.playButton[data-size='sm'] {
  padding: var(--spacing-xl);
  --pb-icon: var(--size-lg);
}

.content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon {
  display: block;
  width: var(--pb-icon);
  height: var(--pb-icon);
  transition:
    width var(--duration-fast) var(--easing-ease-out),
    height var(--duration-fast) var(--easing-ease-out);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

/* ── Hover: #000 50% (raw) → closest overlay token ── */

.playButton:hover:not(:disabled),
.playButton[data-state='hover'] {
  --pb-bg: var(--color-overlay-neutral-bold-default);
}

/* ── Pressed: same fill as hover; Figma shrinks the button by 4px (glyph −4px, padding kept).
      A 2px margin keeps the footprint, so nothing around it moves. ── */

.playButton:active:not(:disabled),
.playButton[data-state='pressed'] {
  --pb-bg: var(--color-overlay-neutral-bold-default);
  margin: var(--spacing-xxs);
}
.playButton[data-size='md']:active:not(:disabled),
.playButton[data-size='md'][data-state='pressed'] {
  --pb-icon: var(--primitive-dimension-dimension-7);
}
.playButton[data-size='sm']:active:not(:disabled),
.playButton[data-size='sm'][data-state='pressed'] {
  --pb-icon: var(--size-md);
}

/* ── Focus ring: transparent offset, same ring as Button (Figma: 2px gap + 2px ring shadows) ── */

.playButton:focus-visible,
.playButton[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Disabled: fill stays default; glyph always-light at 20% (Figma layer opacity 0.2)
      → overlay-inverse-subtlest, which is the same rgba in both themes ── */

.playButton:disabled {
  --pb-icon-color: var(--color-overlay-inverse-subtlest-default);
  cursor: not-allowed;
}

@media (prefers-reduced-motion: reduce) {
  .playButton,
  .icon {
    transition: none;
  }
}
`,C="_playButton_17nyo_10",F="_content_17nyo_52",L="_icon_17nyo_58",S={playButton:C,content:F,icon:L},v=["sm","md"],s=b.forwardRef(function({playing:t=!1,size:a="md",playLabel:m="Play",pauseLabel:o="Pause",disabled:f=!1,className:A,...P},z){return e.jsx("button",{ref:z,type:"button",className:[S.playButton,A].filter(Boolean).join(" "),"data-size":a,"data-action":t?"pause":"play",disabled:f,"aria-disabled":f||void 0,"aria-label":t?o:m,...P,children:e.jsx("span",{className:S.content,children:e.jsx(I,{name:t?"player-pause":"player-play-filled",size:a==="md"?"xl":"lg",className:S.icon})})})});s.__docgenInfo={description:"Play button — round translucent play / pause control laid over video or artwork (Figma 13220:37305).\nThe glyph and accessible name follow `playing`; there is no `aria-pressed` because the name already changes.",methods:[],displayName:"PlayButton",props:{playing:{required:!1,tsType:{name:"boolean"},description:"`true` shows the pause glyph (Figma Action=Pause) and names the button `pauseLabel`.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PLAY_BUTTON_SIZES)[number]"},description:"md = 80px, sm = 56px",defaultValue:{value:"'md'",computed:!1}},playLabel:{required:!1,tsType:{name:"string"},description:"Accessible name while paused.",defaultValue:{value:"'Play'",computed:!1}},pauseLabel:{required:!1,tsType:{name:"string"},description:"Accessible name while playing.",defaultValue:{value:"'Pause'",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const E={component:s,title:"Components/PlayButton",parameters:{layout:"centered"},argTypes:{playing:{control:"boolean"},size:{control:"inline-radio",options:[...v]},playLabel:{control:"text"},pauseLabel:{control:"text"},disabled:{control:"boolean"}},args:{playing:!1,size:"md",playLabel:"Play",pauseLabel:"Pause",disabled:!1}},O="linear-gradient(135deg, var(--color-background-brand-bold-default), var(--color-background-info-bold-default) 55%, var(--color-background-always-dark))",r=({children:n,width:t=240,height:a=160})=>e.jsx("div",{style:{display:"grid",placeItems:"center",width:t,height:a,borderRadius:"var(--border-radius-lg)",background:O},children:n}),y={render:n=>e.jsx(r,{children:e.jsx(s,{...n})})},i={render:()=>e.jsxs(w,{children:[e.jsx(r,{children:e.jsx(s,{})}),e.jsx(r,{children:e.jsx(s,{playing:!0})})]})},l={render:()=>e.jsx(w,{children:v.map(n=>e.jsx(r,{children:e.jsx(s,{size:n})},n))})},d={render:function(t){const[a,m]=b.useState(!1);return e.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:12},children:[e.jsx(r,{width:320,height:180,children:e.jsx(s,{...t,playing:a,onClick:()=>m(o=>!o)})}),e.jsxs("span",{style:{fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:["playing: ",String(a)]})]})}},g={render:()=>e.jsxs(w,{children:[e.jsx(r,{children:e.jsx(s,{disabled:!0})}),e.jsx(r,{children:e.jsx(s,{playing:!0,disabled:!0})})]})},h=["default","hover","pressed","focus","disabled"],j=["play","pause"];function D({children:n}){return e.jsx(e.Fragment,{children:n})}function N({children:n}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n})}const c={parameters:{layout:"fullscreen"},argTypes:{size:{control:"inline-radio",options:[...v]}},args:{size:"md"},render:({size:n})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${h.length}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),h.map(t=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:t},t)),j.map(t=>e.jsxs(D,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:t}),h.map(a=>e.jsx(N,{children:e.jsx(r,{width:120,height:120,children:e.jsx(s,{size:n,playing:t==="pause",disabled:a==="disabled",...["hover","pressed","focus"].includes(a)?{"data-state":a}:{}})})},a))]},t))]})},p={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(T,{css:k,aliases:B})},B={"--pb-bg":"background","--pb-icon-color":"color","--pb-icon":"icon size"};function R(){const[n,t]=b.useState("play"),[a,m]=b.useState("default"),[o,f]=b.useState("md");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(x,{label:"Action",options:j,value:n,onChange:t}),e.jsx(x,{label:"State",options:h,value:a,onChange:m}),e.jsx(x,{label:"Size",options:v,value:o,onChange:f}),e.jsx(_,{css:k,aliases:B,group:n,state:a,size:o,children:e.jsx(s,{size:o,playing:n==="pause",disabled:a==="disabled",...["hover","pressed","focus"].includes(a)?{"data-state":a}:{}})})]})}const u={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(R,{})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Artwork>
      <PlayButton {...args} />
    </Artwork>
}`,...y.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <Artwork>
        <PlayButton />
      </Artwork>
      <Artwork>
        <PlayButton playing />
      </Artwork>
    </ShowcaseBox>
}`,...i.parameters?.docs?.source},description:{story:"Figma `Action`: Play (paused media) and Pause (playing media).",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      {PLAY_BUTTON_SIZES.map(size => <Artwork key={size}>
          <PlayButton size={size} />
        </Artwork>)}
    </ShowcaseBox>
}`,...l.parameters?.docs?.source},description:{story:"md = 80px (32px glyph), sm = 56px (24px glyph).",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [playing, setPlaying] = useState(false);
    return <div style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 12
    }}>
        <Artwork width={320} height={180}>
          <PlayButton {...args} playing={playing} onClick={() => setPlaying(p => !p)} />
        </Artwork>
        <span style={{
        fontSize: 12,
        color: 'var(--color-text-neutral-subtlest-default)'
      }}>playing: {String(playing)}</span>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:"Composition: click to toggle; the glyph and accessible name follow `playing`.",...d.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <Artwork>
        <PlayButton disabled />
      </Artwork>
      <Artwork>
        <PlayButton playing disabled />
      </Artwork>
    </ShowcaseBox>
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [...PLAY_BUTTON_SIZES]
    }
  },
  args: {
    size: 'md'
  },
  render: ({
    size
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
      {ACTIONS.map(action => <Row key={action}>
          <div style={{
        textTransform: 'capitalize'
      }}>{action}</div>
          {STATES.map(s => <Cell key={s}>
              <Artwork width={120} height={120}>
                <PlayButton size={size} playing={action === 'pause'} disabled={s === 'disabled'} {...['hover', 'pressed', 'focus'].includes(s) ? {
            'data-state': s
          } : {}} />
              </Artwork>
            </Cell>)}
        </Row>)}
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Every Figma variant: Action × InteractionState. Hover / pressed / focus are forced with `data-state`.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={playCss} aliases={PLAY_ALIASES} />
}`,...p.parameters?.docs?.source},description:{story:"Properties and tokens read from PlayButton.module.css, resolved for the active theme.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <PlayButtonInspect />
}`,...u.parameters?.docs?.source},description:{story:"Pick action, state and size; see real measurements and the tokens that apply. Hover a token to locate it.",...u.parameters?.docs?.description}}};const Y=["Default","Actions","Sizes","Toggle","IsDisabled","States","Tokens","Inspect"],W=Object.freeze(Object.defineProperty({__proto__:null,Actions:i,Default:y,Inspect:u,IsDisabled:g,Sizes:l,States:c,Toggle:d,Tokens:p,__namedExportsOrder:Y,default:E},Symbol.toStringTag,{value:"Module"}));export{i as A,y as D,g as I,W as P,l as S,d as T,u as a,c as b,p as c};
