import { request } from '@/utils/axios/request';

// 获取数据库列表
export function getDblist(connectionName: string) {
  return request({
    url: '/page/getdblist',
    method: 'get',
    params: connectionName,
  });
}
