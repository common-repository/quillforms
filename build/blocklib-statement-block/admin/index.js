(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=window.qf.blocks,n=window.React,o=window.qf.adminComponents,a={color:"#ad468d",icon:()=>React.createElement("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},React.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"})),controls:e=>{const{attributes:t,setAttributes:a}=e,{buttonText:l,quotationMarks:r}=t;return React.createElement(n.Fragment,null,React.createElement(o.BaseControl,null,React.createElement(o.ControlWrapper,{orientation:"horizontal"},React.createElement(o.ControlLabel,{label:"Quotation marks"}),React.createElement(o.ToggleControl,{checked:r,onChange:()=>a({quotationMarks:!r})}))),React.createElement(o.BaseControl,null,React.createElement(o.ControlWrapper,{orientation:"vertical"},React.createElement(o.ControlLabel,{label:"Button text"}),React.createElement(o.TextControl,{placeholder:"Button Text",value:l,onChange:e=>a({buttonText:e})}))))},title:"Statement"},{name:l}={name:"statement",supports:{editable:!1,required:!0,attachment:!0,description:!0,logic:!0,theme:!0},attributes:{buttonText:{type:"string",default:"Continue"},quotationMarks:{type:"boolean",default:!0}}};(0,t.setBlockAdminSettings)(l,a),(window.qf=window.qf||{}).blocklibStatementBlockAdmin=e})();