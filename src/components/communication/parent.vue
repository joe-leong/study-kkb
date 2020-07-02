<template>
    <div>
        <h2>parent</h2>
        <child2 v-bind="$attrs" v-on="$listeners"></child2>
    </div>
</template>

<script>
import child2 from "@/components/communication/child2";
export default {
  name: "parent",
  components: {
      child2,
  },
};
</script>

<style lang="scss" scoped>
</style>