import{u as o,j as e,M as t,C as s,A as c}from"./iframe-BaE-r_tL.js";import{L as r,D as l,V as h,S as a,W as x,U as j,a as u,I as p,A as m,b as g,c as f,d as b,F as y,T as k}from"./Link.stories-Cc3bD8na.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D8yVe6yW.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Link.module-BLmoWX-e.js";import"./Link-Bo7zJKQL.js";function d(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:r}),`
`,e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:["Inline navigation styled as text, with optional leading and trailing icons. Unlike ",e.jsx(n.code,{children:"Button"}),`, a link has no container, fill or border in any state: it shows interactivity through text color and an optional underline.
Two styles, three sizes, two weights, underline on or off, and four states (default, hover, focus, disabled).
Spec from Figma `,e.jsx(n.code,{children:"Link Button"}),` (7797:24559, docs frame 8370:15678). Link is its own component, not a Button variant.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Link } from '@henriquemenezzo/dailywire-ds/components/link'

<Link href="/shows" variant="primary" trailingIcon="chevron-right">
  All shows
</Link>
`})}),`
`,e.jsxs(n.p,{children:["Renders a native ",e.jsx(n.code,{children:"<a>"}),". For an action that does not navigate (open a dialog, expand content), use ",e.jsx(n.code,{children:'as="button"'}),": it renders a native ",e.jsx(n.code,{children:'<button type="button">'})," with the same look."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styles",children:"Styles"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"style"})," axis is the ",e.jsx(n.code,{children:"variant"})," prop:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary"})," — ",e.jsx(n.code,{children:"text/neutral/bold"})," and ",e.jsx(n.code,{children:"icon/neutral/bold"})," tokens: the strongest link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secondary"})," — ",e.jsx(n.code,{children:"text/neutral/subtlest"})," and ",e.jsx(n.code,{children:"icon/neutral/subtlest"})," tokens: quieter, for supporting links."]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(n.p,{children:"Three sizes, set by text style and icon size. The box hugs its content (no padding), so its height is the tallest child:"}),`
`,e.jsxs(n.p,{children:[`| Size | Text style | Font size | Icon | Height |
|------|-----------|-----------|------|--------|
| `,e.jsx(n.code,{children:"lg"})," | ",e.jsx(n.code,{children:"label/400/lg"})," · ",e.jsx(n.code,{children:"label/600/lg"})," | ",e.jsx(n.code,{children:"--font-size-md"})," (16) | ",e.jsx(n.code,{children:"--size-md"}),` (20) | 20 |
| `,e.jsx(n.code,{children:"md"})," | ",e.jsx(n.code,{children:"label/400/md"})," · ",e.jsx(n.code,{children:"label/600/md"})," | ",e.jsx(n.code,{children:"--font-size-sm"})," (14) | ",e.jsx(n.code,{children:"--size-sm"}),` (16) | 16 |
| `,e.jsx(n.code,{children:"sm"})," | ",e.jsx(n.code,{children:"label/400/sm"})," · ",e.jsx(n.code,{children:"label/600/sm"})," | ",e.jsx(n.code,{children:"--font-size-xs"})," (12) | ",e.jsx(n.code,{children:"--size-sm"})," (16) | 16 |"]}),`
`,e.jsxs(n.p,{children:["Icon to label gap is ",e.jsx(n.code,{children:"--spacing-xs"})," on every size."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"weight",children:"Weight"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"regular"})," uses the ",e.jsx(n.code,{children:"label/400/*"})," text styles (",e.jsx(n.code,{children:"--Regular"}),"), ",e.jsx(n.code,{children:"semibold"})," uses ",e.jsx(n.code,{children:"label/600/*"})," (",e.jsx(n.code,{children:"--Semibold"}),")."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"underline",children:"Underline"}),`
`,e.jsx(n.p,{children:"On by default. The underline sits under the label only, never under the icons, and stays the same in every state (hover does not add or remove it). Turn it off for links whose role is obvious from context, such as navigation rows."}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"with-icons",children:"With icons"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"Show icon left"})," and ",e.jsx(n.code,{children:"Show icon right"})," booleans are the ",e.jsx(n.code,{children:"leadingIcon"})," and ",e.jsx(n.code,{children:"trailingIcon"})," props, which take any name from the icon catalog. Figma's default glyphs are ",e.jsx(n.code,{children:"chevron-left"})," and ",e.jsx(n.code,{children:"chevron-right"}),"."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"in-running-text",children:"In running text"}),`
`,e.jsx(n.p,{children:"Pick the size that matches the surrounding paragraph."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"as-a-button",children:"As a button"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Keyboard focus shows the same ring on both styles: ",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(n.code,{children:"--focus-ring-width"}),", with a transparent ",e.jsx(n.code,{children:"--focus-ring-offset"})," and ",e.jsx(n.code,{children:"--border-radius-sm"})," corners. The label and icons switch to their ",e.jsx(n.code,{children:"selected"})," tokens."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["A disabled link renders ",e.jsx(n.code,{children:'aria-disabled="true"'})," and ",e.jsx(n.code,{children:'role="link"'}),", drops its ",e.jsx(n.code,{children:"href"})," (so it cannot navigate or take focus) and ignores clicks. With ",e.jsx(n.code,{children:'as="button"'}),", the native ",e.jsx(n.code,{children:"disabled"})," attribute is set as well."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick style, state, size, weight, underline and icons. The link is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state. Hover a token to see where it acts."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Every style × weight × underline in every Figma state (hover and focus are forced for review):"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"full-matrix",children:"Full matrix"}),`
`,e.jsx(n.p,{children:"All 96 Figma variants: style × weight × underline × state × size."}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"Link.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'primary' \\| 'secondary'"})," | ",e.jsx(n.code,{children:"'secondary'"})," | Figma ",e.jsx(n.code,{children:"style"}),`: neutral-bold or neutral-subtlest tokens |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'md' \\| 'lg'"})," | ",e.jsx(n.code,{children:"'lg'"}),` | Text style and icon size (12/14/16 px text) |
| `,e.jsx(n.code,{children:"weight"})," | ",e.jsx(n.code,{children:"'regular' \\| 'semibold'"})," | ",e.jsx(n.code,{children:"'regular'"})," | ",e.jsx(n.code,{children:"label/400/*"})," or ",e.jsx(n.code,{children:"label/600/*"}),` |
| `,e.jsx(n.code,{children:"underline"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | Underline the label |
| `,e.jsx(n.code,{children:"leadingIcon"})," | ",e.jsx(n.code,{children:"IconName"}),` | — | Icon before the label |
| `,e.jsx(n.code,{children:"trailingIcon"})," | ",e.jsx(n.code,{children:"IconName"}),` | — | Icon after the label |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | ",e.jsx(n.code,{children:"aria-disabled"}),", no ",e.jsx(n.code,{children:"href"}),`, clicks blocked |
| `,e.jsx(n.code,{children:"as"})," | ",e.jsx(n.code,{children:"'a' \\| 'button'"})," | ",e.jsx(n.code,{children:"'a'"}),` | Native element to render |
| `,e.jsx(n.code,{children:"type"})," | ",e.jsx(n.code,{children:"'button' \\| 'submit' \\| 'reset'"})," | ",e.jsx(n.code,{children:"'button'"})," | Button type, only with ",e.jsx(n.code,{children:'as="button"'}),` |
| `,e.jsx(n.code,{children:"href"})," | ",e.jsx(n.code,{children:"string"}),` | — | Link target |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | Label |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<a>"})," attributes via spread (",e.jsx(n.code,{children:"target"}),", ",e.jsx(n.code,{children:"rel"}),", ",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function q(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{q as default};
