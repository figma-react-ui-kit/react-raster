(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{119:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=(n(172),n(218)),o=(n(219),n(220)),c=n.n(o),u=(n(221),n(222),n(223),function(){return a.a.createElement(i.a,{cols:2,alignY:"center",style:"\n      background: pink;\n      height: 300px;\n\n      img { \n        display: block;\n        width: 100%; \n      }\n    "},a.a.createElement("img",{src:c.a,alt:"Sample Image"}))}),l=function(){var e=Object(r.useRef)(),t=Object(r.useRef)();return Object(r.useEffect)(function(){console.log(e.current),console.log(t.current)},[]),a.a.createElement(i.b,{tag:"section",breakpoints:[0,500,768,1024,1200,1400],left:"1.5vw",right:"3vw",top:"10vw",bottom:"20vw",gutterX:"1.5vw",gutterY:"3vw",colspan:12,alignX:"center",alignY:"center",control:!0,style:"\n        background: blue;\n        &.bp-768 {\n          // background: black;\n        }\n      ",ref:t},a.a.createElement(i.a,{ref:e,className:"Box--1",cols:[4],left:[2],right:[1],alignY:"center",style:"\n        background: yellow;\n        height: 400px;\n        \n        .bp-768 & {\n          background: black;\n        }\n      "},a.a.createElement(u,null),a.a.createElement(i.a,{className:"Box--3",cols:[1],left:[1],alignY:"center",style:"\n            background: green;\n            height: 150px;\n          "})),a.a.createElement(i.a,{ref:e,className:"Box--2",cols:[4],left:[0],style:"\n          background: yellow;\n          height: 200px;\n        "},a.a.createElement(u,null)))};t.default=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IndexPage",filename:"src/pages/test.js"}}),l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IndexPage",filename:"src/pages/test.js"}})},131:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(3),o=n.n(i),c=n(155),u=n.n(c),l=n(141),s=n(147),f=n(142),b=function(e){var t=e.margin,n=e.cols,r=e.parent,a=e.cssMode,i=e.gutterX;return"grid"===a?t.map(function(e,t){return e?"calc(((100% + ".concat(i[t],") / ").concat(n[t],") * ").concat(e,")"):void 0}):t.map(function(e,t){return e?"".concat(100*e/r[t],"%"):void 0})},p=n(143),d=n(144),m=n(145),g=n(128),O=n(146);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(){var e=x(["\n      width: ","%;\n      \n      padding-left: calc("," / 2);\n      padding-right: calc("," / 2);\n      padding-top: calc("," / 2);\n      padding-bottom: calc("," / 2);\n\n      margin-left: ",";\n      margin-right: ",";\n      margin-top: ",";\n      margin-bottom: ",";\n      ","\n    "]);return y=function(){return e},e}function v(){var e=x(["\n      ","\n      grid-column: auto / span ",";\n      margin-left: ",";\n      margin-right: ",";\n      margin-top: ",";\n      margin-bottom: ",";\n      ","\n\n      align-content: ",";\n      align-items: ",";\n      // justify-content: ",";    \n    "]);return v=function(){return e},e}function h(){var e=x(["\n      grid-template-columns: repeat(",", 1fr);\n      grid-auto-columns: ","fr;\n      grid-auto-rows: min-content;\n      grid-column-gap: ",";\n      grid-row-gap: ",";\n    "]);return h=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var w=Object(g.b)(O.a).withConfig({displayName:"container__GridContainer",componentId:"sc-1l5ehe1-0"})(["box-sizing:border-box;display:",";"," ",""],function(e){return e.hasChildBoxes?"grid":"flex"},function(e){return e.hasChildBoxes&&e.media.map(function(t,n){return t(h(),function(e){return e.colspan[n]},function(e){return e.colspan[n]},e.gutterX[n],e.gutterY[n])})},function(e){return e.media.map(function(t,n){return t(v(),e.colsNumber[n]?"":"display: none;",e.cols[n],e.left[n],e.right[n],e.top[n],e.bottom[n],e.style[n],function(e){return e.alignY[n]},function(e){return e.alignY[n]},function(e){return e.alignX[n]})})}),_=Object(g.b)(O.a).withConfig({displayName:"container__FlexContainer",componentId:"sc-1l5ehe1-1"})(["display:flex;box-sizing:border-box;",""],function(e){return e.media.map(function(t,n){return t(y(),e.cols[n],e.gutterX[n],e.gutterX[n],e.gutterY[n],e.gutterY[n],e.left[n],e.right[n],e.top[n],e.bottom[n],e.style[n])})}),E=a.a.forwardRef(function(e,t){return"flex"===e.cssMode?a.a.createElement(_,j({},e,{ref:t})):a.a.createElement(w,j({},e,{ref:t}))});function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var C=a.a.forwardRef(function(e,t){var n=e.className,i=e.cols,o=e.alignX,c=e.alignY,g=e.children,O=e.left,j=e.right,y=e.top,v=e.bottom,h=e.style,x=e.styleInner,w=e.styleOuter,_=e.hasChildBoxes,C=(e.refCallback,Object(r.useContext)(l.a)),M=C.cssMode,P=C.breakpoints,X=C.gutterX,Y=C.gutterY,B=C.alignX,I=C.alignY,N=C.colspan,T=C.parent,G=C.media,S=C.controlIsVisible,R=C.controlColor,z=C.register,A=k(Object(r.useState)(void 0),2),q=A[0],L=A[1],V=Object(r.useMemo)(function(){return t=q,"boolean"==typeof(e=_)?e:t;var e,t},[_,q]),F=Object(r.useMemo)(function(){return Object(f.a)(Object(s.a)({prop:o,defaultProp:B,breakpoints:P}),M)},[o,B,P,M]),J=Object(r.useMemo)(function(){return Object(f.a)(Object(s.a)({prop:c,defaultProp:I,breakpoints:P}),M)},[c,I,P,M]),D=Object(r.useMemo)(function(){return Object(s.a)({prop:O,breakpoints:P})},[O,P]),Q=Object(r.useMemo)(function(){return Object(s.a)({prop:j,breakpoints:P})},[j,P]),W=Object(r.useMemo)(function(){return Object(s.a)({prop:y,breakpoints:P})},[y,P]),H=Object(r.useMemo)(function(){return Object(s.a)({prop:v,breakpoints:P})},[v,P]),K=Object(r.useMemo)(function(){return Object(s.a)({prop:i,defaultProp:T,breakpoints:P})},[i,T,P]),U=Object(r.useMemo)(function(){return function(e){var t=e.cols,n=e.left,r=e.right,a=e.parent;return"grid"===e.cssMode?t.map(function(e,t){return e+n[t]+r[t]}):t.map(function(e,t){return 100*e/a[t]})}({cols:K,left:D,right:Q,parent:T,cssMode:M})},[K,D,Q,T,M]),Z=Object(r.useMemo)(function(){return b({margin:D,cols:U,gutterX:X,parent:T,cssMode:M})},[D,U,X,T,M]),$=Object(r.useMemo)(function(){return b({margin:Q,cols:U,gutterX:X,parent:T,cssMode:M})},[Q,U,X,T,M]),ee=Object(r.useMemo)(function(){return b({margin:W,cols:U,gutterX:X,parent:T,cssMode:M})},[W,U,X,T,M]),te=Object(r.useMemo)(function(){return b({margin:H,cols:U,gutterX:X,parent:T,cssMode:M})},[H,U,X,T,M]),ne=Object(r.useMemo)(function(){return Object(s.a)({prop:w,breakpoints:P})},[w,P]),re=Object(r.useMemo)(function(){return Object(s.a)({prop:x,breakpoints:P})},[x,P]),ae=Object(r.useMemo)(function(){return Object(m.a)(Object(s.a)({prop:h,breakpoints:P}),re,ne)},[h,P,re,ne]);return z&&z(),a.a.createElement(E,{cssMode:M,breakpoints:P,className:u()(["Box",n]),cols:U,colsNumber:K,media:G,gutterX:X,gutterY:Y,colspan:K,hasChildBoxes:V,alignX:F,alignY:J,left:Z,right:$,top:ee,bottom:te,style:"grid"===M?ae:ne,ref:t},a.a.createElement(p.a,{cssMode:M,className:"Box__Inner",gutterX:X,gutterY:Y,media:G,alignX:F,alignY:J,style:re,breakpoints:P,controlIsVisible:S,controlColor:R},a.a.createElement(d.a,{cssMode:M,className:"Box__Resetter",hasChildBoxes:V,media:G,gutterX:X,gutterY:Y,alignX:F,alignY:J,breakpoints:P},a.a.createElement(l.a.Provider,{value:{breakpoints:P,gutterX:X,gutterY:Y,alignX:F,alignY:J,colspan:N,media:G,parent:K,controlIsVisible:S,cssMode:M,register:function(){q||L(!0)}}},g))))});C.displayName="Box",C.propTypes={cols:o.a.oneOfType([o.a.arrayOf(o.a.number),o.a.number]),left:o.a.oneOfType([o.a.arrayOf(o.a.number),o.a.number]),right:o.a.oneOfType([o.a.arrayOf(o.a.number),o.a.number]),top:o.a.oneOfType([o.a.arrayOf(o.a.number),o.a.number]),bottom:o.a.oneOfType([o.a.arrayOf(o.a.number),o.a.number]),alignX:o.a.oneOfType([o.a.array,o.a.string]),alignY:o.a.oneOfType([o.a.array,o.a.string]),style:o.a.oneOfType([o.a.array,o.a.string]),styleInner:o.a.oneOfType([o.a.array,o.a.string]),styleOuter:o.a.oneOfType([o.a.array,o.a.string]),hasChildBoxes:o.a.bool,className:o.a.string,children:o.a.node},C.defaultProps={className:"",cols:void 0,alignX:"",alignY:"",children:null,left:0,right:0,top:0,bottom:0,style:"",styleInner:"",styleOuter:"",hasChildBoxes:void 0};t.a=C;void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/raster/Box/index.js"}}),void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/raster/Box/index.js"}}),void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/raster/Box/index.js"}}),void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/raster/Box/index.js"}})},136:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(3),o=n.n(i),c=n(155),u=n.n(c),l=n(141),s=n(147),f=n(128),b=n(142);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(e){var t=p(Object(r.useState)(!1),2),n=t[0],a=t[1];return Object(r.useEffect)(function(){function t(e){27===e.keyCode&&a(function(e){return!e})}if(e)return document.addEventListener("keyup",t),function(){return document.removeEventListener("keyup",t)}},[]),n},m=d;d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useControl",filename:"src/raster/utils/useControl.js"}}),d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useControl",filename:"src/raster/utils/useControl.js"}});var g=n(143),O=n(144);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=n(146);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(){var e=w(["\n      position: ",";\n      padding-left: ",";\n      padding-right: ",";\n      padding-top: ",";\n      padding-bottom: ",";\n      ","\n    "]);return h=function(){return e},e}function x(){var e=w(["\n      position: ",";\n      padding-left: ",";\n      padding-right: ",";\n      padding-top: ",";\n      padding-bottom: ",";\n      grid-column-gap: ",";\n      grid-row-gap: ",";\n      ","\n      align-content: ",";\n      align-items: ",";\n      // justify-content: ",";\n    "]);return x=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _=Object(f.b)(y.a).withConfig({displayName:"container__GridContainer",componentId:"sc-11e3cnu-0"})(["display:grid;grid-template-columns:repeat(",",1fr);grid-auto-columns:","fr;grid-auto-rows:min-content;box-sizing:border-box;",""],function(e){return e.colspan},function(e){return e.colspan},function(e){return e.media.map(function(t,n){return t(x(),function(e){return e.position[n]},e.left[n],e.right[n],e.top[n],e.bottom[n],e.gutterX[n],e.gutterY[n],e.style[n],function(e){return e.alignY[n]},function(e){return e.alignY[n]},function(e){return e.alignX[n]})})}),E=Object(f.b)(y.a).withConfig({displayName:"container__FlexContainer",componentId:"sc-11e3cnu-1"})(["display:flex;align-items:stretch;box-sizing:border-box;",""],function(e){return e.media.map(function(t,n){return t(h(),function(e){return e.position[n]},e.left[n],e.right[n],e.top[n],e.bottom[n],e.style[n])})}),k=a.a.forwardRef(function(e,t){return"flex"===e.cssMode?a.a.createElement(E,v({},e,{ref:t})):a.a.createElement(_,v({},e,{ref:t}))}),C=n(131);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var X="\n  width: 100%;\n  z-index: 10000;\n  left: 0; \n  top: 0; \n  bottom: 0;\n  margin: 0;\n",Y=function(e){return a.a.createElement(G,M({},e,{position:"absolute",className:"Grid--Control",alignY:"stretch",styleOuter:"grid"===e.cssMode?X:X+"margin: 0;",styleInner:"\n        grid-auto-rows: auto;\n      "}),P(Array(e.colspan)).map(function(t,n){return a.a.createElement(C.a,{key:n,cols:1,styleInner:"\n            background-color: ".concat(e.controlColor,";\n          ")})}))},B=Y;Y&&Y===Object(Y)&&Object.isExtensible(Y)&&Object.defineProperty(Y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Control",filename:"src/raster/Control/index.js"}}),Y&&Y===Object(Y)&&Object.isExtensible(Y)&&Object.defineProperty(Y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Control",filename:"src/raster/Control/index.js"}});var I=n(145);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=a.a.forwardRef(function(e,t){var n=e.breakpoints,i=e.left,o=e.right,c=e.top,p=e.bottom,d=e.gutterX,y=e.gutterY,v=e.alignX,h=e.alignY,x=e.colspan,w=e.control,_=e.controlColor,E=e.position,C=e.className,M=e.style,P=e.styleInner,X=e.styleOuter,Y=e.children,T=e.cssMode,G=e.tag,S=m(w),R=function(e){var t=j(Object(r.useState)(e),2),n=t[0],a=t[1];return Object(r.useEffect)(function(){if(!n){var e=window.CSS&&window.CSS.supports||window.supportsCSS||!1;e&&e("grid-template-rows","none")||a("flex")}},[]),n}(T||"grid"),z=Object(r.useMemo)(function(){return n},[n]),A=function(e){var t=N(Object(r.useState)(0),2),n=t[0],a=t[1];return Object(r.useEffect)(function(){function t(){var t=window.innerWidth,n=0;e.forEach(function(e){e<=t&&(n=e)}),a(n)}return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),n}(z),q=Object(r.useMemo)(function(){return Object(s.a)({prop:d,breakpoints:z})},[d,z]),L=Object(r.useMemo)(function(){return Object(s.a)({prop:y,breakpoints:z})},[y,z]),V=Object(r.useMemo)(function(){return Object(b.a)(Object(s.a)({prop:v,breakpoints:z}),R,!0)},[v,z,R]),F=Object(r.useMemo)(function(){return Object(b.a)(Object(s.a)({prop:h,breakpoints:z}),R,!0)},[h,z,R]),J=Object(r.useMemo)(function(){return t=(e=z).length,e.map(function(n,r){var a=r!==t-1?" and (max-width: ".concat(e[r+1]-1,"px)"):"";return function(){return Object(f.a)(["@media (min-width:","px)","{",";}"],n,a,f.a.apply(void 0,arguments))}});var e,t},[z]),D=Object(r.useMemo)(function(){return Object(s.a)({prop:x,breakpoints:z})},[x,z]),Q=Object(r.useMemo)(function(){return Object(s.a)({prop:i,breakpoints:z})},[i,z]),W=Object(r.useMemo)(function(){return Object(s.a)({prop:o,breakpoints:z})},[o,z]),H=Object(r.useMemo)(function(){return Object(s.a)({prop:c,breakpoints:z})},[c,z]),K=Object(r.useMemo)(function(){return Object(s.a)({prop:p,breakpoints:z})},[p,z]),U=Object(r.useMemo)(function(){return Object(s.a)({prop:E,breakpoints:z})},[E,z]),Z=Object(r.useMemo)(function(){return Object(s.a)({prop:X,breakpoints:n})},[X,n]),$=Object(r.useMemo)(function(){return Object(s.a)({prop:P,breakpoints:n})},[P,n]),ee=Object(r.useMemo)(function(){return Object(I.a)(Object(s.a)({prop:M,breakpoints:n}),$,Z)},[M,n,$,Z]);return a.a.createElement(k,{cssMode:R,colspan:x,className:u()(["Grid","bp-".concat(A),C]),gutterX:q,gutterY:L,alignX:V,alignY:F,media:J,left:Q,right:W,top:H,bottom:K,position:U,tag:G,style:"grid"===R?ee:Z,ref:t},w&&S&&a.a.createElement(B,{cssMode:R,colspan:x,breakpoints:n,gutterX:d,gutterY:y,left:i,right:o,top:c,bottom:p,controlColor:_}),a.a.createElement(g.a,{cssMode:R,className:"Grid__Inner",gutterX:q,gutterY:L,alignX:V,alignY:F,media:J,style:$,controlColor:_},a.a.createElement(O.a,{cssMode:R,className:"Grid__Resetter",hasChildBoxes:!0,gutterX:q,gutterY:L,alignX:V,alignY:F,media:J},a.a.createElement(l.a.Provider,{value:{cssMode:R,breakpoints:z,gutterX:q,gutterY:L,alignX:V,alignY:F,media:J,colspan:x,parent:D,controlIsVisible:S,controlColor:_}},Y))))});T.propTypes={breakpoints:o.a.array,colspan:o.a.number,left:o.a.oneOfType([o.a.array,o.a.string]),right:o.a.oneOfType([o.a.array,o.a.string]),top:o.a.oneOfType([o.a.array,o.a.string]),bottom:o.a.oneOfType([o.a.array,o.a.string]),gutterX:o.a.oneOfType([o.a.array,o.a.string]),gutterY:o.a.oneOfType([o.a.array,o.a.string]),alignX:o.a.oneOfType([o.a.array,o.a.string]),alignY:o.a.oneOfType([o.a.array,o.a.string]),control:o.a.bool,controlColor:o.a.string,position:o.a.oneOfType([o.a.array,o.a.string]),className:o.a.string,style:o.a.oneOfType([o.a.array,o.a.string]),styleInner:o.a.oneOfType([o.a.array,o.a.string]),styleOuter:o.a.oneOfType([o.a.array,o.a.string]),children:o.a.node,cssMode:o.a.string,tag:o.a.string},T.defaultProps={breakpoints:[0,432,768,1024,1200,1400],left:"0",right:"0",top:"0",bottom:"0",gutterX:"0",gutterY:"0",alignX:"",alignY:"",colspan:1,control:!1,controlColor:"rgba(0, 0, 0, 0.1)",position:"relative",style:"",styleOuter:"",styleInner:"",className:"",children:null,cssMode:void 0,tag:"div"};var G=t.a=T;void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}}),void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}}),void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}}),void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}})},141:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext();t.a=a,void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Context",filename:"src/raster/context.js"}}),void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Context",filename:"src/raster/context.js"}})},142:function(e,t,n){"use strict";t.a=function(e,t,n){return"grid"===t&&n?e.map(function(e){switch(e){case"left":return"start";case"right":return"end";case"top":return"start";case"bottom":return"end";default:return e}}):e.map(function(e){switch(e){case"left":return"flex-start";case"right":return"flex-end";case"top":return"flex-start";case"bottom":return"flex-end";default:return e}})}},143:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(128);function o(){var e=u(["\n      ","   \n    "]);return o=function(){return e},e}function c(){var e=u(["\n      align-items: ",";\n      justify-content: ",";    \n    "]);return c=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=Object(i.b)(function(e){var t=e.className,n=e.children;return a.a.createElement("div",{className:t},n)}).withConfig({displayName:"inner__StyledInner",componentId:"sc-1utwl0a-0"})(["   display:flex;position:relative;flex-wrap:wrap;width:100%;",""],function(e){return e.media.map(function(t,n){return t(c(),e.alignY[n],e.alignX[n])})}),s=Object(i.b)(l).withConfig({displayName:"inner__StyledInnerCustom",componentId:"sc-1utwl0a-1"})(["",""],function(e){return e.media.map(function(t,n){return t(o(),e.style[n])})}),f=Object(i.b)("div").withConfig({displayName:"inner__StyledInnerControl",componentId:"sc-1utwl0a-2"})(["position:absolute;z-index:10000;left:0;top:0;right:0;bottom:0;background-color:",";"],function(e){return e.controlColor}),b=function(e){var t=e.media,n=e.className,r=e.alignX,i=e.alignY,o=e.style,c=e.controlIsVisible,u=e.controlColor,l=e.children;return"grid"===e.cssMode?l:a.a.createElement(s,{className:n,media:t,alignX:r,alignY:i,style:o},c?a.a.createElement(a.a.Fragment,null,a.a.createElement(f,{controlColor:u}),l):l)};t.a=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Inner",filename:"src/raster/utils/inner.js"}}),b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Inner",filename:"src/raster/utils/inner.js"}})},144:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(128);function o(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      width: calc(100% + (","));\n      \n      margin-left: calc(-"," / 2);\n      margin-right: calc(-"," / 2);\n      margin-top: calc(-"," / 2);\n      margin-bottom: calc(-"," / 2);\n\n      align-items: ",";\n      justify-content: ",";    \n    "]);return o=function(){return e},e}var c=Object(i.b)(function(e){e.reset;var t=e.className,n=e.children;return a.a.createElement("div",{className:t},n)}).withConfig({displayName:"resetter__StyledResetter",componentId:"sc-10qdwa6-0"})(["   display:flex;flex-wrap:wrap;position:relative;",""],function(e){return e.media.map(function(t,n){return t(o(),e.gutterX[n],e.gutterX[n],e.gutterX[n],e.gutterY[n],e.gutterY[n],function(e){return e.alignY[n]},function(e){return e.alignX[n]})})}),u=function(e){return"grid"===e.cssMode?e.children:e.hasChildBoxes?a.a.createElement(c,e):e.children};t.a=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Resetter",filename:"src/raster/utils/resetter.js"}}),u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Resetter",filename:"src/raster/utils/resetter.js"}})},145:function(e,t,n){"use strict";t.a=function(e,t,n){return e.map(function(e,r){return n[r]+t[r]+e})}},146:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=a.a.forwardRef(function(e,t){var n=e.className,r=e.children,i=e.tag,o=void 0===i?"div":i;return a.a.createElement(o,{className:n,ref:t},r)});t.a=i,void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/raster/utils/container.js"}}),void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/raster/utils/container.js"}})},147:function(e,t,n){"use strict";var r=function(e){return!!e&&e.constructor===Array};t.a=function(e){var t=e.prop,n=e.defaultProp,a=e.breakpoints.length,i=function(e,t){return e?r(e)?e:[e]:r(t)?t:t?[t]:[e]}(t,n);return i.length<a&&(i=function(e){for(var t=e.array,n=e.breakpointsLength,r=t[t.length-1];t.length<n;)t.push(r);return t}({array:i,breakpointsLength:a})),i.length>a&&(i=i.splice(a)),i}},154:function(e,t,n){var r;e.exports=(r=n(217))&&r.default||r},172:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var r=n(0),a=n.n(r),i=n(3),o=n.n(i),c=n(23),u=n.n(c);n.d(t,"a",function(){return u.a});n(154);var l=a.a.createContext({}),s=function(e){return a.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},217:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(3),o=n.n(i),c=n(42),u=n(2);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(c.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},218:function(e,t,n){"use strict";var r=n(136);n.d(t,"b",function(){return r.a});var a=n(131);n.d(t,"a",function(){return a.a}),"undefined"!=typeof Grid&&Grid&&Grid===Object(Grid)&&Object.isExtensible(Grid)&&Object.defineProperty(Grid,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/index.js"}}),"undefined"!=typeof Grid&&Grid&&Grid===Object(Grid)&&Object.isExtensible(Grid)&&Object.defineProperty(Grid,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/raster/index.js"}}),"undefined"!=typeof Box&&Box&&Box===Object(Box)&&Object.isExtensible(Box)&&Object.defineProperty(Box,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/raster/index.js"}}),"undefined"!=typeof Box&&Box&&Box===Object(Box)&&Object.isExtensible(Box)&&Object.defineProperty(Box,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/raster/index.js"}})},219:function(e,t,n){e.exports=n.p+"static/image-1-eccf4f7ba9a159d650716ae15279e682.jpg"},220:function(e,t,n){e.exports=n.p+"static/image-2-da6160ba8a2e9c93efc8d35a819a1df5.jpg"},221:function(e,t,n){e.exports=n.p+"static/image-3-5e617a333df9c755a71b210b8a49e2b4.jpg"},222:function(e,t,n){e.exports=n.p+"static/image-4-092afe3104f0491a58f331156e20cfb8.jpg"},223:function(e,t,n){e.exports=n.p+"static/image-5-a81aee5143703919c113b9c84881d3c8.jpg"}}]);
//# sourceMappingURL=component---src-pages-test-js-ee096f0c30fe772b9307.js.map