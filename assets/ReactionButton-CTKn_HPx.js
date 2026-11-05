import{u as c,j as e,M as d,C as s,A as l}from"./iframe-BaE-r_tL.js";import{R as o,D as r,C as a,V as h,S as x,W as j,I as p,a as u,b as g,T as m}from"./ReactionButton.stories-DZxy0DBv.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Icon-D8yVe6yW.js";function t(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o}),`
`,e.jsx(n.h1,{id:"reaction-button",children:"Reaction Button"}),`
`,e.jsxs(n.p,{children:[`A toggle button that lets people react to a piece of content (like, save). It stacks a reaction icon over an optional count label and switches between an unselected and a selected state.
Spec reviewed against Figma `,e.jsx(n.code,{children:"Reaction Button"}),` (7724:3624), docs frame 8349:32427.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ReactionButton } from '@henriquemenezzo/dailywire-ds/components/reaction-button'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Click to toggle. Uncontrolled with ",e.jsx(n.code,{children:"defaultSelected"}),", or controlled with ",e.jsx(n.code,{children:"selected"})," + ",e.jsx(n.code,{children:"onSelectedChange"}),":"]}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [liked, setLiked] = useState(false)

<ReactionButton
  reaction="like"
  selected={liked}
  onSelectedChange={setLiked}
  label={String(count + Number(liked))}
/>
`})}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"types-and-reactions",children:"Types and reactions"}),`
`,e.jsxs(n.p,{children:["Two types (Figma ",e.jsx(n.code,{children:"type"}),") and two reactions (Figma ",e.jsx(n.code,{children:"reaction"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ghost"})," — no border; the pill fill only appears on hover, pressed and focus."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outline"})," — 1px ",e.jsx(n.code,{children:"border/neutral/subtle"})," stroke drawn inside the pill, wider side padding (12px vs 8px)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Like"})," — heart. Selected switches to the filled heart in brand red (",e.jsx(n.code,{children:"icon/brand/bold/*"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Saved"})," — bookmark. Selected switches to the filled bookmark and keeps the neutral icon color."]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Sizes only change the icon: ",e.jsx(n.strong,{children:"sm"})," 20px (",e.jsx(n.code,{children:"size-md"}),"), ",e.jsx(n.strong,{children:"md"})," 24px (",e.jsx(n.code,{children:"size-lg"}),"), ",e.jsx(n.strong,{children:"lg"})," 32px (",e.jsx(n.code,{children:"size-xl"}),`).
Padding (`,e.jsx(n.code,{children:"spacing-md"})," / ",e.jsx(n.code,{children:"spacing-lg"}),"), gap (",e.jsx(n.code,{children:"spacing-sm"}),") and the label style (",e.jsx(n.code,{children:"label/400/md"}),") are the same in every size."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"without-label",children:"Without label"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"Show label"})," off. The button keeps the accessible name “Like” / “Save”; when the count is shown it is added to the name (“Like, 12”). The pressed state is announced through ",e.jsx(n.code,{children:"aria-pressed"}),"."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Keyboard focus fills the pill with ",e.jsx(n.code,{children:"background/neutral/bold/default"})," and shows the shared ring: ",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(n.code,{children:"--focus-ring-width"}),", with a ",e.jsx(n.code,{children:"--focus-ring-offset"})," gap (Figma draws it as two drop shadows)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick type, reaction, selection, state, size and label. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that combination — hover a token to see where it acts."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"Every type × reaction × selection in every state (hover, pressed and focus are forced for review), laid out like the Figma docs frame:"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"ReactionButton.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar). Rows under “like selected” only apply to a selected like button:"]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(l,{of:o}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"reaction"})," | ",e.jsx(n.code,{children:"'like' \\| 'saved'"})," | ",e.jsx(n.code,{children:"'like'"})," | Figma ",e.jsx(n.code,{children:"reaction"}),`: heart or bookmark |
| `,e.jsx(n.code,{children:"variant"})," | ",e.jsx(n.code,{children:"'ghost' \\| 'outline'"})," | ",e.jsx(n.code,{children:"'ghost'"})," | Figma ",e.jsx(n.code,{children:"type"}),` |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'sm' \\| 'md' \\| 'lg'"})," | ",e.jsx(n.code,{children:"'sm'"}),` | Icon size 20 / 24 / 32 px |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"})," | — | Figma ",e.jsx(n.code,{children:"Label"}),`: the count under the icon |
| `,e.jsx(n.code,{children:"showLabel"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show label"}),` |
| `,e.jsx(n.code,{children:"selected"})," | ",e.jsx(n.code,{children:"boolean"})," | — | Controlled selection (",e.jsx(n.code,{children:"aria-pressed"}),`) |
| `,e.jsx(n.code,{children:"defaultSelected"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Initial selection when uncontrolled |
| `,e.jsx(n.code,{children:"onSelectedChange"})," | ",e.jsx(n.code,{children:"(selected: boolean) => void"}),` | — | Called with the next selection on every toggle |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disables the button |
| `,e.jsx(n.code,{children:"aria-label"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Like'"})," / ",e.jsx(n.code,{children:"'Save'"}),` (+ count) | Overrides the accessible name |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<button>"})," attributes via spread (",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.). Calling ",e.jsx(n.code,{children:"event.preventDefault()"})," in ",e.jsx(n.code,{children:"onClick"})," cancels the toggle."]}),`
`]})]})}function z(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{z as default};
