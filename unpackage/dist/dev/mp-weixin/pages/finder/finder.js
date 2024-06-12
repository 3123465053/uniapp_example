"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      img: "../../static/chat-images/image1.jpg",
      code: "<h1>标题1</h1>",
      title: "\n微信小程序",
      state: true,
      goods: [
        {
          "title": "标题2",
          "price": 23
        },
        {
          "title": "标题7",
          "price": 43
        },
        {
          "title": "标题7",
          "price": 63
        },
        {
          "title": "标7题",
          "price": 73
        }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.title),
    b: $data.state
  }, $data.state ? {} : {}, {
    c: $data.state,
    d: common_vendor.f($data.goods, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.price),
        c: index
      };
    }),
    e: common_vendor.t($data.code),
    f: $data.code,
    g: $data.img,
    h: $data.img,
    i: common_vendor.f([1, 2, 4], (item, index, i0) => {
      return {
        a: "/static/chat-images/image" + item + ".jpg"
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangbang/Desktop/uniapp/example/example/pages/finder/finder.vue"]]);
wx.createPage(MiniProgramPage);
