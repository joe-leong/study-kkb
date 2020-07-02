<template>
  <div class="hello">
    <h1 @click="showToggle">{{ msg }}</h1>
    <commu></commu>
    <com-slot></com-slot>
  </div>
</template>

<script>
import commu from "@/components/communication";
import create from "@/utils/extend";
import Notice from "@/components/toggle/Notice";
import comSlot from '@/components/slots/index'
export default {
  name: "HelloWorld",
  components: {
    commu,
    comSlot
  },
  props: {
    msg: String
  },
  methods: {
    showToggle() {
      create(Notice, {
        title: "村长喊你来搬砖",
        message: "请求登录",
        duration: 3000
      }).show();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
