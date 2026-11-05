import{j as e,r as S}from"./iframe-BaE-r_tL.js";import{b as B}from"./Icon-D8yVe6yW.js";import{S as k}from"./ShowcaseBox-CvpXiMzv.js";import{C as D}from"./CssTokens-DoMUOAyj.js";import{I as N,C as L}from"./ComponentInspector-aQuGSI0z.js";import{N as r,a as y,b as n}from"./NavigationItem-CHo8eRdd.js";const C=`/* ==============================================
 * NavigationItem — Daily Wire Design System
 * Figma: Navigation item (7808:44857), page "↳ Navigation".
 * type button | link × selectionState default | selected × size md | lg | xl
 * × interactionState default | hover | pressed | focused | disabled.
 * Selected = label weight 400 → 600 only (no indicator bar).
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  gap: var(--spacing-xs);
  margin: 0;
  padding: 0;
  border: none;
  background-color: var(--nav-bg, transparent);
  color: var(--nav-text);
  cursor: pointer;
  font-family: var(--default), sans-serif;
  /* label/400/* text styles; [data-selected] switches to label/600/* */
  font-weight: var(--nav-weight, var(--Regular));
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  /* Figma: On hover → Change to, Dissolve 400ms ease-out; no 400ms token, closest --duration-slow */
  transition:
    background-color var(--duration-slow) var(--easing-ease-out),
    color var(--duration-slow) var(--easing-ease-out);
}

/* ── Sizes (text styles label/400|600 md · lg · xl) ── */

.item[data-size='md'] {
  font-size: var(--font-size-sm);
}

.item[data-size='lg'] {
  font-size: var(--font-size-md);
}

.item[data-size='xl'] {
  font-size: var(--font-size-lg);
}

/* ── Selection ───────────────────────────────── */

.item[data-selected] {
  --nav-weight: var(--Semibold);
}

/* ── Disabled ────────────────────────────────────
 * <a> cannot match :disabled, so links use [aria-disabled='true']; :disabled covers <button>.
 * Both outrank the type defaults below by specificity. */

.item[data-variant='button']:disabled,
.item[data-variant='button'][aria-disabled='true'] {
  --nav-bg: transparent;
  --nav-text: var(--color-text-neutral-bold-disabled);
  --nav-icon: var(--color-icon-neutral-bold-disabled);
}

/* Figma binds the disabled link to the primitive color/gray/600; the semantic disabled tokens match it in dark */
.item[data-variant='link']:disabled,
.item[data-variant='link'][aria-disabled='true'] {
  --nav-bg: transparent;
  --nav-text: var(--color-text-neutral-bold-disabled);
  --nav-icon: var(--color-icon-neutral-bold-disabled);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

/* ── Type: button (pill surface) ─────────────── */

.item[data-variant='button'] {
  border-radius: var(--border-radius-full);
  --nav-text: var(--color-text-neutral-bold-default);
  --nav-icon: var(--color-icon-neutral-bold-default);
}
.item[data-variant='button'][data-size='md'] {
  min-height: var(--size-xl);
  padding: 0 var(--spacing-lg);
}
.item[data-variant='button'][data-size='lg'] {
  min-height: var(--size-2xl);
  padding: 0 var(--spacing-lg);
}
.item[data-variant='button'][data-size='xl'] {
  min-height: var(--size-3xl);
  padding: 0 var(--spacing-xl);
}
.item[data-variant='button']:hover:not(:disabled):not([aria-disabled='true']),
.item[data-variant='button'][data-state='hover'] {
  --nav-bg: var(--color-background-neutral-bold-hovered);
}
.item[data-variant='button']:active:not(:disabled):not([aria-disabled='true']),
.item[data-variant='button'][data-state='pressed'] {
  --nav-bg: var(--color-background-neutral-bold-pressed);
}
.item[data-variant='button']:focus-visible,
.item[data-variant='button'][data-state='focus'] {
  --nav-bg: var(--color-background-neutral-bold-default);
}

/* ── Type: link (text only) ──────────────────── */

.item[data-variant='link'] {
  border-radius: var(--border-radius-sm);
  --nav-text: var(--color-text-neutral-bold-default);
  --nav-icon: var(--color-icon-neutral-bold-default);
}
/* Figma: hover and pressed both use text/neutral/bold/hovered (the icon is bound to the text token) */
.item[data-variant='link']:hover:not(:disabled):not([aria-disabled='true']),
.item[data-variant='link'][data-state='hover'] {
  --nav-text: var(--color-text-neutral-bold-hovered);
  --nav-icon: var(--color-icon-neutral-bold-hovered);
}
.item[data-variant='link']:active:not(:disabled):not([aria-disabled='true']),
.item[data-variant='link'][data-state='pressed'] {
  --nav-text: var(--color-text-neutral-bold-hovered);
  --nav-icon: var(--color-icon-neutral-bold-hovered);
}
/* Figma fills the focused link with the primitive color/gray/900; background/neutral/bold/default matches it in dark */
.item[data-variant='link']:focus-visible,
.item[data-variant='link'][data-state='focus'] {
  --nav-bg: var(--color-background-neutral-bold-default);
}

/* ── Focus ring: transparent offset, same ring on both types ── */

.item:focus-visible,
.item[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Disabled cursor ─────────────────────────── */

.item:disabled,
.item[aria-disabled='true'] {
  cursor: not-allowed;
}

.content {
  display: inline-flex;
  align-items: center;
  gap: inherit;
}

.icon {
  flex-shrink: 0;
  transition: color var(--duration-slow) var(--easing-ease-out);
}

/* ── Touch target ────────────────────────────── */
/* The visible box follows Figma (16–48px tall). On touch screens the hit area grows to
 * --touch-target-min around it without changing layout. */

@media (pointer: coarse) {
  .item::before {
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
  .item,
  .icon {
    transition: none;
  }
}
`,{fn:V}=__STORYBOOK_MODULE_TEST__,w=Object.keys(B).sort((t,a)=>t.localeCompare(a)),z="device-tv-old",i="chevron-down",_={backgroundColor:"var(--color-background-neutral-bold-default)"},H={component:n,title:"Components/NavigationItem",parameters:{layout:"centered"},argTypes:{type:{control:"inline-radio",options:[...y]},size:{control:"inline-radio",options:[...r]},selected:{control:"boolean"},children:{control:"text"},href:{control:"text"},leadingIcon:{control:"select",options:w},trailingIcon:{control:"select",options:w},disabled:{control:"boolean"}},args:{type:"button",size:"md",selected:!1,children:"Kids",trailingIcon:i,disabled:!1,onClick:V()}},T={},p={render:()=>e.jsxs(k,{style:_,children:[e.jsx(n,{type:"button",trailingIcon:i,children:"Button"}),e.jsx(n,{type:"button",trailingIcon:i,"data-state":"hover",children:"Button · hover"}),e.jsx(n,{type:"link",href:"#",trailingIcon:i,children:"Link"}),e.jsx(n,{type:"link",href:"#",trailingIcon:i,"data-state":"hover",children:"Link · hover"})]})},m={render:()=>e.jsx(k,{direction:"column",style:{..._,gap:24},children:y.map(t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24},children:[...r].reverse().map(a=>e.jsx(n,{type:t,size:a,href:t==="link"?"#":void 0,trailingIcon:i,children:`Size ${a}`},a))},t))})},g={render:()=>e.jsx(k,{direction:"column",style:{..._,gap:24},children:y.map(t=>e.jsxs("nav",{"aria-label":`${t} example`,style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(n,{type:t,href:"#",selected:!0,children:"News"}),e.jsx(n,{type:t,href:"#",children:"Shows & Movies"}),e.jsx(n,{type:t,href:"#",children:"All Access"})]},t))})},u={render:()=>e.jsx(k,{direction:"column",style:{..._,gap:24},children:r.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx(n,{size:t,leadingIcon:z,children:"DWTV"}),e.jsx(n,{size:t,trailingIcon:i,children:"Kids"}),e.jsx(n,{size:t,leadingIcon:z,trailingIcon:i,children:"Both"}),e.jsx(n,{size:t,leadingIcon:"download",children:"Download App"}),e.jsx(n,{size:t,leadingIcon:"search",children:"Search"})]},t))})},v={render:()=>e.jsxs(k,{style:_,children:[e.jsx(n,{type:"button",disabled:!0,trailingIcon:i,children:"Button"}),e.jsx(n,{type:"button",disabled:!0,selected:!0,trailingIcon:i,children:"Selected"}),e.jsx(n,{type:"link",href:"#",disabled:!0,trailingIcon:i,children:"Link"}),e.jsx(n,{type:"link",href:"#",disabled:!0,selected:!0,trailingIcon:i,children:"Selected"})]})},l=["default","hover","pressed","focus","disabled"],j=["default","selected"],E=t=>({disabled:t==="disabled",...t==="hover"||t==="pressed"||t==="focus"?{"data-state":t}:{}});function O({children:t}){return e.jsx(e.Fragment,{children:t})}function M({children:t}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t})}const G=t=>({display:"grid",gridTemplateColumns:`auto repeat(${t}, max-content)`,gap:"20px 16px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"}),I={parameters:{layout:"fullscreen"},argTypes:{size:{control:"inline-radio",options:[...r]}},args:{size:"md",trailingIcon:i},render:({size:t,leadingIcon:a,trailingIcon:s,children:d})=>e.jsxs("div",{style:G(l.length),children:[e.jsx("div",{}),l.map(o=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:o},o)),y.flatMap(o=>j.map(x=>e.jsxs(O,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${o} · ${x}`}),l.map(c=>e.jsx(M,{children:e.jsx(n,{type:o,href:o==="link"?"#":void 0,size:t,selected:x==="selected",leadingIcon:a,trailingIcon:s,...E(c),children:d})},c))]},`${o}-${x}`)))]})},h={parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsxs("div",{style:G(l.length*r.length),children:[e.jsx("div",{}),r.flatMap(t=>l.map(a=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:`${a} · ${t}`},`${t}-${a}`))),y.flatMap(t=>j.map(a=>e.jsxs(O,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${t} · ${a}`}),r.flatMap(s=>l.map(d=>e.jsx(M,{children:e.jsx(n,{type:t,href:t==="link"?"#":void 0,size:s,selected:a==="selected",trailingIcon:i,...E(d),children:"Kids"})},`${s}-${d}`)))]},`${t}-${a}`)))]})},F={"--nav-bg":"background","--nav-text":"color","--nav-icon":"icon color","--nav-weight":"font-weight"},b={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(D,{css:C,aliases:F})},P=["none","left","right","both"];function K(){const[t,a]=S.useState("button"),[s,d]=S.useState("default"),[o,x]=S.useState("default"),[c,$]=S.useState("md"),[A,R]=S.useState("right");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(N,{label:"Type",options:y,value:t,onChange:a}),e.jsx(N,{label:"State",options:l,value:s,onChange:d}),e.jsx(N,{label:"Selection",options:j,value:o,onChange:x}),e.jsx(N,{label:"Size",options:r,value:c,onChange:$}),e.jsx(N,{label:"Icon",options:P,value:A,onChange:R}),e.jsx(L,{css:C,aliases:F,group:t,state:s,size:c,children:e.jsx(n,{type:t,href:t==="link"?"#":void 0,size:c,selected:o==="selected",leadingIcon:["left","both"].includes(A)?z:void 0,trailingIcon:["right","both"].includes(A)?i:void 0,...E(s),children:"Kids"})})]})}const f={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(K,{})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"{}",...T.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox style={SURFACE}>
      <NavigationItem type="button" trailingIcon={FIGMA_RIGHT_ICON}>Button</NavigationItem>
      <NavigationItem type="button" trailingIcon={FIGMA_RIGHT_ICON} data-state="hover">Button · hover</NavigationItem>
      <NavigationItem type="link" href="#" trailingIcon={FIGMA_RIGHT_ICON}>Link</NavigationItem>
      <NavigationItem type="link" href="#" trailingIcon={FIGMA_RIGHT_ICON} data-state="hover">Link · hover</NavigationItem>
    </ShowcaseBox>
}`,...p.parameters?.docs?.source},description:{story:"Figma `type`: `button` shows a pill surface on hover / press / focus, `link` changes only the text color.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    ...SURFACE,
    gap: 24
  }}>
      {NAVIGATION_ITEM_TYPES.map(type => <div key={type} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
          {[...NAVIGATION_ITEM_SIZES].reverse().map(size => <NavigationItem key={size} type={type} size={size} href={type === 'link' ? '#' : undefined} trailingIcon={FIGMA_RIGHT_ICON}>
              {\`Size \${size}\`}
            </NavigationItem>)}
        </div>)}
    </ShowcaseBox>
}`,...m.parameters?.docs?.source},description:{story:"md 14 · lg 16 · xl 20 px text. Button type: 32 / 40 / 48 px tall. Link type hugs its content.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    ...SURFACE,
    gap: 24
  }}>
      {NAVIGATION_ITEM_TYPES.map(type => <nav key={type} aria-label={\`\${type} example\`} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
          <NavigationItem type={type} href="#" selected>News</NavigationItem>
          <NavigationItem type={type} href="#">Shows &amp; Movies</NavigationItem>
          <NavigationItem type={type} href="#">All Access</NavigationItem>
        </nav>)}
    </ShowcaseBox>
}`,...g.parameters?.docs?.source},description:{story:"Figma `selectionState=selected`: the label goes from weight 400 to 600. No bar or fill.",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    ...SURFACE,
    gap: 24
  }}>
      {NAVIGATION_ITEM_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <NavigationItem size={size} leadingIcon={FIGMA_LEFT_ICON}>DWTV</NavigationItem>
          <NavigationItem size={size} trailingIcon={FIGMA_RIGHT_ICON}>Kids</NavigationItem>
          <NavigationItem size={size} leadingIcon={FIGMA_LEFT_ICON} trailingIcon={FIGMA_RIGHT_ICON}>Both</NavigationItem>
          <NavigationItem size={size} leadingIcon="download">Download App</NavigationItem>
          <NavigationItem size={size} leadingIcon="search">Search</NavigationItem>
        </div>)}
    </ShowcaseBox>
}`,...u.parameters?.docs?.source},description:{story:"Figma `Show left icon` / `Show right icon`. The left icon is 20 px on every size; the right icon is 16 px on md.",...u.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox style={SURFACE}>
      <NavigationItem type="button" disabled trailingIcon={FIGMA_RIGHT_ICON}>Button</NavigationItem>
      <NavigationItem type="button" disabled selected trailingIcon={FIGMA_RIGHT_ICON}>Selected</NavigationItem>
      <NavigationItem type="link" href="#" disabled trailingIcon={FIGMA_RIGHT_ICON}>Link</NavigationItem>
      <NavigationItem type="link" href="#" disabled selected trailingIcon={FIGMA_RIGHT_ICON}>Selected</NavigationItem>
    </ShowcaseBox>
}`,...v.parameters?.docs?.source},description:{story:"`<button disabled>`, or a link with `aria-disabled`, no `href` and blocked clicks.",...v.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [...NAVIGATION_ITEM_SIZES]
    }
  },
  args: {
    size: 'md',
    trailingIcon: FIGMA_RIGHT_ICON
  },
  render: ({
    size,
    leadingIcon,
    trailingIcon,
    children
  }) => <div style={gridStyle(STATES.length)}>
      <div />
      {STATES.map(s => <div key={s} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {NAVIGATION_ITEM_TYPES.flatMap(type => SELECTION.map(sel => <Row key={\`\${type}-\${sel}\`}>
            <div style={{
        textTransform: 'capitalize'
      }}>{\`\${type} · \${sel}\`}</div>
            {STATES.map(s => <Cell key={s}>
                <NavigationItem type={type} href={type === 'link' ? '#' : undefined} size={size} selected={sel === 'selected'} leadingIcon={leadingIcon} trailingIcon={trailingIcon} {...stateProps(s)}>
                  {children}
                </NavigationItem>
              </Cell>)}
          </Row>))}
    </div>
}`,...I.parameters?.docs?.source},description:{story:"Every type × selection in every Figma state. Hover, pressed and focus are forced with `data-state`.",...I.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={gridStyle(STATES.length * NAVIGATION_ITEM_SIZES.length)}>
      <div />
      {NAVIGATION_ITEM_SIZES.flatMap(size => STATES.map(s => <div key={\`\${size}-\${s}\`} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{\`\${s} · \${size}\`}</div>))}
      {NAVIGATION_ITEM_TYPES.flatMap(type => SELECTION.map(sel => <Row key={\`\${type}-\${sel}\`}>
            <div style={{
        textTransform: 'capitalize'
      }}>{\`\${type} · \${sel}\`}</div>
            {NAVIGATION_ITEM_SIZES.flatMap(size => STATES.map(s => <Cell key={\`\${size}-\${s}\`}>
                  <NavigationItem type={type} href={type === 'link' ? '#' : undefined} size={size} selected={sel === 'selected'} trailingIcon={FIGMA_RIGHT_ICON} {...stateProps(s)}>
                    Kids
                  </NavigationItem>
                </Cell>))}
          </Row>))}
    </div>
}`,...h.parameters?.docs?.source},description:{story:"The full Figma set (60 variants): type × selection rows, state × size columns.",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={navCss} aliases={NAV_ALIASES} />
}`,...b.parameters?.docs?.source},description:{story:"Properties and tokens read from NavigationItem.module.css, resolved for the active theme.",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <NavigationItemInspect />
}`,...f.parameters?.docs?.source},description:{story:"Pick type, state, selection, size and icons; see real measurements and the tokens that apply.",...f.parameters?.docs?.description}}};const U=["Default","Types","Sizes","Selected","WithIcons","IsDisabled","States","FigmaMatrix","Tokens","Inspect"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:T,FigmaMatrix:h,Inspect:f,IsDisabled:v,Selected:g,Sizes:m,States:I,Tokens:b,Types:p,WithIcons:u,__namedExportsOrder:U,default:H},Symbol.toStringTag,{value:"Module"}));export{T as D,h as F,v as I,X as N,m as S,p as T,u as W,g as a,f as b,I as c,b as d};
