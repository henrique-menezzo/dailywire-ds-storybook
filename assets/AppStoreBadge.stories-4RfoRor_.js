import{r as g,j as e}from"./iframe-BaE-r_tL.js";import{S as w}from"./ShowcaseBox-CvpXiMzv.js";import{C as E}from"./CssTokens-DoMUOAyj.js";import{I as y,C as j}from"./ComponentInspector-aQuGSI0z.js";const x=`/* ==============================================
 * AppStoreBadge — Daily Wire Design System
 * Figma: App Store Buttons (7761:19420), Company × Style (Preferred / Alternative).
 * The badge itself is the official artwork exported from Figma (icons/store-badges/);
 * this stylesheet only sizes it and adds the DS focus ring. Store guidelines do not
 * allow recoloring the badge, so hover / pressed keep the artwork unchanged.
 * ============================================== */

.appStoreBadge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* Figma badges are 40px tall, radius 8 */
  border-radius: var(--border-radius-md);
  cursor: pointer;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

/* Touch target: badges are 40px tall; this invisible area makes them 44px */
.appStoreBadge::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: calc((100% - var(--touch-target-min)) / 2);
  bottom: calc((100% - var(--touch-target-min)) / 2);
}

.content {
  display: inline-flex;
}

.artwork {
  display: block;
  width: auto;
  height: var(--size-2xl);
}

/* ── Focus ring: same ring as Button ([data-state] forces it for docs and QA) ── */

.appStoreBadge:focus-visible,
.appStoreBadge[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Disabled: no link; artwork dimmed with the DS disabled opacity ── */

.appStoreBadge[aria-disabled='true'] {
  cursor: not-allowed;
}

.appStoreBadge[aria-disabled='true'] .artwork {
  opacity: var(--opacity-disabled);
}
`,C=""+new URL("amazon-appstore-alternative-DvCu1q3h.svg",import.meta.url).href,D=""+new URL("amazon-appstore-preferred-DQa2bajX.svg",import.meta.url).href,P=""+new URL("app-store-alternative-DjOBuB3i.svg",import.meta.url).href,L=""+new URL("app-store-preferred-CYoX2KS6.svg",import.meta.url).href,O=""+new URL("f-droid-alternative-DC0Ic694.svg",import.meta.url).href,I=""+new URL("f-droid-preferred-CqsEMyIT.svg",import.meta.url).href,G=""+new URL("galaxy-store-alternative-Cr_3a1aY.svg",import.meta.url).href,U=""+new URL("galaxy-store-preferred-IN6CcpJr.svg",import.meta.url).href,z=""+new URL("google-play-alternative-DPYvgc6_.svg",import.meta.url).href,F=""+new URL("google-play-preferred-BQuiSvrL.svg",import.meta.url).href,q=""+new URL("huawei-appgallery-alternative-DgU9lsqJ.svg",import.meta.url).href,Y=""+new URL("huawei-appgallery-preferred-Cy-77ZRI.svg",import.meta.url).href,N=""+new URL("mac-app-store-alternative-CHCaMBFY.svg",import.meta.url).href,$=""+new URL("mac-app-store-preferred-CjxQqg8G.svg",import.meta.url).href,M=""+new URL("microsoft-store-alternative-Cw8N5jB9.svg",import.meta.url).href,Q=""+new URL("microsoft-store-preferred-BpcFLJi_.svg",import.meta.url).href,H="_appStoreBadge_tl5ad_9",J="_content_tl5ad_32",V="_artwork_tl5ad_36",v={appStoreBadge:H,content:J,artwork:V},u=["app-store","mac-app-store","amazon-appstore","galaxy-store","huawei-appgallery","f-droid","google-play","microsoft-store"],S=["preferred","alternative"],W={"app-store":{label:"Download on the App Store",artwork:{preferred:L,alternative:P}},"mac-app-store":{label:"Download on the Mac App Store",artwork:{preferred:$,alternative:N}},"amazon-appstore":{label:"Available at Amazon Appstore",artwork:{preferred:D,alternative:C}},"galaxy-store":{label:"Available on Galaxy Store",artwork:{preferred:U,alternative:G}},"huawei-appgallery":{label:"Explore it on AppGallery",artwork:{preferred:Y,alternative:q}},"f-droid":{label:"Get it on F-Droid",artwork:{preferred:I,alternative:O}},"google-play":{label:"Get it on Google Play",artwork:{preferred:F,alternative:z}},"microsoft-store":{label:"Get it from Microsoft",artwork:{preferred:Q,alternative:M}}},s=g.forwardRef(function({store:t="app-store",badgeStyle:a="preferred",href:h,disabled:o=!1,target:m,rel:B,"aria-label":_,className:k,...T},R){const b=W[t];return e.jsx("a",{ref:R,className:[v.appStoreBadge,k].filter(Boolean).join(" "),href:o?void 0:h,target:o?void 0:m,rel:B??(m==="_blank"?"noopener noreferrer":void 0),role:o?"link":void 0,"aria-label":_??b.label,"aria-disabled":o||void 0,"data-store":t,"data-style":a,...T,children:e.jsx("span",{className:v.content,children:e.jsx("img",{className:v.artwork,src:b.artwork[a],alt:"",draggable:!1})})})});s.__docgenInfo={description:`Official "Download on …" store badge, rendered as a link with the badge's text as its name.`,methods:[],displayName:"AppStoreBadge",props:{store:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof APP_STORE_BADGE_STORES)[number]"},description:"Store (Figma `Company`)",defaultValue:{value:"'app-store'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof APP_STORE_BADGE_STYLES)[number]"},description:"Figma `Style`: preferred (dark) or alternative (light)",defaultValue:{value:"'preferred'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"Store listing URL"},disabled:{required:!1,tsType:{name:"boolean"},description:"Renders the badge without a link (e.g. app not yet published)",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const X={component:s,title:"Components/AppStoreBadge",parameters:{layout:"centered"},argTypes:{store:{control:"select",options:[...u]},badgeStyle:{control:"inline-radio",options:[...S]},href:{control:"text"},disabled:{control:"boolean"}},args:{store:"app-store",badgeStyle:"preferred",href:"#",disabled:!1}},c={},n={parameters:{layout:"padded"},render:()=>e.jsx(w,{direction:"column",style:{alignItems:"stretch"},children:S.map(r=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,alignItems:"center"},children:u.map(t=>e.jsx(s,{store:t,badgeStyle:r,href:"#"},t))},r))})},l={render:()=>e.jsxs(w,{children:[e.jsx(s,{store:"app-store",href:"#"}),e.jsx(s,{store:"google-play",href:"#"}),e.jsx(s,{store:"amazon-appstore",href:"#"})]})},f=["default","hover","pressed","focus","disabled"],A=["hover","pressed","focus"];function K({children:r}){return e.jsx(e.Fragment,{children:r})}function Z({children:r}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r})}const p={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${f.length}, 1fr)`,gap:"16px 12px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),f.map(r=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:r},r)),S.map(r=>u.map(t=>e.jsxs(K,{children:[e.jsxs("div",{children:[t," · ",r]}),f.map(a=>e.jsx(Z,{children:e.jsx(s,{store:t,badgeStyle:r,href:"#",disabled:a==="disabled",...A.includes(a)?{"data-state":a}:{}})},a))]},`${r}-${t}`)))]})},i={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(E,{css:x})};function ee(){const[r,t]=g.useState("app-store"),[a,h]=g.useState("preferred"),[o,m]=g.useState("default");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(y,{label:"Store",options:u,value:r,onChange:t}),e.jsx(y,{label:"Style",options:S,value:a,onChange:h}),e.jsx(y,{label:"State",options:f,value:o,onChange:m}),e.jsx(j,{css:x,group:a,state:o,children:e.jsx(s,{store:r,badgeStyle:a,href:"#",disabled:o==="disabled",...A.includes(o)?{"data-state":o}:{}})})]})}const d={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(ee,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <ShowcaseBox direction="column" style={{
    alignItems: 'stretch'
  }}>
      {APP_STORE_BADGE_STYLES.map(badgeStyle => <div key={badgeStyle} style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'center'
    }}>
          {APP_STORE_BADGE_STORES.map(store => <AppStoreBadge key={store} store={store} badgeStyle={badgeStyle} href="#" />)}
        </div>)}
    </ShowcaseBox>
}`,...n.parameters?.docs?.source},description:{story:"Every store in both styles, as in Figma (Company × Style).",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <AppStoreBadge store="app-store" href="#" />
      <AppStoreBadge store="google-play" href="#" />
      <AppStoreBadge store="amazon-appstore" href="#" />
    </ShowcaseBox>
}`,...l.parameters?.docs?.source},description:{story:"A typical download row: one badge per platform the app ships on.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: \`auto repeat(\${STATES.length}, 1fr)\`,
    gap: '16px 12px',
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
      {APP_STORE_BADGE_STYLES.map(badgeStyle => APP_STORE_BADGE_STORES.map(store => <Row key={\`\${badgeStyle}-\${store}\`}>
            <div>{store} · {badgeStyle}</div>
            {STATES.map(s => <Cell key={s}>
                <AppStoreBadge store={store} badgeStyle={badgeStyle} href="#" disabled={s === 'disabled'} {...FORCED.includes(s) ? {
          'data-state': s
        } : {}} />
              </Cell>)}
          </Row>))}
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Every store and style in every state. Figma draws one state; store guidelines do not allow\nrecoloring the badge, so hover / pressed look like default. Focus adds the DS ring, disabled\ndims the artwork with `--opacity-disabled`. Hover / pressed / focus are forced with `data-state`.",...p.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={appStoreBadgeCss} />
}`,...i.parameters?.docs?.source},description:{story:"Properties and tokens read from AppStoreBadge.module.css, resolved for the active theme.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <AppStoreBadgeInspect />
}`,...d.parameters?.docs?.source},description:{story:"Pick store, style and state; see real measurements and the tokens that apply. Hover a token to locate it.",...d.parameters?.docs?.description}}};const re=["Default","AllBadges","DownloadRow","States","Tokens","Inspect"],ne=Object.freeze(Object.defineProperty({__proto__:null,AllBadges:n,Default:c,DownloadRow:l,Inspect:d,States:p,Tokens:i,__namedExportsOrder:re,default:X},Symbol.toStringTag,{value:"Module"}));export{ne as A,c as D,d as I,p as S,i as T,l as a,n as b};
