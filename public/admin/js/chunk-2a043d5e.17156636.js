(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a043d5e"],{"66b1":function(e,t,n){"use strict";var l=n("70a3"),a=n.n(l);a.a},"70a3":function(e,t,n){},"75f8":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-radio-buttons subgrid"},e._l(e.choices,(function(t,l){return n("v-radio",{key:l,attrs:{id:e.name+"-"+l,name:e.name,value:l,disabled:e.readonly,"model-value":e.value,label:t},on:{change:function(t){return e.$emit("input",t)}}})})),1)},a=[],i=n("8db2"),u=n.n(i),r={name:"InterfaceRadioButtons",mixins:[u.a],computed:{choices:function(){var e=this.options.choices;return e?("string"===typeof this.options.choices&&(e=JSON.parse(this.options.choices)),e):{}}}},o=r,d=(n("66b1"),n("2877")),c=Object(d["a"])(o,l,a,!1,null,"f407d216",null);t["default"]=c.exports},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}}}]);
//# sourceMappingURL=chunk-2a043d5e.17156636.js.map