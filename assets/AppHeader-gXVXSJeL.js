import{u as d,j as e,M as r,C as i,a as l,A as a}from"./iframe-BaE-r_tL.js";import{A as t,D as s,C as h,V as x,B as j,a as p,I as g,S as m,T as u}from"./AppHeader.stories-bwxVjYrt.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./IconButton-C0K0oZpp.js";import"./Icon-D8yVe6yW.js";import"./dailywire-logo-CTHtym9l.js";function c(o){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
`,e.jsx(n.h1,{id:"appheader",children:"AppHeader"}),`
`,e.jsxs(n.p,{children:[`The in-app top bar: either the Daily Wire logo, or a leading action, a centered screen title and a trailing action.
It has two styles (filled or transparent), two contents (logo or actions) and adapts to Phone and Tablet widths on its own.
Spec reviewed against Figma `,e.jsx(n.code,{children:"Header (App)"}),' (10676:26354, page "↳ Navigation"). The actions are the DS ',e.jsx(n.code,{children:"IconButton"}),`.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { AppHeader } from '@henriquemenezzo/dailywire-ds/components/app-header'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<AppHeader />

<AppHeader
  content="actions"
  title="Saved episodes"
  leadingAction={{ icon: 'chevron-left', label: 'Back', onClick: goBack }}
  trailingAction={{ icon: 'share-2', label: 'Share', onClick: share }}
/>

<AppHeader variant="transparent" content="actions" leadingAction={{ icon: 'chevron-left', label: 'Back' }} />
`})}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(l,{of:s}),`
`,e.jsxs(n.p,{children:["The defaults (",e.jsx(n.code,{children:'variant="filled"'}),", ",e.jsx(n.code,{children:'content="logo"'}),`) match the Figma component defaults.
AppHeader renders a `,e.jsx(n.code,{children:"<header>"}),", so at the top level of a page it is the ",e.jsx(n.code,{children:"banner"})," landmark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"content",children:"Content"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"Content"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Logo"})," (",e.jsx(n.code,{children:'content="logo"'}),") — the Daily Wire lockup (",e.jsx(n.code,{children:"Brand / Logo"}),", Lockup Full), left aligned. No actions, no title."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon Button"})," (",e.jsx(n.code,{children:'content="actions"'}),") — a leading and a trailing ",e.jsx(n.code,{children:"IconButton"}),` (minimal · primary · md, 40px) with the title centered on the bar.
`,e.jsx(n.code,{children:"leadingAction"}),", ",e.jsx(n.code,{children:"trailingAction"})," and ",e.jsx(n.code,{children:"title"})," are used only with this content."]}),`
`]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"Style"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Filled"})," — ",e.jsx(n.code,{children:"--color-background-neutral-bold-default"})," surface, follows the theme."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transparent"})," (Figma ",e.jsx(n.code,{children:"WithoutBg"}),") — no fill: for screens where the header sits on the content (artwork, hero media). The logo, title and icons keep their neutral-bold colors, so check contrast against what is behind."]}),`
`]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"Breakpoint"})," is not a prop. The header is a CSS size container and reads ",e.jsx(n.strong,{children:"its own width"}),`:
below 768px it uses the Phone values, from 768px the Tablet ones.`]}),`
`,e.jsxs(n.p,{children:[`| | Phone | Tablet (≥ 768px) |
|---|---|---|
| Logo padding | `,e.jsx(n.code,{children:"--spacing-xl"})," (16) all sides | ",e.jsx(n.code,{children:"--spacing-xl"})," (16) top / bottom · ",e.jsx(n.code,{children:"--spacing-2xl"}),` (20) sides |
| Actions padding | `,e.jsx(n.code,{children:"--spacing-md"})," (8) all sides | ",e.jsx(n.code,{children:"--spacing-md"}),` (8) all sides |
| Title | `,e.jsx(n.code,{children:"label/600/md"})," (",e.jsx(n.code,{children:"--font-size-sm"}),", 14px) | ",e.jsx(n.code,{children:"label/600/lg"})," (",e.jsx(n.code,{children:"--font-size-md"}),", 16px) |"]}),`
`,e.jsxs(n.p,{children:["Logo bar: 16 + 12 + 16 = 44px. Actions bar: 8 + 40 + 8 = 56px (",e.jsx(n.code,{children:"min-height: --size-4xl"}),", kept when actions are hidden)."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"actions-and-title",children:"Actions and title"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"Show Leading Action"}),", ",e.jsx(n.code,{children:"Show Trailing Action"})," and ",e.jsx(n.code,{children:"Show Text"})," map to passing or omitting ",e.jsx(n.code,{children:"leadingAction"}),", ",e.jsx(n.code,{children:"trailingAction"})," and ",e.jsx(n.code,{children:"title"}),`.
Each action is `,e.jsx(n.code,{children:"{ icon, label, onClick?, disabled? }"}),": ",e.jsx(n.code,{children:"label"})," becomes the icon button's ",e.jsx(n.code,{children:"aria-label"}),`.
Both side columns keep at least the icon button width, so the title stays centered when one action is hidden.
Long titles wrap (balanced) instead of being cut, so zoom and the browser minimum font size keep them readable.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsxs(n.p,{children:[`Pick style, content, breakpoint, actions and text. The header is drawn with its real measurements (Phone at 1×, Tablet at 0.6×); the panel lists the tokens that apply — hover a token to see where it acts.
Leading, Trailing and Text apply to `,e.jsx(n.code,{children:'content="actions"'}),"."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:[`The header itself has no interactive state. This grid shows every Style × Content × leading / trailing / text combination at both breakpoints,
then every state of the actions (default, hover, pressed, focus, disabled). Action colors, focus ring and touch target come from `,e.jsx(n.code,{children:"IconButton"}),"; hover, pressed and focus are forced with ",e.jsx(n.code,{children:"data-state"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`| Requirement | Implementation |
|---|---|
| Landmark | `,e.jsx(n.code,{children:"<header>"}),": the ",e.jsx(n.code,{children:"banner"})," landmark when it is not inside ",e.jsx(n.code,{children:"<article>"})," / ",e.jsx(n.code,{children:"<section>"})," / ",e.jsx(n.code,{children:"<main>"}),` |
| Title | `,e.jsx(n.code,{children:"<h1>"})," by default (it names the screen); ",e.jsx(n.code,{children:'titleAs="h2"'})," or ",e.jsx(n.code,{children:'"span"'})," when the page already has its own ",e.jsx(n.code,{children:"h1"}),` |
| Logo | Inline SVG with `,e.jsx(n.code,{children:'role="img"'})," and ",e.jsx(n.code,{children:"aria-label"})," (",e.jsx(n.code,{children:"logoLabel"}),`, default "Daily Wire") |
| Actions | `,e.jsx(n.code,{children:"IconButton"}),": native ",e.jsx(n.code,{children:"<button>"}),", ",e.jsx(n.code,{children:"aria-label"})," from ",e.jsx(n.code,{children:"label"}),`, focus ring, 44px hit area on touch screens |
| Zoom | No fixed height (`,e.jsx(n.code,{children:"min-height"})," only); the title wraps instead of clipping |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"AppHeader.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar). Action tokens are listed in IconButton."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(a,{of:t}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'filled' \\| 'transparent'"})," | ",e.jsx(n.code,{children:"'filled'"})," | Figma ",e.jsx(n.code,{children:"Style"}),` (Filled / WithoutBg) |
| `,e.jsx(n.code,{children:"content"})," | ",e.jsx(n.code,{children:"'logo' \\| 'actions'"})," | ",e.jsx(n.code,{children:"'logo'"})," | Figma ",e.jsx(n.code,{children:"Content"}),` (Logo / Icon Button) |
| `,e.jsx(n.code,{children:"title"})," | ",e.jsx(n.code,{children:"ReactNode"})," | — | Centered title (Figma ",e.jsx(n.code,{children:"Text"}),", ",e.jsx(n.code,{children:"Show Text"}),"); ",e.jsx(n.code,{children:'content="actions"'}),` only |
| `,e.jsx(n.code,{children:"titleAs"})," | ",e.jsx(n.code,{children:"'h1' \\| 'h2' \\| 'span'"})," | ",e.jsx(n.code,{children:"'h1'"}),` | Element used for the title |
| `,e.jsx(n.code,{children:"leadingAction"})," | ",e.jsx(n.code,{children:"AppHeaderAction"})," | — | Left icon button (Figma ",e.jsx(n.code,{children:"Show Leading Action"}),"); ",e.jsx(n.code,{children:'content="actions"'}),` only |
| `,e.jsx(n.code,{children:"trailingAction"})," | ",e.jsx(n.code,{children:"AppHeaderAction"})," | — | Right icon button (Figma ",e.jsx(n.code,{children:"Show Trailing Action"}),"); ",e.jsx(n.code,{children:'content="actions"'}),` only |
| `,e.jsx(n.code,{children:"logoLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Daily Wire'"}),` | Accessible name of the logo |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"AppHeaderAction"}),": ",e.jsx(n.code,{children:"{ icon: IconName; label: string; onClick?: MouseEventHandler<HTMLButtonElement>; disabled?: boolean; [data-*]: string }"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<header>"})," attributes via spread (",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"style"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.). The ref points to the ",e.jsx(n.code,{children:"<header>"}),"."]}),`
`]})]})}function B(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{B as default};
