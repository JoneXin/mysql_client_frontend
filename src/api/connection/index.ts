import { request } from '@/utils/axios/request';
import { ConnectionConf } from './model';

// 连接列表
export function getConnectionList() {
  return request(
    {
      url: '/page/connectionlist',
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
    url: '/page/newconnection',
    method: 'post',
    data,
  });
}

// 删除连接
export function deleteConnection(connectionName: string) {
  return request({
    url: '/page/delconnection',
    method: 'get',
    params: connectionName,
  });
}

//
