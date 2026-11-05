import{u as d,j as e,M as r,C as n,a,A as l}from"./iframe-BaE-r_tL.js";import{D as t,a as c,A as h,C as x,I as m,S as j,T as u}from"./TopDiscussions.stories-B_OnsUkR.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./index-DO2tlVwn.js";function o(i){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
`,e.jsx(s.h1,{id:"topdiscussions",children:"TopDiscussions"}),`
`,e.jsxs(s.p,{children:[`A list of discussions, each with a selected image, an optional strip of thumbnails that switches it, and a title that links to the discussion.
Spec reviewed against Figma `,e.jsx(s.code,{children:"Top Discussions"})," (153:7463, axis ",e.jsx(s.code,{children:"Additional Images"}),' Yes | No), group "Featured Article" (8413:56894) of section "Article" (8413:56868), page "↳ Content". The Figma doc marks it ',e.jsx(s.strong,{children:"In Progress"}),`.
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { TopDiscussions } from '@henriquemenezzo/dailywire-ds/components/top-discussions'
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<TopDiscussions
  items={[
    {
      id: 'd1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
      href: '/discussions/d1',
      images: [{ src: a, alt: '…' }, { src: b, alt: '…' }, { src: c, alt: '…' }, { src: d, alt: '…' }],
    },
    { id: 'd2', title: '…', href: '/discussions/d2', images: [{ src: e, alt: '…' }] },
  ]}
/>
`})}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(s.p,{children:"Each item is one Figma variant; the list stacks them 16px apart (the spacing of the two variants in the Figma set). Width comes from the parent (Figma 369px)."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"additional-images",children:"Additional Images"}),`
`,e.jsxs(s.p,{children:["Figma ",e.jsx(s.code,{children:"Additional Images"})," is derived from the data: with ",e.jsx(s.strong,{children:"two or more images"})," the thumbnail strip (equal-width thumbnails, 4px apart, 89:46) is drawn 4px above the selected image (369:170); with ",e.jsx(s.strong,{children:"one image"}),", the image alone. The selected thumbnail has a 1px inside stroke. Clicking a thumbnail switches the selected image."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsxs(s.p,{children:["The title (",e.jsx(s.code,{children:"body/400/sm"}),") wraps to 3 lines, then truncates. Without ",e.jsx(s.code,{children:"href"})," the item is static."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick the Figma axis. The list is drawn at 1.25× with its real measurements; the panel lists the tokens that apply — hover a token to see where it acts."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["Top Discussions is static content: Figma draws ",e.jsx(s.strong,{children:"no hover, pressed, focus or disabled"})," states, so none are invented. Keyboard focus uses the DS focus ring (",e.jsx(s.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(s.code,{children:"--focus-ring-width"}),", ",e.jsx(s.code,{children:"--focus-ring-offset"}),`) on a thumbnail, or around the whole item when its link is focused.
Both variants, with each thumbnail selected:`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:[`| Requirement | Implementation |
|---|---|
| List | `,e.jsx(s.code,{children:'<ul aria-label="Top discussions">'}),", one ",e.jsx(s.code,{children:"<li>"}),` per discussion |
| Link | The title `,e.jsx(s.code,{children:"<a>"})," is the item's only link; its ",e.jsx(s.code,{children:"::after"}),` covers the item, so the selected image is part of the hit area |
| No nested controls | Thumbnails are `,e.jsx(s.code,{children:"<button aria-pressed>"})," in a labelled group (",e.jsx(s.code,{children:"imagesLabel"}),"), stacked above the link, never inside it; names come from ",e.jsx(s.code,{children:"imageLabel(index, total)"}),` ("Show image 2 of 4") |
| Heading | Each title is an `,e.jsx(s.code,{children:"h3"})," by default (",e.jsx(s.code,{children:"headingLevel"}),` 2–6) |
| Images | The selected image uses the item's `,e.jsx(s.code,{children:"alt"}),` (decorative when omitted); thumbnail images are decorative (the button carries the name) |
| Touch target | Thumbnails are at least `,e.jsx(s.code,{children:"--touch-target-min"})," tall |"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"TopDiscussions.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"legacy-figma-variables",children:"Legacy Figma variables"}),`
`,e.jsxs(s.p,{children:["This Figma set is still bound to the legacy ",e.jsx(s.code,{children:"[Old] 3.0 Components"})," and ",e.jsx(s.code,{children:"[Old] 2.0 Semantic Color"})," variables (dark-only). Each one maps to the current token:"]}),`
`,e.jsxs(s.p,{children:[`| Figma (legacy) | Value | Token used |
|---|---|---|
| `,e.jsx(s.code,{children:"Top Discussions/Spacing"})," | 12 | ",e.jsx(s.code,{children:"--spacing-lg"}),` |
| `,e.jsx(s.code,{children:"Top Discussions/Image Spacing"})," | 4 | ",e.jsx(s.code,{children:"--spacing-xs"}),` |
| `,e.jsx(s.code,{children:"Bases/images-radius"})," (thumbnails) | 2 | ",e.jsx(s.code,{children:"--primitive-dimension-dimension-0-5"}),` (no 2px semantic radius) |
| `,e.jsx(s.code,{children:"Bases/Corner Radius/radius-xs (4)"})," (selected image) | 4 | ",e.jsx(s.code,{children:"--border-radius-sm"}),` |
| `,e.jsx(s.code,{children:"Stroke/Default/Base"})," (selected thumbnail) | white | ",e.jsx(s.code,{children:"--color-border-inverse-bold-default"}),` |
| `,e.jsx(s.code,{children:"Text/Default/Base"})," (title) | white | ",e.jsx(s.code,{children:"--color-text-neutral-bold-default"}),` |
| Title 14px Regular / 150% / letter spacing 2%, no text style | — | `,e.jsx(s.code,{children:"body/400/sm"})," (letter spacing ",e.jsx(s.code,{children:"--letter-spacing-default"}),") |"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(l,{of:t}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"items"})," | ",e.jsx(s.code,{children:"TopDiscussionItem[]"}),` | — | The discussions |
| `,e.jsx(s.code,{children:"headingLevel"})," | ",e.jsx(s.code,{children:"2 \\| 3 \\| 4 \\| 5 \\| 6"})," | ",e.jsx(s.code,{children:"3"}),` | Heading element of each title |
| `,e.jsx(s.code,{children:"imagesLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Images'"}),` | Accessible name of each thumbnail strip |
| `,e.jsx(s.code,{children:"imageLabel"})," | ",e.jsx(s.code,{children:"(index, total) => string"})," | ",e.jsx(s.code,{children:"Show image {index} of {total}"}),` | Accessible name of a thumbnail |
| `,e.jsx(s.code,{children:"aria-label"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Top discussions'"}),` | Accessible name of the list |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class on the list |"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"TopDiscussionItem"}),":"]}),`
`,e.jsxs(s.p,{children:[`| Field | Type | Description |
|------|------|-------------|
| `,e.jsx(s.code,{children:"id"})," | ",e.jsx(s.code,{children:"string?"}),` | Stable React key |
| `,e.jsx(s.code,{children:"title"})," | ",e.jsx(s.code,{children:"string"}),` | Figma "Title" (3 lines) |
| `,e.jsx(s.code,{children:"href"})," | ",e.jsx(s.code,{children:"string?"}),` | Discussion URL; without it the item is static |
| `,e.jsx(s.code,{children:"images"})," | ",e.jsx(s.code,{children:"{ src: string; alt?: string }[]"}),` | First selected; 2+ draws the thumbnail strip |
| `,e.jsx(s.code,{children:"defaultSelectedImage"})," | ",e.jsx(s.code,{children:"number?"})," | Index selected first (default 0) |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<ul>"})," attributes via spread (",e.jsx(s.code,{children:"id"}),", ",e.jsx(s.code,{children:"style"}),", ",e.jsx(s.code,{children:"data-*"}),", …). ",e.jsx(s.code,{children:"ref"})," points to the ",e.jsx(s.code,{children:"<ul>"}),"."]}),`
`]})]})}function v(i={}){const{wrapper:s}={...d(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(o,{...i})}):o(i)}export{v as default};
