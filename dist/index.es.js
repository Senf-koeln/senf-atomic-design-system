import t from"react";import o,{css as e}from"styled-components";const i=e`
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
`,n=e`
  width: 164px;
  height: 50px;
  padding: 14px 18px 14px 18px;
`,r=o.button`
  ${i}
  ${t=>"small"===t.size&&i}
  ${t=>"large"===t.size&&n}
`,p=o.p`
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
`,x=({size:o,handleButtonClick:e,position:i,left:n,top:x,right:l,bottom:d,zIndex:s,icon:h,text:a})=>t.createElement(r,{size:o,onClick:e,position:i,left:n,top:x,right:l,bottom:d,zIndex:s},t.createElement(p,null,a));export{x as Button,n as largeStyle};
