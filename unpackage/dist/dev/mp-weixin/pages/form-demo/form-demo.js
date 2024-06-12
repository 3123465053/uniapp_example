"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      selectValue: 0,
      options: ["高中", "大专", "本科", "博士"],
      title: ""
    };
  },
  methods: {
    onSubmit(e) {
      console.log(e.detail.value);
    },
    onChange(e) {
      this.selectValue = e.detail.value;
    }
  },
  //计算复杂，需要缓存的写在这里
  computed: {
    changeTitle() {
      return this.title.toLocaleUpperCase();
    }
  }
};
if (!Array) {
  const _easycom_publicBox2 = common_vendor.resolveComponent("publicBox");
  _easycom_publicBox2();
}
const _easycom_publicBox = () => "../../components/publicBox/publicBox.js";
if (!Math) {
  _easycom_publicBox();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.options[$data.selectValue]),
    b: $data.options,
    c: $data.selectValue,
    d: common_vendor.o((...args) => $options.onChange && $options.onChange(...args)),
    e: common_vendor.o((...args) => $options.onSubmit && $options.onSubmit(...args)),
    f: $data.title,
    g: common_vendor.o(($event) => $data.title = $event.detail.value),
    h: common_vendor.t($data.title),
    i: common_vendor.t($options.changeTitle)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangbang/Desktop/uniapp/example/example/pages/form-demo/form-demo.vue"]]);
wx.createPage(MiniProgramPage);
