(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bdda8d2"],{"0aa8":function(e,t,n){"use strict";var a=n("3634"),u=n.n(a);u.a},3634:function(e,t,n){},bcc1:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.value?n("div",{staticClass:"datetime-updated"},[n("v-icon",{attrs:{name:"today",color:"--input-icon-color"}}),e._v(" "+e._s(e.displayValue)+" ")],1):n("v-input",{attrs:{placeholder:e.$t(e.newItem?"interfaces.datetime-updated.now":"interfaces.datetime-updated.unknown"),"icon-right":"today",readonly:""}})},u=[],c=(n("ac1f"),n("5319"),n("750b")),r=n("e164"),i=n("9923"),o=i.i18n,l=Object(c["b"])({props:{value:{type:String,default:null},newItem:{type:Boolean,required:!0},options:{type:Object,required:!0}},setup:function(e){var t=Object(c["a"])((function(){if(!e.value)return null;var t=new Date(e.value.replace(" ","T")+"Z");return e.options.showRelative?Object(r["a"])(t).value:o.d(t,"long")+" GMT"}));return{displayValue:t}}}),d=l,s=(n("0aa8"),n("2877")),f=Object(s["a"])(d,a,u,!1,null,"061ec1cf",null);t["default"]=f.exports},e164:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("750b"),u=n("1556");function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e4,c={addSuffix:!0},r=Object(a["f"])(Object(u["a"])(e,new Date,c));return 0!==n&&(Object(a["d"])((function(){t=setInterval((function(){r.value=Object(u["a"])(e,new Date,c)}),n)})),Object(a["e"])((function(){clearInterval(t)}))),r}}}]);
//# sourceMappingURL=chunk-6bdda8d2.2b92511b.js.map