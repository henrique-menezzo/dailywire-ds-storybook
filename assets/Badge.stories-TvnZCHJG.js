import{j as e,r as l}from"./iframe-BaE-r_tL.js";import{b as O}from"./Icon-D8yVe6yW.js";import{S as w}from"./ShowcaseBox-CvpXiMzv.js";import{C as M}from"./CssTokens-DoMUOAyj.js";import{I as c,C as N}from"./ComponentInspector-aQuGSI0z.js";import{B as I,a as t,b as A,c as i,d as r}from"./Badge-DXeWmLrm.js";const C=`/* ==============================================
 * Badge — Daily Wire Design System
 * Figma: Badge (6:10067), doc frame 2:12332, page "Badges, Labels, Filters, Chips, Tags".
 * style brand | inverse | translucid | subtle × size xsm | sm | md
 * × weight regular | medium | semibold × border-radius none | sm (sm and md only).
 * Static display element: Figma draws no hover / pressed / focus / disabled states.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: var(--border-radius-none);
  font-family: var(--default), sans-serif;
  font-weight: var(--Regular);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  white-space: nowrap;
  vertical-align: middle;

  background-color: var(--badge-bg);
  color: var(--badge-text);
}

/* ── Sizes (text styles label/<weight>/xs · sm · md; height hugs: 18 · 20 · 26) ── */

.badge[data-size='xsm'] {
  padding: var(--spacing-xs) var(--spacing-md);
  gap: var(--spacing-xs);
  font-size: var(--font-size-xxs);
}

.badge[data-size='sm'] {
  padding: var(--spacing-xs) var(--spacing-md);
  gap: var(--spacing-xs);
  font-size: var(--font-size-xs);
}

.badge[data-size='md'] {
  padding: var(--spacing-sm) var(--spacing-lg);
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
}

/* ── Weight ──────────────────────────────────── */

.badge[data-weight='medium'] {
  font-weight: var(--Medium);
}

.badge[data-weight='semibold'] {
  font-weight: var(--Semibold);
}

/* ── Border radius (Figma binds \`none\` to the legacy Bases/Corner Radius/radius-none) ── */

.badge[data-radius='sm'] {
  border-radius: var(--border-radius-sm);
}

/* ── Style: Brand ────────────────────────────── */

.badge[data-variant='brand'] {
  --badge-bg: var(--color-background-brand-bold-default);
  --badge-text: var(--color-text-always-light);
  /* Figma: icon + dot bound to color/icon/neutral/bold/default (dark on red in Light).
   * always-light matches the label and the Figma Dark rendering. */
  --badge-icon: var(--color-icon-always-light);
  --badge-dot: var(--color-icon-always-light);
}

/* ── Style: Inverse (light surface in both themes) ── */

.badge[data-variant='inverse'] {
  --badge-bg: var(--color-background-always-light);
  --badge-text: var(--color-text-always-dark);
  /* Figma: icon bound to color/icon/inverse/bold/default (light on light in Light).
   * always-dark matches the label and the Figma Dark rendering. */
  --badge-icon: var(--color-icon-always-dark);
  --badge-dot: var(--color-icon-brand-bold-default);
}

/* ── Style: Translucid (dark glass over imagery, same in both themes) ── */

.badge[data-variant='translucid'] {
  /* Figma: this token at 80% layer opacity (≈ 64% black); no opacity token, token used as is */
  --badge-bg: var(--color-overlay-neutral-strong-default);
  --badge-text: var(--color-text-always-light);
  /* Figma: icon bound to color/icon/neutral/bold/default (dark on dark in Light) */
  --badge-icon: var(--color-icon-always-light);
  --badge-dot: var(--color-icon-brand-bold-default);
  /* Figma background blur 30 ≈ CSS blur 15px; no blur token, closest dimension used (as IconButton) */
  -webkit-backdrop-filter: blur(var(--primitive-dimension-dimension-4));
  backdrop-filter: blur(var(--primitive-dimension-dimension-4));
}

/* ── Style: Subtle (neutral fill, follows the theme) ── */

.badge[data-variant='subtle'] {
  --badge-bg: var(--color-background-neutral-subtlest-default);
  --badge-text: var(--color-text-neutral-bold-default);
  /* Figma: icon bound to color/icon/inverse/bold/default (low contrast in both themes).
   * neutral/bold pairs with the label color. */
  --badge-icon: var(--color-icon-neutral-bold-default);
  --badge-dot: var(--color-icon-brand-bold-default);
}

/* ── Parts ───────────────────────────────────── */

.content {
  display: inline-flex;
  align-items: center;
  gap: inherit;
}

/* Figma utility / Size=sm: 16px glyph box */
.icon {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--badge-icon);
}

/* Figma StatusDot / Size=md: 16px box with an 8px dot */
.statusDot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--size-sm);
  height: var(--size-sm);
}

.dot {
  width: var(--spacing-md);
  height: var(--spacing-md);
  border-radius: var(--border-radius-full);
  background-color: var(--badge-dot);
}
`,V=Object.keys(O).sort((a,n)=>a.localeCompare(n)),j="calendar-up",H={component:r,title:"Components/Badge",parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:[...i]},size:{control:"inline-radio",options:[...A]},weight:{control:"inline-radio",options:[...t]},radius:{control:"inline-radio",options:[...I]},statusDot:{control:"boolean"},leadingIcon:{control:"select",options:V},children:{control:"text"}},args:{variant:"brand",size:"xsm",weight:"regular",radius:"none",statusDot:!1,children:"Label Text"}},k=a=>a.charAt(0).toUpperCase()+a.slice(1),g={},p={args:{size:"md"},render:a=>e.jsx(w,{children:i.map(n=>e.jsx(r,{...a,variant:n,children:k(n)},n))})},m={render:a=>e.jsx(w,{children:A.map(n=>e.jsx(r,{...a,size:n,children:n.toUpperCase()},n))})},u={args:{size:"md"},render:a=>e.jsx(w,{children:t.map(n=>e.jsx(r,{...a,weight:n,children:k(n)},n))})},h={args:{size:"md"},render:a=>e.jsx(w,{children:I.map(n=>e.jsx(r,{...a,radius:n,children:`Radius ${n}`},n))})},b={args:{size:"md",statusDot:!0,children:"Live"},render:a=>e.jsx(w,{children:i.map(n=>e.jsx(r,{...a,variant:n},n))})},v={args:{size:"md",leadingIcon:j,children:"Coming soon"},render:a=>e.jsx(w,{children:i.map(n=>e.jsx(r,{...a,variant:n},n))})},z=["plain","dot","icon","dot + icon"],P=a=>({statusDot:a==="dot"||a==="dot + icon",leadingIcon:a==="icon"||a==="dot + icon"?j:void 0}),G={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},x={parameters:{layout:"fullscreen",controls:{include:["size","children"]}},args:{size:"md"},render:({size:a="md",children:n})=>e.jsx("div",{style:{padding:24,overflowX:"auto"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${t.length*z.length}, auto)`,gap:"16px 12px",alignItems:"center",justifyItems:"start",...G},children:[e.jsx("div",{}),t.map(s=>e.jsx("div",{style:{gridColumn:`span ${z.length}`,textTransform:"capitalize",fontWeight:600},children:s},s)),e.jsx("div",{}),t.flatMap(s=>z.map(o=>e.jsx("div",{children:o},`${s}-${o}`))),i.flatMap(s=>I.map(o=>e.jsxs(_,{children:[e.jsx("div",{style:{whiteSpace:"nowrap"},children:`${k(s)} · radius ${o}`}),t.flatMap(d=>z.map(B=>a==="xsm"&&o==="sm"?e.jsx("div",{children:"not in Figma"},`${d}-${B}`):e.jsx(r,{variant:s,size:a,weight:d,radius:o,...P(B),children:n},`${d}-${B}`)))]},`${s}-${o}`)))]})})},f={name:"Full matrix",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${i.length*t.length}, auto)`,gap:"16px 12px",padding:24,alignItems:"center",justifyItems:"start",...G},children:[e.jsx("div",{}),i.map(a=>e.jsx("div",{style:{gridColumn:`span ${t.length}`,textTransform:"capitalize",fontWeight:600},children:a},a)),A.map(a=>e.jsxs(_,{children:[e.jsx("div",{children:a}),i.flatMap(n=>t.map(s=>e.jsx(r,{variant:n,size:a,weight:s,children:"Label Text"},`${n}-${s}`)))]},a))]})};function _({children:a}){return e.jsx(e.Fragment,{children:a})}const $={"--badge-bg":"background","--badge-text":"color","--badge-icon":"icon color","--badge-dot":"dot icon color"},y={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(M,{css:C,aliases:$})},U=["off","on"],Z=["none","left"];function X(){const[a,n]=l.useState("brand"),[s,o]=l.useState("md"),[d,B]=l.useState("regular"),[F,R]=l.useState("sm"),[D,W]=l.useState("off"),[E,L]=l.useState("none"),T=s==="xsm"?"none":F;return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(c,{label:"Style",options:i,value:a,onChange:n}),e.jsx(c,{label:"Size",options:A,value:s,onChange:o}),e.jsx(c,{label:"Weight",options:t,value:d,onChange:B}),e.jsx(c,{label:"Radius",options:s==="xsm"?I.slice(0,1):I,value:T,onChange:R}),e.jsx(c,{label:"Status dot",options:U,value:D,onChange:W}),e.jsx(c,{label:"Icon",options:Z,value:E,onChange:L}),e.jsx(N,{css:C,aliases:$,group:a,state:"default",size:s,children:e.jsx(r,{variant:a,size:s,weight:d,radius:T,statusDot:D==="on",leadingIcon:E==="left"?j:void 0,children:"Label Text"})})]})}const S={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(X,{})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source},description:{story:"Figma defaults: brand · xsm · regular · radius none",...g.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => <ShowcaseBox>
      {BADGE_VARIANTS.map(variant => <Badge key={variant} {...args} variant={variant}>{label(variant)}</Badge>)}
    </ShowcaseBox>
}`,...p.parameters?.docs?.source},description:{story:"The four Figma styles at size md.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox>
      {BADGE_SIZES.map(size => <Badge key={size} {...args} size={size}>{size.toUpperCase()}</Badge>)}
    </ShowcaseBox>
}`,...m.parameters?.docs?.source},description:{story:"xsm 18px · sm 20px · md 26px (height hugs the label).",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => <ShowcaseBox>
      {BADGE_WEIGHTS.map(weight => <Badge key={weight} {...args} weight={weight}>{label(weight)}</Badge>)}
    </ShowcaseBox>
}`,...u.parameters?.docs?.source},description:{story:"label/400 · 500 · 600.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => <ShowcaseBox>
      {BADGE_RADII.map(radius => <Badge key={radius} {...args} radius={radius}>{\`Radius \${radius}\`}</Badge>)}
    </ShowcaseBox>
}`,...h.parameters?.docs?.source},description:{story:"none (0) and sm (4px). Figma draws `sm` only for sizes sm and md.",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    statusDot: true,
    children: 'Live'
  },
  render: args => <ShowcaseBox>
      {BADGE_VARIANTS.map(variant => <Badge key={variant} {...args} variant={variant} />)}
    </ShowcaseBox>
}`,...b.parameters?.docs?.source},description:{story:"Show Status Dot: 16px box with an 8px dot before the label.",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    leadingIcon: FIGMA_ICON,
    children: 'Coming soon'
  },
  render: args => <ShowcaseBox>
      {BADGE_VARIANTS.map(variant => <Badge key={variant} {...args} variant={variant} />)}
    </ShowcaseBox>
}`,...v.parameters?.docs?.source},description:{story:"Show left icon: 16px glyph before the label (Figma default `calendar-up`).",...v.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    controls: {
      include: ['size', 'children']
    }
  },
  args: {
    size: 'md'
  },
  render: ({
    size = 'md',
    children
  }) => <div style={{
    padding: 24,
    overflowX: 'auto'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: \`auto repeat(\${BADGE_WEIGHTS.length * SLOTS.length}, auto)\`,
      gap: '16px 12px',
      alignItems: 'center',
      justifyItems: 'start',
      ...muted
    }}>
        <div />
        {BADGE_WEIGHTS.map(w => <div key={w} style={{
        gridColumn: \`span \${SLOTS.length}\`,
        textTransform: 'capitalize',
        fontWeight: 600
      }}>{w}</div>)}
        <div />
        {BADGE_WEIGHTS.flatMap(w => SLOTS.map(s => <div key={\`\${w}-\${s}\`}>{s}</div>))}
        {BADGE_VARIANTS.flatMap(variant => BADGE_RADII.map(radius => <Row key={\`\${variant}-\${radius}\`}>
              <div style={{
          whiteSpace: 'nowrap'
        }}>{\`\${label(variant)} · radius \${radius}\`}</div>
              {BADGE_WEIGHTS.flatMap(weight => SLOTS.map(slot => size === 'xsm' && radius === 'sm' ? <div key={\`\${weight}-\${slot}\`}>not in Figma</div> : <Badge key={\`\${weight}-\${slot}\`} variant={variant} size={size} weight={weight} radius={radius} {...slotProps(slot)}>
                      {children}
                    </Badge>))}
            </Row>))}
      </div>
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Badge is static: Figma draws no hover / pressed / focus / disabled.
Every style × radius (rows) × weight (column groups), each with dot / icon off and on.`,...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Full matrix',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: \`auto repeat(\${BADGE_VARIANTS.length * BADGE_WEIGHTS.length}, auto)\`,
    gap: '16px 12px',
    padding: 24,
    alignItems: 'center',
    justifyItems: 'start',
    ...muted
  }}>
      <div />
      {BADGE_VARIANTS.map(v => <div key={v} style={{
      gridColumn: \`span \${BADGE_WEIGHTS.length}\`,
      textTransform: 'capitalize',
      fontWeight: 600
    }}>{v}</div>)}
      {BADGE_SIZES.map(size => <Row key={size}>
          <div>{size}</div>
          {BADGE_VARIANTS.flatMap(variant => BADGE_WEIGHTS.map(weight => <Badge key={\`\${variant}-\${weight}\`} variant={variant} size={size} weight={weight}>Label Text</Badge>))}
        </Row>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Every size × style × weight with radius none, as laid out in the Figma component set.",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={badgeCss} aliases={BADGE_ALIASES} />
}`,...y.parameters?.docs?.source},description:{story:"Properties and tokens read from Badge.module.css, resolved for the active theme.",...y.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <BadgeInspect />
}`,...S.parameters?.docs?.source},description:{story:"Pick style, size, weight, radius, status dot and icon; see real measurements and the tokens that apply. Hover a token to locate it.",...S.parameters?.docs?.description}}};const q=["Default","Variants","Sizes","Weights","Radius","WithStatusDot","WithIcon","States","FullMatrix","Tokens","Inspect"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:g,FullMatrix:f,Inspect:S,Radius:h,Sizes:m,States:x,Tokens:y,Variants:p,Weights:u,WithIcon:v,WithStatusDot:b,__namedExportsOrder:q,default:H},Symbol.toStringTag,{value:"Module"}));export{ne as B,g as D,f as F,S as I,h as R,m as S,y as T,p as V,u as W,b as a,v as b,x as c};
