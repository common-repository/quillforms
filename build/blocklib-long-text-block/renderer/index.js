(()=>{var t={9692:function(t,e){var r,n;r=function(t,e){"use strict";var r,n,o="function"==typeof Map?new Map:(r=[],n=[],{has:function(t){return r.indexOf(t)>-1},get:function(t){return n[r.indexOf(t)]},set:function(t,e){-1===r.indexOf(t)&&(r.push(t),n.push(e))},delete:function(t){var e=r.indexOf(t);e>-1&&(r.splice(e,1),n.splice(e,1))}}),a=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){a=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function i(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!o.has(t)){var e=null,r=null,n=null,i=function(){t.clientWidth!==r&&f()},s=function(e){window.removeEventListener("resize",i,!1),t.removeEventListener("input",f,!1),t.removeEventListener("keyup",f,!1),t.removeEventListener("autosize:destroy",s,!1),t.removeEventListener("autosize:update",f,!1),Object.keys(e).forEach((function(r){t.style[r]=e[r]})),o.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",s,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",f,!1),window.addEventListener("resize",i,!1),t.addEventListener("input",f,!1),t.addEventListener("autosize:update",f,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",o.set(t,{destroy:s,update:f}),"vertical"===(l=window.getComputedStyle(t,null)).resize?t.style.resize="none":"both"===l.resize&&(t.style.resize="horizontal"),e="content-box"===l.boxSizing?-(parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)):parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth),isNaN(e)&&(e=0),f()}var l;function u(e){var r=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=r,t.style.overflowY=e}function h(){if(0!==t.scrollHeight){var n=function(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}(t),o=document.documentElement&&document.documentElement.scrollTop;t.style.height="",t.style.height=t.scrollHeight+e+"px",r=t.clientWidth,n.forEach((function(t){t.node.scrollTop=t.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function f(){h();var e=Math.round(parseFloat(t.style.height)),r=window.getComputedStyle(t,null),o="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):t.offsetHeight;if(o<e?"hidden"===r.overflowY&&(u("scroll"),h(),o="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight):"hidden"!==r.overflowY&&(u("hidden"),h(),o="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight),n!==o){n=o;var i=a("autosize:resized");try{t.dispatchEvent(i)}catch(t){}}}}function s(t){var e=o.get(t);e&&e.destroy()}function l(t){var e=o.get(t);e&&e.update()}var u=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((u=function(t){return t}).destroy=function(t){return t},u.update=function(t){return t}):((u=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],(function(t){return i(t)})),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],s),t},u.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],l),t}),e.default=u,t.exports=e.default},void 0===(n=r.apply(e,[t,e]))||(t.exports=n)},8283:t=>{t.exports=function(t,e,r){return((r=window.getComputedStyle)?r(t):t.currentStyle)[e.replace(/-(\w)/gi,(function(t,e){return e.toUpperCase()}))]}},5467:(t,e,r)=>{var n=r(8283);t.exports=function(t){var e=n(t,"line-height"),r=parseFloat(e,10);if(e===r+""){var o=t.style.lineHeight;t.style.lineHeight=e+"em",e=n(t,"line-height"),r=parseFloat(e,10),o?t.style.lineHeight=o:delete t.style.lineHeight}if(-1!==e.indexOf("pt")?(r*=4,r/=3):-1!==e.indexOf("mm")?(r*=96,r/=25.4):-1!==e.indexOf("cm")?(r*=96,r/=2.54):-1!==e.indexOf("in")?r*=96:-1!==e.indexOf("pc")&&(r*=16),r=Math.round(r),"normal"===e){var a=t.nodeName,i=document.createElement(a);i.innerHTML="&nbsp;","TEXTAREA"===a.toUpperCase()&&i.setAttribute("rows","1");var s=n(t,"font-size");i.style.fontSize=s,i.style.padding="0px",i.style.border="0px";var l=document.body;l.appendChild(i),r=i.offsetHeight,l.removeChild(i)}return r}},2694:(t,e,r)=>{"use strict";var n=r(6925);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5556:(t,e,r)=>{t.exports=r(2694)()},6925:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6736:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function __(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}),a=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i=this&&this.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]])}return r};e.__esModule=!0;var s=r(1609),l=r(5556),u=r(9692),h=r(5467),f="autosize:resized",c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={lineHeight:null},e.textarea=null,e.onResize=function(t){e.props.onResize&&e.props.onResize(t)},e.updateLineHeight=function(){e.textarea&&e.setState({lineHeight:h(e.textarea)})},e.onChange=function(t){var r=e.props.onChange;e.currentValue=t.currentTarget.value,r&&r(t)},e}return o(e,t),e.prototype.componentDidMount=function(){var t=this,e=this.props,r=e.maxRows,n=e.async;"number"==typeof r&&this.updateLineHeight(),"number"==typeof r||n?setTimeout((function(){return t.textarea&&u(t.textarea)})):this.textarea&&u(this.textarea),this.textarea&&this.textarea.addEventListener(f,this.onResize)},e.prototype.componentWillUnmount=function(){this.textarea&&(this.textarea.removeEventListener(f,this.onResize),u.destroy(this.textarea))},e.prototype.render=function(){var t=this,e=this.props,r=(e.onResize,e.maxRows),n=(e.onChange,e.style),o=(e.innerRef,e.children),l=i(e,["onResize","maxRows","onChange","style","innerRef","children"]),u=this.state.lineHeight,h=r&&u?u*r:null;return s.createElement("textarea",a({},l,{onChange:this.onChange,style:h?a({},n,{maxHeight:h}):n,ref:function(e){t.textarea=e,"function"==typeof t.props.innerRef?t.props.innerRef(e):t.props.innerRef&&(t.props.innerRef.current=e)}}),o)},e.prototype.componentDidUpdate=function(){this.textarea&&u.update(this.textarea)},e.defaultProps={rows:1,async:!1},e.propTypes={rows:l.number,maxRows:l.number,onResize:l.func,innerRef:l.any,async:l.bool},e}(s.Component);e.TextareaAutosize=s.forwardRef((function(t,e){return s.createElement(c,a({},t,{innerRef:e}))}))},8766:(t,e,r)=>{"use strict";var n=r(6736);e.A=n.TextareaAutosize},1609:t=>{"use strict";t.exports=window.React},6942:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=i(t,a(r)))}return t}function a(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)n.call(t,r)&&t[r]&&(e=i(e,r));return e}function i(t,e){return e?t?t+" "+e:t+e:t}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const t=window.qf.blocks;var e=r(1609);const o=window.qf.rendererCore;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}var i=/^\s+/,s=/\s+$/;function l(t,e){if(e=e||{},(t=t||"")instanceof l)return t;if(!(this instanceof l))return new l(t,e);var r=function(t){var e,r,n,o={r:0,g:0,b:0},l=1,u=null,h=null,f=null,c=!1,d=!1;return"string"==typeof t&&(t=function(t){t=t.replace(i,"").replace(s,"").toLowerCase();var e,r=!1;if(S[t])t=S[t],r=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(e=j.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=j.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=j.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=j.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=j.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=j.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=j.hex8.exec(t))?{r:O(e[1]),g:O(e[2]),b:O(e[3]),a:F(e[4]),format:r?"name":"hex8"}:(e=j.hex6.exec(t))?{r:O(e[1]),g:O(e[2]),b:O(e[3]),format:r?"name":"hex"}:(e=j.hex4.exec(t))?{r:O(e[1]+""+e[1]),g:O(e[2]+""+e[2]),b:O(e[3]+""+e[3]),a:F(e[4]+""+e[4]),format:r?"name":"hex8"}:!!(e=j.hex3.exec(t))&&{r:O(e[1]+""+e[1]),g:O(e[2]+""+e[2]),b:O(e[3]+""+e[3]),format:r?"name":"hex"}}(t)),"object"==a(t)&&(q(t.r)&&q(t.g)&&q(t.b)?(e=t.r,r=t.g,n=t.b,o={r:255*C(e,255),g:255*C(r,255),b:255*C(n,255)},c=!0,d="%"===String(t.r).substr(-1)?"prgb":"rgb"):q(t.h)&&q(t.s)&&q(t.v)?(u=T(t.s),h=T(t.v),o=function(t,e,r){t=6*C(t,360),e=C(e,100),r=C(r,100);var n=Math.floor(t),o=t-n,a=r*(1-e),i=r*(1-o*e),s=r*(1-(1-o)*e),l=n%6;return{r:255*[r,i,a,a,s,r][l],g:255*[s,r,r,i,a,a][l],b:255*[a,a,s,r,r,i][l]}}(t.h,u,h),c=!0,d="hsv"):q(t.h)&&q(t.s)&&q(t.l)&&(u=T(t.s),f=T(t.l),o=function(t,e,r){var n,o,a;function i(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=C(t,360),e=C(e,100),r=C(r,100),0===e)n=o=a=r;else{var s=r<.5?r*(1+e):r+e-r*e,l=2*r-s;n=i(l,s,t+1/3),o=i(l,s,t),a=i(l,s,t-1/3)}return{r:255*n,g:255*o,b:255*a}}(t.h,u,f),c=!0,d="hsl"),t.hasOwnProperty("a")&&(l=t.a)),l=R(l),{ok:c,format:t.format||d,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:l}}(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||r.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function u(t,e,r){t=C(t,255),e=C(e,255),r=C(r,255);var n,o,a=Math.max(t,e,r),i=Math.min(t,e,r),s=(a+i)/2;if(a==i)n=o=0;else{var l=a-i;switch(o=s>.5?l/(2-a-i):l/(a+i),a){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:o,l:s}}function h(t,e,r){t=C(t,255),e=C(e,255),r=C(r,255);var n,o,a=Math.max(t,e,r),i=Math.min(t,e,r),s=a,l=a-i;if(o=0===a?0:l/a,a==i)n=0;else{switch(a){case t:n=(e-r)/l+(e<r?6:0);break;case e:n=(r-t)/l+2;break;case r:n=(t-e)/l+4}n/=6}return{h:n,s:o,v:s}}function f(t,e,r,n){var o=[H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(r).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function c(t,e,r,n){return[H(z(n)),H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(r).toString(16))].join("")}function d(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.s-=e/100,r.s=E(r.s),l(r)}function p(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.s+=e/100,r.s=E(r.s),l(r)}function g(t){return l(t).desaturate(100)}function b(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.l+=e/100,r.l=E(r.l),l(r)}function m(t,e){e=0===e?0:e||10;var r=l(t).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),l(r)}function y(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.l-=e/100,r.l=E(r.l),l(r)}function v(t,e){var r=l(t).toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,l(r)}function x(t){var e=l(t).toHsl();return e.h=(e.h+180)%360,l(e)}function _(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var r=l(t).toHsl(),n=[l(t)],o=360/e,a=1;a<e;a++)n.push(l({h:(r.h+a*o)%360,s:r.s,l:r.l}));return n}function w(t){var e=l(t).toHsl(),r=e.h;return[l(t),l({h:(r+72)%360,s:e.s,l:e.l}),l({h:(r+216)%360,s:e.s,l:e.l})]}function M(t,e,r){e=e||6,r=r||30;var n=l(t).toHsl(),o=360/r,a=[l(t)];for(n.h=(n.h-(o*e>>1)+720)%360;--e;)n.h=(n.h+o)%360,a.push(l(n));return a}function A(t,e){e=e||6;for(var r=l(t).toHsv(),n=r.h,o=r.s,a=r.v,i=[],s=1/e;e--;)i.push(l({h:n,s:o,v:a})),a=(a+s)%1;return i}l.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,r,n=this.toRgb();return t=n.r/255,e=n.g/255,r=n.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(t){return this._a=R(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=h(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=h(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),n=Math.round(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=u(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=u(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),n=Math.round(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return f(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,r,n,o){var a=[H(Math.round(t).toString(16)),H(Math.round(e).toString(16)),H(Math.round(r).toString(16)),H(z(n))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*C(this._r,255))+"%",g:Math.round(100*C(this._g,255))+"%",b:Math.round(100*C(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*C(this._r,255))+"%, "+Math.round(100*C(this._g,255))+"%, "+Math.round(100*C(this._b,255))+"%)":"rgba("+Math.round(100*C(this._r,255))+"%, "+Math.round(100*C(this._g,255))+"%, "+Math.round(100*C(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(k[f(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+c(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var o=l(t);r="#"+c(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return l(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(y,arguments)},desaturate:function(){return this._applyModification(d,arguments)},saturate:function(){return this._applyModification(p,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(v,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(M,arguments)},complement:function(){return this._applyCombination(x,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(w,arguments)},triad:function(){return this._applyCombination(_,[3])},tetrad:function(){return this._applyCombination(_,[4])}},l.fromRatio=function(t,e){if("object"==a(t)){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:T(t[n]));t=r}return l(t,e)},l.equals=function(t,e){return!(!t||!e)&&l(t).toRgbString()==l(e).toRgbString()},l.random=function(){return l.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},l.mix=function(t,e,r){r=0===r?0:r||50;var n=l(t).toRgb(),o=l(e).toRgb(),a=r/100;return l({r:(o.r-n.r)*a+n.r,g:(o.g-n.g)*a+n.g,b:(o.b-n.b)*a+n.b,a:(o.a-n.a)*a+n.a})},l.readability=function(t,e){var r=l(t),n=l(e);return(Math.max(r.getLuminance(),n.getLuminance())+.05)/(Math.min(r.getLuminance(),n.getLuminance())+.05)},l.isReadable=function(t,e,r){var n,o,a,i,s,u=l.readability(t,e);switch(o=!1,(a=r,"AA"!==(i=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==i&&(i="AA"),"small"!==(s=(a.size||"small").toLowerCase())&&"large"!==s&&(s="small"),n={level:i,size:s}).level+n.size){case"AAsmall":case"AAAlarge":o=u>=4.5;break;case"AAlarge":o=u>=3;break;case"AAAsmall":o=u>=7}return o},l.mostReadable=function(t,e,r){var n,o,a,i,s=null,u=0;o=(r=r||{}).includeFallbackColors,a=r.level,i=r.size;for(var h=0;h<e.length;h++)(n=l.readability(t,e[h]))>u&&(u=n,s=l(e[h]));return l.isReadable(t,s,{level:a,size:i})||!o?s:(r.includeFallbackColors=!1,l.mostReadable(t,["#fff","#000"],r))};var S=l.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},k=l.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(S);function R(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function C(t,e){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var r=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function E(t){return Math.min(1,Math.max(0,t))}function O(t){return parseInt(t,16)}function H(t){return 1==t.length?"0"+t:""+t}function T(t){return t<=1&&(t=100*t+"%"),t}function z(t){return Math.round(255*parseFloat(t)).toString(16)}function F(t){return O(t)/255}var L,P,N,j=(P="[\\s|\\(]+("+(L="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",N="[\\s|\\(]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",{CSS_UNIT:new RegExp(L),rgb:new RegExp("rgb"+P),rgba:new RegExp("rgba"+N),hsl:new RegExp("hsl"+P),hsla:new RegExp("hsla"+N),hsv:new RegExp("hsv"+P),hsva:new RegExp("hsva"+N),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function q(t){return!!j.CSS_UNIT.exec(t)}var I=r(8766);const W=window.emotion;var $=r(6942),B=r.n($);const D={display:t=>{const{id:r,attributes:n,setIsValid:a,setIsAnswered:i,setValidationErr:s,showNextBtn:u,blockWithError:h,val:f,setVal:c,showErrMsg:d,next:p,inputRef:g,isTouchScreen:b,setFooterDisplay:m,isReviewing:y,isPreview:v}=t,{minCharacters:x,setMaxCharacters:_,maxCharacters:w,required:M,placeholder:A}=n,S=(0,o.useBlockTheme)(n.themeId),k=(0,o.useMessages)(),R=l(S.answersColor),C=t=>{!0!==M||t&&""!==t?_&&w>0&&t?.length>w?(a(!1),s(k["label.errorAlert.maxCharacters"])):!1!==x&&x>0&&t?.length<x?(a(!1),s(k["label.errorAlert.minCharacters"])):(a(!0),s(null)):(a(!1),s(k["label.errorAlert.required"]))};return(0,e.useEffect)((()=>{!v&&y||C(f)}),[n]),React.createElement(React.Fragment,null,React.createElement(I.A,{ref:g,onKeyDown:t=>{13===t.keyCode&&(t.shiftKey?t.stopPropagation():t.preventDefault())},className:B()(W.css`
						& {
							width: 100%;
							height: 120px;
							padding: 10px;
							border: none !important;
							outline: none;
							border-radius: 0 !important;
							padding-bottom: 8px;
							background: ${l(R).setAlpha(.1).toString()} !important;
							transition: box-shadow 0.1s ease-out 0s;
							resize: none;
							box-shadow: ${R.setAlpha(.3).toString()}
								0px 3px !important;
						}

						&::placeholder {
							opacity: 0.3;
							/* Chrome, Firefox, Opera, Safari 10.1+ */
							color: ${S.answersColor};
						}

						&:-ms-input-placeholder {
							opacity: 0.3;
							/* Internet Explorer 10-11 */
							color: ${S.answersColor};
						}

						&::-ms-input-placeholder {
							opacity: 0.3;
							/* Microsoft Edge */
							color: ${S.answersColor};
						}

						&:focus {
							box-shadow: ${R.setAlpha(1).toString()}
								0px 4px !important;
						}

						color: ${S.answersColor} !important;
						-webkit-appearance: none;
					`),id:"longText-"+r,placeholder:!1===A?k["block.longText.placeholder"]:A,onChange:t=>{const e=t.target.value;_&&w>0&&e.length>w?h(k["label.errorAlert.maxCharacters"]):(c(e),d(!1),C(e)),""!==e?(i(!0),u(!0)):i(!1)},value:f&&f.length>0?f:"",onFocus:()=>{b&&m(!1)},onBlur:()=>{b&&m(!0)},autoComplete:"off"}),React.createElement("div",{className:B()("qf-blocklib-long-text-block-renderer__hint-text",W.css`
						margin-top: 12px;
						color: ${S.questionsColor};
						font-size: 14px;
					`)},React.createElement(o.HTMLParser,{value:b?k["block.longText.touchHint"]:k["block.longText.hint"]})))}},{name:U}={name:"long-text",supports:{editable:!0,required:!0,attachment:!0,description:!0,placeholder:!0,defaultValue:!0,logic:!0,theme:!0},attributes:{minCharacters:{type:["boolean","number"],default:!1},setMaxCharacters:{type:"boolean",default:!1},maxCharacters:{type:"number",multipleOf:1}},logicalOperators:["is","is_not","starts_with","ends_with","contains","not_contains"]};(0,t.setBlockRendererSettings)(U,D)})(),(window.qf=window.qf||{}).blocklibLongTextBlockRenderer=n})();