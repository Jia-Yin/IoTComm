(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{322:function(t,i,o){var s=o(1),n=o(4),e=o(69),h=[].slice,c=function(t){return function(i,o){var s=arguments.length>2,n=s?h.call(arguments,2):void 0;return t(s?function(){("function"==typeof i?i:Function(i)).apply(this,n)}:i,o)}};s({global:!0,bind:!0,forced:/MSIE .\./.test(e)},{setTimeout:c(n.setTimeout),setInterval:c(n.setInterval)})},323:function(t,i,o){var s=o(1),n=o(324),e=o(97);s({target:"Array",proto:!0},{fill:n}),e("fill")},324:function(t,i,o){"use strict";var s=o(11),n=o(99),e=o(14);t.exports=function(t){for(var i=s(this),o=e(i.length),h=arguments.length,c=n(h>1?arguments[1]:void 0,o),r=h>2?arguments[2]:void 0,a=void 0===r?o:n(r,o);a>c;)i[c++]=t;return i}},349:function(t,i,o){},391:function(t,i,o){"use strict";o(349)},403:function(t,i,o){"use strict";o.r(i);o(322),o(323);var s={props:["size"],data:function(){return{ms:0,canw:0,canh:0,step:0,axiscolor:"#555555",sincolor:"#ff0000",coscolor:"#00c000",circcolor:"#bbbbbb",drcolor:"#0000ff50",dotcolor:"#0000ff"}},mounted:function(){this.init()},methods:{path_sin:function(t){var i=2*Math.PI/29,o=0,s=150,n=100;t.beginPath(),t.moveTo(s,n);for(var e=0;e<29;e++){o+=i;var h=Math.sin(o);s+=180/Math.PI*i,n=100-50*h,t.lineTo(s,n)}t.stroke(),t.closePath()},path_cos:function(t){var i=2*Math.PI/29,o=0,s=150,n=50;t.beginPath(),t.moveTo(s,n);for(var e=0;e<29;e++){o+=i;var h=Math.cos(o);s+=180/Math.PI*i,n=100-50*h,t.lineTo(s,n)}t.stroke(),t.closePath()},path_circ:function(t,i,o,s){t.beginPath(),t.arc(i,o,s,0,2*Math.PI,!0),t.stroke(),t.closePath()},path_line:function(t,i,o,s,n){t.beginPath(),t.moveTo(i,o),t.lineTo(s,n),t.stroke(),t.closePath()},init:function(){var t=this,i=this.$refs.canv,o=i.getContext("2d");this.canw=i.width,this.canh=i.height;var s=.9*window.screen.width/550;window.screen.width<600&&(i.height=i.height*s,i.width=i.width*s,o.scale(s,s)),setInterval((function(){t.draw(o)}),100)},circ_dot:function(t,i){var o=100+50*Math.cos(i),s=100-50*Math.sin(i);t.fillStyle=this.dotcolor,this.path_dot(t,o,s),t.strokeStyle=this.drcolor,t.lineWidth=1.5,this.path_line(t,100,100,o,s),t.strokeStyle=this.sincolor,this.path_line(t,o,100,o,s),t.strokeStyle=this.coscolor,this.path_line(t,100,s,o,s)},sin_dot:function(t,i){var o=150+180*i/Math.PI,s=100-50*Math.sin(i);t.fillStyle=this.sincolor,this.path_dot(t,o,s),t.strokeStyle=this.sincolor},cos_dot:function(t,i){var o=150+180*i/Math.PI,s=100-50*Math.cos(i);t.fillStyle=this.coscolor,this.path_dot(t,o,s),t.strokeStyle=this.coscolor},path_dot:function(t,i,o){t.beginPath(),t.arc(i,o,4,0,2*Math.PI,!0),t.fill(),t.closePath()},draw:function(t){this.step++,this.step>40&&(this.step=0);var i=this.step/40*2*Math.PI;t.clearRect(0,0,this.canw,this.canh),t.fillStyle="rgba(0,0,0,0)",t.lineWidth=1.5,t.strokeStyle=this.sincolor,this.path_sin(t),t.strokeStyle=this.coscolor,this.path_cos(t),t.strokeStyle=this.circcolor,this.path_circ(t,100,100,50),t.strokeStyle=this.axiscolor,t.lineWidth=.6,this.path_line(t,25,100,513,100),this.path_line(t,100,25,100,175),this.path_line(t,150,25,150,175),this.circ_dot(t,i),this.sin_dot(t,i),this.cos_dot(t,i)}}},n=(o(391),o(20)),e=Object(n.a)(s,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"gcontainer"},[i("canvas",{ref:"canv",attrs:{width:"550",height:"180"}},[this._v("Canvas Not supported, sorry.")])])}),[],!1,null,"2677c0c3",null);i.default=e.exports}}]);