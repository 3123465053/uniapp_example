"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "标题",
      message: {
        uername: "",
        tel: "",
        content: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.message);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: $data.title,
    c: common_vendor.o(($event) => $data.title = $event.detail.value),
    d: $data.message.uername,
    e: common_vendor.o(($event) => $data.message.uername = $event.detail.value),
    f: $data.message.tel,
    g: common_vendor.o(($event) => $data.message.tel = $event.detail.value),
    h: $data.message.content,
    i: common_vendor.o(($event) => $data.message.content = $event.detail.value),
    j: common_vendor.o((...args) => $options.onSubmit && $options.onSubmit(...args)),
    k: common_vendor.t($data.message)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangbang/Desktop/uniapp/example/example/pages/v-model-bind/v-model-bind.vue"]]);
wx.createPage(MiniProgramPage);
