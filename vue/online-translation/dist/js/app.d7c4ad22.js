(function(t){function e(e){for(var a,u,l=e[0],s=e[1],i=e[2],p=0,f=[];p<l.length;p++)u=l[p],r[u]&&f.push(r[u][0]),r[u]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o=[];function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},1:function(t,e){},"1e60":function(t,e,n){},"3ce7":function(t,e,n){"use strict";var a=n("1e60"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=n("28dd"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("在线翻译")]),n("h5",{staticClass:"text-muted"},[t._v("简单 / 易用 / 便捷")]),n("translateForm",{on:{formSubmit:t.translateText}}),n("translateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"translateForm"}},[n("form",{on:{submit:t.formSubmit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"输入需要翻译的内容"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.language=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"en"}},[t._v("English")]),n("option",{attrs:{value:"ru"}},[t._v("Russian")]),n("option",{attrs:{value:"ko"}},[t._v("Korean")]),n("option",{attrs:{value:"ja"}},[t._v("Janpenese")])]),n("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"翻译"}})])])},s=[],i={name:"translateForm",data:function(){return{textToTranslate:"",language:""}},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}},created:function(){this.language="en"}},c=i,p=(n("57b0"),n("2877")),f=Object(p["a"])(c,l,s,!1,null,null,null),d=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"translateOutput"}},[n("h2",[t._v(t._s(t.translatedText))])])},m=[],h={name:"translateOutput",props:["translatedText"]},b=h,g=(n("3ce7"),Object(p["a"])(b,v,m,!1,null,null,null)),x=g.exports,T={name:"app",data:function(){return{translatedText:""}},components:{TranslateForm:d,TranslateOutput:x},methods:{translateText:function(t,e){var n=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190311T145757Z.85016d4d972d31a9.986fa7b934240ac25ee8706001f02ee7194acaf8&lang="+e+"&text="+t).then(function(t){n.translatedText=t.body.text[0]})}}},y=T,_=(n("034f"),Object(p["a"])(y,o,u,!1,null,null,null)),O=_.exports;a["a"].use(r["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(O)}}).$mount("#app")},"57b0":function(t,e,n){"use strict";var a=n("a1c0"),r=n.n(a);r.a},"64a9":function(t,e,n){},a1c0:function(t,e,n){}});
//# sourceMappingURL=app.d7c4ad22.js.map