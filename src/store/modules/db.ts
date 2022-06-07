import { getConnectionList, newConnection, deleteConnection } from '@/api/connection';
import { ConnectionConf } from '@/api/connection/model';
import { defineStore } from 'pinia';
import { store } from '@/store';

interface dbType {
  connectionList: Array<ConnectionConf>;
}

export const useDbStore = defineStore({
  id: 'db',
  state: (): dbType => ({
    connectionList: [],
  }),
  getters: {},
  actions: {
    async getConnectionList() {
      const connList = await getConnectionList();
      this.connectionList = connList;
      return connList;
    },
    async newConnection(connConf: ConnectionConf) {
      return await newConnection(connConf);
    },
    async delConnection(connectName: string) {
      return await deleteConnection(connectName);
    },
  },
});

export function useLocaleStoreWithOut() {
  return useDbStore(store);
}
