import{j as t,r as D}from"./iframe-BaE-r_tL.js";import{C as x}from"./CssTokens-DoMUOAyj.js";import{I as T,C as E}from"./ComponentInspector-aQuGSI0z.js";import{S as h,a as k}from"./SummaryNews-TPwkPb1M.js";const S=`/* ==============================================
 * SummaryNews — Daily Wire Design System
 * Figma: Summary news (9113:51329), doc frame 9131:57788, section "Article" (8413:56868).
 * Breakpoint Desktop 480 | Tablet 672 | Mobile 361 (3 variants). The three variants differ in width only
 * (same padding, gaps, text styles and dots), so the list is fluid and needs no container query.
 * Each row: StatusDot (size sm, drawn privately) over a rail line, then a Live Updates Article Summary
 * (LiveUpdateSummary) with spacing-2xl below it. "Overlay top / bottom" are gradient fades on the edges.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: list surface, spacing-lg top and bottom ──
 * Figma clips the frame; nothing overflows here, and clipping would cut the headline focus ring. */

.root {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: var(--spacing-lg) var(--spacing-none);
  list-style: none;
  background-color: var(--color-background-neutral-bold-default);
}

/* ── Edge fades (Figma "Overlay top" / "Overlay bottom": 20px, raw → --size-md) ──
 * Surface color to the transparent overlay token, above the entries and transparent to the pointer. */

.root::before,
.root::after {
  content: '';
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  height: var(--size-md);
  pointer-events: none;
}

.root::before {
  top: 0;
  background-image: linear-gradient(
    to bottom,
    var(--color-background-neutral-bold-default),
    var(--color-overlay-neutral-subtlest-default)
  );
}

.root::after {
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    var(--color-overlay-neutral-subtlest-default),
    var(--color-background-neutral-bold-default)
  );
}

/* ── Row: rail (12px) + entry, spacing-2xl apart ── */

.item {
  --snews-dot: var(--color-icon-neutral-bold-default);
  --snews-line: var(--color-border-neutral-bold-default);

  display: grid;
  grid-template-columns: var(--size-xs) minmax(0, 1fr);
  column-gap: var(--spacing-2xl);
}

/* ── Status dot colors (Figma overrides the dot fill per row: recent → older → stale) ── */

.item[data-status='live'] {
  --snews-dot: var(--color-icon-live-bold-default);
}

.item[data-status='older'] {
  --snews-dot: var(--color-icon-neutral-subtlest-default);
}

.item[data-status='stale'] {
  --snews-dot: var(--color-icon-neutral-subtlest-disabled);
}

/* ── Rail: the dot, then a 1px line down to the next row ── */

.rail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Figma StatusDot / Size=sm: 12px box with a 6px dot (raw sizes; 6px → primitive dimension 1-5) */
.statusDot {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: var(--size-xs);
  height: var(--size-xs);
}

.dot {
  width: var(--primitive-dimension-dimension-1-5);
  height: var(--primitive-dimension-dimension-1-5);
  border-radius: var(--border-radius-full);
  background-color: var(--snews-dot);
}

.line {
  flex: 1;
  width: var(--border-default);
  background-color: var(--snews-line);
}

/* ── Entry (Figma override: padding-bottom spacing-2xl) ── */

.summary {
  padding-bottom: var(--spacing-2xl);
}
`,n={Desktop:480,Tablet:672,Mobile:361},f=Object.keys(n),g=[{id:"a",publishDate:"2 hours ago",title:"Study shows link between urbanization and biodiversity loss"},{id:"b",publishDate:"3 hours ago",title:"Report highlights the benefits of electric vehicles for urban health"},{id:"c",publishDate:"4 hours ago",title:"New initiative promotes sustainable farming practices worldwide"}],u=g.map(e=>({...e,href:"#"})),I={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"};function b({width:e,label:s,children:a}){return t.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[s&&t.jsx("div",{style:I,children:s}),t.jsx("div",{style:{width:e,flexShrink:0},children:a})]})}const v={display:"flex",gap:32,alignItems:"flex-start",padding:24,overflowX:"auto"},N={component:h,title:"Components/SummaryNews",parameters:{layout:"centered"},argTypes:{items:{control:"object"},headingLevel:{control:"select",options:[2,3,4,5,6]}},args:{items:u,headingLevel:3},render:e=>t.jsx(b,{width:n.Desktop,children:t.jsx(h,{...e})})},r={},o={args:{items:g}},i={parameters:{layout:"fullscreen"},render:e=>t.jsx("div",{style:v,children:f.map(s=>t.jsx(b,{width:n[s],label:`${s} · ${n[s]}`,children:t.jsx(h,{...e})},s))})},l={args:{items:k.map((e,s)=>({id:e,status:e,href:"#",publishDate:["Just now","2 hours ago","3 hours ago","4 hours ago"][s],title:`${e[0].toUpperCase()}${e.slice(1)}: ${g[s%g.length].title}`}))}},d={args:{items:[{id:"1",href:"#",publishDate:new Date("2026-11-05T13:00:00Z"),formatDate:()=>"2 hours ago",title:"Senate passes stopgap funding bill hours before shutdown deadline"},{id:"2",href:"#",publishDate:new Date("2026-11-05T12:00:00Z"),formatDate:()=>"3 hours ago",title:"Treasury yields climb as investors weigh new inflation data"},{id:"3",href:"#",publishDate:new Date("2026-11-05T11:00:00Z"),formatDate:()=>"4 hours ago",title:"Governors meet to coordinate storm recovery funding"},{id:"4",href:"#",publishDate:new Date("2026-11-05T09:00:00Z"),formatDate:()=>"6 hours ago",title:"Oil prices steady after two days of losses"}]}},A=["default","hover","pressed","focus"],c={parameters:{layout:"fullscreen"},render:e=>{const s=A.map((a,y)=>({...u[y%u.length],id:a,publishDate:`${a} · ${u[y%u.length].publishDate}`,...a==="default"?{}:{"data-state":a}}));return t.jsx("div",{style:v,children:f.map(a=>t.jsx(b,{width:n[a],label:`${a} · ${n[a]}`,children:t.jsx(h,{...e,items:s})},a))})}},w={"--snews-dot":"dot color","--snews-line":"line color"},p={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>t.jsx(x,{css:S,aliases:w})};function M(){const[e,s]=D.useState("Desktop");return t.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[t.jsx(T,{label:"Breakpoint",options:f,value:e,onChange:s}),t.jsx(E,{css:S,aliases:w,group:`${e} ${n[e]}`,state:"default",scale:1,children:t.jsx(h,{items:u,style:{width:n[e]}})},e)]})}const m={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(M,{})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Each entry with `href` is one link: hover anywhere on it.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: FIGMA_ITEMS
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma draws the entries without links: static text.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={row}>
      {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · \${BREAKPOINTS[bp]}\`}>
          <SummaryNews {...args} />
        </Frame>)}
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Figma `Breakpoint`: Desktop 480 · Tablet 672 · Mobile 361. Only the width changes; headlines wrap on mobile.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: SUMMARY_NEWS_STATUSES.map((status, i) => ({
      id: status,
      status,
      href: '#',
      publishDate: ['Just now', '2 hours ago', '3 hours ago', '4 hours ago'][i],
      title: \`\${status[0].toUpperCase()}\${status.slice(1)}: \${FIGMA_ITEMS[i % FIGMA_ITEMS.length].title}\`
    }))
  }
}`,...l.parameters?.docs?.source},description:{story:"The timeline dot (Figma StatusDot `Status`). By default it follows the position, as Figma draws it\n(recent, older, stale…); `status` on an item sets it, e.g. `live` for an entry that is still developing.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      href: '#',
      publishDate: new Date('2026-11-05T13:00:00Z'),
      formatDate: () => '2 hours ago',
      title: 'Senate passes stopgap funding bill hours before shutdown deadline'
    }, {
      id: '2',
      href: '#',
      publishDate: new Date('2026-11-05T12:00:00Z'),
      formatDate: () => '3 hours ago',
      title: 'Treasury yields climb as investors weigh new inflation data'
    }, {
      id: '3',
      href: '#',
      publishDate: new Date('2026-11-05T11:00:00Z'),
      formatDate: () => '4 hours ago',
      title: 'Governors meet to coordinate storm recovery funding'
    }, {
      id: '4',
      href: '#',
      publishDate: new Date('2026-11-05T09:00:00Z'),
      formatDate: () => '6 hours ago',
      title: 'Oil prices steady after two days of losses'
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:"Real data: `Date` values fill `<time dateTime>`; `formatDate` renders them relative.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => {
    const items = STATES.map((s, i) => ({
      ...LINKED_ITEMS[i % LINKED_ITEMS.length],
      id: s,
      publishDate: \`\${s} · \${LINKED_ITEMS[i % LINKED_ITEMS.length].publishDate}\`,
      ...(s === 'default' ? {} : {
        'data-state': s
      })
    }));
    return <div style={row}>
        {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · \${BREAKPOINTS[bp]}\`}>
            <SummaryNews {...args} items={items} />
          </Frame>)}
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:"The list has no state of its own; each entry has the LiveUpdateSummary states. One entry per state,\nforced with `data-state`, at every breakpoint width.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={summaryNewsCss} aliases={SUMMARY_NEWS_ALIASES} />
}`,...p.parameters?.docs?.source},description:{story:"Properties and tokens read from SummaryNews.module.css, resolved for the active theme. Entries use LiveUpdateSummary tokens.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <SummaryNewsInspect />
}`,...m.parameters?.docs?.source},description:{story:"Pick a breakpoint (frame width); see real measurements and the tokens that apply. Hover a token to locate it.",...m.parameters?.docs?.description}}};const _=["Default","Static","Breakpoints","Statuses","WithData","States","Tokens","Inspect"],R=Object.freeze(Object.defineProperty({__proto__:null,Breakpoints:i,Default:r,Inspect:m,States:c,Static:o,Statuses:l,Tokens:p,WithData:d,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{i as B,r as D,m as I,R as S,p as T,d as W,l as a,o as b,c};
