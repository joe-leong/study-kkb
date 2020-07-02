<template>
    <div>
        <h2 @click="emitbus">child2</h2>
        <h3>{{$attrs.msg}}</h3>
        <h3>{{bar1}}</h3>
        <button @click="onEmit">事件展开传递</button>
    </div>
</template>

<script>
export default {
  name: "child2",
  //   inject: {
  //     bar1: "bar"
  //   },
  inject: {
      bar1:{
          from:'bar',
          default:'barrrrrr'
      }
  },
  methods: {
    emitbus() {
      this.$bus.$emit("testbus", "这是child2传递的参数");
    },
    onEmit() {
      this.$emit("foo", "这是渗透传递的信息");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>