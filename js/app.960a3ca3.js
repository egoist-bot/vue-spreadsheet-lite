webpackJsonp([0],{"/UQN":function(e,t){},0:function(e,t,i){e.exports=i("NHnr")},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("/5sW"),s=(i("/UQN"),{name:"SushiGrid",props:{},data:function(){return{header:["No","Name","Age","Gender"],data:[["A1","A2","A3","A4"],["B1","B2","B3","B4"],["C1","C2","C3","C4"]],selection:{c:1,r:0,ec:1,er:0},editingText:"",editing:!1,editingCell:{c:0,r:0},rowHeight:24,selectionMode:!1}},computed:{styleObj:function(){return{left:100*this.selection.c+"px",top:24*this.selection.r+24+"px"}},selectionTransform:function(){return"translate(".concat(100*this.selectionSize.c,",  ").concat(24*this.selectionSize.r,")")},selectionSize:function(){return{r:this.selection.r<=this.selection.er?this.selection.r:this.selection.er,c:this.selection.c<=this.selection.ec?this.selection.c:this.selection.ec,w:Math.abs(this.selection.ec-this.selection.c)+1,h:Math.abs(this.selection.er-this.selection.r)+1}}},methods:{setCell:function(e,t,i){n["a"].set(this.data[t],e,i)},onBlur:function(){this.editing=!1,this.setCell(this.editingCell.c,this.editingCell.r,this.editingText)},translateCol:function(e){return"translate(".concat(100*e,", 0)")},translateRow:function(e){return"translate(0, ".concat(24*e,")")},onMouseDownCell:function(e,t){this.selectionSize.c!==e||this.selectionSize.r!==t||1!==this.selectionSize.w||1!==this.selectionSize.h?this.setSelectionStart(e,t):this.editCell(e,t)},setSelectionSingle:function(e,t){this.selection.c=e,this.selection.r=t,this.selection.ec=e,this.selection.er=t},setSelectionStart:function(e,t){this.selection.c=e,this.selection.r=t,this.selection.ec=e,this.selection.er=t,this.selectionMode=!0},setSelectionEnd:function(e,t){this.selectionMode&&(this.selection.ec=e,this.selection.er=t)},endSelection:function(){this.selectionMode=!1},editCell:function(e,t){var i=this;this.editingCell.c=e,this.editingCell.r=t,this.editingText=this.data[t][e],this.editing=!0,n["a"].nextTick(function(){i.$refs.hiddenInput.focus()})},editHere:function(){this.editCell(this.selection.c,this.selection.r)},clearCell:function(e,t){this.setCell(e,t,"")},clearSelection:function(){for(var e=0;e<this.selectionSize.h;e++)for(var t=0;t<this.selectionSize.w;t++)this.clearCell(this.selectionSize.c+t,this.selectionSize.r+e)},moveCursor:function(e,t){this.onBlur(),this.setSelectionSingle(this.selection.c+e,this.selection.r+t)}},mounted:function(){var e=this;window.onkeydown=function(t){switch(t.keyCode){case 37:e.moveCursor(-1,0);break;case 38:e.moveCursor(0,-1);break;case 39:e.moveCursor(1,0);break;case 40:e.moveCursor(0,1);break;case 46:console.log("clear"),e.clearSelection();break;case 13:e.moveCursor(0,1);break;case 16:break;case 91:break;case 113:break;default:e.editing||e.editHere();break}}}}),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"grid"},[i("svg",{attrs:{width:"500",height:"400"},on:{mouseup:function(t){e.endSelection()}}},[e._l(e.header,function(t,n){return i("g",{key:n,attrs:{transform:e.translateCol(n)}},[i("rect",{staticClass:"col-header",attrs:{x:"0",y:"0",width:"100",height:e.rowHeight}}),i("text",{attrs:{"text-anchor":"middle",x:"49",y:"12",width:"100",height:e.rowHeight}},[e._v(e._s(t))])])}),i("g",{attrs:{transform:"translate(0,24)"}},[e._l(e.data,function(t,n){return i("g",{key:n,attrs:{transform:e.translateRow(n)}},e._l(t,function(t,s){return i("g",{key:s,attrs:{transform:e.translateCol(s)},on:{mousedown:function(t){e.onMouseDownCell(s,n)},mousemove:function(t){e.setSelectionEnd(s,n)}}},[i("rect",{attrs:{x:"0",y:"0",width:"100",height:e.rowHeight}}),i("text",{attrs:{x:"2",y:"12",width:"100",height:e.rowHeight}},[e._v(e._s(t))])])}))}),i("rect",{staticClass:"selection",attrs:{transform:e.selectionTransform,x:"0",y:"0",width:100*e.selectionSize.w,height:e.selectionSize.h*e.rowHeight}})],2)],2),e.editing?i("div",{staticClass:"editor__frame",style:e.styleObj},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.editingText,expression:"editingText"}],ref:"hiddenInput",staticClass:"editor__textarea",attrs:{autofocus:""},domProps:{value:e.editingText},on:{blur:e.onBlur,input:function(t){t.target.composing||(e.editingText=t.target.value)}}})]):e._e()])},r=[],c=i("XyMi");function l(e){i("rXcX")}var a=!1,h=l,u="data-v-485473e0",d=null,f=Object(c["a"])(s,o,r,a,h,u,d),g=f.exports,m={name:"app",components:{SushiGrid:g}},C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("sushi-grid",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],S=!1,v=null,w=null,x=null,b=Object(c["a"])(m,C,p,S,v,w,x),_=b.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(_)}}).$mount("#app")},rXcX:function(e,t){}},[0]);
//# sourceMappingURL=app.960a3ca3.js.map