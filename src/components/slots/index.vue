<template>
  <div>
    <h2>插槽</h2>
    <!-- 插槽 -->
    <Layout>
      <!-- 具名插槽 -->
      <template v-slot:header>开课吧全栈</template>
      <!-- 匿名插槽 -->
      <template>content...</template>
      <template>233333</template>
      <!-- 作用域插槽 -->
      <template v-slot:footer="{foo}">{{foo}}</template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/slots/com-slot'
export default {
  name: "slot-index",
  components: {
    Layout,
  },
};
</script>

<style lang="scss" scoped>
</style>