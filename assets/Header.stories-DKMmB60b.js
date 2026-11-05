import{r as u,j as e}from"./iframe-BaE-r_tL.js";import{C as Y}from"./CssTokens-DoMUOAyj.js";import{I as N,C as ye}from"./ComponentInspector-aQuGSI0z.js";import{b as xe}from"./Avatar-DfOPemCI.js";import{b as H}from"./Button-D39Hxs63.js";import{I as G}from"./IconButton-C0K0oZpp.js";import{b as B}from"./NavigationItem-CHo8eRdd.js";import{S as we}from"./dailywire-logo-CTHtym9l.js";import{P as Se}from"./index-DO2tlVwn.js";const O=`/* ==============================================
 * Header — Daily Wire Design System
 * Figma: Header (Web) (7827:6984), page "↳ Navigation".
 * loginState yes | no × Promo no | yes × breakpoint Mobile | Tablet | Desktop.
 * The breakpoint axis is responsive CSS: container queries on the header's own width,
 * so the layout follows the space the header gets (full-width in an app, a fixed frame in docs).
 * tokens.css has no breakpoint tokens: the limits are the Figma frame widths (768 · 1440).
 * All other values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: surface + 1px bottom stroke drawn inside (Figma stroke align inside) ── */

.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  container-name: dw-header;
  container-type: inline-size;
  background-color: var(--color-background-neutral-bold-default);
  box-shadow: inset 0 calc(-1 * var(--border-default)) 0 var(--color-border-neutral-bold-default);
}

/* ── Bar: logo centered between the start and end groups (Figma: absolutely centered logo) ── */

.bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  box-sizing: border-box;
  /* Mobile: spacing-lg × spacing-md */
  padding: var(--spacing-lg) var(--spacing-md);
}

.start {
  display: flex;
  align-items: center;
  justify-self: start;
  gap: var(--spacing-md);
}

.end {
  display: flex;
  align-items: center;
  justify-self: end;
  gap: var(--spacing-xs);
}

/* ── Main navigation ─────────────────────────── */

.nav {
  display: block;
}

.navList {
  display: flex;
  align-items: center;
  gap: var(--spacing-xxs);
  margin: 0;
  padding: 0;
  list-style: none;
}

/* ── Logo (Brand / Logo, Lockup Full) ────────── */

.logo {
  display: inline-flex;
  justify-self: center;
  border-radius: var(--border-radius-sm);
  color: var(--color-icon-neutral-bold-default);
}

.logo:focus-visible {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── End group ───────────────────────────────── */

.actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.authButtons {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

/* Vertical 1px rule, as tall as the row */
.divider {
  align-self: stretch;
  width: 0;
  border-left: var(--border-default) solid var(--color-border-neutral-bold-default);
}

/* ── Mobile (< 768) ──────────────────────────── */

@container dw-header (width < 768px) {
  /* Figma: the logged-out mobile frame uses spacing-xl on the right */
  .header[data-logged-in='false'] .bar {
    padding-right: var(--spacing-xl);
  }

  /* Figma Promo=yes is identical to Promo=no on mobile */
  .bar .promo,
  .divider[data-divider='promo'] {
    display: none;
  }
}

/* ── Tablet (768 – 1439) ─────────────────────── */

@container dw-header (768px <= width < 1440px) {
  .bar {
    padding: var(--spacing-lg) var(--spacing-2xl) var(--spacing-lg) var(--spacing-lg);
  }

  .header[data-promo] .end {
    gap: var(--spacing-md);
  }
}

/* ── Mobile + tablet: menu toggle, compact search, nav in a disclosure panel ── */

@container dw-header (width < 1440px) {
  .nav:not([data-open]) {
    display: none;
  }

  /* Not drawn in Figma: the panel reuses the header surface and stroke */
  .nav[data-open] {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: var(--spacing-md);
    background-color: var(--color-background-neutral-bold-default);
    box-shadow: inset 0 calc(-1 * var(--border-default)) 0 var(--color-border-neutral-bold-default);
  }

  .nav[data-open] .navList {
    flex-direction: column;
    align-items: flex-start;
  }

  .bar .actions,
  .bar .logIn,
  .divider[data-divider='actions'] {
    display: none;
  }

  /* Figma: signed out below desktop, the end group is Sign up only (no search) */
  .header[data-logged-in='false'] .searchCompact {
    display: none;
  }
}

/* ── Desktop (≥ 1440) ────────────────────────── */

@container dw-header (width >= 1440px) {
  .bar {
    padding: var(--spacing-xl) var(--spacing-8xl);
  }

  .end {
    gap: var(--spacing-lg);
  }

  .bar .menuToggle,
  .bar .searchCompact,
  .divider[data-divider='promo'] {
    display: none;
  }
}

/* Account: Avatar 4xsm inside a 32px round hit box (Figma: Icon Button minimal · sm) */
.account {
  display: inline-grid;
  place-items: center;
  box-sizing: border-box;
  width: var(--size-xl);
  height: var(--size-xl);
  padding: 0;
  border: none;
  border-radius: var(--border-radius-full);
  background-color: transparent;
  cursor: pointer;
}
.account:focus-visible {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}
`,ke="_header_10mt3_13",Te="_bar_10mt3_25",Ee="_start_10mt3_34",je="_end_10mt3_41",Me="_nav_10mt3_50",Ae="_navList_10mt3_54",_e="_logo_10mt3_65",Ie="_actions_10mt3_79",Le="_authButtons_10mt3_85",Ne="_divider_10mt3_92",He="_promo_10mt3_107",Be="_logIn_10mt3_149",Ce="_searchCompact_10mt3_155",Fe="_menuToggle_10mt3_171",Oe="_account_10mt3_179",o={header:ke,bar:Te,start:Ee,end:je,nav:Me,navList:Ae,logo:_e,actions:Ie,authButtons:Le,divider:Ne,promo:He,logIn:Be,searchCompact:Ce,menuToggle:Fe,account:Oe},X=[{label:"News",href:"/news"},{label:"Shows & Movies",href:"/shows"},{label:"All Access",href:"/all-access"},{label:"Shop",href:"/shop"},{label:"Kids",href:"/kids"},{label:"DWTV",href:"/dwtv"}],i=u.forwardRef(function({loggedIn:n=!0,promo:s=!1,promoLabel:r="Upgrade",onPromoClick:d,items:h=X,navLabel:c="Main",showLogo:l=!0,logoHref:M="/",showDownloadApp:D=!0,downloadAppHref:ee,onDownloadAppClick:ne,showSearch:_=!0,onSearchClick:P,onLogInClick:ae,onSignUpClick:oe,account:R,accountAvatar:I,accountLabel:se="Account",onAccountClick:te,menuOpen:L,defaultMenuOpen:re=!1,onMenuOpenChange:K,menuLabel:le="Menu",className:ie,onKeyDown:de,...ce},pe){const q=`${u.useId()}-nav`,z=u.useRef(null),[me,ue]=u.useState(re),A=L??me,$=u.useCallback(m=>{L===void 0&&ue(m),K?.(m)},[L,K]),ge=m=>{de?.(m),m.key==="Escape"&&A&&($(!1),z.current?.focus())},W=n&&s,V=D||_,he=R!==void 0?R:e.jsx("button",{type:"button",className:o.account,"aria-label":se,onClick:te,children:e.jsx(xe,{size:"4xsm",type:I?.src?"person":"initials",src:I?.src,initials:I?.initials})});return e.jsx("header",{ref:pe,className:[o.header,ie].filter(Boolean).join(" "),"data-logged-in":n?"true":"false","data-promo":W||void 0,onKeyDown:ge,...ce,children:e.jsxs("div",{className:o.bar,children:[e.jsxs("div",{className:o.start,children:[e.jsx(G,{ref:z,className:o.menuToggle,type:"ghost",size:"md",icon:"menu-2","aria-label":le,"aria-expanded":A,"aria-controls":q,onClick:()=>$(!A)}),e.jsx("nav",{id:q,className:o.nav,"aria-label":c,"data-open":A||void 0,children:e.jsx("ul",{className:o.navList,children:h.map(({label:m,href:U,selected:fe,icon:be,...ve})=>e.jsx("li",{children:e.jsx(B,{type:"button",size:"md",href:U,selected:fe,leadingIcon:be,...ve,children:m})},`${m}-${U}`))})})]}),l&&e.jsx("a",{className:o.logo,href:M,children:e.jsx(we,{role:"img","aria-label":"The Daily Wire",focusable:"false"})}),e.jsxs("div",{className:o.end,children:[V&&e.jsxs("div",{className:o.actions,children:[D&&e.jsx(B,{type:"button",size:"md",leadingIcon:"download",href:ee,onClick:ne,children:"Download App"}),_&&e.jsx(B,{type:"button",size:"md",leadingIcon:"search",onClick:P,children:"Search"})]}),_&&e.jsx(G,{className:o.searchCompact,type:"ghost",size:"sm",icon:"search","aria-label":"Search",onClick:P}),V&&e.jsx("span",{className:o.divider,"data-divider":"actions","aria-hidden":"true"}),n?he:e.jsxs("div",{className:o.authButtons,children:[e.jsx(H,{className:o.logIn,variant:"ghost",size:"sm",label:"Log in",onClick:ae}),e.jsx(H,{variant:"brand",size:"sm",label:"Sign up",onClick:oe})]}),W&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:o.divider,"data-divider":"promo","aria-hidden":"true"}),e.jsx(H,{className:o.promo,variant:"brand",size:"sm",label:r,onClick:d})]})]})]})})});i.__docgenInfo={description:"",methods:[],displayName:"Header",props:{loggedIn:{required:!1,tsType:{name:"boolean"},description:"Figma `loginState`: account avatar (yes) or Log in / Sign up (no)",defaultValue:{value:"true",computed:!1}},promo:{required:!1,tsType:{name:"boolean"},description:"Figma `Promo`: an upgrade call to action next to the avatar. Logged-in only; hidden on mobile, as in Figma.",defaultValue:{value:"false",computed:!1}},promoLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Upgrade'",computed:!1}},onPromoClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},items:{required:!1,tsType:{name:"unknown"},description:"Main navigation. Defaults to the six Figma sections; filter the array to mirror the `Show …` booleans.",defaultValue:{value:`[
  { label: 'News', href: '/news' },
  { label: 'Shows & Movies', href: '/shows' },
  { label: 'All Access', href: '/all-access' },
  { label: 'Shop', href: '/shop' },
  { label: 'Kids', href: '/kids' },
  { label: 'DWTV', href: '/dwtv' },
]`,computed:!1}},navLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of the `<nav>` landmark",defaultValue:{value:"'Main'",computed:!1}},showLogo:{required:!1,tsType:{name:"boolean"},description:"Figma `Show logo`",defaultValue:{value:"true",computed:!1}},logoHref:{required:!1,tsType:{name:"string"},description:"Where the logo links to",defaultValue:{value:"'/'",computed:!1}},showDownloadApp:{required:!1,tsType:{name:"boolean"},description:'"Download App" (desktop only)',defaultValue:{value:"true",computed:!1}},downloadAppHref:{required:!1,tsType:{name:"string"},description:""},onDownloadAppClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"union",raw:"HTMLAnchorElement | HTMLButtonElement",elements:[{name:"HTMLAnchorElement"},{name:"HTMLButtonElement"}]}],raw:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>"},description:""},showSearch:{required:!1,tsType:{name:"boolean"},description:'"Search": labeled item on desktop, icon button on tablet and mobile',defaultValue:{value:"true",computed:!1}},onSearchClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"union",raw:"HTMLAnchorElement | HTMLButtonElement",elements:[{name:"HTMLAnchorElement"},{name:"HTMLButtonElement"}]}],raw:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>"},description:""},onLogInClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},onSignUpClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},account:{required:!1,tsType:{name:"ReactNode"},description:"Replaces the whole account control shown when `loggedIn`. By default the header renders a button with an\n`Avatar` (size 4xsm), as Figma nests it (type People on desktop / tablet, Initials on mobile)."},accountAvatar:{required:!1,tsType:{name:"signature",type:"object",raw:"{ src?: string; initials?: string }",signature:{properties:[{key:"src",value:{name:"string",required:!1}},{key:"initials",value:{name:"string",required:!1}}]}},description:"Default account control: photo (`src` → Avatar type person) or `initials`; with neither, the DW mark"},accountLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of the default account button",defaultValue:{value:"'Account'",computed:!1}},onAccountClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:"Click on the default account button"},menuOpen:{required:!1,tsType:{name:"boolean"},description:"Tablet / mobile menu (controlled)"},defaultMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Tablet / mobile menu (uncontrolled initial state)",defaultValue:{value:"false",computed:!1}},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},menuLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of the menu toggle",defaultValue:{value:"'Menu'",computed:!1}}},composes:["Omit"]};const{fn:g}=__STORYBOOK_MODULE_TEST__,t={Desktop:1440,Tablet:768,Mobile:392},E=Object.keys(t),J=X.map(a=>({...a,selected:a.label==="News"})),C={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"};function p({width:a,label:n,children:s}){return e.jsxs("div",{style:{display:"grid",gap:8},children:[n&&e.jsx("div",{style:C,children:n}),e.jsx("div",{style:{width:a,flexShrink:0},children:s})]})}const j={padding:24,overflowX:"auto"},De={component:i,title:"Components/Header",parameters:{layout:"fullscreen"},argTypes:{loggedIn:{control:"boolean"},promo:{control:"boolean"},promoLabel:{control:"text"},showLogo:{control:"boolean"},showDownloadApp:{control:"boolean"},showSearch:{control:"boolean"},defaultMenuOpen:{control:"boolean"},items:{control:"object"},accountLabel:{control:"text"}},args:{accountAvatar:{src:Se.Luke},loggedIn:!0,promo:!1,showLogo:!0,showDownloadApp:!0,showSearch:!0,items:J,onPromoClick:g(),onSearchClick:g(),onDownloadAppClick:g(),onLogInClick:g(),onSignUpClick:g(),onAccountClick:g(),onMenuOpenChange:g()}},f={},b={render:a=>e.jsx("div",{style:{...j,display:"grid",gap:32},children:E.map(n=>e.jsx(p,{width:t[n],label:`${n} · ${t[n]}`,children:e.jsx(i,{...a})},n))})},v={parameters:{controls:{include:[]}},render:a=>e.jsx("div",{style:{...j,display:"grid",gap:32},children:E.map(n=>e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(p,{width:t[n],label:`${n} · logged in`,children:e.jsx(i,{...a,loggedIn:!0})}),e.jsx(p,{width:t[n],label:`${n} · logged out`,children:e.jsx(i,{...a,loggedIn:!1})})]},n))})},y={args:{promo:!0,promoLabel:"Upgrade"},render:a=>e.jsx("div",{style:{...j,display:"grid",gap:32},children:E.map(n=>e.jsx(p,{width:t[n],label:`${n} · promo`,children:e.jsx(i,{...a})},n))})},x={args:{defaultMenuOpen:!0},render:a=>e.jsx("div",{style:{...j,display:"flex",gap:32,alignItems:"start",minHeight:420},children:["Tablet","Mobile"].map(n=>e.jsx(p,{width:t[n],label:`${n} · menu open`,children:e.jsx(i,{...a})},n))})},w={args:{items:[{label:"News",href:"/news"},{label:"Shows & Movies",href:"/shows",selected:!0},{label:"Kids",href:"/kids"}]},render:a=>e.jsxs("div",{style:{...j,display:"grid",gap:32},children:[e.jsx(p,{width:t.Desktop,label:"Three sections",children:e.jsx(i,{...a})}),e.jsx(p,{width:t.Desktop,label:"No logo",children:e.jsx(i,{...a,showLogo:!1})})]})},Pe=[{label:"logged in · promo no",props:{loggedIn:!0,promo:!1}},{label:"logged in · promo yes",props:{loggedIn:!0,promo:!0}},{label:"logged out · promo no",props:{loggedIn:!1,promo:!1}}],Re=[{label:"News",href:"/news",selected:!0},{label:"Shows & Movies",href:"/shows","data-state":"hover"},{label:"All Access",href:"/all-access","data-state":"pressed"},{label:"Shop",href:"/shop","data-state":"focus"},{label:"Kids",href:"/kids",selected:!0,"data-state":"hover"},{label:"DWTV",href:"/dwtv"}],S={parameters:{controls:{include:["promoLabel"]}},render:a=>e.jsxs("div",{style:{...j,display:"grid",gap:40},children:[E.map(n=>e.jsxs("section",{style:{display:"grid",gap:16},children:[e.jsx("div",{style:{...C,fontWeight:600},children:`${n} · ${t[n]}`}),Pe.map(({label:s,props:r})=>e.jsx(p,{width:t[n],label:s,children:e.jsx(i,{...a,...r})},s))]},n)),e.jsxs("section",{style:{display:"grid",gap:16},children:[e.jsx("div",{style:{...C,fontWeight:600},children:"Nav item states (desktop)"}),e.jsx(p,{width:t.Desktop,label:"News selected · Shows & Movies hover · All Access pressed · Shop focus · Kids selected + hover",children:e.jsx(i,{...a,items:Re})})]})]})};function Ke(a){const n=a.replace(/\/\*[\s\S]*?\*\//g,""),s=[];let r=0,d=0,h=0,c="";for(let l=0;l<n.length;l++)n[l]==="{"?(r===0&&(c=n.slice(d,l).trim(),h=l+1),r++):n[l]==="}"&&(r--,r===0&&(c.startsWith("@container")&&s.push({condition:c.replace(/^@container\s+[\w-]+\s*/,""),body:n.slice(h,l)}),d=l+1));return s}const Q=Ke(O);function Z(a,n){const s=a.match(/width < (\d+)px/),r=a.match(/width >= (\d+)px/)??a.match(/(\d+)px <= width/);return(!s||n<Number(s[1]))&&(!r||n>=Number(r[1]))}const qe=a=>E.filter(n=>Z(a,t[n])).join(" + "),F={},k={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"8px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:"All breakpoints"}),e.jsx(Y,{css:O,aliases:F}),Q.map(a=>e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"32px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:[`${qe(a.condition)} `,e.jsx("code",{style:{fontSize:12,fontWeight:400,color:"var(--color-text-neutral-subtle-default)"},children:a.condition})]}),e.jsx(Y,{css:a.body,aliases:F})]},a.condition))]})},ze=["yes","no"],$e=["no","yes"],We={Desktop:.4,Tablet:.75,Mobile:1.4};function Ve(){const[a,n]=u.useState("yes"),[s,r]=u.useState("no"),[d,h]=u.useState("Desktop"),c=t[d],l=[O,...Q.filter(M=>Z(M.condition,c)).map(M=>M.body)].join(`
`);return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(N,{label:"Login",options:ze,value:a,onChange:n}),e.jsx(N,{label:"Promo",options:$e,value:s,onChange:r}),e.jsx(N,{label:"Breakpoint",options:E,value:d,onChange:h}),e.jsx(ye,{css:l,aliases:F,group:`${d} ${c}`,state:"default",scale:We[d],children:e.jsx(i,{style:{width:c,marginInline:-c/2},loggedIn:a==="yes",promo:s==="yes",items:J})},d)]})}const T={tags:["!test"],parameters:{controls:{disable:!0}},render:()=>e.jsx(Ve,{})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source},description:{story:"Full width of the canvas: resize the viewport (or the addon toolbar) to see the layout switch.",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 32
  }}>
      {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · \${BREAKPOINTS[bp]}\`}>
          <Header {...args} />
        </Frame>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Figma `breakpoint`: Desktop 1440 · Tablet 768 · Mobile 392, each in a fixed-width frame.",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: []
    }
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 32
  }}>
      {BREAKPOINT_NAMES.map(bp => <div key={bp} style={{
      display: 'grid',
      gap: 16
    }}>
          <Frame width={BREAKPOINTS[bp]} label={\`\${bp} · logged in\`}>
            <Header {...args} loggedIn />
          </Frame>
          <Frame width={BREAKPOINTS[bp]} label={\`\${bp} · logged out\`}>
            <Header {...args} loggedIn={false} />
          </Frame>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:"Figma `loginState`: avatar when signed in; Log in + Sign up when not (only Sign up below desktop).",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    promo: true,
    promoLabel: 'Upgrade'
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 32
  }}>
      {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · promo\`}>
          <Header {...args} />
        </Frame>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Figma `Promo`: an upgrade call to action after the avatar. Not shown on mobile (Figma draws Promo=yes the same as Promo=no there).",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMenuOpen: true
  },
  render: args => <div style={{
    ...scroller,
    display: 'flex',
    gap: 32,
    alignItems: 'start',
    minHeight: 420
  }}>
      {(['Tablet', 'Mobile'] as const).map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · menu open\`}>
          <Header {...args} />
        </Frame>)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Below desktop the nav moves behind the menu button (`aria-expanded` + `aria-controls`).\nThe open panel is not drawn in Figma: it reuses the header surface and stroke. Escape closes it.",...x.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'News',
      href: '/news'
    }, {
      label: 'Shows & Movies',
      href: '/shows',
      selected: true
    }, {
      label: 'Kids',
      href: '/kids'
    }]
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 32
  }}>
      <Frame width={BREAKPOINTS.Desktop} label="Three sections">
        <Header {...args} />
      </Frame>
      <Frame width={BREAKPOINTS.Desktop} label="No logo">
        <Header {...args} showLogo={false} />
      </Frame>
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Figma `Show …` booleans: pass only the sections you need. `showLogo={false}` hides the logo.",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['promoLabel']
    }
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 40
  }}>
      {BREAKPOINT_NAMES.map(bp => <section key={bp} style={{
      display: 'grid',
      gap: 16
    }}>
          <div style={{
        ...muted,
        fontWeight: 600
      }}>{\`\${bp} · \${BREAKPOINTS[bp]}\`}</div>
          {COMBOS.map(({
        label,
        props
      }) => <Frame key={label} width={BREAKPOINTS[bp]} label={label}>
              <Header {...args} {...props} />
            </Frame>)}
        </section>)}
      <section style={{
      display: 'grid',
      gap: 16
    }}>
        <div style={{
        ...muted,
        fontWeight: 600
      }}>Nav item states (desktop)</div>
        <Frame width={BREAKPOINTS.Desktop} label="News selected · Shows & Movies hover · All Access pressed · Shop focus · Kids selected + hover">
          <Header {...args} items={STATE_ITEMS} />
        </Frame>
      </section>
    </div>
}`,...S.parameters?.docs?.source},description:{story:"Every Figma variant (9): login × promo at each breakpoint frame, plus a desktop row with nav items\nforced to selected / hover / pressed / focus (`data-state`).",...S.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div>
      <p style={{
      margin: '8px 0 0',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-text-neutral-bold-default)'
    }}>All breakpoints</p>
      <CssTokens css={headerCss} aliases={HEADER_ALIASES} />
      {BLOCKS.map(b => <div key={b.condition}>
          <p style={{
        margin: '32px 0 0',
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--color-text-neutral-bold-default)'
      }}>
            {\`\${breakpointsOf(b.condition)} \`}
            <code style={{
          fontSize: 12,
          fontWeight: 400,
          color: 'var(--color-text-neutral-subtle-default)'
        }}>{b.condition}</code>
          </p>
          <CssTokens css={b.body} aliases={HEADER_ALIASES} />
        </div>)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:"Properties and tokens read from Header.module.css, resolved for the active theme: shared rules, then each breakpoint range.",...k.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <HeaderInspect />
}`,...T.parameters?.docs?.source},description:{story:"Pick login, promo and breakpoint (frame width); see real measurements and the tokens that apply at that width.",...T.parameters?.docs?.description}}};const Ue=["Default","Breakpoints","LoginState","Promo","MobileMenu","CustomItems","States","Tokens","Inspect"],on=Object.freeze(Object.defineProperty({__proto__:null,Breakpoints:b,CustomItems:w,Default:f,Inspect:T,LoginState:v,MobileMenu:x,Promo:y,States:S,Tokens:k,__namedExportsOrder:Ue,default:De},Symbol.toStringTag,{value:"Module"}));export{b as B,w as C,f as D,on as H,T as I,v as L,x as M,y as P,S,k as T};
