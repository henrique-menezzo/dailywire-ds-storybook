import{j as e,r as w}from"./iframe-BaE-r_tL.js";import{b as B}from"./Icon-D8yVe6yW.js";import{S as I}from"./ShowcaseBox-CvpXiMzv.js";import{C as k}from"./CssTokens-DoMUOAyj.js";import{I as S,C}from"./ComponentInspector-aQuGSI0z.js";import{L as r}from"./LabeledIconButton-CKdeHl5r.js";const h=`/* ==============================================
 * LabeledIconButton — Daily Wire Design System
 * Figma: "Libeled Icon Button" (8202:43538), doc frame 8370:15111.
 * Icon Button (outline · xsm, 7553:28584) + label/600/sm to its right.
 * One interactive unit: hover / pressed / focus / disabled apply to the whole row.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base (label/600/sm) ─────────────────────── */

.labeledIconButton {
  --lib-text: var(--color-text-neutral-bold-default);

  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  gap: var(--spacing-sm);
  padding: var(--spacing-none);
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-xs);
  font-weight: var(--Semibold);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  text-align: start;
  color: var(--lib-text);
  /* Figma: hover dissolve, 300ms ease-out */
  transition: color var(--duration-slow) var(--easing-ease-out);
}

/* ── Circle (Icon Button · outline · xsm: 32px, glyph --size-sm) ── */

.circle {
  --lib-circle-border: var(--color-border-neutral-subtle-default);
  --lib-icon: var(--color-icon-neutral-bold-default);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-full);
  background-color: var(--lib-circle-bg, transparent);
  /* Figma stroke sits inside the circle: inset ring keeps it 32px */
  box-shadow: inset 0 0 0 var(--border-default) var(--lib-circle-border);
  color: var(--lib-icon);
  transition:
    background-color var(--duration-slow) var(--easing-ease-out),
    box-shadow var(--duration-slow) var(--easing-ease-out),
    color var(--duration-slow) var(--easing-ease-out);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

/* ── Hover ───────────────────────────────────── */

.labeledIconButton:hover:not(:disabled),
.labeledIconButton[data-state='hover'] {
  --lib-text: var(--color-text-neutral-bold-hovered);
}
.labeledIconButton:hover:not(:disabled) .circle,
.labeledIconButton[data-state='hover'] .circle {
  --lib-circle-bg: var(--color-background-neutral-bold-hovered);
  --lib-circle-border: var(--color-border-neutral-bold-hovered);
}

/* ── Pressed ─────────────────────────────────── */

.labeledIconButton:active:not(:disabled),
.labeledIconButton[data-state='pressed'] {
  --lib-text: var(--color-text-neutral-bold-pressed);
}
.labeledIconButton:active:not(:disabled) .circle,
.labeledIconButton[data-state='pressed'] .circle {
  --lib-circle-bg: var(--color-background-neutral-bold-pressed);
  --lib-circle-border: var(--color-border-neutral-bold-pressed);
}

/* ── Focus: ring around the whole unit, 2px gap (Figma: two drop shadows) ── */

.labeledIconButton:focus-visible,
.labeledIconButton[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Disabled ────────────────────────────────── */

.labeledIconButton:disabled {
  --lib-text: var(--color-text-neutral-bold-disabled);
  cursor: not-allowed;
}
.labeledIconButton:disabled .circle {
  --lib-circle-border: var(--color-border-neutral-bold-disabled);
  --lib-icon: var(--color-icon-neutral-bold-disabled);
}

.content {
  display: inline-flex;
  align-items: center;
  gap: inherit;
}

/* Figma: single-line label that hugs its text */
.label {
  white-space: nowrap;
}

/* ── Touch target ────────────────────────────── */
/* The row is 32px tall (Figma). On touch screens the hit area grows to
 * --touch-target-min without changing layout. */

@media (pointer: coarse) {
  .labeledIconButton::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: max(100%, var(--touch-target-min));
    transform: translateY(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .labeledIconButton,
  .circle {
    transition: none;
  }
}
`,{expect:s,fn:x,userEvent:m,within:g}=__STORYBOOK_MODULE_TEST__,L=Object.keys(B).sort((n,t)=>n.localeCompare(t)),T={component:r,title:"Components/LabeledIconButton",parameters:{layout:"centered"},argTypes:{icon:{control:"select",options:L,description:"Glyph inside the circle",table:{type:{summary:"IconName"}}},label:{control:"text",description:"Visible label; also the accessible name",table:{type:{summary:"string"}}},disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked"}},args:{icon:"headphones",label:"Listen",disabled:!1,onClick:x()}};function E({children:n}){return e.jsx(e.Fragment,{children:n})}function j({children:n}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n})}const u={play:async({canvasElement:n,args:t})=>{const o=g(n).getByRole("button",{name:"Listen"});await s(o).toHaveAttribute("type","button"),await s(o).not.toBeDisabled(),await m.click(o),await s(t.onClick).toHaveBeenCalledTimes(1)}},l={render:()=>e.jsxs(I,{children:[e.jsx(r,{icon:"headphones",label:"Listen"}),e.jsx(r,{icon:"player-play-outline",label:"Watch"}),e.jsx(r,{icon:"share-2",label:"Share"}),e.jsx(r,{icon:"download",label:"Download"}),e.jsx(r,{icon:"plus",label:"Follow"})]})},b={name:"Disabled",args:{disabled:!0},play:async({canvasElement:n,args:t})=>{const o=g(n).getByRole("button",{name:"Listen"});await s(o).toBeDisabled(),await s(o).toHaveAttribute("aria-disabled","true"),await m.click(o),await s(t.onClick).not.toHaveBeenCalled()}},p={name:"Keyboard interaction",args:{onClick:x()},play:async({canvasElement:n,args:t})=>{const o=g(n).getByRole("button",{name:"Listen"});await m.tab(),await s(o).toHaveFocus(),await m.keyboard(" "),await s(t.onClick).toHaveBeenCalledTimes(1),await m.keyboard("{Enter}"),await s(t.onClick).toHaveBeenCalledTimes(2)}},v=["default","hover","pressed","focus","disabled"],f=n=>["hover","pressed","focus"].includes(n)?{"data-state":n}:{},i={parameters:{layout:"fullscreen"},render:({icon:n,label:t})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${v.length}, 1fr)`,gap:"20px 16px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),v.map(a=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:a},a)),e.jsxs(E,{children:[e.jsx("div",{children:"Labeled icon button"}),v.map(a=>e.jsx(j,{children:e.jsx(r,{icon:n,label:t,disabled:a==="disabled",...f(a)})},a))]})]})},y={"--lib-text":"color","--lib-icon":"color","--lib-circle-bg":"background","--lib-circle-border":"border-color"},c={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(k,{css:h,aliases:y})};function D(){const[n,t]=w.useState("default");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(S,{label:"State",options:v,value:n,onChange:t}),e.jsx(C,{css:h,aliases:y,group:"labeled icon button",state:n,children:e.jsx(r,{icon:"headphones",label:"Listen",disabled:n==="disabled",...f(n)})})]})}const d={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(D,{})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Listen'
    });
    await expect(button).toHaveAttribute('type', 'button');
    await expect(button).not.toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <LabeledIconButton icon="headphones" label="Listen" />
      <LabeledIconButton icon="player-play-outline" label="Watch" />
      <LabeledIconButton icon="share-2" label="Share" />
      <LabeledIconButton icon="download" label="Download" />
      <LabeledIconButton icon="plus" label="Follow" />
    </ShowcaseBox>
}`,...l.parameters?.docs?.source},description:{story:"Typical pairs: the label spells out what the icon means.",...l.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    disabled: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Listen'
    });
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard interaction',
  args: {
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Listen'
    });
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: ({
    icon,
    label
  }) => <div style={{
    display: 'grid',
    gridTemplateColumns: \`auto repeat(\${STATES.length}, 1fr)\`,
    gap: '20px 16px',
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
      <Row>
        <div>Labeled icon button</div>
        {STATES.map(s => <Cell key={s}>
            <LabeledIconButton icon={icon} label={label} disabled={s === 'disabled'} {...forced(s)} />
          </Cell>)}
      </Row>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every Figma state (the component has a single `state` axis). Hover / pressed / focus are forced with `data-state`.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={labeledIconButtonCss} aliases={LABELED_ICON_BUTTON_ALIASES} />
}`,...c.parameters?.docs?.source},description:{story:"Properties and tokens read from LabeledIconButton.module.css, resolved for the active theme.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <LabeledIconButtonInspect />
}`,...d.parameters?.docs?.source},description:{story:"Pick a state; see real measurements and the tokens that apply. Hover a token to locate it.",...d.parameters?.docs?.description}}};const A=["Default","Examples","IsDisabled","Keyboard","States","Tokens","Inspect"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Examples:l,Inspect:d,IsDisabled:b,Keyboard:p,States:i,Tokens:c,__namedExportsOrder:A,default:T},Symbol.toStringTag,{value:"Module"}));export{u as D,l as E,d as I,p as K,N as L,i as S,c as T,b as a};
