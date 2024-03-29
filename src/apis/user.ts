/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-11-18 18:10:05
 */
import fetch from '@/utils/fetch';
import { UserCator } from '@/models/App.model';
import { aesEncode } from '@/utils';

class UserApi {
  static getUser(params: {name: string}): FetchResponse<UserCator>{
    return fetch.get('/getUser', params).catch(err => {
      console.log('获取用户失败！');
    });
  }
  static getInviteCode() {
    return fetch.get('/getInviteCode').catch(err => {
      console.log('生成邀请码失败，请重试！')
    });
  }
  static verifyInviteCode(inviteCode: string) {
    // 2emExEEWF6wuo1/nZwxwJw==
    return fetch.post('/verifyInviteCode', {inviteCode}).catch(err => {
      console.log('服务器稍忙，请稍后重试！');
    });
  }
  static setHello(data: Record<string, any>) {
    return fetch.post('/modifyHello', data, { baseURL: '/hello', params: { currentPage: 1,pageSize: 20 }})
  } 
  static loginUser(form: String) {
    return fetch.post('/loginUser', {screteStr: aesEncode(form)});
  }
}

export default UserApi;
