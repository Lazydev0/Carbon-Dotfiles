"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1785],{37114:(e,t,n)=>{n.d(t,{Z:()=>c,h:()=>o});var r=n(30758),s=n(61149),a=n(72091),i=n(86070);const l=(0,r.createContext)(null),c=({children:e})=>{const t=(0,a.r)(s.g,{}),{spec:n,UBIFragment:r}=t;return(0,i.jsx)(r,{spec:n,children:(0,i.jsx)(l.Provider,{value:t,children:e})})},o=()=>{const e=(0,r.useContext)(l);if(null===e)throw new Error("useSettingsUBI must be used within a SettingsUBIProvider");return e}},69203:(e,t,n)=>{n.d(t,{A:()=>l,R:()=>i});var r=n(30758),s=n(86070);const a=(0,r.createContext)(void 0),i=({children:e})=>{const[t,n]=(0,r.useState)(!1),[i,l]=(0,r.useState)(new Set),c=(0,r.useCallback)(((e,t)=>{l((n=>{if(n.has(e)===t)return n;const r=new Set(n);return t?r.add(e):r.delete(e),r}))}),[]),o=i.size>0;return(0,s.jsx)(a.Provider,{value:{sectionMatch:t,setSectionMatch:n,sectionContainsMatch:o,setSectionFilterMatchQueryValue:c},children:e})},l=()=>{const e=(0,r.useContext)(a);if(void 0===e)throw new Error("useSectionMatchState() must be used within a SectionFilterMatchContextProvider");return e}},13548:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(30758),s=n(12783),a=n(26694),i=n(15549),l=n(86070);function c({htmlString:e,children:t,htmlFor:n,semanticColor:c="textSubdued",variant:o="bodySmall",className:d,...u}){const{filter:h}=(0,r.useContext)(i.g);if(!t&&!e)return null;let v=t;return e&&(v=(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})),(0,l.jsx)(s.E,{as:"label",variant:o,semanticColor:c,htmlFor:n,className:d,"data-testid":u["data-testid"],children:h.length>0?(0,l.jsx)(a.M,{searchWords:[h],textToHighlight:t||e||""}):v})}},60137:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(30758),s=n(81549),a=n(15549),i=n(69203);const l="x-settings-row";var c=n(86070);const o=({children:e,filterMatchQuery:t})=>{const{filter:n}=(0,r.useContext)(a.g),{setSectionFilterMatchQueryValue:o,sectionMatch:d}=(0,i.A)(),u=(0,s.C)(n,t);return(0,r.useEffect)((()=>{o(t,u)}),[u,t,o]),d||u?(0,c.jsx)("div",{className:l,children:e}):null}},94479:(e,t,n)=>{n.d(t,{n:()=>a});const r="x-settings-secondColumn";var s=n(86070);const a=({children:e})=>(0,s.jsx)("div",{className:r,children:e})},52352:(e,t,n)=>{n.d(t,{q:()=>l});var r=n(97500),s=n.n(r);const a="x-settings-firstColumn";var i=n(86070);const l=({className:e,children:t})=>(0,i.jsx)("div",{className:s()(a,e),children:t})},81549:(e,t,n)=>{n.d(t,{C:()=>s});var r=n(22203);const s=(e,t)=>"string"==typeof e&&"string"==typeof t?!(e.length>0)||null!==(0,r.u)(e,t):"boolean"!=typeof e||e},66270:(e,t,n)=>{n.r(t),n.d(t,{SettingsLabel:()=>c.W,SettingsRow:()=>o.i,SettingsRowEnd:()=>u.n,SettingsRowStart:()=>d.q,default:()=>l});var r=n(30758),s=n(37114),a=n(86070);const i=(0,r.lazy)((()=>Promise.all([n.e(4151),n.e(9395),n.e(2391)]).then(n.bind(n,92382)))),l=()=>(0,a.jsx)(s.Z,{children:(0,a.jsx)(i,{})});var c=n(13548),o=n(60137),d=n(52352),u=n(94479)}}]);
//# sourceMappingURL=xpui-desktop-routes-settings.js.map