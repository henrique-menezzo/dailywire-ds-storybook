import{j as e,r as w}from"./iframe-BaE-r_tL.js";import{S as j}from"./ShowcaseBox-CvpXiMzv.js";import{C as D}from"./CssTokens-DoMUOAyj.js";import{I as A,C as $}from"./ComponentInspector-aQuGSI0z.js";import{A as z,a as o,b as n}from"./Avatar-DfOPemCI.js";import{H as I,S as E,P as C}from"./index-DO2tlVwn.js";const L=`/* ==============================================
 * Avatar — Daily Wire Design System
 * Figma: Avatar (219:11928), doc section 10:1812, page "↳ Profile & Hosts".
 * Type DW+ | Initials | Hosts | People | Shows × Size 4xsm … 4xl × Selected No | Yes (110 variants).
 * Nested sets: Brand / Logo (DailyWire Logo/Icon), Host Image (10:1794),
 * Person Image (8484:27270), Shows Thumbnail (12354:203323).
 * Static display element: Figma draws no hover / pressed / focus / disabled states.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.avatar {
  /* Placeholder surface behind photos while they load, and the DW+ disc */
  --avatar-bg: var(--color-background-neutral-subtlest-default);

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  overflow: hidden;
  vertical-align: middle;
  border-radius: var(--border-radius-full);
  background-color: var(--avatar-bg);
  color: var(--avatar-text);
  line-height: var(--line-height-100);
  white-space: nowrap;
  user-select: none;
}

/* ── Sizes ───────────────────────────────────────
 * Initials text style: label/400/xs · sm · md · lg · xl (100%) up to md,
 * heading/400/md · lg (120%) from lg. Logo = DailyWire Logo/Icon instance width.
 */

.avatar[data-size='4xsm'] {
  width: var(--size-md);
  height: var(--size-md);
  font-size: var(--font-size-xxs);
  --avatar-mark-width: var(--primitive-dimension-dimension-3-5);
}

.avatar[data-size='3xsm'] {
  width: var(--size-lg);
  height: var(--size-lg);
  font-size: var(--font-size-xs);
  --avatar-mark-width: var(--primitive-dimension-dimension-3-5);
}

.avatar[data-size='2xsm'] {
  width: var(--size-xl);
  height: var(--size-xl);
  font-size: var(--font-size-sm);
  --avatar-mark-width: var(--size-md);
}

.avatar[data-size='xsm'] {
  width: var(--size-2xl);
  height: var(--size-2xl);
  font-size: var(--font-size-md);
  --avatar-mark-width: var(--size-lg);
}

.avatar[data-size='sm'] {
  width: var(--size-3xl);
  height: var(--size-3xl);
  font-size: var(--font-size-lg);
  --avatar-mark-width: var(--size-xl);
}

.avatar[data-size='md'] {
  width: var(--size-4xl);
  height: var(--size-4xl);
  font-size: var(--font-size-lg);
  --avatar-mark-width: var(--size-xl);
}

.avatar[data-size='lg'] {
  width: var(--size-5xl);
  height: var(--size-5xl);
  font-size: var(--font-size-xl);
  line-height: var(--line-height-120);
  --avatar-mark-width: var(--primitive-dimension-dimension-11);
}

/* 72px: no --size-* token, primitive dimension used */
.avatar[data-size='xl'] {
  width: var(--primitive-dimension-dimension-18);
  height: var(--primitive-dimension-dimension-18);
  font-size: var(--font-size-xl);
  line-height: var(--line-height-120);
  --avatar-mark-width: var(--primitive-dimension-dimension-11);
}

.avatar[data-size='2xl'] {
  width: var(--primitive-dimension-dimension-20);
  height: var(--primitive-dimension-dimension-20);
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-120);
  --avatar-mark-width: var(--primitive-dimension-dimension-13);
}

/* Figma logo is 50px wide here (54px on 4xl): no token, 52px used for both */
.avatar[data-size='3xl'] {
  width: var(--primitive-dimension-dimension-24);
  height: var(--primitive-dimension-dimension-24);
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-120);
  --avatar-mark-width: var(--primitive-dimension-dimension-13);
}

/* 100px: no token at all, composed from two existing dimensions (96 + 4) */
.avatar[data-size='4xl'] {
  width: calc(var(--primitive-dimension-dimension-24) + var(--primitive-dimension-dimension-1));
  height: calc(var(--primitive-dimension-dimension-24) + var(--primitive-dimension-dimension-1));
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-120);
  --avatar-mark-width: var(--primitive-dimension-dimension-13);
}

/* ── Type: Shows (rounded square; radius steps with the size) ── */

.avatar[data-variant='show'][data-size='4xsm'],
.avatar[data-variant='show'][data-size='3xsm'],
.avatar[data-variant='show'][data-size='2xsm'] {
  border-radius: var(--border-radius-sm);
}

.avatar[data-variant='show'][data-size='xsm'],
.avatar[data-variant='show'][data-size='sm'],
.avatar[data-variant='show'][data-size='md'] {
  border-radius: var(--border-radius-md);
}

.avatar[data-variant='show'][data-size='lg'],
.avatar[data-variant='show'][data-size='xl'],
.avatar[data-variant='show'][data-size='2xl'] {
  border-radius: var(--border-radius-lg);
}

.avatar[data-variant='show'][data-size='3xl'],
.avatar[data-variant='show'][data-size='4xl'] {
  border-radius: var(--border-radius-xl);
}

/* ── Content: what is drawn after the image fallback ── */

/* Figma Type=Initials, and image types without a usable \`src\` */
.avatar[data-content='initials'] {
  /* Figma: raw #774DB2, no variable bound; closest existing token */
  --avatar-bg: var(--primitive-color-purple-600);
  --avatar-text: var(--color-text-always-light);
}

/* Figma Type=DW+, and the last-resort fallback */
.avatar[data-content='mark'] {
  --avatar-mark: var(--color-icon-neutral-bold-default);
}

/* ── Selected: outside stroke, no gap ──
 * Figma: color/border/inverse/bold/default, stroke OUTSIDE 0.5 (4xsm) · 0.75 (3xsm–xl) · 1 (2xl–4xl).
 * No sub-pixel border token: --border-default (1px) for every size.
 */

.avatar[data-selected='true'] {
  outline: var(--border-default) solid var(--color-border-inverse-bold-default);
  outline-offset: var(--spacing-none);
}

/* ── Parts ───────────────────────────────────── */

.content {
  display: contents;
}

/* Figma image fills use FILL (cover, centred): the photo fills the avatar box */
.image {
  display: block;
  flex: 1 1 0;
  align-self: stretch;
  min-inline-size: 0;
  object-fit: cover;
}

/* label/400/* (heading/400/* from lg); font-size and line-height come from the size */
.initials {
  display: block;
  font-family: var(--default), sans-serif;
  font-weight: var(--Regular);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  text-align: center;
}

/* Figma Brand / Logo › DailyWire Logo/Icon (25 × 16 artwork, centred); the SVG fills this width */
.mark {
  display: block;
  flex-shrink: 0;
  width: var(--avatar-mark-width);
  color: var(--avatar-mark);
}

/* Width 100% / auto height are set as SVG attributes in Avatar.tsx */
.mark > svg {
  display: block;
}
`,k={"dw-plus":"DW+",initials:"Initials",host:"Hosts",person:"People",show:"Shows"},l={host:I["Ben Shapiro"],person:C.Luke,show:E["Show 01"]},Y={"4xsm":20,"3xsm":24,"2xsm":32,xsm:40,sm:48,md:56,lg:64,xl:72,"2xl":80,"3xl":96,"4xl":100},b="data:image/png;base64,broken",W={none:"","broken URL":b,...Object.fromEntries(Object.entries(I).map(([a,t])=>[`Host Image · ${a}`,t])),...Object.fromEntries(Object.entries(C).map(([a,t])=>[`Person Image · ${a}`,t])),...Object.fromEntries(Object.entries(E).map(([a,t])=>[`Shows Thumbnail · ${a}`,t]))},G={component:n,title:"Components/Avatar",parameters:{layout:"centered"},argTypes:{type:{control:"select",options:[...o]},size:{control:"select",options:[...z]},selected:{control:"boolean"},src:{control:"select",options:Object.keys(W),mapping:W},alt:{control:"text"},initials:{control:"text"}},args:{type:"initials",size:"md",selected:!1,initials:"AA",src:"Host Image · Ben Shapiro"}},T={fontSize:12,color:"var(--color-text-neutral-subtlest-default)",fontFamily:"var(--default), sans-serif"};function r({caption:a,children:t}){return e.jsxs("figure",{style:{display:"grid",justifyItems:"center",gap:8,margin:0},children:[t,e.jsx("figcaption",{style:{...T,textAlign:"center",maxWidth:112},children:a})]})}const d={},c={parameters:{controls:{include:["size","selected","initials"]}},render:({size:a,selected:t,initials:s})=>e.jsx(j,{style:{gap:24},children:o.map(i=>e.jsx(r,{caption:k[i],children:e.jsx(n,{type:i,size:a,selected:t,initials:s,src:l[i]})},i))})},p={parameters:{layout:"fullscreen",controls:{include:["selected","initials"]}},render:({selected:a,initials:t})=>e.jsx("div",{style:{padding:24,overflowX:"auto"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${z.length}, auto)`,gap:"16px 20px",alignItems:"center",justifyItems:"center",...T},children:[e.jsx("div",{}),z.map(s=>e.jsx("div",{children:`${s} · ${Y[s]}`},s)),o.map(s=>e.jsxs(_,{children:[e.jsx("div",{style:{justifySelf:"start"},children:k[s]}),z.map(i=>e.jsx(n,{type:s,size:i,selected:a,initials:t,src:l[s]},i))]},s))]})})},m={args:{selected:!0},parameters:{controls:{include:["size","initials"]}},render:({size:a,initials:t})=>e.jsx(j,{style:{gap:24},children:o.map(s=>e.jsx(r,{caption:k[s],children:e.jsx(n,{type:s,size:a,selected:!0,initials:t,src:l[s]})},s))})},v={parameters:{controls:{include:["size"]}},render:({size:a})=>e.jsxs(j,{style:{gap:24,alignItems:"start"},children:[e.jsx(r,{caption:"Hosts · image",children:e.jsx(n,{type:"host",size:a,src:I["Matt Walsh"],initials:"MW",alt:"Matt Walsh"})}),e.jsx(r,{caption:"Hosts · no src → initials",children:e.jsx(n,{type:"host",size:a,initials:"MW",alt:"Matt Walsh"})}),e.jsx(r,{caption:"People · load error → initials",children:e.jsx(n,{type:"person",size:a,src:b,initials:"CA",alt:"Carla"})}),e.jsx(r,{caption:"Shows · load error, no initials → DW mark",children:e.jsx(n,{type:"show",size:a,src:b,alt:"Show"})}),e.jsx(r,{caption:"Initials · empty → DW mark",children:e.jsx(n,{type:"initials",size:a,initials:""})})]})},N=[{label:"DW+",props:{type:"dw-plus"}},{label:"Initials",props:{type:"initials",initials:"AA"}},{label:"Hosts",props:{type:"host",src:l.host,initials:"BS"}},{label:"People",props:{type:"person",src:l.person,initials:"LU"}},{label:"Shows",props:{type:"show",src:l.show,initials:"S1"}},{label:"Hosts · no src → initials",props:{type:"host",initials:"BS"}},{label:"People · load error → initials",props:{type:"person",src:b,initials:"LU"}},{label:"Shows · load error → initials",props:{type:"show",src:b,initials:"S1"}},{label:"Shows · no src, no initials → DW mark",props:{type:"show"}}],h={parameters:{layout:"fullscreen",controls:{include:["size"]}},render:({size:a})=>e.jsx("div",{style:{padding:24},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, max-content)",gap:"16px 32px",alignItems:"center",justifyItems:"center",...T},children:[e.jsx("div",{}),e.jsx("div",{children:"Selected · No"}),e.jsx("div",{children:"Selected · Yes"}),N.map(({label:t,props:s})=>e.jsxs(_,{children:[e.jsx("div",{style:{justifySelf:"start"},children:t}),e.jsx(n,{...s,size:a}),e.jsx(n,{...s,size:a,selected:!0})]},t))]})})},u={name:"Figma matrix",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx("div",{style:{padding:24,overflowX:"auto"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${o.length*2}, auto)`,gap:"16px 20px",alignItems:"center",justifyItems:"center",...T},children:[e.jsx("div",{}),[!1,!0].flatMap(a=>o.map(t=>e.jsx("div",{children:`${k[t]} · ${a?"Yes":"No"}`},`${a}-${t}`))),z.map(a=>e.jsxs(_,{children:[e.jsx("div",{style:{justifySelf:"start"},children:a}),[!1,!0].flatMap(t=>o.map(s=>e.jsx(n,{type:s,size:a,selected:t,initials:"AA",src:l[s]},`${t}-${s}`)))]},a))]})})};function _({children:a}){return e.jsx(e.Fragment,{children:a})}function R({type:a,images:t}){return e.jsx(j,{style:{gap:24,alignItems:"start"},children:Object.entries(t).map(([s,i])=>e.jsx(r,{caption:s,children:e.jsx(n,{type:a,size:"3xl",src:i,alt:s})},s))})}const g={parameters:{controls:{disable:!0}},render:()=>e.jsx(R,{type:"host",images:I})},y={parameters:{controls:{disable:!0}},render:()=>e.jsx(R,{type:"person",images:C})},x={parameters:{controls:{disable:!0}},render:()=>e.jsx(R,{type:"show",images:E})},O={"--avatar-bg":"background","--avatar-text":"color","--avatar-mark":"logo icon color","--avatar-mark-width":"logo width"},f={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(D,{css:L,aliases:O})},V=["no","yes"],U=["sample","missing"];function Z(){const[a,t]=w.useState("initials"),[s,i]=w.useState("md"),[P,B]=w.useState("no"),[F,H]=w.useState("sample"),M=a==="host"||a==="person"||a==="show";return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(A,{label:"Type",options:o,value:a,onChange:t}),e.jsx(A,{label:"Size",options:z,value:s,onChange:i}),e.jsx(A,{label:"Selected",options:V,value:P,onChange:B}),M&&e.jsx(A,{label:"Image",options:U,value:F,onChange:H}),e.jsx($,{css:L,aliases:O,group:a,state:"default",size:s,children:e.jsx(n,{type:a,size:s,selected:P==="yes",initials:"AA",src:M&&F==="sample"?l[a]:void 0})})]})}const S={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(Z,{})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source},description:{story:"Playground. `src` lists every sample image plus `none` and `broken URL` to try the fallback.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['size', 'selected', 'initials']
    }
  },
  render: ({
    size,
    selected,
    initials
  }) => <ShowcaseBox style={{
    gap: 24
  }}>
      {AVATAR_TYPES.map(type => <Captioned key={type} caption={TYPE_LABEL[type]}>
          <Avatar type={type} size={size} selected={selected} initials={initials} src={FIGMA_SRC[type]} />
        </Captioned>)}
    </ShowcaseBox>
}`,...c.parameters?.docs?.source},description:{story:"The five Figma types at size md, each with the image Figma nests by default.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    controls: {
      include: ['selected', 'initials']
    }
  },
  render: ({
    selected,
    initials
  }) => <div style={{
    padding: 24,
    overflowX: 'auto'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: \`auto repeat(\${AVATAR_SIZES.length}, auto)\`,
      gap: '16px 20px',
      alignItems: 'center',
      justifyItems: 'center',
      ...muted
    }}>
        <div />
        {AVATAR_SIZES.map(size => <div key={size}>{\`\${size} · \${SIZE_PX[size]}\`}</div>)}
        {AVATAR_TYPES.map(type => <Row key={type}>
            <div style={{
          justifySelf: 'start'
        }}>{TYPE_LABEL[type]}</div>
            {AVATAR_SIZES.map(size => <Avatar key={size} type={type} size={size} selected={selected} initials={initials} src={FIGMA_SRC[type]} />)}
          </Row>)}
      </div>
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Eleven sizes, 20 → 100 px, for every type. Shows switches from a 4 to a 16px radius as it grows.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  },
  parameters: {
    controls: {
      include: ['size', 'initials']
    }
  },
  render: ({
    size,
    initials
  }) => <ShowcaseBox style={{
    gap: 24
  }}>
      {AVATAR_TYPES.map(type => <Captioned key={type} caption={TYPE_LABEL[type]}>
          <Avatar type={type} size={size} selected initials={initials} src={FIGMA_SRC[type]} />
        </Captioned>)}
    </ShowcaseBox>
}`,...m.parameters?.docs?.source},description:{story:"Figma `Selected=Yes`: an outside ring in `color/border/inverse/bold`, no gap.",...m.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['size']
    }
  },
  render: ({
    size
  }) => <ShowcaseBox style={{
    gap: 24,
    alignItems: 'start'
  }}>
      <Captioned caption="Hosts · image">
        <Avatar type="host" size={size} src={HOST_IMAGES['Matt Walsh']} initials="MW" alt="Matt Walsh" />
      </Captioned>
      <Captioned caption="Hosts · no src → initials">
        <Avatar type="host" size={size} initials="MW" alt="Matt Walsh" />
      </Captioned>
      <Captioned caption="People · load error → initials">
        <Avatar type="person" size={size} src={BROKEN_SRC} initials="CA" alt="Carla" />
      </Captioned>
      <Captioned caption="Shows · load error, no initials → DW mark">
        <Avatar type="show" size={size} src={BROKEN_SRC} alt="Show" />
      </Captioned>
      <Captioned caption="Initials · empty → DW mark">
        <Avatar type="initials" size={size} initials="" />
      </Captioned>
    </ShowcaseBox>
}`,...v.parameters?.docs?.source},description:{story:"Image types fall back to the initials, then to the Daily Wire mark, when `src` is missing or fails to load.",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    controls: {
      include: ['size']
    }
  },
  render: ({
    size
  }) => <div style={{
    padding: 24
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      gap: '16px 32px',
      alignItems: 'center',
      justifyItems: 'center',
      ...muted
    }}>
        <div />
        <div>Selected · No</div>
        <div>Selected · Yes</div>
        {STATE_ROWS.map(({
        label,
        props
      }) => <Row key={label}>
            <div style={{
          justifySelf: 'start'
        }}>{label}</div>
            <Avatar {...props} size={size} />
            <Avatar {...props} size={size} selected />
          </Row>)}
      </div>
    </div>
}`,...h.parameters?.docs?.source},description:{story:"Avatar is static: Figma draws no hover / pressed / focus / disabled, only `Selected`.\nEvery type (and the image fallbacks) × Selected No / Yes. Use the `size` control to switch sizes.",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Figma matrix',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24,
    overflowX: 'auto'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: \`auto repeat(\${AVATAR_TYPES.length * 2}, auto)\`,
      gap: '16px 20px',
      alignItems: 'center',
      justifyItems: 'center',
      ...muted
    }}>
        <div />
        {[false, true].flatMap(selected => AVATAR_TYPES.map(type => <div key={\`\${selected}-\${type}\`}>{\`\${TYPE_LABEL[type]} · \${selected ? 'Yes' : 'No'}\`}</div>))}
        {AVATAR_SIZES.map(size => <Row key={size}>
            <div style={{
          justifySelf: 'start'
        }}>{size}</div>
            {[false, true].flatMap(selected => AVATAR_TYPES.map(type => <Avatar key={\`\${selected}-\${type}\`} type={type} size={size} selected={selected} initials="AA" src={FIGMA_SRC[type]} />))}
          </Row>)}
      </div>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"The full Figma set (110 variants), laid out as in Figma: Selected No on the left, Yes on the right.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Gallery type="host" images={HOST_IMAGES} />
}`,...g.parameters?.docs?.source},description:{story:'Figma "Host Image" (10:1794): 12 variants of the `Background` property, used by `type="host"`.',...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Gallery type="person" images={PERSON_IMAGES} />
}`,...y.parameters?.docs?.source},description:{story:'Figma "Person Image" (8484:27270): 10 variants of the `Person` property, used by `type="person"`.',...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Gallery type="show" images={SHOW_THUMBNAILS} />
}`,...x.parameters?.docs?.source},description:{story:'Figma "Shows Thumbnail" (12354:203323): 9 variants of the `Show` property, used by `type="show"`.',...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={avatarCss} aliases={AVATAR_ALIASES} />
}`,...f.parameters?.docs?.source},description:{story:"Properties and tokens read from Avatar.module.css, resolved for the active theme.",...f.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <AvatarInspect />
}`,...S.parameters?.docs?.source},description:{story:"Pick type, size, selected and image; see real measurements and the tokens that apply. Hover a token to locate it.",...S.parameters?.docs?.description}}};const X=["Default","Types","Sizes","Selected","Fallback","States","FigmaMatrix","HostImages","PersonImages","ShowThumbnails","Tokens","Inspect"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Fallback:v,FigmaMatrix:u,HostImages:g,Inspect:S,PersonImages:y,Selected:m,ShowThumbnails:x,Sizes:p,States:h,Tokens:f,Types:c,__namedExportsOrder:X,default:G},Symbol.toStringTag,{value:"Module"}));export{se as A,d as D,v as F,g as H,S as I,y as P,p as S,c as T,m as a,h as b,u as c,x as d,f as e};
