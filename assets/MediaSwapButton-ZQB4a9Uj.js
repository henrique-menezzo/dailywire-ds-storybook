import{u as t,j as e,M as c,C as d,A as r}from"./iframe-BaE-r_tL.js";import{M as o,D as l,C as a,a as h,S as x,I as j,T as p}from"./MediaSwapButton.stories-u7I5syrJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Icon-D8yVe6yW.js";function i(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(n.h1,{id:"media-swap-button",children:"Media Swap Button"}),`
`,e.jsxs(n.p,{children:[`Audio ↔ video toggle for content that can be watched or listened to. Two segments sit in a pill; the selected one is filled.
Each segment is a toggle button (`,e.jsx(n.code,{children:"aria-pressed"}),") inside a ",e.jsx(n.code,{children:"fieldset"}),' group named "Playback mode" (override with ',e.jsx(n.code,{children:"aria-label"}),`).
Spec reviewed against Figma `,e.jsx(n.code,{children:"Swap_Video"})," (5599:8341), variant ",e.jsx(n.code,{children:"Type"}),` = Video / Audio.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Legacy source."}),` Figma binds old variables and raw spacing. Mapping:
`,e.jsx(n.code,{children:"Background/Light Container"})," (#1f1f1f) → ",e.jsx(n.code,{children:"--color-background-neutral-subtlest-default"}),` (track);
`,e.jsx(n.code,{children:"Background/Base"})," (#0a0909) → ",e.jsx(n.code,{children:"--color-background-neutral-bold-default"}),` (selected segment);
`,e.jsx(n.code,{children:"Text/Default/Base"})," → ",e.jsx(n.code,{children:"--color-text-neutral-bold-default"}),"; ",e.jsx(n.code,{children:"Text/Default/Strong"})," (#8f8f8f) → ",e.jsx(n.code,{children:"--color-text-neutral-subtlest-default"}),`;
icons are `,e.jsx(n.code,{children:"Icon/Strong"})," / ",e.jsx(n.code,{children:"Icon/Solid"})," at 30% opacity → ",e.jsx(n.code,{children:"--color-icon-neutral-subtlest-default"})," / ",e.jsx(n.code,{children:"-disabled"}),` (no opacity token);
padding 4 / 4·8, gap 4 → `,e.jsx(n.code,{children:"--spacing-xs"})," / ",e.jsx(n.code,{children:"--spacing-md"}),"; radius 200 / 100 → ",e.jsx(n.code,{children:"--border-radius-full"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { MediaSwapButton } from '@henriquemenezzo/dailywire-ds/components/media-swap-button'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Uncontrolled — click the other segment to swap:"}),`
`,e.jsx(d,{of:l}),`
`,e.jsxs(n.p,{children:["Controlled with ",e.jsx(n.code,{children:"mode"})," and ",e.jsx(n.code,{children:"onModeChange"}),":"]}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"modes",children:"Modes"}),`
`,e.jsxs(n.p,{children:["Figma variants ",e.jsx(n.code,{children:"Type = Video"})," and ",e.jsx(n.code,{children:"Type = Audio"})," map to ",e.jsx(n.code,{children:'mode="video"'})," and ",e.jsx(n.code,{children:'mode="audio"'}),". Icons are ",e.jsx(n.code,{children:"video"})," and ",e.jsx(n.code,{children:"headphones"})," (20px)."]}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:["One size: 4px track padding, segments 4 / 8 padding with ",e.jsx(n.code,{children:"body/400/sm"})," text (37px tall overall). An invisible area extends each segment's touch target to ",e.jsx(n.code,{children:"--touch-target-min"})," (44px)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:`Figma draws only the two selections. Hover and pressed on the unselected segment, and disabled, use the neutral-subtlest family.
Hover, pressed and focus are forced for review (focus rings the selected segment):`}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.h3,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Each segment is focusable and shows the DS ring: ",e.jsx(n.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(n.code,{children:"--focus-ring-width"}),", with a transparent ",e.jsx(n.code,{children:"--focus-ring-offset"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsxs(n.p,{children:[`Pick mode and state. The control is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts.
The inspector measures the track and the first segment's icon and label; the icon color is listed in `,e.jsx(n.strong,{children:"Tokens"})," below."]}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"MediaSwapButton.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(r,{of:o}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"mode"})," | ",e.jsx(n.code,{children:"'video' \\| 'audio'"})," | — | Selected mode, controlled (Figma ",e.jsx(n.code,{children:"Type"}),`) |
| `,e.jsx(n.code,{children:"defaultMode"})," | ",e.jsx(n.code,{children:"'video' \\| 'audio'"})," | ",e.jsx(n.code,{children:"'video'"})," | Initial mode when ",e.jsx(n.code,{children:"mode"}),` is not controlled |
| `,e.jsx(n.code,{children:"onModeChange"})," | ",e.jsx(n.code,{children:"(mode) => void"}),` | — | Called when the user picks the other segment |
| `,e.jsx(n.code,{children:"videoLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Video'"}),` | Video segment text |
| `,e.jsx(n.code,{children:"audioLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Audio'"}),` | Audio segment text |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disables both segments |
| `,e.jsx(n.code,{children:"aria-label"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Playback mode'"}),` | Accessible name of the group |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<fieldset>"})," attributes via spread."]}),`
`]})]})}function y(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{y as default};
