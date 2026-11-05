import{u as r,j as e,M as l,C as n,A as c}from"./iframe-BaE-r_tL.js";import{P as t,D as a,A as d,S as h,T as x,I as j,a as p,b as u,c as g}from"./PlayButton.stories-S6lJ8wls.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Icon-D8yVe6yW.js";function o(i){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(s.h1,{id:"play-button",children:"Play button"}),`
`,e.jsxs(s.p,{children:["Round, translucent play / pause control laid over video thumbnails and artwork. A single button toggles between ",e.jsx(s.strong,{children:"Play"})," and ",e.jsx(s.strong,{children:"Pause"}),": the glyph and the accessible name follow the ",e.jsx(s.code,{children:"playing"})," prop."]}),`
`,e.jsxs(s.p,{children:["Spec reviewed against Figma ",e.jsx(s.code,{children:"Play button"}),` (13220:37305, doc frame 13220:37367): Action Play / Pause × InteractionState Default / Hover / Pressed / Focus / Disabled × Size md / sm (20 variants).
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark — the control is theme-independent by design (it always sits on imagery)."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { PlayButton } from '@henriquemenezzo/dailywire-ds/components/play-button'
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const [playing, setPlaying] = useState(false)

<PlayButton playing={playing} onClick={() => setPlaying((p) => !p)} />
`})}),`
`,e.jsxs(s.p,{children:["The accessible name is ",e.jsx(s.strong,{children:'"Play"'})," while paused and ",e.jsx(s.strong,{children:'"Pause"'})," while playing (override with ",e.jsx(s.code,{children:"playLabel"})," / ",e.jsx(s.code,{children:"pauseLabel"}),', e.g. "Play episode"). There is no ',e.jsx(s.code,{children:"aria-pressed"}),": the changing name already conveys the state."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"actions",children:"Actions"}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"md"})," 80px with a 32px glyph (padding ",e.jsx(s.code,{children:"--spacing-3xl"}),"), ",e.jsx(s.strong,{children:"sm"})," 56px with a 24px glyph (padding ",e.jsx(s.code,{children:"--spacing-xl"}),")."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"toggle",children:"Toggle"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"interaction",children:"Interaction"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Hover"})," — the translucent fill darkens."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Pressed"})," — same fill as hover; the glyph shrinks by 4px (32 → 28, 24 → 20) and the circle by 4px, as in Figma. A 2px margin keeps the outer footprint so the layout does not move."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Focus"})," — the same ring as ",e.jsx(s.code,{children:"Button"}),": ",e.jsx(s.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(s.code,{children:"--focus-ring-width"}),", transparent ",e.jsx(s.code,{children:"--focus-ring-offset"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Disabled"})," — fill stays at rest; the glyph drops to 20% white."]}),`
`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick action, state and size. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsx(s.p,{children:"Every Figma variant — Action × InteractionState (hover, pressed and focus are forced for review). Switch the size in Controls:"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"PlayButton.module.css"})," with the token it uses, resolved for the active theme:"]}),`
`,e.jsx(n,{of:g}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The Figma set uses raw values for the fill (#000 25% / 50%), the shadow (0 4 250 #000 50%) and the background blur (4). Code maps them to the closest existing tokens: ",e.jsx(s.code,{children:"--color-overlay-neutral-subtle-default"})," (40%), ",e.jsx(s.code,{children:"--color-overlay-neutral-bold-default"})," (60%), ",e.jsx(s.code,{children:"--shadow-xl"}),", ",e.jsx(s.code,{children:"--primitive-dimension-dimension-1"}),"."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(c,{of:t}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"playing"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"})," | Shows the pause glyph and uses ",e.jsx(s.code,{children:"pauseLabel"}),` (Figma Action=Pause) |
| `,e.jsx(s.code,{children:"size"})," | ",e.jsx(s.code,{children:"'sm' \\| 'md'"})," | ",e.jsx(s.code,{children:"'md'"}),` | 56 / 80 px |
| `,e.jsx(s.code,{children:"playLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Play'"}),` | Accessible name while paused |
| `,e.jsx(s.code,{children:"pauseLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Pause'"}),` | Accessible name while playing |
| `,e.jsx(s.code,{children:"disabled"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"}),` | Disables the button |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<button>"})," attributes via spread (",e.jsx(s.code,{children:"onClick"}),", ",e.jsx(s.code,{children:"aria-*"}),", etc.)."]}),`
`]})]})}function A(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(o,{...i})}):o(i)}export{A as default};
