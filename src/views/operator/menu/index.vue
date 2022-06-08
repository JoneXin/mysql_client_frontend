<template>
  <div class="menu-box">
    <div class="connection-box">
      <a-button type="primary" ghost>新建连接</a-button>
    </div>
    <!-- <a-divider style="border-color: rgba(95, 158, 160, 0.384);" /> -->
    <div class="connection-list">
      <!-- <p class="title"><holder-outlined class="icon" />连接实例列表</p> -->
      <ul class="conn-list-box" ref="connRef">
        <li v-for="item in dbStore.connectionList" class="conn-list-item">
          <p
            >连接: <span>{{ item.connection_name }}</span></p
          >
          <p>
            IP : <span class="ip">{{ item.host }}</span></p
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useDbStore } from '@/store/modules/db';

  const dbStore = useDbStore();
  const connRef = ref();

  onMounted(async () => {
    // 加载connectionlist
    await dbStore.getConnectionList();

    // 注册事件
    connRef.value.addEventListener('contextmenu', (e: any) => {
      e.preventDefault();

      console.log(e.target.parentNode.children[0].children[0].innerHTML);
    });
  });

  const editConnction = () => {};
  const deleteConnction = () => {};
</script>

<style scoped lang="less">
  .menu-box {
    height: 100%;
    width: 20%;
    max-width: 300px;
    min-width: 200px;
    > .connection-box {
      height: 70px;
      padding: 15px;
      text-align: center;
    }
    > .connection-list {
      padding-left: 5px;
      cursor: pointer;
      > .title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
        .icon {
          color: cadetblue;
          font-size: 18px;
        }
      }
      > .conn-list-box {
        font-size: 14px;
        height: calc(100vh - 350px);
        overflow: auto;
        font-family: '微软雅黑';
        .conn-list-item {
          padding: 5px;
          border: 1px solid rgba(95, 158, 160, 0.384);
          border-bottom: none;
          transition: all ease-in-out 0.2s;
          p {
            margin-top: 5px;
            span {
              color: green;
            }
            .ip {
              color: red;
            }
          }
          &:hover {
            background-color: bisque;
          }
        }
        .conn-list-item:last-of-type {
          border-bottom: 1px solid rgba(95, 158, 160, 0.384);
        }
      }
    }
  }
</style>
