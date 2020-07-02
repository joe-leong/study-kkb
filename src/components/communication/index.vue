<template>
    <div>
        <h2>组件通信</h2>
        <child1></child1>
        <child2 ref="child2" msg="index 传递的信息"></child2>
        <parent msg="parent 传递的信息" @foo="onFoo"></parent>
    </div>
</template>

<script>
import child1 from "@/components/communication/child1";
import child2 from "@/components/communication/child2";
import parent from "@/components/communication/parent";
export default {
  provide(){
    return {
      bar:'bar'
    }
  },
  components: {
    child1,
    child2,
    parent
  },
  mounted () {
    //$childdren不能保证顺序
    // this.$children[1].emitbus()
    this.$refs.child2.emitbus()
  },
  methods: {
    onFoo(res) {
      console.log(res);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>