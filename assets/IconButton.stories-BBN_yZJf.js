import{j as t,r as k}from"./iframe-BaE-r_tL.js";import{b as K}from"./Icon-D8yVe6yW.js";import{S as T}from"./ShowcaseBox-CvpXiMzv.js";import{C as M}from"./CssTokens-DoMUOAyj.js";import{I as j,C as G}from"./ComponentInspector-aQuGSI0z.js";import{a as w,b as O,c as H,I as i}from"./IconButton-C0K0oZpp.js";const _=`/* ==============================================
 * IconButton — Daily Wire Design System
 * Figma: Icon Button (7553:28584), doc frame 8349:21817.
 * Type minimal | ghost | outline | translucid × Style primary | secondary (minimal only)
 * × Size xsm | sm | md | lg × State default | hovered | pressed | focused | disabled.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.iconButton {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  border: none;
  border-radius: var(--border-radius-full);
  cursor: pointer;
  user-select: none;
  /* Figma strokes sit inside the box: drawn as an inset ring so the size stays padding + icon */
  box-shadow: inset 0 0 0 var(--border-default) var(--ib-border, transparent);
  background-color: var(--ib-bg, transparent);
  color: var(--ib-icon);
  /* Figma: hover dissolve, 300ms ease-out */
  transition:
    background-color var(--duration-slow) var(--easing-ease-out),
    box-shadow var(--duration-slow) var(--easing-ease-out),
    color var(--duration-slow) var(--easing-ease-out),
    transform var(--duration-fast) var(--easing-ease-out);
}

/* ── Sizes ───────────────────────────────────── */
/* Box = padding × 2 + glyph (glyph size is set in IconButton.tsx).
 * ghost / outline / translucid: xsm 32 · sm 36 · md 40 · lg 48 */

.iconButton[data-size='xsm'] {
  padding: var(--spacing-md);
}
.iconButton[data-size='sm'] {
  padding: var(--spacing-md);
}
.iconButton[data-size='md'] {
  padding: var(--spacing-md);
}
.iconButton[data-size='lg'] {
  padding: var(--spacing-lg);
}

/* minimal: xsm 24 · sm 32 (md / lg same as the others) */
.iconButton[data-variant='minimal-primary'][data-size='xsm'],
.iconButton[data-variant='minimal-secondary'][data-size='xsm'] {
  padding: var(--spacing-xxs);
}
.iconButton[data-variant='minimal-primary'][data-size='sm'],
.iconButton[data-variant='minimal-secondary'][data-size='sm'] {
  padding: var(--spacing-xs);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

/* ── Type minimal · Style primary — icon only ── */

.iconButton[data-variant='minimal-primary'] {
  --ib-icon: var(--color-icon-neutral-bold-default);
}
.iconButton[data-variant='minimal-primary']:hover:not(:disabled),
.iconButton[data-variant='minimal-primary'][data-state='hover'] {
  --ib-icon: var(--color-icon-neutral-bold-hovered);
}
.iconButton[data-variant='minimal-primary']:active:not(:disabled),
.iconButton[data-variant='minimal-primary'][data-state='pressed'] {
  --ib-icon: var(--color-icon-neutral-bold-pressed);
}
.iconButton[data-variant='minimal-primary']:disabled {
  --ib-icon: var(--color-icon-neutral-bold-disabled);
}

/* ── Type minimal · Style secondary — subtler icon ── */

.iconButton[data-variant='minimal-secondary'] {
  --ib-icon: var(--color-icon-neutral-subtlest-default);
}
.iconButton[data-variant='minimal-secondary']:hover:not(:disabled),
.iconButton[data-variant='minimal-secondary'][data-state='hover'] {
  --ib-icon: var(--color-icon-neutral-subtlest-hovered);
}
.iconButton[data-variant='minimal-secondary']:active:not(:disabled),
.iconButton[data-variant='minimal-secondary'][data-state='pressed'] {
  --ib-icon: var(--color-icon-neutral-subtlest-pressed);
}
.iconButton[data-variant='minimal-secondary']:disabled {
  --ib-icon: var(--color-icon-neutral-subtlest-disabled);
}

/* ── Type ghost — fill appears on hover / press, icon stays default ── */

.iconButton[data-variant='ghost-primary'] {
  --ib-icon: var(--color-icon-neutral-bold-default);
}
.iconButton[data-variant='ghost-primary']:hover:not(:disabled),
.iconButton[data-variant='ghost-primary'][data-state='hover'] {
  --ib-bg: var(--color-background-neutral-bold-hovered);
}
.iconButton[data-variant='ghost-primary']:active:not(:disabled),
.iconButton[data-variant='ghost-primary'][data-state='pressed'] {
  --ib-bg: var(--color-background-neutral-bold-pressed);
}
.iconButton[data-variant='ghost-primary']:disabled {
  --ib-icon: var(--color-icon-neutral-bold-disabled);
}

/* ── Type outline — 1px inside stroke, fill on hover / press ── */

.iconButton[data-variant='outline-primary'] {
  --ib-icon: var(--color-icon-neutral-bold-default);
  --ib-border: var(--color-border-neutral-subtle-default);
}
.iconButton[data-variant='outline-primary']:hover:not(:disabled),
.iconButton[data-variant='outline-primary'][data-state='hover'] {
  --ib-bg: var(--color-background-neutral-bold-hovered);
  --ib-border: var(--color-border-neutral-bold-hovered);
}
.iconButton[data-variant='outline-primary']:active:not(:disabled),
.iconButton[data-variant='outline-primary'][data-state='pressed'] {
  --ib-bg: var(--color-background-neutral-bold-pressed);
  --ib-border: var(--color-border-neutral-bold-pressed);
}
.iconButton[data-variant='outline-primary']:disabled {
  --ib-icon: var(--color-icon-neutral-bold-disabled);
  --ib-border: var(--color-border-neutral-bold-default);
}

/* ── Type translucid — dark glass over imagery, same in light and dark ── */

.iconButton[data-variant='translucid-primary'] {
  --ib-bg: var(--color-overlay-neutral-strong-default);
  --ib-border: var(--color-border-always-dark-gray);
  --ib-icon: var(--color-icon-always-light);
  /* Figma background blur 15 ≈ CSS blur 7.5px; no blur token, closest dimension used */
  -webkit-backdrop-filter: blur(var(--primitive-dimension-dimension-2));
  backdrop-filter: blur(var(--primitive-dimension-dimension-2));
}
/* Figma icon opacity 0.8 on hover / pressed: no 0.8 opacity token, closest used */
.iconButton[data-variant='translucid-primary']:hover:not(:disabled),
.iconButton[data-variant='translucid-primary'][data-state='hover'] {
  --ib-bg: var(--color-overlay-neutral-subtle-default);
  --ib-border: transparent;
  --ib-icon-opacity: var(--opacity-overlay);
}
.iconButton[data-variant='translucid-primary']:active:not(:disabled),
.iconButton[data-variant='translucid-primary'][data-state='pressed'] {
  --ib-bg: var(--color-overlay-neutral-subtle-default);
  --ib-border: transparent;
  --ib-icon-opacity: var(--opacity-overlay);
}
.iconButton[data-variant='translucid-primary']:focus-visible,
.iconButton[data-variant='translucid-primary'][data-state='focus'] {
  --ib-border: transparent;
}
/* Figma icon opacity 0.3 */
.iconButton[data-variant='translucid-primary']:disabled {
  --ib-border: transparent;
  --ib-icon-opacity: var(--opacity-disabled);
}

.iconButton:active:not(:disabled) {
  transform: scale(0.96);
}

/* ── Focus ring ──────────────────────────────── */
/* outline / translucid: 2px ring with a 2px gap (Figma: two drop shadows) */

.iconButton:focus-visible,
.iconButton[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* minimal / ghost: ring hugs the circle (Figma: one 2px spread shadow, no gap) */
.iconButton[data-variant='minimal-primary']:focus-visible,
.iconButton[data-variant='minimal-primary'][data-state='focus'],
.iconButton[data-variant='minimal-secondary']:focus-visible,
.iconButton[data-variant='minimal-secondary'][data-state='focus'],
.iconButton[data-variant='ghost-primary']:focus-visible,
.iconButton[data-variant='ghost-primary'][data-state='focus'] {
  outline-offset: var(--spacing-none);
}

/* ── Disabled ────────────────────────────────── */

.iconButton:disabled {
  cursor: not-allowed;
}

.content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: var(--ib-icon-opacity, 1);
  transition: opacity var(--duration-slow) var(--easing-ease-out);
}

/* ── Touch target ────────────────────────────── */
/* The visible box follows Figma (24–48px). On touch screens the hit area grows to
 * --touch-target-min around it without changing layout. */

@media (pointer: coarse) {
  .iconButton::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: max(100%, var(--touch-target-min));
    height: max(100%, var(--touch-target-min));
    transform: translate(-50%, -50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .iconButton,
  .content {
    transition: none;
  }

  .iconButton:active:not(:disabled) {
    transform: none;
  }
}
`,{expect:r,fn:$,userEvent:z,within:y}=__STORYBOOK_MODULE_TEST__,N=Object.keys(K).sort((a,n)=>a.localeCompare(n)),A=[{type:"minimal",buttonStyle:"primary"},{type:"minimal",buttonStyle:"secondary"},{type:"ghost",buttonStyle:"primary"},{type:"outline",buttonStyle:"primary"},{type:"translucid",buttonStyle:"primary"}],s=a=>a.type==="minimal"?`minimal ${a.buttonStyle}`:a.type,W="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=532&h=298&fit=crop&q=80",Y={component:i,title:"Components/IconButton",parameters:{layout:"centered",a11y:{config:{rules:[{id:"button-name",enabled:!0},{id:"color-contrast",enabled:!0}]}}},argTypes:{icon:{control:"select",options:N,description:"Catalog icon to render",table:{type:{summary:"IconName"},defaultValue:{summary:"share-2"}}},type:{control:"select",options:[...H],description:"Visual type (Figma `Type`). Not the native button type — see `htmlType`.",table:{type:{summary:"'minimal' | 'ghost' | 'outline' | 'translucid'"},defaultValue:{summary:"minimal"}}},buttonStyle:{control:"radio",options:[...O],description:"`primary` = `icon-neutral-bold-*`, `secondary` = `icon-neutral-subtlest-*`. Secondary exists only for `minimal`.",table:{type:{summary:"'primary' | 'secondary'"},defaultValue:{summary:"primary"}}},size:{control:"inline-radio",options:[...w],description:"minimal 24/32/40/48 px · ghost, outline, translucid 32/36/40/48 px",table:{type:{summary:"'xsm' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"sm"}}},htmlType:{control:"inline-radio",options:["button","submit","reset"],table:{type:{summary:"'button' | 'submit' | 'reset'"},defaultValue:{summary:"button"}}},disabled:{control:"boolean",description:"Disables the button and blocks interaction",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},"aria-label":{control:"text",description:"Accessible label — **required** for screen readers",table:{type:{summary:"string"}}},onClick:{action:"clicked"}},args:{icon:"share-2",type:"minimal",buttonStyle:"primary",size:"sm",disabled:!1,"aria-label":"Share",onClick:$()}};function L({children:a}){return t.jsx(t.Fragment,{children:a})}function F({children:a}){return t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a})}const b={play:async({canvasElement:a,args:n})=>{const e=y(a).getByRole("button",{name:/share/i});await r(e).toBeInTheDocument(),await r(e).toHaveAttribute("aria-label","Share"),await r(e).toHaveAttribute("data-style","primary"),await r(e).toHaveAttribute("data-type","minimal"),await r(e).toHaveAttribute("data-size","sm"),await r(e).toHaveAttribute("type","button"),await r(e).not.toBeDisabled(),e.focus(),await r(e).toHaveFocus(),await z.click(e),await r(n.onClick).toHaveBeenCalledTimes(1)}},v={name:"Types",render:a=>t.jsxs(T,{children:[t.jsx(i,{...a,type:"minimal",buttonStyle:"primary","aria-label":"Minimal"}),t.jsx(i,{...a,type:"ghost",buttonStyle:"primary","aria-label":"Ghost"}),t.jsx(i,{...a,type:"outline",buttonStyle:"primary","aria-label":"Outline"}),t.jsx(i,{...a,type:"translucid",buttonStyle:"primary","aria-label":"Translucid"})]}),play:async({canvasElement:a})=>{const n=y(a);for(const o of H){const e=n.getByRole("button",{name:new RegExp(o,"i")});await r(e).toHaveAttribute("data-type",o)}}},c={name:"Translucid on media",render:a=>t.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-end",gap:"var(--spacing-md)",width:320,height:180,padding:"var(--spacing-lg)",boxSizing:"border-box",borderRadius:"var(--border-radius-md)",backgroundImage:`url(${W})`,backgroundSize:"cover",backgroundPosition:"center"},children:[t.jsx(i,{...a,type:"translucid",icon:"share-2","aria-label":"Share"}),t.jsx(i,{...a,type:"translucid",icon:"x","aria-label":"Close"})]})},g={name:"Styles — Primary & Secondary",render:a=>t.jsxs(T,{children:[t.jsx(i,{...a,type:"minimal",buttonStyle:"primary","aria-label":"Primary"}),t.jsx(i,{...a,type:"minimal",buttonStyle:"secondary","aria-label":"Secondary"})]}),play:async({canvasElement:a})=>{const n=y(a),o=n.getByRole("button",{name:"Primary"}),e=n.getByRole("button",{name:"Secondary"});await r(o).toHaveAttribute("data-style","primary"),await r(e).toHaveAttribute("data-style","secondary"),await r(o).not.toBeDisabled(),await r(e).not.toBeDisabled()}},x={render:a=>t.jsx(T,{direction:"column",style:{gap:24},children:A.filter(n=>n.buttonStyle==="primary").map(n=>t.jsx("div",{style:{display:"flex",alignItems:"center",gap:16},children:w.map(o=>t.jsx(i,{...a,type:n.type,buttonStyle:"primary",size:o,"aria-label":`${n.type} ${o}`},o))},n.type))})},f={name:"Keyboard interaction",args:{"aria-label":"Keyboard test",onClick:$()},play:async({canvasElement:a,args:n})=>{const e=y(a).getByRole("button",{name:"Keyboard test"});await z.tab(),await r(e).toHaveFocus(),await z.keyboard(" "),await r(n.onClick).toHaveBeenCalledTimes(1),await z.keyboard("{Enter}"),await r(n.onClick).toHaveBeenCalledTimes(2)}},h={name:"With different icons",render:()=>t.jsxs(T,{children:[t.jsx(i,{icon:"player-play-filled",buttonStyle:"primary","aria-label":"Play"}),t.jsx(i,{icon:"arrow-bar-to-down",buttonStyle:"secondary","aria-label":"Download"}),t.jsx(i,{icon:"share-2",buttonStyle:"secondary","aria-label":"Share"}),t.jsx(i,{icon:"heart-outline",type:"ghost","aria-label":"Like"}),t.jsx(i,{icon:"bookmark-outline",type:"outline","aria-label":"Bookmark"})]}),play:async({canvasElement:a})=>{const o=y(a).getAllByRole("button");await r(o).toHaveLength(5);for(const e of o)await r(e).toHaveAttribute("aria-label"),await r(e).not.toBeDisabled()}},S={name:"Disabled",render:()=>t.jsx(T,{children:A.map(a=>t.jsx(i,{icon:"share-2",type:a.type,buttonStyle:a.buttonStyle,"aria-label":`${s(a)} disabled`,disabled:!0},s(a)))}),play:async({canvasElement:a})=>{const o=y(a).getAllByRole("button");for(const e of o)await r(e).toBeDisabled(),await r(e).toHaveAttribute("aria-disabled","true"),await r(e).toHaveAttribute("aria-label")}},B={name:"Gallery (all icons)",parameters:{layout:"fullscreen"},render:a=>t.jsx("div",{style:{padding:24,display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",gap:12,alignItems:"start"},children:N.map(n=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,fontSize:10,color:"var(--color-text-neutral-subtlest-default)",textAlign:"center",wordBreak:"break-word"},children:[t.jsx(i,{...a,icon:n,"aria-label":n}),t.jsx("span",{children:n})]},n))})},l=["default","hover","pressed","focus","disabled"],R=a=>["hover","pressed","focus"].includes(a)?{"data-state":a}:{},d={parameters:{layout:"fullscreen"},args:{size:"md"},render:({size:a,icon:n})=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${l.length}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[t.jsx("div",{}),l.map(o=>t.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:o},o)),A.map(o=>t.jsxs(L,{children:[t.jsx("div",{style:{textTransform:"capitalize"},children:s(o)}),l.map(e=>t.jsx(F,{children:t.jsx(i,{icon:n,type:o.type,buttonStyle:o.buttonStyle,size:a,"aria-label":`${s(o)} ${e}`,disabled:e==="disabled",...R(e)})},e))]},s(o)))]})},u={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto auto repeat(${l.length}, 1fr)`,gap:"16px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[t.jsx("div",{}),t.jsx("div",{}),l.map(a=>t.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:a},a)),A.map(a=>w.map((n,o)=>t.jsxs(L,{children:[o===0?t.jsx("div",{style:{gridRow:`span ${w.length}`,textTransform:"capitalize"},children:s(a)}):null,t.jsx("div",{children:n}),l.map(e=>t.jsx(F,{children:t.jsx(i,{icon:"share-2",type:a.type,buttonStyle:a.buttonStyle,size:n,"aria-label":`${s(a)} ${n} ${e}`,disabled:e==="disabled",...R(e)})},e))]},`${s(a)}-${n}`)))]})},V={"--ib-bg":"background","--ib-icon":"color","--ib-border":"border-color","--ib-icon-opacity":"icon opacity"},p={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>t.jsx(M,{css:_,aliases:V})};function Z(){const[a,n]=k.useState("minimal"),[o,e]=k.useState("primary"),[I,P]=k.useState("default"),[C,U]=k.useState("md"),E=a==="minimal"?o:"primary",D=`${a}-${E}`;return t.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[t.jsx(j,{label:"Type",options:H,value:a,onChange:n}),t.jsx(j,{label:"Style",options:a==="minimal"?O:["primary"],value:E,onChange:e}),t.jsx(j,{label:"State",options:l,value:I,onChange:P}),t.jsx(j,{label:"Size",options:w,value:C,onChange:U}),t.jsx(G,{css:_,aliases:V,group:D,state:I,size:C,children:t.jsx(i,{icon:"share-2",type:a,buttonStyle:E,size:C,"aria-label":D,disabled:I==="disabled",...R(I)})})]})}const m={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(Z,{})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /share/i
    });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('aria-label', 'Share');
    await expect(button).toHaveAttribute('data-style', 'primary');
    await expect(button).toHaveAttribute('data-type', 'minimal');
    await expect(button).toHaveAttribute('data-size', 'sm');
    await expect(button).toHaveAttribute('type', 'button');
    await expect(button).not.toBeDisabled();
    button.focus();
    await expect(button).toHaveFocus();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Types',
  render: args => <ShowcaseBox>
      <IconButton {...args} type="minimal" buttonStyle="primary" aria-label="Minimal" />
      <IconButton {...args} type="ghost" buttonStyle="primary" aria-label="Ghost" />
      <IconButton {...args} type="outline" buttonStyle="primary" aria-label="Outline" />
      <IconButton {...args} type="translucid" buttonStyle="primary" aria-label="Translucid" />
    </ShowcaseBox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const type of ICON_BUTTON_TYPES) {
      const button = canvas.getByRole('button', {
        name: new RegExp(type, 'i')
      });
      await expect(button).toHaveAttribute('data-type', type);
    }
  }
}`,...v.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Translucid on media',
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    gap: 'var(--spacing-md)',
    width: 320,
    height: 180,
    padding: 'var(--spacing-lg)',
    boxSizing: 'border-box',
    borderRadius: 'var(--border-radius-md)',
    backgroundImage: \`url(\${MEDIA_URL})\`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <IconButton {...args} type="translucid" icon="share-2" aria-label="Share" />
      <IconButton {...args} type="translucid" icon="x" aria-label="Close" />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Translucid is meant to sit on top of imagery (player, artwork).",...c.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Styles — Primary & Secondary',
  render: args => <ShowcaseBox>
      <IconButton {...args} type="minimal" buttonStyle="primary" aria-label="Primary" />
      <IconButton {...args} type="minimal" buttonStyle="secondary" aria-label="Secondary" />
    </ShowcaseBox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByRole('button', {
      name: 'Primary'
    });
    const secondary = canvas.getByRole('button', {
      name: 'Secondary'
    });
    await expect(primary).toHaveAttribute('data-style', 'primary');
    await expect(secondary).toHaveAttribute('data-style', 'secondary');
    await expect(primary).not.toBeDisabled();
    await expect(secondary).not.toBeDisabled();
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox direction="column" style={{
    gap: 24
  }}>
      {VARIANTS.filter(v => v.buttonStyle === 'primary').map(v => <div key={v.type} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          {ICON_BUTTON_SIZES.map(size => <IconButton key={size} {...args} type={v.type} buttonStyle="primary" size={size} aria-label={\`\${v.type} \${size}\`} />)}
        </div>)}
    </ShowcaseBox>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard interaction',
  args: {
    'aria-label': 'Keyboard test',
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Keyboard test'
    });
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With different icons',
  render: () => <ShowcaseBox>
      <IconButton icon="player-play-filled" buttonStyle="primary" aria-label="Play" />
      <IconButton icon="arrow-bar-to-down" buttonStyle="secondary" aria-label="Download" />
      <IconButton icon="share-2" buttonStyle="secondary" aria-label="Share" />
      <IconButton icon="heart-outline" type="ghost" aria-label="Like" />
      <IconButton icon="bookmark-outline" type="outline" aria-label="Bookmark" />
    </ShowcaseBox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons).toHaveLength(5);
    for (const button of buttons) {
      await expect(button).toHaveAttribute('aria-label');
      await expect(button).not.toBeDisabled();
    }
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <ShowcaseBox>
      {VARIANTS.map(v => <IconButton key={variantLabel(v)} icon="share-2" type={v.type} buttonStyle={v.buttonStyle} aria-label={\`\${variantLabel(v)} disabled\`} disabled />)}
    </ShowcaseBox>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    for (const button of buttons) {
      await expect(button).toBeDisabled();
      await expect(button).toHaveAttribute('aria-disabled', 'true');
      await expect(button).toHaveAttribute('aria-label');
    }
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Gallery (all icons)',
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    padding: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: 12,
    alignItems: 'start'
  }}>
      {iconNames.map(name => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      fontSize: 10,
      color: 'var(--color-text-neutral-subtlest-default)',
      textAlign: 'center',
      wordBreak: 'break-word'
    }}>
          <IconButton {...args} icon={name} aria-label={name} />
          <span>{name}</span>
        </div>)}
    </div>
}`,...B.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    size: 'md'
  },
  render: ({
    size,
    icon
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
      {VARIANTS.map(v => <Row key={variantLabel(v)}>
          <div style={{
        textTransform: 'capitalize'
      }}>{variantLabel(v)}</div>
          {STATES.map(s => <Cell key={s}>
              <IconButton icon={icon} type={v.type} buttonStyle={v.buttonStyle} size={size} aria-label={\`\${variantLabel(v)} \${s}\`} disabled={s === 'disabled'} {...forced(s)} />
            </Cell>)}
        </Row>)}
    </div>
}`,...d.parameters?.docs?.source},description:{story:"Every Figma Type × Style in every state. Hover / pressed / focus are forced with `data-state`.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: \`auto auto repeat(\${STATES.length}, 1fr)\`,
    gap: '16px 12px',
    padding: 24,
    alignItems: 'center',
    fontSize: 12,
    color: 'var(--color-text-neutral-subtlest-default)'
  }}>
      <div />
      <div />
      {STATES.map(s => <div key={s} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {VARIANTS.map(v => ICON_BUTTON_SIZES.map((size, sizeIdx) => <Row key={\`\${variantLabel(v)}-\${size}\`}>
            {sizeIdx === 0 ? <div style={{
        gridRow: \`span \${ICON_BUTTON_SIZES.length}\`,
        textTransform: 'capitalize'
      }}>{variantLabel(v)}</div> : null}
            <div>{size}</div>
            {STATES.map(s => <Cell key={s}>
                <IconButton icon="share-2" type={v.type} buttonStyle={v.buttonStyle} size={size} aria-label={\`\${variantLabel(v)} \${size} \${s}\`} disabled={s === 'disabled'} {...forced(s)} />
              </Cell>)}
          </Row>))}
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Every Type × Style × Size × State (the 100 Figma variants).",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={iconButtonCss} aliases={ICON_BUTTON_ALIASES} />
}`,...p.parameters?.docs?.source},description:{story:"Properties and tokens read from IconButton.module.css, resolved for the active theme.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <IconButtonInspect />
}`,...m.parameters?.docs?.source},description:{story:"Pick type, style, state and size; see real measurements and the tokens that apply. Hover a token to locate it.",...m.parameters?.docs?.description}}};const q=["Default","Types","TranslucidOnMedia","Variants","Sizes","Keyboard","WithDifferentIcons","IsDisabled","Gallery","States","VariantSizeMatrix","Tokens","Inspect"],na=Object.freeze(Object.defineProperty({__proto__:null,Default:b,Gallery:B,Inspect:m,IsDisabled:S,Keyboard:f,Sizes:x,States:d,Tokens:p,TranslucidOnMedia:c,Types:v,VariantSizeMatrix:u,Variants:g,WithDifferentIcons:h,__namedExportsOrder:q,default:Y},Symbol.toStringTag,{value:"Module"}));export{b as D,B as G,na as I,f as K,x as S,v as T,g as V,h as W,c as a,m as b,d as c,S as d,u as e,p as f};
