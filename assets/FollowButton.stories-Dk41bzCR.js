import{r,j as e}from"./iframe-BaE-r_tL.js";import{S as k}from"./ShowcaseBox-CvpXiMzv.js";import{C as q}from"./CssTokens-DoMUOAyj.js";import{I as F,C as V}from"./ComponentInspector-aQuGSI0z.js";import Z from"./check-small-C4AZoZXL.js";const E=`/* ==============================================
 * FollowButton — Daily Wire Design System
 * Figma: Follow (395:16301), Section 1 (13898:9752), docs frame "Follow - Unfollow".
 * The Figma set uses legacy [Old] variables and has no hover / pressed / focus / disabled
 * variants: interaction colors come from the same semantic token families.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base (Following?=No) ────────────────────── */

.followButton {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: var(--spacing-none);
  border-style: none;
  /* only shapes the focus ring; the Figma text button has no surface */
  border-radius: var(--border-radius-sm);
  gap: var(--spacing-xs);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Semibold);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  white-space: nowrap;
  transition: color var(--duration-fast) var(--easing-ease-out);

  background-color: transparent;
  color: var(--fb-text);

  --fb-text: var(--color-text-neutral-bold-default);
}

/* Touch target: grows the hit area to --touch-target-min without changing the drawn box */
.followButton::after {
  content: '';
  position: absolute;
  inset: min(var(--spacing-none), calc((100% - var(--touch-target-min)) / 2));
}

/* ── Sizes ───────────────────────────────────── */

/* Small: body/600/sm (Follow) · body/400/sm (Following) */
.followButton[data-size='sm'] {
  line-height: var(--line-height-150);
}

/* Big: label/600/md, uppercase */
.followButton[data-size='lg'] {
  line-height: var(--line-height-100);
  text-transform: uppercase;
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

/* ── Follow: text/neutral/bold/* ─────────────── */

.followButton:hover:not(:disabled),
.followButton[data-state='hover'] {
  --fb-text: var(--color-text-neutral-bold-hovered);
}
.followButton:active:not(:disabled),
.followButton[data-state='pressed'] {
  --fb-text: var(--color-text-neutral-bold-pressed);
}
.followButton:disabled {
  --fb-text: var(--color-text-neutral-bold-disabled);
}

/* ── Following: text/neutral/subtlest/* + icon/neutral/subtlest/* ── */

.followButton[aria-pressed='true'] {
  --fb-text: var(--color-text-neutral-subtlest-default);
  --fb-icon: var(--color-icon-neutral-subtlest-default);
}
.followButton[aria-pressed='true']:hover:not(:disabled),
.followButton[aria-pressed='true'][data-state='hover'] {
  --fb-text: var(--color-text-neutral-subtlest-hovered);
  --fb-icon: var(--color-icon-neutral-subtlest-hovered);
}
.followButton[aria-pressed='true']:active:not(:disabled),
.followButton[aria-pressed='true'][data-state='pressed'] {
  --fb-text: var(--color-text-neutral-subtlest-pressed);
  --fb-icon: var(--color-icon-neutral-subtlest-pressed);
}
.followButton[aria-pressed='true']:disabled {
  --fb-text: var(--color-text-neutral-subtlest-disabled);
  --fb-icon: var(--color-icon-neutral-subtlest-disabled);
}
.followButton[data-size='sm'][aria-pressed='true'] {
  font-weight: var(--Regular);
}

/* ── Focus ring (same as Button) ─────────────── */

.followButton:focus-visible,
.followButton[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Disabled ────────────────────────────────── */

.followButton:disabled {
  cursor: not-allowed;
}

.content {
  display: inline-flex;
  align-items: center;
  gap: inherit;
}

.check {
  flex-shrink: 0;
  width: var(--size-sm);
  height: var(--size-sm);
  color: var(--fb-icon);
  transition: color var(--duration-fast) var(--easing-ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .followButton,
  .check {
    transition: none;
  }
}
`,$="_followButton_10dwg_11",P="_content_10dwg_112",M="_check_10dwg_118",B={followButton:$,content:P,check:M},w=["sm","lg"],a=r.forwardRef(function({size:n="sm",label:o="Follow",selectedLabel:s="Following",showCheck:b=!0,selected:x,defaultSelected:S=!1,onSelectedChange:T,disabled:l=!1,onClick:z,className:N,...H},W){const[R,D]=r.useState(S),j=x!==void 0,y=j?x:R,U=_=>{if(z?.(_),_.defaultPrevented||l)return;const O=!y;j||D(O),T?.(O)};return e.jsx("button",{ref:W,type:"button",className:[B.followButton,N].filter(Boolean).join(" "),"data-size":n,"aria-pressed":y,disabled:l,"aria-disabled":l||void 0,onClick:U,...H,children:e.jsxs("span",{className:B.content,children:[y&&b&&e.jsx(Z,{className:B.check,"aria-hidden":"true",focusable:"false"}),e.jsx("span",{className:B.label,children:y?s:o})]})})});a.__docgenInfo={description:"",methods:[],displayName:"FollowButton",props:{size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof FOLLOW_BUTTON_SIZES)[number]"},description:"Figma `Size`: sm = Small, lg = Big",defaultValue:{value:"'sm'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label while not following",defaultValue:{value:"'Follow'",computed:!1}},selectedLabel:{required:!1,tsType:{name:"string"},description:"Label while following",defaultValue:{value:"'Following'",computed:!1}},showCheck:{required:!1,tsType:{name:"boolean"},description:"Figma `Show Check`: check glyph before the label while following",defaultValue:{value:"true",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Controlled following state (Figma `Following?=Yes`)"},defaultSelected:{required:!1,tsType:{name:"boolean"},description:"Initial following state when uncontrolled",defaultValue:{value:"false",computed:!1}},onSelectedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:"Called with the next state on every toggle"},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const{expect:i,fn:K,userEvent:I,within:Y}=__STORYBOOK_MODULE_TEST__,G={component:a,title:"Components/FollowButton",parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio",options:[...w]},label:{control:"text"},selectedLabel:{control:"text"},showCheck:{control:"boolean"},defaultSelected:{control:"boolean"},selected:{control:!1},disabled:{control:"boolean"}},args:{size:"sm",label:"Follow",selectedLabel:"Following",showCheck:!0,defaultSelected:!1,disabled:!1,onSelectedChange:K()}},c={},d={render:function(n){const[o,s]=r.useState(!1);return e.jsxs(k,{direction:"column",children:[e.jsx(a,{...n,selected:o,onSelectedChange:s}),e.jsxs("span",{style:{fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:["following: ",String(o)]})]})}},u={render:()=>e.jsx(k,{style:{gap:32},children:w.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[e.jsx(a,{size:t}),e.jsx(a,{size:t,defaultSelected:!0})]},t))})},p={render:()=>e.jsx(k,{style:{gap:32},children:w.map(t=>e.jsx(a,{size:t,defaultSelected:!0,showCheck:!1},t))})},v={render:()=>e.jsx(k,{style:{gap:32},children:w.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:32},children:[e.jsx(a,{size:t,disabled:!0}),e.jsx(a,{size:t,defaultSelected:!0,disabled:!0})]},t))})},f={play:async({canvasElement:t,args:n})=>{const o=Y(t).getByRole("button",{name:"Follow"});await i(o).toHaveAttribute("aria-pressed","false"),await I.click(o),await i(o).toHaveAttribute("aria-pressed","true"),await i(o).toHaveAccessibleName("Following"),await i(n.onSelectedChange).toHaveBeenLastCalledWith(!0),await I.click(o),await i(o).toHaveAccessibleName("Follow"),await i(n.onSelectedChange).toHaveBeenLastCalledWith(!1)}},C=["default","hover","pressed","focus","disabled"],L=["hover","pressed","focus"];function Q({children:t}){return e.jsx(e.Fragment,{children:t})}function J({children:t}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t})}const m={parameters:{layout:"fullscreen"},argTypes:{showCheck:{control:"boolean"}},args:{showCheck:!0},render:({showCheck:t})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${C.length}, 1fr)`,gap:"24px 16px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),C.map(n=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:n},n)),[!1,!0].map(n=>w.map(o=>e.jsxs(Q,{children:[e.jsxs("div",{children:[n?"Following":"Follow"," · ",o]}),C.map(s=>e.jsx(J,{children:e.jsx(a,{size:o,selected:n,showCheck:t,disabled:s==="disabled",...L.includes(s)?{"data-state":s}:{}})},s))]},`${n}-${o}`)))]})},A={"--fb-text":"color (label)","--fb-icon":"color (icon)"},X=E.replace(/\[aria-pressed='true'\]/g,"[data-type='following']"),g={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(q,{css:X,aliases:A})},ee=["no","yes"],te=["shown","hidden"];function oe(){const[t,n]=r.useState("yes"),[o,s]=r.useState("default"),[b,x]=r.useState("sm"),[S,T]=r.useState("shown"),l=t==="yes",z=E.replace(/\[aria-pressed='true'\]/g,l?"":"[data-type='other']");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(F,{label:"Following",options:ee,value:t,onChange:n}),e.jsx(F,{label:"State",options:C,value:o,onChange:s}),e.jsx(F,{label:"Size",options:w,value:b,onChange:x}),e.jsx(F,{label:"Check",options:te,value:S,onChange:T}),e.jsx(V,{css:z,aliases:A,group:l?"following":"follow",state:o,size:b,children:e.jsx(a,{size:b,selected:l,showCheck:S==="shown",disabled:o==="disabled",...L.includes(o)?{"data-state":o}:{}})})]})}const h={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(oe,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source},description:{story:"Uncontrolled: click to follow / unfollow.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [following, setFollowing] = useState(false);
    return <ShowcaseBox direction="column">
        <FollowButton {...args} selected={following} onSelectedChange={setFollowing} />
        <span style={{
        fontSize: 12,
        color: 'var(--color-text-neutral-subtlest-default)'
      }}>following: {String(following)}</span>
      </ShowcaseBox>;
  }
}`,...d.parameters?.docs?.source},description:{story:"Controlled with `selected` + `onSelectedChange`.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox style={{
    gap: 32
  }}>
      {FOLLOW_BUTTON_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }}>
          <FollowButton size={size} />
          <FollowButton size={size} defaultSelected />
        </div>)}
    </ShowcaseBox>
}`,...u.parameters?.docs?.source},description:{story:"Figma `Size`: Small (sentence case) and Big (uppercase), each not following / following — same order as the Figma set.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox style={{
    gap: 32
  }}>
      {FOLLOW_BUTTON_SIZES.map(size => <FollowButton key={size} size={size} defaultSelected showCheck={false} />)}
    </ShowcaseBox>
}`,...p.parameters?.docs?.source},description:{story:"Figma `Show Check` off: “Following” without the check glyph.",...p.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox style={{
    gap: 32
  }}>
      {FOLLOW_BUTTON_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }}>
          <FollowButton size={size} disabled />
          <FollowButton size={size} defaultSelected disabled />
        </div>)}
    </ShowcaseBox>
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'Follow'
    });
    await expect(button).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-pressed', 'true');
    await expect(button).toHaveAccessibleName('Following');
    await expect(args.onSelectedChange).toHaveBeenLastCalledWith(true);
    await userEvent.click(button);
    await expect(button).toHaveAccessibleName('Follow');
    await expect(args.onSelectedChange).toHaveBeenLastCalledWith(false);
  }
}`,...f.parameters?.docs?.source},description:{story:"Clicking swaps the label, toggles aria-pressed and reports the next value.",...f.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    showCheck: {
      control: 'boolean'
    }
  },
  args: {
    showCheck: true
  },
  render: ({
    showCheck
  }) => <div style={{
    display: 'grid',
    gridTemplateColumns: \`auto repeat(\${STATES.length}, 1fr)\`,
    gap: '24px 16px',
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
      {[false, true].map(sel => FOLLOW_BUTTON_SIZES.map(size => <Row key={\`\${sel}-\${size}\`}>
            <div>{sel ? 'Following' : 'Follow'} · {size}</div>
            {STATES.map(s => <Cell key={s}>
                <FollowButton size={size} selected={sel} showCheck={showCheck} disabled={s === 'disabled'} {...FORCED.includes(s) ? {
          'data-state': s
        } : {}} />
              </Cell>)}
          </Row>))}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Following? × Size in every state. Figma only draws the default state: hover / pressed / disabled\ncome from the same token families, focus is the shared ring. Hover / pressed / focus are forced with `data-state`.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={tokensCss} aliases={ALIASES} />
}`,...g.parameters?.docs?.source},description:{story:"Properties and tokens read from FollowButton.module.css, resolved for the active theme.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <FollowInspect />
}`,...h.parameters?.docs?.source},description:{story:"Pick following, state, size and check; see real measurements and the tokens that apply. Hover a token to locate it.",...h.parameters?.docs?.description}}};const ne=["Default","Controlled","Sizes","WithoutCheck","IsDisabled","Toggle","States","Tokens","Inspect"],ce=Object.freeze(Object.defineProperty({__proto__:null,Controlled:d,Default:c,Inspect:h,IsDisabled:v,Sizes:u,States:m,Toggle:f,Tokens:g,WithoutCheck:p,__namedExportsOrder:ne,default:G},Symbol.toStringTag,{value:"Module"}));export{d as C,c as D,ce as F,h as I,u as S,g as T,p as W,m as a,v as b};
