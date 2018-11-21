<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <button @click="cook">添加 感觉不咋地 不好用啊cookie</button>
    <button @click="delect">删除foo中path属性</button>
    <button @click="getCook">获取cookie</button>
    <span>{{msg}}</span>
    <div>
      <button @click="getTime">获取当前时间的 YYYY-MM-DD HH:mm:ss 格式</button>
      <span>{{time}}</span>
    </div>
    <!-- <div>
      <p>number 格式化工具</p>
      <p>numberComma用于分割数字，默认为3位分割，一般用于格式化金额。<br>
      numberPad用于按照位数补0<br>
      numberRandom用于生成两个整数范围内的随机整数
      </p>
      <p>
        numberComma(21342132) // 21,342,132
        numberComma(21342132, 4) // 2134,2132
        numberComma(21342132.234) // 21,342,132.234
        numberPad(1) // 01
        numberPad(234, 4) // 0234
        numberRandom(1, 7) // 2
      </p>
    </div> -->
    <div>
      import { querystring } from 'vux'
      querystring.parse('a=b&c=d') // {a:'b',c:'d'}, 默认参数为 location.search
      querystring.stringify({a:'b',c:'d'}) // 'a=b&c=d'，注意不支持复杂嵌套的结构
    </div>
    <div>
      import { trim } from 'vux'
      trim(' 1024 ') // 1024
    </div>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  cookie,
  dateFormat,
  numberComma,
  numberPad,
  numberRandom
} from "vux";
export default {
  components: {
    Group,
    Cell,
    cookie,
    dateFormat,
    numberComma,
    numberPad,
    numberRandom
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 1,
      time: ""
    };
  },
  mounted() {
    this.time = new Date();
  },
  methods: {
    cook() {
      // // document.cookie = `foo=${++this.msg}`;
      cookie.set("foo", 4, {
        domain: "example.com",
        path: "/123123",
        expires: 30
      });
      this.msg = cookie.get("foo");
    },
    delect() {
      cookie.remove("foo", {
        path: "/"
      });
    },
    getCook() {
      let that = this;
      cookie.get("foo", function(s) {
        console.log(s.path());
      });
      // this.msg = cookie.get("foo", function(s) {
      //   console.log(parseInt(s));
      // });
      //删除cookie某项属性
    },
    getTime() {
      this.time = dateFormat(new Date(), "YYYY-MM-DD HH:mm:ss");
    }
  }
};
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
