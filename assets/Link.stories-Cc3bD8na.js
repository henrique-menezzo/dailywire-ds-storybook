import{j as e,r as d}from"./iframe-BaE-r_tL.js";import{b as F}from"./Icon-D8yVe6yW.js";import{S as c}from"./ShowcaseBox-CvpXiMzv.js";import{C as O}from"./CssTokens-DoMUOAyj.js";import{I as p,C as D}from"./ComponentInspector-aQuGSI0z.js";import{l as N}from"./Link.module-BLmoWX-e.js";import{L as o,a as T,b as z,c as r}from"./Link-Bo7zJKQL.js";const{fn:C}=__STORYBOOK_MODULE_TEST__,E=Object.keys(F).sort((n,a)=>n.localeCompare(a)),V={component:r,title:"Components/Link",parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:[...z]},size:{control:"select",options:[...o]},weight:{control:"inline-radio",options:[...T]},underline:{control:"boolean"},children:{control:"text"},href:{control:"text"},leadingIcon:{control:"select",options:E},trailingIcon:{control:"select",options:E},disabled:{control:"boolean"},as:{control:"inline-radio",options:["a","button"]}},args:{variant:"secondary",size:"lg",weight:"regular",underline:!0,children:"Link Button",href:"#",disabled:!1,onClick:C()}},k={},h={render:()=>e.jsxs(c,{children:[e.jsx(r,{href:"#",variant:"primary",leadingIcon:"chevron-left",trailingIcon:"chevron-right",children:"Primary"}),e.jsx(r,{href:"#",variant:"secondary",leadingIcon:"chevron-left",trailingIcon:"chevron-right",children:"Secondary"})]})},L={render:()=>e.jsx(c,{direction:"column",style:{gap:24},children:z.map(n=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24},children:[...o].reverse().map(a=>e.jsx(r,{href:"#",variant:n,size:a,leadingIcon:"chevron-left",trailingIcon:"chevron-right",children:`Size ${a}`},a))},n))})},j={render:()=>e.jsx(c,{direction:"column",style:{gap:24},children:T.map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{href:"#",variant:"primary",weight:n,children:`Primary ${n}`}),e.jsx(r,{href:"#",variant:"secondary",weight:n,children:`Secondary ${n}`})]},n))})},b={render:()=>e.jsxs(c,{direction:"column",style:{gap:24},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{href:"#",variant:"primary",underline:!0,children:"Underline on"}),e.jsx(r,{href:"#",variant:"secondary",underline:!0,children:"Underline on"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{href:"#",variant:"primary",underline:!1,children:"Underline off"}),e.jsx(r,{href:"#",variant:"secondary",underline:!1,children:"Underline off"})]})]})},w={render:()=>e.jsxs(c,{children:[e.jsx(r,{href:"#",variant:"primary",leadingIcon:"chevron-left",children:"Back"}),e.jsx(r,{href:"#",variant:"primary",trailingIcon:"chevron-right",children:"Next"}),e.jsx(r,{href:"#",variant:"secondary",leadingIcon:"chevron-left",trailingIcon:"chevron-right",children:"Both"}),e.jsx(r,{href:"#",variant:"secondary",trailingIcon:"external-link",target:"_blank",rel:"noreferrer",children:"External"})]})},g={render:()=>e.jsxs(c,{children:[e.jsx(r,{href:"#",variant:"primary",disabled:!0,leadingIcon:"chevron-left",trailingIcon:"chevron-right",children:"Primary"}),e.jsx(r,{href:"#",variant:"secondary",disabled:!0,leadingIcon:"chevron-left",trailingIcon:"chevron-right",children:"Secondary"})]})},m={render:()=>e.jsxs(c,{children:[e.jsx(r,{as:"button",variant:"primary",weight:"semibold",onClick:C(),children:"Forgot password?"}),e.jsx(r,{as:"button",variant:"secondary",trailingIcon:"chevron-down",onClick:C(),children:"Show more"}),e.jsx(r,{as:"button",variant:"secondary",disabled:!0,children:"Disabled"})]})},u={parameters:{layout:"padded"},render:()=>e.jsxs("p",{style:{maxWidth:480,margin:0,fontFamily:"var(--default), sans-serif",fontSize:"var(--font-size-sm)",lineHeight:"var(--line-height-150)",color:"var(--color-text-neutral-subtle-default)"},children:["By continuing you agree to the ",e.jsx(r,{href:"#",variant:"primary",size:"md",children:"Terms of Use"})," and acknowledge the ",e.jsx(r,{href:"#",variant:"primary",size:"md",children:"Privacy Policy"}),". Questions?"," ",e.jsx(r,{href:"#",variant:"secondary",size:"md",weight:"semibold",children:"Contact support"}),"."]})},l=["default","hover","focus","disabled"],_=n=>({disabled:n==="disabled",...n==="hover"||n==="focus"?{"data-state":n}:{}});function A({children:n}){return e.jsx(e.Fragment,{children:n})}function K({children:n}){return e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n})}const M=n=>({display:"grid",gridTemplateColumns:`auto repeat(${n}, max-content)`,gap:"20px 16px",padding:24,alignItems:"center",fontSize:12,color:"var(--color-text-neutral-subtlest-default)"}),f={parameters:{layout:"fullscreen"},argTypes:{size:{control:"inline-radio",options:[...o]}},args:{size:"lg",leadingIcon:"chevron-left",trailingIcon:"chevron-right"},render:({size:n,leadingIcon:a,trailingIcon:s})=>e.jsxs("div",{style:M(l.length),children:[e.jsx("div",{}),l.map(t=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:t},t)),z.flatMap(t=>T.flatMap(i=>[!0,!1].map(I=>e.jsxs(A,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${t} · ${i} · underline ${I?"on":"off"}`}),l.map(S=>e.jsx(K,{children:e.jsx(r,{href:"#",variant:t,size:n,weight:i,underline:I,leadingIcon:a,trailingIcon:s,..._(S),children:"Link Button"})},S))]},`${t}-${i}-${I}`))))]})},v={parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{style:M(l.length*o.length),children:[e.jsx("div",{}),l.flatMap(n=>[...o].reverse().map(a=>e.jsx("div",{style:{textAlign:"center",textTransform:"capitalize"},children:`${n} · ${a}`},`${n}-${a}`))),z.flatMap(n=>T.flatMap(a=>[!0,!1].map(s=>e.jsxs(A,{children:[e.jsx("div",{style:{textTransform:"capitalize"},children:`${n} · ${a} · ${s?"on":"off"}`}),l.flatMap(t=>[...o].reverse().map(i=>e.jsx(K,{children:e.jsx(r,{href:"#",variant:n,size:i,weight:a,underline:s,leadingIcon:"chevron-left",trailingIcon:"chevron-right",..._(t),children:"Link Button"})},`${t}-${i}`)))]},`${n}-${a}-${s}`))))]})},U={"--link-text":"color","--link-icon":"icon color","--link-weight":"font-weight"},y={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx(O,{css:N,aliases:U})},H=["on","off"],Z=["none","left","right","both"];function G(){const[n,a]=d.useState("secondary"),[s,t]=d.useState("default"),[i,I]=d.useState("lg"),[S,P]=d.useState("regular"),[B,W]=d.useState("on"),[$,R]=d.useState("both");return e.jsxs("div",{style:{display:"grid",gap:12,padding:24},children:[e.jsx(p,{label:"Style",options:z,value:n,onChange:a}),e.jsx(p,{label:"State",options:l,value:s,onChange:t}),e.jsx(p,{label:"Size",options:o,value:i,onChange:I}),e.jsx(p,{label:"Weight",options:T,value:S,onChange:P}),e.jsx(p,{label:"Underline",options:H,value:B,onChange:W}),e.jsx(p,{label:"Icon",options:Z,value:$,onChange:R}),e.jsx(D,{css:N,aliases:U,group:n,state:s,size:i,children:e.jsx(r,{href:"#",variant:n,size:i,weight:S,underline:B==="on",leadingIcon:["left","both"].includes($)?"chevron-left":void 0,trailingIcon:["right","both"].includes($)?"chevron-right":void 0,..._(s),children:"Link Button"})})]})}const x={tags:["!test"],parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(G,{})};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"{}",...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <Link href="#" variant="primary" leadingIcon="chevron-left" trailingIcon="chevron-right">Primary</Link>
      <Link href="#" variant="secondary" leadingIcon="chevron-left" trailingIcon="chevron-right">Secondary</Link>
    </ShowcaseBox>
}`,...h.parameters?.docs?.source},description:{story:"Figma `style`: primary (neutral-bold) and secondary (neutral-subtlest).",...h.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    gap: 24
  }}>
      {LINK_VARIANTS.map(variant => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
          {[...LINK_SIZES].reverse().map(size => <Link key={size} href="#" variant={variant} size={size} leadingIcon="chevron-left" trailingIcon="chevron-right">
              {\`Size \${size}\`}
            </Link>)}
        </div>)}
    </ShowcaseBox>
}`,...L.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    gap: 24
  }}>
      {LINK_WEIGHTS.map(weight => <div key={weight} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
          <Link href="#" variant="primary" weight={weight}>{\`Primary \${weight}\`}</Link>
          <Link href="#" variant="secondary" weight={weight}>{\`Secondary \${weight}\`}</Link>
        </div>)}
    </ShowcaseBox>
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox direction="column" style={{
    gap: 24
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
        <Link href="#" variant="primary" underline>Underline on</Link>
        <Link href="#" variant="secondary" underline>Underline on</Link>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
        <Link href="#" variant="primary" underline={false}>Underline off</Link>
        <Link href="#" variant="secondary" underline={false}>Underline off</Link>
      </div>
    </ShowcaseBox>
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <Link href="#" variant="primary" leadingIcon="chevron-left">Back</Link>
      <Link href="#" variant="primary" trailingIcon="chevron-right">Next</Link>
      <Link href="#" variant="secondary" leadingIcon="chevron-left" trailingIcon="chevron-right">Both</Link>
      <Link href="#" variant="secondary" trailingIcon="external-link" target="_blank" rel="noreferrer">External</Link>
    </ShowcaseBox>
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <Link href="#" variant="primary" disabled leadingIcon="chevron-left" trailingIcon="chevron-right">Primary</Link>
      <Link href="#" variant="secondary" disabled leadingIcon="chevron-left" trailingIcon="chevron-right">Secondary</Link>
    </ShowcaseBox>
}`,...g.parameters?.docs?.source},description:{story:"`aria-disabled`, no `href`, clicks blocked.",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseBox>
      <Link as="button" variant="primary" weight="semibold" onClick={fn()}>Forgot password?</Link>
      <Link as="button" variant="secondary" trailingIcon="chevron-down" onClick={fn()}>Show more</Link>
      <Link as="button" variant="secondary" disabled>Disabled</Link>
    </ShowcaseBox>
}`,...m.parameters?.docs?.source},description:{story:'`as="button"` for actions that do not navigate (opens a dialog, expands content).',...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <p style={{
    maxWidth: 480,
    margin: 0,
    fontFamily: 'var(--default), sans-serif',
    fontSize: 'var(--font-size-sm)',
    lineHeight: 'var(--line-height-150)',
    color: 'var(--color-text-neutral-subtle-default)'
  }}>
      By continuing you agree to the <Link href="#" variant="primary" size="md">Terms of Use</Link> and
      acknowledge the <Link href="#" variant="primary" size="md">Privacy Policy</Link>. Questions?{' '}
      <Link href="#" variant="secondary" size="md" weight="semibold">Contact support</Link>.
    </p>
}`,...u.parameters?.docs?.source},description:{story:"Inside running text, sized to match the surrounding paragraph.",...u.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [...LINK_SIZES]
    }
  },
  args: {
    size: 'lg',
    leadingIcon: 'chevron-left',
    trailingIcon: 'chevron-right'
  },
  render: ({
    size,
    leadingIcon,
    trailingIcon
  }) => <div style={gridStyle(STATES.length)}>
      <div />
      {STATES.map(s => <div key={s} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{s}</div>)}
      {LINK_VARIANTS.flatMap(variant => LINK_WEIGHTS.flatMap(weight => [true, false].map(underline => <Row key={\`\${variant}-\${weight}-\${underline}\`}>
              <div style={{
        textTransform: 'capitalize'
      }}>{\`\${variant} · \${weight} · underline \${underline ? 'on' : 'off'}\`}</div>
              {STATES.map(s => <Cell key={s}>
                  <Link href="#" variant={variant} size={size} weight={weight} underline={underline} leadingIcon={leadingIcon} trailingIcon={trailingIcon} {...stateProps(s)}>
                    Link Button
                  </Link>
                </Cell>)}
            </Row>)))}
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Every style × weight × underline in every Figma state. Hover and focus are forced with `data-state`.",...f.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={gridStyle(STATES.length * LINK_SIZES.length)}>
      <div />
      {STATES.flatMap(s => [...LINK_SIZES].reverse().map(size => <div key={\`\${s}-\${size}\`} style={{
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>{\`\${s} · \${size}\`}</div>))}
      {LINK_VARIANTS.flatMap(variant => LINK_WEIGHTS.flatMap(weight => [true, false].map(underline => <Row key={\`\${variant}-\${weight}-\${underline}\`}>
              <div style={{
        textTransform: 'capitalize'
      }}>{\`\${variant} · \${weight} · \${underline ? 'on' : 'off'}\`}</div>
              {STATES.flatMap(s => [...LINK_SIZES].reverse().map(size => <Cell key={\`\${s}-\${size}\`}>
                    <Link href="#" variant={variant} size={size} weight={weight} underline={underline} leadingIcon="chevron-left" trailingIcon="chevron-right" {...stateProps(s)}>
                      Link Button
                    </Link>
                  </Cell>))}
            </Row>)))}
    </div>
}`,...v.parameters?.docs?.source},description:{story:"The full Figma set (96 variants): style × weight × underline rows, state × size columns.",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <CssTokens css={linkCss} aliases={LINK_ALIASES} />
}`,...y.parameters?.docs?.source},description:{story:"Properties and tokens read from Link.module.css, resolved for the active theme.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <LinkInspect />
}`,...x.parameters?.docs?.source},description:{story:"Pick style, state, size, weight, underline and icons; see real measurements and the tokens that apply.",...x.parameters?.docs?.description}}};const Q=["Default","Variants","Sizes","Weights","Underline","WithIcons","IsDisabled","AsButton","InText","States","FigmaMatrix","Tokens","Inspect"],ae=Object.freeze(Object.defineProperty({__proto__:null,AsButton:m,Default:k,FigmaMatrix:v,InText:u,Inspect:x,IsDisabled:g,Sizes:L,States:f,Tokens:y,Underline:b,Variants:h,Weights:j,WithIcons:w,__namedExportsOrder:Q,default:V},Symbol.toStringTag,{value:"Module"}));export{m as A,k as D,v as F,u as I,ae as L,L as S,y as T,b as U,h as V,j as W,w as a,g as b,x as c,f as d};
