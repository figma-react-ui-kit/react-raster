(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1e3:function(e,t,n){"use strict";var r=n(8),o=n(1),a=n.n(o),i=n(9),c=n.n(i),s=n(980),u=n.n(s),l=n(981),b=n(989),f=n(987),p=n(982),d=n(990),g=n(991),m=n(983),O=n(984),j=n(985),y=n(94),x=n(986);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(){var e=B(["\n      width: ","%;\n      \n      padding-left: calc("," / 2);\n      padding-right: calc("," / 2);\n      padding-top: calc("," / 2);\n      padding-bottom: calc("," / 2);\n\n      margin-left: ",";\n      margin-right: ",";\n      margin-top: ",";\n      margin-bottom: ",";\n      ","\n    "]);return h=function(){return e},e}function w(){var e=B(["\n  display: flex;\n  box-sizing: border-box;\n  \n  ","\n"]);return w=function(){return e},e}function k(){var e=B(["\n      ","\n      grid-column: auto / span ",";\n      margin-left: ",";\n      margin-right: ",";\n      margin-top: ",";\n      margin-bottom: ",";\n      ","\n\n      align-content: ",";\n      align-items: ",";\n      // justify-content: ",";    \n    "]);return k=function(){return e},e}function M(){var e=B(["\n      grid-template-columns: repeat(",", 1fr);\n      grid-auto-columns: ","fr;\n      grid-auto-rows: min-content;\n      grid-column-gap: ",";\n      grid-row-gap: ",";\n    "]);return M=function(){return e},e}function _(){var e=B(["\n  box-sizing: border-box;\n  display: ",";\n\n  ","\n  ","\n"]);return _=function(){return e},e}function B(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Y=Object(y.b)(x.a)(_(),(function(e){return e.hasChildBoxes?"grid":"flex"}),(function(e){return e.hasChildBoxes&&e.media.map((function(t,n){return t(M(),(function(e){return e.colspan[n]}),(function(e){return e.colspan[n]}),e.gutterX[n],e.gutterY[n])}))}),(function(e){return e.media.map((function(t,n){return t(k(),e.colsNumber[n]?"":"display: none;",e.cols[n],e.left[n],e.right[n],e.top[n],e.bottom[n],e.style[n],(function(e){return e.alignY[n]}),(function(e){return e.alignY[n]}),(function(e){return e.alignX[n]}))}))})),X=Object(y.b)(x.a)(w(),(function(e){return e.media.map((function(t,n){return t(h(),e.cols[n],e.gutterX[n],e.gutterX[n],e.gutterY[n],e.gutterY[n],e.left[n],e.right[n],e.top[n],e.bottom[n],e.style[n])}))})),C=a.a.forwardRef((function(e,t){return"flex"===e.cssMode?Object(r.c)(X,v({},e,{ref:t})):Object(r.c)(Y,v({},e,{ref:t}))}));function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=a.a.forwardRef((function(e,t){var n=e.className,a=e.cols,i=e.alignX,c=e.alignY,s=e.children,y=e.left,x=e.right,v=e.top,h=e.bottom,w=e.style,k=e.styleInner,M=e.styleOuter,_=e.hasChildBoxes,B=(e.refCallback,Object(o.useContext)(l.a)),Y=B.cssMode,X=B.breakpoints,T=B.gutterX,E=B.gutterY,G=B.alignX,N=B.alignY,S=B.colspan,I=B.parent,A=B.media,z=B.controlIsVisible,L=B.controlColor,R=B.register,D=P(Object(o.useState)(void 0),2),V=D[0],F=D[1],W=Object(o.useMemo)((function(){return Object(b.a)(_,V)}),[_,V]),H=Object(o.useMemo)((function(){return Object(p.a)(Object(f.a)({prop:i,defaultProp:G,breakpoints:X}),Y)}),[i,G,X,Y]),J=Object(o.useMemo)((function(){return Object(p.a)(Object(f.a)({prop:c,defaultProp:N,breakpoints:X}),Y)}),[c,N,X,Y]),q=Object(o.useMemo)((function(){return Object(f.a)({prop:y,breakpoints:X})}),[y,X]),K=Object(o.useMemo)((function(){return Object(f.a)({prop:x,breakpoints:X})}),[x,X]),Q=Object(o.useMemo)((function(){return Object(f.a)({prop:v,breakpoints:X})}),[v,X]),U=Object(o.useMemo)((function(){return Object(f.a)({prop:h,breakpoints:X})}),[h,X]),Z=Object(o.useMemo)((function(){return Object(f.a)({prop:a,defaultProp:I,breakpoints:X})}),[a,I,X]),$=Object(o.useMemo)((function(){return Object(d.a)({cols:Z,left:q,right:K,parent:I,cssMode:Y})}),[Z,q,K,I,Y]),ee=Object(o.useMemo)((function(){return Object(g.a)({margin:q,cols:$,gutterX:T,parent:I,cssMode:Y})}),[q,$,T,I,Y]),te=Object(o.useMemo)((function(){return Object(g.a)({margin:K,cols:$,gutterX:T,parent:I,cssMode:Y})}),[K,$,T,I,Y]),ne=Object(o.useMemo)((function(){return Object(g.a)({margin:Q,cols:$,gutterX:T,parent:I,cssMode:Y})}),[Q,$,T,I,Y]),re=Object(o.useMemo)((function(){return Object(g.a)({margin:U,cols:$,gutterX:T,parent:I,cssMode:Y})}),[U,$,T,I,Y]),oe=Object(o.useMemo)((function(){return Object(f.a)({prop:M,breakpoints:X})}),[M,X]),ae=Object(o.useMemo)((function(){return Object(f.a)({prop:k,breakpoints:X})}),[k,X]),ie=Object(o.useMemo)((function(){return Object(j.a)(Object(f.a)({prop:w,breakpoints:X}),ae,oe)}),[w,X,ae,oe]);return R&&R(),Object(r.c)(C,{cssMode:Y,breakpoints:X,className:u()(["Box",n]),cols:$,colsNumber:Z,media:A,gutterX:T,gutterY:E,colspan:Z,hasChildBoxes:W,alignX:H,alignY:J,left:ee,right:te,top:ne,bottom:re,style:"grid"===Y?ie:oe,ref:t},Object(r.c)(m.a,{cssMode:Y,className:"Box__Inner",gutterX:T,gutterY:E,media:A,alignX:H,alignY:J,style:ae,breakpoints:X,controlIsVisible:z,controlColor:L},Object(r.c)(O.a,{cssMode:Y,className:"Box__Resetter",hasChildBoxes:W,media:A,gutterX:T,gutterY:E,alignX:H,alignY:J,breakpoints:X},Object(r.c)(l.a.Provider,{value:{breakpoints:X,gutterX:T,gutterY:E,alignX:H,alignY:J,colspan:S,media:A,parent:Z,controlIsVisible:z,cssMode:Y,register:function(){V||F(!0)}}},s))))}));T.displayName="Box",T.propTypes={cols:c.a.oneOfType([c.a.arrayOf(c.a.number),c.a.number]),left:c.a.oneOfType([c.a.arrayOf(c.a.number),c.a.number]),right:c.a.oneOfType([c.a.arrayOf(c.a.number),c.a.number]),top:c.a.oneOfType([c.a.arrayOf(c.a.number),c.a.number]),bottom:c.a.oneOfType([c.a.arrayOf(c.a.number),c.a.number]),alignX:c.a.oneOfType([c.a.array,c.a.string]),alignY:c.a.oneOfType([c.a.array,c.a.string]),style:c.a.oneOfType([c.a.array,c.a.string]),styleInner:c.a.oneOfType([c.a.array,c.a.string]),styleOuter:c.a.oneOfType([c.a.array,c.a.string]),hasChildBoxes:c.a.bool,className:c.a.string,children:c.a.node},T.defaultProps={className:"",cols:void 0,alignX:"",alignY:"",children:null,left:0,right:0,top:0,bottom:0,style:"",styleInner:"",styleOuter:"",hasChildBoxes:void 0};t.a=T;void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{configurable:!0,value:{name:"Box",filename:"src/raster/Box/index.js"}}),void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{configurable:!0,value:{name:"Box",filename:"src/raster/Box/index.js"}}),void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{configurable:!0,value:{name:"Box",filename:"src/raster/Box/index.js"}}),void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{configurable:!0,value:{name:"Box",filename:"src/raster/Box/index.js"}})},1001:function(e,t,n){"use strict";var r=n(8),o=n(1),a=n.n(o),i=n(9),c=n.n(i),s=n(980),u=n.n(s),l=n(981),b=n(987),f=n(94);function p(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      @media (min-width: ","px)"," {\n        ",";\n      }\n    "]);return p=function(){return e},e}var d=n(982);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){var t=g(Object(o.useState)(!1),2),n=t[0],r=t[1];return Object(o.useEffect)((function(){function t(e){27===e.keyCode&&r((function(e){return!e}))}if(e)return document.addEventListener("keyup",t),function(){return document.removeEventListener("keyup",t)}}),[]),n},O=m;m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"useControl",filename:"src/raster/utils/useControl.js"}}),m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"useControl",filename:"src/raster/utils/useControl.js"}});var j=n(983),y=n(984);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=n(986);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(){var e=B(["\n      position: ",";\n      padding-left: ",";\n      padding-right: ",";\n      padding-top: ",";\n      padding-bottom: ",";\n      ","\n    "]);return w=function(){return e},e}function k(){var e=B(["\n  display: flex;\n  align-items: stretch;\n  box-sizing: border-box;\n\n  ","\n"]);return k=function(){return e},e}function M(){var e=B(["\n      position: ",";\n      padding-left: ",";\n      padding-right: ",";\n      padding-top: ",";\n      padding-bottom: ",";\n      grid-column-gap: ",";\n      grid-row-gap: ",";\n      ","\n      align-content: ",";\n      align-items: ",";\n      // justify-content: ",";\n    "]);return M=function(){return e},e}function _(){var e=B(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-auto-columns: ","fr;\n  grid-auto-rows: min-content;\n  box-sizing: border-box;\n\n  ","\n"]);return _=function(){return e},e}function B(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Y=Object(f.b)(v.a)(_(),(function(e){return e.colspan}),(function(e){return e.colspan}),(function(e){return e.media.map((function(t,n){return t(M(),(function(e){return e.position[n]}),e.left[n],e.right[n],e.top[n],e.bottom[n],e.gutterX[n],e.gutterY[n],e.style[n],(function(e){return e.alignY[n]}),(function(e){return e.alignY[n]}),(function(e){return e.alignX[n]}))}))})),X=Object(f.b)(v.a)(k(),(function(e){return e.media.map((function(t,n){return t(w(),(function(e){return e.position[n]}),e.left[n],e.right[n],e.top[n],e.bottom[n],e.style[n])}))})),C=a.a.forwardRef((function(e,t){return"flex"===e.cssMode?Object(r.c)(X,h({},e,{ref:t})):Object(r.c)(Y,h({},e,{ref:t}))})),P=n(1e3);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var G="\n  width: 100%;\n  z-index: 10000;\n  left: 0; \n  top: 0; \n  bottom: 0;\n  margin: 0;\n",N=function(e){return Object(r.c)(L,T({},e,{position:"absolute",className:"Grid--Control",alignY:"stretch",styleOuter:"grid"===e.cssMode?G:G+"margin: 0;",styleInner:"\n        grid-auto-rows: auto;\n      "}),E(Array(e.colspan)).map((function(t,n){return Object(r.c)(P.a,{key:n,cols:1,styleInner:"\n            background-color: ".concat(e.controlColor,";\n          ")})})))},S=N;N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{configurable:!0,value:{name:"Control",filename:"src/raster/Control/index.js"}}),N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{configurable:!0,value:{name:"Control",filename:"src/raster/Control/index.js"}});var I=n(985);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=a.a.forwardRef((function(e,t){var n=e.breakpoints,a=e.left,i=e.right,c=e.top,s=e.bottom,g=e.gutterX,m=e.gutterY,v=e.alignX,h=e.alignY,w=e.colspan,k=e.control,M=e.controlColor,_=e.position,B=e.className,Y=e.style,X=e.styleInner,P=e.styleOuter,T=e.children,E=e.cssMode,G=e.tag,N=O(k),z=function(e){var t=x(Object(o.useState)(e),2),n=t[0],r=t[1];return Object(o.useEffect)((function(){if(!n){var e=window.CSS&&window.CSS.supports||window.supportsCSS||!1;!!e&&e("grid-template-rows","none")||r("flex")}}),[]),n}(E||"grid"),L=Object(o.useMemo)((function(){return n}),[n]),R=function(e){var t=A(Object(o.useState)(0),2),n=t[0],r=t[1];return Object(o.useEffect)((function(){function t(){var t=window.innerWidth,n=0;e.forEach((function(e){e<=t&&(n=e)})),r(n)}return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n}(L),D=Object(o.useMemo)((function(){return Object(b.a)({prop:g,breakpoints:L})}),[g,L]),V=Object(o.useMemo)((function(){return Object(b.a)({prop:m,breakpoints:L})}),[m,L]),F=Object(o.useMemo)((function(){return Object(d.a)(Object(b.a)({prop:v,breakpoints:L}),z,!0)}),[v,L,z]),W=Object(o.useMemo)((function(){return Object(d.a)(Object(b.a)({prop:h,breakpoints:L}),z,!0)}),[h,L,z]),H=Object(o.useMemo)((function(){return function(e){var t=e.length;return e.map((function(n,r){var o=r!==t-1?" and (max-width: ".concat(e[r+1]-1,"px)"):"";return function(){return Object(f.a)(p(),n,o,f.a.apply(void 0,arguments))}}))}(L)}),[L]),J=Object(o.useMemo)((function(){return Object(b.a)({prop:w,breakpoints:L})}),[w,L]),q=Object(o.useMemo)((function(){return Object(b.a)({prop:a,breakpoints:L})}),[a,L]),K=Object(o.useMemo)((function(){return Object(b.a)({prop:i,breakpoints:L})}),[i,L]),Q=Object(o.useMemo)((function(){return Object(b.a)({prop:c,breakpoints:L})}),[c,L]),U=Object(o.useMemo)((function(){return Object(b.a)({prop:s,breakpoints:L})}),[s,L]),Z=Object(o.useMemo)((function(){return Object(b.a)({prop:_,breakpoints:L})}),[_,L]),$=Object(o.useMemo)((function(){return Object(b.a)({prop:P,breakpoints:n})}),[P,n]),ee=Object(o.useMemo)((function(){return Object(b.a)({prop:X,breakpoints:n})}),[X,n]),te=Object(o.useMemo)((function(){return Object(I.a)(Object(b.a)({prop:Y,breakpoints:n}),ee,$)}),[Y,n,ee,$]);return Object(r.c)(C,{cssMode:z,colspan:w,className:u()(["Grid","bp-".concat(R),B]),gutterX:D,gutterY:V,alignX:F,alignY:W,media:H,left:q,right:K,top:Q,bottom:U,position:Z,tag:G,style:"grid"===z?te:$,ref:t},k&&N&&Object(r.c)(S,{cssMode:z,colspan:w,breakpoints:n,gutterX:g,gutterY:m,left:a,right:i,top:c,bottom:s,controlColor:M}),Object(r.c)(j.a,{cssMode:z,className:"Grid__Inner",gutterX:D,gutterY:V,alignX:F,alignY:W,media:H,style:ee,controlColor:M},Object(r.c)(y.a,{cssMode:z,className:"Grid__Resetter",hasChildBoxes:!0,gutterX:D,gutterY:V,alignX:F,alignY:W,media:H},Object(r.c)(l.a.Provider,{value:{cssMode:z,breakpoints:L,gutterX:D,gutterY:V,alignX:F,alignY:W,media:H,colspan:w,parent:J,controlIsVisible:N,controlColor:M}},T))))}));z.propTypes={breakpoints:c.a.array,colspan:c.a.number,left:c.a.oneOfType([c.a.array,c.a.string]),right:c.a.oneOfType([c.a.array,c.a.string]),top:c.a.oneOfType([c.a.array,c.a.string]),bottom:c.a.oneOfType([c.a.array,c.a.string]),gutterX:c.a.oneOfType([c.a.array,c.a.string]),gutterY:c.a.oneOfType([c.a.array,c.a.string]),alignX:c.a.oneOfType([c.a.array,c.a.string]),alignY:c.a.oneOfType([c.a.array,c.a.string]),control:c.a.bool,controlColor:c.a.string,position:c.a.oneOfType([c.a.array,c.a.string]),className:c.a.string,style:c.a.oneOfType([c.a.array,c.a.string]),styleInner:c.a.oneOfType([c.a.array,c.a.string]),styleOuter:c.a.oneOfType([c.a.array,c.a.string]),children:c.a.node,cssMode:c.a.string,tag:c.a.string},z.defaultProps={breakpoints:[0,432,768,1024,1200,1400],left:"0",right:"0",top:"0",bottom:"0",gutterX:"0",gutterY:"0",alignX:"",alignY:"",colspan:1,control:!1,controlColor:"rgba(0, 0, 0, 0.1)",position:"relative",style:"",styleOuter:"",styleInner:"",className:"",children:null,cssMode:void 0,tag:"div"};var L=t.a=z;void 0!==z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}}),void 0!==z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}}),void 0!==z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}}),void 0!==z&&z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{configurable:!0,value:{name:"Grid",filename:"src/raster/Grid/index.js"}})},1002:function(e,t,n){"use strict";var r=n(1001);n.d(t,"b",(function(){return r.a}));var o=n(1e3);n.d(t,"a",(function(){return o.a})),"undefined"!=typeof Grid&&Grid&&Grid===Object(Grid)&&Object.isExtensible(Grid)&&Object.defineProperty(Grid,"__filemeta",{configurable:!0,value:{name:"Grid",filename:"src/raster/index.js"}}),"undefined"!=typeof Grid&&Grid&&Grid===Object(Grid)&&Object.isExtensible(Grid)&&Object.defineProperty(Grid,"__filemeta",{configurable:!0,value:{name:"Grid",filename:"src/raster/index.js"}}),"undefined"!=typeof Box&&Box&&Box===Object(Box)&&Object.isExtensible(Box)&&Object.defineProperty(Box,"__filemeta",{configurable:!0,value:{name:"Box",filename:"src/raster/index.js"}}),"undefined"!=typeof Box&&Box&&Box===Object(Box)&&Object.isExtensible(Box)&&Object.defineProperty(Box,"__filemeta",{configurable:!0,value:{name:"Box",filename:"src/raster/index.js"}})},1003:function(e,t,n){e.exports=n.p+"static/image-1-eccf4f7ba9a159d650716ae15279e682.jpg"},1004:function(e,t,n){e.exports=n.p+"static/image-2-da6160ba8a2e9c93efc8d35a819a1df5.jpg"},1005:function(e,t,n){e.exports=n.p+"static/image-3-5e617a333df9c755a71b210b8a49e2b4.jpg"},1006:function(e,t,n){e.exports=n.p+"static/image-4-092afe3104f0491a58f331156e20cfb8.jpg"},1007:function(e,t,n){e.exports=n.p+"static/image-5-a81aee5143703919c113b9c84881d3c8.jpg"},997:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return x})),n.d(t,"default",(function(){return w}));n(8),n(1);var r=n(77),o=n(988),a=n(32),i=n(1002),c=n(1003),s=n.n(c),u=n(1004),l=n.n(u),b=n(1005),f=n.n(b),p=n(1006),d=n.n(p),g=n(1007),m=n.n(g);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var x={};void 0!==x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/index.mdx"}});var v={_frontmatter:x},h=o.a;function w(e){var t,n=e.components,c=y(e,["components"]);return Object(r.b)(h,O({},v,c,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"react-raster"},"react-raster"),Object(r.b)("p",null,"An advanced grid-system based on styled-components; highly customizable while being easy to use.\nRegardless, if your grid is simple or complex: react-raster simplifies layouting."),Object(r.b)("p",null,"It combines features from ",Object(r.b)("inlineCode",{parentName:"p"},"Flexbox")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Grid Layout")," to provide a simple yet flexible layout-interface.\nOn current browsers it uses the benefits of ",Object(r.b)("inlineCode",{parentName:"p"},"Grid Layout"),". On legacy browsers it automatically falls back to plain ",Object(r.b)("inlineCode",{parentName:"p"},"Flexbox")," (almost) without any changes (see Section ",Object(r.b)("strong",{parentName:"p"},"Flexbox"),")."),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Resize your viewport")," to see the layout changing."),Object(r.b)("p",null,"Press ",Object(r.b)("inlineCode",{parentName:"p"},"ESC")," to see the visual control."),Object(r.b)(a.c,{__position:0,__code:"<Grid\n  tag=\"section\"\n  breakpoints={[0, 500, 768, 1024, 1200, 1400]}\n  left={'1.5vw'}\n  right={'3vw'}\n  top={'10vw'}\n  bottom={'20vw'}\n  gutterX={'1.5vw'}\n  gutterY={'3vw'}\n  colspan={12}\n  alignX={'center'}\n  alignY={'center'}\n  control\n  style={`\n    background: blue;\n    &.bp-768 {\n      // background: black;\n    }\n  `}\n>\n  <Box\n    className=\"Box--1\"\n    cols={[6, 3, 2]}\n    cols={[6, 3, 3, 3, 2]}\n    left={[0, 1]}\n    right={[0, 1]}\n    alignY=\"center\"\n    style={`\n      background: yellow;\n      height: 200px;\n      display: flex;\n      justify-content: center;\n    `}\n  >\n    Hallo\n  </Box>\n  <Box\n    className=\"Box--2\"\n    cols={[6, 3, 3, 3, 2]}\n    left={[0, 1]}\n    right={[1]}\n    alignY=\"center\"\n    style={`\n      background: yellow;\n      height: 200px;\n      display: flex;\n      justify-content: center;\n    `}\n  >\n    World\n  </Box>\n  <Box\n    className=\"Box--3\"\n    cols={[6, 3, 3, 3, 12]}\n    left={[0, 1, 1, 1, 0]}\n    alignY=\"center\"\n    style={`\n      background: yellow;\n      height: 200px;\n      display: flex;\n      justify-content: center;\n    `}\n  >\n    !!!\n  </Box>\n</Grid>",__scope:{props:c,DefaultLayout:o.a,Playground:a.c,Grid:i.b,Box:i.a,image1:s.a,image2:l.a,image3:f.a,image4:d.a,image5:m.a},mdxType:"Playground"},Object(r.b)(i.b,{tag:"section",breakpoints:[0,500,768,1024,1200,1400],left:"1.5vw",right:"3vw",top:"10vw",bottom:"20vw",gutterX:"1.5vw",gutterY:"3vw",colSpan:12,alignX:"center",alignY:"center",control:!0,style:"\n      background: blue;\n      &.bp-768 {\n        // background: black;\n      }\n    ",mdxType:"Grid"},Object(r.b)(i.a,(j(t={className:"Box--1",cols:[6,3,2]},"cols",[6,3,3,3,2]),j(t,"left",[0,1]),j(t,"right",[0,1]),j(t,"alignY","center"),j(t,"style","\n        background: yellow;\n        height: 200px;\n        display: flex;\n        justify-content: center;\n      "),j(t,"mdxType","Box"),t),"Hallo"),Object(r.b)(i.a,{className:"Box--2",cols:[6,3,3,3,2],left:[0,1],right:[1],alignY:"center",style:"\n        background: yellow;\n        height: 200px;\n        display: flex;\n        justify-content: center;\n      ",mdxType:"Box"},"World"),Object(r.b)(i.a,{className:"Box--3",cols:[6,3,3,3,12],left:[0,1,1,1,0],alignY:"center",style:"\n        background: yellow;\n        height: 200px;\n        display: flex;\n        justify-content: center;\n      ",mdxType:"Box"},"!!!"))))}w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/index.mdx"}}),w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-0e5a654f9a2d42efa481.js.map