import{j as e,r as S}from"./iframe-BaE-r_tL.js";import{C as T}from"./CssTokens-DoMUOAyj.js";import{I as E,C as D}from"./ComponentInspector-aQuGSI0z.js";import{V as z}from"./index-DTA9Iiqt.js";import{L as i}from"./LiveUpdatesSlider-CxilVZVN.js";import{S as A}from"./index-dPPx6LzB.js";const w=`/* ==============================================
 * LiveUpdatesSlider — Daily Wire Design System
 * Figma: Slider Live Updates (9096:6145), page "↳ Content", section "Article".
 * Content 1 | 2 | 3 (active slide) × Breakpoint Mobile | Tablet | Desktop.
 * The breakpoint axis is responsive CSS: container queries on the slider's own width.
 * tokens.css has no breakpoint or ratio tokens: limits and ratios are the Figma frame sizes
 * (Mobile 393 × 470 · Tablet 768 × 627 · Desktop 864 × 547).
 * All other values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: the query container ───────────────── */

.root {
  display: block;
  box-sizing: border-box;
  width: 100%;
  container-name: dw-live-updates;
  container-type: inline-size;
  /* Active slide, 0-based: set inline by LiveUpdatesSlider.tsx */
  --lus-index: 0;
}

/* ── Frame: ratio + corners per breakpoint (Mobile first) ── */

.frame {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  aspect-ratio: 393 / 470;
  border-radius: var(--border-radius-none);
}

/* ── Slides ──────────────────────────────────── */

.viewport {
  position: absolute;
  inset: 0;
  overflow: hidden;
  /* Horizontal swipes reach the slider; vertical ones keep scrolling the page */
  touch-action: pan-y;
}

.track {
  display: flex;
  height: 100%;
  transform: translateX(calc(var(--lus-index) * -100%));
  /* Figma: smart animate 400ms (arrows) / 600ms (drag), ease-out; closest duration token used */
  transition: transform var(--duration-slower) var(--easing-ease-out);
}

.root:dir(rtl) .track {
  transform: translateX(calc(var(--lus-index) * 100%));
}

.slide {
  position: relative;
  flex: 0 0 100%;
  min-width: 0;
  height: 100%;
}

/* Figma image fill: cover */
.media {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

.custom {
  width: 100%;
  height: 100%;
}

/* ── Controls: one row at the bottom, spacing-xl from the edges ── */

.controls {
  position: absolute;
  z-index: 2;
  bottom: var(--spacing-xl);
  inset-inline: var(--spacing-xl);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  pointer-events: none;
}

.controls > * {
  pointer-events: auto;
}

/* Arrow actions: two Icon Buttons translucid · lg, spacing-sm apart, bottom-right */
.arrows {
  grid-column: 3;
  justify-self: end;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

/* Position dots: pill centered on the frame, vertically centered on the arrows */
.dots {
  grid-column: 2;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-full);
  background-color: var(--color-overlay-neutral-strong-default);
  pointer-events: none;
}

/* Figma: 8px dots at 40% opacity; no 0.4 opacity token, closest used */
.dot {
  display: block;
  flex-shrink: 0;
  width: var(--size-2xs);
  height: var(--size-2xs);
  border-radius: var(--border-radius-full);
  background-color: var(--color-icon-always-light);
  opacity: var(--opacity-disabled);
  transition:
    width var(--duration-slower) var(--easing-ease-out),
    height var(--duration-slower) var(--easing-ease-out),
    opacity var(--duration-slower) var(--easing-ease-out);
}

/* Active dot: 10px, full opacity */
.dot[data-active] {
  width: var(--primitive-dimension-dimension-2-5);
  height: var(--primitive-dimension-dimension-2-5);
  opacity: 1;
}

/* ── Tablet (768 – 863) ──────────────────────── */

@container dw-live-updates (768px <= width < 864px) {
  .frame {
    aspect-ratio: 768 / 627;
  }
}

/* ── Desktop (≥ 864): rounded card ───────────── */

@container dw-live-updates (width >= 864px) {
  .frame {
    aspect-ratio: 864 / 547;
    border-radius: var(--border-radius-md);
  }
}

@media (prefers-reduced-motion: reduce) {
  .track,
  .dot {
    transition: none;
  }
}
`,{fn:F}=__STORYBOOK_MODULE_TEST__,a={Desktop:864,Tablet:768,Mobile:393},y=Object.keys(a),b=["Content 1","Content 2","Content 3"],C=[{type:"image",id:"launch",src:A["Missile launch"],alt:"A missile lifts off from its launch pad in a cloud of smoke"},{type:"image",id:"stamps",src:A["Stamps collage"],alt:"Collage of torn Iranian stamps over an American flag"},{type:"video",id:"video",poster:z,label:"Explosions light up the skyline"}],O={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"};function I({width:n,label:t,children:s}){return e.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[t&&e.jsx("div",{style:O,children:t}),e.jsx("div",{style:{width:n,flexShrink:0},children:s})]})}const j={padding:24,overflowX:"auto"},N={component:i,title:"Components/LiveUpdatesSlider",parameters:{layout:"padded"},argTypes:{slides:{control:"object"},defaultIndex:{control:{type:"number",min:0,max:2}},label:{control:"text"},previousLabel:{control:"text"},nextLabel:{control:"text"}},args:{slides:C,defaultIndex:0,label:"Live updates",onIndexChange:F()}},c={},p={parameters:{layout:"fullscreen"},render:n=>e.jsx("div",{style:{...j,display:"flex",alignItems:"flex-start",gap:32},children:y.map(t=>e.jsx(I,{width:a[t],label:`${t} · ${a[t]}`,children:e.jsx(i,{...n})},t))})},m={parameters:{layout:"fullscreen"},render:n=>e.jsx("div",{style:{...j,display:"flex",alignItems:"flex-start",gap:32},children:b.map((t,s)=>e.jsx(I,{width:a.Mobile,label:t,children:e.jsx(i,{...n,index:s})},t))})};function _(n){const[t,s]=S.useState(0);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:a.Desktop},children:[e.jsx(i,{...n,index:t,onIndexChange:r=>{s(r),n.onIndexChange?.(r)}}),e.jsxs("div",{style:O,children:["index: ",e.jsx("b",{children:t})]})]})}const u={render:n=>e.jsx(_,{...n})},g={args:{slides:[C[0],{type:"custom",id:"embed",content:e.jsx("div",{style:{display:"grid",placeItems:"center",height:"100%",background:"var(--color-background-neutral-subtle-default)",color:"var(--color-text-neutral-subtle-default)",fontSize:"var(--font-size-sm)"},children:"Embedded post (not loaded)"})}]},render:n=>e.jsx("div",{style:{maxWidth:a.Desktop},children:e.jsx(i,{...n})})},h={parameters:{layout:"fullscreen"},render:n=>e.jsx("div",{style:{...j,display:"grid",gap:32},children:y.map(t=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:24},children:b.map((s,r)=>e.jsx(I,{width:a[t],label:`${t} · ${s}`,children:e.jsx(i,{...n,index:r})},s))},t))})};function M(n){const t=n.replace(/\/\*[\s\S]*?\*\//g,""),s=[];let r=0,l=0,x=0,d="";for(let o=0;o<t.length;o++)t[o]==="{"?(r===0&&(d=t.slice(l,o).trim(),x=o+1),r++):t[o]==="}"&&(r--,r===0&&(d.startsWith("@container")&&s.push({condition:d.replace(/^@container\s+[\w-]+\s*/,""),body:t.slice(x,o)}),l=o+1));return s}const L=M(w);function B(n,t){const s=n.match(/width < (\d+)px/),r=n.match(/width >= (\d+)px/)??n.match(/(\d+)px <= width/);return(!s||t<Number(s[1]))&&(!r||t>=Number(r[1]))}const P=n=>y.filter(t=>B(n,a[t])).join(" + "),k={},f={tags:["!test"],parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"8px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:"All breakpoints (Mobile base)"}),e.jsx(T,{css:w,aliases:k}),L.map(n=>e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"32px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:[`${P(n.condition)} `,e.jsx("code",{style:{fontSize:12,fontWeight:400,color:"var(--color-text-neutral-subtle-default)"},children:n.condition})]}),e.jsx(T,{css:n.body,aliases:k})]},n.condition))]})},R={Desktop:.6,Tablet:.65,Mobile:1};function U(){const[n,t]=S.useState("Content 1"),[s,r]=S.useState("Desktop"),l=a[s],x=[w,...L.filter(o=>B(o.condition,l)).map(o=>o.body)].join(`
`),d=b.indexOf(n);return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(E,{label:"Content",options:b,value:n,onChange:t}),e.jsx(E,{label:"Breakpoint",options:y,value:s,onChange:r}),e.jsx(D,{css:x,aliases:k,group:`content-${d+1}`,state:"default",scale:R[s],children:e.jsx(i,{style:{width:l,marginInline:-l/2},slides:C,index:d})},s)]})}const v={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(U,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source},description:{story:"Full width of the canvas: resize the viewport to see the breakpoints switch. Use the arrows (or swipe on touch).",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 32
  }}>
      {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${bp} · \${BREAKPOINTS[bp]}\`}>
          <LiveUpdatesSlider {...args} />
        </Frame>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Figma `Breakpoint`: Mobile 393 × 470 and Tablet 768 × 627 run edge to edge; Desktop 864 × 547 is a rounded card.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 32
  }}>
      {CONTENTS.map((content, i) => <Frame key={content} width={BREAKPOINTS.Mobile} label={content}>
          <LiveUpdatesSlider {...args} index={i} />
        </Frame>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Figma `Content`: the active slide. Previous is disabled on the first slide, next on the last; the video slide shows its mute toggle.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledDemo {...args} />
}`,...u.parameters?.docs?.source},description:{story:"`index` + `onIndexChange` hand the active slide to the parent.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    slides: [FIGMA_SLIDES[0], {
      type: 'custom',
      id: 'embed',
      content: <div style={{
        display: 'grid',
        placeItems: 'center',
        height: '100%',
        background: 'var(--color-background-neutral-subtle-default)',
        color: 'var(--color-text-neutral-subtle-default)',
        fontSize: 'var(--font-size-sm)'
      }}>
            Embedded post (not loaded)
          </div>
    }]
  },
  render: args => <div style={{
    maxWidth: BREAKPOINTS.Desktop
  }}>
      <LiveUpdatesSlider {...args} />
    </div>
}`,...g.parameters?.docs?.source},description:{story:"`type: 'custom'` slides render any node stretched to the slide, e.g. a placeholder for an embed that is not fetched.",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 32
  }}>
      {BREAKPOINT_NAMES.map(bp => <div key={bp} style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 24
    }}>
          {CONTENTS.map((content, i) => <Frame key={content} width={BREAKPOINTS[bp]} label={\`\${bp} · \${content}\`}>
              <LiveUpdatesSlider {...args} index={i} />
            </Frame>)}
        </div>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:"All 9 Figma variants: Content (columns) × Breakpoint (rows), at the Figma frame widths.",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
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
    }}>All breakpoints (Mobile base)</p>
      <CssTokens css={sliderCss} aliases={ALIASES} />
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
          <CssTokens css={b.body} aliases={ALIASES} />
        </div>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Properties and tokens read from LiveUpdatesSlider.module.css, resolved for the active theme: shared rules, then each breakpoint range.",...f.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <SliderInspect />
}`,...v.parameters?.docs?.source},description:{story:"Pick Content and Breakpoint (frame width); see real measurements and the tokens that apply at that width.",...v.parameters?.docs?.description}}};const K=["Default","Breakpoints","Content","Controlled","CustomSlide","States","Tokens","Inspect"],H=Object.freeze(Object.defineProperty({__proto__:null,Breakpoints:p,Content:m,Controlled:u,CustomSlide:g,Default:c,Inspect:v,States:h,Tokens:f,__namedExportsOrder:K,default:N},Symbol.toStringTag,{value:"Module"}));export{p as B,m as C,c as D,v as I,H as S,f as T,g as a,u as b,h as c};
