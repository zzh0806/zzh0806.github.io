webpackJsonp([14],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")(null,o,!1,function(t){e("na8K")},null,null).exports,r=e("/ocq");a.default.use(r.a);var u=new r.a({routes:[{path:"/",redirect:"/memberList"},{path:"/",component:function(t){return e.e(0).then(function(){var n=[e("MpTN")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"自述文件"},children:[{path:"/dashboard",component:function(t){return e.e(8).then(function(){var n=[e("a52u")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"系统首页"}},{path:"/table",component:function(t){return e.e(7).then(function(){var n=[e("8C4o")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"基础表格"}},{path:"/tabs",component:function(t){return e.e(10).then(function(){var n=[e("kgBe")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"tab选项卡"}},{path:"/form",component:function(t){return e.e(12).then(function(){var n=[e("uuQS")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"基本表单"}},{path:"/memberList",component:function(t){return e.e(4).then(function(){var n=[e("By6+")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"会员管理"}},{path:"/memberCreate",component:function(t){return e.e(11).then(function(){var n=[e("lFZ6")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"新增会员"}},{path:"/memberBalanceFlow",component:function(t){return e.e(3).then(function(){var n=[e("Hfal")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"用户余额流水"}},{path:"/teamList",component:function(t){return e.e(9).then(function(){var n=[e("KK6f")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"团队管理"}},{path:"/teamOrderList",component:function(t){return e.e(5).then(function(){var n=[e("zKvE")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"团队管理"}}]},{path:"/login",component:function(t){return e.e(1).then(function(){var n=[e("GF4k")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/404",component:function(t){return e.e(2).then(function(){var n=[e("3bH0")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/403",component:function(t){return e.e(6).then(function(){var n=[e("KfZE")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"*",redirect:"/404"}]}),c=e("mtWM"),l=e.n(c),p=e("zL8q"),h=e.n(p);e("tvR6"),e("j1ja");a.default.use(h.a,{size:"small"}),a.default.prototype.$axios=l.a,u.beforeEach(function(t,n,e){var o=localStorage.getItem("ms_username");o||"/login"===t.path?t.meta.permission?"admin"===o?e():e("/403"):navigator.userAgent.indexOf("MSIE")>-1&&"/editor"===t.path?a.default.prototype.$alert("vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看","浏览器不兼容通知",{confirmButtonText:"确定"}):e():e("/login")}),new a.default({router:u,render:function(t){return t(i)}}).$mount("#app")},na8K:function(t,n){},tvR6:function(t,n){}},["NHnr"]);