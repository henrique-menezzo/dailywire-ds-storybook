import{u as d,j as e,M as r,C as o,A as t}from"./iframe-BaE-r_tL.js";import{H as s,D as a,B as l,L as h,P as x,M as j,C as p,I as u,S as m,T as g}from"./Header.stories-DKMmB60b.js";import"./preload-helper-PPVm8Dsz.js";import"./CssTokens-DoMUOAyj.js";import"./TokenTable-Dq559OOm.js";import"./ComponentInspector-aQuGSI0z.js";import"./Avatar-DfOPemCI.js";import"./Button-D39Hxs63.js";import"./Icon-D8yVe6yW.js";import"./IconButton-C0K0oZpp.js";import"./NavigationItem-CHo8eRdd.js";import"./dailywire-logo-CTHtym9l.js";import"./index-DO2tlVwn.js";function i(c){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
`,e.jsx(n.h1,{id:"header",children:"Header"}),`
`,e.jsxs(n.p,{children:["The Daily Wire web header: a ",e.jsx(n.code,{children:"<header>"}),` landmark with the main navigation, the Daily Wire logo, and the account actions (Download App, Search, the account control or Log in / Sign up, and an optional upgrade promo).
Spec from Figma `,e.jsx(n.code,{children:"Header (Web)"}),' (7827:6984) on the "↳ Navigation" page: ',e.jsx(n.code,{children:"loginState"})," × ",e.jsx(n.code,{children:"breakpoint"})," × ",e.jsx(n.code,{children:"Promo"})," (9 variants) plus the ",e.jsx(n.code,{children:"Show logo"})," and ",e.jsx(n.code,{children:"Show <section>"}),` booleans.
All visual values come from tokens in `,e.jsx(n.code,{children:"styles/tokens.css"}),". Use the toolbar theme switcher to preview Light/Dark."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["Import design tokens ",e.jsx(n.strong,{children:"once"})," in the app entry (",e.jsx(n.code,{children:"main.tsx"})," or equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@henriquemenezzo/dailywire-ds/styles/tokens.css'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Header, HEADER_NAV_ITEMS } from '@henriquemenezzo/dailywire-ds/components/header'

<Header
  loggedIn
  account={<MyAccountButton />}
  items={HEADER_NAV_ITEMS.map((item) => ({ ...item, selected: item.href === pathname }))}
  onSearchClick={openSearch}
  onAccountClick={openAccountMenu}
/>
`})}),`
`,e.jsxs(n.p,{children:["Built from DS parts: ",e.jsx(n.code,{children:"NavigationItem"})," (sections, Download App, Search), ",e.jsx(n.code,{children:"Button"})," (Log in, Sign up, Upgrade), ",e.jsx(n.code,{children:"IconButton"})," (menu, compact search, default account control) and the ",e.jsx(n.code,{children:"Brand / Logo"})," artwork (",e.jsx(n.code,{children:"icons/brand/dailywire-logo.svg"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(n.p,{children:["Figma's ",e.jsx(n.code,{children:"breakpoint"})," axis is ",e.jsx(n.strong,{children:"not a prop"}),`. The header switches layout with CSS container queries on its own width, so it follows the space it gets: full width in an app, a fixed frame in these docs.
`,e.jsx(n.code,{children:"tokens.css"})," has no breakpoint tokens yet, so the limits are the Figma frame widths:"]}),`
`,e.jsxs(n.p,{children:[`| Breakpoint | Header width | Padding (block · inline) | Start | End |
|------------|--------------|--------------------------|-------|-----|
| Mobile | < 768 | `,e.jsx(n.code,{children:"--spacing-lg"})," · ",e.jsx(n.code,{children:"--spacing-md"})," (logged out: ",e.jsx(n.code,{children:"--spacing-xl"}),` on the right) | menu button | compact search, account · or Sign up only |
| Tablet | 768 – 1439 | `,e.jsx(n.code,{children:"--spacing-lg"})," · ",e.jsx(n.code,{children:"--spacing-lg"})," left, ",e.jsx(n.code,{children:"--spacing-2xl"}),` right | menu button | compact search, account, promo · or Sign up only |
| Desktop | ≥ 1440 | `,e.jsx(n.code,{children:"--spacing-xl"})," · ",e.jsx(n.code,{children:"--spacing-8xl"})," | navigation | Download App, Search, divider, account, promo · or Log in + Sign up |"]}),`
`,e.jsx(n.p,{children:"The bar is 64 px tall on every breakpoint (padding + 32 px items on desktop, + the 40 px menu button below). The logo stays centered."}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"login-state",children:"Login state"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"loggedIn"})," maps to Figma ",e.jsx(n.code,{children:"loginState"}),". Signed in: the account control. Figma nests an ",e.jsx(n.code,{children:"Avatar"})," (size 4xsm: a photo on desktop and tablet, initials on mobile) inside an ",e.jsx(n.code,{children:"Icon Button"})," minimal · sm. The DS has no Avatar component yet, so the ",e.jsx(n.code,{children:"account"})," prop is a slot for your own button + avatar; without it the header renders a ",e.jsx(n.code,{children:"user"})," ",e.jsx(n.code,{children:"IconButton"})," (minimal · sm, named by ",e.jsx(n.code,{children:"accountLabel"}),"). Signed out: ",e.jsx(n.code,{children:"Log in"})," (ghost, desktop only) and ",e.jsx(n.code,{children:"Sign up"})," (brand); below desktop Figma shows Sign up alone, without the search button."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"promo",children:"Promo"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"promo"})," maps to Figma ",e.jsx(n.code,{children:"Promo"}),": a brand ",e.jsx(n.code,{children:"Button"})," after the account control (",e.jsx(n.code,{children:"promoLabel"}),', default "Upgrade"). It applies to signed-in users only (Figma has no logged-out promo variant) and is hidden on mobile, where Figma draws Promo=yes the same as Promo=no. On tablet a divider separates it from the account control.']}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"mobile-menu",children:"Mobile menu"}),`
`,e.jsxs(n.p,{children:["Below desktop the navigation moves behind the menu button, a disclosure with ",e.jsx(n.code,{children:"aria-expanded"})," and ",e.jsx(n.code,{children:"aria-controls"})," pointing at the ",e.jsx(n.code,{children:"<nav>"}),". Activating it shows the same ",e.jsx(n.code,{children:'<nav aria-label="Main">'})," as a panel under the bar; Escape closes it and returns focus to the button. Use ",e.jsx(n.code,{children:"menuOpen"})," + ",e.jsx(n.code,{children:"onMenuOpenChange"})," to control it, or ",e.jsx(n.code,{children:"defaultMenuOpen"}),`.
The open panel is not drawn in Figma: it reuses the header surface and bottom stroke.`]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sections-and-logo",children:"Sections and logo"}),`
`,e.jsxs(n.p,{children:["The Figma ",e.jsx(n.code,{children:"Show News"}),", ",e.jsx(n.code,{children:"Show Shows & Movies"}),", ",e.jsx(n.code,{children:"Show All Access"}),", ",e.jsx(n.code,{children:"Show Shop"}),", ",e.jsx(n.code,{children:"Show Kids"})," and ",e.jsx(n.code,{children:"Show DWTV"})," booleans become the ",e.jsx(n.code,{children:"items"})," array: ",e.jsx(n.code,{children:"HEADER_NAV_ITEMS"})," holds the six sections in Figma order, filter or replace it. Mark the current section with ",e.jsx(n.code,{children:"selected"})," (",e.jsx(n.code,{children:'aria-current="page"'}),", 600 weight). ",e.jsx(n.code,{children:"showLogo"})," maps to ",e.jsx(n.code,{children:"Show logo"}),"; the logo is a link (",e.jsx(n.code,{children:"logoHref"}),", default ",e.jsx(n.code,{children:"/"}),') whose accessible name is "The Daily Wire".']}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inspect",children:"Inspect"}),`
`,e.jsx(n.p,{children:"Pick login, promo and breakpoint. The header is drawn at the frame width (scaled to fit) with its real measurements; the panel lists the tokens that apply at that width, including the container-query rules."}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.p,{children:"All 9 Figma variants (login × promo at each breakpoint), plus a desktop row with navigation items forced to selected, hover, pressed and focus:"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Every property of ",e.jsx(n.code,{children:"Header.module.css"})," with the token it uses, resolved for the active theme: the shared rules first, then each breakpoint range. Nested components (",e.jsx(n.code,{children:"NavigationItem"}),", ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"IconButton"}),") document their own tokens."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<header>"})," is the banner landmark; the sections live in ",e.jsx(n.code,{children:'<nav aria-label="Main">'})," (",e.jsx(n.code,{children:"navLabel"}),") as a list."]}),`
`,e.jsxs(n.li,{children:["The menu button is a disclosure (",e.jsx(n.code,{children:"aria-expanded"}),", ",e.jsx(n.code,{children:"aria-controls"}),"), labelled by ",e.jsx(n.code,{children:"menuLabel"}),' ("Menu").']}),`
`,e.jsxs(n.li,{children:['Icon-only controls have names: "Search", "Account" (',e.jsx(n.code,{children:"accountLabel"}),"). A custom ",e.jsx(n.code,{children:"account"})," control must carry its own accessible name."]}),`
`,e.jsxs(n.li,{children:["Every control shows the DS focus ring; touch screens get ",e.jsx(n.code,{children:"--touch-target-min"})," hit areas."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(t,{of:s}),`
`,e.jsxs(n.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,e.jsx(n.code,{children:"loggedIn"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"loginState"}),`: account button or Log in / Sign up |
| `,e.jsx(n.code,{children:"promo"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"})," | Figma ",e.jsx(n.code,{children:"Promo"}),`: upgrade button (signed in, tablet and desktop) |
| `,e.jsx(n.code,{children:"promoLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Upgrade'"}),` | Promo button label |
| `,e.jsx(n.code,{children:"onPromoClick"})," | ",e.jsx(n.code,{children:"MouseEventHandler"}),` | — | Promo button click |
| `,e.jsx(n.code,{children:"items"})," | ",e.jsx(n.code,{children:"HeaderNavItem[]"})," | ",e.jsx(n.code,{children:"HEADER_NAV_ITEMS"})," | ",e.jsx(n.code,{children:"{ label, href, selected?, icon? }"})," plus any ",e.jsx(n.code,{children:"NavigationItem"}),` prop |
| `,e.jsx(n.code,{children:"navLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Main'"})," | Accessible name of the ",e.jsx(n.code,{children:"<nav>"}),` |
| `,e.jsx(n.code,{children:"showLogo"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"})," | Figma ",e.jsx(n.code,{children:"Show logo"}),` |
| `,e.jsx(n.code,{children:"logoHref"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'/'"}),` | Logo link target |
| `,e.jsx(n.code,{children:"showDownloadApp"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | Desktop "Download App" item |
| `,e.jsx(n.code,{children:"downloadAppHref"})," | ",e.jsx(n.code,{children:"string"}),` | — | Renders Download App as a link |
| `,e.jsx(n.code,{children:"onDownloadAppClick"})," | ",e.jsx(n.code,{children:"MouseEventHandler"}),` | — | Download App click |
| `,e.jsx(n.code,{children:"showSearch"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | Search item (desktop) / icon button (tablet, mobile) |
| `,e.jsx(n.code,{children:"onSearchClick"})," | ",e.jsx(n.code,{children:"MouseEventHandler"}),` | — | Search click |
| `,e.jsx(n.code,{children:"onLogInClick"})," · ",e.jsx(n.code,{children:"onSignUpClick"})," | ",e.jsx(n.code,{children:"MouseEventHandler"}),` | — | Signed-out buttons |
| `,e.jsx(n.code,{children:"account"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | — | Account slot (signed in). Pass your own button + avatar until the DS Avatar ships |
| `,e.jsx(n.code,{children:"accountLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Account'"}),` | Accessible name of the default account button |
| `,e.jsx(n.code,{children:"onAccountClick"})," | ",e.jsx(n.code,{children:"MouseEventHandler"}),` | — | Default account button click |
| `,e.jsx(n.code,{children:"menuOpen"})," · ",e.jsx(n.code,{children:"defaultMenuOpen"})," · ",e.jsx(n.code,{children:"onMenuOpenChange"})," | ",e.jsx(n.code,{children:"boolean"})," · ",e.jsx(n.code,{children:"boolean"})," · ",e.jsx(n.code,{children:"(open) => void"})," | — · ",e.jsx(n.code,{children:"false"}),` · — | Mobile / tablet menu state |
| `,e.jsx(n.code,{children:"menuLabel"})," | ",e.jsx(n.code,{children:"string"})," | ",e.jsx(n.code,{children:"'Menu'"}),` | Menu button accessible name |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"})," | — | Extra CSS class |"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Also accepts native ",e.jsx(n.code,{children:"<header>"})," attributes via spread."]}),`
`]})]})}function H(c={}){const{wrapper:n}={...d(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(i,{...c})}):i(c)}export{H as default};
