(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{319:function(e,t,o){var content=o(326);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(23).default)("832c434a",content,!0,{sourceMap:!1})},321:function(e,t,o){"use strict";o.r(t);var n=o(0).a.extend({name:"BaseWidget",props:["initialWidth","initialHeight"],computed:{}}),l=(o(325),o(57)),c=o(96),d=o.n(c),r=o(457),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-card",{staticClass:"overlay",attrs:{"min-width":e.initialWidth,"min-height":e.initialHeight,elevation:"8",shaped:""}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCard:r.a})},325:function(e,t,o){"use strict";o(319)},326:function(e,t,o){var n=o(22)(!1);n.push([e.i,".overlay{position:absolute;z-index:60}",""]),e.exports=n},337:function(e,t,o){var content=o(362);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(23).default)("b98ca11e",content,!0,{sourceMap:!1})},361:function(e,t,o){"use strict";o(337)},362:function(e,t,o){var n=o(22)(!1);n.push([e.i,"#belief-details{top:25;right:2.5vw}#belief-details div{width:100%}",""]),e.exports=n},367:function(e,t,o){"use strict";o.r(t);o(46);var n=o(0),l=o(321),c=n.a.extend({name:"BeliefDetails",components:{BaseWidget:l.default},data:function(){return{positions:{clientX:void 0,clientY:void 0,movementX:0,movementY:0}}},computed:{hasCopyData:function(){var e=this.$store.state.nodes.copiedNode;return Object.keys(e).length>0},node:function(){return this.$store.state.nodes.selectedNode}},methods:{drag:function(e){e.preventDefault(),this.positions.clientX=e.clientX,this.positions.clientY=e.clientY,document.onmousemove=this.moveCard,document.onmouseup=this.stopDrag,console.log("draaaaag")},moveCard:function(e){e.preventDefault(),this.positions.movementX=this.positions.clientX-e.clientX,this.positions.movementY=this.positions.clientY-e.clientY,this.positions.clientX=e.clientX,this.positions.clientY=e.clientY(this.$refs.addBeliefCard).style.top="".concat(this.$refs.addBeliefCard.offsetTop-this.positions.movementY,"px"),this.$refs.addBeliefCard.style.left="".concat(this.$refs.addBeliefCard.offsetLeft-this.positions.movementX,"px"),console.log("draggin!")},stopDrag:function(e){document.onmouseup=null,document.onmousemove=null},close:function(){this.$store.commit("display/setDisplayBeliefDetails",!1)},copyDetails:function(){this.$store.commit("nodes/copy",this.node),console.log("Node ".concat(this.node.id," copied"))},displayAddBelief:function(){this.$store.commit("display/setDisplayAddBelief",!0)},deleteBelief:function(){this.$store.commit("data/deleteNode",this.node.id)}}}),d=(o(361),o(57)),r=o(96),f=o.n(r),v=o(520),m=o(315),h=o(318),_=o(151),y=o(317),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("base-widget",{ref:"beliefDetailsCard",attrs:{id:"belief-details",initialWidth:300,initialHeight:450},on:{mousedown:e.drag}},[o("v-container",[o("v-row",[o("v-col",{attrs:{md:"4"}},[o("v-btn",{on:{click:function(t){return t.preventDefault(),e.displayAddBelief(t)}}},[e._v("Add Premise")])],1),e._v(" "),o("v-col",{attrs:{md:"4"}},[o("v-btn",{on:{click:function(t){return t.preventDefault(),e.deleteBelief(t)}}},[e._v("Delete Belief")])],1),e._v(" "),o("v-col",{attrs:{md:"2"}},[o("v-icon",{attrs:{large:"",color:"red darken-3"},on:{click:function(t){return t.preventDefault(),e.close(t)}}},[e._v("\n          mdi-close\n        ")])],1)],1),e._v(" "),e.hasCopyData?o("v-row",[o("v-col",{attrs:{md:"4"}},[o("v-btn",{attrs:{disabled:e.hasCopyData},on:{click:function(t){return t.preventDefault(),e.copyDetails(t)}}},[e._v("Copy Details")])],1)],1):e._e(),e._v(" "),o("v-container",[o("v-row",[o("h3",[e._v(e._s(e.node.type))])]),e._v(" "),o("v-row",[o("h4",[e._v(e._s(e.node.name))])]),e._v(" "),""!=e.node.notes?o("v-row",[o("p",[e._v(e._s(e.node.notes))])]):e._e()],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{BaseWidget:o(321).default}),f()(component,{VBtn:v.a,VCol:m.a,VContainer:h.a,VIcon:_.a,VRow:y.a})}}]);