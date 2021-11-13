(function(e){function n(n){for(var r,s,c=n[0],i=n[1],u=n[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={app:0},a=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/etch_a_sketch/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var p=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0215":function(e,n,t){},"0f12":function(e,n,t){"use strict";t("c0c4")},"1c5d":function(e,n,t){},"2f0e":function(e,n,t){"use strict";t("8fb1")},"3c7f":function(e,n,t){"use strict";t("0215")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("header-component"),t("content-component"),t("footer-component")],1)},a=[],s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"header"}},[e._v(" Etch a Sketch ")])},c=[],i={name:"HeaderComponent"},u=i,p=(t("0f12"),t("2877")),l=Object(p["a"])(u,s,c,!1,null,"3a801601",null),f=l.exports,h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"content"}},[t("toolbar-component",{attrs:{penThickness:e.penThickness},on:{"thickness-change":e.thicknessChange,"clear-canvas":e.clearCanvas}}),t("canvas-component",{ref:"canvasComponent",attrs:{penThickness:e.penThickness}})],1)},d=[],v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"toolbar"}},[t("div",[t("div",{attrs:{id:"drawMode"}},[e._v("Draw Mode: Off")]),t("div",{attrs:{id:"drawModeInfo"}},[t("font-awesome-icon",{attrs:{icon:"info-circle"}}),e._v(" Press d to switch ")],1)]),t("div",{attrs:{id:"selectColor"}},[t("font-awesome-icon",{attrs:{icon:"pencil-alt"}}),e._v(" Pen ")],1),t("div",{attrs:{id:"eraser"}},[t("font-awesome-icon",{attrs:{icon:"eraser"}}),e._v(" Eraser ")],1),t("div",{attrs:{id:"clear"},on:{click:e.clearCanvas}},[t("font-awesome-icon",{attrs:{icon:"times"}}),e._v(" Clear ")],1),t("custom-range-input",{attrs:{penThickness:e.penThickness},on:{"thickness-change":e.thicknessChange}})],1)},m=[],g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"slider"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.rangeInput.value,expression:"rangeInput.value"}],attrs:{type:"range",step:e.rangeInput.step,min:e.rangeInput.min,max:e.rangeInput.max},domProps:{value:e.rangeInput.value},on:{change:e.thicknessChange,__r:function(n){return e.$set(e.rangeInput,"value",n.target.value)}}}),t("p",[e._v(e._s(e.rangeInput.value))])])},b=[],C={name:"CustomRangeInput",props:{penThickness:{type:String,required:!0}},data:function(){return{rangeInput:{step:"1",min:"1",max:"10",value:this.penThickness}}},methods:{thicknessChange:function(){this.$emit("thickness-change",this.rangeInput.value)}}},_=C,k=(t("3c7f"),Object(p["a"])(_,g,b,!1,null,"21f2d04e",null)),w=k.exports,y={name:"ToolbarComponent",props:{penThickness:{type:String,required:!0}},components:{CustomRangeInput:w},methods:{clearCanvas:function(){this.$emit("clear-canvas")},thicknessChange:function(e){this.$emit("thickness-change",e)}}},x=y,T=(t("8dd1"),Object(p["a"])(x,v,m,!1,null,"62952eb0",null)),O=T.exports,j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"canvas"}},[t("canvas",{on:{mouseenter:e.setInitial,mousemove:e.draw}})])},I=[],$={name:"CanvasComponent",props:{penThickness:{type:String,required:!0}},data:function(){return{canvas:"",ctx:"",prevX:0,prevY:0}},mounted:function(){var e=this.$el.querySelector("canvas");this.canvas=e;var n=e.parentElement.getBoundingClientRect();e.height=n.height,e.width=n.width,this.ctx=e.getContext("2d")},methods:{setInitial:function(e){this.prevX=e.offsetX,this.prevY=e.offsetY},draw:function(e){this.drawLine(this.prevX,this.prevY,e.offsetX,e.offsetY),this.prevX=e.offsetX,this.prevY=e.offsetY},drawLine:function(e,n,t,r){var o=this.ctx;o.beginPath(),o.strokeStyle="#000",o.lineWidth=this.penThickness,o.moveTo(e,n),o.lineTo(t,r),o.stroke(),o.closePath()},clearCanvas:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}},P=$,S=(t("a02f"),Object(p["a"])(P,j,I,!1,null,"68603336",null)),E=S.exports,M={name:"ContentComponent",data:function(){return{penThickness:"1"}},components:{ToolbarComponent:O,CanvasComponent:E},methods:{clearCanvas:function(){this.$refs.canvasComponent.clearCanvas()},thicknessChange:function(e){this.penThickness=e}}},X=M,Y=(t("2f0e"),Object(p["a"])(X,h,d,!1,null,"d6b7ad3a",null)),q=Y.exports,R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"footer"}},[e._v("2021, © Can Özsoy")])},F=[],H={name:"FooterComponent"},J=H,L=(t("eebe"),Object(p["a"])(J,R,F,!1,null,"30abb185",null)),z=L.exports,A={name:"App",components:{HeaderComponent:f,ContentComponent:q,FooterComponent:z}},B=A,D=(t("5c0b"),Object(p["a"])(B,o,a,!1,null,null,null)),N=D.exports,W=(t("e008"),t("ecee")),G=t("c074"),K=t("ad3d");W["c"].add(G["b"],G["c"],G["a"],G["d"]),r["a"].component("font-awesome-icon",K["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"68b4":function(e,n,t){},"6f4f":function(e,n,t){},"8dd1":function(e,n,t){"use strict";t("1c5d")},"8fb1":function(e,n,t){},"9c0c":function(e,n,t){},a02f:function(e,n,t){"use strict";t("68b4")},c0c4:function(e,n,t){},e008:function(e,n,t){},eebe:function(e,n,t){"use strict";t("6f4f")}});
//# sourceMappingURL=app.07a672f0.js.map