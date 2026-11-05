import{u as i,j as e,M as d,C as c,A as l}from"./iframe-BaE-r_tL.js";import{I as o,D as x,S as h,G as t,T as a}from"./Icon.stories-C7NS5f4H.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./TokenTable-Dq559OOm.js";import"./Icon-D8yVe6yW.js";function r(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o}),`
`,e.jsx(n.h1,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["SVG icon component with lazy loading. Icons load on demand via ",e.jsx(n.code,{children:"React.lazy"})," and are rendered as React components (",e.jsx(n.code,{children:"vite-plugin-svgr"}),`).
Size maps to `,e.jsx(n.code,{children:"--size-*"})," tokens in ",e.jsx(n.code,{children:"styles/tokens.css"}),". Color defaults to ",e.jsx(n.code,{children:"currentColor"})," so parents (e.g. ",e.jsx(n.code,{children:"IconButton"}),") control appearance."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Icon } from '@henriquemenezzo/dailywire-ds/components/icon'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Icon name="chevron-right" size="lg" />
`})}),`
`,e.jsx(c,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n.p,{children:"Nine sizes mapped to CSS tokens:"}),`
`,e.jsx(c,{of:h}),`
`,e.jsxs(n.p,{children:[`| Size | Token | Value |
|------|-------|-------|
| `,e.jsx(n.code,{children:"xs"})," | ",e.jsx(n.code,{children:"--size-xs"}),` | 12px |
| `,e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"--size-sm"}),` | 16px |
| `,e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"--size-md"}),` | 20px |
| `,e.jsx(n.code,{children:"lg"})," | ",e.jsx(n.code,{children:"--size-lg"}),` | 24px |
| `,e.jsx(n.code,{children:"xl"})," | ",e.jsx(n.code,{children:"--size-xl"}),` | 28px |
| `,e.jsx(n.code,{children:"2xl"})," | ",e.jsx(n.code,{children:"--size-2xl"}),` | 32px |
| `,e.jsx(n.code,{children:"3xl"})," | ",e.jsx(n.code,{children:"--size-3xl"}),` | 40px |
| `,e.jsx(n.code,{children:"4xl"})," | ",e.jsx(n.code,{children:"--size-4xl"}),` | 48px |
| `,e.jsx(n.code,{children:"5xl"})," | ",e.jsx(n.code,{children:"--size-5xl"})," | 56px |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"gallery",children:"Gallery"}),`
`,e.jsx(n.p,{children:"Full icon catalog (each cell shows the icon name):"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(l,{of:o}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"name"})," | ",e.jsx(n.code,{children:"IconName"})," | ",e.jsx(n.em,{children:"(required)"}),` | Icon name (see Gallery) |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| '2xl' \\| '3xl' \\| '4xl' \\| '5xl'"})," | ",e.jsx(n.code,{children:"'lg'"})," | Size (",e.jsx(n.code,{children:"--size-*"}),`) |
| `,e.jsx(n.code,{children:"color"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'currentColor'"}),` | CSS color value |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]})]})}function f(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{f as default};
