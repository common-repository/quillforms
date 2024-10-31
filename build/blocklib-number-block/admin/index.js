(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=window.qf.blocks,n=window.React,a=window.qf.adminComponents,o={color:"#127fa9",icon:()=>React.createElement("i",{style:{verticalAlign:"text-bottom",fontWeight:"bold",color:"#fff"}},"#"),controls:e=>{const{attributes:{setMin:t,min:o,setMax:l,max:r},setAttributes:c}=e,i=99999999999999,m=e=>{let n=e;n<1&&(n=1),t&&o&&n<o&&(n=o),c({max:n})};return React.createElement(n.Fragment,null,React.createElement(a.BaseControl,null,React.createElement(a.ControlWrapper,{orientation:"horizontal"},React.createElement(a.ControlLabel,{label:"Set min number"}),React.createElement(a.ToggleControl,{checked:t,onChange:()=>{c({setMin:!t}),m(1)}})),t&&React.createElement(a.TextControl,{type:"number",placeholder:"0-"+(l&&r?r:i),value:o,onChange:e=>c({min:e}),onBlur:()=>(e=>{let t=e;t<0&&(t=0),l&&r&&t>r&&(t=r),c({min:t})})(o)})),React.createElement(a.BaseControl,null,React.createElement(a.ControlWrapper,{orientation:"horizontal"},React.createElement(a.ControlLabel,{label:"Set max number"}),React.createElement("div",{role:"presentation",className:"switch-control-wrapper"},React.createElement(a.ToggleControl,{checked:l,onChange:()=>{c({setMax:!l}),m(1)}}))),l&&React.createElement(a.TextControl,{type:"number",placeholder:(t&&o?o:1)+"-"+i,value:r,onChange:e=>c({max:e}),onBlur:()=>m(r)})))},logicControl:({value:e,setValue:t})=>{const[o,l]=(0,n.useState)(e);return(0,n.useEffect)((()=>{t(parseInt(o,10))}),[o]),React.createElement(a.TextControl,{type:"number",value:e,onChange:e=>l(e)})},title:"Number",order:4},{name:l}={name:"number",supports:{editable:!0,required:!0,attachment:!0,description:!0,logic:!0,placeholder:!0,defaultValue:!0,theme:!0,numeric:!0,payments:!0},attributes:{setMax:{type:"boolean",default:!1},max:{type:"number",default:0},setMin:{type:"boolean",default:!1},min:{type:"number",default:0}},logicalOperators:["is","is_not","greater_than","lower_than"]};(0,t.setBlockAdminSettings)(l,o),(window.qf=window.qf||{}).blocklibNumberBlockAdmin=e})();