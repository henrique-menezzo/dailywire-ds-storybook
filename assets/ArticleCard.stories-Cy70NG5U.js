import{r as o,j as e}from"./iframe-BaE-r_tL.js";import{C as Y}from"./CssTokens-DoMUOAyj.js";import{I,C as X}from"./ComponentInspector-aQuGSI0z.js";import{a as ee}from"./ArticleHeading-BgCBkznm.js";import{V as ae}from"./index-DTA9Iiqt.js";import{S as L}from"./index-dPPx6LzB.js";import{b as te}from"./ArticleBlock-DA1qK7aW.js";import{d as re}from"./Badge-DXeWmLrm.js";const B=`/* ==============================================
 * ArticleCard — Daily Wire Design System
 * Figma: Article Card (8214:53996), section "Article" (8413:56868), page "↳ Content".
 * state default | hover | pressed | focused × size sm | md | lg × type default | upstream | exclusive
 * (36 variants), + Show Badge.
 * Nests ArticleBlock (ArticleHeading, ArticleMetadata › Byline / LabeledIconButton, IconButton) and Badge.
 * The image is a plain <img> (Figma: an image-filled rectangle).
 * Hover / pressed only change the title (ArticleHeading); focused rings the whole card.
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: image, then ArticleBlock. The title link is stretched over it (ArticleBlock linkArea="container"). ── */

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  /* Figma: 16px auto-layout gap with no variable bound */
  gap: var(--spacing-xl);
  min-width: 0;
}

/* ── Image (Figma "image 1294": fill width, 4px corners) ── */

.media {
  --ac-ratio: 16 / 9;

  position: relative;
  overflow: hidden;
  aspect-ratio: var(--ac-ratio);
  border-radius: var(--border-radius-sm);
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ── Types: default 16:9 (301 × 169), upstream and exclusive 4:3 (301 × 226) ── */

.card[data-variant='upstream'] .media,
.card[data-variant='exclusive'] .media {
  --ac-ratio: 4 / 3;
}

/* ── Badge: top-left over the image (Figma absolute, 16 / 16 with no variable bound) ── */

.badge {
  position: absolute;
  top: var(--spacing-xl);
  left: var(--spacing-xl);
}

/* ── Focused: ring around the whole card (Figma: card fill + 2 drop shadows) ──
 * Keyboard focus lands on the stretched title link; the ring moves from the title to the card.
 * [data-state='focus'] forces it for docs and QA. */

.card[data-state='focus'],
.card:has([data-stretched] > a:focus-visible) {
  border-radius: var(--border-radius-sm);
  background-color: var(--color-background-neutral-bold-default);
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

.card [data-stretched] > a:focus-visible {
  outline: none;
}
`,se="_card_h458x_14",ie="_media_h458x_25",ne="_image_h458x_34",oe="_badge_h458x_50",w={card:se,media:ie,image:ne,badge:oe},S=["default","upstream","exclusive"],A=["sm","md","lg"],le={sm:"xsm",md:"sm",lg:"md"},s=o.forwardRef(function({variant:t="default",size:r="sm",title:i,href:l,image:b,badge:n,showBadge:_=!0,badgeProps:j,metadata:P,showMetadata:N=!0,onMoreClick:O,moreLabel:H,moreButtonProps:q,showMore:V=!0,headingAs:G="h3",linkProps:$,"data-state":x,className:Z,...W},U){const K=_&&n!=null&&n!==!1&&n!=="",{alt:Q,...J}=b??{alt:""};return e.jsxs("article",{ref:U,className:[w.card,Z].filter(Boolean).join(" "),"data-variant":t,"data-size":r,"data-state":x,...W,children:[b&&e.jsxs("div",{className:w.media,children:[e.jsx("img",{...J,alt:Q,className:w.image}),K&&e.jsx(re,{variant:"brand",size:"md",weight:"regular",radius:"none",...j,className:[w.badge,j?.className].filter(Boolean).join(" "),children:n})]}),e.jsx(te,{size:le[r],tone:t==="exclusive"?"exclusive":"default",title:i,href:l,headingAs:G,linkProps:$,linkArea:"container",metadata:P,showMetadata:N,showDescription:!1,showMore:V,onMoreClick:O,moreLabel:H,moreButtonProps:q,"data-state":x==="hover"||x==="pressed"?x:void 0})]})});s.__docgenInfo={description:`An article teaser: image (with an optional badge), title, metadata row and a "more" action.
The whole card is one link (the title's, stretched); the "more" button and the metadata action sit above it.`,methods:[],displayName:"ArticleCard",props:{variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ARTICLE_CARD_VARIANTS)[number]"},description:"Figma `type`: image ratio, and a serif title for `exclusive`",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ARTICLE_CARD_SIZES)[number]"},description:"sm · md · lg: the title is 14 · 16 · 20 px",defaultValue:{value:"'sm'",computed:!1}},title:{required:!0,tsType:{name:"ReactNode"},description:"Article title"},href:{required:!1,tsType:{name:"string"},description:"Article URL. The title link is stretched over the whole card: the card is one link."},image:{required:!1,tsType:{name:"intersection",raw:`{ src: string; alt: string } & Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'className' | 'children'
>`,elements:[{name:"signature",type:"object",raw:"{ src: string; alt: string }",signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!0}}]}},{name:"Omit",elements:[{name:"ImgHTMLAttributes",elements:[{name:"HTMLImageElement"}],raw:"ImgHTMLAttributes<HTMLImageElement>"},{name:"union",raw:"'src' | 'alt' | 'className' | 'children'",elements:[{name:"literal",value:"'src'"},{name:"literal",value:"'alt'"},{name:"literal",value:"'className'"},{name:"literal",value:"'children'"}]}],raw:`Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'className' | 'children'
>`}]},description:"Top image. Use `alt: ''` when it only illustrates the title."},badge:{required:!1,tsType:{name:"ReactNode"},description:"Badge label over the image's top-left corner (Figma `Badge`: brand, md, regular, square)"},showBadge:{required:!1,tsType:{name:"boolean"},description:"Figma `Show Badge`",defaultValue:{value:"true",computed:!1}},badgeProps:{required:!1,tsType:{name:"Omit",elements:[{name:"BadgeProps"},{name:"literal",value:"'children'"}],raw:"Omit<BadgeProps, 'children'>"},description:"Extra `Badge` props (`variant`, `statusDot`, `leadingIcon`…)"},metadata:{required:!1,tsType:{name:"ArticleMetadataProps"},description:"The metadata row (`ArticleMetadata` props; type `article`, size `sm` by default)"},showMetadata:{required:!1,tsType:{name:"boolean"},description:"Shows the metadata row",defaultValue:{value:"true",computed:!1}},onMoreClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:'Called by the "more" (vertical dots) button. It sits above the card link and is not inside it.'},moreLabel:{required:!1,tsType:{name:"string"},description:'Accessible name of the "more" button'},moreButtonProps:{required:!1,tsType:{name:"ArticleBlockProps['moreButtonProps']",raw:"ArticleBlockProps['moreButtonProps']"},description:'Extra `IconButton` props for the "more" button'},showMore:{required:!1,tsType:{name:"boolean"},description:'Shows the "more" button (Figma ArticleBlock `Show dots`)',defaultValue:{value:"true",computed:!1}},headingAs:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ARTICLE_HEADING_ELEMENTS)[number]"},description:"Title element (default `h3`)",defaultValue:{value:"'h3'",computed:!1}},linkProps:{required:!1,tsType:{name:"ArticleHeadingProps['linkProps']",raw:"ArticleHeadingProps['linkProps']"},description:"Extra attributes for the title `<a>` (`target`, `rel`, `onClick`, `aria-*`…)"},"data-state":{required:!1,tsType:{name:"union",raw:"'hover' | 'pressed' | 'focus'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focus'"}]},description:"Forces a state for docs / QA. Real hover, press and focus come from the card's link."}},composes:["Omit"]};const{fn:de}=__STORYBOOK_MODULE_TEST__,y={sm:"Mamdani blasts ‘white supremacy’ protest before calling ISIS-style attack ‘terrorism’",md:"FBI Alert Warns Iran May Eye Drone Attack On American Soil",lg:"FBI Alert Warns Iran May Eye Drone Attack On American Soil"},F="Label Text",k={author:"Jennie Taer",readTime:"5 min",publishDate:"1 day ago",showEpisodeNumber:!1},R={src:ae,alt:""},E=301,ce=a=>e.jsx("div",{style:{width:E},children:e.jsx(a,{})}),me={component:s,title:"Components/ArticleCard",parameters:{layout:"centered"},argTypes:{variant:{control:"inline-radio",options:[...S]},size:{control:"inline-radio",options:[...A]},headingAs:{control:"select",options:[...ee]},title:{control:"text"},href:{control:"text"},image:{control:"object"},badge:{control:"text"},showBadge:{control:"boolean"},metadata:{control:"object"},showMetadata:{control:"boolean"},showMore:{control:"boolean"},moreLabel:{control:"text"}},args:{variant:"default",size:"sm",headingAs:"h3",title:y.sm,href:"#",image:R,badge:F,showBadge:!0,metadata:k,showMetadata:!0,showMore:!0,onMoreClick:de(),moreLabel:"More options"}},d={decorators:[ce]},C={display:"grid",gridTemplateColumns:`repeat(3, ${E}px)`,gap:32,alignItems:"start"},c={render:a=>e.jsx("div",{style:C,children:S.map(t=>e.jsx(s,{...a,variant:t},t))})},m={render:a=>e.jsx("div",{style:C,children:A.map(t=>e.jsx(s,{...a,size:t,title:y[t]},t))})},p={render:a=>e.jsxs("div",{style:C,children:[e.jsx(s,{...a,showBadge:!1}),e.jsx(s,{...a,showMore:!1}),e.jsx(s,{...a,showMetadata:!1})]})},u={parameters:{layout:"padded"},render:a=>e.jsxs("ul",{style:{...C,listStyle:"none",margin:0,padding:0},children:[e.jsx("li",{children:e.jsx(s,{...a,size:"lg",title:"Oil Prices Plummet, Stocks Climb After Trump Update On Iran War",image:{src:L["Missile launch"],alt:""},badge:"Live",badgeProps:{statusDot:!0},metadata:{...k,publishDate:new Date("2026-11-05T14:30:00Z"),readTime:4}})}),e.jsx("li",{children:e.jsx(s,{...a,size:"lg",variant:"exclusive",title:y.lg,badge:"Exclusive"})}),e.jsx("li",{children:e.jsx(s,{...a,size:"lg",variant:"upstream",title:"Mamdani blasts ‘white supremacy’ protest before calling ISIS-style attack ‘terrorism’",image:{src:L["Stamps collage"],alt:""},showBadge:!1})})]})},T=["default","hover","pressed","focus"],M=a=>a==="default"?{}:{"data-state":a},D=a=>({display:"grid",gridTemplateColumns:`auto repeat(${a}, ${E}px)`,gap:"32px 32px",padding:24,alignItems:"start",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"}),g={parameters:{layout:"fullscreen"},render:a=>e.jsxs("div",{style:D(T.length),children:[e.jsx("div",{}),T.map(t=>e.jsx("div",{style:{textTransform:"capitalize"},children:t==="focus"?"focused":t},t)),S.map(t=>e.jsxs(o.Fragment,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:t}),T.map(r=>e.jsx(s,{...a,variant:t,title:y[a.size??"sm"],...M(r)},r))]},t))]})},f={parameters:{layout:"fullscreen"},render:a=>e.jsxs("div",{style:D(A.length),children:[e.jsx("div",{}),A.map(t=>e.jsx("div",{children:t},t)),T.flatMap(t=>S.map(r=>e.jsxs(o.Fragment,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${t==="focus"?"focused":t} · ${r}`}),A.map(i=>e.jsx(s,{...a,variant:r,size:i,title:y[i],...M(t)},i))]},`${t}-${r}`)))]})},z={"--ac-ratio":"image aspect-ratio"},h={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(Y,{css:B,aliases:z})},pe=["on","off"];function ue(){const[a,t]=o.useState("default"),[r,i]=o.useState("default"),[l,b]=o.useState("sm"),[n,_]=o.useState("on");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(I,{label:"Type",options:S,value:a,onChange:t}),e.jsx(I,{label:"State",options:T,value:r,onChange:i}),e.jsx(I,{label:"Size",options:A,value:l,onChange:b}),e.jsx(I,{label:"Badge",options:pe,value:n,onChange:_}),e.jsx(X,{css:B,aliases:z,group:a,state:r,size:l,scale:1,children:e.jsx(s,{variant:a,size:l,title:y[l],href:"#",image:R,badge:F,showBadge:n==="on",metadata:k,style:{width:E},...M(r)})})]})}const v={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(ue,{})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame]
}`,...d.parameters?.docs?.source},description:{story:"Hover, press or tab to the card: it is one link (the title's). The dots button is separate.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={rowStyle}>
      {ARTICLE_CARD_VARIANTS.map(variant => <ArticleCard key={variant} {...args} variant={variant} />)}
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Figma `type`: `default` has a 16:9 image; `upstream` a 4:3 image; `exclusive` a 4:3 image and a serif title.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={rowStyle}>
      {ARTICLE_CARD_SIZES.map(size => <ArticleCard key={size} {...args} size={size} title={FIGMA_TITLES[size]} />)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"sm · md · lg nest ArticleBlock xsm · sm · md: 14 · 16 · 20 px titles.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={rowStyle}>
      <ArticleCard {...args} showBadge={false} />
      <ArticleCard {...args} showMore={false} />
      <ArticleCard {...args} showMetadata={false} />
    </div>
}`,...p.parameters?.docs?.source},description:{story:'Figma `Show Badge` off, the "more" button off, and the metadata row off.',...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <ul style={{
    ...rowStyle,
    listStyle: 'none',
    margin: 0,
    padding: 0
  }}>
      <li>
        <ArticleCard {...args} size="lg" title="Oil Prices Plummet, Stocks Climb After Trump Update On Iran War" image={{
        src: SLIDE_IMAGES['Missile launch'],
        alt: ''
      }} badge="Live" badgeProps={{
        statusDot: true
      }} metadata={{
        ...FIGMA_METADATA,
        publishDate: new Date('2026-11-05T14:30:00Z'),
        readTime: 4
      }} />
      </li>
      <li>
        <ArticleCard {...args} size="lg" variant="exclusive" title={FIGMA_TITLES.lg} badge="Exclusive" />
      </li>
      <li>
        <ArticleCard {...args} size="lg" variant="upstream" title="Mamdani blasts ‘white supremacy’ protest before calling ISIS-style attack ‘terrorism’" image={{
        src: SLIDE_IMAGES['Stamps collage'],
        alt: ''
      }} showBadge={false} />
      </li>
    </ul>
}`,...u.parameters?.docs?.source},description:{story:"A three-up feed row with real data: a `Date`, a numeric read time and a status-dot badge.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={gridStyle(STATES.length)}>
      <div />
      {STATES.map(s => <div key={s} style={{
      textTransform: 'capitalize'
    }}>{s === 'focus' ? 'focused' : s}</div>)}
      {ARTICLE_CARD_VARIANTS.map(variant => <Fragment key={variant}>
          <div style={{
        textTransform: 'capitalize'
      }}>{variant}</div>
          {STATES.map(s => <ArticleCard key={s} {...args} variant={variant} title={FIGMA_TITLES[args.size ?? 'sm']} {...stateProps(s)} />)}
        </Fragment>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Every type in every Figma state, at the size picked in Controls. Hover, pressed and focused are forced with `data-state`.",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={gridStyle(ARTICLE_CARD_SIZES.length)}>
      <div />
      {ARTICLE_CARD_SIZES.map(size => <div key={size}>{size}</div>)}
      {STATES.flatMap(s => ARTICLE_CARD_VARIANTS.map(variant => <Fragment key={\`\${s}-\${variant}\`}>
            <div style={{
        textTransform: 'capitalize'
      }}>{\`\${s === 'focus' ? 'focused' : s} · \${variant}\`}</div>
            {ARTICLE_CARD_SIZES.map(size => <ArticleCard key={size} {...args} variant={variant} size={size} title={FIGMA_TITLES[size]} {...stateProps(s)} />)}
          </Fragment>))}
    </div>
}`,...f.parameters?.docs?.source},description:{story:"The full Figma set (36 variants): state × type rows, size columns.",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={articleCardCss} aliases={ARTICLE_CARD_ALIASES} />
}`,...h.parameters?.docs?.source},description:{story:"Properties and tokens read from ArticleCard.module.css, resolved for the active theme. The text block uses ArticleBlock tokens.",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ArticleCardInspect />
}`,...v.parameters?.docs?.source},description:{story:"Pick type, state, size and badge; see real measurements and the tokens that apply. Hover a token to locate it.",...v.parameters?.docs?.description}}};const ge=["Default","Variants","Sizes","ShowToggles","Feed","States","FigmaMatrix","Tokens","Inspect"],xe=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Feed:u,FigmaMatrix:f,Inspect:v,ShowToggles:p,Sizes:m,States:g,Tokens:h,Variants:c,__namedExportsOrder:ge,default:me},Symbol.toStringTag,{value:"Module"}));export{xe as A,d as D,u as F,v as I,m as S,h as T,c as V,p as a,g as b,f as c};
