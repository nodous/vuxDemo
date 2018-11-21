<template>
    <div class="alet">
        <button @click="tishi">确认</button>
        <group>
            <x-switch title="提示" v-model="show"></x-switch>
        </group>
        <div v-transfer-dom>
            <alert v-model="show" title="恭喜"  content="消息发送成功" @on-show="onshow" @on-hide="onhide"></alert>
        </div>
        <group title="以插件形式调用">
            <cell title="显示" @click.native="showPlugin" is-link> </cell>
            <cell title="3秒后module关闭" @click.native="showPluginAuto" is-link></cell>
        </group>
    </div>
</template>
<script>
import Vue from "vue";
import {
  AlertModule,
  AlertPlugin,
  Alert,
  Group,
  XSwitch,
  Cell,
  TransferDomDirective as TransferDom
} from "vux";
Vue.use(AlertPlugin);
export default {
  components: {
    Alert,
    XSwitch,
    Cell,
    Group
  },
  directives: {
    TransferDom
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    tishi() {
      this.show = !this.show;
    },
    onshow() {
      console.log("我出啦");
    },
    onhide() {
      console.log("我消失啦");
    },
    showModule() {
      AlertModule.show({
        title: "提示",
        content: "我在三秒后关闭",
        onShow() {
          console.log("Module: I'm showing");
        },
        onHide() {
          console.log("Module: I'm hiding now");
        }
      });
    },
    showPluginAuto() {
      this.showModule();
      setTimeout(() => {
        AlertModule.hide();
      }, 3000);
    },
    showPlugin() {
      this.$vux.alert.show({
        title: "VUX is Cool",
        content: 'this.$t("Do you agree?")',
        onShow() {
          console.log("Plugin: I'm showing");
        },
        onHide() {
          console.log("Plugin: I'm hiding now");
        }
      });
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      console.log(this.$vux.alert.isVisible());
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style>
</style>
