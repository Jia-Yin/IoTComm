(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{116:function(t,n,e){},17:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},18:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},19:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},20:function(t,n,e){var r=e(18),s=e(26),i=e(24),o=e(29),u=e(39),c=function(t,n,e){var a,f,l,p,h=t&c.F,v=t&c.G,b=t&c.S,g=t&c.P,d=t&c.B,_=v?r:b?r[n]||(r[n]={}):(r[n]||{}).prototype,m=v?s:s[n]||(s[n]={}),y=m.prototype||(m.prototype={});for(a in v&&(e=n),e)l=((f=!h&&_&&void 0!==_[a])?_:e)[a],p=d&&f?u(l,r):g&&"function"==typeof l?u(Function.call,l):l,_&&o(_,a,l,t&c.U),m[a]!=l&&i(m,a,p),g&&y[a]!=l&&(y[a]=l)};r.core=s,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},22:function(t,n,e){var r=e(19);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},23:function(t,n,e){t.exports=!e(17)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},234:function(t,n,e){"use strict";var r=e(116);e.n(r).a},24:function(t,n,e){var r=e(34),s=e(38);t.exports=e(23)?function(t,n,e){return r.f(t,n,s(1,e))}:function(t,n,e){return t[n]=e,t}},244:function(t,n,e){"use strict";e.r(n);e(56),e(54);var r={data:function(){return{selection:[],T:[[0,0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4],[0,2,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5],[3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6],[5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6],[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],[6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],[7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]],nopts:[3,4,5,6,7,8,9,10,11,12,13,14,15,16],curstate:{e0:[],e1:[]},numbers:3,records:[],step:0,gstate:"open",numarr:[],message:""}},computed:{sortselection:function(){return this.selection.sort()}},methods:{gstart:function(){this.step=1,this.records=[],this.numarr=[],this.selection=[],this.message="",this.curstate={e0:[],e1:[]};for(var t=1;t<=this.numbers;t++)this.curstate.e0.push(t),this.numarr.push(t);this.gstate="game"},bask:function(){if(this.message="",0==this.selection.length)return-1;var t={id:0,ans:!0,num:this.selection},n=this.update(this.curstate,t);t={ans:!1,num:this.selection};var e=this.update(this.curstate,t),r=this.T[n.e0.length][n.e1.length],s=this.T[e.e0.length][e.e1.length];r+s==0?n.e0.length+n.e1.length==1?(t.ans=!0,this.curstate=n):(t.ans=!1,this.curstate=e):r>=s?(t.ans=!0,this.curstate=n):(t.ans=!1,this.curstate=e,r=s),t.id=this.step,this.records.push(t),this.selection=[],this.step++},banswer:function(){var t=0;if(1!=this.selection.length)return this.message="Exactly ONE number for answer!<br>",this.selection=[],-1;var n=this.selection[0];if(this.curstate.e0.length+this.curstate.e1.length==1)t=this.curstate.e0.length>0?this.curstate.e0[0]:this.curstate.e1[0],this.message=n==t?"Correct!":"Wrong! My number is "+t+"!";else{for(var e=0;e<this.curstate.e0.length;e++)if(this.curstate.e0[e]!=n){t=this.curstate.e0[e];break}if(0==t)for(e=0;e<this.curstate.e1.length;e++)if(this.curstate.e1[e]!=n){t=this.curstate.e1[e];break}this.message="Wrong! My number is "+t+"!"}this.gstate="end"},update:function(t,n){for(var e={e0:[],e1:[]},r=0;r<t.e0.length;r++){n.num.indexOf(t.e0[r])>=0==n.ans?e.e0.push(t.e0[r]):e.e1.push(t.e0[r])}for(r=0;r<t.e1.length;r++){n.num.indexOf(t.e1[r])>=0==n.ans&&e.e1.push(t.e1[r])}return e}}},s=(e(234),e(2)),i=Object(s.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-container",["open"==t.gstate?e("div",[e("b-row",{staticClass:"question"},[t._v("\n      I have a number between 1~N.\n      "),e("br"),t._v("You ask Y/N question about numbers.\n      "),e("br"),t._v("I can lie at most once.\n      "),e("br"),t._v("How many questions needed to get the number?\n      "),e("br"),t._v(" "),e("br"),t._v("Choose N\n    ")]),t._v(" "),e("div",{staticClass:"numbers"},[e("b-select",{attrs:{size:"lg"},model:{value:t.numbers,callback:function(n){t.numbers=n},expression:"numbers"}},t._l(t.nopts,(function(n){return e("option",[t._v(t._s(n))])})),0),t._v(" "),e("b-button",{attrs:{id:"gstart",size:"lg",variant:"outline-success"},on:{click:t.gstart}},[t._v("GO")])],1)],1):"game"==t.gstate?e("div",[e("b-row",{staticClass:"question"},[""!=t.message?e("p",[e("span",{staticClass:"message",domProps:{innerHTML:t._s(t.message)}})]):t._e(),t._v("\n      Q"+t._s(t.step)+". Guess numbers: "+t._s(t.sortselection)+"\n      ")]),t._v(" "),e("p",{attrs:{align:"center"}},[e("b-form-checkbox-group",{attrs:{options:t.numarr,"button-variant":"outline-primary",size:"lg",name:"selection","unchecked-value":"not_accepted"},model:{value:t.selection,callback:function(n){t.selection=n},expression:"selection"}})],1),t._v(" "),e("p",{attrs:{align:"center"}},[t._v("\n      Ask ==> Ask question\n      "),e("br"),t._v("Answer ==> Submit answer\n      "),e("br"),t._v(" "),e("br"),t._v(" "),e("b-button",{staticClass:"btn btn-lg long",attrs:{id:"bask",variant:"success"},on:{click:t.bask}},[t._v("Ask")]),t._v(" "),e("span",{staticStyle:{display:"inline-block",width:"60px"}}),t._v(" "),e("b-button",{staticClass:"btn btn-lg long",attrs:{id:"banswer",variant:"warning"},on:{click:t.banswer}},[t._v("Answer")])],1)],1):e("div",[e("div",{staticClass:"row question"},[""!=t.message?e("p",[e("span",{staticClass:"message",domProps:{innerHTML:t._s(t.message)}})]):t._e(),t._v("\n      Again?\n      "),e("br"),t._v(" "),e("br"),t._v(" "),t.gstate?e("b-button",{staticClass:"btn btn-lg long",attrs:{variant:"success"},on:{click:function(n){t.gstate="open"}}},[t._v("GO")]):t._e()],1)]),t._v(" "),"open"!=t.gstate?e("div",[e("hr"),t._v(" "),e("div",{staticClass:"records"},t._l(t.records,(function(n,r){return e("div",[t._v("\n        "+t._s(n.id)+".  "+t._s(n.num)+" ==>\n        "),n.ans?e("span",[t._v("Y")]):t._e(),t._v(" "),n.ans?t._e():e("span",[t._v("N")]),t._v(" "),e("br")])})),0)]):t._e()])}),[],!1,null,"3c86adae",null);n.default=i.exports},25:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},26:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},27:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},28:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},29:function(t,n,e){var r=e(18),s=e(24),i=e(35),o=e(33)("src"),u=e(45),c=(""+u).split("toString");e(26).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var a="function"==typeof e;a&&(i(e,"name")||s(e,"name",n)),t[n]!==e&&(a&&(i(e,o)||s(e,o,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:s(t,n,e):(delete t[n],s(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[o]||u.call(this)}))},30:function(t,n,e){"use strict";var r=e(17);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},31:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},32:function(t,n,e){var r=e(26),s=e(18),i=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(41)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},33:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},34:function(t,n,e){var r=e(22),s=e(42),i=e(44),o=Object.defineProperty;n.f=e(23)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),s)try{return o(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},35:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},36:function(t,n,e){var r=e(28),s=Math.min;t.exports=function(t){return t>0?s(r(t),9007199254740991):0}},37:function(t,n,e){var r=e(25);t.exports=function(t){return Object(r(t))}},38:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},39:function(t,n,e){var r=e(27);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,s){return t.call(n,e,r,s)}}return function(){return t.apply(n,arguments)}}},41:function(t,n){t.exports=!1},42:function(t,n,e){t.exports=!e(23)&&!e(17)((function(){return 7!=Object.defineProperty(e(43)("div"),"a",{get:function(){return 7}}).a}))},43:function(t,n,e){var r=e(19),s=e(18).document,i=r(s)&&r(s.createElement);t.exports=function(t){return i?s.createElement(t):{}}},44:function(t,n,e){var r=e(19);t.exports=function(t,n){if(!r(t))return t;var e,s;if(n&&"function"==typeof(e=t.toString)&&!r(s=e.call(t)))return s;if("function"==typeof(e=t.valueOf)&&!r(s=e.call(t)))return s;if(!n&&"function"==typeof(e=t.toString)&&!r(s=e.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},45:function(t,n,e){t.exports=e(32)("native-function-to-string",Function.toString)},47:function(t,n,e){var r=e(55),s=e(25);t.exports=function(t){return r(s(t))}},48:function(t,n,e){var r=e(47),s=e(36),i=e(61);t.exports=function(t){return function(n,e,o){var u,c=r(n),a=s(c.length),f=i(o,a);if(t&&e!=e){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},54:function(t,n,e){"use strict";var r=e(20),s=e(27),i=e(37),o=e(17),u=[].sort,c=[1,2,3];r(r.P+r.F*(o((function(){c.sort(void 0)}))||!o((function(){c.sort(null)}))||!e(30)(u)),"Array",{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),s(t))}})},55:function(t,n,e){var r=e(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},56:function(t,n,e){"use strict";var r=e(20),s=e(48)(!1),i=[].indexOf,o=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(o||!e(30)(i)),"Array",{indexOf:function(t){return o?i.apply(this,arguments)||0:s(this,t,arguments[1])}})},61:function(t,n,e){var r=e(28),s=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?s(t+n,0):i(t,n)}}}]);