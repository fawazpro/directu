(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d56cd5f0"],{"4dff":function(e,t,n){},"6c8a":function(e,t,n){"use strict";var l=n("4dff"),u=n.n(l);u.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},c5b4:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-contextual-menu",{attrs:{trigger:"hover",text:e.itemCount,options:e.menuOptions,icon:null,placement:"right-end"}})},u=[],i=n("8db2"),a=n.n(i),r=n("2ef0"),o={name:"ReadonlyOneToMany",mixins:[a.a],computed:{itemCount:function(){return this.$tc("item_count",(this.value||[]).length,{count:(this.value||[]).length})},menuOptions:function(){var e=this,t=[];return Object(r["forEach"])(this.value,(function(n){t.push({text:e.$helpers.micromustache.render(e.options.template,n)})})),t}}},c=o,f=(n("6c8a"),n("2877")),p=Object(f["a"])(c,l,u,!1,null,"4f6255a2",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-d56cd5f0.c7f27e9b.js.map