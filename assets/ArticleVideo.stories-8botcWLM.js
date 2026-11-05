import{j as e,r as y}from"./iframe-BaE-r_tL.js";import{C as F}from"./CssTokens-DoMUOAyj.js";import{I as S,C as k}from"./ComponentInspector-aQuGSI0z.js";import{A as _,a as r}from"./ArticleVideo-DY64P19u.js";import{V as j}from"./index-DTA9Iiqt.js";const w=`/* ==============================================
 * ArticleVideo — Daily Wire Design System
 * Figma: Video Article Resource (9149:64325), page "↳ Content", section "Article".
 * VideoState Played | Paused × InteractionState Default | Hovered × AudioState Muted | Unmuted.
 * Native <video> (Figma video fill, crop) + two Icon Buttons translucid · lg:
 * mute toggle top-right (always), play / pause centered (Hovered).
 * All values reference tokens.css custom properties. Aspect ratios are the Figma instance
 * ratios (no ratio tokens exist).
 * ============================================== */

/* ── Root ────────────────────────────────────── */

.root {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  isolation: isolate;
  border-radius: var(--border-radius-none);
  /* Not drawn in Figma (the video covers it): dark letterbox while the poster loads */
  background-color: var(--color-background-always-dark);
}

/* ── Aspect (Figma instance sizes) ───────────── */

.root[data-aspect='16/9'] {
  aspect-ratio: 16 / 9;
}
.root[data-aspect='1/1'] {
  aspect-ratio: 1 / 1;
}
.root[data-aspect='9/16'] {
  aspect-ratio: 9 / 16;
}
.root[data-aspect='2/3'] {
  aspect-ratio: 2 / 3;
}
.root[data-aspect='fill'] {
  height: 100%;
}

/* Figma card instances override the corner radius to border-radius-md */
.root[data-rounded] {
  border-radius: var(--border-radius-md);
}

/* ── Video (Figma fill: video, crop) ─────────── */

.video {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

/* ── Mute toggle: top-right, spacing-xl inset (Figma constraints right / top) ── */

.muteSlot {
  position: absolute;
  z-index: 1;
  top: var(--spacing-xl);
  inset-inline-end: var(--spacing-xl);
  display: flex;
}

/* ── Play / pause: centered, shown in InteractionState=Hovered ── */

.playSlot {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  /* Figma: hover dissolve 600ms ease-out; closest duration token used */
  transition: opacity var(--duration-slower) var(--easing-ease-out);
}

.root:hover .playSlot,
.root:has(:focus-visible) .playSlot,
.root[data-state='hover'] .playSlot {
  opacity: 1;
  pointer-events: auto;
}

/* Touch screens have no hover: keep the play button visible while paused */
@media (hover: none) {
  .root[data-variant='paused'] .playSlot {
    opacity: 1;
    pointer-events: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .playSlot {
    transition: none;
  }
}
`,{fn:A}=__STORYBOOK_MODULE_TEST__,x={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},I="864 / 547";function v({width:t,ratio:a=I,label:s,children:o}){return e.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[s&&e.jsx("div",{style:x,children:s}),e.jsx("div",{style:{width:t,aspectRatio:a},children:o})]})}const P={component:r,title:"Components/ArticleVideo",parameters:{layout:"padded"},argTypes:{src:{control:"text"},poster:{control:"text"},label:{control:"text"},aspect:{control:"select",options:[..._]},rounded:{control:"boolean"},defaultMuted:{control:"boolean"},autoPlay:{control:"boolean"},loop:{control:"boolean"},interactionState:{control:"inline-radio",options:["default","hovered"]},muteLabel:{control:"text"},playLabel:{control:"text"},pauseLabel:{control:"text"}},args:{poster:j,label:"Explosions light up the skyline",aspect:"16/9",rounded:!1,defaultMuted:!0,autoPlay:!1,interactionState:"default",onMutedChange:A(),onPlayingChange:A()},render:t=>e.jsx("div",{style:{maxWidth:640},children:e.jsx(r,{...t})})},i={},d={render:t=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:[e.jsx(v,{width:432,label:"Paused · hovered",children:e.jsx(r,{...t,aspect:"fill",playing:!1,interactionState:"hovered"})}),e.jsx(v,{width:432,label:"Played · hovered",children:e.jsx(r,{...t,aspect:"fill",playing:!0,interactionState:"hovered"})})]})},l={render:t=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:[e.jsx(v,{width:432,label:"Muted (aria-pressed=true)",children:e.jsx(r,{...t,aspect:"fill",defaultMuted:!0})}),e.jsx(v,{width:432,label:"Unmuted (aria-pressed=false)",children:e.jsx(r,{...t,aspect:"fill",defaultMuted:!1})})]})},T={"16/9":432,"1/1":280,"9/16":200,"2/3":240},c={render:t=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:24},children:[Object.keys(T).map(a=>e.jsxs("div",{style:{display:"grid",gap:8,width:T[a]},children:[e.jsx("div",{style:x,children:a}),e.jsx(r,{...t,aspect:a})]},a)),e.jsx(v,{width:320,ratio:"393 / 470",label:"fill (393 × 470 slide)",children:e.jsx(r,{...t,aspect:"fill"})})]})},p={args:{rounded:!0}};function O(t){const[a,s]=y.useState(!0),[o,f]=y.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:640},children:[e.jsx(r,{...t,muted:a,onMutedChange:n=>{s(n),t.onMutedChange?.(n)},playing:o,onPlayingChange:n=>{f(n),t.onPlayingChange?.(n)}}),e.jsxs("div",{style:x,children:["muted: ",e.jsx("b",{children:String(a)})," · playing: ",e.jsx("b",{children:String(o)})," (no sample video: a play request reports back `false`)"]})]})}const u={render:t=>e.jsx(O,{...t})},C=["paused","played"],V=["muted","unmuted"],b=["default","hovered"],m={parameters:{layout:"fullscreen"},render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(2, 360px)",gap:"20px 16px",padding:24,alignItems:"center",...x},children:[e.jsx("div",{}),b.map(a=>e.jsx("div",{style:{textTransform:"capitalize"},children:a},a)),C.map(a=>V.map(s=>e.jsxs(R,{children:[e.jsxs("div",{style:{textTransform:"capitalize"},children:[a," · ",s]}),b.map(o=>e.jsx("div",{style:{width:360,aspectRatio:I},children:e.jsx(r,{...t,aspect:"fill",playing:a==="played",muted:s==="muted",interactionState:o})},o))]},`${a}-${s}`)))]})};function R({children:t}){return e.jsx(e.Fragment,{children:t})}const E={},g={tags:["!test"],parameters:{controls:{disable:!0}},render:()=>e.jsx(F,{css:w,aliases:E})};function M(){const[t,a]=y.useState("paused"),[s,o]=y.useState("hovered"),[f,n]=y.useState("muted");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(S,{label:"Video",options:C,value:t,onChange:a}),e.jsx(S,{label:"State",options:b,value:s,onChange:o}),e.jsx(S,{label:"Audio",options:V,value:f,onChange:n}),e.jsx(k,{css:w,aliases:E,group:t,state:s==="hovered"?"hover":"default",scale:1,children:e.jsx(r,{style:{width:432,height:273.5},aspect:"fill",poster:j,label:"Explosions light up the skyline",playing:t==="played",muted:f==="muted",interactionState:s})})]})}const h={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(M,{})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:"Poster only (no sample video file): the mute toggle works; play has no source to start. Hover to see the play button.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24
  }}>
      <Frame width={432} label="Paused · hovered">
        <ArticleVideo {...args} aspect="fill" playing={false} interactionState="hovered" />
      </Frame>
      <Frame width={432} label="Played · hovered">
        <ArticleVideo {...args} aspect="fill" playing interactionState="hovered" />
      </Frame>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"Figma `VideoState`: the centered button shows play while paused and pause while playing (forced hovered here).",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24
  }}>
      <Frame width={432} label="Muted (aria-pressed=true)">
        <ArticleVideo {...args} aspect="fill" defaultMuted />
      </Frame>
      <Frame width={432} label="Unmuted (aria-pressed=false)">
        <ArticleVideo {...args} aspect="fill" defaultMuted={false} />
      </Frame>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Figma `AudioState`: the mute toggle shows `volume-3` when muted and `volume` when sound is on.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: 24
  }}>
      {(Object.keys(ASPECT_WIDTH) as (keyof typeof ASPECT_WIDTH)[]).map(aspect => <div key={aspect} style={{
      display: 'grid',
      gap: 8,
      width: ASPECT_WIDTH[aspect]
    }}>
          <div style={muted}>{aspect}</div>
          <ArticleVideo {...args} aspect={aspect} />
        </div>)}
      <Frame width={320} ratio="393 / 470" label="fill (393 × 470 slide)">
        <ArticleVideo {...args} aspect="fill" />
      </Frame>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Ratios of the Figma instances (Card Feed, Card Feed Ad). `fill` follows the parent box, as in Live Updates.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...p.parameters?.docs?.source},description:{story:"`rounded` applies `--border-radius-md`, as the Figma card instances do.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledDemo {...args} />
}`,...u.parameters?.docs?.source},description:{story:"`muted` + `onMutedChange` and `playing` + `onPlayingChange` hand the state to the parent.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto repeat(2, 360px)',
    gap: '20px 16px',
    padding: 24,
    alignItems: 'center',
    ...muted
  }}>
      <div />
      {INTERACTION_STATES.map(s => <div key={s} style={{
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {VIDEO_STATES.map(video => AUDIO_STATES.map(audio => <Row key={\`\${video}-\${audio}\`}>
            <div style={{
        textTransform: 'capitalize'
      }}>
              {video} · {audio}
            </div>
            {INTERACTION_STATES.map(interaction => <div key={interaction} style={{
        width: 360,
        aspectRatio: FIGMA_RATIO
      }}>
                <ArticleVideo {...args} aspect="fill" playing={video === 'played'} muted={audio === 'muted'} interactionState={interaction} />
              </div>)}
          </Row>))}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"All 8 Figma variants: VideoState × AudioState (rows) × InteractionState (columns). Hovered is forced.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={articleVideoCss} aliases={ALIASES} />
}`,...g.parameters?.docs?.source},description:{story:"Properties and tokens read from ArticleVideo.module.css, resolved for the active theme. The nested IconButton documents its own tokens.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ArticleVideoInspect />
}`,...h.parameters?.docs?.source},description:{story:"Pick VideoState, InteractionState and AudioState; see real measurements and the tokens that apply.",...h.parameters?.docs?.description}}};const D=["Default","VideoState","AudioState","Aspects","Rounded","Controlled","States","Tokens","Inspect"],U=Object.freeze(Object.defineProperty({__proto__:null,Aspects:c,AudioState:l,Controlled:u,Default:i,Inspect:h,Rounded:p,States:m,Tokens:g,VideoState:d,__namedExportsOrder:D,default:P},Symbol.toStringTag,{value:"Module"}));export{U as A,u as C,i as D,h as I,p as R,m as S,g as T,d as V,l as a,c as b};
