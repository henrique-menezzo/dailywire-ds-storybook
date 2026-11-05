import{j as e,r as g}from"./iframe-BaE-r_tL.js";import{H as j}from"./index-DO2tlVwn.js";import{S as v}from"./ShowcaseBox-CvpXiMzv.js";import{C}from"./CssTokens-DoMUOAyj.js";import{I as y,C as D}from"./ComponentInspector-aQuGSI0z.js";import{A as f,a as T,b as s}from"./ArticleMetadata-Wi7f2L0h.js";const w=`/* ==============================================
 * ArticleMetadata — Daily Wire Design System
 * Figma: Metadata (8210:45735), doc frame 8413:61610, section "Article" (8413:56868).
 * Libeled Icon Button On | Off × Type Default | Inverted | Article | Feed × size sm | md (16 variants),
 * + Show ReadTime / Show Author / Show Ep Number / Show Publish Date.
 * Nests LabeledIconButton (Figma "Libeled Icon Button") and Byline (secondary, no avatar).
 * Type only changes the order of the items (set in ArticleMetadata.tsx); colors are the same in every type.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Row (text style label/400/sm · md, gap spacing-sm, items centered) ── */

.metadata {
  --meta-text: var(--color-text-neutral-subtlest-default);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: var(--default), sans-serif;
  font-weight: var(--Regular);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--meta-text);
}

/* ── Sizes ───────────────────────────────────── */

.metadata[data-size='sm'] {
  font-size: var(--font-size-xs);
}

.metadata[data-size='md'] {
  font-size: var(--font-size-sm);
}

/* ── Items and bullet separators ─────────────── */

.item,
.byline {
  white-space: nowrap;
}

.separator {
  flex-shrink: 0;
}

/* Interactive children stay clickable above a stretched card link (ArticleHeading \`stretched\`).
 * Both roots are already position: relative; a static byline stays under it, so the card link gets its clicks. */
.action,
.byline:not([data-static]) {
  z-index: 1;
}

/* ── Feed: a date that leads the row (no action) is emphasized: label/500, neutral-bold ── */

.metadata[data-variant='feed'] .date[data-leading] {
  font-weight: var(--Medium);
  color: var(--color-text-neutral-bold-default);
}

/* ── Action (LabeledIconButton is label/600/sm; md rows use label/600/md) ── */

.metadata[data-size='md'] .action {
  font-size: var(--font-size-sm);
}
`,{fn:k}=__STORYBOOK_MODULE_TEST__,b={icon:"player-play-filled",label:"Listen",onClick:k()},M={author:"Author",publishDate:"1 day ago",readTime:"5 min",episodeNumber:"Ep. 50"},N=557,R={component:s,title:"Components/ArticleMetadata",parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:[...T]},size:{control:"inline-radio",options:[...f]},action:{control:"object"},author:{control:"text"},authorHref:{control:"text"},publishDate:{control:"text"},dateTime:{control:"text"},readTime:{control:"text"},episodeNumber:{control:"text"},showAuthor:{control:"boolean"},showPublishDate:{control:"boolean"},showReadTime:{control:"boolean"},showEpisodeNumber:{control:"boolean"}},args:{variant:"feed",size:"sm",action:b,...M,showAuthor:!0,showPublishDate:!0,showReadTime:!0,showEpisodeNumber:!0}},h={},n={render:t=>e.jsx(v,{direction:"column",style:{alignItems:"flex-start",gap:20},children:T.flatMap(a=>[e.jsx(s,{...t,variant:a},`${a}-on`),e.jsx(s,{...t,variant:a,action:void 0},`${a}-off`)])})},o={render:t=>e.jsx(v,{direction:"column",style:{alignItems:"flex-start",gap:20},children:f.flatMap(a=>[e.jsx(s,{...t,size:a},`${a}-on`),e.jsx(s,{...t,size:a,action:void 0},`${a}-off`)])})},i={args:{action:void 0}},l={render:t=>e.jsxs(v,{direction:"column",style:{alignItems:"flex-start",gap:20},children:[e.jsx(s,{...t,variant:"article",action:void 0,showEpisodeNumber:!1}),e.jsx(s,{...t,variant:"article",action:void 0,showEpisodeNumber:!1,showReadTime:!1}),e.jsx(s,{...t,variant:"feed",showAuthor:!1,showEpisodeNumber:!1})]})},c={args:{variant:"article",action:void 0,author:"Ben Shapiro",authorHref:"#",bylineProps:{showAvatar:!0,avatar:{type:"host",src:j["Ben Shapiro"]}},publishDate:new Date("2026-11-05T14:30:00Z"),readTime:6,episodeNumber:2381}},B=["default","hover","pressed","focus","disabled"],$=["default","hover","focus","disabled"],S=t=>["hover","pressed","focus"].includes(t)?{"data-state":t}:{},E={display:"grid",gridTemplateColumns:"auto 1fr",gap:"20px 24px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},d={parameters:{layout:"fullscreen"},render:t=>e.jsxs("div",{style:E,children:[B.map(a=>e.jsx(I,{label:`action · ${a}`,children:e.jsx(s,{...t,action:{...b,disabled:a==="disabled",...S(a)}})},`action-${a}`)),$.map(a=>e.jsx(I,{label:`author link · ${a}`,children:e.jsx(s,{...t,authorHref:"#",bylineProps:{disabled:a==="disabled",...S(a)}})},`author-${a}`))]})};function I({label:t,children:a}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:t}),a]})}const p={parameters:{layout:"fullscreen"},render:t=>e.jsxs("div",{style:{...E,gridTemplateColumns:`auto repeat(2, ${N}px)`},children:[e.jsx("div",{}),f.map(a=>e.jsx("div",{children:a},a)),T.flatMap(a=>[!0,!1].map(r=>e.jsxs(g.Fragment,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${a} · action ${r?"on":"off"}`}),f.map(A=>e.jsx(s,{...t,variant:a,size:A,action:r?b:void 0},A))]},`${a}-${r}`)))]})},_={"--meta-text":"color"},m={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(C,{css:w,aliases:_})},F=["on","off"];function L(){const[t,a]=g.useState("feed"),[r,A]=g.useState("sm"),[x,z]=g.useState("off");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(y,{label:"Type",options:T,value:t,onChange:a}),e.jsx(y,{label:"Size",options:f,value:r,onChange:A}),e.jsx(y,{label:"Action",options:F,value:x,onChange:z}),e.jsx(D,{css:w,aliases:_,group:t,state:"default",size:r,scale:1,children:e.jsx(s,{...M,variant:t,size:r,action:x==="on"?b:void 0})})]})}const u={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(L,{})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'flex-start',
    gap: 20
  }}>
      {ARTICLE_METADATA_VARIANTS.flatMap(variant => [<ArticleMetadata key={\`\${variant}-on\`} {...args} variant={variant} />, <ArticleMetadata key={\`\${variant}-off\`} {...args} variant={variant} action={undefined} />])}
    </ShowcaseBox>
}`,...n.parameters?.docs?.source},description:{story:"Figma `Type` sets the order of the items; colors do not change.\nIn `feed` without an action the date leads the row and is emphasized (label/500, neutral-bold).",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'flex-start',
    gap: 20
  }}>
      {ARTICLE_METADATA_SIZES.flatMap(size => [<ArticleMetadata key={\`\${size}-on\`} {...args} size={size} />, <ArticleMetadata key={\`\${size}-off\`} {...args} size={size} action={undefined} />])}
    </ShowcaseBox>
}`,...o.parameters?.docs?.source},description:{story:"sm = 12px items and label, md = 14px. The action circle stays 32px.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    action: undefined
  }
}`,...i.parameters?.docs?.source},description:{story:"Figma `Libeled Icon Button` Off: omit `action`.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'flex-start',
    gap: 20
  }}>
      <ArticleMetadata {...args} variant="article" action={undefined} showEpisodeNumber={false} />
      <ArticleMetadata {...args} variant="article" action={undefined} showEpisodeNumber={false} showReadTime={false} />
      <ArticleMetadata {...args} variant="feed" showAuthor={false} showEpisodeNumber={false} />
    </ShowcaseBox>
}`,...l.parameters?.docs?.source},description:{story:"The `show*` flags (Figma booleans) hide single items; separators follow the visible ones.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'article',
    action: undefined,
    author: 'Ben Shapiro',
    authorHref: '#',
    bylineProps: {
      showAvatar: true,
      avatar: {
        type: 'host',
        src: HOST_IMAGES['Ben Shapiro']
      }
    },
    publishDate: new Date('2026-11-05T14:30:00Z'),
    readTime: 6,
    episodeNumber: 2381
  }
}`,...c.parameters?.docs?.source},description:{story:'Real data: a `Date` fills `<time dateTime>` (ISO) and is formatted ("Nov 5, 2026"); numbers become "6 min" and "Ep. 2381".',...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={gridStyle}>
      {ACTION_STATES.map(s => <Row key={\`action-\${s}\`} label={\`action · \${s}\`}>
          <ArticleMetadata {...args} action={{
        ...FIGMA_ACTION,
        disabled: s === 'disabled',
        ...forced(s)
      }} />
        </Row>)}
      {BYLINE_STATES.map(s => <Row key={\`author-\${s}\`} label={\`author link · \${s}\`}>
          <ArticleMetadata {...args} authorHref="#" bylineProps={{
        disabled: s === 'disabled',
        ...forced(s)
      }} />
        </Row>)}
    </div>
}`,...d.parameters?.docs?.source},description:{story:"The row has no state of its own: its interactive children do. Action (LabeledIconButton) and author link\n(Byline with `authorHref`) in every Figma state, forced with `data-state`.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...gridStyle,
    gridTemplateColumns: \`auto repeat(2, \${FIGMA_WIDTH}px)\`
  }}>
      <div />
      {ARTICLE_METADATA_SIZES.map(size => <div key={size}>{size}</div>)}
      {ARTICLE_METADATA_VARIANTS.flatMap(variant => [true, false].map(on => <Fragment key={\`\${variant}-\${on}\`}>
            <div style={{
        textTransform: 'capitalize'
      }}>{\`\${variant} · action \${on ? 'on' : 'off'}\`}</div>
            {ARTICLE_METADATA_SIZES.map(size => <ArticleMetadata key={size} {...args} variant={variant} size={size} action={on ? FIGMA_ACTION : undefined} />)}
          </Fragment>))}
    </div>
}`,...p.parameters?.docs?.source},description:{story:"The full Figma set (16 variants): Type × Libeled Icon Button rows, size columns.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={articleMetadataCss} aliases={ARTICLE_METADATA_ALIASES} />
}`,...m.parameters?.docs?.source},description:{story:"Properties and tokens read from ArticleMetadata.module.css, resolved for the active theme. The action and author link use LabeledIconButton and Byline tokens.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ArticleMetadataInspect />
}`,...u.parameters?.docs?.source},description:{story:"Pick type, size and action; see real measurements and the tokens that apply. Hover a token to locate it.",...u.parameters?.docs?.description}}};const O=["Default","Variants","Sizes","WithoutAction","ShowToggles","WithData","States","FigmaMatrix","Tokens","Inspect"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:h,FigmaMatrix:p,Inspect:u,ShowToggles:l,Sizes:o,States:d,Tokens:m,Variants:n,WithData:c,WithoutAction:i,__namedExportsOrder:O,default:R},Symbol.toStringTag,{value:"Module"}));export{Y as A,h as D,p as F,u as I,o as S,m as T,n as V,i as W,l as a,c as b,d as c};
