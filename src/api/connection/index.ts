import { request } from '@/utils/axios/request';
import { ConnectionConf, UpdateConnectionConf } from './model';

// 连接列表
export function getConnectionList() {
  return request(
    {
      url: '/conn/connectionlist',
      method: 'get',
    },
    {
      isGetDataDirectly: true,
    },
  );
}

// 新建连接
export function newConnection(data: ConnectionConf) {
  return request({
    url: '/conn/newconnection',
    method: 'post',
    data,
  });
}

// 删除连接
export function deleteConnection(connectionName: string) {
  return request({
    url: '/conn/delconnection',
    method: 'get',
    params: connectionName,
  });
}

// 删除连接
export function updateConnection(updateConf: UpdateConnectionConf) {
  return request({
    url: '/conn/updateconnection',
    method: 'post',
    data: updateConf,
  });
}
