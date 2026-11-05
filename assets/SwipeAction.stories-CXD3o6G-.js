import{r as p,j as e}from"./iframe-BaE-r_tL.js";import{a as S,b as k}from"./Icon-D8yVe6yW.js";import{S as A}from"./ShowcaseBox-CvpXiMzv.js";import{C as j}from"./CssTokens-DoMUOAyj.js";import{I as f,C}from"./ComponentInspector-aQuGSI0z.js";const b=`/* ==============================================
 * SwipeAction — Daily Wire Design System
 * Figma: Swipe Action (99:8040) in Section 1 (13898:9752).
 * Legacy component: Figma binds [Old] 2.0 variables (Background/Accent) and raw
 * text values; each one is mapped to the closest token in tokens.css.
 * Figma draws only the default state; hover / pressed / focus / disabled use the
 * brand-bold family, like Button's brand variant.
 * ============================================== */

.swipeAction {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* Figma 92×92 fixed; no 92px token, closest is 96px */
  min-width: var(--primitive-dimension-dimension-24);
  min-height: var(--primitive-dimension-dimension-24);
  padding: var(--spacing-none);
  border: none;
  border-radius: var(--border-radius-none);
  cursor: pointer;
  /* Figma: Libre Franklin SemiBold 12 / 130% / 4%, caps → label/600/sm metrics */
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-xs);
  font-weight: var(--Semibold);
  line-height: var(--line-height-120);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  text-align: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color var(--duration-fast) var(--easing-ease-out),
    color var(--duration-fast) var(--easing-ease-out);

  /* Background/Accent (#db3d3b) → brand bold */
  --sa-bg: var(--color-background-brand-bold-default);
  --sa-text: var(--color-text-always-light);
  background-color: var(--sa-bg);
  color: var(--sa-text);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

.swipeAction:hover:not(:disabled),
.swipeAction[data-state='hover'] {
  --sa-bg: var(--color-background-brand-bold-hovered);
}

.swipeAction:active:not(:disabled),
.swipeAction[data-state='pressed'] {
  --sa-bg: var(--color-background-brand-bold-pressed);
}

.swipeAction:disabled {
  --sa-bg: var(--color-background-brand-bold-disabled);
  --sa-text: var(--color-text-neutral-bold-disabled);
  cursor: not-allowed;
}

/* ── Focus ring: same ring as Button ── */

.swipeAction:focus-visible,
.swipeAction[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

.content {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.label {
  text-transform: uppercase;
}

@media (prefers-reduced-motion: reduce) {
  .swipeAction {
    transition: none;
  }
}
`,T="_swipeAction_xgurx_10",R="_content_xgurx_69",I="_label_xgurx_76",v={swipeAction:T,content:R,label:I},n=p.forwardRef(function({label:l="Remove",icon:d,disabled:u=!1,className:x,...y},w){return e.jsx("button",{ref:w,type:"button",className:[v.swipeAction,x].filter(Boolean).join(" "),disabled:u,"aria-disabled":u||void 0,...y,children:e.jsxs("span",{className:v.content,children:[d&&e.jsx(S,{name:d,size:"lg"}),e.jsx("span",{className:v.label,children:l})]})})});n.__docgenInfo={description:`The action revealed behind a list row when it is swiped (e.g. "Remove").
Only the button: the swipe gesture belongs to the list that hosts it.`,methods:[],displayName:"SwipeAction",props:{label:{required:!1,tsType:{name:"string"},description:'Action text (Figma layer "Action Copy"); rendered in caps',defaultValue:{value:"'Remove'",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"keyof typeof ICONS",elements:[{name:"literal",value:"'adjustments-horizontal'"},{name:"literal",value:"'albums'"},{name:"literal",value:"'alert-circle'"},{name:"literal",value:"'arrow-back-up'"},{name:"literal",value:"'arrow-bar-to-down'"},{name:"literal",value:"'arrow-down'"},{name:"literal",value:"'arrow-left'"},{name:"literal",value:"'arrow-narrow-left'"},{name:"literal",value:"'arrow-narrow-right'"},{name:"literal",value:"'arrow-right'"},{name:"literal",value:"'arrow-up'"},{name:"literal",value:"'arrows-diagonal'"},{name:"literal",value:"'audio'"},{name:"literal",value:"'badge-cc-filled'"},{name:"literal",value:"'badge-cc-outline'"},{name:"literal",value:"'bell'"},{name:"literal",value:"'bell-checked'"},{name:"literal",value:"'bell-minus'"},{name:"literal",value:"'bell-off'"},{name:"literal",value:"'bookmark-filled'"},{name:"literal",value:"'bookmark-outline'"},{name:"literal",value:"'box-multiple'"},{name:"literal",value:"'brand-safari'"},{name:"literal",value:"'brand-youtube'"},{name:"literal",value:"'calendar-dollar'"},{name:"literal",value:"'calendar-up'"},{name:"literal",value:"'cast'"},{name:"literal",value:"'check'"},{name:"literal",value:"'check-small'"},{name:"literal",value:"'chevron-down'"},{name:"literal",value:"'chevron-left'"},{name:"literal",value:"'chevron-right'"},{name:"literal",value:"'chevron-up'"},{name:"literal",value:"'circle-check'"},{name:"literal",value:"'clock-exclamation'"},{name:"literal",value:"'cloud-off'"},{name:"literal",value:"'credit-card'"},{name:"literal",value:"'device-speaker'"},{name:"literal",value:"'device-tv-old'"},{name:"literal",value:"'dots-vertical'"},{name:"literal",value:"'download'"},{name:"literal",value:"'download-done'"},{name:"literal",value:"'download-completed'"},{name:"literal",value:"'download-starting-ring'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'external-link'"},{name:"literal",value:"'eye'"},{name:"literal",value:"'eye-off'"},{name:"literal",value:"'eye-search'"},{name:"literal",value:"'file-description'"},{name:"literal",value:"'file-info'"},{name:"literal",value:"'file-upload'"},{name:"literal",value:"'gavel'"},{name:"literal",value:"'grip-vertical'"},{name:"literal",value:"'headphones'"},{name:"literal",value:"'headphones-off'"},{name:"literal",value:"'heart-filled'"},{name:"literal",value:"'heart-outline'"},{name:"literal",value:"'help-octagon'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'home-1'"},{name:"literal",value:"'hourglass-empty'"},{name:"literal",value:"'icon-skip-15-back'"},{name:"literal",value:"'icon-skip-15-forward'"},{name:"literal",value:"'info-circle'"},{name:"literal",value:"'license'"},{name:"literal",value:"'loader'"},{name:"literal",value:"'lock'"},{name:"literal",value:"'mail'"},{name:"literal",value:"'menu-2'"},{name:"literal",value:"'message-circle'"},{name:"literal",value:"'messages'"},{name:"literal",value:"'microphone'"},{name:"literal",value:"'movie'"},{name:"literal",value:"'photo-plus'"},{name:"literal",value:"'pinned'"},{name:"literal",value:"'pinned-filled'"},{name:"literal",value:"'player-pause'"},{name:"literal",value:"'player-play-filled'"},{name:"literal",value:"'player-play-outline'"},{name:"literal",value:"'player-skip-back-filled'"},{name:"literal",value:"'player-skip-back-outline'"},{name:"literal",value:"'player-skip-forward-filled'"},{name:"literal",value:"'player-skip-forward-outline'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'plus-tv'"},{name:"literal",value:"'rating-18-plus'"},{name:"literal",value:"'re-download'"},{name:"literal",value:"'receipt-2'"},{name:"literal",value:"'reduce-viewport'"},{name:"literal",value:"'refresh'"},{name:"literal",value:"'rosette-discount-check'"},{name:"literal",value:"'ruler'"},{name:"literal",value:"'search'"},{name:"literal",value:"'server-2'"},{name:"literal",value:"'settings'"},{name:"literal",value:"'share-2'"},{name:"literal",value:"'shareplay'"},{name:"literal",value:"'sort-descending'"},{name:"literal",value:"'square'"},{name:"literal",value:"'square-plus'"},{name:"literal",value:"'star-filled'"},{name:"literal",value:"'star-half'"},{name:"literal",value:"'star-outline'"},{name:"literal",value:"'thumb-down'"},{name:"literal",value:"'thumb-up'"},{name:"literal",value:"'trailer-play'"},{name:"literal",value:"'trash'"},{name:"literal",value:"'user'"},{name:"literal",value:"'user-share'"},{name:"literal",value:"'users-group'"},{name:"literal",value:"'video'"},{name:"literal",value:"'video-off'"},{name:"literal",value:"'video-plus'"},{name:"literal",value:"'volume'"},{name:"literal",value:"'volume-2'"},{name:"literal",value:"'volume-3'"},{name:"literal",value:"'volume-off'"},{name:"literal",value:"'wifi-off'"},{name:"literal",value:"'world-off'"},{name:"literal",value:"'x'"},{name:"literal",value:"'zoom-reset'"}]},description:"Optional glyph stacked above the label"},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const z=Object.keys(k).sort((a,l)=>a.localeCompare(l)),_={component:n,title:"Components/SwipeAction",parameters:{layout:"centered"},argTypes:{label:{control:"text"},icon:{control:"select",options:z},disabled:{control:"boolean"}},args:{label:"Remove",disabled:!1}},c={},t={render:()=>e.jsxs(A,{children:[e.jsx(n,{label:"Remove"}),e.jsx(n,{label:"Remove",icon:"trash"}),e.jsx(n,{label:"Save",icon:"bookmark-outline"})]})},r={parameters:{layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"stretch",maxWidth:420,overflow:"hidden",borderRadius:"var(--border-radius-md)",backgroundColor:"var(--color-background-neutral-bold-default)",border:"var(--border-default) solid var(--color-border-neutral-subtle-default)"},children:[e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:"var(--spacing-xs)",padding:"var(--spacing-xl)",fontFamily:"var(--default), sans-serif",color:"var(--color-text-neutral-bold-default)",backgroundColor:"var(--color-background-neutral-subtle-default)"},children:[e.jsx("strong",{style:{fontSize:"var(--font-size-md)"},children:"The Ben Shapiro Show"}),e.jsx("span",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-text-neutral-subtlest-default)"},children:"Ep. 1987 · 54 min"})]}),e.jsx(n,{label:"Remove"})]})},m=["default","hover","pressed","focus","disabled"],g=["hover","pressed","focus"];function E({children:a}){return e.jsx(e.Fragment,{children:a})}function F({children:a}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a})}const o={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${m.length}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),m.map(a=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:a},a)),["label","icon + label"].map(a=>e.jsxs(E,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:a}),m.map(l=>e.jsx(F,{children:e.jsx(n,{label:"Remove",icon:a==="icon + label"?"trash":void 0,disabled:l==="disabled",...g.includes(l)?{"data-state":l}:{}})},l))]},a))]})},h={"--sa-bg":"background","--sa-text":"color"},i={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(j,{css:b,aliases:h})},O=["label","icon + label"];function B(){const[a,l]=p.useState("default"),[d,u]=p.useState("label");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(f,{label:"State",options:m,value:a,onChange:l}),e.jsx(f,{label:"Content",options:O,value:d,onChange:u}),e.jsx(C,{css:b,aliases:h,group:"swipe action",state:a,children:e.jsx(n,{label:"Remove",icon:d==="icon + label"?"trash":void 0,disabled:a==="disabled",...g.includes(a)?{"data-state":a}:{}})})]})}const s={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(B,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <SwipeAction label="Remove" />
      <SwipeAction label="Remove" icon="trash" />
      <SwipeAction label="Save" icon="bookmark-outline" />
    </ShowcaseBox>
}`,...t.parameters?.docs?.source},description:{story:"Label only (Figma) and with an optional icon stacked above the label.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'stretch',
    maxWidth: 420,
    overflow: 'hidden',
    borderRadius: 'var(--border-radius-md)',
    backgroundColor: 'var(--color-background-neutral-bold-default)',
    border: 'var(--border-default) solid var(--color-border-neutral-subtle-default)'
  }}>
      <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--spacing-xs)',
      padding: 'var(--spacing-xl)',
      fontFamily: 'var(--default), sans-serif',
      color: 'var(--color-text-neutral-bold-default)',
      backgroundColor: 'var(--color-background-neutral-subtle-default)'
    }}>
        <strong style={{
        fontSize: 'var(--font-size-md)'
      }}>The Ben Shapiro Show</strong>
        <span style={{
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-neutral-subtlest-default)'
      }}>Ep. 1987 · 54 min</span>
      </div>
      <SwipeAction label="Remove" />
    </div>
}`,...r.parameters?.docs?.source},description:{story:"The action as it appears when a list row is swiped to the left (gesture not included).",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      {(['label', 'icon + label'] as const).map(content => <Row key={content}>
          <div style={{
        textTransform: 'capitalize'
      }}>{content}</div>
          {STATES.map(s => <Cell key={s}>
              <SwipeAction label="Remove" icon={content === 'icon + label' ? 'trash' : undefined} disabled={s === 'disabled'} {...FORCED.includes(s) ? {
          'data-state': s
        } : {}} />
            </Cell>)}
        </Row>)}
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Every state. Figma only draws the default; hover / pressed / focus / disabled come from the\nbrand-bold token family. Hover / pressed / focus are forced with `data-state`.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={swipeActionCss} aliases={SWIPE_ALIASES} />
}`,...i.parameters?.docs?.source},description:{story:"Properties and tokens read from SwipeAction.module.css, resolved for the active theme.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <SwipeActionInspect />
}`,...s.parameters?.docs?.source},description:{story:"Pick state and content; see real measurements and the tokens that apply. Hover a token to locate it.",...s.parameters?.docs?.description}}};const D=["Default","Content","RevealedInRow","States","Tokens","Inspect"],H=Object.freeze(Object.defineProperty({__proto__:null,Content:t,Default:c,Inspect:s,RevealedInRow:r,States:o,Tokens:i,__namedExportsOrder:D,default:_},Symbol.toStringTag,{value:"Module"}));export{t as C,c as D,s as I,r as R,H as S,i as T,o as a};
