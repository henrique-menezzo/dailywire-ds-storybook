import{r as g,j as e}from"./iframe-BaE-r_tL.js";import{C as W}from"./CssTokens-DoMUOAyj.js";import{I as m,C as O}from"./ComponentInspector-aQuGSI0z.js";import{I as V}from"./IconButton-C0K0oZpp.js";import{S as K}from"./dailywire-logo-CTHtym9l.js";const z=`/* ==============================================
 * AppHeader — Daily Wire Design System
 * Figma: Header (App) (10676:26354), page "↳ Navigation".
 * Style Filled | WithoutBg × Content Logo | Icon Button × Breakpoint Phone | Tablet.
 * Breakpoint is responsive: the header is a size container and switches to the
 * Tablet values at 768px of its own width (Figma Tablet frame; no breakpoint token).
 * Actions are IconButton minimal · primary · md: their colors and states live in IconButton.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Base ────────────────────────────────────── */

.appHeader {
  container: app-header / inline-size;
  display: block;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--ah-bg);
}

/* ── Style ───────────────────────────────────── */

.appHeader[data-variant='filled'] {
  --ah-bg: var(--color-background-neutral-bold-default);
}

/* Figma WithoutBg: no fill, sits on the screen behind it */
.appHeader[data-variant='transparent'] {
  --ah-bg: transparent;
}

/* ── Bar (padding switches per breakpoint) ───── */

.bar {
  box-sizing: border-box;
  padding: var(--ah-pad-y) var(--ah-pad-x-phone);
}

/* Content Logo: lockup left aligned; 16 · 16 phone, 16 · 20 tablet */
.appHeader[data-content='logo'] .bar {
  display: flex;
  align-items: center;
  --ah-pad-y: var(--spacing-xl);
  --ah-pad-x-phone: var(--spacing-xl);
  --ah-pad-x-tablet: var(--spacing-2xl);
}

/* Content Icon Button: leading / trailing 40px icon buttons, title centered on the bar.
 * Both side columns keep at least the icon button width, so the title stays centered
 * when one action is hidden. 8px on every side at both breakpoints.
 * min-height keeps the bar at 8 + 40 + 8 when actions are hidden (Figma frame is a fixed
 * 57px; no 57 token, the 56px padding + icon button box is used). */
.appHeader[data-content='actions'] .bar {
  display: grid;
  grid-template-columns: minmax(var(--size-2xl), 1fr) minmax(0, auto) minmax(var(--size-2xl), 1fr);
  align-items: center;
  min-height: var(--size-4xl);
  --ah-pad-y: var(--spacing-md);
  --ah-pad-x-phone: var(--spacing-md);
  --ah-pad-x-tablet: var(--spacing-md);
}

/* ── Logo (Brand / Logo · Lockup=Full) ───────── */

/* Figma draws the 164 × 15 lockup at 142 × 13; no 13px token, closest size used */
.appHeader[data-content='logo'] .logo {
  display: block;
  flex-shrink: 0;
  width: auto;
  height: var(--size-xs);
  color: var(--color-icon-neutral-bold-default);
}

/* ── Actions ─────────────────────────────────── */

.appHeader[data-content='actions'] .leading {
  grid-area: 1 / 1;
  justify-self: start;
}

.appHeader[data-content='actions'] .trailing {
  grid-area: 1 / 3;
  justify-self: end;
}

/* ── Title (label/600/md phone · label/600/lg tablet) ── */

.appHeader[data-content='actions'] .title {
  --ah-title-size-phone: var(--font-size-sm);
  --ah-title-size-tablet: var(--font-size-md);
  grid-area: 1 / 2;
  min-inline-size: 0;
  margin: var(--spacing-none);
  font-family: var(--default), sans-serif;
  font-size: var(--ah-title-size-phone);
  font-weight: var(--Semibold);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-bold-default);
  text-align: center;
  /* Long titles wrap instead of clipping, so zoom and minimum font size keep them readable */
  text-wrap: balance;
  overflow-wrap: anywhere;
}

/* ── Breakpoint Tablet (Figma frame 768) ─────── */

@container app-header (min-width: 768px) {
  .bar {
    padding-inline: var(--ah-pad-x-tablet);
  }

  .appHeader[data-content='actions'] .title {
    font-size: var(--ah-title-size-tablet);
  }
}
`,q="_appHeader_1899t_13",G="_bar_1899t_34",M="_logo_1899t_66",X="_leading_1899t_76",U="_trailing_1899t_81",Y="_title_1899t_88",u={appHeader:q,bar:G,logo:M,leading:X,trailing:U,title:Y},j=["filled","transparent"],D=["logo","actions"],J=["h1","h2","span"];function B({action:t,className:n}){const{icon:r,label:d,onClick:c,disabled:h,...p}=t;return e.jsx(V,{...p,className:n,icon:r,"aria-label":d,onClick:c,disabled:h,type:"minimal",buttonStyle:"primary",size:"md"})}const o=g.forwardRef(function({variant:n="filled",content:r="logo",title:d,titleAs:c="h1",leadingAction:h,trailingAction:p,logoLabel:_="Daily Wire",className:H,...F},k){return e.jsx("header",{ref:k,className:[u.appHeader,H].filter(Boolean).join(" "),"data-variant":n,"data-content":r,...F,children:e.jsx("div",{className:u.bar,children:r==="logo"?e.jsx(K,{className:u.logo,role:"img","aria-label":_,focusable:"false"}):e.jsxs(e.Fragment,{children:[h&&e.jsx(B,{action:h,className:u.leading}),d!=null&&d!==!1&&d!==""&&e.jsx(c,{className:u.title,children:d}),p&&e.jsx(B,{action:p,className:u.trailing})]})})})});o.__docgenInfo={description:"In-app top bar. Phone / Tablet (Figma `Breakpoint`) is not a prop: the header is a size\ncontainer and switches to the Tablet spacing and title size at 768px of its own width.",methods:[],displayName:"AppHeader",props:{variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof APP_HEADER_VARIANTS)[number]"},description:"Figma `Style`: `filled` (neutral-bold surface) or `transparent` (WithoutBg)",defaultValue:{value:"'filled'",computed:!1}},content:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof APP_HEADER_CONTENTS)[number]"},description:'Figma `Content`: `logo` or `actions` (Figma "Icon Button")',defaultValue:{value:"'logo'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:'Centered title (Figma `Text` / `Show Text`). `content="actions"` only.'},titleAs:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof APP_HEADER_TITLE_TAGS)[number]"},description:"Element used for the title. Default `h1`: the title names the screen.",defaultValue:{value:"'h1'",computed:!1}},leadingAction:{required:!1,tsType:{name:"AppHeaderAction"},description:'Figma `Show Leading Action`. `content="actions"` only.'},trailingAction:{required:!1,tsType:{name:"AppHeaderAction"},description:'Figma `Show Trailing Action`. `content="actions"` only.'},logoLabel:{required:!1,tsType:{name:"string"},description:'Accessible name of the logo (`content="logo"`)',defaultValue:{value:"'Daily Wire'",computed:!1}}},composes:["Omit"]};const i={icon:"share-2",label:"Share"},I={icon:"chevron-left",label:"Back"},w=["phone","tablet"],a={phone:392,tablet:768},Q={component:o,title:"Components/AppHeader",parameters:{layout:"padded"},argTypes:{variant:{control:"inline-radio",options:[...j]},content:{control:"inline-radio",options:[...D]},title:{control:"text"},titleAs:{control:"inline-radio",options:[...J]},leadingAction:{control:"object"},trailingAction:{control:"object"},logoLabel:{control:"text"}},args:{variant:"filled",content:"logo",title:"Section title",titleAs:"h1",leadingAction:i,trailingAction:i,logoLabel:"Daily Wire"}},P={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"};function s({width:t,children:n}){return e.jsx("div",{style:{width:t,background:"var(--color-background-neutral-subtlest-default)"},children:n})}function L({children:t}){return e.jsx(e.Fragment,{children:t})}function l({label:t,children:n}){return e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx("div",{style:P,children:t}),n]})}const b={},v={parameters:{controls:{include:["variant"]}},render:({variant:t})=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsx(l,{label:"logo",children:e.jsx(s,{width:a.phone,children:e.jsx(o,{variant:t,content:"logo"})})}),e.jsx(l,{label:"actions (Figma Icon Button)",children:e.jsx(s,{width:a.phone,children:e.jsx(o,{variant:t,content:"actions",title:"Section title",leadingAction:i,trailingAction:i})})})]})},A={parameters:{controls:{include:["content"]}},args:{content:"actions"},render:({content:t})=>e.jsx("div",{style:{display:"grid",gap:24},children:j.map(n=>e.jsx(l,{label:n,children:e.jsx(s,{width:a.phone,children:e.jsx(o,{variant:n,content:t,title:"Section title",leadingAction:i,trailingAction:i})})},n))})},x={parameters:{layout:"fullscreen",controls:{include:["variant"]}},render:({variant:t})=>e.jsx("div",{style:{display:"grid",gap:24,padding:24,overflowX:"auto"},children:w.map(n=>e.jsx(l,{label:`${n} · ${a[n]}px`,children:e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(s,{width:a[n],children:e.jsx(o,{variant:t,content:"logo"})}),e.jsx(s,{width:a[n],children:e.jsx(o,{variant:t,content:"actions",title:"Section title",leadingAction:i,trailingAction:i})})]})},n))})},y={parameters:{controls:{include:["variant"]}},render:({variant:t})=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsx(l,{label:"back + title + share",children:e.jsx(s,{width:a.phone,children:e.jsx(o,{variant:t,content:"actions",title:"Saved episodes",leadingAction:I,trailingAction:i})})}),e.jsx(l,{label:"leading only",children:e.jsx(s,{width:a.phone,children:e.jsx(o,{variant:t,content:"actions",title:"Saved episodes",leadingAction:I})})}),e.jsx(l,{label:"trailing only",children:e.jsx(s,{width:a.phone,children:e.jsx(o,{variant:t,content:"actions",title:"Saved episodes",trailingAction:i})})}),e.jsx(l,{label:"no text",children:e.jsx(s,{width:a.phone,children:e.jsx(o,{variant:t,content:"actions",leadingAction:I,trailingAction:i})})}),e.jsx(l,{label:"long title wraps",children:e.jsx(s,{width:a.phone,children:e.jsx(o,{variant:t,content:"actions",title:"The Ben Shapiro Show: the complete archive of every episode",leadingAction:I,trailingAction:i})})})]})},Z=["logo","both actions","leading only","trailing only","no actions","no text"],ee=t=>t==="logo"?{content:"logo"}:{content:"actions",title:t==="no text"?void 0:"Section title",leadingAction:["both actions","leading only","no text"].includes(t)?i:void 0,trailingAction:["both actions","trailing only","no text"].includes(t)?i:void 0},te=["default","hover","pressed","focus","disabled"],R=t=>({...i,disabled:t==="disabled",...t==="hover"||t==="pressed"||t==="focus"?{"data-state":t}:{}}),C={display:"grid",gridTemplateColumns:`auto ${a.phone}px ${a.tablet}px`,gap:"16px 24px",alignItems:"center",justifyItems:"start",...P},f={parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{padding:24,overflowX:"auto",display:"grid",gap:40},children:[e.jsxs("div",{style:C,children:[e.jsx("div",{}),w.map(t=>e.jsx("div",{style:{textTransform:"capitalize",fontWeight:600},children:`${t} · ${a[t]}`},t)),j.flatMap(t=>Z.map(n=>e.jsxs(L,{children:[e.jsx("div",{style:{whiteSpace:"nowrap",textTransform:"capitalize"},children:`${t} · ${n}`}),w.map(r=>e.jsx(s,{width:a[r],children:e.jsx(o,{variant:t,...ee(n)})},r))]},`${t}-${n}`)))]}),e.jsxs("div",{style:C,children:[e.jsx("div",{}),w.map(t=>e.jsx("div",{style:{textTransform:"capitalize",fontWeight:600},children:`${t} · action state`},t)),j.flatMap(t=>te.map(n=>e.jsxs(L,{children:[e.jsx("div",{style:{whiteSpace:"nowrap",textTransform:"capitalize"},children:`${t} · ${n}`}),w.map(r=>e.jsx(s,{width:a[r],children:e.jsx(o,{variant:t,content:"actions",title:"Section title",leadingAction:R(n),trailingAction:R(n)})},r))]},`${t}-${n}`)))]})]})},$={"--ah-bg":"background","--ah-pad-y":"padding-block","--ah-pad-x-phone":"padding-inline · phone","--ah-pad-x-tablet":"padding-inline · tablet","--ah-title-size-phone":"font-size · phone","--ah-title-size-tablet":"font-size · tablet"},S={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(W,{css:z,aliases:$})},E=["on","off"];function ne(){const[t,n]=g.useState("filled"),[r,d]=g.useState("actions"),[c,h]=g.useState("phone"),[p,_]=g.useState("on"),[H,F]=g.useState("on"),[k,N]=g.useState("on");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(m,{label:"Style",options:j,value:t,onChange:n}),e.jsx(m,{label:"Content",options:D,value:r,onChange:d}),e.jsx(m,{label:"Breakpoint",options:w,value:c,onChange:h}),e.jsx(m,{label:"Leading",options:E,value:p,onChange:_}),e.jsx(m,{label:"Trailing",options:E,value:H,onChange:F}),e.jsx(m,{label:"Text",options:E,value:k,onChange:N}),e.jsx(O,{css:z,aliases:$,group:t,state:"default",scale:c==="phone"?1:.6,children:e.jsx(o,{style:{width:a[c]},variant:t,content:r,title:k==="on"?"Section title":void 0,leadingAction:p==="on"?i:void 0,trailingAction:H==="on"?i:void 0})})]})}const T={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(ne,{})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source},description:{story:"Figma defaults: Content Logo · Style Filled. Switch `content` to `actions` to see the title and icon buttons.",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['variant']
    }
  },
  render: ({
    variant
  }) => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <Labeled label="logo">
        <Frame width={WIDTH.phone}>
          <AppHeader variant={variant} content="logo" />
        </Frame>
      </Labeled>
      <Labeled label="actions (Figma Icon Button)">
        <Frame width={WIDTH.phone}>
          <AppHeader variant={variant} content="actions" title="Section title" leadingAction={SHARE} trailingAction={SHARE} />
        </Frame>
      </Labeled>
    </div>
}`,...v.parameters?.docs?.source},description:{story:'Figma `Content`: Logo (lockup, left aligned) and Icon Button (`content="actions"`: leading and trailing icon buttons around a centered title).',...v.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['content']
    }
  },
  args: {
    content: 'actions'
  },
  render: ({
    content
  }) => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {APP_HEADER_VARIANTS.map(variant => <Labeled key={variant} label={variant}>
          <Frame width={WIDTH.phone}>
            <AppHeader variant={variant} content={content} title="Section title" leadingAction={SHARE} trailingAction={SHARE} />
          </Frame>
        </Labeled>)}
    </div>
}`,...A.parameters?.docs?.source},description:{story:"Figma `Style`: Filled (neutral-bold surface) and WithoutBg (`transparent`, no fill: the backdrop shows through).",...A.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    controls: {
      include: ['variant']
    }
  },
  render: ({
    variant
  }) => <div style={{
    display: 'grid',
    gap: 24,
    padding: 24,
    overflowX: 'auto'
  }}>
      {BREAKPOINTS.map(bp => <Labeled key={bp} label={\`\${bp} · \${WIDTH[bp]}px\`}>
          <div style={{
        display: 'grid',
        gap: 16
      }}>
            <Frame width={WIDTH[bp]}>
              <AppHeader variant={variant} content="logo" />
            </Frame>
            <Frame width={WIDTH[bp]}>
              <AppHeader variant={variant} content="actions" title="Section title" leadingAction={SHARE} trailingAction={SHARE} />
            </Frame>
          </div>
        </Labeled>)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Figma `Breakpoint` is responsive CSS, not a prop: the header is a size container.\nBelow 768px of its own width it uses the Phone values; from 768px the Tablet ones\n(logo side padding 16 → 20, title label/600/md → label/600/lg).",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['variant']
    }
  },
  render: ({
    variant
  }) => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <Labeled label="back + title + share">
        <Frame width={WIDTH.phone}>
          <AppHeader variant={variant} content="actions" title="Saved episodes" leadingAction={BACK} trailingAction={SHARE} />
        </Frame>
      </Labeled>
      <Labeled label="leading only">
        <Frame width={WIDTH.phone}>
          <AppHeader variant={variant} content="actions" title="Saved episodes" leadingAction={BACK} />
        </Frame>
      </Labeled>
      <Labeled label="trailing only">
        <Frame width={WIDTH.phone}>
          <AppHeader variant={variant} content="actions" title="Saved episodes" trailingAction={SHARE} />
        </Frame>
      </Labeled>
      <Labeled label="no text">
        <Frame width={WIDTH.phone}>
          <AppHeader variant={variant} content="actions" leadingAction={BACK} trailingAction={SHARE} />
        </Frame>
      </Labeled>
      <Labeled label="long title wraps">
        <Frame width={WIDTH.phone}>
          <AppHeader variant={variant} content="actions" title="The Ben Shapiro Show: the complete archive of every episode" leadingAction={BACK} trailingAction={SHARE} />
        </Frame>
      </Labeled>
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Figma `Show Leading Action`, `Show Trailing Action` and `Show Text`: pass or omit `leadingAction`, `trailingAction` and `title`. The title stays centered on the bar.",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: 24,
    overflowX: 'auto',
    display: 'grid',
    gap: 40
  }}>
      <div style={statesGrid}>
        <div />
        {BREAKPOINTS.map(bp => <div key={bp} style={{
        textTransform: 'capitalize',
        fontWeight: 600
      }}>{\`\${bp} · \${WIDTH[bp]}\`}</div>)}
        {APP_HEADER_VARIANTS.flatMap(variant => LAYOUTS.map(layout => <Row key={\`\${variant}-\${layout}\`}>
              <div style={{
          whiteSpace: 'nowrap',
          textTransform: 'capitalize'
        }}>{\`\${variant} · \${layout}\`}</div>
              {BREAKPOINTS.map(bp => <Frame key={bp} width={WIDTH[bp]}>
                  <AppHeader variant={variant} {...layoutProps(layout)} />
                </Frame>)}
            </Row>))}
      </div>

      <div style={statesGrid}>
        <div />
        {BREAKPOINTS.map(bp => <div key={bp} style={{
        textTransform: 'capitalize',
        fontWeight: 600
      }}>{\`\${bp} · action state\`}</div>)}
        {APP_HEADER_VARIANTS.flatMap(variant => ACTION_STATES.map(s => <Row key={\`\${variant}-\${s}\`}>
              <div style={{
          whiteSpace: 'nowrap',
          textTransform: 'capitalize'
        }}>{\`\${variant} · \${s}\`}</div>
              {BREAKPOINTS.map(bp => <Frame key={bp} width={WIDTH[bp]}>
                  <AppHeader variant={variant} content="actions" title="Section title" leadingAction={stateAction(s)} trailingAction={stateAction(s)} />
                </Frame>)}
            </Row>))}
      </div>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Every Style × Content × leading / trailing / text on and off, at both breakpoints;
then every action state (IconButton minimal · primary · md) inside each Style.`,...f.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={appHeaderCss} aliases={APP_HEADER_ALIASES} />
}`,...S.parameters?.docs?.source},description:{story:"Properties and tokens read from AppHeader.module.css, resolved for the active theme. Action colors live in IconButton.",...S.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <AppHeaderInspect />
}`,...T.parameters?.docs?.source},description:{story:'Pick style, content, breakpoint, actions and text; see real measurements and the tokens that apply. Leading / Trailing / Text apply to `content="actions"`.',...T.parameters?.docs?.description}}};const ae=["Default","Content","Variants","Breakpoints","Actions","States","Tokens","Inspect"],de=Object.freeze(Object.defineProperty({__proto__:null,Actions:y,Breakpoints:x,Content:v,Default:b,Inspect:T,States:f,Tokens:S,Variants:A,__namedExportsOrder:ae,default:Q},Symbol.toStringTag,{value:"Module"}));export{de as A,x as B,v as C,b as D,T as I,f as S,S as T,A as V,y as a};
