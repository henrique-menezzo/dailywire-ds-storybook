import{r as S,j as e}from"./iframe-BaE-r_tL.js";import{C as U}from"./CssTokens-DoMUOAyj.js";import{I as $,C as Z}from"./ComponentInspector-aQuGSI0z.js";import{V as J}from"./index-DTA9Iiqt.js";import{S as F}from"./index-dPPx6LzB.js";import{b as C}from"./ArticleBlock-DA1qK7aW.js";import{c as X}from"./Link-Bo7zJKQL.js";import{L as Y}from"./LiveUpdatesSlider-CxilVZVN.js";import{S as Q}from"./SummaryNews-TPwkPb1M.js";const _=`/* ==============================================
 * LiveUpdatesBlock — Daily Wire Design System
 * Figma: Live Updates block (9113:51726), doc frame 9160:66974, section "Article" (8413:56868).
 * Breakpoint Desktop 1376 | Tablet 768 | Mobile 393 (3 variants). The breakpoint axis is responsive CSS:
 * container queries on the block's own width. tokens.css has no breakpoint tokens: the limits are the Figma
 * frame widths (Tablet from 768; Desktop from 1376, where the 480 lead column and an 864 slider fit side by side).
 * Nests SectionHeader + StatusDot (not DS components: drawn privately as the default header), ArticleBlock,
 * Slider Live Updates (LiveUpdatesSlider), Summary news (SummaryNews) and Link Button (Link).
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: the query container ───────────────── */

.root {
  display: block;
  box-sizing: border-box;
  width: 100%;
  container-name: dw-live-updates-block;
  container-type: inline-size;
  background-color: var(--color-background-neutral-bold-default);
}

/* ── Layout, Mobile first (< 768): one column ────
 * lead (padded) · slider (full bleed) · updates (padded), spacing-3xl below. */

.layout {
  --lub-inline: var(--spacing-xl);

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    'intro'
    'media'
    'updates';
  padding-bottom: var(--spacing-3xl);
}

/* ── Lead: header over the ArticleBlock, spacing-xl apart (Figma raw 16 → spacing-xl) ── */

.intro {
  grid-area: intro;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  min-width: 0;
  padding: var(--spacing-4xl) var(--lub-inline);
}

/* One ArticleBlock per Figma size: lg on mobile, xl from tablet up (container query below).
 * display: none keeps the other copy out of the accessibility tree and the tab order. */
.intro .articleWide {
  display: none;
}

/* ── Default header (Figma SectionHeader · static · live · sm, Show Timestamp) ── */

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: var(--default), sans-serif;
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
}

/* Figma StatusDot · live · md: 16px box, 8px dot (raw sizes → size-sm / size-2xs) */
.liveDot {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: var(--size-sm);
  height: var(--size-sm);
}

.dot {
  width: var(--size-2xs);
  height: var(--size-2xs);
  border-radius: var(--border-radius-full);
  background-color: var(--color-icon-live-bold-default);
}

/* label/600/md */
.label {
  margin: 0;
  font-size: var(--font-size-sm);
  font-weight: var(--Semibold);
  line-height: inherit;
  color: var(--color-text-neutral-bold-default);
}

/* label/400/md */
.separator {
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  color: var(--color-text-neutral-subtlest-default);
}

/* label/600/sm */
.timestamp {
  font-size: var(--font-size-xs);
  font-weight: var(--Semibold);
  color: var(--color-text-brand-bold-default);
}

/* ── Media: LiveUpdatesSlider (it sets its own ratio and corners from its width) ── */

.media {
  grid-area: media;
  min-width: 0;
}

/* ── Updates: SummaryNews, then "View All Updates", spacing-3xl apart ── */

.updates {
  grid-area: updates;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-3xl);
  min-width: 0;
  margin-top: var(--spacing-3xl);
  padding-inline: var(--lub-inline);
}

.news {
  align-self: stretch;
}

/* ── Tablet + Desktop (≥ 768): ArticleBlock xl instead of lg ── */

@container dw-live-updates-block (width >= 768px) {
  .intro .articleWide {
    display: flex;
  }

  .intro .articleCompact {
    display: none;
  }
}

/* ── Tablet (768 – 1375): wider side padding (spacing-6xl) ── */

@container dw-live-updates-block (768px <= width < 1376px) {
  .layout {
    --lub-inline: var(--spacing-6xl);
  }
}

/* ── Desktop (≥ 1376): lead + updates beside the slider ──
 * Figma: Left Column fills (480 at 1376), the slider is 864 wide; the columns keep that 480 : 864 ratio.
 * Gaps spacing-4xl (Figma raw 32 between the columns → spacing-4xl). No outer padding. */

@container dw-live-updates-block (width >= 1376px) {
  .layout {
    grid-template-columns: minmax(0, 480fr) minmax(0, 864fr);
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'intro media'
      'updates media';
    align-items: start;
    column-gap: var(--spacing-4xl);
    row-gap: var(--spacing-4xl);
    padding-bottom: var(--spacing-none);
  }

  .intro {
    padding: var(--spacing-none);
  }

  .updates {
    gap: var(--spacing-4xl);
    margin-top: var(--spacing-none);
    padding-inline: var(--spacing-none);
  }
}
`,ee="_root_bf42h_14",te="_layout_bf42h_26",ae="_intro_bf42h_40",ne="_articleWide_bf42h_51",se="_header_bf42h_57",ie="_liveDot_bf42h_68",re="_dot_bf42h_76",oe="_label_bf42h_84",le="_separator_bf42h_93",de="_timestamp_bf42h_100",ce="_media_bf42h_108",pe="_updates_bf42h_115",me="_news_bf42h_126",ue="_articleCompact_bf42h_137",i={root:ee,layout:te,intro:ae,articleWide:ne,header:se,liveDot:ie,dot:re,label:oe,separator:le,timestamp:de,media:ce,updates:pe,news:me,articleCompact:ue},he={title:"Oil Prices Plummet, Stocks Climb After Trump Update On Iran War",description:"Oil prices have dropped for two straight days following previous surges, having hit four-year highs on Monday before logging the biggest single-day percentage drop since 2022."},fe=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit"}),k=t=>`h${Math.min(t,6)}`,c=S.forwardRef(function({header:a,label:n="Live Updates",timestamp:s="1m ago",timestampDateTime:o,formatTimestamp:b,headingLevel:l=2,article:r,updates:M,slides:z,sliderProps:R,viewAllHref:L,viewAllLabel:W="View All Updates",viewAllProps:q,className:H,...K},V){const j=`${S.useId()}-label`,G=k(l),B=s instanceof Date,I=B?(b??fe.format)(s):s,x={...he,...r};return e.jsx("section",{ref:V,className:[i.root,H].filter(Boolean).join(" "),"aria-labelledby":a==null?j:void 0,...K,children:e.jsxs("div",{className:i.layout,children:[e.jsxs("div",{className:i.intro,children:[a??e.jsxs("div",{className:i.header,children:[e.jsx("span",{className:i.liveDot,"aria-hidden":"true",children:e.jsx("span",{className:i.dot})}),e.jsx(G,{id:j,className:i.label,children:n}),I?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:i.separator,"aria-hidden":"true",children:"•"}),e.jsx("time",{className:i.timestamp,dateTime:o??(B?s.toISOString():void 0),children:I})]}):null]}),e.jsx(C,{...x,className:[i.articleWide,x.className].filter(Boolean).join(" "),size:"xl",headingAs:k(l+1)}),e.jsx(C,{...x,className:[i.articleCompact,x.className].filter(Boolean).join(" "),size:"lg",headingAs:k(l+1)})]}),e.jsx("div",{className:i.media,children:e.jsx(Y,{...R,slides:z})}),e.jsxs("div",{className:i.updates,children:[e.jsx(Q,{className:i.news,items:M,headingLevel:Math.min(l+2,6)}),L!=null&&e.jsx(X,{variant:"primary",size:"md",weight:"semibold",underline:!0,trailingIcon:"arrow-right",...q,href:L,children:W})]})]})})});c.__docgenInfo={description:'Live coverage block (Figma "Live Updates block" 9113:51726): a header with a live dot, the lead story\n(`ArticleBlock`), the media slider (`LiveUpdatesSlider`), the latest updates (`SummaryNews`) and a link to\nall of them. The Figma `Breakpoint` axis is responsive CSS on the block\'s own width: one column below\n1376px (Mobile < 768, Tablet from 768), lead + updates beside the slider from 1376px (Desktop).',methods:[],displayName:"LiveUpdatesBlock",props:{header:{required:!1,tsType:{name:"ReactNode"},description:"Replaces the default header (Figma SectionHeader: live dot, label, bullet, timestamp). Name the section\nwith `aria-labelledby` / `aria-label` when you pass one."},label:{required:!1,tsType:{name:"string"},description:'Default header label (Figma "Live Updates")',defaultValue:{value:"'Live Updates'",computed:!1}},timestamp:{required:!1,tsType:{name:"union",raw:"string | Date | null",elements:[{name:"string"},{name:"Date"},{name:"null"}]},description:'Default header timestamp (Figma "1m ago"). A `Date` is formatted with `formatTimestamp`. `null` hides it (Figma Show Timestamp off).',defaultValue:{value:"'1m ago'",computed:!1}},timestampDateTime:{required:!1,tsType:{name:"string"},description:"`<time dateTime>` of the timestamp. Defaults to the ISO string of a `Date` `timestamp`."},formatTimestamp:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => string",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"string"}}},description:'Formats a `Date` `timestamp` (default "3:45 PM", en-US)'},headingLevel:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Heading level of the header label. The lead title is one level below, the updates two (capped at h6).",defaultValue:{value:"2",computed:!1}},article:{required:!1,tsType:{name:"Omit",elements:[{name:"ArticleBlockProps"},{name:"union",raw:"'size' | 'headingAs' | 'id'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'headingAs'"},{name:"literal",value:"'id'"}]}],raw:"Omit<ArticleBlockProps, 'size' | 'headingAs' | 'id'>"},description:'The lead story: title, description, link, "more" action… Defaults to the Figma texts.'},updates:{required:!1,tsType:{name:"unknown"},description:"The latest updates, newest first (`SummaryNews` items). Defaults to the Figma entries."},slides:{required:!0,tsType:{name:"unknown"},description:"Media of the coverage (`LiveUpdatesSlider` slides: images, videos or custom content)"},sliderProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LiveUpdatesSliderProps"},{name:"literal",value:"'slides'"}],raw:"Omit<LiveUpdatesSliderProps, 'slides'>"},description:"Extra `LiveUpdatesSlider` props (`defaultIndex`, `label`, `onIndexChange`…)"},viewAllHref:{required:!1,tsType:{name:"string"},description:'Page with every update. Without it the "View All Updates" link is not drawn.'},viewAllLabel:{required:!1,tsType:{name:"string"},description:'Figma "View All Updates"',defaultValue:{value:"'View All Updates'",computed:!1}},viewAllProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LinkProps"},{name:"union",raw:"'href' | 'children'",elements:[{name:"literal",value:"'href'"},{name:"literal",value:"'children'"}]}],raw:"Omit<LinkProps, 'href' | 'children'>"},description:'Extra `Link` props for "View All Updates"'}},composes:["Omit"]};const{fn:T}=__STORYBOOK_MODULE_TEST__,d={Desktop:1376,Tablet:768,Mobile:393},A=Object.keys(d),ge=[{type:"image",id:"launch",src:F["Missile launch"],alt:"A missile lifts off from its launch pad in a cloud of smoke"},{type:"image",id:"stamps",src:F["Stamps collage"],alt:"Collage of torn Iranian stamps over an American flag"},{type:"video",id:"video",poster:J,label:"Explosions light up the skyline"}],N=[{id:"a",href:"#",publishDate:"2 hours ago",title:"Study shows link between urbanization and biodiversity loss"},{id:"b",href:"#",publishDate:"3 hours ago",title:"Report highlights the benefits of electric vehicles for urban health"},{id:"c",href:"#",publishDate:"4 hours ago",title:"New initiative promotes sustainable farming practices worldwide"}],O={label:"Live Updates",timestamp:"1m ago",headingLevel:2,article:{href:"#",onMoreClick:T()},updates:N,slides:ge,sliderProps:{defaultIndex:2},viewAllHref:"#",viewAllLabel:"View All Updates"},ve={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"};function w({width:t,label:a,children:n}){return e.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[a&&e.jsx("div",{style:ve,children:a}),e.jsx("div",{style:{width:t,flexShrink:0},children:n})]})}const y={padding:24,overflowX:"auto"},be={component:c,title:"Components/LiveUpdatesBlock",parameters:{layout:"fullscreen"},argTypes:{label:{control:"text"},timestamp:{control:"text"},timestampDateTime:{control:"text"},headingLevel:{control:"select",options:[2,3,4]},article:{control:"object"},updates:{control:"object"},slides:{control:"object"},sliderProps:{control:"object"},viewAllHref:{control:"text"},viewAllLabel:{control:"text"},header:{control:!1}},args:O},p={},m={render:t=>e.jsx("div",{style:{...y,display:"grid",gap:48},children:A.map(a=>e.jsx(w,{width:d[a],label:`${a} · ${d[a]}`,children:e.jsx(c,{...t})},a))})},u={render:t=>e.jsx("div",{style:y,children:e.jsx(w,{width:d.Tablet,children:e.jsx(c,{...t,"aria-labelledby":"custom-live-header",header:e.jsx("h2",{id:"custom-live-header",style:{margin:0,font:"var(--Semibold) var(--font-size-md) / var(--line-height-100) var(--default), sans-serif",color:"var(--color-text-neutral-bold-default)"},children:"Election night: live results"})})})})},h={args:{timestamp:new Date("2026-11-05T15:44:00Z"),formatTimestamp:()=>"1m ago",article:{href:"#",title:"Senate Passes Stopgap Funding Bill Hours Before Shutdown Deadline",description:"The measure keeps the government funded through January and now heads to the House, where leaders expect a vote tonight.",onMoreClick:T()},updates:[{id:"1",href:"#",status:"live",publishDate:new Date("2026-11-05T15:30:00Z"),formatDate:()=>"15 min ago",title:"House leaders schedule a vote for 9 p.m."},{id:"2",href:"#",publishDate:new Date("2026-11-05T14:00:00Z"),formatDate:()=>"2 hours ago",title:"Treasury yields climb as investors weigh the deal"},{id:"3",href:"#",publishDate:new Date("2026-11-05T13:00:00Z"),formatDate:()=>"3 hours ago",title:"Governors urge Congress to fund storm recovery"}],sliderProps:{defaultIndex:0,onIndexChange:T()}},render:t=>e.jsx("div",{style:y,children:e.jsx(w,{width:d.Mobile,children:e.jsx(c,{...t})})})},xe=["default","hover","pressed","focus"],we=t=>t==="default"?{}:{"data-state":t},f={render:t=>e.jsx("div",{style:{...y,display:"flex",gap:32,alignItems:"flex-start"},children:xe.map(a=>e.jsx(w,{width:d.Mobile,label:a,children:e.jsx(c,{...t,article:{...t.article,...a==="default"?{}:{"data-state":a}},updates:N.map(n=>({...n,...we(a)})),viewAllProps:a==="hover"||a==="focus"?{"data-state":a}:void 0})},a))})};function ye(t){const a=t.replace(/\/\*[\s\S]*?\*\//g,""),n=[];let s=0,o=0,b=0,l="";for(let r=0;r<a.length;r++)a[r]==="{"?(s===0&&(l=a.slice(o,r).trim(),b=r+1),s++):a[r]==="}"&&(s--,s===0&&(l.startsWith("@container")&&n.push({condition:l.replace(/^@container\s+[\w-]+\s*/,""),body:a.slice(b,r)}),o=r+1));return n}const E=ye(_);function P(t,a){const n=t.match(/width < (\d+)px/),s=t.match(/width >= (\d+)px/)??t.match(/(\d+)px <= width/);return(!n||a<Number(n[1]))&&(!s||a>=Number(s[1]))}const ke=t=>A.filter(a=>P(t,d[a])).join(" + "),D={"--lub-inline":"side padding"},g={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"8px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:"All breakpoints (Mobile first)"}),e.jsx(U,{css:_,aliases:D}),E.map(t=>e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"32px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:[`${ke(t.condition)} `,e.jsx("code",{style:{fontSize:12,fontWeight:400,color:"var(--color-text-neutral-subtle-default)"},children:t.condition})]}),e.jsx(U,{css:t.body,aliases:D})]},t.condition))]})},Se={Desktop:.4,Tablet:.6,Mobile:.9};function Te(){const[t,a]=S.useState("Desktop"),n=d[t],s=[_,...E.filter(o=>P(o.condition,n)).map(o=>o.body)].join(`
`);return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx($,{label:"Breakpoint",options:A,value:t,onChange:a}),e.jsx(Z,{css:s,aliases:D,group:`${t} ${n}`,state:"default",scale:Se[t],children:e.jsx(c,{...O,style:{width:n,marginInline:-n/2}})},t)]})}const v={tags:["!test"],parameters:{controls:{disable:!0}},render:()=>e.jsx(Te,{})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source},description:{story:"Full width of the canvas: resize the viewport to see the layout switch (Tablet from 768, Desktop from 1376).",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 48
  }}>
      {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · \${BREAKPOINTS[bp]}\`}>
          <LiveUpdatesBlock {...args} />
        </Frame>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Figma `Breakpoint`: Desktop 1376 · Tablet 768 · Mobile 393, each in a fixed-width frame.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={scroller}>
      <Frame width={BREAKPOINTS.Tablet}>
        <LiveUpdatesBlock {...args} aria-labelledby="custom-live-header" header={<h2 id="custom-live-header" style={{
        margin: 0,
        font: 'var(--Semibold) var(--font-size-md) / var(--line-height-100) var(--default), sans-serif',
        color: 'var(--color-text-neutral-bold-default)'
      }}>
              Election night: live results
            </h2>} />
      </Frame>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"`header` replaces the default header (Figma SectionHeader, which is not a DS component). Name the section\nyourself then (`aria-labelledby`).",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    timestamp: new Date('2026-11-05T15:44:00Z'),
    formatTimestamp: () => '1m ago',
    article: {
      href: '#',
      title: 'Senate Passes Stopgap Funding Bill Hours Before Shutdown Deadline',
      description: 'The measure keeps the government funded through January and now heads to the House, where leaders expect a vote tonight.',
      onMoreClick: fn()
    },
    updates: [{
      id: '1',
      href: '#',
      status: 'live',
      publishDate: new Date('2026-11-05T15:30:00Z'),
      formatDate: () => '15 min ago',
      title: 'House leaders schedule a vote for 9 p.m.'
    }, {
      id: '2',
      href: '#',
      publishDate: new Date('2026-11-05T14:00:00Z'),
      formatDate: () => '2 hours ago',
      title: 'Treasury yields climb as investors weigh the deal'
    }, {
      id: '3',
      href: '#',
      publishDate: new Date('2026-11-05T13:00:00Z'),
      formatDate: () => '3 hours ago',
      title: 'Governors urge Congress to fund storm recovery'
    }],
    sliderProps: {
      defaultIndex: 0,
      onIndexChange: fn()
    }
  },
  render: args => <div style={scroller}>
      <Frame width={BREAKPOINTS.Mobile}>
        <LiveUpdatesBlock {...args} />
      </Frame>
    </div>
}`,...h.parameters?.docs?.source},description:{story:'Real data: `Date` values for the header and the updates, a "more" handler and a slider callback.',...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    ...scroller,
    display: 'flex',
    gap: 32,
    alignItems: 'flex-start'
  }}>
      {STATES.map(s => <Frame key={s} width={BREAKPOINTS.Mobile} label={s}>
          <LiveUpdatesBlock {...args} article={{
        ...args.article,
        ...(s === 'default' ? {} : {
          'data-state': s
        })
      }} updates={FIGMA_UPDATES.map(u => ({
        ...u,
        ...forced(s)
      }))} viewAllProps={s === 'hover' || s === 'focus' ? {
        'data-state': s
      } as LiveUpdatesBlockProps['viewAllProps'] : undefined} />
        </Frame>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:'The block has no state of its own; its links do. Lead story, every update and "View All Updates" forced\nto each state with `data-state` (Mobile frames). Link has no pressed state.',...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    }}>All breakpoints (Mobile first)</p>
      <CssTokens css={blockCss} aliases={BLOCK_ALIASES} />
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
          <CssTokens css={b.body} aliases={BLOCK_ALIASES} />
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Properties and tokens read from LiveUpdatesBlock.module.css, resolved for the active theme: shared rules, then each breakpoint range.",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <LiveUpdatesBlockInspect />
}`,...v.parameters?.docs?.source},description:{story:"Pick a breakpoint (frame width); see real measurements and the tokens that apply at that width.",...v.parameters?.docs?.description}}};const De=["Default","Breakpoints","CustomHeader","WithData","States","Tokens","Inspect"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Breakpoints:m,CustomHeader:u,Default:p,Inspect:v,States:f,Tokens:g,WithData:h,__namedExportsOrder:De,default:be},Symbol.toStringTag,{value:"Module"}));export{m as B,u as C,p as D,v as I,Ne as L,f as S,g as T,h as W};
