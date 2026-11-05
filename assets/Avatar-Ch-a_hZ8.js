import{u as c,j as e,M as l,C as n,a as t,A as a}from"./iframe-BaE-r_tL.js";import{A as r,D as d,T as h,S as x,a as j,F as p,I as m,b as g,c as u,H as f,P as w,d as b,e as v}from"./Avatar.stories-BjdUEmtg.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Avatar-DfOPemCI.js";import"./index-DO2tlVwn.js";function o(i){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(s.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(s.p,{children:[`A round (or, for shows, rounded-square) picture that stands for a profile, a host, a person or a show: in account menus, profile switchers, host lists and show rows.
It has five types, eleven sizes and a selected ring. Image types fall back to initials, then to the Daily Wire mark, when there is no picture.
Spec reviewed against Figma `,e.jsx(s.code,{children:"Avatar"}),` (219:11928, doc section 10:1812, page "↳ Profile & Hosts"). Figma's usage note: the profile picture shows the image the user picked, currently limited to color options.
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Avatar } from '@henriquemenezzo/dailywire-ds/components/avatar'
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Avatar type="initials" size="md" initials="BS" />
<Avatar type="host" size="lg" src={host.photoUrl} initials="BS" alt="Ben Shapiro" />
<Avatar type="show" size="sm" src={show.thumbnailUrl} alt={show.title} />
<Avatar type="dw-plus" size="2xsm" selected />
`})}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t,{of:d}),`
`,e.jsxs(s.p,{children:["The defaults (",e.jsx(s.code,{children:'type="initials"'}),", ",e.jsx(s.code,{children:'size="4xsm"'}),") are the component's; Figma's default variant is ",e.jsx(s.code,{children:"DW+ · 4xsm"}),`.
Avatar renders a `,e.jsx(s.code,{children:"<span>"})," and is not interactive. To make it act (open the account menu, switch profile), put it inside a ",e.jsx(s.code,{children:"Button"}),", ",e.jsx(s.code,{children:"IconButton"})," or link, which owns the focus ring and the touch target."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"types",children:"Types"}),`
`,e.jsxs(s.p,{children:["Figma's ",e.jsx(s.code,{children:"Type"})," axis is the ",e.jsx(s.code,{children:"type"})," prop:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"DW+"})," (",e.jsx(s.code,{children:"dw-plus"}),") — the Daily Wire mark (",e.jsx(s.code,{children:"Brand / Logo › DailyWire Logo/Icon"}),") on a neutral disc. Ignores ",e.jsx(s.code,{children:"src"})," and ",e.jsx(s.code,{children:"initials"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Initials"})," (",e.jsx(s.code,{children:"initials"}),") — one or two letters (Figma text property ",e.jsx(s.code,{children:"Initials"}),', default "AA") on a purple disc.']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Hosts"})," (",e.jsx(s.code,{children:"host"}),") — a host photo (Figma nests ",e.jsx(s.code,{children:"Host Image"}),"), circle."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"People"})," (",e.jsx(s.code,{children:"person"}),") — a person photo (Figma nests ",e.jsx(s.code,{children:"Person Image"}),"), circle."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Shows"})," (",e.jsx(s.code,{children:"show"}),") — a show thumbnail (Figma nests ",e.jsx(s.code,{children:"Shows Thumbnail"}),"), ",e.jsx(s.strong,{children:"rounded square"}),"."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Photos are drawn with ",e.jsx(s.code,{children:"object-fit: cover"}),", centred, as Figma's ",e.jsx(s.code,{children:"FILL"})," image fills."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(s.p,{children:["Eleven sizes. The initials use the ",e.jsx(s.code,{children:"label/400/*"})," text styles up to ",e.jsx(s.code,{children:"md"}),", then ",e.jsx(s.code,{children:"heading/400/*"}),":"]}),`
`,e.jsxs(s.p,{children:[`| Size | px | Initials | Font size | DW+ logo width | Shows radius |
|------|----|----------|-----------|----------------|--------------|
| `,e.jsx(s.code,{children:"4xsm"})," | 20 | ",e.jsx(s.code,{children:"label/400/xs"})," | ",e.jsx(s.code,{children:"--font-size-xxs"})," (10) | 14 | ",e.jsx(s.code,{children:"--border-radius-sm"}),` (4) |
| `,e.jsx(s.code,{children:"3xsm"})," | 24 | ",e.jsx(s.code,{children:"label/400/sm"})," | ",e.jsx(s.code,{children:"--font-size-xs"})," (12) | 14 | ",e.jsx(s.code,{children:"--border-radius-sm"}),` (4) |
| `,e.jsx(s.code,{children:"2xsm"})," | 32 | ",e.jsx(s.code,{children:"label/400/md"})," | ",e.jsx(s.code,{children:"--font-size-sm"})," (14) | 20 | ",e.jsx(s.code,{children:"--border-radius-sm"}),` (4) |
| `,e.jsx(s.code,{children:"xsm"})," | 40 | ",e.jsx(s.code,{children:"label/400/lg"})," | ",e.jsx(s.code,{children:"--font-size-md"})," (16) | 24 | ",e.jsx(s.code,{children:"--border-radius-md"}),` (8) |
| `,e.jsx(s.code,{children:"sm"})," | 48 | ",e.jsx(s.code,{children:"label/400/xl"})," | ",e.jsx(s.code,{children:"--font-size-lg"})," (20) | 32 | ",e.jsx(s.code,{children:"--border-radius-md"}),` (8) |
| `,e.jsx(s.code,{children:"md"})," | 56 | ",e.jsx(s.code,{children:"label/400/xl"})," | ",e.jsx(s.code,{children:"--font-size-lg"})," (20) | 32 | ",e.jsx(s.code,{children:"--border-radius-md"}),` (8) |
| `,e.jsx(s.code,{children:"lg"})," | 64 | ",e.jsx(s.code,{children:"heading/400/md"})," | ",e.jsx(s.code,{children:"--font-size-xl"})," (24) | 44 | ",e.jsx(s.code,{children:"--border-radius-lg"}),` (12) |
| `,e.jsx(s.code,{children:"xl"})," | 72 | ",e.jsx(s.code,{children:"heading/400/md"})," | ",e.jsx(s.code,{children:"--font-size-xl"})," (24) | 44 | ",e.jsx(s.code,{children:"--border-radius-lg"}),` (12) |
| `,e.jsx(s.code,{children:"2xl"})," | 80 | ",e.jsx(s.code,{children:"heading/400/lg"})," | ",e.jsx(s.code,{children:"--font-size-2xl"})," (32) | 52 | ",e.jsx(s.code,{children:"--border-radius-lg"}),` (12) |
| `,e.jsx(s.code,{children:"3xl"})," | 96 | ",e.jsx(s.code,{children:"heading/400/lg"})," | ",e.jsx(s.code,{children:"--font-size-2xl"})," (32) | 52 (Figma 50) | ",e.jsx(s.code,{children:"--border-radius-xl"}),` (16) |
| `,e.jsx(s.code,{children:"4xl"})," | 100 | ",e.jsx(s.code,{children:"heading/400/lg"})," | ",e.jsx(s.code,{children:"--font-size-2xl"})," (32) | 52 (Figma 54) | ",e.jsx(s.code,{children:"--border-radius-xl"})," (16) |"]}),`
`,e.jsxs(s.p,{children:["Every other type is a full circle (",e.jsx(s.code,{children:"--border-radius-full"}),")."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"selected",children:"Selected"}),`
`,e.jsxs(s.p,{children:["Figma ",e.jsx(s.code,{children:"Selected=Yes"})," draws an ",e.jsx(s.strong,{children:"outside stroke with no gap"})," in ",e.jsx(s.code,{children:"color/border/inverse/bold"}),` (dark in Light, light in Dark).
The web component draws it as a 1px `,e.jsx(s.code,{children:"outline"})," (",e.jsx(s.code,{children:"--border-default"}),") at every size; see the token notes below."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"selected"})," is visual only. The control that holds the avatar must expose the state to assistive technology (",e.jsx(s.code,{children:"aria-pressed"}),", ",e.jsx(s.code,{children:"aria-current"}),", ",e.jsx(s.code,{children:"aria-selected"}),")."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"fallback",children:"Fallback"}),`
`,e.jsxs(s.p,{children:["When an image type has no ",e.jsx(s.code,{children:"src"}),", or the image fails to load, the avatar draws ",e.jsx(s.code,{children:"initials"}),` on the purple disc. Without initials it draws the Daily Wire mark.
`,e.jsx(s.code,{children:'type="initials"'})," with empty ",e.jsx(s.code,{children:"initials"})," also falls back to the mark. A new ",e.jsx(s.code,{children:"src"}),` gets a fresh attempt.
The element exposes what it draws as `,e.jsx(s.code,{children:'data-content="image" | "initials" | "mark"'}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick type, size, selected and (for image types) a sample or missing image. The avatar is drawn at 2× with its real measurements; the panel lists the tokens that apply — hover a token to see where it acts."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["Avatar is a static display element: Figma draws ",e.jsx(s.strong,{children:"no hover, pressed, focus or disabled"})," states, only ",e.jsx(s.code,{children:"Selected"}),`, so no others are implemented.
This grid shows every type and the image fallbacks × Selected No / Yes. Use the `,e.jsx(s.code,{children:"size"})," control to switch sizes."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"figma-matrix",children:"Figma matrix"}),`
`,e.jsx(s.p,{children:"The full Figma set, 110 variants: Size rows × Type, with Selected No on the left and Yes on the right, as in Figma."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"image-sources",children:"Image sources"}),`
`,e.jsxs(s.p,{children:["The image types nest image-swap sets in Figma. They are ",e.jsx(s.strong,{children:"placeholders, not UI"}),": in the product, ",e.jsx(s.code,{children:"src"}),` is the real host photo, profile picture or show artwork.
For these docs each variant was exported at 200 × 200 px (2× the largest avatar, `,e.jsx(s.code,{children:"4xl"}),"), with its Figma crop, into ",e.jsx(s.code,{children:"components/avatar/samples/"}),`.
`,e.jsx(s.code,{children:"components/avatar/samples/index.ts"})," exports them as ",e.jsx(s.code,{children:"HOST_IMAGES"}),", ",e.jsx(s.code,{children:"PERSON_IMAGES"})," and ",e.jsx(s.code,{children:"SHOW_THUMBNAILS"})," (Figma variant name → URL) for stories and docs ",e.jsx(s.strong,{children:"only"}),": they are sample content, not package API, and are not exported from ",e.jsx(s.code,{children:"components/avatar"}),"."]}),`
`,e.jsx(s.h3,{id:"host-image",children:"Host Image"}),`
`,e.jsxs(s.p,{children:["Figma ",e.jsx(s.code,{children:"Host Image"})," (10:1794), property ",e.jsx(s.code,{children:"Background"}),", 12 variants. Used by ",e.jsx(s.code,{children:'type="host"'}),"."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h3,{id:"person-image",children:"Person Image"}),`
`,e.jsxs(s.p,{children:["Figma ",e.jsx(s.code,{children:"Person Image"})," (8484:27270), property ",e.jsx(s.code,{children:"Person"}),", 10 variants. Used by ",e.jsx(s.code,{children:'type="person"'}),"."]}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(s.h3,{id:"shows-thumbnail",children:"Shows Thumbnail"}),`
`,e.jsxs(s.p,{children:["Figma ",e.jsx(s.code,{children:"Shows Thumbnail"})," (12354:203323), property ",e.jsx(s.code,{children:"Show"}),", 9 variants. Used by ",e.jsx(s.code,{children:'type="show"'}),"."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:[`| Requirement | Implementation |
|---|---|
| Semantics | `,e.jsx(s.code,{children:"<span>"}),"; with ",e.jsx(s.code,{children:"alt"})," it is ",e.jsx(s.code,{children:'role="img"'})," + ",e.jsx(s.code,{children:"aria-label"}),`, so one name is announced whatever is drawn (photo, initials or mark) |
| Decorative use | Without `,e.jsx(s.code,{children:"alt"})," nothing is announced (inner image ",e.jsx(s.code,{children:'alt=""'}),", initials and mark ",e.jsx(s.code,{children:"aria-hidden"}),`). Use this when a visible name sits next to the avatar |
| Selected | Visual only; the parent control exposes the state |
| Interaction | None: not focusable, no touch target of its own. Wrap it in a `,e.jsx(s.code,{children:"Button"})," / ",e.jsx(s.code,{children:"IconButton"}),` / link to make it act |
| Contrast | Initials `,e.jsx(s.code,{children:"--color-text-always-light"})," on the purple disc; the mark uses ",e.jsx(s.code,{children:"--color-icon-neutral-bold-default"})," on ",e.jsx(s.code,{children:"--color-background-neutral-subtlest-default"})," |"]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"Avatar.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Token notes (Figma values without a token):"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Initials disc: Figma raw ",e.jsx(s.code,{children:"#774DB2"})," (no variable). Uses ",e.jsx(s.code,{children:"--primitive-color-purple-600"})," (",e.jsx(s.code,{children:"#7c3aed"}),"), the closest purple in lightness that keeps AA contrast with the light initials."]}),`
`,e.jsxs(s.li,{children:["Photo placeholder (Hosts / People / Shows): Figma raw ",e.jsx(s.code,{children:"#292929"})," (no variable). Uses ",e.jsx(s.code,{children:"--color-background-neutral-subtlest-default"}),", the variable DW+ binds for the same color."]}),`
`,e.jsxs(s.li,{children:["Selected ring: Figma stroke 0.5 (",e.jsx(s.code,{children:"4xsm"}),"), 0.75 (",e.jsx(s.code,{children:"3xsm"}),"–",e.jsx(s.code,{children:"xl"}),") and 1px (",e.jsx(s.code,{children:"2xl"}),"–",e.jsx(s.code,{children:"4xl"}),"), not bound. There is no sub-pixel border token, so ",e.jsx(s.code,{children:"--border-default"})," (1px) is used at every size."]}),`
`,e.jsxs(s.li,{children:["Size ",e.jsx(s.code,{children:"xl"})," 72, ",e.jsx(s.code,{children:"2xl"})," 80, ",e.jsx(s.code,{children:"3xl"})," 96: no ",e.jsx(s.code,{children:"--size-*"})," token, ",e.jsx(s.code,{children:"--primitive-dimension-dimension-18 · 20 · 24"})," used. Size ",e.jsx(s.code,{children:"4xl"})," 100: no token, composed as ",e.jsx(s.code,{children:"--primitive-dimension-dimension-24 + --primitive-dimension-dimension-1"}),"."]}),`
`,e.jsxs(s.li,{children:["DW+ logo widths 14 / 44 / 52: primitive dimensions. Figma draws 50px at ",e.jsx(s.code,{children:"3xl"})," and 54px at ",e.jsx(s.code,{children:"4xl"})," (no token): 52px is used for both."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(a,{of:r}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"type"})," | ",e.jsx(s.code,{children:"'dw-plus' \\| 'initials' \\| 'host' \\| 'person' \\| 'show'"})," | ",e.jsx(s.code,{children:"'initials'"})," | Figma ",e.jsx(s.code,{children:"Type"}),` |
| `,e.jsx(s.code,{children:"size"})," | ",e.jsx(s.code,{children:"'4xsm' \\| '3xsm' \\| '2xsm' \\| 'xsm' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl' \\| '2xl' \\| '3xl' \\| '4xl'"})," | ",e.jsx(s.code,{children:"'4xsm'"}),` | 20 → 100 px |
| `,e.jsx(s.code,{children:"selected"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"})," | Figma ",e.jsx(s.code,{children:"Selected"}),`: outside ring |
| `,e.jsx(s.code,{children:"src"})," | ",e.jsx(s.code,{children:"string"})," | — | Image for ",e.jsx(s.code,{children:"host"}),", ",e.jsx(s.code,{children:"person"}),", ",e.jsx(s.code,{children:"show"}),` |
| `,e.jsx(s.code,{children:"alt"})," | ",e.jsx(s.code,{children:"string"}),` | — | Accessible name; omit for a decorative avatar |
| `,e.jsx(s.code,{children:"initials"})," | ",e.jsx(s.code,{children:"string"})," | — | Figma ",e.jsx(s.code,{children:"Initials"}),`; also the image fallback |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<span>"})," attributes via spread (",e.jsx(s.code,{children:"id"}),", ",e.jsx(s.code,{children:"title"}),", ",e.jsx(s.code,{children:"aria-*"}),`, etc.).
Exports: `,e.jsx(s.code,{children:"Avatar"}),", ",e.jsx(s.code,{children:"AVATAR_TYPES"}),", ",e.jsx(s.code,{children:"AVATAR_SIZES"}),", ",e.jsx(s.code,{children:"AvatarProps"}),", ",e.jsx(s.code,{children:"AvatarType"}),", ",e.jsx(s.code,{children:"AvatarSize"}),"."]}),`
`]})]})}function P(i={}){const{wrapper:s}={...c(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(o,{...i})}):o(i)}export{P as default};
