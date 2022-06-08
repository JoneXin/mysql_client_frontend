<template>
  <div>
    <PageHeader></PageHeader>
    <Operator></Operator>
    <PageFooter></PageFooter
  ></div>
</template>

<script setup lang="ts">
  import PageHeader from '@/layout/header';
  import PageFooter from '@/layout/footer';
  import Operator from './operator/index.vue';
</script>

<style lang="less">
  @import '@/styles/reset.css';
</style>
