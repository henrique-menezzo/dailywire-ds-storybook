import{j as e,r as A}from"./iframe-BaE-r_tL.js";import{C as _}from"./CssTokens-DoMUOAyj.js";import{I as E,C as z}from"./ComponentInspector-aQuGSI0z.js";import{a as M}from"./ArticleHeading.module-Ca3flQOu.js";import{H as C,S as R}from"./index-DO2tlVwn.js";import{C as F,a as v,b as l,c as y}from"./index-nDlySgPZ.js";const D=`/* ==============================================
 * CardFeed — Daily Wire Design System
 * Figma: Card Feed (12354:203104), doc frame 11904:206370, section "Article" (8413:56868), page "↳ Content".
 * Content Article Free | Article Premium | Episode | Live Blog | Shorts × Breakpoint Desktop | Mobile
 * × InteractionState default | hovered | pressed (30 variants).
 * Nests Avatar, Byline (primary), Icon Button (ghost · dots-vertical), Heading-Article-Content (ArticleHeading),
 * Badge (translucid, episode duration) and Video Article Resource (ArticleVideo, shorts).
 * Thumbnail / Episode thumb live outside the section: a plain <img> in a bordered 16:9 box.
 * Breakpoint is responsive: the card is a size container; Desktop is the base, Mobile below 480px
 * (between the Figma frames, 608 and 361; tokens.css has no breakpoint tokens).
 * InteractionState only recolors the title (ArticleHeading: text/neutral/bold default → hovered → pressed).
 * All values reference tokens.css custom properties.
 * ============================================== */

/* ── Root: query container, positioning context of the stretched title link ── */

.card {
  position: relative;
  display: block;
  box-sizing: border-box;
  min-width: 0;
  container-name: dw-card-feed;
  container-type: inline-size;
  /* Not drawn in Figma: shapes the card focus ring */
  border-radius: var(--border-radius-md);
}

/* ── Layout: avatar column + main column (Figma gap spacing-lg) ── */

.layout {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
}

.avatar {
  display: flex;
  flex-shrink: 0;
}

/* Figma Avatar Size=sm (48) on Desktop, 2xsm (32) on Mobile: one of the two is displayed */
.avatar[data-bp='mobile'] {
  display: none;
}

/* article-content › media: spacing-4xl (Desktop) · spacing-3xl (Mobile) */
.main {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: var(--spacing-4xl);
  min-width: 0;
}

/* meta row › text: spacing-lg */
.content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* ── Meta row: Byline • label • date (label/400/md, gap spacing-sm) + more button ── */

.metaRow {
  position: relative;
  display: flex;
  align-items: center;
  /* Not drawn in Figma (the button overlaps the row): keeps long rows clear of the more button */
  padding-inline-end: var(--size-xl);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 0;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-100);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-subtlest-default);
}

.separator,
.date {
  flex-shrink: 0;
  white-space: nowrap;
}

.label {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  white-space: nowrap;
}

/* A linked byline stays clickable above the stretched title link (Byline root is position: relative).
 * A static byline is plain text of the card: clicks fall through to the card link. */
.byline:not([data-static]) {
  z-index: 1;
}

/* Live Blog: Figma "Dot" ellipse, 8px (6px on Mobile), icon/brand/bold */
.liveDot {
  flex-shrink: 0;
  width: var(--size-2xs);
  height: var(--size-2xs);
  border-radius: var(--border-radius-full);
  background-color: var(--color-icon-brand-bold-default);
}

/* Figma: Icon Button absolutely placed, centered on the row and overhanging the column end
 * (13px Desktop, 10px Mobile: no token, spacing-lg / spacing-md used) */
.more {
  position: absolute;
  z-index: 1;
  top: 50%;
  inset-inline-end: calc(-1 * var(--spacing-lg));
  display: flex;
  transform: translateY(-50%);
}

.more[data-bp='mobile'] {
  display: none;
}

/* ── Title + description (gap spacing-lg) ───── */

.text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* The card shows one focus ring around the whole card (below), not the title ring */
.card .title a:focus-visible {
  outline: none;
}

/* body/400/sm, 3 lines max (Figma maxLines 3, truncation ending) */
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  margin: 0;
  font-family: var(--default), sans-serif;
  font-size: var(--font-size-sm);
  font-weight: var(--Regular);
  line-height: var(--line-height-150);
  letter-spacing: calc(var(--letter-spacing-default) * 1em);
  color: var(--color-text-neutral-subtlest-default);
}

/* ── Media: Figma "Frame 4" / Episode thumb (stroke border/neutral/bold, radius md) ── */

.media {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  border: var(--border-default) solid var(--color-border-neutral-bold-default);
  border-radius: var(--border-radius-md);
  /* Pictures belong to the card: clicks and hover fall through to the stretched title link */
  pointer-events: none;
}

/* Thumbnail 16:9 (Figma 274:154; the Episode thumb is drawn at 332:182) */
.media[data-media='image'] {
  aspect-ratio: 16 / 9;
  /* (overflow: hidden above) the ratio wins over the picture's own size */
  min-height: var(--spacing-none);
  /* Not drawn in Card Feed (Card Feed Ad uses it behind the Thumbnail): placeholder while the picture loads */
  background-color: var(--color-background-neutral-subtle-default);
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Shorts: Video Article Resource 9:16, 330 of 548px (Desktop) · 214 of 317px (Mobile); no width token */
.media[data-media='video'] {
  z-index: 1;
  width: calc(100% * 3 / 5);
  pointer-events: auto;
}

/* Episode: Badge translucid · md (Desktop) / sm (Mobile) · radius sm, spacing-md from the bottom-right corner */
.duration {
  position: absolute;
  inset-inline-end: var(--spacing-md);
  bottom: var(--spacing-md);
}

.card .duration[data-bp='mobile'] {
  display: none;
}

.srOnly {
  position: absolute;
  width: var(--border-default);
  height: var(--border-default);
  margin: calc(-1 * var(--border-default));
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* ── Focus: the title link is focused; the ring goes around the card it covers ── */

.card:has(.title a:focus-visible),
.card[data-state='focus'] {
  outline: var(--focus-ring-width) solid var(--color-focus-info-bold-default);
  outline-offset: var(--focus-ring-offset);
}

/* ── Breakpoint Mobile (Figma frame 361) ─────── */

@container dw-card-feed (width < 480px) {
  .avatar[data-bp='desktop'],
  .more[data-bp='desktop'],
  .card .duration[data-bp='desktop'] {
    display: none;
  }

  .avatar[data-bp='mobile'],
  .more[data-bp='mobile'] {
    display: flex;
  }

  .card .duration[data-bp='mobile'] {
    display: inline-flex;
  }

  .main {
    gap: var(--spacing-3xl);
  }

  /* label/400/sm */
  .meta,
  .card .meta .byline[data-size] {
    font-size: var(--font-size-xs);
  }

  /* heading/500/xs (Desktop heading/500/md is ArticleHeading size lg) */
  .card .title[data-size] {
    font-size: var(--font-size-md);
  }

  /* Figma Dot 6px: no size token, primitive dimension used */
  .liveDot {
    width: var(--primitive-dimension-dimension-1-5);
    height: var(--primitive-dimension-dimension-1-5);
  }

  .more {
    inset-inline-end: calc(-1 * var(--spacing-md));
  }

  .media[data-media='video'] {
    width: calc(100% * 2 / 3);
  }
}
`,{fn:L}=__STORYBOOK_MODULE_TEST__,i={Desktop:608,Mobile:361},k=Object.keys(i),j={"article-free":"Article Free","article-premium":"Article Premium",episode:"Episode","live-blog":"Live Blog",shorts:"Shorts"},P={"article-free":{imageSrc:y["Article Free"]},"article-premium":{imageSrc:y["Article Premium"],avatar:{type:"host",src:C["Ben Shapiro"]}},episode:{imageSrc:y.Episode,avatar:{type:"show",src:R["Show 01"]}},"live-blog":{imageSrc:y["Live Blog"],avatar:{type:"host",src:C["DW Logo"]}},shorts:{avatar:{type:"host",src:C["Ben Shapiro"]},video:{poster:y.Shorts}}};function x(t){const n=t.content??"article-free",a=Object.fromEntries(Object.entries(t).filter(([,r])=>r!==void 0));return{...P[n],...a}}const $={fontSize:12,color:"var(--color-text-neutral-subtlest-default)"},N={padding:24,overflowX:"auto"};function I({width:t,label:n,children:a}){return e.jsxs("div",{style:{display:"grid",gap:8,alignContent:"start"},children:[n&&e.jsx("div",{style:$,children:n}),e.jsx("div",{style:{width:t,flexShrink:0},children:a})]})}const H={component:l,title:"Components/CardFeed",parameters:{layout:"centered"},argTypes:{content:{control:"select",options:[...v]},interactionState:{control:"inline-radio",options:[...F]},headingLevel:{control:"inline-radio",options:[2,3,4,5,6]},href:{control:"text"},title:{control:"text"},description:{control:"text"},author:{control:"text"},authorHref:{control:"text"},label:{control:"text"},date:{control:"text"},dateTime:{control:"text"},imageSrc:{control:"text"},imageAlt:{control:"text"},duration:{control:"text"},showMore:{control:"boolean"},moreLabel:{control:"text"},avatar:{control:"object"},video:{control:"object"}},args:{content:"article-free",href:"#",headingLevel:3,showMore:!0,interactionState:"default",onMoreClick:L()},render:t=>e.jsx("div",{style:{width:i.Desktop},children:e.jsx(l,{...x(t)})})},c={},p={parameters:{layout:"fullscreen"},render:t=>e.jsx("div",{style:{...N,display:"flex",alignItems:"flex-start",gap:48},children:v.map(n=>e.jsx(I,{width:i.Desktop,label:j[n],children:e.jsx(l,{...x({...t,content:n})})},n))})},m={parameters:{layout:"fullscreen"},render:t=>e.jsx("div",{style:{...N,display:"grid",gap:48},children:v.map(n=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:48},children:k.map(a=>e.jsx(I,{width:i[a],label:`${j[n]} · ${a} ${i[a]}`,children:e.jsx(l,{...x({...t,content:n})})},a))},n))})},u={args:{content:"episode",authorHref:"#show",moreButtonProps:{"aria-haspopup":"menu"}}},g={parameters:{layout:"padded"},render:t=>e.jsx("ul",{style:{display:"grid",gap:48,maxWidth:i.Desktop,margin:"0 auto",padding:0,listStyle:"none"},children:v.map(n=>e.jsx("li",{children:e.jsx(l,{...x({...t,content:n,headingLevel:2})})},n))})},h={parameters:{layout:"fullscreen"},render:t=>e.jsx("div",{style:{...N,display:"grid",gap:56},children:k.map(n=>e.jsx("div",{style:{display:"grid",gap:40},children:v.map(a=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:32},children:F.map(r=>e.jsx(I,{width:i[n],label:`${n} · ${j[a]} · ${r}`,children:e.jsx(l,{...x({...t,content:a,interactionState:r})})},r))},a))},n))})};function K(t){const n=t.replace(/\/\*[\s\S]*?\*\//g,""),a=[];let r=0,d=0,S=0,s="";for(let o=0;o<n.length;o++)n[o]==="{"?(r===0&&(s=n.slice(d,o).trim(),S=o+1),r++):n[o]==="}"&&(r--,r===0&&(s.startsWith("@container")&&a.push({condition:s.replace(/^@container\s+[\w-]+\s*/,""),body:n.slice(S,o)}),d=o+1));return a}const B=K(D);function O(t,n){const a=t.match(/width < (\d+)px/),r=t.match(/width >= (\d+)px/);return(!a||n<Number(a[1]))&&(!r||n>=Number(r[1]))}const W=t=>k.filter(n=>O(t,i[n])).join(" + "),T={"--ah-text":"title color","--ah-weight":"title weight"},f={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"8px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:"All breakpoints (Desktop base)"}),e.jsx(_,{css:D,aliases:T}),B.map(t=>e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"32px 0 0",fontSize:16,fontWeight:600,color:"var(--color-text-neutral-bold-default)"},children:[`${W(t.condition)} `,e.jsx("code",{style:{fontSize:12,fontWeight:400,color:"var(--color-text-neutral-subtle-default)"},children:t.condition})]}),e.jsx(_,{css:t.body,aliases:T})]},t.condition))]})},V={default:"default",hovered:"hover",pressed:"pressed",focused:"focus"},G={Desktop:.75,Mobile:1};function U(){const[t,n]=A.useState("article-free"),[a,r]=A.useState("Desktop"),[d,S]=A.useState("default"),s=i[a],o=[D,...B.filter(w=>O(w.condition,s)).map(w=>w.body),M].join(`
`);return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(E,{label:"Content",options:v,value:t,onChange:n}),e.jsx(E,{label:"Breakpoint",options:k,value:a,onChange:r}),e.jsx(E,{label:"InteractionState",options:F,value:d,onChange:S}),e.jsx(z,{css:o,aliases:T,group:t,state:V[d],scale:G[a],children:e.jsx(l,{style:{width:s,marginInline:-s/2},...x({content:t,href:"#",interactionState:d})})},`${a}-${t}`)]})}const b={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(U,{})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source},description:{story:"Figma default: Article Free · Desktop (608px frame). Switch `content` to see the other kinds.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 48
  }}>
      {CARD_FEED_CONTENTS.map(content => <Frame key={content} width={BREAKPOINTS.Desktop} label={CONTENT_NAMES[content]}>
          <CardFeed {...withSamples({
        ...args,
        content
      })} />
        </Frame>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Figma `Content`: the five kinds at the Desktop frame width.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 48
  }}>
      {CARD_FEED_CONTENTS.map(content => <div key={content} style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 48
    }}>
          {BREAKPOINT_NAMES.map(bp => <Frame key={bp} width={BREAKPOINTS[bp]} label={\`\${CONTENT_NAMES[content]} · \${bp} \${BREAKPOINTS[bp]}\`}>
              <CardFeed {...withSamples({
          ...args,
          content
        })} />
            </Frame>)}
        </div>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Figma `Breakpoint`: the same card in the Desktop (608) and Mobile (361) frames. The card switches on its own width.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'episode',
    authorHref: '#show',
    moreButtonProps: {
      'aria-haspopup': 'menu'
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"Secondary actions sit outside the card link: a linked byline (`authorHref`) and the more button.\nEverything else (avatar, label, date, description, picture) clicks through to the title link.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <ul style={{
    display: 'grid',
    gap: 48,
    maxWidth: BREAKPOINTS.Desktop,
    margin: '0 auto',
    padding: 0,
    listStyle: 'none'
  }}>
      {CARD_FEED_CONTENTS.map(content => <li key={content}>
          <CardFeed {...withSamples({
        ...args,
        content,
        headingLevel: 2
      })} />
        </li>)}
    </ul>
}`,...g.parameters?.docs?.source},description:{story:"A feed: cards stacked in a list (spacing is the page's, not the card's).",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    ...scroller,
    display: 'grid',
    gap: 56
  }}>
      {BREAKPOINT_NAMES.map(bp => <div key={bp} style={{
      display: 'grid',
      gap: 40
    }}>
          {CARD_FEED_CONTENTS.map(content => <div key={content} style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 32
      }}>
              {CARD_FEED_INTERACTION_STATES.map(state => <Frame key={state} width={BREAKPOINTS[bp]} label={\`\${bp} · \${CONTENT_NAMES[content]} · \${state}\`}>
                  <CardFeed {...withSamples({
            ...args,
            content,
            interactionState: state
          })} />
                </Frame>)}
            </div>)}
        </div>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:"All 30 Figma variants: Content (rows) × InteractionState (columns), Desktop then Mobile. `focused` (not in Figma) is the card ring.",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    }}>All breakpoints (Desktop base)</p>
      <CssTokens css={cardCss} aliases={ALIASES} />
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
}`,...f.parameters?.docs?.source},description:{story:"Properties and tokens read from CardFeed.module.css, resolved for the active theme: Desktop (base), then Mobile.",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <CardFeedInspect />
}`,...b.parameters?.docs?.source},description:{story:"Pick Content, Breakpoint and InteractionState; see real measurements and the tokens that apply.",...b.parameters?.docs?.description}}};const Y=["Default","Contents","Breakpoints","SecondaryActions","Feed","States","Tokens","Inspect"],ne=Object.freeze(Object.defineProperty({__proto__:null,Breakpoints:m,Contents:p,Default:c,Feed:g,Inspect:b,SecondaryActions:u,States:h,Tokens:f,__namedExportsOrder:Y,default:H},Symbol.toStringTag,{value:"Module"}));export{m as B,ne as C,c as D,g as F,b as I,u as S,f as T,p as a,h as b};
