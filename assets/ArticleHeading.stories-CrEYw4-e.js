import{j as e,r as A}from"./iframe-BaE-r_tL.js";import{S as T}from"./ShowcaseBox-CvpXiMzv.js";import{C as G}from"./CssTokens-DoMUOAyj.js";import{I as E,C as L}from"./ComponentInspector-aQuGSI0z.js";import{a as z}from"./ArticleHeading.module-Ca3flQOu.js";import{A as i,a as N,b as f,c as I,d as n}from"./ArticleHeading-BgCBkznm.js";const w="Oil Prices Plummet, Stocks Climb After Trump Update On Iran War",D=415,S=r=>e.jsx("div",{style:{width:D},children:e.jsx(r,{})}),k={component:n,title:"Components/ArticleHeading",parameters:{layout:"centered"},argTypes:{size:{control:"select",options:[...i]},weight:{control:"inline-radio",options:[...I]},tone:{control:"inline-radio",options:[...f]},as:{control:"select",options:[...N]},href:{control:"text"},stretched:{control:"boolean"},children:{control:"text"}},args:{size:"xl",weight:"semibold",tone:"default",as:"h3",href:"#",stretched:!1,children:w}},x={decorators:[S]},c={decorators:[S],render:r=>e.jsx(T,{direction:"column",style:{alignItems:"stretch",gap:24},children:f.map(s=>e.jsx(n,{...r,tone:s},s))})},d={decorators:[S],render:r=>e.jsx(T,{direction:"column",style:{alignItems:"stretch",gap:24},children:[...i].reverse().map(s=>e.jsx(n,{...r,size:s},s))})},v={decorators:[S],render:r=>e.jsx(T,{direction:"column",style:{alignItems:"stretch",gap:24},children:f.flatMap(s=>I.map(t=>e.jsx(n,{...r,size:"lg",tone:s,weight:t},`${s}-${t}`)))})},l={decorators:[S],args:{href:void 0}},p={parameters:{layout:"padded"},args:{size:"md",stretched:!0},decorators:[S],render:r=>e.jsxs("article",{style:{position:"relative",display:"grid",gap:"var(--spacing-md)",padding:"var(--spacing-xl)",borderRadius:"var(--border-radius-md)",border:"var(--border-default) solid var(--color-border-neutral-subtle-default)"},children:[e.jsx(n,{...r}),e.jsx("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-text-neutral-subtlest-default)"},children:"Hover anywhere on the card"})]})},y=["default","hover","pressed","focus"],_=r=>r==="default"?{}:{"data-state":r};function j({children:r}){return e.jsx(e.Fragment,{children:r})}const C=(r,s)=>({display:"grid",gridTemplateColumns:`auto repeat(${r}, ${s}px)`,gap:"24px 24px",padding:24,alignItems:"start",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"}),m={parameters:{layout:"fullscreen"},argTypes:{size:{control:"inline-radio",options:[...i]}},args:{size:"md"},render:({size:r,children:s})=>e.jsxs("div",{style:C(y.length,260),children:[e.jsx("div",{}),y.map(t=>e.jsx("div",{style:{textTransform:"capitalize"},children:t},t)),f.flatMap(t=>I.map(a=>e.jsxs(j,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${t} · ${a}`}),y.map(o=>e.jsx(n,{href:"#",size:r,tone:t,weight:a,..._(o),children:s},o))]},`${t}-${a}`)))]})},g={parameters:{layout:"fullscreen"},render:({children:r})=>e.jsxs("div",{style:C(i.length,220),children:[e.jsx("div",{}),[...i].reverse().map(s=>e.jsx("div",{children:s},s)),y.flatMap(s=>f.flatMap(t=>I.map(a=>e.jsxs(j,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${s} · ${t} · ${a}`}),[...i].reverse().map(o=>e.jsx(n,{href:"#",size:o,tone:t,weight:a,..._(s),children:r},o))]},`${s}-${t}-${a}`))))]})},b={"--ah-text":"color","--ah-weight":"font-weight"},u={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(G,{css:z,aliases:b})};function F(){const[r,s]=A.useState("default"),[t,a]=A.useState("default"),[o,R]=A.useState("md"),[H,$]=A.useState("semibold");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(E,{label:"Tone",options:f,value:r,onChange:s}),e.jsx(E,{label:"State",options:y,value:t,onChange:a}),e.jsx(E,{label:"Size",options:i,value:o,onChange:R}),e.jsx(E,{label:"Weight",options:I,value:H,onChange:$}),e.jsx(L,{css:z,aliases:b,group:r,state:t,size:o,scale:1,children:e.jsx(n,{href:"#",tone:r,size:o,weight:H,style:{width:320},..._(t),children:w})})]})}const h={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(F,{})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame]
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame],
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'stretch',
    gap: 24
  }}>
      {ARTICLE_HEADING_TONES.map(tone => <ArticleHeading key={tone} {...args} tone={tone} />)}
    </ShowcaseBox>
}`,...c.parameters?.docs?.source},description:{story:"Figma `tone`: `exclusive` swaps to the serif `--exclusive` family with `--letter-spacing-tight`.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame],
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'stretch',
    gap: 24
  }}>
      {[...ARTICLE_HEADING_SIZES].reverse().map(size => <ArticleHeading key={size} {...args} size={size} />)}
    </ShowcaseBox>
}`,...d.parameters?.docs?.source},description:{story:"xl 32 · lg 24 · md 20 · sm 16 · xsm 14 px, all at 120% line height.",...d.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame],
  render: args => <ShowcaseBox direction="column" style={{
    alignItems: 'stretch',
    gap: 24
  }}>
      {ARTICLE_HEADING_TONES.flatMap(tone => ARTICLE_HEADING_WEIGHTS.map(weight => <ArticleHeading key={\`\${tone}-\${weight}\`} {...args} size="lg" tone={tone} weight={weight} />))}
    </ShowcaseBox>
}`,...v.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [figmaFrame],
  args: {
    href: undefined
  }
}`,...l.parameters?.docs?.source},description:{story:"Without `href` the title is plain text (no hover, no focus).",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  args: {
    size: 'md',
    stretched: true
  },
  decorators: [figmaFrame],
  render: args => <article style={{
    position: 'relative',
    display: 'grid',
    gap: 'var(--spacing-md)',
    padding: 'var(--spacing-xl)',
    borderRadius: 'var(--border-radius-md)',
    border: 'var(--border-default) solid var(--color-border-neutral-subtle-default)'
  }}>
      <ArticleHeading {...args} />
      <span style={{
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-text-neutral-subtlest-default)'
    }}>
        Hover anywhere on the card
      </span>
    </article>
}`,...p.parameters?.docs?.source},description:{story:"A card that navigates through one `<a>`: `stretched` spreads the title link over the card\n(`position: relative`), so hovering anywhere on the card drives the title's hover color.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [...ARTICLE_HEADING_SIZES]
    }
  },
  args: {
    size: 'md'
  },
  render: ({
    size,
    children
  }) => <div style={gridStyle(STATES.length, 260)}>
      <div />
      {STATES.map(s => <div key={s} style={{
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {ARTICLE_HEADING_TONES.flatMap(tone => ARTICLE_HEADING_WEIGHTS.map(weight => <Row key={\`\${tone}-\${weight}\`}>
            <div style={{
        textTransform: 'capitalize'
      }}>{\`\${tone} · \${weight}\`}</div>
            {STATES.map(s => <ArticleHeading key={s} href="#" size={size} tone={tone} weight={weight} {...stateProps(s)}>
                {children}
              </ArticleHeading>)}
          </Row>))}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Every tone × weight in every Figma state. Hover, pressed and focus are forced with `data-state`.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: ({
    children
  }) => <div style={gridStyle(ARTICLE_HEADING_SIZES.length, 220)}>
      <div />
      {[...ARTICLE_HEADING_SIZES].reverse().map(size => <div key={size}>{size}</div>)}
      {STATES.flatMap(s => ARTICLE_HEADING_TONES.flatMap(tone => ARTICLE_HEADING_WEIGHTS.map(weight => <Row key={\`\${s}-\${tone}-\${weight}\`}>
              <div style={{
        textTransform: 'capitalize'
      }}>{\`\${s} · \${tone} · \${weight}\`}</div>
              {[...ARTICLE_HEADING_SIZES].reverse().map(size => <ArticleHeading key={size} href="#" size={size} tone={tone} weight={weight} {...stateProps(s)}>
                  {children}
                </ArticleHeading>)}
            </Row>)))}
    </div>
}`,...g.parameters?.docs?.source},description:{story:"The full Figma set (80 variants): state × weight × tone rows, size columns.",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={articleHeadingCss} aliases={ARTICLE_HEADING_ALIASES} />
}`,...u.parameters?.docs?.source},description:{story:"Properties and tokens read from ArticleHeading.module.css, resolved for the active theme.",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ArticleHeadingInspect />
}`,...h.parameters?.docs?.source},description:{story:"Pick tone, state, size and weight; see real measurements and the tokens that apply. Hover a token to locate it.",...h.parameters?.docs?.description}}};const M=["Default","Tones","Sizes","Weights","WithoutLink","StretchedInCard","States","FigmaMatrix","Tokens","Inspect"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:x,FigmaMatrix:g,Inspect:h,Sizes:d,States:m,StretchedInCard:p,Tokens:u,Tones:c,Weights:v,WithoutLink:l,__namedExportsOrder:M,default:k},Symbol.toStringTag,{value:"Module"}));export{q as A,x as D,g as F,h as I,d as S,c as T,v as W,p as a,l as b,m as c,u as d};
