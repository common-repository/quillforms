(()=>{var e={6942:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,n(r)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";r.r(o);const e=window.qf.blocks,t=window.React,a=window.qf.rendererCore,n=window.qf.utils,i=window.ReactDOM;function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}window.wp.data;var l=/^\s+/,c=/\s+$/;function u(e,t){if(t=t||{},(e=e||"")instanceof u)return e;if(!(this instanceof u))return new u(e,t);var r=function(e){var t,r,o,a={r:0,g:0,b:0},n=1,i=null,u=null,d=null,f=!1,h=!1;return"string"==typeof e&&(e=function(e){e=e.replace(l,"").replace(c,"").toLowerCase();var t,r=!1;if(C[e])e=C[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=z.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=z.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=z.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=z.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=z.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=z.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=z.hex8.exec(e))?{r:H(t[1]),g:H(t[2]),b:H(t[3]),a:N(t[4]),format:r?"name":"hex8"}:(t=z.hex6.exec(e))?{r:H(t[1]),g:H(t[2]),b:H(t[3]),format:r?"name":"hex"}:(t=z.hex4.exec(e))?{r:H(t[1]+""+t[1]),g:H(t[2]+""+t[2]),b:H(t[3]+""+t[3]),a:N(t[4]+""+t[4]),format:r?"name":"hex8"}:!!(t=z.hex3.exec(e))&&{r:H(t[1]+""+t[1]),g:H(t[2]+""+t[2]),b:H(t[3]+""+t[3]),format:r?"name":"hex"}}(e)),"object"==s(e)&&(B(e.r)&&B(e.g)&&B(e.b)?(t=e.r,r=e.g,o=e.b,a={r:255*$(t,255),g:255*$(r,255),b:255*$(o,255)},f=!0,h="%"===String(e.r).substr(-1)?"prgb":"rgb"):B(e.h)&&B(e.s)&&B(e.v)?(i=q(e.s),u=q(e.v),a=function(e,t,r){e=6*$(e,360),t=$(t,100),r=$(r,100);var o=Math.floor(e),a=e-o,n=r*(1-t),i=r*(1-a*t),s=r*(1-(1-a)*t),l=o%6;return{r:255*[r,i,n,n,s,r][l],g:255*[s,r,r,i,n,n][l],b:255*[n,n,s,r,r,i][l]}}(e.h,i,u),f=!0,h="hsv"):B(e.h)&&B(e.s)&&B(e.l)&&(i=q(e.s),d=q(e.l),a=function(e,t,r){var o,a,n;function i(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=$(e,360),t=$(t,100),r=$(r,100),0===t)o=a=n=r;else{var s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;o=i(l,s,e+1/3),a=i(l,s,e),n=i(l,s,e-1/3)}return{r:255*o,g:255*a,b:255*n}}(e.h,i,d),f=!0,h="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=E(n),{ok:f,format:e.format||h,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:n}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function d(e,t,r){e=$(e,255),t=$(t,255),r=$(r,255);var o,a,n=Math.max(e,t,r),i=Math.min(e,t,r),s=(n+i)/2;if(n==i)o=a=0;else{var l=n-i;switch(a=s>.5?l/(2-n-i):l/(n+i),n){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4}o/=6}return{h:o,s:a,l:s}}function f(e,t,r){e=$(e,255),t=$(t,255),r=$(r,255);var o,a,n=Math.max(e,t,r),i=Math.min(e,t,r),s=n,l=n-i;if(a=0===n?0:l/n,n==i)o=0;else{switch(n){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4}o/=6}return{h:o,s:a,v:s}}function h(e,t,r,o){var a=[T(Math.round(e).toString(16)),T(Math.round(t).toString(16)),T(Math.round(r).toString(16))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function g(e,t,r,o){return[T(I(o)),T(Math.round(e).toString(16)),T(Math.round(t).toString(16)),T(Math.round(r).toString(16))].join("")}function p(e,t){t=0===t?0:t||10;var r=u(e).toHsl();return r.s-=t/100,r.s=F(r.s),u(r)}function b(e,t){t=0===t?0:t||10;var r=u(e).toHsl();return r.s+=t/100,r.s=F(r.s),u(r)}function m(e){return u(e).desaturate(100)}function v(e,t){t=0===t?0:t||10;var r=u(e).toHsl();return r.l+=t/100,r.l=F(r.l),u(r)}function y(e,t){t=0===t?0:t||10;var r=u(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),u(r)}function x(e,t){t=0===t?0:t||10;var r=u(e).toHsl();return r.l-=t/100,r.l=F(r.l),u(r)}function w(e,t){var r=u(e).toHsl(),o=(r.h+t)%360;return r.h=o<0?360+o:o,u(r)}function _(e){var t=u(e).toHsl();return t.h=(t.h+180)%360,u(t)}function k(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var r=u(e).toHsl(),o=[u(e)],a=360/t,n=1;n<t;n++)o.push(u({h:(r.h+n*a)%360,s:r.s,l:r.l}));return o}function M(e){var t=u(e).toHsl(),r=t.h;return[u(e),u({h:(r+72)%360,s:t.s,l:t.l}),u({h:(r+216)%360,s:t.s,l:t.l})]}function S(e,t,r){t=t||6,r=r||30;var o=u(e).toHsl(),a=360/r,n=[u(e)];for(o.h=(o.h-(a*t>>1)+720)%360;--t;)o.h=(o.h+a)%360,n.push(u(o));return n}function A(e,t){t=t||6;for(var r=u(e).toHsv(),o=r.h,a=r.s,n=r.v,i=[],s=1/t;t--;)i.push(u({h:o,s:a,v:n})),n=(n+s)%1;return i}u.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,o=this.toRgb();return e=o.r/255,t=o.g/255,r=o.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=E(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=f(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=f(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),o=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+o+"%)":"hsva("+t+", "+r+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var e=d(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=d(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),o=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+o+"%)":"hsla("+t+", "+r+"%, "+o+"%, "+this._roundA+")"},toHex:function(e){return h(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,o,a){var n=[T(Math.round(e).toString(16)),T(Math.round(t).toString(16)),T(Math.round(r).toString(16)),T(I(o))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)&&n[3].charAt(0)==n[3].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*$(this._r,255))+"%",g:Math.round(100*$(this._g,255))+"%",b:Math.round(100*$(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*$(this._r,255))+"%, "+Math.round(100*$(this._g,255))+"%, "+Math.round(100*$(this._b,255))+"%)":"rgba("+Math.round(100*$(this._r,255))+"%, "+Math.round(100*$(this._g,255))+"%, "+Math.round(100*$(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(R[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+g(this._r,this._g,this._b,this._a),r=t,o=this._gradientType?"GradientType = 1, ":"";if(e){var a=u(e);r="#"+g(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,o=this._a<1&&this._a>=0;return t||!o||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return u(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(v,arguments)},brighten:function(){return this._applyModification(y,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(p,arguments)},saturate:function(){return this._applyModification(b,arguments)},greyscale:function(){return this._applyModification(m,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(_,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(M,arguments)},triad:function(){return this._applyCombination(k,[3])},tetrad:function(){return this._applyCombination(k,[4])}},u.fromRatio=function(e,t){if("object"==s(e)){var r={};for(var o in e)e.hasOwnProperty(o)&&(r[o]="a"===o?e[o]:q(e[o]));e=r}return u(e,t)},u.equals=function(e,t){return!(!e||!t)&&u(e).toRgbString()==u(t).toRgbString()},u.random=function(){return u.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},u.mix=function(e,t,r){r=0===r?0:r||50;var o=u(e).toRgb(),a=u(t).toRgb(),n=r/100;return u({r:(a.r-o.r)*n+o.r,g:(a.g-o.g)*n+o.g,b:(a.b-o.b)*n+o.b,a:(a.a-o.a)*n+o.a})},u.readability=function(e,t){var r=u(e),o=u(t);return(Math.max(r.getLuminance(),o.getLuminance())+.05)/(Math.min(r.getLuminance(),o.getLuminance())+.05)},u.isReadable=function(e,t,r){var o,a,n,i,s,l=u.readability(e,t);switch(a=!1,(n=r,"AA"!==(i=((n=n||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==i&&(i="AA"),"small"!==(s=(n.size||"small").toLowerCase())&&"large"!==s&&(s="small"),o={level:i,size:s}).level+o.size){case"AAsmall":case"AAAlarge":a=l>=4.5;break;case"AAlarge":a=l>=3;break;case"AAAsmall":a=l>=7}return a},u.mostReadable=function(e,t,r){var o,a,n,i,s=null,l=0;a=(r=r||{}).includeFallbackColors,n=r.level,i=r.size;for(var c=0;c<t.length;c++)(o=u.readability(e,t[c]))>l&&(l=o,s=u(t[c]));return u.isReadable(e,s,{level:n,size:i})||!a?s:(r.includeFallbackColors=!1,u.mostReadable(e,["#fff","#000"],r))};var C=u.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},R=u.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(C);function E(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function $(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function F(e){return Math.min(1,Math.max(0,e))}function H(e){return parseInt(e,16)}function T(e){return 1==e.length?"0"+e:""+e}function q(e){return e<=1&&(e=100*e+"%"),e}function I(e){return Math.round(255*parseFloat(e)).toString(16)}function N(e){return H(e)/255}var P,O,L,z=(O="[\\s|\\(]+("+(P="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",L="[\\s|\\(]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",{CSS_UNIT:new RegExp(P),rgb:new RegExp("rgb"+O),rgba:new RegExp("rgba"+L),hsl:new RegExp("hsl"+O),hsla:new RegExp("hsla"+L),hsv:new RegExp("hsv"+O),hsva:new RegExp("hsva"+L),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function B(e){return!!z.CSS_UNIT.exec(e)}r(6942);const j=window.lodash;function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},D.apply(this,arguments)}const Y=window.wp.i18n,W=(0,n.keyframes)({"0%":{transform:"translateY(100%)"},"100%":{transform:"translateY(0%)"}}),V=(0,n.keyframes)({"0%":{transform:"translateY(0%)"},"100%":{transform:"translateY(100%)"}}),K=e=>n.css`
	position: fixed;
	inset: 0;
	height: 100% !important;
	display: flex;
	background-color: #fff;
	flex-direction: column;
	z-index: 111111111;

	&.show {
		transform: translateY(100%);
		animation: ${W} 0.5s ease-in-out 1 forwards;
	}

	&.hide {
		transform: translateY(0%);
		animation: ${V} 0.5s ease-in-out 1 forwards;
	}
	> div {
		background: ${e.backgroundColor};
		${(e=>{let t="";return e.backgroundImage&&e.backgroundImage&&(t=`background-image: url('${e.backgroundImage}');\n\t\t\tbackground-size: cover;\n\t\t\tbackground-position: ${100*parseFloat(e.backgroundImageFocalPoint?.x)}%\n\t\t\t${100*parseFloat(e.backgroundImageFocalPoint?.y)}%;\n\n\t\t\tbackground-repeat: no-repeat;\n\t\t`),t})(e)};
		padding: 20px 10px;
		overflow-y: auto;
		height: 100% !important;
	}
	.back-icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		fill: ${e.questionsColor} !important
	}
}`,U=(0,n.keyframes)({"0%":{transform:"scale( 1 )"},"25%":{transform:"scale( 0.97 )"},"50%":{transform:"scale( 0.99 )"},"75%":{transform:"scale( 0.97 )"},"100%":{transform:"scale( 1 )"}}),G=n.css`
	& {
		position: absolute;
		top: 112%;
		right: 0;
		left: 0;
		padding-top: 15px;
		border-radius: 5px;
		width: 100%;
		overflow-y: auto;
		transition: transform, opacity 0.3s linear;
		z-index: 11111;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-10px);
	}

	&.visible {
		max-height: 300px;
		visibility: visible;
		opacity: 1;
		transform: none;
	}

	&.fixed-choices {
		position: static;
		height: auto !important;
		padding: 10px 20px;
	}


}`,X=n.css`
	& {
		padding: 10px;
		margin-bottom: 8px;
		border-width: 1px;
		border-style: solid;
		border-radius: 5px;
		cursor: pointer;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}
	&:last-child {
		margin-bottom: 0;
	}

	&.isBeingSelected {
		animation: ${U} 0.4s linear forwards;
	}
}`,J=n.css`
	position: absolute;
	${(0,Y.isRTL)()?"left: 0":"right: 0"};
	bottom: 4px;
	cursor: pointer;

	svg {
		width: 26px;
		height: 26px;
	}
`,Q=e=>{const t=(0,a.useTheme)(),r=(0,n.useCx)();return React.createElement("div",D({tabIndex:"0"},e,{className:r("block-dropdown-renderer-expand-icon",J)}),React.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",className:r(n.css`
					fill: ${t.answersColor};
				`)},React.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})))},Z=e=>{const t=(0,a.useTheme)(),r=(0,n.useCx)();return React.createElement("div",D({},e,{className:r("block-dropdown-renderer-close-icon",J)}),React.createElement("svg",{height:"32",width:"32",viewBox:"0 0 512 512",className:r(n.css`
					fill: ${t.answersColor};
				`)},React.createElement("g",null,React.createElement("g",null,React.createElement("g",null,React.createElement("polygon",{points:"405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798\r 375.202,405 405,375.202 285.798,256 \t\t"},React.createElement("polygon",{points:"405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798\r 375.202,405 405,375.202 285.798,256 \t\t"})))))))};let ee;const te=({choice:e,blockId:r,choiceIndex:o,val:i,clickHandler:s,showDropdown:l,clicked:c,hovered:d})=>{const[f,h]=(0,t.useState)(!1),g=(0,t.useRef)(),p=(0,n.useCx)();(0,t.useEffect)((()=>{l||h(!1)}),[l]);const b=(0,a.useTheme)(),m=u(b.answersColor),v=i&&i===e.value;return(0,t.useEffect)((()=>(c&&g.current.click(),()=>{c=!1})),[c]),React.createElement("div",{ref:g,id:`block-${r}-option-${o}`,className:p("dropdown__choiceWrapper",{selected:v,isBeingSelected:f},n.css`
						background: ${d?m.setAlpha(.2).toString():m.setAlpha(.1).toString()};

						border-color: ${b.answersColor};
						color: ${b.answersColor};

						&:hover {
							background: ${m.setAlpha(.2).toString()};
						}

						&.selected {
							background: ${u(b.answersColor).setAlpha(.75).toString()};
							color: ${u(b.answersColor).isDark()?"#fff":"#333"}
					`,X),role:"presentation",onClick:()=>{v&&clearTimeout(ee),v||h(!0),s(),ee=setTimeout((()=>{f&&h(!1)}),400)}},e.label)};let re,oe,ae;const ne={display:e=>{var r;const{id:o,attributes:s,setIsValid:l,setIsAnswered:c,setValidationErr:d,val:f,setVal:h,next:g,showErrMsg:p,isActive:b,isTouchScreen:m,setFooterDisplay:v,inputRef:y,isPreview:x,isReviewing:w}=e,{choices:_,required:k}=s,M=(0,n.useCx)(),S=window.self!==window.top,A=(0,a.useBlockTheme)(s.themeId),[C,R]=(0,t.useState)(!1),[E,$]=(0,t.useState)(""),[F,H]=(0,t.useState)(-1),[T,q]=(0,t.useState)(!1),[I,N]=(0,t.useState)(!1),[P,O]=(0,t.useState)(!1),[L,z]=(0,t.useState)(""),[B,D]=(0,t.useState)(!1),[Y,W]=(0,t.useState)(!1),V=(0,t.useRef)(),U=(0,t.useRef)(),X=(0,a.useMessages)(),J=u(A.answersColor),ee=(0,t.useMemo)((()=>(0,j.cloneDeep)(_).map(((e,t)=>(e.label||(e.label="Choice "+(t+1)),e))).filter((e=>e.label.toLowerCase().includes(f&&m?"":E.toLowerCase())))),[_,E]),ne=e=>{!0!==k||e&&""!==e?(l(!0),d(null)):(l(!1),d(X["label.errorAlert.selectionRequired"]))},ie=e=>{V.current&&!V.current.contains(e.target)&&(R(!1),H(-1))};(0,t.useEffect)((()=>(C?(document.addEventListener("mousedown",ie),document.querySelector(`#block-${o} .renderer-core-field-footer`)&&document.querySelector(`#block-${o} .renderer-core-field-footer`).classList.add("is-hidden")):document.querySelector(`#block-${o} .renderer-core-field-footer`)&&document.querySelector(`#block-${o} .renderer-core-field-footer`).classList.remove("is-hidden"),()=>{document.removeEventListener("mousedown",ie)})),[C]),(0,t.useEffect)((()=>{!x&&w||ne(f)}),[s]),(0,t.useEffect)((()=>(Y?(D(Y),v(!1)):ae=setTimeout((()=>{D(Y)}),500),()=>clearTimeout(ae))),[Y]);const se=e=>{if(O(""!==e.target.value),z(e.target.value),m&&!S||R(!0),f)return h(null),$(""),void ne(void 0);$(e.target.value)};(0,t.useEffect)((()=>{b||oe&&clearTimeout(oe),N(!1)}),[b]),(0,t.useEffect)((()=>{if(f){const e=ee.find((e=>e.value===f));$(e?e.label:"")}return()=>{oe&&clearTimeout(oe)}}),[]),(0,t.useEffect)((()=>{I&&g()}),[I]);const le=e=>{if(!m){if(27===e.keyCode)return R(!1),O(""!==L),void H(-1);if(38!==e.keyCode&&40!==e.keyCode){if(13===e.keyCode){if(e.stopPropagation(),-1===F)return R(!1),void H(-1);q(!0)}}else{const t=document.querySelector(`#block-${o}  .qf-block-dropdown-display__choices`);if(!t||F<=0&&38===e.keyCode||F===ee.length-1&&40===e.keyCode)return;R(!0);const r=38===e.keyCode?F-1:F+1;H(r);const a=document.getElementById(`block-${o}-option-${r}`);(function(e,t){const r=e.scrollTop,o=r+e.clientHeight,a=t.offsetTop,n=a+t.clientHeight;return a>=r+10&&n<=o-50})(t,a)||(t.scrollTop=a.offsetTop-30)}}},ce=(e=ee[F])=>{const t=ee.findIndex((t=>t.value===e.value));if(t!==F&&H(t),q(!1),O(!1),p(!1),clearTimeout(re),oe&&clearTimeout(oe),f&&f===e.value)return h(null),c(!1),$(""),ne(void 0),void N(!1);c(!0),h(e.value),ne(e.value),re=setTimeout((()=>{$(e.label),R(!1),H(-1),m&&!S?(W(!1),v(!0),oe=setTimeout((()=>{N(!0)}),750)):N(!0)}),m?500:700)};return React.createElement("div",{ref:V,style:{position:"relative"}},React.createElement("input",{autoComplete:"off",ref:y,className:M(n.css`
						& {
							width: 100%;
							border: none;
							outline: none;
							font-size: 30px;
							padding-bottom: 8px;
							background: transparent;
							transition: box-shadow 0.1s ease-out 0s;
							box-shadow: ${J.setAlpha(.3).toString()}
								0px 1px;
							@media ( max-width: 600px ) {
								font-size: 24px;
							}

							@media ( max-width: 480px ) {
								font-size: 20px;
							}
						}

						&::placeholder {
							opacity: 0.3;
							/* Chrome, Firefox, Opera, Safari 10.1+ */
							color: ${A.answersColor};
						}

						&:-ms-input-placeholder {
							opacity: 0.3;
							/* Internet Explorer 10-11 */
							color: ${A.answersColor};
						}

						&::-ms-input-placeholder {
							opacity: 0.3;
							/* Microsoft Edge */
							color: ${A.answersColor};
						}

						&:focus {
							box-shadow: ${J.setAlpha(1).toString()}
								0px 2px;
						}

						color: ${A.answersColor};
					`),id:"dropdown-"+o,placeholder:X["block.dropdown.placeholder"],onChange:se,value:f&&m?E:m?"":E,onClick:()=>{m&&!S?(W(!0),y?.current?.blur()):R(!0)},onFocus:()=>{m&&v(!1)},onBlur:()=>{m&&v(!0)},onKeyDown:le,autoComplete:"off"}),f&&f.length>0||P&&(!m||S)?React.createElement(Z,{onClick:()=>{clearTimeout(re),oe&&clearTimeout(oe),$(""),c(!1),h(void 0),O(!1),m||y.current.focus()}}):React.createElement(Q,{style:{transform:C?"rotate(180deg)":"rotate(0deg)"},onClick:()=>{C&&H(-1),m&&!S?W(!Y):(R(!C),y.current.focus())},onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),C&&H(-1),m?W(!Y):(R(!C),y.current.focus()))}}),C&&React.createElement("div",{className:M("qf-block-dropdown-display__choices",{visible:C},G,n.css`
							background: ${null!==(r=A.backgroundColor)&&void 0!==r?r:"#fff"};
							padding: 15px;
							border: 1px dashed ${A.answersColor};
						`),ref:U,onWheel:e=>{C&&e.stopPropagation()}},ee?.length>0?ee.map(((e,t)=>React.createElement(te,{blockId:o,choiceIndex:t,hovered:t===F,clicked:t===F&&T,role:"presentation",key:`block-dropdown-${o}-choice-${e.value}`,clickHandler:()=>ce(e),choice:e,val:f,showDropdown:C}))):React.createElement("div",{className:M(n.css`
								background: ${A.errorsBgColor};
								color: ${A.errorsFontColor};
								display: inline-block;
								padding: 5px 10px;
								border-radius: 5px;
							`)},X["block.dropdown.noSuggestions"])),B&&React.createElement(React.Fragment,null,(0,i.createPortal)(React.createElement("div",{className:M("fixed-dropdown",{show:Y,hide:!Y},K(A)),onWheel:e=>e.stopPropagation()},React.createElement("div",{className:"fixed-dropdown-content",onWheel:e=>{e.stopPropagation()}},React.createElement("div",{className:M(n.css`
											display: flex;
											align-items: center;
										`)},React.createElement("svg",{onClick:()=>{W(!1)},className:"back-icon",focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true",role:"presentation"},React.createElement("path",{d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})),React.createElement("input",{autoFocus:!1,className:M(n.css`
												& {
													width: 100%;
													border: none;
													outline: none;
													padding-bottom: 8px;
													background: transparent;
													margin-bottom: 10px;
													transition: box-shadow 0.1s
														ease-out 0s;
													box-shadow: ${J.setAlpha(.3).toString()}
														0px 1px;
												}

												&::placeholder {
													opacity: 0.3;
													/* Chrome, Firefox, Opera, Safari 10.1+ */
													color: ${A.answersColor};
												}

												&:-ms-input-placeholder {
													opacity: 0.3;
													/* Internet Explorer 10-11 */
													color: ${A.answersColor};
												}

												&::-ms-input-placeholder {
													opacity: 0.3;
													/* Microsoft Edge */
													color: ${A.answersColor};
												}

												&:focus {
													box-shadow: ${J.setAlpha(1).toString()}
														0px 2px;
												}

												color: ${A.answersColor};
											`),placeholder:X["block.dropdown.placeholder"],onChange:se,value:E,onFocus:()=>{v(!1)},onBlur:()=>{v(!0)},onKeyDown:le,autoComplete:"off"})),React.createElement("div",{className:"qf-block-dropdown-display__choices visible fixed-choices",ref:U,onWheel:e=>{B&&e.stopPropagation()}},ee?.length>0?ee.map(((e,t)=>React.createElement(te,{hovered:t===F,choiceIndex:t,blockId:o,clicked:t===F&&T,role:"presentation",key:`block-dropdown-${o}-choice-${e.value}`,clickHandler:()=>ce(e),choice:e,val:f,showDropdown:C}))):React.createElement("div",{className:M(n.css`
												background: ${A.errorsBgColor};
												color: ${A.errorsFontColor};
												display: inline-block;
												padding: 5px 10px;
												border-radius: 5px;
											`)},X["block.dropdown.noSuggestions"])))),document.querySelector(".renderer-core-form-flow"))))},mergeTag:({val:e,attributes:t})=>{const{choices:r}=t,o=r.findIndex((t=>t.value===e));let a="_ _ _ _";return r[o]&&(a=r[o].label,a||(a="Choice "+(index+1))),React.createElement(React.Fragment,null,a)}},{name:ie}={name:"dropdown",attributes:{choices:{type:"array",items:{type:"object",properties:{value:{type:"string"},label:{type:"string"}}},default:[{value:"123e45z7o89b",label:"Choice 1"}]}},supports:{editable:!0,required:!0,attachment:!0,description:!0,logic:!0,theme:!0,points:!0,payments:!0,choices:!0},logicalOperators:["is","is_not"]};(0,e.setBlockRendererSettings)(ie,ne)})(),(window.qf=window.qf||{}).blocklibDropdownBlockRenderer=o})();