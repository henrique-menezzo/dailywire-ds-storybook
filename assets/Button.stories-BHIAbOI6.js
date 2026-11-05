import{j as n,r as I}from"./iframe-BaE-r_tL.js";import{b as O}from"./Icon-D8yVe6yW.js";import{S}from"./ShowcaseBox-CvpXiMzv.js";import{P as _}from"./PlatformCodeTabs-C6Sz3Igl.js";import{C as E}from"./CssTokens-DoMUOAyj.js";import{I as z,C as N}from"./ComponentInspector-aQuGSI0z.js";import{B as h,a as j,b as t}from"./Button-D39Hxs63.js";const C=`/* ==============================================
 * Button — Daily Wire Design System
 * Figma: Button (7387:18485). All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: var(--border-default) solid var(--btn-border, transparent);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-family: var(--default), sans-serif;
  font-weight: var(--Semibold);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  white-space: nowrap;
  user-select: none;
  text-decoration: none;
  transition:
    background-color 150ms ease,
    color 150ms ease,
    border-color 150ms ease,
    transform 150ms ease;

  background-color: var(--btn-bg, transparent);
  color: var(--btn-text);
}

/* ── Sizes (text styles label/600/sm · md · lg) ── */

.button[data-size='sm'] {
  min-height: var(--size-xl);
  padding: 0 var(--spacing-lg);
  gap: var(--spacing-md);
  font-size: var(--font-size-xs);
}

.button[data-size='md'] {
  min-height: var(--size-3xl);
  padding: 0 var(--spacing-xl);
  gap: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.button[data-size='lg'] {
  min-height: var(--size-4xl);
  padding: 0 var(--spacing-2xl);
  gap: var(--spacing-md);
  font-size: var(--font-size-md);
}

.button[data-icon-only] {
  padding: 0;
}
.button[data-icon-only][data-size='sm'] {
  width: var(--size-xl);
}
.button[data-icon-only][data-size='md'] {
  width: var(--size-3xl);
}
.button[data-icon-only][data-size='lg'] {
  width: var(--size-4xl);
}

/* [data-state] forces hover / pressed / focus for docs and QA (States story) */

/* ── Variant: Primary (inverse) ──────────────── */

.button[data-variant='primary'] {
  --btn-bg: var(--color-background-inverse-bold-default);
  --btn-text: var(--color-text-inverse-bold-default);
  --btn-dots: var(--color-icon-neutral-bold-default);
}
.button[data-variant='primary']:hover:not(:disabled):not([data-loading]),
.button[data-variant='primary'][data-state='hover'] {
  --btn-bg: var(--color-background-inverse-bold-hovered);
  --btn-text: var(--color-text-inverse-bold-hovered);
}
.button[data-variant='primary']:active:not(:disabled):not([data-loading]),
.button[data-variant='primary'][data-state='pressed'] {
  --btn-bg: var(--color-background-inverse-bold-pressed);
  --btn-text: var(--color-text-inverse-bold-pressed);
}
.button[data-variant='primary']:focus-visible,
.button[data-variant='primary'][data-state='focus'] {
  --btn-bg: var(--color-background-inverse-bold-selected);
  --btn-text: var(--color-text-inverse-bold-selected);
}
.button[data-variant='primary']:disabled,
.button[data-variant='primary'][data-loading] {
  --btn-bg: var(--color-background-inverse-bold-disabled);
  --btn-text: var(--color-text-inverse-bold-disabled);
}

/* ── Variant: Secondary (outline) ────────────── */

.button[data-variant='secondary'] {
  --btn-bg: transparent;
  --btn-text: var(--color-text-neutral-bold-default);
  --btn-border: var(--color-border-neutral-bold-default);
  --btn-dots: var(--color-icon-neutral-bold-default);
}
/* hover / pressed: no fill, border stays default, only the label changes (Figma Button 7387:18485) */
.button[data-variant='secondary']:hover:not(:disabled):not([data-loading]),
.button[data-variant='secondary'][data-state='hover'] {
  --btn-text: var(--color-text-neutral-bold-hovered);
}
.button[data-variant='secondary']:active:not(:disabled):not([data-loading]),
.button[data-variant='secondary'][data-state='pressed'] {
  --btn-text: var(--color-text-neutral-bold-pressed);
}
.button[data-variant='secondary']:disabled {
  --btn-text: var(--color-text-neutral-bold-disabled);
  --btn-border: var(--color-border-inverse-bold-disabled);
}

/* ── Variant: Tertiary (neutral fill) ────────── */

.button[data-variant='tertiary'] {
  --btn-bg: var(--color-background-neutral-subtlest-default);
  --btn-text: var(--color-text-neutral-bold-default);
  --btn-dots: var(--color-icon-neutral-bold-default);
}
.button[data-variant='tertiary']:hover:not(:disabled):not([data-loading]),
.button[data-variant='tertiary'][data-state='hover'] {
  --btn-bg: var(--color-background-neutral-subtlest-hovered);
}
.button[data-variant='tertiary']:active:not(:disabled):not([data-loading]),
.button[data-variant='tertiary'][data-state='pressed'] {
  --btn-bg: var(--color-background-neutral-subtlest-pressed);
}
.button[data-variant='tertiary']:disabled {
  --btn-bg: var(--color-background-neutral-subtlest-disabled);
  --btn-text: var(--color-text-neutral-bold-disabled);
}

/* ── Variant: Ghost ──────────────────────────── */

.button[data-variant='ghost'] {
  --btn-bg: transparent;
  --btn-text: var(--color-text-neutral-bold-default);
  --btn-dots: var(--color-icon-neutral-bold-default);
}
.button[data-variant='ghost']:hover:not(:disabled):not([data-loading]),
.button[data-variant='ghost'][data-state='hover'] {
  --btn-bg: var(--color-background-neutral-subtlest-hovered);
}
.button[data-variant='ghost']:active:not(:disabled):not([data-loading]),
.button[data-variant='ghost'][data-state='pressed'] {
  --btn-bg: var(--color-background-neutral-bold-pressed);
  --btn-text: var(--color-text-neutral-bold-pressed);
}
.button[data-variant='ghost']:disabled {
  --btn-text: var(--color-text-neutral-bold-disabled);
}

/* ── Variant: Danger ─────────────────────────── */

.button[data-variant='danger'] {
  --btn-bg: var(--color-background-danger-bold-default);
  --btn-text: var(--color-text-always-light);
  --btn-dots: var(--color-icon-always-light);
}
.button[data-variant='danger']:hover:not(:disabled):not([data-loading]),
.button[data-variant='danger'][data-state='hover'] {
  --btn-bg: var(--color-background-danger-bold-hovered);
}
.button[data-variant='danger']:active:not(:disabled):not([data-loading]),
.button[data-variant='danger'][data-state='pressed'] {
  --btn-bg: var(--color-background-danger-bold-pressed);
}
.button[data-variant='danger']:disabled {
  --btn-bg: var(--color-background-danger-bold-disabled);
  --btn-text: var(--color-text-neutral-bold-disabled);
}

/* ── Variant: Brand ──────────────────────────── */

.button[data-variant='brand'] {
  --btn-bg: var(--color-background-brand-bold-default);
  --btn-text: var(--color-text-always-light);
  --btn-dots: var(--color-icon-always-light);
}
.button[data-variant='brand']:hover:not(:disabled):not([data-loading]),
.button[data-variant='brand'][data-state='hover'] {
  --btn-bg: var(--color-background-brand-bold-hovered);
}
.button[data-variant='brand']:active:not(:disabled):not([data-loading]),
.button[data-variant='brand'][data-state='pressed'] {
  --btn-bg: var(--color-background-brand-bold-pressed);
}
.button[data-variant='brand']:disabled {
  --btn-bg: var(--color-background-brand-bold-disabled);
  --btn-text: var(--color-text-neutral-bold-disabled);
}

/* Figma label: text typed in caps */
.label {
  text-transform: uppercase;
}

.button:active:not(:disabled):not([data-loading]) {
  transform: scale(0.98);
}

/* ── Focus ring: transparent offset, same ring on every variant ── */

.button:focus-visible,
.button[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Disabled / loading ──────────────────────── */

.button:disabled {
  cursor: not-allowed;
}

.button[data-loading] {
  cursor: wait;
  pointer-events: none;
}

.content {
  display: inline-flex;
  align-items: center;
  gap: inherit;
}

/* Figma Loader / Dots: 3 × 8px dots in 36×16, 1 → 0.3 opacity, 280ms ease-in-out loop */
.dots {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: var(--primitive-dimension-dimension-9);
  height: var(--size-sm);
}

.dots > i {
  display: block;
  width: var(--spacing-md);
  height: var(--spacing-md);
  border-radius: var(--border-radius-full);
  background-color: var(--btn-dots);
  animation: btnDots 870ms ease-in-out infinite;
}
.dots > i:nth-child(2) {
  animation-delay: -580ms;
}
.dots > i:nth-child(3) {
  animation-delay: -290ms;
}

@keyframes btnDots {
  0%,
  100% {
    opacity: 1;
  }
  32%,
  67% {
    opacity: 0.3;
  }
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }

  .button:active:not(:disabled):not([data-loading]) {
    transform: none;
  }

  .dots > i {
    animation-duration: 2.6s;
  }
}
`,k=Object.keys(O).sort((e,a)=>e.localeCompare(a)),U={component:t,title:"Components/Button",parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:[...j]},size:{control:"select",options:[...h]},label:{control:"text"},showLabel:{control:"boolean"},leadingIcon:{control:"select",options:k},trailingIcon:{control:"select",options:k},isLoading:{control:"boolean"},disabled:{control:"boolean"}},args:{variant:"primary",size:"md",label:"Button",showLabel:!0,isLoading:!1,disabled:!1}},D=({disabled:e,size:a})=>n.jsxs(S,{children:[n.jsx(t,{size:a,disabled:e,label:"Primary"}),n.jsx(t,{size:a,disabled:e,variant:"secondary",label:"Secondary"}),n.jsx(t,{size:a,disabled:e,variant:"tertiary",label:"Tertiary"}),n.jsx(t,{size:a,disabled:e,variant:"ghost",label:"Ghost"}),n.jsx(t,{size:a,disabled:e,variant:"danger",label:"Danger"}),n.jsx(t,{size:a,disabled:e,variant:"brand",label:"Brand"})]}),P=({disabled:e,size:a})=>n.jsxs(S,{children:[n.jsx(t,{size:a,disabled:e,leadingIcon:"search",label:"Search"}),n.jsx(t,{size:a,disabled:e,variant:"secondary",leadingIcon:"plus",label:"Add Member"}),n.jsx(t,{size:a,disabled:e,variant:"tertiary",leadingIcon:"mail",label:"Email"}),n.jsx(t,{size:a,disabled:e,variant:"danger",leadingIcon:"trash",label:"Delete"}),n.jsx(t,{size:a,disabled:e,variant:"brand",leadingIcon:"player-play-outline",label:"Watch"})]}),M=({disabled:e,size:a,variant:r})=>n.jsx(S,{children:n.jsx(t,{size:a,disabled:e,variant:r??"tertiary",leadingIcon:"dots-vertical",showLabel:!1,"aria-label":"More options"})}),R=()=>n.jsxs(S,{direction:"column",style:{gap:24},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx(t,{size:"sm",label:"Small"}),n.jsx(t,{size:"md",label:"Medium"}),n.jsx(t,{size:"lg",label:"Large"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx(t,{size:"sm",variant:"secondary",leadingIcon:"plus",label:"Small"}),n.jsx(t,{size:"md",variant:"secondary",leadingIcon:"plus",label:"Medium"}),n.jsx(t,{size:"lg",variant:"secondary",leadingIcon:"plus",label:"Large"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx(t,{size:"sm",variant:"tertiary",leadingIcon:"dots-vertical",showLabel:!1,"aria-label":"More"}),n.jsx(t,{size:"md",variant:"tertiary",leadingIcon:"dots-vertical",showLabel:!1,"aria-label":"More"}),n.jsx(t,{size:"lg",variant:"tertiary",leadingIcon:"dots-vertical",showLabel:!1,"aria-label":"More"})]})]}),$=({size:e})=>n.jsx(S,{children:j.map(a=>n.jsx(t,{size:e,variant:a,isLoading:!0,label:`${a} loading`},a))}),c={},b={render:()=>n.jsx(D,{})},u={render:()=>n.jsx(R,{})},p={render:()=>n.jsx(P,{})},m={render:()=>n.jsx(M,{})},g={render:()=>n.jsx($,{})},v={render:()=>n.jsx(D,{disabled:!0})},x={name:"All icons",parameters:{layout:"fullscreen"},render:e=>n.jsx("div",{style:{padding:24,display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:12,alignItems:"start"},children:k.map(a=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,fontSize:11,color:"var(--color-text-neutral-subtlest-default)",textAlign:"center",wordBreak:"break-word"},children:[n.jsx(t,{...e,leadingIcon:a,showLabel:!1,"aria-label":a}),n.jsx("span",{children:a})]},a))})},y={parameters:{layout:"fullscreen"},render:()=>{const e=["default","disabled","loading"];return n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(3, 1fr)",gap:"24px 16px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[n.jsx("div",{}),e.map(a=>n.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:a},a)),j.map(a=>h.map((r,o)=>n.jsxs(W,{children:[o===0&&n.jsx("div",{style:{gridRow:`span ${h.length}`,alignSelf:"center",textTransform:"capitalize"},children:a}),n.jsx(T,{children:n.jsx(t,{variant:a,size:r,label:r.toUpperCase(),leadingIcon:"plus"})}),n.jsx(T,{children:n.jsx(t,{variant:a,size:r,label:r.toUpperCase(),leadingIcon:"plus",disabled:!0})}),n.jsx(T,{children:n.jsx(t,{variant:a,size:r,label:r.toUpperCase(),leadingIcon:"plus",isLoading:!0})})]},`${a}-${r}`)))]})}};function W({children:e}){return n.jsx(n.Fragment,{children:e})}function T({children:e}){return n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e})}const f={name:"Platform Code",tags:["!test"],parameters:{layout:"centered"},render:()=>n.jsxs("div",{style:{maxWidth:640},children:[n.jsx(t,{label:"Subscribe",variant:"primary",size:"md",leadingIcon:"plus"}),n.jsx(_,{web:`import { Button } from '@dailywire-ds/react'

<Button
  variant="primary"
  size="md"
  label="Subscribe"
  leadingIcon="plus"
  onClick={() => {}}
/>`,ios:`import DailyWireDS

DWButton("Subscribe", variant: .primary, size: .md) {
    // action
}`,android:`import com.dailywire.ds.DWButton
import com.dailywire.ds.DWButtonVariant
import com.dailywire.ds.DWButtonSize

DWButton(
    label = "Subscribe",
    variant = DWButtonVariant.Primary,
    size = DWButtonSize.Medium,
    onClick = { /* action */ },
)`})]})},w=["default","hover","pressed","focus","disabled","loading"],i={parameters:{layout:"fullscreen"},argTypes:{size:{control:"inline-radio",options:[...h]}},args:{size:"md",leadingIcon:"plus"},render:({size:e,leadingIcon:a})=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${w.length}, 1fr)`,gap:"20px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[n.jsx("div",{}),w.map(r=>n.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:r},r)),j.map(r=>n.jsxs(W,{children:[n.jsx("div",{style:{textTransform:"capitalize"},children:r}),w.map(o=>n.jsx(T,{children:n.jsx(t,{variant:r,size:e,leadingIcon:a,label:r,disabled:o==="disabled",isLoading:o==="loading",...["hover","pressed","focus"].includes(o)?{"data-state":o}:{}})},o))]},r))]})},l={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>n.jsx(E,{css:C,aliases:A})},A={"--btn-bg":"background","--btn-text":"color","--btn-border":"border-color","--btn-dots":"loader dots"},F=["none","left","right","both","only"];function Z(){const[e,a]=I.useState("primary"),[r,o]=I.useState("default"),[B,L]=I.useState("md"),[s,V]=I.useState("left");return n.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[n.jsx(z,{label:"Variant",options:j,value:e,onChange:a}),n.jsx(z,{label:"State",options:w,value:r,onChange:o}),n.jsx(z,{label:"Size",options:h,value:B,onChange:L}),n.jsx(z,{label:"Icon",options:F,value:s,onChange:V}),n.jsx(N,{css:C,aliases:A,group:e,state:r,size:B,iconOnly:s==="only",children:n.jsx(t,{variant:e,size:B,label:e,leadingIcon:["left","both","only"].includes(s)?"plus":void 0,trailingIcon:["right","both"].includes(s)?"arrow-narrow-right":void 0,showLabel:s!=="only","aria-label":s==="only"?e:void 0,disabled:r==="disabled",isLoading:r==="loading",...["hover","pressed","focus"].includes(r)?{"data-state":r}:{}})})]})}const d={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>n.jsx(Z,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <VariantsTemplate />
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SizesTemplate />
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <WithIconTemplate />
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <IconOnlyTemplate />
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <LoadingTemplate />
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <VariantsTemplate disabled />
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'All icons',
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    padding: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: 12,
    alignItems: 'start'
  }}>
      {iconNames.map(name => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      fontSize: 11,
      color: 'var(--color-text-neutral-subtlest-default)',
      textAlign: 'center',
      wordBreak: 'break-word'
    }}>
          <Button {...args} leadingIcon={name} showLabel={false} aria-label={name} />
          <span>{name}</span>
        </div>)}
    </div>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => {
    const states = ['default', 'disabled', 'loading'] as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto repeat(3, 1fr)',
      gap: '24px 16px',
      padding: 24,
      alignItems: 'center',
      fontSize: 12,
      color: 'var(--color-text-neutral-subtlest-default)'
    }}>
        <div />
        {states.map(s => <div key={s} style={{
        textAlign: 'center',
        textTransform: 'capitalize'
      }}>{s}</div>)}
        {BUTTON_VARIANTS.map(variant => BUTTON_SIZES.map((size, sizeIdx) => <Row key={\`\${variant}-\${size}\`}>
              {sizeIdx === 0 && <div style={{
          gridRow: \`span \${BUTTON_SIZES.length}\`,
          alignSelf: 'center',
          textTransform: 'capitalize'
        }}>
                  {variant}
                </div>}
              <Cell><Button variant={variant} size={size} label={size.toUpperCase()} leadingIcon="plus" /></Cell>
              <Cell><Button variant={variant} size={size} label={size.toUpperCase()} leadingIcon="plus" disabled /></Cell>
              <Cell><Button variant={variant} size={size} label={size.toUpperCase()} leadingIcon="plus" isLoading /></Cell>
            </Row>))}
      </div>;
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Platform Code',
  tags: ['!test'],
  parameters: {
    layout: 'centered'
  },
  render: () => <div style={{
    maxWidth: 640
  }}>
      <Button label="Subscribe" variant="primary" size="md" leadingIcon="plus" />
      <PlatformCodeTabs web={\`import { Button } from '@dailywire-ds/react'

<Button
  variant="primary"
  size="md"
  label="Subscribe"
  leadingIcon="plus"
  onClick={() => {}}
/>\`} ios={\`import DailyWireDS

DWButton("Subscribe", variant: .primary, size: .md) {
    // action
}\`} android={\`import com.dailywire.ds.DWButton
import com.dailywire.ds.DWButtonVariant
import com.dailywire.ds.DWButtonSize

DWButton(
    label = "Subscribe",
    variant = DWButtonVariant.Primary,
    size = DWButtonSize.Medium,
    onClick = { /* action */ },
)\`} />
    </div>
}`,...f.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [...BUTTON_SIZES]
    }
  },
  args: {
    size: 'md',
    leadingIcon: 'plus'
  },
  render: ({
    size,
    leadingIcon
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
      {BUTTON_VARIANTS.map(variant => <Row key={variant}>
          <div style={{
        textTransform: 'capitalize'
      }}>{variant}</div>
          {STATES.map(s => <Cell key={s}>
              <Button variant={variant} size={size} leadingIcon={leadingIcon} label={variant} disabled={s === 'disabled'} isLoading={s === 'loading'} {...['hover', 'pressed', 'focus'].includes(s) ? {
          'data-state': s
        } : {}} />
            </Cell>)}
        </Row>)}
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every variant in every state. Hover / pressed / focus are forced with `data-state`.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={buttonCss} aliases={BUTTON_ALIASES} />
}`,...l.parameters?.docs?.source},description:{story:"Properties and tokens read from Button.module.css, resolved for the active theme.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ButtonInspect />
}`,...d.parameters?.docs?.source},description:{story:"Pick variant, state, size and icons; see real measurements and the tokens that apply. Hover a token to locate it.",...d.parameters?.docs?.description}}};const G=["Default","Variants","Sizes","WithIcon","WithIconOnly","WithLoading","IsDisabled","AllIcons","VariantSizeMatrix","PlatformCode","States","Tokens","Inspect"],nn=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:x,Default:c,Inspect:d,IsDisabled:v,PlatformCode:f,Sizes:u,States:i,Tokens:l,VariantSizeMatrix:y,Variants:b,WithIcon:p,WithIconOnly:m,WithLoading:g,__namedExportsOrder:G,default:U},Symbol.toStringTag,{value:"Module"}));export{nn as B,c as D,d as I,u as S,l as T,b as V,p as W,m as a,g as b,i as c,v as d,y as e};
