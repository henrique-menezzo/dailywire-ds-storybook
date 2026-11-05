import{j as e,r as S}from"./iframe-BaE-r_tL.js";import{S as b}from"./ShowcaseBox-CvpXiMzv.js";import{C as x}from"./CssTokens-DoMUOAyj.js";import{I as w,C as T}from"./ComponentInspector-aQuGSI0z.js";import{L as c,a as D}from"./LiveUpdateSummary-BOvBgxA7.js";const h=`/* ==============================================
 * LiveUpdateSummary — Daily Wire Design System
 * Figma: Live Updates Article Summary (9133:58532), doc frame 9158:64719, section "Article" (8413:56868).
 * state Default | hover | pressed (3 variants). Nests Metadata (ArticleMetadata: Type Inverted · size sm,
 * Publish Date only) over Heading-Article-Content (ArticleHeading: size xsm · weight medium).
 * The date is overridden to text/neutral/bold (Metadata draws it in subtlest) and follows the headline's
 * hover / pressed colors.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: column, gap 8 (Figma raw 8, unbound → spacing-md) ── */

.root {
  --lus-date: var(--color-text-neutral-bold-default);

  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  min-width: 0;
}

/* ── Date (Figma override: label/400/sm in text/neutral/bold) ── */

.meta time {
  color: var(--lus-date);
  /* Figma: On hover → Dissolve 600ms ease-out; no 600ms token, closest --duration-slower */
  transition: color var(--duration-slower) var(--easing-ease-out);
}

/* The headline fades with the date (ArticleHeading alone uses --duration-slow) */
.heading,
.heading a {
  transition-duration: var(--duration-slower);
}

/* ── Hover: anywhere on a linked entry (the stretched headline link covers it) ──
 * [data-state] forces the state for docs and QA; :where(a:hover) covers an entry wrapped in an <a>. */

.root:has(.heading a:hover),
.root[data-state='hover'],
:where(a:hover) .root {
  --lus-date: var(--color-text-neutral-bold-hovered);
}

/* ── Pressed ─────────────────────────────────── */

.root:has(.heading a:active),
.root[data-state='pressed'],
:where(a:active) .root {
  --lus-date: var(--color-text-neutral-bold-pressed);
}

@media (prefers-reduced-motion: reduce) {
  .meta time,
  .heading,
  .heading a {
    transition: none;
  }
}
`,g="New report shows glaciers melting faster than previously thought, experts say",v="10 min ago",u=348,A=t=>e.jsx("div",{style:{width:u},children:e.jsx(t,{})}),I={component:c,title:"Components/LiveUpdateSummary",parameters:{layout:"centered"},decorators:[A],argTypes:{title:{control:"text"},href:{control:"text"},headingLevel:{control:"select",options:[2,3,4,5,6]},publishDate:{control:"text"},dateTime:{control:"text"},metadataProps:{control:"object"}},args:{title:g,href:"#",headingLevel:3,publishDate:v}},p={},s={args:{href:void 0}},r={args:{title:"Senate passes stopgap funding bill hours before shutdown deadline",publishDate:new Date("2026-11-05T14:30:00Z"),formatDate:()=>"2 hours ago"}},o={args:{metadataProps:{author:"Daily Wire News"}}},n={parameters:{layout:"padded"},render:t=>e.jsxs(b,{direction:"column",style:{alignItems:"stretch",gap:20},children:[e.jsx(c,{...t,publishDate:"2 hours ago",title:"Study shows link between urbanization and biodiversity loss"}),e.jsx(c,{...t,publishDate:"3 hours ago",title:"Report highlights the benefits of electric vehicles for urban health"}),e.jsx(c,{...t,publishDate:"4 hours ago",title:"New initiative promotes sustainable farming practices worldwide"})]})},m=[...D,"focus"],y=t=>t==="default"?{}:{"data-state":t},i={decorators:[],parameters:{layout:"fullscreen"},render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`repeat(${m.length}, ${u}px)`,gap:24,padding:24,alignItems:"start",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[m.map(a=>e.jsx("div",{style:{textTransform:"capitalize"},children:a},a)),m.map(a=>e.jsx(c,{...t,...y(a)},a))]})},f={"--lus-date":"date color"},d={tags:["!test"],decorators:[],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(x,{css:h,aliases:f})};function L(){const[t,a]=S.useState("default");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(w,{label:"State",options:m,value:t,onChange:a}),e.jsx(T,{css:h,aliases:f,group:"summary",state:t,scale:1,children:e.jsx(c,{href:"#",title:g,publishDate:v,style:{width:u},...y(t)})})]})}const l={tags:["!test"],decorators:[],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(L,{})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    href: undefined
  }
}`,...s.parameters?.docs?.source},description:{story:"Without `href` the entry is static text: no link, no hover.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Senate passes stopgap funding bill hours before shutdown deadline',
    publishDate: new Date('2026-11-05T14:30:00Z'),
    formatDate: () => '2 hours ago'
  }
}`,...r.parameters?.docs?.source},description:{story:"Real data: a `Date` fills `<time dateTime>` (ISO) and is formatted; `formatDate` can make it relative.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    metadataProps: {
      author: 'Daily Wire News'
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"`metadataProps` adds other ArticleMetadata items (here the author). Figma draws the date alone.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'stretch',
    gap: 20
  }}>
      <LiveUpdateSummary {...args} publishDate="2 hours ago" title="Study shows link between urbanization and biodiversity loss" />
      <LiveUpdateSummary {...args} publishDate="3 hours ago" title="Report highlights the benefits of electric vehicles for urban health" />
      <LiveUpdateSummary {...args} publishDate="4 hours ago" title="New initiative promotes sustainable farming practices worldwide" />
    </ShowcaseBox>
}`,...n.parameters?.docs?.source},description:{story:"A short feed: each entry is one link, hover any of them. (The timeline version is SummaryNews.)",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [],
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: \`repeat(\${STATES.length}, \${FIGMA_WIDTH}px)\`,
    gap: 24,
    padding: 24,
    alignItems: 'start',
    fontSize: 12,
    color: 'var(--color-text-neutral-subtlest-default)'
  }}>
      {STATES.map(s => <div key={s} style={{
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {STATES.map(s => <LiveUpdateSummary key={s} {...args} {...stateProps(s)} />)}
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Every Figma state (Default · hover · pressed) plus keyboard focus, forced with `data-state`.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  decorators: [],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={liveUpdateSummaryCss} aliases={LIVE_UPDATE_SUMMARY_ALIASES} />
}`,...d.parameters?.docs?.source},description:{story:"Properties and tokens read from LiveUpdateSummary.module.css, resolved for the active theme. The headline and the row use ArticleHeading and ArticleMetadata tokens.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  decorators: [],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <LiveUpdateSummaryInspect />
}`,...l.parameters?.docs?.source},description:{story:"Pick a state; see real measurements and the tokens that apply. Hover a token to locate it.",...l.parameters?.docs?.description}}};const k=["Default","WithoutLink","WithData","WithAuthor","Feed","States","Tokens","Inspect"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Feed:n,Inspect:l,States:i,Tokens:d,WithAuthor:o,WithData:r,WithoutLink:s,__namedExportsOrder:k,default:I},Symbol.toStringTag,{value:"Module"}));export{p as D,n as F,l as I,F as L,i as S,d as T,s as W,r as a,o as b};
