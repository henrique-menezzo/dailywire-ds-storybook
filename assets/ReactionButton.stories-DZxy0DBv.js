import{r,j as e}from"./iframe-BaE-r_tL.js";import{S as E}from"./ShowcaseBox-CvpXiMzv.js";import{C as G}from"./CssTokens-DoMUOAyj.js";import{I as c,C as J}from"./ComponentInspector-aQuGSI0z.js";import{a as ee}from"./Icon-D8yVe6yW.js";const D=`/* ==============================================
 * ReactionButton — Daily Wire Design System
 * Figma: Reaction Button (7724:3624), docs frame 8349:32427.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.reactionButton {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-style: none;
  border-radius: var(--border-radius-full);
  padding: var(--spacing-md);
  gap: var(--spacing-sm);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  /* text style label/400/md */
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  transition:
    background-color var(--duration-fast) var(--easing-ease-out),
    box-shadow var(--duration-fast) var(--easing-ease-out),
    color var(--duration-fast) var(--easing-ease-out);

  background-color: var(--rb-bg, transparent);
  /* Figma strokes are drawn inside the box: an inset ring keeps ghost and outline at the Figma sizes */
  box-shadow: inset 0 0 0 var(--border-default) var(--rb-border, transparent);
  color: var(--rb-text);

  --rb-icon: var(--color-icon-neutral-bold-default);
  --rb-text: var(--color-text-neutral-bold-default);
}

/* Touch target: grows the hit area to --touch-target-min without changing the drawn box */
.reactionButton::after {
  content: '';
  position: absolute;
  inset: min(var(--spacing-none), calc((100% - var(--touch-target-min)) / 2));
}

/* Sizes only change the icon slot (20 / 24 / 32px, set in the TSX); padding, gap and text are shared */

/* ── Type: Outline ───────────────────────────── */

.reactionButton[data-variant='outline'] {
  padding: var(--spacing-md) var(--spacing-lg);
  --rb-border: var(--color-border-neutral-subtle-default);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

/* ── Interaction (shared by both types and both selection states) ── */

.reactionButton:focus-visible,
.reactionButton[data-state='focus'] {
  --rb-bg: var(--color-background-neutral-bold-default);
}
.reactionButton:hover:not(:disabled),
.reactionButton[data-state='hover'] {
  --rb-bg: var(--color-background-neutral-bold-hovered);
}
.reactionButton:active:not(:disabled),
.reactionButton[data-state='pressed'] {
  --rb-bg: var(--color-background-neutral-bold-pressed);
}
.reactionButton:disabled {
  --rb-icon: var(--color-icon-neutral-bold-disabled);
  --rb-text: var(--color-text-neutral-bold-disabled);
}
.reactionButton[data-variant='outline']:disabled {
  --rb-border: var(--color-border-neutral-bold-disabled);
}

/* ── Selected · like: filled heart in brand red ── */
/* selected · saved keeps the neutral icon colors; only the glyph switches to filled */

.reactionButton[data-reaction='like'][aria-pressed='true'] {
  --rb-icon: var(--color-icon-brand-bold-default);
}
.reactionButton[data-reaction='like'][aria-pressed='true']:hover:not(:disabled),
.reactionButton[data-reaction='like'][aria-pressed='true'][data-state='hover'] {
  --rb-icon: var(--color-icon-brand-bold-hovered);
}
.reactionButton[data-reaction='like'][aria-pressed='true']:active:not(:disabled),
.reactionButton[data-reaction='like'][aria-pressed='true'][data-state='pressed'] {
  --rb-icon: var(--color-icon-brand-bold-pressed);
}
.reactionButton[data-reaction='like'][aria-pressed='true']:disabled {
  --rb-icon: var(--color-icon-brand-bold-disabled);
}

/* ── Focus ring: Figma draws it as two drop shadows (2px surface gap + 2px info ring) ── */

.reactionButton:focus-visible,
.reactionButton[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Disabled ────────────────────────────────── */

.reactionButton:disabled {
  cursor: not-allowed;
}

.content {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: inherit;
}

.content > svg {
  flex-shrink: 0;
}

.label {
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .reactionButton {
    transition: none;
  }
}
`,te="_reactionButton_14g6z_9",ae="_content_14g6z_114",ne="_label_14g6z_125",O={reactionButton:te,content:ae,label:ne},x=["ghost","outline"],B=["sm","md","lg"],_=["like","saved"],se={sm:"md",md:"lg",lg:"xl"},oe={like:{unselected:"heart-outline",selected:"heart-filled"},saved:{unselected:"bookmark-outline",selected:"bookmark-filled"}},U={like:"Like",saved:"Save"},i=r.forwardRef(function({reaction:t="like",variant:a="ghost",size:o="sm",label:s,showLabel:y=!0,selected:l,defaultSelected:I=!1,onSelectedChange:T,disabled:k=!1,onClick:R,className:j,"aria-label":A,...P},W){const[Z,Y]=r.useState(I),z=l!==void 0,N=z?l:Z,$=y&&!!s,K=L=>{if(R?.(L),L.defaultPrevented||k)return;const F=!N;z||Y(F),T?.(F)},Q=oe[t][N?"selected":"unselected"],X=A??($?`${U[t]}, ${s}`:U[t]);return e.jsx("button",{ref:W,type:"button",className:[O.reactionButton,j].filter(Boolean).join(" "),"data-variant":a,"data-size":o,"data-reaction":t,"aria-pressed":N,"aria-label":X,disabled:k,"aria-disabled":k||void 0,onClick:K,...P,children:e.jsxs("span",{className:O.content,children:[e.jsx(ee,{name:Q,size:se[o],color:"var(--rb-icon)"}),$&&e.jsx("span",{className:O.label,children:s})]})})});i.__docgenInfo={description:"",methods:[],displayName:"ReactionButton",props:{reaction:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof REACTION_TYPES)[number]"},description:"Figma `reaction`: like (heart) or saved (bookmark)",defaultValue:{value:"'like'",computed:!1}},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof REACTION_BUTTON_VARIANTS)[number]"},description:"Figma `type`: ghost (no border) or outline",defaultValue:{value:"'ghost'",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof REACTION_BUTTON_SIZES)[number]"},description:"",defaultValue:{value:"'sm'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Figma `Label`: the count shown under the icon"},showLabel:{required:!1,tsType:{name:"boolean"},description:"Figma `Show label`",defaultValue:{value:"true",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Controlled selection (Figma `selectionState=selected`)"},defaultSelected:{required:!1,tsType:{name:"boolean"},description:"Initial selection when uncontrolled",defaultValue:{value:"false",computed:!1}},onSelectedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:"Called with the next selection on every toggle"},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const{expect:w,fn:re,userEvent:V,within:ie}=__STORYBOOK_MODULE_TEST__,le={component:i,title:"Components/ReactionButton",parameters:{layout:"centered"},argTypes:{reaction:{control:"inline-radio",options:[..._]},variant:{control:"inline-radio",options:[...x]},size:{control:"inline-radio",options:[...B]},label:{control:"text"},showLabel:{control:"boolean"},defaultSelected:{control:"boolean"},selected:{control:!1},disabled:{control:"boolean"}},args:{reaction:"like",variant:"ghost",size:"sm",label:"12",showLabel:!0,defaultSelected:!1,disabled:!1,onSelectedChange:re()}},d={},u={render:function(t){const[a,o]=r.useState(!1),[s,y]=r.useState(!0);return e.jsxs(E,{children:[e.jsx(i,{...t,reaction:"like",selected:a,onSelectedChange:o,label:String(12+Number(a))}),e.jsx(i,{...t,reaction:"saved",selected:s,onSelectedChange:y,label:String(4+Number(s))})]})}},H=({disabled:n})=>e.jsx(E,{direction:"column",style:{gap:24},children:x.map(t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:_.map(a=>[!1,!0].map(o=>e.jsx(i,{variant:t,reaction:a,defaultSelected:o,disabled:n,label:"12"},`${a}-${o}`)))},t))}),p={render:()=>e.jsx(H,{})},m={render:()=>e.jsx(E,{direction:"column",style:{gap:24},children:x.map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[B.map(t=>e.jsx(i,{variant:n,size:t,label:"12"},t)),B.map(t=>e.jsx(i,{variant:n,size:t,label:"12",defaultSelected:!0},`s-${t}`))]},n))})},b={render:()=>e.jsx(E,{children:x.map(n=>_.map(t=>e.jsx(i,{variant:n,reaction:t,showLabel:!1},`${n}-${t}`)))})},C={render:()=>e.jsx(H,{disabled:!0})},g={args:{reaction:"like",label:"12"},play:async({canvasElement:n,args:t})=>{const a=ie(n).getByRole("button",{name:"Like, 12"});await w(a).toHaveAttribute("aria-pressed","false"),await V.click(a),await w(a).toHaveAttribute("aria-pressed","true"),await w(t.onSelectedChange).toHaveBeenLastCalledWith(!0),await V.click(a),await w(a).toHaveAttribute("aria-pressed","false"),await w(t.onSelectedChange).toHaveBeenLastCalledWith(!1)}},f=["default","hover","pressed","focus","disabled"],M=["hover","pressed","focus"];function ce({children:n}){return e.jsx(e.Fragment,{children:n})}function de({children:n}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n})}const v={parameters:{layout:"fullscreen"},argTypes:{size:{control:"inline-radio",options:[...B]}},args:{size:"sm"},render:({size:n})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${f.length*2}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),e.jsx("div",{style:{gridColumn:`span ${f.length}`,textAlign:"center"},children:"Unselected"}),e.jsx("div",{style:{gridColumn:`span ${f.length}`,textAlign:"center"},children:"Selected"}),e.jsx("div",{}),[!1,!0].map(t=>f.map(a=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:a},`${t}-${a}`))),_.map(t=>x.map(a=>e.jsxs(ce,{children:[e.jsxs("div",{style:{textTransform:"capitalize"},children:[t," · ",a]}),[!1,!0].map(o=>f.map(s=>e.jsx(de,{children:e.jsx(i,{reaction:t,variant:a,size:n,label:"12",selected:o,disabled:s==="disabled",...M.includes(s)?{"data-state":s}:{}})},`${o}-${s}`)))]},`${t}-${a}`)))]})},q={"--rb-bg":"background","--rb-text":"color (label)","--rb-icon":"color (icon)","--rb-border":"border-color"},ue=D.replace(/\[data-reaction='(\w+)'\]\[aria-pressed='true'\]/g,"[data-type='$1 selected']"),h={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(G,{css:ue,aliases:q})};function pe(n,t,a){return D.replace(/\[data-variant='(\w+)'\]/g,(o,s)=>s===n?"":"[data-type='other']").replace(/\[data-reaction='(\w+)'\]\[aria-pressed='true'\]/g,(o,s)=>a&&s===t?"":"[data-type='other']")}const me=["unselected","selected"],be=["shown","hidden"];function ge(){const[n,t]=r.useState("ghost"),[a,o]=r.useState("like"),[s,y]=r.useState("selected"),[l,I]=r.useState("default"),[T,k]=r.useState("md"),[R,j]=r.useState("shown"),A=s==="selected";return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(c,{label:"Type",options:x,value:n,onChange:t}),e.jsx(c,{label:"Reaction",options:_,value:a,onChange:o}),e.jsx(c,{label:"Selection",options:me,value:s,onChange:y}),e.jsx(c,{label:"State",options:f,value:l,onChange:I}),e.jsx(c,{label:"Size",options:B,value:T,onChange:k}),e.jsx(c,{label:"Label",options:be,value:R,onChange:j}),e.jsx(J,{css:pe(n,a,A),aliases:q,group:`${a} · ${n}`,state:l,size:T,children:e.jsx(i,{variant:n,reaction:a,size:T,label:"12",showLabel:R==="shown",selected:A,disabled:l==="disabled",...M.includes(l)?{"data-state":l}:{}})})]})}const S={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(ge,{})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source},description:{story:"Uncontrolled: click to toggle.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(true);
    return <ShowcaseBox>
        <ReactionButton {...args} reaction="like" selected={liked} onSelectedChange={setLiked} label={String(12 + Number(liked))} />
        <ReactionButton {...args} reaction="saved" selected={saved} onSelectedChange={setSaved} label={String(4 + Number(saved))} />
      </ShowcaseBox>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Controlled: the count follows the selection, like a real like counter.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <MatrixTemplate />
}`,...p.parameters?.docs?.source},description:{story:"Figma `type`: ghost (row 1) and outline (row 2), each with like / saved, unselected / selected.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    gap: 24
  }}>
      {REACTION_BUTTON_VARIANTS.map(variant => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }}>
          {REACTION_BUTTON_SIZES.map(size => <ReactionButton key={size} variant={variant} size={size} label="12" />)}
          {REACTION_BUTTON_SIZES.map(size => <ReactionButton key={\`s-\${size}\`} variant={variant} size={size} label="12" defaultSelected />)}
        </div>)}
    </ShowcaseBox>
}`,...m.parameters?.docs?.source},description:{story:"Sizes only change the icon: sm 20px · md 24px · lg 32px.",...m.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{\n  render: () => <ShowcaseBox>\n      {REACTION_BUTTON_VARIANTS.map(variant => REACTION_TYPES.map(reaction => <ReactionButton key={`${variant}-${reaction}`} variant={variant} reaction={reaction} showLabel={false} />))}\n    </ShowcaseBox>\n}",...b.parameters?.docs?.source},description:{story:"Figma `Show label` off: icon only, the accessible name stays “Like” / “Save”.",...b.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <MatrixTemplate disabled />
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    reaction: 'like',
    label: '12'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'Like, 12'
    });
    await expect(button).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-pressed', 'true');
    await expect(args.onSelectedChange).toHaveBeenLastCalledWith(true);
    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-pressed', 'false');
    await expect(args.onSelectedChange).toHaveBeenLastCalledWith(false);
  }
}`,...g.parameters?.docs?.source},description:{story:"Clicking toggles aria-pressed and reports the next value.",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [...REACTION_BUTTON_SIZES]
    }
  },
  args: {
    size: 'sm'
  },
  render: ({
    size
  }) => <div style={{
    display: 'grid',
    gridTemplateColumns: \`auto repeat(\${STATES.length * 2}, 1fr)\`,
    gap: '20px 12px',
    padding: 24,
    alignItems: 'center',
    fontSize: 12,
    color: 'var(--color-text-neutral-subtlest-default)'
  }}>
      <div />
      <div style={{
      gridColumn: \`span \${STATES.length}\`,
      textAlign: 'center'
    }}>Unselected</div>
      <div style={{
      gridColumn: \`span \${STATES.length}\`,
      textAlign: 'center'
    }}>Selected</div>
      <div />
      {[false, true].map(sel => STATES.map(s => <div key={\`\${sel}-\${s}\`} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{s}</div>))}
      {REACTION_TYPES.map(reaction => REACTION_BUTTON_VARIANTS.map(variant => <Row key={\`\${reaction}-\${variant}\`}>
            <div style={{
        textTransform: 'capitalize'
      }}>{reaction} · {variant}</div>
            {[false, true].map(sel => STATES.map(s => <Cell key={\`\${sel}-\${s}\`}>
                  <ReactionButton reaction={reaction} variant={variant} size={size} label="12" selected={sel} disabled={s === 'disabled'} {...FORCED.includes(s) ? {
          'data-state': s
        } : {}} />
                </Cell>))}
          </Row>))}
    </div>
}`,...v.parameters?.docs?.source},description:{story:"Every type × reaction × selection in every state, like the Figma docs frame. Hover / pressed / focus are forced with `data-state`.",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={tokensCss} aliases={ALIASES} />
}`,...h.parameters?.docs?.source},description:{story:"Properties and tokens read from ReactionButton.module.css, resolved for the active theme.",...h.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ReactionInspect />
}`,...S.parameters?.docs?.source},description:{story:"Pick type, reaction, selection, state, size and label; see real measurements and the tokens that apply. Hover a token to locate it.",...S.parameters?.docs?.description}}};const fe=["Default","Controlled","Variants","Sizes","WithoutLabel","IsDisabled","Toggle","States","Tokens","Inspect"],Te=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:d,Inspect:S,IsDisabled:C,Sizes:m,States:v,Toggle:g,Tokens:h,Variants:p,WithoutLabel:b,__namedExportsOrder:fe,default:le},Symbol.toStringTag,{value:"Module"}));export{u as C,d as D,S as I,Te as R,m as S,h as T,p as V,b as W,v as a,C as b};
