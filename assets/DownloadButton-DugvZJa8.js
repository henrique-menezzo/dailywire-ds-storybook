import{u as t,j as e,M as r,C as s,A as c}from"./iframe-BaE-r_tL.js";import{D as d,a,b as l,P as h,S as x,L as j,I as p,c as u,T as g}from"./DownloadButton.stories-C69LH70U.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Icon-D8yVe6yW.js";import"./download-completed-DKx7PzTF.js";import"./download-starting-ring-DH9AhwhU.js";function i(o){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(n.h1,{id:"download-button",children:"Download Button"}),`
`,e.jsx(n.p,{children:"A stateful control that communicates the full lifecycle of a content download — from idle to in progress, paused, completed and expired. It is used on episode and audio cards wherever offline playback is supported."}),`
`,e.jsxs(n.p,{children:["It has two independent state axes: the ",e.jsx(n.strong,{children:"interaction state"})," (hover, pressed, focus, disabled — user input) and the ",e.jsx(n.strong,{children:"download state"})," (business logic, the ",e.jsx(n.code,{children:"downloadState"})," prop). The glyph inside the button is decided entirely by the download state."]}),`
`,e.jsxs(n.p,{children:["Spec reviewed against Figma ",e.jsx(n.code,{children:"Download Button"}),` (8589:136144, doc frame 8577:138445): Type minimal × Size xsm / sm / md / lg × Interaction State × Download State (100 variants).
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DownloadButton } from '@henriquemenezzo/dailywire-ds/components/download-button'
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DownloadButton
  downloadState={download.state}   // 'default' | 'starting' | 'ongoing' | 'paused' | 'completed' | 'expired'
  progress={download.progress}     // 0–1, used by ongoing / paused
  onClick={handleDownloadAction}
/>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"download-states",children:"Download states"}),`
`,e.jsxs(n.p,{children:[`| State | Glyph | Accessible name (default) | Color family |
|---|---|---|---|
| `,e.jsx(n.code,{children:"default"})," | download arrow | Download | ",e.jsx(n.code,{children:"icon/neutral/subtlest"}),` |
| `,e.jsx(n.code,{children:"starting"})," | dashed ring (turning) + stop square | Cancel download | ",e.jsx(n.code,{children:"icon/neutral/bold"}),` |
| `,e.jsx(n.code,{children:"ongoing"})," | progress ring + stop square | Pause download | ",e.jsx(n.code,{children:"icon/neutral/bold"}),` |
| `,e.jsx(n.code,{children:"paused"})," | progress ring + play | Resume download | ",e.jsx(n.code,{children:"icon/neutral/bold"}),` |
| `,e.jsx(n.code,{children:"completed"})," | phone with check | Downloaded | ",e.jsx(n.code,{children:"icon/neutral/subtlest"}),` |
| `,e.jsx(n.code,{children:"expired"})," | clock with exclamation | Download expired | ",e.jsx(n.code,{children:"icon/warning/bold"})," |"]}),`
`,e.jsxs(n.p,{children:["The name always describes what the button does next; override any of them with ",e.jsx(n.code,{children:"labels"})," (e.g. for localisation)."]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"progress",children:"Progress"}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"ongoing"})," and ",e.jsx(n.code,{children:"paused"})," the ring draws ",e.jsx(n.code,{children:"progress"})," (0–1) clockwise from 12 o'clock: the track is ",e.jsx(n.code,{children:"--color-icon-neutral-subtlest-default"}),", the arc ",e.jsx(n.code,{children:"--color-icon-neutral-bold-default"})," — both stay the same in every interaction state, as in Figma. The ring is 1/13 of the glyph thick (Figma's ",e.jsx(n.em,{children:"Circular progress bar"}),`).
A `,e.jsx(n.code,{children:"<button>"})," cannot carry ",e.jsx(n.code,{children:"aria-valuenow"}),", so the percentage is exposed as the button's description (",e.jsx(n.code,{children:"aria-describedby"}),'): a screen reader hears "Pause download, button, 45%".']}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"starting",children:"Starting"}),`
`,e.jsxs(n.p,{children:['Figma has no prototype reaction for the starting ring; code turns it once per second (linear) to read as "preparing". With ',e.jsx(n.code,{children:"prefers-reduced-motion: reduce"})," the ring stays still."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[`| Size | Box | Padding | Glyph | Inner glyph (stop) |
|---|---|---|---|---|
| `,e.jsx(n.code,{children:"xsm"})," (default) | 24 | ",e.jsx(n.code,{children:"--spacing-xxs"})," | ",e.jsx(n.code,{children:"--size-md"})," 20 | ",e.jsx(n.code,{children:"--size-2xs"}),` 8 |
| `,e.jsx(n.code,{children:"sm"})," | 32 | ",e.jsx(n.code,{children:"--spacing-xs"})," | ",e.jsx(n.code,{children:"--size-lg"})," 24 | ",e.jsx(n.code,{children:"--size-xs"}),` 12 |
| `,e.jsx(n.code,{children:"md"})," | 40 | ",e.jsx(n.code,{children:"--spacing-md"})," | ",e.jsx(n.code,{children:"--size-lg"})," 24 | ",e.jsx(n.code,{children:"--size-xs"}),` 12 |
| `,e.jsx(n.code,{children:"lg"})," | 48 | ",e.jsx(n.code,{children:"--spacing-lg"})," | ",e.jsx(n.code,{children:"--size-lg"})," 24 | ",e.jsx(n.code,{children:"--size-xs"})," 12 |"]}),`
`,e.jsxs(n.p,{children:["The paused play glyph is ",e.jsx(n.code,{children:"--size-xs"})," (12) in every size. Sizes below 44px get an invisible hit area of ",e.jsx(n.code,{children:"--touch-target-min"})," around them, so the visual size matches Figma while the touch target stays accessible."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"lifecycle",children:"Lifecycle"}),`
`,e.jsx(n.p,{children:"A simulated download: click to start, pause and resume; it completes on its own."}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(n.p,{children:["Figma draws the focus ring as a single 2px ",e.jsx(n.code,{children:"--color-focus-info-bold-default"})," spread right at the edge of the round container (no gap): code uses ",e.jsx(n.code,{children:"outline: var(--focus-ring-width)"})," with ",e.jsx(n.code,{children:"outline-offset: var(--spacing-none)"}),`.
Figma also fills the focused container with `,e.jsx(n.code,{children:"background/neutral/bold"})," only as a workaround for the shadow (doc note); the container stays transparent in code."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick download state, interaction state and size. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that state — hover a token to see where it acts."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:[`Every Figma variant — Download State × Interaction State (hover, pressed and focus are forced for review). Switch the size and progress in Controls.
Figma only draws `,e.jsx(n.strong,{children:"Disabled"})," for ",e.jsx(n.code,{children:"Download State=default"}),"; the other disabled cells use each color family's ",e.jsx(n.code,{children:"-disabled"})," token."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"DownloadButton.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar):"]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(c,{of:d}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"downloadState"})," | ",e.jsx(n.code,{children:"'default' \\| 'starting' \\| 'ongoing' \\| 'paused' \\| 'completed' \\| 'expired'"})," | ",e.jsx(n.code,{children:"'default'"}),` | Business state; picks the glyph and the accessible name |
| `,e.jsx(n.code,{children:"size"})," | ",e.jsx(n.code,{children:"'xsm' \\| 'sm' \\| 'md' \\| 'lg'"})," | ",e.jsx(n.code,{children:"'xsm'"}),` | 24 / 32 / 40 / 48 px |
| `,e.jsx(n.code,{children:"progress"})," | ",e.jsx(n.code,{children:"number"})," (0–1) | ",e.jsx(n.code,{children:"0"})," | Ring arc in ",e.jsx(n.code,{children:"ongoing"})," / ",e.jsx(n.code,{children:"paused"}),`; also exposed as the description |
| `,e.jsx(n.code,{children:"labels"})," | ",e.jsx(n.code,{children:"Partial<Record<DownloadState, string>>"}),` | — | Override the accessible name per state |
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | Disables the button |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<button>"})," attributes via spread (",e.jsx(n.code,{children:"onClick"}),", ",e.jsx(n.code,{children:"aria-*"}),", etc.). ",e.jsx(n.code,{children:"DOWNLOAD_BUTTON_LABELS"})," exports the default names."]}),`
`]})]})}function T(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{T as default};
