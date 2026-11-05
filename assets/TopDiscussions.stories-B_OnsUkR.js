import{r as k,j as e}from"./iframe-BaE-r_tL.js";import{C}from"./CssTokens-DoMUOAyj.js";import{I as N,C as E}from"./ComponentInspector-aQuGSI0z.js";import{S as L}from"./index-DO2tlVwn.js";const D=`/* ==============================================
 * TopDiscussions — Daily Wire Design System
 * Figma: Top Discussions (153:7463), group "Featured Article" (8413:56894), section "Article" (8413:56868),
 * page "↳ Content". Additional Images Yes | No. Doc status "In Progress".
 * Figma binds this set to the legacy "[Old] 3.0 Components" / "[Old] 2.0 Semantic Color" variables;
 * each one is mapped to the current token noted beside it.
 * Static content: Figma draws no hover / pressed / focus states (focus rings are the DS standard).
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── List (Figma places the two variants 16px apart) ── */

.list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: var(--default), sans-serif;
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
}

/* ── Item (Figma 369 wide; gap: Top Discussions/Spacing 12 → spacing-lg) ── */

.item {
  position: relative;
  /* The stretched title link (z 1) and the thumbnail strip (z 2) stack inside the item only */
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  min-width: 0;
}

/* Figma "Images": thumbnails 4px above the selected image (Top Discussions/Image Spacing 4 → spacing-xs) */
.images {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

/* ── Thumbnail strip (Figma "Small Images": 4 × 89 × 46, gap 4) ── */

.thumbs {
  position: relative;
  z-index: 2;
  display: flex;
  gap: var(--spacing-xs);
}

.thumb {
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  min-height: var(--touch-target-min);
  aspect-ratio: 89 / 46;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: none;
  /* Bases/images-radius 2 (legacy) → no semantic radius of 2px */
  border-radius: var(--primitive-dimension-dimension-0-5);
  background: none;
  cursor: pointer;
}

.thumbImage {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Selected thumbnail: 1px inside stroke (Stroke/Default/Base, legacy white → border/inverse/bold) */
.thumb[aria-pressed='true']::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 var(--border-default) var(--color-border-inverse-bold-default);
}

.thumb:focus-visible {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Selected image (Figma 369 × 170; radius-xs 4 → border-radius-sm) ── */

.selected {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-sm);
  aspect-ratio: 369 / 170;
}

.selectedImage {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ── Title (Figma 14px Regular 150%, no text style → body/400/sm; Text/Default/Base → text/neutral/bold; 3 lines) ── */

.title {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  color: var(--color-text-neutral-bold-default);
  overflow-wrap: anywhere;
}

.link {
  color: inherit;
  text-decoration: none;
  /* The focus ring is drawn on the whole item (.item:has(.link:focus-visible)) */
  outline: none;
}

/* Stretched link: the selected image and the title are the hit area; the thumbnails sit above it */
.link::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

.item:has(.link:focus-visible) {
  border-radius: var(--border-radius-sm);
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}
`,$="_list_1da2u_13",G="_item_1da2u_26",O="_images_1da2u_37",z="_thumbs_1da2u_45",H="_thumb_1da2u_45",q="_thumbImage_1da2u_68",Y="_selected_1da2u_93",B="_selectedImage_1da2u_100",P="_title_1da2u_111",W="_link_1da2u_125",n={list:$,item:G,images:O,thumbs:z,thumb:H,thumbImage:q,selected:Y,selectedImage:B,title:P,link:W},R=(s,t)=>`Show image ${s} of ${t}`,a=k.forwardRef(function({items:t,headingLevel:i=3,imagesLabel:T="Images",imageLabel:f=R,"aria-label":b="Top discussions",className:r,...w},_){return e.jsx("ul",{ref:_,className:[n.list,r].filter(Boolean).join(" "),"aria-label":b,...w,children:t.map((v,x)=>e.jsx(V,{item:v,headingLevel:i,imagesLabel:T,imageLabel:f},v.id??x))})});function V({item:s,headingLevel:t,imagesLabel:i,imageLabel:T}){const{title:f,href:b,images:r,defaultSelectedImage:w=0}=s,[_,v]=k.useState(w),x=Math.max(0,Math.min(_,r.length-1)),S=r[x],A=r.length>1,M=`h${t}`;return e.jsxs("li",{className:n.item,"data-variant":A?"additional-images":"single-image",children:[e.jsxs("div",{className:n.images,children:[A&&e.jsx("div",{className:n.thumbs,role:"group","aria-label":i,children:r.map((F,I)=>e.jsx("button",{type:"button",className:n.thumb,"aria-pressed":I===x,"aria-label":T(I+1,r.length),onClick:()=>v(I),children:e.jsx("img",{className:n.thumbImage,src:F.src,alt:"",draggable:!1,decoding:"async"})},`${F.src}-${I}`))}),S&&e.jsx("div",{className:n.selected,children:e.jsx("img",{className:n.selectedImage,src:S.src,alt:S.alt??"",draggable:!1,decoding:"async"})})]}),e.jsx(M,{className:n.title,children:b?e.jsx("a",{className:n.link,href:b,children:f}):f})]})}a.__docgenInfo={description:`Top Discussions (Figma 153:7463, "Featured Article" group of the Article section): a list of discussions,
each a selected image, an optional strip of thumbnails that switches it, and a title.`,methods:[],displayName:"TopDiscussions",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TopDiscussionItem"}],raw:"TopDiscussionItem[]"},description:""},headingLevel:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Heading element of each item title",defaultValue:{value:"3",computed:!1}},imagesLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of each thumbnail strip",defaultValue:{value:"'Images'",computed:!1}},imageLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number, total: number) => string",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"number"},name:"total"}],return:{name:"string"}}},description:"Accessible name of a thumbnail button (1-based index)",defaultValue:{value:"(index: number, total: number) => `Show image ${index} of ${total}`",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name of the list",defaultValue:{value:"'Top discussions'",computed:!1}}},composes:["Omit"]};const j=369,y="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",g=Object.entries(L).slice(0,4).map(([s,t])=>({src:t,alt:s})),o=[{id:"yes",title:y,href:"#",images:g},{id:"no",title:y,href:"#",images:g.slice(0,1)}],U={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"};function h({label:s,children:t}){return e.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[s&&e.jsx("div",{style:U,children:s}),e.jsx("div",{style:{width:j},children:t})]})}const J={component:a,title:"Components/TopDiscussions",parameters:{layout:"centered"},argTypes:{items:{control:"object"},headingLevel:{control:"inline-radio",options:[2,3,4,5,6]},imagesLabel:{control:"text"},"aria-label":{control:"text"}},args:{items:o,headingLevel:3,imagesLabel:"Images","aria-label":"Top discussions"},render:s=>e.jsx(h,{children:e.jsx(a,{...s})})},l={},d={parameters:{controls:{include:["headingLevel"]}},render:s=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"start"},children:[e.jsx(h,{label:"Additional Images = Yes",children:e.jsx(a,{...s,items:[o[0]]})}),e.jsx(h,{label:"Additional Images = No",children:e.jsx(a,{...s,items:[o[1]]})})]})},c={args:{items:[{id:"short",title:"Is the four-day work week coming to America?",href:"#",images:g.slice(1,3)},{id:"long",title:`${y} ${y}`,href:"#",images:g.slice(2,3)},{id:"static",title:"A discussion without a link: the item is static text and images.",images:g.slice(0,3)}]}},m={parameters:{layout:"padded",controls:{include:["headingLevel"]}},render:s=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`repeat(3, ${j}px)`,gap:32,alignItems:"start"},children:[g.map((t,i)=>e.jsx(h,{label:`Yes · image ${i+1} selected`,children:e.jsx(a,{...s,items:[{...o[0],id:`sel-${i}`,defaultSelectedImage:i}]})},i)),e.jsx(h,{label:"No",children:e.jsx(a,{...s,items:[o[1]]})}),e.jsx(h,{label:"No · without link",children:e.jsx(a,{...s,items:[{...o[1],href:void 0}]})})]})},u={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(C,{css:D})},K=["yes","no"];function Q(){const[s,t]=k.useState("yes");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(N,{label:"Additional Images",options:K,value:s,onChange:t}),e.jsx(E,{css:D,group:s==="yes"?"additional-images":"single-image",state:"default",scale:1.25,children:e.jsx(a,{style:{width:j},items:[s==="yes"?o[0]:o[1]]})},s)]})}const p={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(Q,{})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source},description:{story:"The two Figma variants as a list. Click a thumbnail to switch the selected image.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['headingLevel']
    }
  },
  render: args => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'start'
  }}>
      <Frame label="Additional Images = Yes">
        <TopDiscussions {...args} items={[FIGMA_ITEMS[0]]} />
      </Frame>
      <Frame label="Additional Images = No">
        <TopDiscussions {...args} items={[FIGMA_ITEMS[1]]} />
      </Frame>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"Figma `Additional Images`: with two or more images the thumbnail strip is drawn; with one, the image alone.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'short',
      title: 'Is the four-day work week coming to America?',
      href: '#',
      images: IMAGES.slice(1, 3)
    }, {
      id: 'long',
      title: \`\${FIGMA_TITLE} \${FIGMA_TITLE}\`,
      href: '#',
      images: IMAGES.slice(2, 3)
    }, {
      id: 'static',
      title: 'A discussion without a link: the item is static text and images.',
      images: IMAGES.slice(0, 3)
    }]
  }
}`,...c.parameters?.docs?.source},description:{story:"Titles wrap to 3 lines, then truncate. Without `href` the item has no link.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      include: ['headingLevel']
    }
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: \`repeat(3, \${WIDTH}px)\`,
    gap: 32,
    alignItems: 'start'
  }}>
      {IMAGES.map((_, i) => <Frame key={i} label={\`Yes · image \${i + 1} selected\`}>
          <TopDiscussions {...args} items={[{
        ...FIGMA_ITEMS[0],
        id: \`sel-\${i}\`,
        defaultSelectedImage: i
      }]} />
        </Frame>)}
      <Frame label="No">
        <TopDiscussions {...args} items={[FIGMA_ITEMS[1]]} />
      </Frame>
      <Frame label="No · without link">
        <TopDiscussions {...args} items={[{
        ...FIGMA_ITEMS[1],
        href: undefined
      }]} />
      </Frame>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Top Discussions is static content: Figma draws no hover, pressed, focus or disabled states.
This grid shows both variants with each thumbnail selected; keyboard focus draws the DS focus ring
(on a thumbnail, or around the item when its link is focused).`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={discussionsCss} />
}`,...u.parameters?.docs?.source},description:{story:"Properties and tokens read from TopDiscussions.module.css, resolved for the active theme.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <DiscussionsInspect />
}`,...p.parameters?.docs?.source},description:{story:"Pick the Figma axis; see the real measurements and the tokens that apply. Hover a token to locate it.",...p.parameters?.docs?.description}}};const X=["Default","AdditionalImages","Content","States","Tokens","Inspect"],ne=Object.freeze(Object.defineProperty({__proto__:null,AdditionalImages:d,Content:c,Default:l,Inspect:p,States:m,Tokens:u,__namedExportsOrder:X,default:J},Symbol.toStringTag,{value:"Module"}));export{d as A,c as C,ne as D,p as I,m as S,u as T,l as a};
