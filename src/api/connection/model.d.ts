// 数据库连接配置
export interface ConnectionConf {
  // 连接名
  connection_name: string;
  // 主机
  host: string;
  // 端口
  port: number;
  // 用户名
  user: string;
  // 密码
  password: string;
}

export interface UpdateConnectionConf extends ConnectionConf {
  uid: number;
}
