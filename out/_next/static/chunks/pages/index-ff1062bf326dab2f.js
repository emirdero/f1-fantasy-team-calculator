(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},4369:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return d}});var t=n(5893),s=n(9008),o=n.n(s),c=n(7294);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,s,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);c=!0);}catch(a){i=!0,s=a}finally{try{c||null==n.return||n.return()}finally{if(i)throw s}}return o}}(e,r)||u(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){if(e){if("string"===typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,r):void 0}}function d(){var e=a(c.useState(Array(6).fill({price:0,average_score_current_season:0})),2),r=e[0],n=e[1],s=a(c.useState([]),2),i=s[0],u=s[1],d=a(c.useState(0),2),p=d[0],h=d[1],m=a(c.useState([]),2),x=m[0],y=m[1];return c.useEffect((function(){fetch("https://f1-fantasy-tools-api.herokuapp.com//drivers").then((function(e){return e.json()})).then((function(e){return u(e)})),fetch("https://f1-fantasy-tools-api.herokuapp.com//constructors").then((function(e){return e.json()})).then((function(e){return y(e)}))}),[]),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:"Create Next App"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("link",{rel:"stylesheet",href:"style.css"})]}),(0,t.jsx)("div",{id:"modal-root"}),(0,t.jsx)(f,{id:"constructorModal",items:x,setConstructor:function(e){return n((function(r){return r[p]=e,l(r)}))}}),(0,t.jsx)(f,{id:"driverModal",items:i,setConstructor:function(e){return n((function(r){return r[p]=e,l(r)}))}}),(0,t.jsxs)("main",{children:[(0,t.jsx)("h1",{className:"title",children:"F1 Fantasy Team Calculator"}),(0,t.jsx)("p",{className:"description",children:"Add drivers and a constructor to see their expected points"}),(0,t.jsxs)("p",{className:"description",children:["Expected return:"," ",r.reduce((function(e,r,n){var t=r.average_score_current_season,s=1==n?2*t:t;return{average_score_current_season:e.average_score_current_season+s}})).average_score_current_season.toFixed(2)," ","points ",(0,t.jsx)("br",{})," Total cost: $",r.reduce((function(e,r){return{price:e.price+r.price}})).price.toFixed(2)," ","Million"]}),(0,t.jsx)("div",{className:"grid",children:r.map((function(e,r){return(0,t.jsx)("a",{onClick:function(){document.getElementById(0==r?"constructorModal":"driverModal").style.display="block",h(r)},className:"card",style:{backgroundColor:e.color,color:0==e.price||"#ffffff"==e.color?"black":"white"},children:0==e.price?(0,t.jsxs)("span",{children:[(0,t.jsx)("h1",{className:"pluss",children:" +"}),(0,t.jsxs)("p",{className:"pluss",children:["Add"," ",0==r?"constructor":1==r?"turbo driver":"driver"]})]}):(0,t.jsxs)("span",{children:[(0,t.jsxs)("h1",{className:"pluss",children:[" ",e.name]}),(0,t.jsxs)("p",{className:"pluss",children:["$",e.price," -"," ",1==r?(2*e.average_score_current_season).toFixed(2)+" points (turbo driver)":e.average_score_current_season.toFixed(2)+" points"]})]})},"card"+r)}))})]})]})}function f(e){var r=function(){return document.getElementById(e.id).style.display="none"};return(0,t.jsx)("div",{id:e.id,className:"modal",children:(0,t.jsxs)("div",{className:"modal-content",children:[(0,t.jsx)("a",{onClick:r,children:(0,t.jsx)("span",{className:"close",children:"\xd7"})}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"grid",style:{maxWidth:5e5},children:e.items.map((function(n,s){return(0,t.jsx)("a",{onClick:function(){e.setConstructor(n),r()},className:"card",style:{borderColor:n.color,borderWidth:5},children:(0,t.jsxs)("p",{className:"pluss",children:[n.name,(0,t.jsx)("br",{}),"$",n.price," -"," ",n.average_score_current_season.toFixed(2)," points"]})},e.id+s)}))})})]})})}},9008:function(e,r,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],(function(){return r=5557,e(e.s=r);var r}));var r=e.O();_N_E=r}]);