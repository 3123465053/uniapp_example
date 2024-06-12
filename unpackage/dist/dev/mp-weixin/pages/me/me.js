"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 此处定义变量
      state: false,
      bgcolor: "#c00",
      title: "点击事件",
      navArr: [
        { id: 1, title: "首页" },
        { id: 2, title: "咨询" },
        { id: 3, title: "详情" },
        { id: 4, title: "其他" }
      ],
      navIndex: 0
    };
  },
  //此处定义函数
  methods: {
    onClick() {
      this.title = "点击后的数据源";
    },
    clickBg() {
      let color = "#" + String(Math.random()).substring(3, 6);
      this.bgcolor = color;
    },
    clickBlock() {
      this.state = !this.state;
    },
    navClick(index) {
      this.navIndex = index;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.o((...args) => $options.onClick && $options.onClick(...args)),
    c: common_vendor.t($data.title),
    d: common_vendor.o((...args) => $options.onClick && $options.onClick(...args)),
    e: $data.bgcolor,
    f: common_vendor.o((...args) => $options.clickBg && $options.clickBg(...args)),
    g: $data.state ? 1 : "",
    h: common_vendor.o((...args) => $options.clickBlock && $options.clickBlock(...args)),
    i: common_vendor.f($data.navArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.n($data.navIndex == index ? "active" : ""),
        c: item.id,
        d: common_vendor.o(($event) => $options.navClick(index), item.id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangbang/Desktop/uniapp/example/example/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
