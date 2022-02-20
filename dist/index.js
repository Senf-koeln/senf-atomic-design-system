"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("styled-components");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=o(t),r=o(e);const n=e.css`
  box-sizing: border-box;
  width: 129px;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 10px 14px 10px;
  box-shadow: 0px 12px 18px -10px rgba(235, 184, 0, 0.5);
  background-color: #fed957;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid rgba(170, 150, 80, 0.1);
  position: ${t=>t.position&&t.position};
  left: ${t=>t.left&&t.left};
  top: ${t=>t.top&&t.top};
  right: ${t=>t.right&&t.right};
  bottom: ${t=>t.bottom&&t.bottom};
  z-index: ${t=>t.zIndex};
  &:hover {
    background-color: #f5c70e;
  }
`,p=e.css`
  width: 164px;
  height: 50px;
  padding: 14px 18px 14px 18px;
`,l=r.default.button`
  ${n}
  ${t=>"small"===t.size&&n}
  ${t=>"large"===t.size&&p}
`,s=r.default.p`
  width: 84px;
  height: 16px;
  flex-shrink: 0;
  white-space: pre;
  overflow: hidden;
  font-weight: 700;
  font-style: normal;
  font-family: Nunito, serif;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
`;exports.Button=({size:t,handleButtonClick:e,position:o,left:r,top:n,right:p,bottom:x,zIndex:d,icon:a,text:c})=>i.default.createElement(l,{size:t,onClick:e,position:o,left:r,top:n,right:p,bottom:x,zIndex:d},i.default.createElement(s,null,c)),exports.largeStyle=p;
