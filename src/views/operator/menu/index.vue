<template>
  <div class="menu-box">
    <div class="connection-box">
      <a-button type="dashed" ghost>新建连接</a-button>
    </div>
    <div class="connection-list">
      <p class="title"><holder-outlined class="icon" />连接实例列表</p>
      <a-divider style="border-color: #7cb305" dashed />
      <a-list item-layout="horizontal" :data-source="dbStore.connectionList"></a-list>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useDbStore } from '@/store/modules/db';
  import { HolderOutlined } from '@ant-design/icons-vue';

  const dbStore = useDbStore();

  onMounted(() => {
    // 加载connectionlist
    dbStore.getConnectionList();
  });
</script>

<style scoped lang="less">
  .menu-box {
    height: 100%;
    // background-color: rgb(20, 177, 67);
    width: 20%;
    max-width: 300px;
    min-width: 200px;
    > .connection-box {
      height: 100px;
      padding: 15px;
      background-color: rgba(2, 29, 29, 0.767);
    }
    > .connection-list {
      padding: 15px;
      > .title {
        font-size: 18px;
        font-weight: 600;

        .icon {
          //   margin-left: 10px;
          color: cadetblue;
          font-size: 18px;
        }
      }
    }
  }
</style>
