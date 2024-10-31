(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=window.qf.blocks,a=window.React,n=window.qf.adminComponents,l=window.wp.primitives,o=(0,a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(l.Path,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})),r=(0,a.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(l.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),c=window.wp.components,i=window.emotion,m={color:"#d62575",icon:()=>React.createElement("svg",{fill:"currentColor",height:"32",width:"32",viewBox:"0 0 16 16"},React.createElement("path",{d:"M20 4v-2h2v2h-2zM13 6.75c0-0.412-0.338-0.75-0.75-0.75h-2.5c-0.412 0-0.75 0.338-0.75 0.75v0.25h-9v2h9v0.25c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-0.25h3v-2h-3v-0.25zM10 9v-2h2v2h-2zM7 0"})),controls:({attributes:e,setAttributes:t})=>{const l=[{key:"no",name:"No"},{key:"yes",name:"Yes"},{key:"custom",name:"Custom"}],{min:m,max:s,step:u,prefix:p,suffix:d,marks:h,customMarks:E}=e,C=(e,a,n)=>{const l=[...E];l[e][a]=n,t({customMarks:l})};return React.createElement(a.Fragment,null,React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Min"}),React.createElement(n.TextControl,{type:"number",value:m,onChange:e=>{isNaN(e)||t({min:e})}}))),React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Max"}),React.createElement(n.TextControl,{type:"number",value:s,onChange:e=>{isNaN(e)||t({max:e})}}))),React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Step"}),React.createElement(n.TextControl,{type:"number",value:u,onChange:e=>{isNaN(e)||t({step:e})}}))),React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Marks"}),React.createElement(n.SelectControl,{value:l.find((e=>e.key===h)),onChange:e=>{e&&e.selectedItem&&t({marks:e.selectedItem.key})},options:l})),"custom"===h&&React.createElement(React.Fragment,null,E.map(((a,l)=>React.createElement("div",{className:"admin-components-choices-inserter__choice-row",key:l},React.createElement(n.TextControl,{type:"number",value:a.value,onChange:e=>C(l,"value",e),placeholder:"value"}),React.createElement(n.TextControl,{type:"text",value:a.label,onChange:e=>C(l,"label",e),placeholder:"label"}),React.createElement("div",{className:"admin-components-choices-inserter__choice-actions"},React.createElement("div",{className:"admin-components-choices-inserter__choice-add"},React.createElement(c.Icon,{icon:o,onClick:()=>(a=>{t({customMarks:[...e.customMarks.slice(0,a),{label:"",value:""},...e.customMarks.slice(a)]})})(l+1)})),E.length>1&&React.createElement("div",{className:"admin-components-choices-inserter__choice-remove"},React.createElement(c.Icon,{className:i.css`
								fill: #fff;
							`,icon:r,onClick:()=>(e=>{const a=[...E];a.splice(e,1),t({customMarks:a})})(l)})))))))),React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Prefix"}),React.createElement(n.TextControl,{value:p,onChange:e=>t({prefix:e})}))),React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Suffix"}),React.createElement(n.TextControl,{value:d,onChange:e=>t({suffix:e})}))))},title:"Slider",order:6.5},{name:s}={name:"slider",supports:{editable:!0,required:!0,attachment:!0,description:!0,logic:!0,defaultValue:!0,theme:!0,numeric:!0,payments:!0},attributes:{min:{type:"number",default:0},max:{type:"number",default:100},step:{type:"number",default:10},prefix:{type:"string",default:""},suffix:{type:"string",default:""},marks:{type:"string",default:"no"},customMarks:{type:"array",default:[{label:"",value:""}]}},logicalOperators:["is","is_not","greater_than","lower_than"]};(0,t.setBlockAdminSettings)(s,m),(window.qf=window.qf||{}).blocklibSliderBlockAdmin=e})();