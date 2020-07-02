<template>
    <div>
        <h2>child1</h2>
    </div>
</template>

<script>
export default {
  name: "child1",
  mounted() {
    this.$bus.$on("testbus", this.handlebus);
  },
  methods: {
    handlebus(e) {
      // console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>