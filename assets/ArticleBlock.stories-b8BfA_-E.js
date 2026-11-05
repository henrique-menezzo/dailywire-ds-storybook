import{j as e,r as v}from"./iframe-BaE-r_tL.js";import{S as k}from"./ShowcaseBox-CvpXiMzv.js";import{C}from"./CssTokens-DoMUOAyj.js";import{I as x,C as E}from"./ComponentInspector-aQuGSI0z.js";import{a as _,b as B}from"./ArticleHeading-BgCBkznm.js";import{A as M,a as b,b as s}from"./ArticleBlock-DA1qK7aW.js";const y=`/* ==============================================
 * ArticleBlock — Daily Wire Design System
 * Figma: ArticleBlock (8214:53232), section "Article" (8413:56868), page "↳ Content".
 * size xl | lg | md | sm | xsm × state default | hovered | pressed (15 variants),
 * + Show Heading title / Show dots / Show Description / Show Metadata.
 * Nests ArticleHeading (title + hover / pressed colors), IconButton (dots-vertical) and ArticleMetadata.
 * The block has no colors of its own in any state: hovered / pressed only change the title (ArticleHeading).
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: Headline, then Metadata ───────────── */

.block {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ab-gap);
  min-width: 0;
}

/* The title link covers the nearest positioned ancestor instead (an ArticleCard) */
.block[data-link-area='container'] {
  position: static;
}

/* ── Headline: title row, then description ───── */

.headline {
  display: flex;
  flex-direction: column;
  gap: var(--ab-headline-gap);
  min-width: 0;
}

.titleRow {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  min-width: 0;
}

.title {
  flex: 1 1 auto;
  min-width: 0;
}

/* The "more" button sits above the stretched title link (IconButton is already position: relative) */
.more {
  z-index: 1;
}

/* ── Description (body/400/sm; body/400/md on xl) ── */

.description {
  margin: 0;
  font-family: var(--default), sans-serif;
  font-size: var(--ab-description-size);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-subtlest-default);
  text-wrap: pretty;
  overflow-wrap: break-word;
}

/* ── Sizes ─────────────────────────────────────
 * --ab-gap: Headline ↔ Metadata · --ab-headline-gap: title row ↔ description
 * --ab-description-size: body/400/md on xl, body/400/sm otherwise */

.block[data-size='xl'] {
  --ab-gap: var(--spacing-3xl);
  --ab-headline-gap: var(--spacing-xl);
  --ab-description-size: var(--font-size-md);
}

.block[data-size='lg'] {
  --ab-gap: var(--spacing-3xl);
  --ab-headline-gap: var(--spacing-xl);
  --ab-description-size: var(--font-size-sm);
}

.block[data-size='md'] {
  --ab-gap: var(--spacing-lg);
  --ab-headline-gap: var(--spacing-xl);
  --ab-description-size: var(--font-size-sm);
}

.block[data-size='sm'] {
  --ab-gap: var(--spacing-lg);
  --ab-headline-gap: var(--spacing-xl);
  --ab-description-size: var(--font-size-sm);
}

.block[data-size='xsm'] {
  --ab-gap: var(--spacing-sm);
  --ab-headline-gap: var(--spacing-sm);
  --ab-description-size: var(--font-size-sm);
}
`,{fn:S}=__STORYBOOK_MODULE_TEST__,w="FBI Alert Warns Iran May Eye Drone Attack On American Soil",A="The FBI recently warned California authorities that Iran was potentially plotting “a surprise attack using unmanned aerial vehicles” targeting the West Coast in retaliation for a U.S. strike on the Iranian regime.",r=a=>({author:"Jennie Taer",publishDate:"1 day ago",readTime:"5 min",showEpisodeNumber:!1,action:a==="xl"||a==="lg"?{icon:"player-play-filled",label:"Listen",onClick:S()}:void 0}),L=662,h=a=>e.jsx("div",{style:{width:L,maxWidth:"100%"},children:e.jsx(a,{})}),j={component:s,title:"Components/ArticleBlock",parameters:{layout:"centered"},argTypes:{size:{control:"select",options:[...b]},tone:{control:"inline-radio",options:[...B]},headingAs:{control:"select",options:[..._]},linkArea:{control:"inline-radio",options:[...M]},title:{control:"text"},href:{control:"text"},description:{control:"text"},metadata:{control:"object"},moreLabel:{control:"text"},showHeading:{control:"boolean"},showDescription:{control:"boolean"},showMetadata:{control:"boolean"},showMore:{control:"boolean"}},args:{size:"xl",tone:"default",headingAs:"h3",linkArea:"block",title:w,href:"#",description:A,metadata:r("xl"),onMoreClick:S(),moreLabel:"More options",showHeading:!0,showDescription:!0,showMetadata:!0,showMore:!0}},o={decorators:[h]},i={decorators:[h],render:a=>e.jsx(k,{direction:"column",style:{alignItems:"stretch",gap:48},children:[...b].reverse().map(t=>e.jsx(s,{...a,size:t,metadata:r(t)},t))})},l={decorators:[h],args:{size:"md",metadata:r("md")},render:a=>e.jsxs(k,{direction:"column",style:{alignItems:"stretch",gap:40},children:[e.jsx(s,{...a,showMore:!1}),e.jsx(s,{...a,showDescription:!1}),e.jsx(s,{...a,showMetadata:!1}),e.jsx(s,{...a,showHeading:!1})]})},c={decorators:[h],args:{size:"lg",tone:"exclusive",metadata:r("lg")}},d={decorators:[h],args:{href:void 0,size:"md",metadata:r("md")}},p={args:{size:"sm",linkArea:"container",showDescription:!1,metadata:r("sm")},render:a=>e.jsxs("article",{style:{position:"relative",display:"grid",gap:"var(--spacing-xl)",width:301,padding:"var(--spacing-xl)",borderRadius:"var(--border-radius-sm)",border:"var(--border-default) dashed var(--color-border-neutral-subtle-default)"},children:[e.jsx("div",{style:{aspectRatio:"16 / 9",borderRadius:"var(--border-radius-sm)",background:"var(--color-background-neutral-subtle-default)"}}),e.jsx(s,{...a})]})},f=["default","hover","pressed","focus"],z=a=>a==="default"?{}:{"data-state":a},D=440,m={parameters:{layout:"fullscreen"},render:a=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${f.length}, ${D}px)`,gap:"40px 32px",padding:24,alignItems:"start",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},children:[e.jsx("div",{}),f.map(t=>e.jsx("div",{style:{textTransform:"capitalize"},children:t},t)),[...b].reverse().map(t=>e.jsxs(v.Fragment,{children:[e.jsx("div",{children:t}),f.map(n=>e.jsx(s,{...a,size:t,metadata:r(t),...z(n)},n))]},t))]})},T={"--ab-gap":"gap","--ab-headline-gap":"headline gap","--ab-description-size":"description font-size"},g={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(C,{css:y,aliases:T})};function R(){const[a,t]=v.useState("xl"),[n,I]=v.useState("default");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(x,{label:"Size",options:b,value:a,onChange:t}),e.jsx(x,{label:"State",options:f,value:n,onChange:I}),e.jsx(E,{css:y,aliases:T,group:"default",state:n,size:a,scale:1,children:e.jsx(s,{title:w,href:"#",description:A,metadata:r(a),size:a,style:{width:420},...z(n)})})]})}const u={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(R,{})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame]
}`,...o.parameters?.docs?.source},description:{story:"Hover or press anywhere on the block: the title is the block's one link. The dots and Listen buttons are separate.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame],
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'stretch',
    gap: 48
  }}>
      {[...ARTICLE_BLOCK_SIZES].reverse().map(size => <ArticleBlock key={size} {...args} size={size} metadata={figmaMetadata(size)} />)}
    </ShowcaseBox>
}`,...i.parameters?.docs?.source},description:{story:'xl 32 · lg 24 (semibold titles) and md 20 · sm 16 · xsm 14 (medium titles). Gaps, the description size and the\n"more" button follow the size; the metadata row is Figma type `default` on xl / lg and `article` below.',...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame],
  args: {
    size: 'md',
    metadata: figmaMetadata('md')
  },
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'stretch',
    gap: 40
  }}>
      <ArticleBlock {...args} showMore={false} />
      <ArticleBlock {...args} showDescription={false} />
      <ArticleBlock {...args} showMetadata={false} />
      <ArticleBlock {...args} showHeading={false} />
    </ShowcaseBox>
}`,...l.parameters?.docs?.source},description:{story:"The Figma booleans: `showHeading` (title row with the dots), `showMore` (dots), `showDescription`, `showMetadata`.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame],
  args: {
    size: 'lg',
    tone: 'exclusive',
    metadata: figmaMetadata('lg')
  }
}`,...c.parameters?.docs?.source},description:{story:'`tone="exclusive"` gives the title the serif `…/exclusive` text style (used by exclusive ArticleCards).',...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame],
  args: {
    href: undefined,
    size: 'md',
    metadata: figmaMetadata('md')
  }
}`,...d.parameters?.docs?.source},description:{story:"Without `href` the block is static text: no link, no hover.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    linkArea: 'container',
    showDescription: false,
    metadata: figmaMetadata('sm')
  },
  render: args => <article style={{
    position: 'relative',
    display: 'grid',
    gap: 'var(--spacing-xl)',
    width: 301,
    padding: 'var(--spacing-xl)',
    borderRadius: 'var(--border-radius-sm)',
    border: 'var(--border-default) dashed var(--color-border-neutral-subtle-default)'
  }}>
      <div style={{
      aspectRatio: '16 / 9',
      borderRadius: 'var(--border-radius-sm)',
      background: 'var(--color-background-neutral-subtle-default)'
    }} />
      <ArticleBlock {...args} />
    </article>
}`,...p.parameters?.docs?.source},description:{story:'`linkArea="container"`: the title link covers the nearest positioned ancestor instead of the block, so a card\nthat also holds an image is one link. This is how `ArticleCard` nests the block.',...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: \`auto repeat(\${STATES.length}, \${COLUMN_WIDTH}px)\`,
    gap: '40px 32px',
    padding: 24,
    alignItems: 'start',
    fontSize: 12,
    color: 'var(--color-text-neutral-subtlest-default)'
  }}>
      <div />
      {STATES.map(s => <div key={s} style={{
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {[...ARTICLE_BLOCK_SIZES].reverse().map(size => <Fragment key={size}>
          <div>{size}</div>
          {STATES.map(s => <ArticleBlock key={s} {...args} size={size} metadata={figmaMetadata(size)} {...stateProps(s)} />)}
        </Fragment>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"The full Figma set (15 variants: size × state) plus keyboard focus (the title link's ring).\nHover, pressed and focus are forced with `data-state`.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={articleBlockCss} aliases={ARTICLE_BLOCK_ALIASES} />
}`,...g.parameters?.docs?.source},description:{story:"Properties and tokens read from ArticleBlock.module.css, resolved for the active theme. Title colors are ArticleHeading's.",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ArticleBlockInspect />
}`,...u.parameters?.docs?.source},description:{story:"Pick size and state; see real measurements and the tokens that apply. Hover a token to locate it.",...u.parameters?.docs?.description}}};const H=["Default","Sizes","ShowToggles","Exclusive","WithoutLink","LinkAreaContainer","States","Tokens","Inspect"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Exclusive:c,Inspect:u,LinkAreaContainer:p,ShowToggles:l,Sizes:i,States:m,Tokens:g,WithoutLink:d,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{P as A,o as D,c as E,u as I,p as L,i as S,g as T,d as W,l as a,m as b};
