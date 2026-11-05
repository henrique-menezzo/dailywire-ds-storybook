import{u as t,j as e,M as c,C as n,A as d}from"./iframe-BaE-r_tL.js";import{F as l,D as r,C as h,S as a,W as x,I as j,a as u,b as g,T as p}from"./FollowButton.stories-Dk41bzCR.js";import"./preload-helper-PPVm8Dsz.js";import"./ShowcaseBox-CvpXiMzv.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./check-small-C4AZoZXL.js";function i(o){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(s.h1,{id:"follow-button",children:"Follow Button"}),`
`,e.jsxs(s.p,{children:["A text toggle to follow or unfollow a host. Not following shows ",e.jsx(s.strong,{children:"Follow"}),"; following shows ",e.jsx(s.strong,{children:"Following"}),`, dimmed, with an optional check before it.
Spec reviewed against Figma `,e.jsx(s.code,{children:"Follow"}),` (395:16301), docs frame “Follow - Unfollow” in Section 1 (13898:9752).
All visual values come from tokens in `,e.jsx(s.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsxs(s.p,{children:["The Figma set still uses the legacy ",e.jsx(s.code,{children:"[Old]"})," variables (",e.jsx(s.code,{children:"Text/Default/Base"}),", ",e.jsx(s.code,{children:"Text/Default/Strong"}),", ",e.jsx(s.code,{children:"Icon/Strong"}),`) and only draws the default state.
Here they map to `,e.jsx(s.code,{children:"text/neutral/bold"}),", ",e.jsx(s.code,{children:"text/neutral/subtlest"})," and ",e.jsx(s.code,{children:"icon/neutral/subtlest"}),"; hover, pressed and disabled use the same families, and focus uses the shared ring."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"import",children:"Import"}),`
`,e.jsxs(s.p,{children:["Import design tokens ",e.jsx(s.strong,{children:"once"})," in the app entry (",e.jsx(s.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { FollowButton } from '@henriquemenezzo/dailywire-ds/components/follow-button'
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(s.p,{children:["Click to toggle. Uncontrolled with ",e.jsx(s.code,{children:"defaultSelected"}),", or controlled with ",e.jsx(s.code,{children:"selected"})," + ",e.jsx(s.code,{children:"onSelectedChange"}),":"]}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const [following, setFollowing] = useState(false)

<FollowButton selected={following} onSelectedChange={setFollowing} />
`})}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(s.p,{children:["Both sizes use 14px (",e.jsx(s.code,{children:"font-size-sm"}),"):"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"sm"})," (Figma Small) — sentence case, line height 150%. Follow is Semibold (",e.jsx(s.code,{children:"body/600/sm"}),"), Following is Regular (",e.jsx(s.code,{children:"body/400/sm"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"lg"})," (Figma Big) — uppercase, Semibold (",e.jsx(s.code,{children:"label/600/md"}),")."]}),`
`]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"without-check",children:"Without check"}),`
`,e.jsxs(s.p,{children:["Figma ",e.jsx(s.code,{children:"Show Check"})," off."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"focus",children:"Focus"}),`
`,e.jsxs(s.p,{children:["Keyboard focus shows the same ring as Button: ",e.jsx(s.code,{children:"--color-focus-info-bold-default"}),", ",e.jsx(s.code,{children:"--focus-ring-width"}),", with a transparent ",e.jsx(s.code,{children:"--focus-ring-offset"}),". The radius (",e.jsx(s.code,{children:"border-radius-sm"}),") only shapes the ring."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(s.p,{children:"Pick following, state, size and check. The button is drawn at 2× with its real measurements; the panel lists the tokens that apply in that combination — hover a token to see where it acts."}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsx(s.p,{children:"Following? × Size in every state (hover, pressed and focus are forced for review):"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(s.p,{children:["Every property of ",e.jsx(s.code,{children:"FollowButton.module.css"})," with the token it uses, resolved for the active theme (switch Light/Dark in the toolbar). Rows under “following” only apply while following:"]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(d,{of:l}),`
`,e.jsxs(s.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(s.code,{children:"size"})," | ",e.jsx(s.code,{children:"'sm' \\| 'lg'"})," | ",e.jsx(s.code,{children:"'sm'"})," | Figma ",e.jsx(s.code,{children:"Size"}),`: Small / Big |
| `,e.jsx(s.code,{children:"label"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Follow'"}),` | Label while not following |
| `,e.jsx(s.code,{children:"selectedLabel"})," | ",e.jsx(s.code,{children:"string"})," | ",e.jsx(s.code,{children:"'Following'"}),` | Label while following |
| `,e.jsx(s.code,{children:"showCheck"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"true"})," | Figma ",e.jsx(s.code,{children:"Show Check"}),` |
| `,e.jsx(s.code,{children:"selected"})," | ",e.jsx(s.code,{children:"boolean"})," | — | Controlled following state (",e.jsx(s.code,{children:"aria-pressed"}),`) |
| `,e.jsx(s.code,{children:"defaultSelected"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"}),` | Initial state when uncontrolled |
| `,e.jsx(s.code,{children:"onSelectedChange"})," | ",e.jsx(s.code,{children:"(selected: boolean) => void"}),` | — | Called with the next state on every toggle |
| `,e.jsx(s.code,{children:"disabled"})," | ",e.jsx(s.code,{children:"boolean"})," | ",e.jsx(s.code,{children:"false"}),` | Disables the button |
| `,e.jsx(s.code,{children:"className"})," | ",e.jsx(s.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Also accepts native ",e.jsx(s.code,{children:"<button>"})," attributes via spread (",e.jsx(s.code,{children:"onClick"}),", ",e.jsx(s.code,{children:"aria-*"}),", etc.). Calling ",e.jsx(s.code,{children:"event.preventDefault()"})," in ",e.jsx(s.code,{children:"onClick"}),` cancels the toggle.
The accessible name is the visible label, so it reads “Follow” or “Following”, and `,e.jsx(s.code,{children:"aria-pressed"})," reports the state."]}),`
`]})]})}function y(o={}){const{wrapper:s}={...t(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{y as default};
