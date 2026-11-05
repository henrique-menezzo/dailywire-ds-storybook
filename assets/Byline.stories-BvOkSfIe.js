import{j as e,r as g}from"./iframe-BaE-r_tL.js";import{H as R,P as O}from"./index-DO2tlVwn.js";import{S as A}from"./ShowcaseBox-CvpXiMzv.js";import{C as z}from"./CssTokens-DoMUOAyj.js";import{I as x,C as Y}from"./ComponentInspector-aQuGSI0z.js";import{l as E}from"./Link.module-BLmoWX-e.js";import{B as S,a as l,b as s}from"./Byline-CDW89dVi.js";const k=`/* ==============================================
 * Byline — Daily Wire Design System
 * Figma: Byline (8210:45616), doc frame 8413:61617, section "Article" (8413:56868).
 * state default | hover | focused | disabled × size sm | md × style secondary | primary, + Show Avatar.
 * Avatar (2xsm, Type=Hosts) + Link Button (underline off, weight regular).
 * With href the root is the DS Link (<a>): its colors, focus ring and disabled state come from
 * Link.module.css. This file adds the avatar layout, the hover underline and the static (no href) look.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Root (Link <a>, or <span> when static) ──── */

.byline {
  position: relative;
  /* Figma root corner radius (shapes the focus ring) */
  border-radius: var(--border-radius-sm);
}

/* ── Static: no href, same look as the Link default state (label/400/sm · md) ── */

.byline[data-static] {
  /* not a positioning context: inside a card, clicks on the name fall through to the stretched card link */
  position: static;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  font-family: var(--default), sans-serif;
  font-weight: var(--Regular);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--byline-text);
}

.byline[data-static][data-size='sm'] {
  font-size: var(--font-size-xs);
}

.byline[data-static][data-size='md'] {
  font-size: var(--font-size-sm);
}

/* Disabled first: the style defaults below must not read as the disabled state (docs token parser) */
.byline[data-static][data-variant='primary'][data-disabled] {
  --byline-text: var(--color-text-neutral-bold-disabled);
}

.byline[data-static][data-variant='secondary'][data-disabled] {
  --byline-text: var(--color-text-neutral-subtlest-disabled);
}

.byline[data-static][data-variant='primary']:not([data-disabled]) {
  --byline-text: var(--color-text-neutral-bold-default);
}

.byline[data-static][data-variant='secondary']:not([data-disabled]) {
  --byline-text: var(--color-text-neutral-subtlest-default);
}

/* ── Content: avatar + name (Figma gap spacing-sm, items centered) ── */

.content {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  /* Sits inside Link's inline label: top alignment keeps the row at the avatar height (no baseline gap) */
  vertical-align: top;
}

.name {
  white-space: nowrap;
}

/* ── Hover: Figma underlines the name (Link Button instance override) ── */

.byline:hover:not([data-static]):not([aria-disabled='true']) .name,
.byline[data-state='hover'] .name {
  text-decoration-line: underline;
}

/* ── Touch target ────────────────────────────── */
/* The link is 12–14px tall without avatar, 32px with it. On touch screens the hit area grows to
 * --touch-target-min without changing layout. */

@media (pointer: coarse) {
  .byline:not([data-static])::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: max(100%, var(--touch-target-min));
    transform: translateY(-50%);
  }
}
`,{fn:F}=__STORYBOOK_MODULE_TEST__,H="Author",B={type:"host",src:R["Ben Shapiro"]},V={component:s,title:"Components/Byline",parameters:{layout:"centered"},argTypes:{author:{control:"text"},href:{control:"text"},variant:{control:"inline-radio",options:[...l]},size:{control:"inline-radio",options:[...S]},showAvatar:{control:"boolean"},avatar:{control:"object"},disabled:{control:"boolean"}},args:{author:H,href:"#",variant:"secondary",size:"sm",showAvatar:!1,avatar:B,disabled:!1,onClick:F()}},b={},d={render:a=>e.jsx(A,{children:l.map(t=>e.jsx(s,{...a,variant:t,author:"Ben Shapiro"},t))})},c={render:a=>e.jsx(A,{direction:"column",style:{gap:24},children:[!1,!0].map(t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24},children:S.map(r=>e.jsx(s,{...a,size:r,showAvatar:t,author:"Ben Shapiro"},r))},String(t)))})},p={render:a=>e.jsxs(A,{direction:"column",style:{alignItems:"flex-start",gap:16},children:[e.jsx(s,{...a,showAvatar:!0,author:"Ben Shapiro",avatar:B}),e.jsx(s,{...a,showAvatar:!0,author:"Carla Mendes",avatar:{type:"person",src:O.Carla}}),e.jsx(s,{...a,showAvatar:!0,author:"Mary Margaret",avatar:{type:"initials"}}),e.jsx(s,{...a,showAvatar:!0,author:"Georgia Howe",avatar:void 0})]})},h={render:a=>e.jsx(A,{children:l.map(t=>e.jsx(s,{...a,href:void 0,variant:t,showAvatar:!0,author:"Ben Shapiro"},t))})},u={render:a=>e.jsx(A,{children:l.map(t=>e.jsx(s,{...a,variant:t,disabled:!0,author:"Ben Shapiro"},t))})},i=["default","hover","focus","disabled"],I=a=>({disabled:a==="disabled",...a==="hover"||a==="focus"?{"data-state":a}:{}});function _({children:a}){return e.jsx(e.Fragment,{children:a})}function C({children:a}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:a})}const L=a=>({display:"grid",gridTemplateColumns:`auto repeat(${a}, max-content)`,gap:"20px 24px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"}),m={parameters:{layout:"fullscreen"},render:({size:a,author:t})=>e.jsxs("div",{style:L(i.length),children:[e.jsx("div",{}),i.map(r=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:r},r)),l.flatMap(r=>[!1,!0].map(o=>e.jsxs(_,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${r} · avatar ${o?"on":"off"}`}),i.map(n=>e.jsx(C,{children:e.jsx(s,{href:"#",author:t,size:a,variant:r,showAvatar:o,avatar:B,...I(n)})},n))]},`${r}-${o}`)))]})},v={parameters:{layout:"fullscreen"},render:({author:a})=>e.jsxs("div",{style:L(i.length*S.length),children:[e.jsx("div",{}),i.flatMap(t=>S.map(r=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:`${t} · ${r}`},`${t}-${r}`))),l.flatMap(t=>[!1,!0].map(r=>e.jsxs(_,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${t} · avatar ${r?"on":"off"}`}),i.flatMap(o=>S.map(n=>e.jsx(C,{children:e.jsx(s,{href:"#",author:a,size:n,variant:t,showAvatar:r,avatar:B,...I(o)})},`${o}-${n}`)))]},`${t}-${r}`)))]})},T={"--byline-text":"color","--link-text":"color","--link-icon":"icon color","--link-weight":"font-weight"},y={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontSize:16,color:"var(--color-text-neutral-bold-default)"},children:"Byline.module.css"}),e.jsx(z,{css:k,aliases:T}),e.jsx("h2",{style:{margin:"32px 0 0",fontSize:16,color:"var(--color-text-neutral-bold-default)"},children:"Nested Link.module.css (with href)"}),e.jsx(z,{css:E,aliases:T})]})},D=`${k}
${E.replace(/\.link\b/g,".byline")}`,P=["off","on"],W=["link","static"];function G(){const[a,t]=g.useState("secondary"),[r,o]=g.useState("default"),[n,$]=g.useState("sm"),[j,N]=g.useState("on"),[w,M]=g.useState("link");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(x,{label:"Style",options:l,value:a,onChange:t}),e.jsx(x,{label:"State",options:i,value:r,onChange:o}),e.jsx(x,{label:"Size",options:S,value:n,onChange:$}),e.jsx(x,{label:"Avatar",options:P,value:j,onChange:N}),e.jsx(x,{label:"Href",options:W,value:w,onChange:M}),e.jsx(Y,{css:w==="link"?D:k,aliases:T,group:a,state:r,size:n,children:e.jsx(s,{href:w==="link"?"#":void 0,author:"Ben Shapiro",variant:a,size:n,showAvatar:j==="on",avatar:B,...I(r)})})]})}const f={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(G,{})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox>
      {BYLINE_VARIANTS.map(variant => <Byline key={variant} {...args} variant={variant} author="Ben Shapiro" />)}
    </ShowcaseBox>
}`,...d.parameters?.docs?.source},description:{story:"Figma `style`: secondary (neutral-subtlest, the default) and primary (neutral-bold).",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox direction="column" style={{
    gap: 24
  }}>
      {[false, true].map(showAvatar => <div key={String(showAvatar)} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
          {BYLINE_SIZES.map(size => <Byline key={size} {...args} size={size} showAvatar={showAvatar} author="Ben Shapiro" />)}
        </div>)}
    </ShowcaseBox>
}`,...c.parameters?.docs?.source},description:{story:"sm = 12px label, md = 14px label. The avatar stays 32px (`2xsm`) on both.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'flex-start',
    gap: 16
  }}>
      <Byline {...args} showAvatar author="Ben Shapiro" avatar={HOST_AVATAR} />
      <Byline {...args} showAvatar author="Carla Mendes" avatar={{
      type: 'person',
      src: PERSON_IMAGES.Carla
    }} />
      <Byline {...args} showAvatar author="Mary Margaret" avatar={{
      type: 'initials'
    }} />
      <Byline {...args} showAvatar author="Georgia Howe" avatar={undefined} />
    </ShowcaseBox>
}`,...p.parameters?.docs?.source},description:{story:"Figma `Show Avatar`: host photo, person photo, initials, and the initials fallback derived from the name.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox>
      {BYLINE_VARIANTS.map(variant => <Byline key={variant} {...args} href={undefined} variant={variant} showAvatar author="Ben Shapiro" />)}
    </ShowcaseBox>
}`,...h.parameters?.docs?.source},description:{story:"Without `href` the byline is static text (a `<span>`), for use inside a card that is already one link.",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox>
      {BYLINE_VARIANTS.map(variant => <Byline key={variant} {...args} variant={variant} disabled author="Ben Shapiro" />)}
    </ShowcaseBox>
}`,...u.parameters?.docs?.source},description:{story:"`aria-disabled`, no `href`, clicks blocked.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: ({
    size,
    author
  }) => <div style={gridStyle(STATES.length)}>
      <div />
      {STATES.map(s => <div key={s} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {BYLINE_VARIANTS.flatMap(variant => [false, true].map(showAvatar => <Row key={\`\${variant}-\${showAvatar}\`}>
            <div style={{
        textTransform: 'capitalize'
      }}>{\`\${variant} · avatar \${showAvatar ? 'on' : 'off'}\`}</div>
            {STATES.map(s => <Cell key={s}>
                <Byline href="#" author={author} size={size} variant={variant} showAvatar={showAvatar} avatar={HOST_AVATAR} {...stateProps(s)} />
              </Cell>)}
          </Row>))}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Every style × avatar in every Figma state. Hover and focus are forced with `data-state`.",...m.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: ({
    author
  }) => <div style={gridStyle(STATES.length * BYLINE_SIZES.length)}>
      <div />
      {STATES.flatMap(s => BYLINE_SIZES.map(size => <div key={\`\${s}-\${size}\`} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{\`\${s} · \${size}\`}</div>))}
      {BYLINE_VARIANTS.flatMap(variant => [false, true].map(showAvatar => <Row key={\`\${variant}-\${showAvatar}\`}>
            <div style={{
        textTransform: 'capitalize'
      }}>{\`\${variant} · avatar \${showAvatar ? 'on' : 'off'}\`}</div>
            {STATES.flatMap(s => BYLINE_SIZES.map(size => <Cell key={\`\${s}-\${size}\`}>
                  <Byline href="#" author={author} size={size} variant={variant} showAvatar={showAvatar} avatar={HOST_AVATAR} {...stateProps(s)} />
                </Cell>))}
          </Row>))}
    </div>
}`,...v.parameters?.docs?.source},description:{story:"The full Figma set (16 variants × Show Avatar): style × avatar rows, state × size columns.",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div>
      <h2 style={{
      margin: 0,
      fontSize: 16,
      color: 'var(--color-text-neutral-bold-default)'
    }}>Byline.module.css</h2>
      <CssTokens css={bylineCss} aliases={BYLINE_ALIASES} />
      <h2 style={{
      margin: '32px 0 0',
      fontSize: 16,
      color: 'var(--color-text-neutral-bold-default)'
    }}>Nested Link.module.css (with href)</h2>
      <CssTokens css={linkCss} aliases={BYLINE_ALIASES} />
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Byline.module.css (layout, hover underline, static look) and the nested Link.module.css (colors, focus, disabled).",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <BylineInspect />
}`,...f.parameters?.docs?.source},description:{story:"Pick style, state, size, avatar and href; see real measurements and the tokens that apply. Hover a token to locate it.",...f.parameters?.docs?.description}}};const Z=["Default","Variants","Sizes","WithAvatar","Static","IsDisabled","States","FigmaMatrix","Tokens","Inspect"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:b,FigmaMatrix:v,Inspect:f,IsDisabled:u,Sizes:c,States:m,Static:h,Tokens:y,Variants:d,WithAvatar:p,__namedExportsOrder:Z,default:V},Symbol.toStringTag,{value:"Module"}));export{ae as B,b as D,v as F,u as I,c as S,y as T,d as V,p as W,h as a,f as b,m as c};
