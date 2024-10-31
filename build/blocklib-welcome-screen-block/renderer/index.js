(()=>{var e={6942:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=i(e,r(o)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=i(t,o));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";o.r(n);const e=window.qf.blocks,t=window.React,a=window.qf.rendererCore,r=window.wp.data,i=window.lodash,c=window.emotion;var l=o(6942),s=o.n(l);const m=({attributes:e,isPreview:t})=>React.createElement("div",{className:s()("renderer-core-block-attachment",c.css`
					${"split-right"!==e.layout&&"split-left"!==e.layout&&`\n\t\t\t\t\tmax-width: ${e?.attachmentMaxWidth};\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\t`}
					overflow: hidden;
				`)},e.attachment&&e.attachment.url?React.createElement("img",{alt:"",src:e.attachment.url,className:s()("renderer-core-block-attachment__image",c.css`
							${"split-right"!==e.layout&&"split-left"!==e.layout&&`border-radius: ${e.attachmentBorderRadius};\n\t\t\t\t\t\t\t margin: auto;\n\t\t\t\t\t\t\t`}
						`)}):React.createElement(React.Fragment,null,t&&React.createElement("div",{className:"renderer-core-block-attachment__placeholder"},React.createElement("svg",{className:"renderer-core-block-attachment__placeholder-icon",focusable:"false",viewBox:"0 0 24 24",role:"presentation"},React.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),React.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}))))),u=({isSticky:e,buttonText:t,next:o,theme:n})=>{const r=(0,a.useMessages)(),i="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;return React.createElement("div",{className:s()("qf-welcome-screen-block__action-wrapper",{"is-sticky":e},c.css`
					& {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 20px;
					}
					// &.is-sticky {
					// 	position: absolute;
					// 	bottom: 0;
					// 	right: 0;
					// 	left: 0;
					// 	width: 100%;
					// 	background-color: rgba(0, 0, 0, 0.05);
					// 	box-shadow: rgba(0, 0, 0, 0.1) 0 -1px;
					// 	height: 70px;
					// 	display: flex;
					// 	align-items: center;
					// 	justify-content: center;

					// 	.qf-welcome-screen-block__action {
					// 		margin: 0 auto;
				`)},React.createElement("div",{className:"qf-welcome-screen-block__action"},React.createElement(a.Button,{theme:n,onClick:o},t)),React.createElement("div",{className:s()("qf-welcome-screen-block__action-helper-text",c.css`
						color: ${n.questionsColor};
						font-size: 12px;
					`)},!i&&React.createElement(a.HTMLParser,{value:r["label.hintText.enter"]})))},p={display:({attributes:e})=>{const{isPreview:o,deviceWidth:n}=(0,a.useFormContext)(),[l,p]=(0,t.useState)(!1),[d,h]=(0,t.useState)(!1),f=(0,a.useBlockTheme)(e.themeId),b=(0,t.useRef)(),g=(0,t.useRef)(),{goToBlock:w}=(0,r.useDispatch)("quillForms/renderer-core"),{walkPath:y}=(0,r.useSelect)((e=>({walkPath:e("quillForms/renderer-core").getWalkPath()})));(0,t.useEffect)((()=>(p(!0),()=>p(!1))),[]);let v=i.noop;return y[0]&&y[0].id&&(v=()=>w(y[0].id)),React.createElement("div",{className:c.css`
				height: 100%;
				position: relative;
				outline: none;
			`,ref:b,tabIndex:"0",onKeyDown:e=>{"Enter"===e.key&&(e.stopPropagation(),v())}},React.createElement("div",{className:s()("qf-welcome-screen-block__wrapper","blocktype-welcome-screen-block",`renderer-core-block-${e?.layout}-layout`,{"with-sticky-footer":d,active:l},c.css`
						& {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 6;
							display: flex;
							${("stack"===e.layout||"mobile"===n&&("float-left"===e.layout||"float-right"===e.layout))&&"flex-direction: column;\n\t\t\t\t\t\t\t.qf-welcome-screen-block__content-wrapper {\n\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t}"}
							justify-content: center;
							width: 100%;
							height: 100%;
							overflow-y: auto;
							opacity: 0;
							visibility: hidden;
							transition: all 0.4s ease-in-out;
							-webkit-transition: all 0.4s ease-in-out;
							-moz-transition: all 0.4s ease-in-out;
						}

						&.active {
							opacity: 1;
							visibility: visible;
						}
						// &.with-sticky-footer {
						// 	display: block;
						// 	.qf-welcome-screen-block__content-wrapper {
						// 		height: calc(100% - 70px);

						// 	}
						// }
						.qf-welcome-screen-block__content-wrapper {
							display: flex;
							flex-direction: column;
							justify-content: center;
							max-width: 700px;
							padding: 30px;
							word-wrap: break-word;
							text-align: center;
							margin-right: auto;
							margin-left: auto;
							min-height: 100%;
						}
					`)},React.createElement("div",{className:"qf-welcome-screen-block__content-wrapper"},React.createElement("div",{className:"qf-welcome-screen-block__content",ref:g},("stack"===e.layout||"mobile"===n&&("float-left"===e.layout||"float-right"===e.layout))&&React.createElement(m,{isPreview:o,attributes:e}),React.createElement("div",{className:c.css`
								margin-top: 25px;
							`},e?.label&&React.createElement("div",{className:s()("renderer-components-block-label",c.css`
										color: ${f.questionsColor};
										font-family: ${f.questionsLabelFont};
										@media ( min-width: 768px ) {
											font-size: ${f.questionsLabelFontSize.lg} !important;
											line-height: ${f.questionsLabelLineHeight.lg} !important;
										}
										@media ( max-width: 767px ) {
											font-size: ${f.questionsLabelFontSize.sm} !important;
											line-height: ${f.questionsLabelLineHeight.sm} !important;
										}
									`)},React.createElement(a.HTMLParser,{value:e.label})),e?.description&&""!==e.description&&React.createElement("div",{className:s()("renderer-components-block-description",c.css`
												color: ${f.questionsColor};
												font-family: ${f.questionsDescriptionFont};
												@media ( min-width: 768px ) {
													font-size: ${f.questionsDescriptionFontSize.lg} !important;
													line-height: ${f.questionsDescriptionLineHeight.lg} !important;
												}
												@media ( max-width: 767px ) {
													font-size: ${f.questionsDescriptionFontSize.sm} !important;
													line-height: ${f.questionsDescriptionLineHeight.sm} !important;
												}
											`)},React.createElement(a.HTMLParser,{value:e.description})),e.customHTML&&React.createElement("div",{className:s()("renderer-components-block-custom-html",c.css`
											color: ${f.questionsColor};
										`),dangerouslySetInnerHTML:{__html:e?.customHTML}})),React.createElement(u,{theme:f,next:v,isSticky:d,buttonText:e.buttonText}))),("stack"!==e.layout&&"mobile"!==n||"mobile"===n&&("split-left"===e.layout||"split-right"===e.layout))&&React.createElement("div",{className:s()("renderer-core-block-attachment-wrapper",c.css`
								img {
									object-position: ${100*e?.attachmentFocalPoint?.x}%
										${100*e?.attachmentFocalPoint?.y}%;
								}
							`)},React.createElement(m,{isPreview:o,attributes:e}))))}},{name:d}={name:"welcome-screen",attributes:{buttonText:{type:"string",default:"Let's start!"}},supports:{editable:!1,required:!1,attachment:!0,description:!0,logic:!1}};(0,e.setBlockRendererSettings)(d,p)})(),(window.qf=window.qf||{}).blocklibWelcomeScreenBlockRenderer=n})();