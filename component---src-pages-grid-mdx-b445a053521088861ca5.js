(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return s}),n.d(t,"default",function(){return b});n(0);var r=n(24),a=n(222),o=n(133),i=n(136);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"_frontmatter",filename:"src/pages/Grid.mdx"}});var l={_frontmatter:s},f=a.a;function b(e){var t=e.components,n=u(e,["components"]);return Object(r.b)(f,c({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"grid"},"Grid"),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)(o.d,{of:i.a,mdxType:"Props"}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/pages/Grid.mdx"}}),b.isMDXComponent=!0},136:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=n(155),u=n.n(c),s=n(141),l=n(147),f=n(123),b=n(142);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(e){var t=p(Object(r.useState)(!1),2),n=t[0],a=t[1];return Object(r.useEffect)(function(){function t(e){27===e.keyCode&&a(function(e){return!e})}if(e)return document.addEventListener("keyup",t),function(){return document.removeEventListener("keyup",t)}},[]),n},m=d;d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useControl",filename:"src/raster/utils/useControl.js"}}),d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useControl",filename:"src/raster/utils/useControl.js"}});var g=n(143),O=n(144);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j=n(146);function v(){var e=x(["\n      position: ",";\n      padding-left: ",";\n      padding-right: ",";\n      padding-top: ",";\n      padding-bottom: ",";\n      ","\n    "]);return v=function(){return e},e}function h(){var e=x(["\n      position: ",";\n      padding-left: ",";\n      padding-right: ",";\n      padding-top: ",";\n      padding-bottom: ",";\n      grid-column-gap: ",";\n      grid-row-gap: ",";\n      ","\n      align-items: ",";\n      justify-content: ",";\n    "]);return h=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var w=Object(f.d)(j.a).withConfig({displayName:"container__GridContainer",componentId:"sc-11e3cnu-0"})(["display:grid;grid-template-columns:repeat(",",1fr);grid-auto-columns:","fr;box-sizing:border-box;",""],function(e){return e.colspan},function(e){return e.colspan},function(e){return e.media.map(function(t,n){return t(h(),function(e){return e.position[n]},e.left[n],e.right[n],e.top[n],e.bottom[n],e.gutterX[n],e.gutterY[n],e.style[n],function(e){return e.alignY[n]},function(e){return e.alignX[n]})})}),_=Object(f.d)(j.a).withConfig({displayName:"container__FlexContainer",componentId:"sc-11e3cnu-1"})(["display:flex;align-items:stretch;box-sizing:border-box;",""],function(e){return e.media.map(function(t,n){return t(v(),function(e){return e.position[n]},e.left[n],e.right[n],e.top[n],e.bottom[n],e.style[n])})}),M=function(e){return"flex"===e.cssMode?a.a.createElement(_,e):a.a.createElement(w,e)},C=n(131);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var X="\n  width: 100%;\n  z-index: 10000;\n  left: 0; \n  top: 0; \n  bottom: 0;\n  margin: 0;\n",P=function(e){return a.a.createElement(S,E({},e,{position:"absolute",className:"Grid--Control",alignY:"stretch",styleOuter:"grid"===e.cssMode?X:X+"margin: 0;"}),k(Array(e.colspan)).map(function(t,n){return a.a.createElement(C.b,{key:n,cols:1,styleInner:"\n            background-color: ".concat(e.controlColor,";\n          ")})}))},T=P;P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Control",filename:"src/raster/Control/index.js"}}),P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Control",filename:"src/raster/Control/index.js"}});var Y=n(145);n.d(t,"a",function(){return G});var G=function(e){var t=e.breakpoints,n=e.left,o=e.right,i=e.top,c=e.bottom,p=e.gutterX,d=e.gutterY,j=e.alignX,v=e.alignY,h=e.colspan,x=e.control,w=e.controlColor,_=e.position,C=e.className,E=e.style,k=e.styleInner,X=e.styleOuter,P=e.children,G=e.cssMode,S=e.tag,I=m(x),A=function(e){var t=y(Object(r.useState)(e),2),n=t[0],a=t[1];return Object(r.useEffect)(function(){if(!n){var e=window.CSS&&window.CSS.supports||window.supportsCSS||!1;e&&e("grid-template-rows","none")||a("flex")}},[]),n}(G||"grid"),N=Object(r.useMemo)(function(){return t},[t]),z=Object(r.useMemo)(function(){return Object(l.a)({prop:p,breakpoints:N})},[p,N]),D=Object(r.useMemo)(function(){return Object(l.a)({prop:d,breakpoints:N})},[d,N]),L=Object(r.useMemo)(function(){return Object(b.a)(Object(l.a)({prop:j,breakpoints:N}),A)},[j,N,A]),B=Object(r.useMemo)(function(){return Object(b.a)(Object(l.a)({prop:v,breakpoints:N}),A)},[v,N,A]),J=Object(r.useMemo)(function(){return t=(e=N).length,e.map(function(n,r){var a=r!==t-1?" and (max-width: ".concat(e[r+1]-1,"px)"):"";return function(){return Object(f.c)(["@media (min-width:","px)","{",";}"],n,a,f.c.apply(void 0,arguments))}});var e,t},[N]),F=Object(r.useMemo)(function(){return Object(l.a)({prop:h,breakpoints:N})},[h,N]),R=Object(r.useMemo)(function(){return Object(l.a)({prop:n,breakpoints:N})},[n,N]),V=Object(r.useMemo)(function(){return Object(l.a)({prop:o,breakpoints:N})},[o,N]),q=Object(r.useMemo)(function(){return Object(l.a)({prop:i,breakpoints:N})},[i,N]),H=Object(r.useMemo)(function(){return Object(l.a)({prop:c,breakpoints:N})},[c,N]),K=Object(r.useMemo)(function(){return Object(l.a)({prop:_,breakpoints:N})},[_,N]),Q=Object(r.useMemo)(function(){return Object(l.a)({prop:X,breakpoints:t})},[X,t]),U=Object(r.useMemo)(function(){return Object(l.a)({prop:k,breakpoints:t})},[k,t]),W=Object(r.useMemo)(function(){return Object(Y.a)(Object(l.a)({prop:E,breakpoints:t}),U,Q)},[E,t,U,Q]);return a.a.createElement(M,{cssMode:A,colspan:h,className:u()(["Grid",C]),gutterX:z,gutterY:D,alignX:L,alignY:B,media:J,left:R,right:V,top:q,bottom:H,position:K,tag:S,style:"grid"===A?W:Q},x&&I&&a.a.createElement(T,{cssMode:A,colspan:h,breakpoints:t,gutterX:p,gutterY:d,left:n,right:o,top:i,bottom:c,controlColor:w}),a.a.createElement(g.a,{cssMode:A,className:"Grid__Inner",gutterX:z,gutterY:D,alignX:L,alignY:B,media:J,style:U,controlColor:w},a.a.createElement(O.a,{cssMode:A,className:"Grid__Resetter",hasChildBoxes:!0,gutterX:z,gutterY:D,alignX:L,alignY:B,media:J},a.a.createElement(s.a.Provider,{value:{cssMode:A,breakpoints:N,gutterX:z,gutterY:D,alignX:L,alignY:B,media:J,colspan:h,parent:F,controlIsVisible:I,controlColor:w}},P))))};G.propTypes={breakpoints:i.a.array,colspan:i.a.number,left:i.a.oneOfType([i.a.array,i.a.string]),right:i.a.oneOfType([i.a.array,i.a.string]),top:i.a.oneOfType([i.a.array,i.a.string]),bottom:i.a.oneOfType([i.a.array,i.a.string]),gutterX:i.a.oneOfType([i.a.array,i.a.string]),gutterY:i.a.oneOfType([i.a.array,i.a.string]),alignX:i.a.oneOfType([i.a.array,i.a.string]),alignY:i.a.oneOfType([i.a.array,i.a.string]),control:i.a.bool,controlColor:i.a.string,position:i.a.oneOfType([i.a.array,i.a.string]),className:i.a.string,style:i.a.oneOfType([i.a.array,i.a.string]),styleInner:i.a.oneOfType([i.a.array,i.a.string]),styleOuter:i.a.oneOfType([i.a.array,i.a.string]),children:i.a.node,cssMode:i.a.string,tag:i.a.string},G.defaultProps={breakpoints:[0,432,800,1025,1200,1400],left:"0",right:"0",top:"0",bottom:"0",gutterX:"0",gutterY:"0",alignX:"",alignY:"",colspan:1,control:!1,controlColor:"rgba(0, 0, 0, 0.2)",position:"relative",style:"",styleOuter:"",styleInner:"",className:"",children:null,cssMode:void 0,tag:"div"};var S=t.b=G;void 0!==G&&G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}}),void 0!==G&&G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}}),void 0!==G&&G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}}),void 0!==G&&G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}})}}]);
//# sourceMappingURL=component---src-pages-grid-mdx-b445a053521088861ca5.js.map