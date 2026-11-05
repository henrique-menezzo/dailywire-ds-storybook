import{u as c,j as e,M as l,C as s,a as d,A as a}from"./iframe-BaE-r_tL.js";import{I as o,D as r,T as h,a as x,V as j,S as p,b as u,c as m,d as y,e as g,W as f,G as b,K as v,f as w}from"./IconButton.stories-BBN_yZJf.js";import{P as I}from"./PlatformCodeTabs-C6Sz3Igl.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D8yVe6yW.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./IconButton-C0K0oZpp.js";function t(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"iconbutton",children:"IconButton"}),`
`,e.jsxs(n.p,{children:[`A compact button that shows a single icon and no visible label. Use it for actions whose icon is self-evident: search, profile, menu, close, share.
It has four visual types, two style intents (secondary is available on `,e.jsx(n.code,{children:"minimal"}),` only), four sizes and five interaction states.
Spec reviewed against Figma `,e.jsx(n.code,{children:"Icon Button"}),` (7553:28584, doc frame 8349:21817).
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { IconButton } from '@henriquemenezzo/dailywire-ds/components/icon-button'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<IconButton icon="share-2" aria-label="Share" />
<IconButton icon="x" type="translucid" size="md" aria-label="Close" />
`})}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(d,{of:r}),`
`,e.jsxs(n.p,{children:["The defaults (",e.jsx(n.code,{children:'type="minimal"'}),", ",e.jsx(n.code,{children:'buttonStyle="primary"'}),", ",e.jsx(n.code,{children:'size="sm"'}),") keep the 32px icon-only look used across the app (for example in ",e.jsx(n.code,{children:"PodcastSpotlightCard"}),")."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"type"})," is the ",e.jsx(n.strong,{children:"visual"})," type from Figma. For the native ",e.jsx(n.code,{children:"<button type>"})," use ",e.jsx(n.code,{children:"htmlType"})," (",e.jsx(n.code,{children:"'button'"})," by default)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"cross-platform",children:"Cross-platform"}),`
`,e.jsx(I,{web:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
import { IconButton } from '@henriquemenezzo/dailywire-ds/components/icon-button'

<IconButton
icon="player-play-filled"
type="minimal"
buttonStyle="primary"
size="sm"
aria-label="Play episode"
onClick={() => player.play()}
/>`,ios:`import DailyWireDS
import SwiftUI

// iOS: buttonStyle only for now (no type / size yet)
DWIconButton(
  buttonStyle: .primary,
  accessibilityLabel: "Play episode",
  action: { player.play() }
) {
  Image(systemName: "play.fill")
}`,android:`import com.dailywire.ds.DWIconButton
import com.dailywire.ds.DWIconButtonStyle
import com.dailywire.ds.DWIconDefaults
import androidx.compose.material3.Icon
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PlayArrow

// Android: buttonStyle only for now (no type / size yet)
DWIconButton(
  buttonStyle = DWIconButtonStyle.Primary,
  contentDescription = "Play episode",
  onClick = { player.play() },
) {
  Icon(
      imageVector = Icons.Filled.PlayArrow,
      contentDescription = null,
      tint = DWIconDefaults.iconColor,
  )
}`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Minimal"})," — icon only, no surface. Hover and press change the icon color."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ghost"})," — no surface at rest; a neutral fill appears on hover and press."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outline"})," — 1px neutral stroke; fill and stroke darken on hover and press."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Translucid"})," — dark glass (",e.jsx(n.code,{children:"overlay/neutral/strong"}),", background blur) with an always-light icon, for use over images and video. Looks the same in light and dark."]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styles",children:"Styles"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"buttonStyle"})," sets the icon color intent. In Figma, ",e.jsx(n.strong,{children:"secondary"})," exists only for the ",e.jsx(n.code,{children:"minimal"})," type; any other type renders as primary (with a console warning)."]}),`
`,e.jsxs(n.p,{children:[`| Style | Icon tokens | Use |
|---|---|---|
| `,e.jsx(n.code,{children:"primary"})," | ",e.jsx(n.code,{children:"icon-neutral-bold-*"}),` | Higher-emphasis actions |
| `,e.jsx(n.code,{children:"secondary"})," | ",e.jsx(n.code,{children:"icon-neutral-subtlest-*"})," | Supporting actions (minimal only) |"]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n.p,{children:"The box is padding + glyph, so it differs per type, as in Figma:"}),`
`,e.jsxs(n.p,{children:[`| Size | minimal | ghost / outline / translucid |
|---|---|---|
| `,e.jsx(n.code,{children:"xsm"})," | 24px · ",e.jsx(n.code,{children:"--spacing-xxs"})," · glyph ",e.jsx(n.code,{children:"--size-md"})," | 32px · ",e.jsx(n.code,{children:"--spacing-md"})," · glyph ",e.jsx(n.code,{children:"--size-sm"}),` |
| `,e.jsx(n.code,{children:"sm"})," | 32px · ",e.jsx(n.code,{children:"--spacing-xs"})," · glyph ",e.jsx(n.code,{children:"--size-lg"})," | 36px · ",e.jsx(n.code,{children:"--spacing-md"})," · glyph ",e.jsx(n.code,{children:"--size-md"}),` |
| `,e.jsx(n.code,{children:"md"})," | 40px · ",e.jsx(n.code,{children:"--spacing-md"})," · glyph ",e.jsx(n.code,{children:"--size-lg"})," | 40px · ",e.jsx(n.code,{children:"--spacing-md"})," · glyph ",e.jsx(n.code,{children:"--size-lg"}),` |
| `,e.jsx(n.code,{children:"lg"})," | 48px · ",e.jsx(n.code,{children:"--spacing-lg"})," · glyph ",e.jsx(n.code,{children:"--size-lg"})," | 48px · ",e.jsx(n.code,{children:"--spacing-lg"})," · glyph ",e.jsx(n.code,{children:"--size-lg"})," |"]}),`
`,e.jsxs(n.p,{children:["Every size is fully round (",e.jsx(n.code,{children:"--border-radius-full"}),"). On touch screens the hit area grows to ",e.jsx(n.code,{children:"--touch-target-min"})," (44px) around the visible box without changing layout."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Keyboard focus draws ",e.jsx(n.code,{children:"--focus-ring-width"})," in ",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),`.
Following Figma, `,e.jsx(n.strong,{children:"minimal"})," and ",e.jsx(n.strong,{children:"ghost"})," draw the ring flush with the circle; ",e.jsx(n.strong,{children:"outline"})," and ",e.jsx(n.strong,{children:"translucid"})," leave a ",e.jsx(n.code,{children:"--focus-ring-offset"})," gap."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsxs(n.p,{children:[`Pick type, style, state and size. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts.
The panel does not list the icon glyph size (set per size in `,e.jsx(n.code,{children:"IconButton.tsx"}),"), the translucid icon opacity or the background blur; see ",e.jsx(n.strong,{children:"Tokens"})," for those."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:["Every Figma type × style in every state (hover, pressed and focus are forced for review). Use the ",e.jsx(n.code,{children:"size"})," control to switch sizes."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["The disabled button keeps its ",e.jsx(n.code,{children:"aria-label"})," and sets ",e.jsx(n.code,{children:'aria-disabled="true"'})," next to the native ",e.jsx(n.code,{children:"disabled"})," attribute so screen readers announce it."]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"full-matrix",children:"Full matrix"}),`
`,e.jsx(n.p,{children:"All 100 Figma variants: type × style × size × state."}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"different-icons",children:"Different icons"}),`
`,e.jsxs(n.p,{children:["Any name from the catalog can be passed to ",e.jsx(n.code,{children:"icon"}),"."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"keyboard-interaction",children:"Keyboard interaction"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"IconButton"})," is a native ",e.jsx(n.code,{children:"<button>"}),": focusable with ",e.jsx(n.code,{children:"Tab"}),", activated with ",e.jsx(n.code,{children:"Space"})," and ",e.jsx(n.code,{children:"Enter"}),"."]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`| Requirement | Implementation |
|---|---|
| Accessible name | `,e.jsx(n.code,{children:"aria-label"})," is ",e.jsx(n.strong,{children:"required"})," by TypeScript; axe ",e.jsx(n.code,{children:"button-name"}),` rule enabled |
| Disabled | Native `,e.jsx(n.code,{children:"disabled"})," + ",e.jsx(n.code,{children:'aria-disabled="true"'}),` |
| Keyboard focus | `,e.jsx(n.code,{children:":focus-visible"})," ring, ",e.jsx(n.code,{children:"--focus-ring-width"})," · ",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),` |
| Touch target | Hit area ≥ `,e.jsx(n.code,{children:"--touch-target-min"}),` on coarse pointers (visible box keeps the Figma size) |
| Motion | 300ms ease-out color/fill transitions (`,e.jsx(n.code,{children:"--duration-slow"}),", ",e.jsx(n.code,{children:"--easing-ease-out"}),"), removed under ",e.jsx(n.code,{children:"prefers-reduced-motion"})," |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"IconButton.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(a,{of:o}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"icon"})," | ",e.jsx(n.code,{children:"IconName"}),` | — | Catalog icon (required) |
| `,e.jsx(n.code,{children:"aria-label"})," | ",e.jsx(n.code,{children:"string"}),` | — | Accessible name (required) |
| `,e.jsx(n.code,{children:"type"})," | ",e.jsx(n.code,{children:"'minimal' \\| 'ghost' \\| 'outline' \\| 'translucid'"})," | ",e.jsx(n.code,{children:"'minimal'"})," | Visual type (Figma ",e.jsx(n.code,{children:"Type"}),`) |
| `,e.jsx(n.code,{children:"buttonStyle"})," | ",e.jsx(n.code,{children:"'primary' \\| 'secondary'"})," | ",e.jsx(n.code,{children:"'primary'"}),` | Icon color intent; secondary is minimal-only |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'xsm' \\| 'sm' \\| 'md' \\| 'lg'"})," | ",e.jsx(n.code,{children:"'sm'"}),` | See the size table above |
| `,e.jsx(n.code,{children:"htmlType"})," | ",e.jsx(n.code,{children:"'button' \\| 'submit' \\| 'reset'"})," | ",e.jsx(n.code,{children:"'button'"})," | Native ",e.jsx(n.code,{children:"<button type>"}),` |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disables the button |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<button>"})," attributes via spread (",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function P(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{P as default};
