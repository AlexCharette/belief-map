(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6,9,10,12],{322:function(t,e,n){var content=n(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("832c434a",content,!0,{sourceMap:!1})},323:function(t,e,n){var content=n(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("94a7572e",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({name:"BaseWidget",props:["initialWidth","initialHeight"],computed:{}}),r=(n(328),n(58)),c=n(97),l=n.n(c),d=n(460),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-card",{staticClass:"overlay",attrs:{"min-width":t.initialWidth,"min-height":t.initialHeight,elevation:"8",shaped:""}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a})},325:function(t,e,n){"use strict";var o;n.d(e,"a",(function(){return o})),function(t){t.ScientificEvidence="scientificEvidence",t.Observation="observation",t.PersonalConclusion="personalConclusion",t.PersonalAssumption="personalAssumption",t.ReligiousThinking="religiousThinking",t.StatedByAuthority="statedByAuthority",t.UnableToDisprove="unableToDisprove"}(o||(o={}))},327:function(t,e,n){"use strict";n.r(e);n(78);var o=n(0).a.extend({name:"DonutChart",props:["node","segments","circleData"],data:function(){return{numSegments:this.segments.length,strokeWidth:15}},computed:{svgSize:function(){return 2*this.circleData.x},arcSize:function(){return 360/this.segments.length},arcPoints:function(){for(var t=[],i=0;i<this.segments.length;i++){var e=i*this.arcSize;t.push([e,e+this.arcSize])}return t}},methods:{onClick:function(t){this.$store.commit("nodes/set",this.node),this.$store.commit("display/setDisplayBeliefDetails",!0)},getHexColour:function(t){switch(t){case"light-green darken-1":return"#7CB342";case"green darken-1":return"#43A047";case"light-blue darken-1":return"#039BE5";case"blue darken-1":return"#1E88E5";case"indigo darken-1":return"#3949AB";case"deep-purple darken-1":return"#5E35B1";case"amber darken-1":return"#FFB300";case"orange darken-1":return"##FB8C00";case"red darken-1":return"#E53935";case"light-green darken-3":return"#558B2F";case"green darken-3":return"#2E7D32";case"blue darken-3":return"#2979FF";case"indigo darken-3":return"#283593";case"deep-purple darken-3":return"#4527A0";case"amber darken-3":return"#FF8F00";case"orange darken-3":return"#EF6C00";case"red darken-3":return"#C62828";default:return"#FFFFFF"}},describeArc:function(t,e,n,o,r){var c=this.polarToCartesian(t,e,n,r),l=this.polarToCartesian(t,e,n,o),d=r-o<=180?"0":"1";return["M",c.x,c.y,"A",n,n,0,d,0,l.x,l.y].join(" ")},polarToCartesian:function(t,e,n,o){var r=(o-90)*Math.PI/180;return{x:t+n*Math.cos(r),y:e+n*Math.sin(r)}}}}),r=(n(332),n(58)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.numSegments>1?n("svg",{on:{click:t.onClick}},[n("defs",[n("filter",{attrs:{id:t.node.id+"-path-shadow",x:"0",y:"0",width:"200%",height:"200%"}},[n("feOffset",{attrs:{result:"offOut",in:"SourceGraphic",dx:"10",dy:"10"}}),t._v(" "),n("feColorMatrix",{attrs:{result:"matrixOut",in:"offOut",type:"matrix",values:"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"}}),t._v(" "),n("feGaussianBlur",{attrs:{result:"blurOut",in:"matrixOut",stdDeviation:"10"}}),t._v(" "),n("feBlend",{attrs:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}})],1)]),t._v(" "),n("circle",{staticClass:"clickable",attrs:{fill:"white",cx:t.circleData.x,cy:t.circleData.y,r:t.circleData.radius,stroke:t.getHexColour(this.segments[0].colour),"stroke-width":1,filter:"url(#"+t.node.id+"-path-shadow)"}}),t._v(" "),t._l(t.segments,(function(e,o){return n("path",{key:o,attrs:{fill:"white",stroke:t.getHexColour(e.colour),"stroke-width":t.strokeWidth+3*e.count,d:t.describeArc(t.circleData.x,t.circleData.y,t.circleData.radius,t.arcPoints[o][0],t.arcPoints[o][1])}})}))],2):n("svg",{on:{click:t.onClick}},[n("defs",[n("filter",{attrs:{id:t.node.id+"-shadow",x:"-35%",y:"-35%",width:"200%",height:"200%"}},[n("feOffset",{attrs:{result:"offOut",in:"SourceGraphic",dx:"5",dy:"7"}}),t._v(" "),n("feColorMatrix",{attrs:{result:"matrixOut",in:"offOut",type:"matrix",values:"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.5 0"}}),t._v(" "),n("feGaussianBlur",{attrs:{result:"blurOut",in:"matrixOut",stdDeviation:"10"}}),t._v(" "),n("feBlend",{attrs:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}})],1)]),t._v(" "),n("circle",{staticClass:"clickable",attrs:{fill:"white",cx:t.circleData.x,cy:t.circleData.y,r:t.circleData.radius,stroke:t.getHexColour(this.segments[0].colour),"stroke-width":t.strokeWidth,filter:"url(#"+t.node.id+"-shadow)"}})])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,n){"use strict";n(322)},329:function(t,e,n){var o=n(22)(!1);o.push([t.i,".overlay{position:absolute;z-index:60}",""]),t.exports=o},332:function(t,e,n){"use strict";n(323)},333:function(t,e,n){var o=n(22)(!1);o.push([t.i,".clickable:hover{cursor:pointer}",""]),t.exports=o},336:function(t,e,n){"use strict";n.r(e);n(35),n(228),n(47),n(59);var o=n(0),r=n(325),c=n(327),l=o.a.extend({name:"BeliefNode",components:{DonutChart:c.default},props:["index","node","children","distance","bezierData","shapeData"],data:function(){return{id:this.node.id,name:this.node.name,notes:this.node.notes,references:this.node.references,type:this.node.type,hasChildren:!0,numTypes:0,segmentData:[],isInflated:!1}},computed:{circleData:function(){return{x:this.shapeData.x,y:this.shapeData.y,radius:this.isInflated?this.shapeData.size/2:this.shapeData.size/3}},segments:function(){var t=this,e=[];if(this.hasChildren){var n=this.childrenTypeCount;Object.entries(n).forEach((function(n){if(n[1]>0){var o={type:n[0],count:n[1],colour:t.getTypeColour(n[0])};e.push(o)}}))}else{var o={type:this.type,count:1,colour:t.getTypeColour(this.type)};e.push(o)}return e},childrenTypeCount:function(){if(!this.hasChildren)return 0;var t={scientificEvidence:0,observation:0,personalConclusion:0,personalAssumption:0,religiousThinking:0,statedByAuthority:0,unableToDisprove:0};return this.children.forEach((function(e){var n=e.data.type;t[n]++})),t}},methods:{onClick:function(t){this.$store.commit("nodes/set",this.node),this.$store.state.displayBeliefDetails||this.$store.commit("display/toggleDisplayBeliefDetails")},getTypeColour:function(t){switch(t){case r.a.ScientificEvidence:return"light-green darken-1";case r.a.Observation:return"light-blue darken-1";case r.a.PersonalConclusion:return"indigo darken-1";case r.a.PersonalAssumption:return"deep-purple darken-1";case r.a.ReligiousThinking:return"amber darken-1";case r.a.StatedByAuthority:return"orange darken-1";case r.a.UnableToDisprove:return"red darken-1";default:return"white"}}},created:function(){void 0===this.children&&(this.hasChildren=!1)},mounted:function(){this.numTypes=Object.keys(this.childrenTypeCount).length}}),d=n(58),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{mouseenter:function(e){t.isInflated=!0},mouseleave:function(e){t.isInflated=!1}}},[n("donut-chart",{attrs:{node:t.node,segments:t.segments,circleData:t.circleData}})],1)}),[],!1,null,"8c21a018",null);e.default=component.exports;installComponents(component,{DonutChart:n(327).default})},339:function(t,e,n){var content=n(362);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("b7ac8fde",content,!0,{sourceMap:!1})},340:function(t,e,n){var content=n(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("b98ca11e",content,!0,{sourceMap:!1})},341:function(t,e,n){var content=n(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("457bffea",content,!0,{sourceMap:!1})},361:function(t,e,n){"use strict";n(339)},362:function(t,e,n){var o=n(22)(!1);o.push([t.i,"",""]),t.exports=o},364:function(t,e,n){"use strict";n(340)},365:function(t,e,n){var o=n(22)(!1);o.push([t.i,"#belief-details{top:25;right:2.5vw}#belief-details div{width:100%}",""]),t.exports=o},366:function(t,e,n){"use strict";n(341)},367:function(t,e,n){var o=n(22)(!1);o.push([t.i,"#tree-container,#tree-container #belief-map{position:relative}#tree-container #belief-map .link{stroke-width:2px!important;fill:transparent!important;stroke:#757575!important}#tree-container #node-container{z-index:1}#tree-container #belief-map,#tree-container #node-container,#tree-container svg{width:100%;height:100%;position:absolute;left:0;top:0;overflow:visible;transform-origin:0 50%}#tree-container .node{position:absolute;box-sizing:border-box;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center;box-sizing:content-box;transition:all .8s;transition-timing-function:ease-in-out}",""]),t.exports=o},368:function(t,e,n){"use strict";n.r(e);n(51),n(35),n(47);var o=n(0),r=n(510),c=n(324),l=n(325),d=o.a.extend({name:"AddBelief",components:{BaseWidget:c.default},props:["parentName"],data:function(){return{positions:{clientX:void 0,clientY:void 0,movementX:0,movementY:0},formData:{name:"",notes:"",references:[],type:""},nameRules:[function(t){return!!t||"You must enter a name"}],typeRules:[function(t){return!!t||"You must choose a type"}],valid:!0}},computed:{beliefTypes:function(){return Object.keys(l.a)},hasCopyData:function(){var t=this.$store.state.nodes.copiedNode;return Object.keys(t).length>0},node:function(){var t,e,n,o=(t=l.a,e=this.formData.type,(n=Object.keys(t).filter((function(n){return t[n]==e}))).length>0?n[0]:null);return{id:r.a(),name:this.formData.name,notes:this.formData.notes,references:this.formData.references,type:o,isRoot:!1}}},methods:{drag:function(t){t.preventDefault(),this.positions.clientX=t.clientX,this.positions.clientY=t.clientY,document.onmousemove=this.moveCard,document.onmouseup=this.stopDrag,console.log("draaaaag")},moveCard:function(t){t.preventDefault(),this.positions.movementX=this.positions.clientX-t.clientX,this.positions.movementY=this.positions.clientY-t.clientY,this.positions.clientX=t.clientX,this.positions.clientY=t.clientY(this.$refs.addBeliefCard).style.top="".concat(this.$refs.addBeliefCard.offsetTop-this.positions.movementY,"px"),this.$refs.addBeliefCard.style.left="".concat(this.$refs.addBeliefCard.offsetLeft-this.positions.movementX,"px"),console.log("dragging!")},stopDrag:function(t){document.onmouseup=null,document.onmousemove=null},close:function(){this.$store.commit("display/setDisplayAddBelief",!1)},pasteDetails:function(){var details=this.$store.state.nodes.copiedNode;this.formData={name:details.name,notes:details.notes,references:details.references,type:details.type}},submit:function(){var t=this.$store.state.nodes.selectedNode;this.$store.commit("data/addNode",[this.node,t.id]),this.$nuxt.$emit("tree-edited")}}}),f=(n(361),n(58)),h=n(97),v=n.n(h),m=n(523),y=n(521),x=n(318),k=n(321),_=n(516),D=n(152),w=n(320),C=n(519),B=n(127),T=n(517),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-widget",{ref:"addBeliefCard",attrs:{id:"add-belief",initialWidth:600,initialHeight:450},on:{mousedown:t.drag}},[n("v-container",{staticClass:"pa-3"},[n("v-row",[n("v-col",{attrs:{md:"8"}},[n("v-btn",{attrs:{disabled:t.hasCopyData},on:{click:function(e){return e.preventDefault(),t.pasteDetails(e)}}},[t._v("\n        Paste details\n      ")])],1),t._v(" "),n("v-col",{attrs:{md:"3"}}),t._v(" "),n("v-col",{attrs:{md:"1"}},[n("v-icon",{attrs:{large:"",color:"red darken-3"},on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v("\n        mdi-close\n      ")])],1)],1),t._v(" "),n("v-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Name",placeholder:"Enter a short name for this belief",rules:t.nameRules,required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),n("v-col",[n("v-select",{attrs:{items:t.beliefTypes,label:"Type",placeholder:t.beliefTypes[2],rules:t.typeRules,required:""},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}})],1)],1),t._v(" "),n("v-row",[n("v-textarea",{attrs:{label:"Notes",solo:""},model:{value:t.formData.notes,callback:function(e){t.$set(t.formData,"notes",e)},expression:"formData.notes"}})],1),t._v(" "),n("v-row",[n("v-chip-group",{attrs:{label:"References"},model:{value:t.formData.references,callback:function(e){t.$set(t.formData,"references",e)},expression:"formData.references"}})],1)],1),t._v(" "),n("v-btn",{attrs:{type:"submit",disabled:!t.valid}},[t._v("Submit")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{BaseWidget:n(324).default}),v()(component,{VBtn:m.a,VChipGroup:y.a,VCol:x.a,VContainer:k.a,VForm:_.a,VIcon:D.a,VRow:w.a,VSelect:C.a,VTextField:B.a,VTextarea:T.a})},369:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({name:"AppBar"}),r=n(58),c=n(97),l=n.n(c),d=n(522),f=n(518),h=n(379),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",fixed:""}},[n("v-toolbar-title",[t._v("Your Belief Map")]),t._v(" "),n("v-spacer"),t._v(" "),t._t("file-input"),t._v(" "),n("v-spacer"),t._v(" "),t._t("save-btn",null,{align:"center"}),t._v(" "),n("v-spacer"),t._v(" "),t._t("export-btn",null,{align:"center"})],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:d.a,VSpacer:f.a,VToolbarTitle:h.a})},370:function(t,e,n){"use strict";n.r(e);n(47);var o=n(0),r=n(324),c=o.a.extend({name:"BeliefDetails",components:{BaseWidget:r.default},data:function(){return{positions:{clientX:void 0,clientY:void 0,movementX:0,movementY:0}}},computed:{hasCopyData:function(){var t=this.$store.state.nodes.copiedNode;return Object.keys(t).length>0},node:function(){return this.$store.state.nodes.selectedNode}},methods:{drag:function(t){t.preventDefault(),this.positions.clientX=t.clientX,this.positions.clientY=t.clientY,document.onmousemove=this.moveCard,document.onmouseup=this.stopDrag,console.log("draaaaag")},moveCard:function(t){t.preventDefault(),this.positions.movementX=this.positions.clientX-t.clientX,this.positions.movementY=this.positions.clientY-t.clientY,this.positions.clientX=t.clientX,this.positions.clientY=t.clientY(this.$refs.addBeliefCard).style.top="".concat(this.$refs.addBeliefCard.offsetTop-this.positions.movementY,"px"),this.$refs.addBeliefCard.style.left="".concat(this.$refs.addBeliefCard.offsetLeft-this.positions.movementX,"px"),console.log("draggin!")},stopDrag:function(t){document.onmouseup=null,document.onmousemove=null},close:function(){this.$store.commit("display/setDisplayBeliefDetails",!1)},copyDetails:function(){this.$store.commit("nodes/copy",this.node),console.log("Node ".concat(this.node.id," copied"))},displayAddBelief:function(){this.$store.commit("display/setDisplayAddBelief",!0)},deleteBelief:function(){this.$store.commit("data/deleteNode",this.node.id)}}}),l=(n(364),n(58)),d=n(97),f=n.n(d),h=n(523),v=n(318),m=n(321),y=n(152),x=n(320),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-widget",{ref:"beliefDetailsCard",attrs:{id:"belief-details",initialWidth:300,initialHeight:450},on:{mousedown:t.drag}},[n("v-container",[n("v-row",[n("v-col",{attrs:{md:"4"}},[n("v-btn",{on:{click:function(e){return e.preventDefault(),t.displayAddBelief(e)}}},[t._v("Add Premise")])],1),t._v(" "),n("v-col",{attrs:{md:"4"}},[n("v-btn",{on:{click:function(e){return e.preventDefault(),t.deleteBelief(e)}}},[t._v("Delete Belief")])],1),t._v(" "),n("v-col",{attrs:{md:"2"}},[n("v-icon",{attrs:{large:"",color:"red darken-3"},on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v("\n          mdi-close\n        ")])],1)],1),t._v(" "),t.hasCopyData?n("v-row",[n("v-col",{attrs:{md:"4"}},[n("v-btn",{attrs:{disabled:t.hasCopyData},on:{click:function(e){return e.preventDefault(),t.copyDetails(e)}}},[t._v("Copy Details")])],1)],1):t._e(),t._v(" "),n("v-container",[n("v-row",[n("h3",[t._v(t._s(t.node.type))])]),t._v(" "),n("v-row",[n("h4",[t._v(t._s(t.node.name))])]),t._v(" "),""!=t.node.notes?n("v-row",[n("p",[t._v(t._s(t.node.notes))])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{BaseWidget:n(324).default}),f()(component,{VBtn:h.a,VCol:v.a,VContainer:m.a,VIcon:y.a,VRow:x.a})},380:function(t,e,n){var content=n(503);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("28f1127f",content,!0,{sourceMap:!1})},382:function(t,e,n){"use strict";n.r(e);n(15),n(51),n(159);var o=n(9),r=n(99),c=n(0),l=n(510),d=n(381),f=n(336),h=n(325),v=c.a.extend({name:"D3Tree",components:{BeliefNode:f.default},props:["dataSet"],data:function(){return{nodeWidth:75,nodeHeight:75,heightLevel:225,links:[],nodes:[],currentNode:null,duration:250,index:0,newNode:null,root:null,svg:null,initTransformData:{x:0,y:0}}},computed:{initialTransformStyle:function(){return{transform:"scale(1) translate(".concat(this.initTransformData.x,"px, ").concat(this.initTransformData.y,"px)"),transformOrigin:"center"}}},methods:{nodeStyle:function(t){return t.data.isRoot?{left:this.formatDimension(t.x+this.nodeWidth/2),top:this.formatDimension(t.y+this.nodeHeight/2),width:this.formatDimension(this.nodeWidth),height:this.formatDimension(this.nodeHeight)}:{left:this.formatDimension(this.nodeWidth/2),top:this.formatDimension(this.nodeHeight/2),width:this.formatDimension(this.nodeWidth),height:this.formatDimension(this.nodeHeight)}},addNode:function(){var t=l.a(),e=this.currentNode,n={id:t,name:"Some name",notes:"",type:h.a.ScientificEvidence,references:[],isRoot:!1,children:[]};e.children?e.children.push(n):e.children=[n],this.nodes.push(n),this.links.push({source:e,target:n}),this.update(e)},deleteNode:function(){var t=this;this.currentNode.parent&&this.currentNode.parent.children.length>0&&this.currentNode.parent.children.filter((function(e,n){e.id&&e.id==t.currentNode.id&&(t.currentNode.parent.children.splice(n,1),0===t.currentNode.parent.children.length&&delete t.currentNode.parent.children,t.update(t.currentNode))}))},formatDimension:function(t){return"number"==typeof t?"".concat(t,"px"):-1!==t.indexOf("px")?t:"".concat(t,"px")},addUniqueKey:function(t){for(var e=[t];0!==e.length;){var n=e.pop();if(void 0===n)return void console.log("Node is undefined");n.id=l.a(),n.children&&e.push.apply(e,Object(r.a)(n.children))}return t},initTransform:function(){var t=this.$refs.container.offsetWidth;this.$refs.container.offsetHeight;this.initTransformData.x=Math.floor(t/2),this.initTransformData.y=Math.floor(75)},buildTree:function(t){var e=d.e().nodeSize([150,225])(d.b(t));return[e.descendants(),e.links()]},update:function(source){var t=this,e=this.buildTree(source),n=Object(o.a)(e,2),r=n[0],c=n[1];this.links=c,this.svg=d.d("#belief-map");var l=this.svg.selectAll(".link").data(c,(function(t){return"".concat(t.source.data.id,"-").concat(t.target.data.id)}));l.enter().append("path").style("opacity",0).transition().duration(this.duration).ease(d.a).style("opacity",1).attr("class","link").attr("d",(function(e){return t.diagonal(e)})),l.transition().duration(t.duration).ease(d.a).attr("d",(function(e){return t.diagonal(e)})),l.exit().transition().duration(t.duration).ease(d.a).style("opacity",0).remove(),this.nodes=r},diagonal:function(t){var e=d.c();return e.x((function(t){return t.x})).y((function(t){return t.y})).source((function(t){return t.source})).target((function(t){return t.target})),e(t)},onClick:function(t){this.currentNode=t,t.children?(t._children=t.children,t.children=null):(t.children=t._children,t._children=null),this.update(t)}},watch:{dataSet:function(t,e){this.root=this.dataSet,this.update(this.root),this.initTransform()}},created:function(){var t=this;this.$nuxt.$on("tree-edited",(function(){t.update(t.dataSet)}))},mounted:function(){this.index=0,this.duration=250,this.root=this.dataSet,this.update(this.root),this.initTransform()}}),m=(n(366),n(58)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",attrs:{id:"tree-container"}},[n("svg",{style:t.initialTransformStyle,attrs:{id:"belief-map"}}),t._v(" "),n("div",{style:t.initialTransformStyle,attrs:{id:"node-container"}},t._l(t.nodes,(function(e,o){return n("belief-node",{key:e.id,staticClass:"node",style:t.nodeStyle(e),attrs:{index:o,node:e.data,children:e.children,shapeData:{x:e.x,y:e.y,size:t.nodeWidth}}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BeliefNode:n(336).default})},459:function(t,e,n){var o,r,c;r=[],void 0===(c="function"==typeof(o=function(){return function t(data,e,n){var o,r,c=window,l="application/octet-stream",d=n||l,f=data,h=!e&&!n&&f,v=document.createElement("a"),m=function(a){return String(a)},y=c.Blob||c.MozBlob||c.WebKitBlob||m,x=e||"download";if(y=y.call?y.bind(c):Blob,"true"===String(this)&&(d=(f=[f,d])[0],f=f[1]),h&&h.length<2048&&(x=h.split("/").pop().split("?")[0],v.href=h,-1!==v.href.indexOf(h))){var k=new XMLHttpRequest;return k.open("GET",h,!0),k.responseType="blob",k.onload=function(e){t(e.target.response,x,l)},setTimeout((function(){k.send()}),0),k}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(f)){if(!(f.length>2096103.424&&y!==m))return navigator.msSaveBlob?navigator.msSaveBlob(w(f),x):C(f);d=(f=w(f)).type||l}else if(/([\x80-\xff])/.test(f)){for(var i=0,_=new Uint8Array(f.length),D=_.length;i<D;++i)_[i]=f.charCodeAt(i);f=new y([_],{type:d})}function w(t){for(var e=t.split(/[:;,]/),n=e[1],o=("base64"==e[2]?atob:decodeURIComponent)(e.pop()),r=o.length,i=0,c=new Uint8Array(r);i<r;++i)c[i]=o.charCodeAt(i);return new y([c],{type:n})}function C(t,e){if("download"in v)return v.href=t,v.setAttribute("download",x),v.className="download-js-link",v.innerHTML="downloading...",v.style.display="none",document.body.appendChild(v),setTimeout((function(){v.click(),document.body.removeChild(v),!0===e&&setTimeout((function(){c.URL.revokeObjectURL(v.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,l)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=document.createElement("iframe");document.body.appendChild(n),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,l)),n.src=t,setTimeout((function(){document.body.removeChild(n)}),333)}if(o=f instanceof y?f:new y([f],{type:d}),navigator.msSaveBlob)return navigator.msSaveBlob(o,x);if(c.URL)C(c.URL.createObjectURL(o),!0);else{if("string"==typeof o||o.constructor===m)try{return C("data:"+d+";base64,"+c.btoa(o))}catch(t){return C("data:"+d+","+encodeURIComponent(o))}(r=new FileReader).onload=function(t){C(this.result)},r.readAsDataURL(o)}return!0}})?o.apply(e,r):o)||(t.exports=c)},502:function(t,e,n){"use strict";n(380)},503:function(t,e,n){var o=n(22)(!1);o.push([t.i,".scrollX{overflow-x:scroll}",""]),t.exports=o},504:function(t,e,n){var content=n(505);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("424d9537",content,!0,{sourceMap:!1})},505:function(t,e,n){var o=n(22)(!1);o.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),t.exports=o},506:function(t,e,n){var content=n(507);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("3f95a174",content,!0,{sourceMap:!1})},507:function(t,e,n){var o=n(22)(!1);o.push([t.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),t.exports=o},508:function(t,e,n){var content=n(509);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("63c9496b",content,!0,{sourceMap:!1})},509:function(t,e,n){var o=n(22)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},520:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(459),c=n.n(r),l=n(368),d=n(369),f=n(370),h=n(382),v=n(178),m=o.a.extend({components:{AddBelief:l.default,AppBar:d.default,BeliefDetails:f.default,D3Tree:h.default,FileInput:v.default},data:function(){return{size:200,showSnackbar:!1,snackbarMessage:"",snackbarTimeout:1500}},computed:{beliefData:function(){return this.$store.state.data.tree},displayBeliefDetails:function(){return this.$store.state.display.displayBeliefDetails},displayAddBelief:function(){return this.$store.state.display.displayAddBelief},selectedNode:function(){return this.$store.state.nodes.selectedNode}},methods:{saveTree:function(){this.$store.dispatch("data/save"),this.snackbarMessage="Your tree was successfully saved!",this.showSnackbar=!0},exportTree:function(){var t=this.$store.state.data.filename,e=""==t?"beliefMap.json":t;c()(JSON.stringify(this.beliefData),e,"application/json")}},created:function(){if(localStorage.getItem("treeData")&&"undefined"!=localStorage.getItem("treeData")){var t=localStorage.getItem("treeData"),e=JSON.parse(t);this.$store.commit("data/set",[e,""]),console.log("Tree data retrieved from local storage")}}}),y=(n(502),n(58)),x=n(97),k=n.n(x),_=n(317),D=n(523),w=n(321),C=(n(504),n(378).a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,n=t.top,o=t.right,footer=t.footer,r=t.insetFooter,c=t.bottom,l=t.left;return{paddingTop:"".concat(n+e,"px"),paddingRight:"".concat(o,"px"),paddingBottom:"".concat(footer+r+c,"px"),paddingLeft:"".concat(l,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})),B=(n(38),n(1)),T=(n(506),n(40)),O=n(19),S=n(158),$=n(14);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var A=Object($.a)(T.a,O.a,S.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(B.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),N=(n(39),n(50),n(508),n(326)),E=n(160),z=n(2),M=n(6),V=Object($.a)(N.a,T.a,S.a,Object(E.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:O.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(z.d)(n+footer+o),paddingLeft:this.app?Object(z.d)(r):void 0,paddingRight:this.app?Object(z.d)(c):void 0,paddingTop:Object(z.d)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(M.e)("auto-height",this),0==this.timeout&&Object(M.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(z.l)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(B.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(z.l)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:N.a.options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"scrollX"},[n("app-bar",{scopedSlots:t._u([{key:"file-input",fn:function(){return[n("file-input")]},proxy:!0},{key:"save-btn",fn:function(){return[n("v-btn",{on:{click:function(e){return e.preventDefault(),t.saveTree(e)}}},[t._v("Save")])]},proxy:!0},{key:"export-btn",fn:function(){return[n("v-btn",{on:{click:function(e){return e.preventDefault(),t.exportTree(e)}}},[t._v("Export")])]},proxy:!0}])}),t._v(" "),n("v-main",[n("v-container",[t.displayBeliefDetails?n("belief-details",{attrs:{node:t.selectedNode}}):t._e(),t._v(" "),n("v-overlay",{attrs:{absolute:!0,value:t.displayAddBelief}},[n("add-belief",{style:{left:"50%",transform:"translate(-50%, -50%)"}})],1),t._v(" "),n("d-3-tree",{staticStyle:{width:"800px",height:"600px"},attrs:{dataSet:t.beliefData}}),t._v(" "),n("v-snackbar",{attrs:{timeout:t.snackbarTimeout},model:{value:t.showSnackbar,callback:function(e){t.showSnackbar=e},expression:"showSnackbar"}},[t._v("\n          "+t._s(t.snackbarMessage)+"\n          ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{FileInput:n(178).default,AppBar:n(369).default,BeliefDetails:n(370).default,AddBelief:n(368).default}),k()(component,{VApp:_.a,VBtn:D.a,VContainer:w.a,VMain:C,VOverlay:A,VSnackbar:V})}}]);