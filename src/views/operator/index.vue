<template>
  <div class="operator-box">
    <Menu></Menu>
    <Content></Content>
  </div>
</template>

<script setup lang="ts">
  import Menu from './menu/index.vue';
  import Content from './content/index.vue';
</script>

<style scoped lang="less">
  .operator-box {
    display: flex;
    height: calc(100vh - 140px);
    width: 100%;
  }
</style>
