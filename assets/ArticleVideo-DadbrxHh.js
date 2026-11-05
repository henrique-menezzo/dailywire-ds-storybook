import{u as i,j as e,M as c,C as s,A as r}from"./iframe-BaE-r_tL.js";import{A as d,D as l,V as a,a as h,b as x,R as j,C as p,I as u,S as m,T as g}from"./ArticleVideo.stories-8botcWLM.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./ArticleVideo-DY64P19u.js";import"./IconButton-C0K0oZpp.js";import"./Icon-D8yVe6yW.js";import"./index-DTA9Iiqt.js";function t(o){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"articlevideo",children:"ArticleVideo"}),`
`,e.jsxs(n.p,{children:["A video inside an article or a feed card: a native ",e.jsx(n.code,{children:"<video>"}),` (no third-party player) with the overlay controls Figma draws, a mute toggle in the top-right corner and a play / pause button in the center.
Spec from Figma `,e.jsx(n.code,{children:"Video Article Resource"}),' (9149:64325) in the "Article" section of the "↳ Content" page: ',e.jsx(n.code,{children:"VideoState"})," Played | Paused × ",e.jsx(n.code,{children:"InteractionState"})," Default | Hovered × ",e.jsx(n.code,{children:"AudioState"}),` Muted | Unmuted (8 variants).
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark; the overlay controls look the same in both themes."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ArticleVideo } from '@henriquemenezzo/dailywire-ds/components/article-video'

<ArticleVideo
  src="/media/clip.mp4"
  poster="/media/clip.jpg"
  label="Explosions light up the skyline"
  autoPlay
  loop
>
  <track kind="captions" src="/media/clip.en.vtt" srcLang="en" label="English" default />
</ArticleVideo>
`})}),`
`,e.jsxs(n.p,{children:["Built from DS parts: two ",e.jsx(n.code,{children:"IconButton"}),"s (type ",e.jsx(n.code,{children:"translucid"}),", size ",e.jsx(n.code,{children:"lg"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The docs have no sample video file, so the stories show the ",e.jsx(n.strong,{children:"poster"})," (the paused picture). The mute toggle works; play has nothing to start. Hover the picture to see the play button."]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"video-state",children:"Video state"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"VideoState"})," maps to ",e.jsx(n.code,{children:"playing"})," (controlled) or to the real playback state (uncontrolled). The centered button shows ",e.jsx(n.strong,{children:"play"})," while paused and ",e.jsx(n.strong,{children:"pause"})," while playing. A click on the picture also plays / pauses, as in the Figma prototype."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"audio-state",children:"Audio state"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"AudioState"})," maps to ",e.jsx(n.code,{children:"muted"})," (controlled) or ",e.jsx(n.code,{children:"defaultMuted"})," (uncontrolled, ",e.jsx(n.code,{children:"true"})," by default: browsers only autoplay muted video). The toggle shows ",e.jsx(n.code,{children:"volume-3"})," when muted and ",e.jsx(n.code,{children:"volume"})," when sound is on."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"interaction-state",children:"Interaction state"}),`
`,e.jsxs(n.p,{children:["Figma ",e.jsx(n.code,{children:"InteractionState=Hovered"})," shows the centered button, with a 600 ms ease-out dissolve (",e.jsx(n.code,{children:"--duration-slower"})," is the closest token). In code it appears on hover, when a control inside has keyboard focus, and, on touch screens (no hover), whenever the video is paused. ",e.jsx(n.code,{children:'interactionState="hovered"'})," forces it on."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"aspect",children:"Aspect"}),`
`,e.jsxs(n.p,{children:["The master component is 864 × 547; the Figma instances resize it to 16:9, 1:1, 9:16 and 2:3 (Card Feed, Card Feed Ad) and stretch it to the slide in Live Updates. ",e.jsx(n.code,{children:"aspect"})," sets the box ratio (default ",e.jsx(n.code,{children:"16/9"}),"); ",e.jsx(n.code,{children:"fill"})," takes the parent's width and height. The picture always covers the box (Figma video fill: crop → ",e.jsx(n.code,{children:"object-fit: cover"}),"). ",e.jsx(n.code,{children:"rounded"})," adds the ",e.jsx(n.code,{children:"--border-radius-md"})," corners the card instances use."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.code,{children:"muted"})," + ",e.jsx(n.code,{children:"onMutedChange"})," and / or ",e.jsx(n.code,{children:"playing"})," + ",e.jsx(n.code,{children:"onPlayingChange"})," to own the state. When a play request fails (autoplay policy, no playable source), ",e.jsx(n.code,{children:"onPlayingChange(false)"})," reports it."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick VideoState, InteractionState and AudioState. The video is drawn at half the Figma frame size with its real measurements; the panel lists the tokens that apply."}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.p,{children:["All 8 Figma variants. Hovered is forced with ",e.jsx(n.code,{children:"interactionState"}),":"]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"ArticleVideo.module.css"})," with the token it uses, resolved for the active theme. The nested ",e.jsx(n.code,{children:"IconButton"})," (translucid · lg) documents its own tokens."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The root is a ",e.jsx(n.code,{children:"group"})," named by ",e.jsx(n.code,{children:"label"}),' (default "Video"); use the clip title.']}),`
`,e.jsxs(n.li,{children:['No native controls: the mute toggle ("Mute", ',e.jsx(n.code,{children:"aria-pressed"}),' = muted) and the play / pause button ("Play" / "Pause") are real buttons with names (',e.jsx(n.code,{children:"muteLabel"}),", ",e.jsx(n.code,{children:"playLabel"}),", ",e.jsx(n.code,{children:"pauseLabel"}),"). The center button stays in the tab order and appears when it gets keyboard focus."]}),`
`,e.jsxs(n.li,{children:["Captions: pass ",e.jsx(n.code,{children:'<track kind="captions" … default />'})," as children. Without native controls there is no captions menu, so mark the track ",e.jsx(n.code,{children:"default"})," to show it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"autoPlay"})," is skipped when the user prefers reduced motion; autoplaying video should stay muted."]}),`
`,e.jsxs(n.li,{children:["Both buttons are 48 px (≥ ",e.jsx(n.code,{children:"--touch-target-min"}),") and show the DS focus ring."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(r,{of:d}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"src"})," | ",e.jsx(n.code,{children:"string"})," | — | Video URL (or pass ",e.jsx(n.code,{children:"<source>"}),` children) |
| `,e.jsx(n.code,{children:"poster"})," | ",e.jsx(n.code,{children:"string"}),` | — | Still image before playback |
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Video'"}),` | Accessible name of the player group |
| `,e.jsx(n.code,{children:"muted"})," · ",e.jsx(n.code,{children:"defaultMuted"})," · ",e.jsx(n.code,{children:"onMutedChange"})," | ",e.jsx(n.code,{children:"boolean"})," · ",e.jsx(n.code,{children:"boolean"})," · ",e.jsx(n.code,{children:"(muted) => void"})," | — · ",e.jsx(n.code,{children:"true"})," · — | Figma ",e.jsx(n.code,{children:"AudioState"}),` |
| `,e.jsx(n.code,{children:"playing"})," · ",e.jsx(n.code,{children:"autoPlay"})," · ",e.jsx(n.code,{children:"onPlayingChange"})," | ",e.jsx(n.code,{children:"boolean"})," · ",e.jsx(n.code,{children:"boolean"})," · ",e.jsx(n.code,{children:"(playing) => void"})," | — · ",e.jsx(n.code,{children:"false"})," · — | Figma ",e.jsx(n.code,{children:"VideoState"}),` |
| `,e.jsx(n.code,{children:"aspect"})," | ",e.jsx(n.code,{children:"'16/9' \\| '1/1' \\| '9/16' \\| '2/3' \\| 'fill'"})," | ",e.jsx(n.code,{children:"'16/9'"})," | Box ratio; ",e.jsx(n.code,{children:"fill"}),` follows the parent |
| `,e.jsx(n.code,{children:"rounded"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | ",e.jsx(n.code,{children:"--border-radius-md"}),` corners |
| `,e.jsx(n.code,{children:"interactionState"})," | ",e.jsx(n.code,{children:"'default' \\| 'hovered'"})," | ",e.jsx(n.code,{children:"'default'"})," | Figma ",e.jsx(n.code,{children:"InteractionState"}),`: force the center button visible |
| `,e.jsx(n.code,{children:"muteLabel"})," · ",e.jsx(n.code,{children:"playLabel"})," · ",e.jsx(n.code,{children:"pauseLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Mute'"})," · ",e.jsx(n.code,{children:"'Play'"})," · ",e.jsx(n.code,{children:"'Pause'"}),` | Button names |
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"})," | — | ",e.jsx(n.code,{children:"<track>"})," / ",e.jsx(n.code,{children:"<source>"}),` elements |
| `,e.jsx(n.code,{children:"className"})," · ",e.jsx(n.code,{children:"style"})," | — | — | Root box |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ref"})," points at the ",e.jsx(n.code,{children:"<video>"})," element. Other native ",e.jsx(n.code,{children:"<video>"})," attributes (",e.jsx(n.code,{children:"loop"}),", ",e.jsx(n.code,{children:"preload"})," (default ",e.jsx(n.code,{children:"metadata"}),"), ",e.jsx(n.code,{children:"playsInline"})," (default ",e.jsx(n.code,{children:"true"}),"), ",e.jsx(n.code,{children:"crossOrigin"}),", ",e.jsx(n.code,{children:"onTimeUpdate"}),", ",e.jsx(n.code,{children:"onEnded"}),"…) are forwarded to it."]}),`
`]})]})}function F(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{F as default};
