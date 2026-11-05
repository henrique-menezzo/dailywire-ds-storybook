import{j as e,r as b}from"./iframe-BaE-r_tL.js";import{C as z}from"./CssTokens-DoMUOAyj.js";import{I as x,C as B}from"./ComponentInspector-aQuGSI0z.js";import{A as k,N as h,a as s,b as A}from"./index-DKiqy9gl.js";const j=`/* ==============================================
 * NativeAdCarouselCard — Daily Wire Design System
 * Figma: Native Ad Carousel EP (Web) (12761:19853) → layout web
 *        Native Ad Carousel EP (App) (12761:19950) → layout app
 * page "↳ Content", section "Article" (8413:56868).
 * web: Media Image | Video × State default | hovered | pressed | focused | disabled
 * app: Media Image | Video × State default | pressed | disabled
 * Nested: Avatar (DW+, 3xsm), Badge (translucid · sm · radius sm), Icon Button (translucid · md),
 * Button (secondary · md) drawn as a presentational CTA (the whole card is one link).
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Root ────────────────────────────────────── */

.card {
  position: relative;
  /* The stretched link (z 1) and the mute toggle (z 2) stack inside the card only */
  isolation: isolate;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  border-radius: var(--border-radius-sm);
  background: var(--nac-surface, transparent);
  font-family: var(--default), sans-serif;
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-bold-default);
}

/* ── Layout: web (Figma 320 × 338, no surface, gap 16) ── */

.card[data-variant='web'] {
  gap: var(--spacing-xl);
  /* Video controls appear on hover / focus (Figma State=hovered) */
  --nac-controls: 0;
}

/* ── Layout: app (Figma 290 × 322, gradient surface, inset parts) ── */

.card[data-variant='app'] {
  gap: var(--spacing-none);
  /* Figma: linear, top → bottom, #1e2229 (no token) → background/neutral/bold/default at 49% */
  --nac-surface: linear-gradient(
    to bottom,
    var(--color-background-neutral-subtlest-default) 0%,
    var(--color-background-neutral-bold-default) 49%
  );
  --nac-controls: 1;
}

/* ── States: web ─────────────────────────────── */

/* hovered: image dims (Figma #0a0909 @ 55%) and shows "Visit site"; video reveals its controls */
.card[data-variant='web'][data-media='image']:hover:not([data-disabled]),
.card[data-variant='web'][data-media='image'][data-state='hover'] {
  --nac-overlay: var(--color-overlay-neutral-bold-default);
  --nac-hover-label: 1;
}

.card[data-variant='web']:hover:not([data-disabled]),
.card[data-variant='web']:focus-within,
.card[data-variant='web'][data-state='hover'],
.card[data-variant='web'][data-state='focus'] {
  --nac-controls: 1;
}

/* pressed: media dims (Figma #0a0909 @ 35%), title turns subtlest */
.card[data-variant='web']:has(.link:active):not([data-disabled]),
.card[data-variant='web'][data-state='pressed'] {
  --nac-overlay: var(--color-overlay-neutral-subtle-default);
  --nac-hover-label: 0;
  --nac-title: var(--color-text-neutral-subtlest-default);
}

/* focused: Figma fills the card with the page surface */
.card[data-variant='web']:has(.link:focus-visible),
.card[data-variant='web'][data-state='focus'] {
  --nac-surface: var(--color-background-neutral-bold-default);
}

/* app: Figma State=pressed is drawn identical to default, and there is no hovered / focused */

/* ── Focus ring (both layouts; Figma draws it as two drop shadows) ── */

.card:has(.link:focus-visible),
.card[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Disabled (Figma: whole card at 40% opacity) ── */

.card[data-disabled] {
  opacity: var(--opacity-disabled);
  --nac-controls: 1;
}

.card[data-variant='web'][data-disabled] {
  --nac-controls: 0;
}

/* ── Media (Figma "Image" 320 × 175 / app "Media frame" 16:9 inset 12) ── */

.media {
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: var(--border-radius-sm);
  aspect-ratio: 320 / 175;
}

.card[data-variant='app'] .media {
  margin: var(--spacing-lg) var(--spacing-lg) var(--spacing-none);
  aspect-ratio: 16 / 9;
}

.asset {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Figma "Rectangle" state overlay + centered "Visit site" */
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nac-overlay, transparent);
  transition: background-color var(--duration-slow) var(--easing-ease-out);
}

/* Figma: 15px SemiBold #fafafa, no text style → label/600/md */
.hoverLabel {
  font-size: var(--font-size-sm);
  font-weight: var(--Semibold);
  line-height: var(--line-height-100);
  color: var(--color-text-always-light);
  opacity: var(--nac-hover-label, 0);
  transition: opacity var(--duration-slow) var(--easing-ease-out);
}

/* Figma Badge "10:00": 8px from the bottom-right corner (.media scope outranks the Badge base rule) */
.media .duration {
  position: absolute;
  right: var(--spacing-md);
  bottom: var(--spacing-md);
  opacity: var(--nac-controls, 1);
  transition: opacity var(--duration-slow) var(--easing-ease-out);
}

/* Figma Icon Button: 12px from the top-right corner, above the card link (.media scope outranks IconButton's position) */
.media .mute {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  z-index: 2;
  opacity: var(--nac-controls, 1);
  transition: opacity var(--duration-slow) var(--easing-ease-out);
}

/* No hover on touch screens: keep the web video controls visible */
@media (hover: none) {
  .card[data-variant='web'] {
    --nac-controls: 1;
  }
}

/* ── Texts (Figma "Texts": gap 8; app padding 12 · 12 · 16) ── */

.texts {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: var(--spacing-md);
  min-width: 0;
}

.card[data-variant='app'] .texts {
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-xl);
}

/* Text style title/500/md */
.title {
  margin: 0;
  font-size: var(--font-size-md);
  font-weight: var(--Medium);
  line-height: var(--line-height-120);
  color: var(--nac-title, var(--color-text-neutral-bold-default));
  overflow-wrap: anywhere;
  transition: color var(--duration-slow) var(--easing-ease-out);
}

/* app: Figma truncates the title at 2 lines */
.card[data-variant='app'] .title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}

.link {
  color: inherit;
  text-decoration: none;
  /* The focus ring is drawn on the whole card (.card:has(.link:focus-visible)) */
  outline: none;
}

/* Stretched link: the whole card is the hit area */
.link::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

.link[aria-disabled='true'] {
  cursor: default;
}

/* ── Byline (Figma: Avatar 24 + Sponsored label, gap 6) ── */

.byline {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 0;
}

/* Text style body/400/sm (web) · body/400/xsm (app), 2 lines, "Sponsored by" bold + sponsor subtlest */
.sponsored {
  display: -webkit-box;
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  color: var(--color-text-neutral-bold-default);
}

.card[data-variant='app'] .sponsored {
  font-size: var(--font-size-xs);
}

.sponsor {
  color: var(--color-text-neutral-subtlest-default);
}

/* ── CTA: Button secondary · md · radius sm, presentational (web 46px tall, app 38px) ── */

.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: var(--spacing-xl) var(--spacing-4xl);
  /* Figma stroke is drawn inside: it does not add to the 46 / 38px height */
  box-shadow: inset 0 0 0 var(--border-default) var(--color-border-neutral-bold-default);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--Semibold);
  line-height: var(--line-height-100);
  color: var(--color-text-neutral-bold-default);
  text-align: center;
}

/* app: Figma "Action" padding 0 · 12 · 6, Button padding 12 */
.card[data-variant='app'] .cta {
  margin: var(--spacing-none) var(--spacing-lg) var(--spacing-sm);
  padding-block: var(--spacing-lg);
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .overlay,
  .hoverLabel,
  .media .duration,
  .media .mute,
  .title {
    transition: none;
  }
}
`,{fn:F}=__STORYBOOK_MODULE_TEST__,w={web:320,app:290},d={image:{type:"image",src:k},video:{type:"video",poster:k,duration:"10:00"}},I={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"};function C({layout:a,label:n,children:t}){return e.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[n&&e.jsx("div",{style:I,children:n}),e.jsx("div",{style:{width:w[a],display:"flex"},children:t})]})}const V={component:s,title:"Components/NativeAdCarouselCard",parameters:{layout:"centered"},argTypes:{layout:{control:"inline-radio",options:[...h]},media:{control:"object"},title:{control:"text"},headingLevel:{control:"inline-radio",options:[2,3,4,5,6]},sponsoredLabel:{control:"text"},sponsor:{control:"text"},showCta:{control:"boolean"},ctaLabel:{control:"text"},hoverLabel:{control:"text"},disabled:{control:"boolean"},href:{control:"text"}},args:{layout:"web",media:d.image,href:"#",title:"Roasted by veterans, for early mornings",sponsoredLabel:"Sponsored by",sponsor:"Black Rifle Coffee",showCta:!0,ctaLabel:"Shop now",disabled:!1,onLinkClick:F(),onMutedChange:F()},render:a=>e.jsx(C,{layout:a.layout??"web",children:e.jsx(s,{...a})})},l={},i={parameters:{controls:{include:["media","showCta"]}},render:a=>e.jsx("div",{style:{display:"flex",gap:32,alignItems:"stretch"},children:h.map(n=>e.jsx(C,{layout:n,label:n,children:e.jsx(s,{...a,layout:n})},n))})},c={parameters:{controls:{include:["showCta"]}},render:a=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, auto)",gap:32},children:h.flatMap(n=>A.map(t=>e.jsx(C,{layout:n,label:`${n} · ${t}`,children:e.jsx(s,{...a,layout:n,media:d[t]})},`${n}-${t}`)))})},p={name:"Without CTA",args:{showCta:!1},render:a=>e.jsx("div",{style:{display:"flex",gap:32},children:h.map(n=>e.jsx(C,{layout:n,label:n,children:e.jsx(s,{...a,layout:n})},n))})},u={args:{sponsor:"Black Rifle Coffee Company — Veteran Founded, Veteran Operated"},render:i.render},m={parameters:{layout:"padded",controls:{include:["layout"]}},render:a=>{const n=a.layout??"web",t=[{media:d.image},{media:d.video,title:"Fresh roasted coffee, delivered to your door every month"},{media:d.image,sponsor:"Black Rifle Coffee Company — Veteran Founded"}];return e.jsx("div",{style:{display:"grid",gridAutoFlow:"column",gridAutoColumns:w[n],gap:16,overflowX:"auto"},children:t.map((r,o)=>e.jsx(s,{...a,...r},o))})}},_=["default","hover","pressed","focus","disabled"],E=["default","pressed","disabled"],D=a=>["hover","pressed","focus"].includes(a)?{"data-state":a}:{},g={parameters:{layout:"fullscreen",controls:{include:["showCta"]}},render:a=>e.jsx("div",{style:{display:"grid",gap:40,padding:24,overflowX:"auto"},children:h.map(n=>{const t=n==="web"?_:E;return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`auto repeat(${t.length}, ${w[n]}px)`,gap:"16px 24px",alignItems:"start",justifyContent:"start",...I},children:[e.jsx("div",{style:{fontWeight:600},children:n}),t.map(r=>e.jsx("div",{style:{textTransform:"capitalize"},children:r},r)),A.map(r=>e.jsxs(R,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:r}),t.map(o=>e.jsx("div",{style:{display:"flex"},children:e.jsx(s,{...a,layout:n,media:d[r],disabled:o==="disabled",...D(o)})},o))]},r))]},n)})})};function R({children:a}){return e.jsx(e.Fragment,{children:a})}const M={"--nac-surface":"background","--nac-overlay":"media overlay","--nac-title":"title color","--nac-hover-label":"hover label opacity","--nac-controls":"video controls opacity"},v={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(z,{css:j,aliases:M})},W=["yes","no"];function O(){const[a,n]=b.useState("web"),[t,r]=b.useState("image"),[o,L]=b.useState("default"),[T,N]=b.useState("yes"),S=a==="web"?_:E,f=S.includes(o)?o:"default";return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(x,{label:"Layout",options:h,value:a,onChange:n}),e.jsx(x,{label:"Media",options:A,value:t,onChange:r}),e.jsx(x,{label:"State",options:S,value:f,onChange:L}),e.jsx(x,{label:"Show CTA",options:W,value:T,onChange:N}),e.jsx(B,{css:j,aliases:M,group:a,state:f,scale:1.25,children:e.jsx(s,{style:{width:w[a]},layout:a,media:d[t],href:"#",showCta:T==="yes",disabled:f==="disabled",...D(f)})},a)]})}const y={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(O,{})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source},description:{story:"Figma defaults: Web · Image · default · Show CTA on.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['media', 'showCta']
    }
  },
  render: args => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'stretch'
  }}>
      {NATIVE_AD_LAYOUTS.map(layout => <Frame key={layout} layout={layout} label={layout}>
          <NativeAdCarouselCard {...args} layout={layout} />
        </Frame>)}
    </div>
}`,...i.parameters?.docs?.source},description:{story:"The two Figma component sets side by side: `web` (no surface, flush media) and `app` (gradient surface, inset media).",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['showCta']
    }
  },
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    gap: 32
  }}>
      {NATIVE_AD_LAYOUTS.flatMap(layout => NATIVE_AD_MEDIA_TYPES.map(type => <Frame key={\`\${layout}-\${type}\`} layout={layout} label={\`\${layout} · \${type}\`}>
            <NativeAdCarouselCard {...args} layout={layout} media={MEDIA[type]} />
          </Frame>))}
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Figma `Media`: image, or a muted video with a duration badge and a mute toggle (web: revealed on hover / focus).",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Without CTA',
  args: {
    showCta: false
  },
  render: args => <div style={{
    display: 'flex',
    gap: 32
  }}>
      {NATIVE_AD_LAYOUTS.map(layout => <Frame key={layout} layout={layout} label={layout}>
          <NativeAdCarouselCard {...args} layout={layout} />
        </Frame>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Figma `Show CTA` off.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sponsor: 'Black Rifle Coffee Company — Veteran Founded, Veteran Operated'
  },
  render: Layouts.render
}`,...u.parameters?.docs?.source},description:{story:'Figma note "When there are 2 lines of metadata": the sponsored label wraps to 2 lines, then truncates.',...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      include: ['layout']
    }
  },
  render: args => {
    const layout = args.layout ?? 'web';
    const cards: Partial<NativeAdCarouselCardProps>[] = [{
      media: MEDIA.image
    }, {
      media: MEDIA.video,
      title: 'Fresh roasted coffee, delivered to your door every month'
    }, {
      media: MEDIA.image,
      sponsor: 'Black Rifle Coffee Company — Veteran Founded'
    }];
    return <div style={{
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: WIDTH[layout],
      gap: 16,
      overflowX: 'auto'
    }}>
        {cards.map((card, i) => <NativeAdCarouselCard key={i} {...args} {...card} />)}
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:"A carousel row: cards stretch to the tallest one, so the CTAs line up.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    controls: {
      include: ['showCta']
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 40,
    padding: 24,
    overflowX: 'auto'
  }}>
      {NATIVE_AD_LAYOUTS.map(layout => {
      const states = layout === 'web' ? WEB_STATES : APP_STATES;
      return <div key={layout} style={{
        display: 'grid',
        gridTemplateColumns: \`auto repeat(\${states.length}, \${WIDTH[layout]}px)\`,
        gap: '16px 24px',
        alignItems: 'start',
        justifyContent: 'start',
        ...muted
      }}>
            <div style={{
          fontWeight: 600
        }}>{layout}</div>
            {states.map(s => <div key={s} style={{
          textTransform: 'capitalize'
        }}>{s}</div>)}
            {NATIVE_AD_MEDIA_TYPES.map(type => <Row key={type}>
                <div style={{
            textTransform: 'capitalize'
          }}>{type}</div>
                {states.map(s => <div key={s} style={{
            display: 'flex'
          }}>
                    <NativeAdCarouselCard {...args} layout={layout} media={MEDIA[type]} disabled={s === 'disabled'} {...STATE_ATTRS(s)} />
                  </div>)}
              </Row>)}
          </div>;
    })}
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Every Figma variant: web Media × 5 states, app Media × 3 states.\nHover / pressed / focus are forced with `data-state`. Figma's app `pressed` is drawn identical to default.",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={cardCss} aliases={CARD_ALIASES} />
}`,...v.parameters?.docs?.source},description:{story:"Properties and tokens read from NativeAdCarouselCard.module.css, resolved for the active theme.",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <CardInspect />
}`,...y.parameters?.docs?.source},description:{story:"Pick layout, media, state and CTA; see the card's real measurements and the tokens that apply. Hover a token to locate it.",...y.parameters?.docs?.description}}};const P=["Default","Layouts","Media","WithoutCta","LongMetadata","Carousel","States","Tokens","Inspect"],X=Object.freeze(Object.defineProperty({__proto__:null,Carousel:m,Default:l,Inspect:y,Layouts:i,LongMetadata:u,Media:c,States:g,Tokens:v,WithoutCta:p,__namedExportsOrder:P,default:V},Symbol.toStringTag,{value:"Module"}));export{X as C,l as D,y as I,i as L,c as M,g as S,v as T,p as W,u as a,m as b};
