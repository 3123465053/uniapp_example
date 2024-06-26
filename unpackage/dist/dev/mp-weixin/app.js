"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/404/404.js";
  "./pages/list/list.js";
  "./pages/finder/finder.js";
  "./pages/me/me.js";
  "./pages/v-model-bind/v-model-bind.js";
  "./pages/form-demo/form-demo.js";
  "./subpages/news/news.js";
  "./subpages/chat/chat.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  onPageNotFound() {
    common_vendor.index.navigateTo({
      url: "/pages/404/404"
    });
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yangbang/Desktop/uniapp/example/example/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
