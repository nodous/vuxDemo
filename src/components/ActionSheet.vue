<template>
    <div class="action">
        <group>
            <x-switch title="喔屎提示1" v-model="show1" @on-click-mask="ig" ></x-switch>
            <x-switch title="安卓风格 theme决定 值为ios android" v-model="show2"></x-switch>
            <group title="点击遮罩不自动关闭">
                 <x-switch title="123" v-model="show4"></x-switch>
            </group>
            <actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="false" show-cancel @on-click-mask="ig"></actionsheet>
        </group>
         <actionsheet
            v-model="show1"
            :menus="menus1"
            @on-click-menu="click"
            @on-after-hide="log('after hide')"
            @on-after-show="log('after show')"></actionsheet>
             <actionsheet
            v-model="show2"
            :menus="menus7"
             theme="android"
            @on-click-menu="click"
            @on-after-hide="log('after hide')"
            @on-after-show="log('after show')"></actionsheet>
    </div>
</template>
<script>
import { Actionsheet, Group, XSwitch } from "vux";
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show4: false,
      menus7: {
        menu1: "豆腐",
        menu2: "西施",
        menu3: "你妈妈"
      },
      menus1: {
        menus1: "分享给朋友",
        menus2: "分享给朋有圈"
      }
    };
  },
  components: {
    Actionsheet,
    Group,
    XSwitch
  },
  methods: {
    ig() {
      console.log("点击事件");
    },
    log(str) {
      console.log(str);
    },
    click(key) {
      console.log(key);
    }
  }
};
</script>
<style>
</style>
