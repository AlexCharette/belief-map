(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(t,e,n){"use strict";n.r(e);n(35);var r=n(0).a.extend({name:"FileInput",data:function(){return{fileReader:{},file:{},jsonData:{}}},methods:{processFile:function(t){if(void 0!==t){this.file=t,this.fileReader=new FileReader;var e=this;console.log(),this.fileReader.onload=function(n){try{e.jsonData=JSON.parse(n.target.result),e.$store.commit("data/set",[e.jsonData,t.name]),console.log("Data sent to Vuex store")}catch(t){alert("Your file does not appear to contain a valid JSON object")}},this.fileReader.readAsText(this.file)}else console.log("Error processing uploaded file")}}}),o=n(58),c=n(97),l=n.n(c),d=n(318),f=n(321),h=n(319),m=n(320),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{align:"center"}},[n("v-row",[n("v-col",{attrs:{md:"4"}},[n("v-file-input",{attrs:{placeholder:"Your existing belief map",accept:".json"},on:{change:t.processFile}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:f.a,VFileInput:h.a,VRow:m.a})},210:function(t,e,n){var content=n(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("37b4a59a",content,!0,{sourceMap:!1})},225:function(t,e,n){"use strict";var r={components:{FileInput:n(178).default},data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Why do you see the world in the way you do?"}}},o=n(58),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("nuxt")}),[],!1,null,null,null);e.a=component.exports},235:function(t,e,n){n(236),t.exports=n(237)},260:function(t,e,n){"use strict";n(210)},261:function(t,e,n){var r=n(22)(!1);r.push([t.i,"h1[data-v-15f1d07f]{font-size:20px}",""]),t.exports=r},308:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{counter:0}},o={increment:function(t){t.counter++}}},309:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c}));var r=function(){return{filename:"",tree:{}}},o={addNode:function(t,e){e[1]===t.tree.id?t.tree.children.push(e[0]):function t(n){n.some((function(n){n.id===e[1]?n.children.push(e[0]):t(n.children)}))}(t.tree.children)},deleteNode:function(t,e){},set:function(t,e){t.tree=e[0],t.filename=e[1]}},c={save:function(t){console.log(JSON.stringify(t.state.tree)),localStorage.treeData=JSON.stringify(t.state.tree)}}},310:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{displayAddBelief:!1,displayBeliefDetails:!1}},o={setDisplayAddBelief:function(t,e){t.displayAddBelief=e},setDisplayBeliefDetails:function(t,e){t.displayBeliefDetails=e}}},311:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{selectedNode:{},copiedNode:{}}},o={set:function(t,e){t.selectedNode=e},copy:function(t,e){t.copiedNode=e}}},66:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(260),n(58)),c=n(97),l=n.n(c),d=n(317),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"15f1d07f",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[235,14,5,15]]]);