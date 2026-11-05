import{j as r}from"./iframe-BaE-r_tL.js";import{S as d}from"./ShowcaseBox-CvpXiMzv.js";import{T as m}from"./TokenTable-Dq559OOm.js";import{I as l,a as c,b as p}from"./Icon-D8yVe6yW.js";const i=Object.keys(p).sort((e,t)=>e.localeCompare(t)),u={component:c,title:"Components/Icon",parameters:{layout:"centered"},argTypes:{name:{control:"select",options:i},size:{control:"select",options:[...l]},color:{control:"text"}},args:{name:"chevron-right",size:"lg",color:"currentColor"}},f=()=>r.jsx(d,{style:{color:"var(--color-icon-neutral-bold-default)"},children:l.map(e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,fontSize:11,color:"var(--color-text-neutral-subtlest-default)"},children:[r.jsx(c,{name:"star-filled",size:e}),r.jsx("span",{children:e})]},e))}),s={},n={render:()=>r.jsx(f,{})},a={parameters:{layout:"fullscreen"},argTypes:{name:{table:{disable:!0}}},render:({size:e})=>r.jsx("div",{style:{padding:24,display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:24,justifyItems:"center",color:"var(--color-icon-neutral-bold-default)"},children:i.map(t=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,fontSize:11,textAlign:"center",wordBreak:"break-word"},children:[r.jsx(c,{name:t,size:e}),r.jsx("span",{style:{color:"var(--color-text-neutral-subtlest-default)"},children:t})]},t))})},o={tags:["!test"],parameters:{layout:"padded",controls:{disable:!0}},render:()=>r.jsx(m,{columns:["Size prop","Token","Value"],codeColumns:[1],rows:l.map(e=>[e,`--size-${e}`,getComputedStyle(document.documentElement).getPropertyValue(`--size-${e}`).trim()])})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SizesTemplate />
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    name: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    size
  }) => <div style={{
    padding: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: 24,
    justifyItems: 'center',
    color: 'var(--color-icon-neutral-bold-default)'
  }}>
      {iconNames.map(name => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      fontSize: 11,
      textAlign: 'center',
      wordBreak: 'break-word'
    }}>
          <Icon name={name} size={size} />
          <span style={{
        color: 'var(--color-text-neutral-subtlest-default)'
      }}>{name}</span>
        </div>)}
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!test'],
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <TokenTable columns={['Size prop', 'Token', 'Value']} codeColumns={[1]} rows={ICON_SIZES.map(s => [s, \`--size-\${s}\`, getComputedStyle(document.documentElement).getPropertyValue(\`--size-\${s}\`).trim()])} />
}`,...o.parameters?.docs?.source},description:{story:"Icon sizes map to `--size-*`; color defaults to currentColor.",...o.parameters?.docs?.description}}};const g=["Default","Sizes","Gallery","Tokens"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Gallery:a,Sizes:n,Tokens:o,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{s as D,a as G,b as I,n as S,o as T};
