import{u as d,j as e,M as i,C as n,A as a}from"./iframe-BaE-r_tL.js";import{A as o,D as c,a as l,b as h,S as p,I as x,T as j}from"./AppStoreBadge.stories-4RfoRor_.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";function t(r){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(s.h1,{id:"app-store-badge",children:"App Store Badge"}),`
`,e.jsxs(s.p,{children:[`Official "Download on …" badge for each store where the app ships, rendered as a link.
Its accessible name is the badge's own text (for example `,e.jsx(s.strong,{children:'"Download on the App Store"'}),"); pass ",e.jsx(s.code,{children:"aria-label"}),` to change it.
Spec reviewed against Figma `,e.jsx(s.code,{children:"App Store Buttons"})," (7761:19420), axes ",e.jsx(s.code,{children:"Company"})," × ",e.jsx(s.code,{children:"Style"})," (Preferred / Alternative)."]}),`
`,e.jsxs(s.p,{children:["The artwork is ",e.jsx(s.strong,{children:"not redrawn"}),": each badge is the Figma export, stored in ",e.jsx(s.code,{children:"icons/store-badges/<store>-<style>.svg"})," and loaded as a file (not through SVGR), so the brand colors are never replaced with ",e.jsx(s.code,{children:"currentColor"}),`.
Store guidelines do not allow changing the badge, so it does not follow the Light/Dark theme — pick `,e.jsx(s.code,{children:"preferred"})," (dark badge) or ",e.jsx(s.code,{children:"alternative"})," (light badge) for the surface it sits on."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { AppStoreBadge } from '@henriquemenezzo/dailywire-ds/components/app-store-badge'

<AppStoreBadge store="google-play" href="https://play.google.com/store/apps/details?id=…" target="_blank" />
`})}),`
`,e.jsxs(s.p,{children:["The SVG files are imported as assets; the consumer bundler must resolve ",e.jsx(s.code,{children:"*.svg"}),` imports to URLs (Vite and webpack 5 asset modules do this by default).
With `,e.jsx(s.code,{children:'target="_blank"'})," the link gets ",e.jsx(s.code,{children:'rel="noopener noreferrer"'})," unless you pass ",e.jsx(s.code,{children:"rel"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(s.p,{children:["Eight stores (",e.jsx(s.code,{children:"store"}),") × two styles (",e.jsx(s.code,{children:"badgeStyle"}),"):"]}),`
`,e.jsxs(s.p,{children:["| ",e.jsx(s.code,{children:"store"}),` | Accessible name |
|---|---|
| `,e.jsx(s.code,{children:"app-store"}),` | Download on the App Store |
| `,e.jsx(s.code,{children:"mac-app-store"}),` | Download on the Mac App Store |
| `,e.jsx(s.code,{children:"amazon-appstore"}),` | Available at Amazon Appstore |
| `,e.jsx(s.code,{children:"galaxy-store"}),` | Available on Galaxy Store |
| `,e.jsx(s.code,{children:"huawei-appgallery"}),` | Explore it on AppGallery |
| `,e.jsx(s.code,{children:"f-droid"}),` | Get it on F-Droid |
| `,e.jsx(s.code,{children:"google-play"}),` | Get it on Google Play |
| `,e.jsx(s.code,{children:"microsoft-store"})," | Get it from Microsoft |"]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:["40px tall (",e.jsx(s.code,{children:"--size-2xl"}),"), width from the artwork (112–156px). An invisible area extends the touch target to ",e.jsx(s.code,{children:"--touch-target-min"})," (44px)."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["Figma draws one state. Hover and pressed keep the artwork unchanged (store guidelines); focus adds the DS ring; disabled removes the link and dims the artwork with ",e.jsx(s.code,{children:"--opacity-disabled"}),`.
Hover, pressed and focus are forced for review:`]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"focus",children:"Focus"}),`
`,e.jsxs(s.p,{children:["Keyboard focus shows the DS ring: ",e.jsx(s.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(s.code,{children:"--focus-ring-width"}),", with a transparent ",e.jsx(s.code,{children:"--focus-ring-offset"}),", following the badge's 8px corners (",e.jsx(s.code,{children:"--border-radius-md"}),")."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick store, style and state. The badge is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"AppStoreBadge.module.css"})," with the token it uses, resolved for the active theme:"]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(a,{of:o}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"store"})," | ",e.jsx(s.code,{children:"'app-store' \\| 'mac-app-store' \\| 'amazon-appstore' \\| 'galaxy-store' \\| 'huawei-appgallery' \\| 'f-droid' \\| 'google-play' \\| 'microsoft-store'"})," | ",e.jsx(s.code,{children:"'app-store'"})," | Store (Figma ",e.jsx(s.code,{children:"Company"}),`) |
| `,e.jsx(s.code,{children:"badgeStyle"})," | ",e.jsx(s.code,{children:"'preferred' \\| 'alternative'"})," | ",e.jsx(s.code,{children:"'preferred'"})," | Dark (preferred) or light (alternative) badge (Figma ",e.jsx(s.code,{children:"Style"}),`) |
| `,e.jsx(s.code,{children:"href"})," | ",e.jsx(s.code,{children:"string"}),` | — | Store listing URL |
| `,e.jsx(s.code,{children:"disabled"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"}),` | Renders the badge without a link, dimmed |
| `,e.jsx(s.code,{children:"aria-label"})," | ",e.jsx(s.code,{children:"string"}),` | badge text | Accessible name |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<a>"})," attributes via spread (",e.jsx(s.code,{children:"target"}),", ",e.jsx(s.code,{children:"rel"}),", ",e.jsx(s.code,{children:"onClick"}),", etc.)."]}),`
`]})]})}function k(r={}){const{wrapper:s}={...d(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{k as default};
