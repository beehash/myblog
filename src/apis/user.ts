import fetch from '@/utils/fetch';
import { UserCator } from '@/models/App.model';

class UserApi {
  static getUser(params: {name: string}): FetchResponse<UserCator>{
    return fetch.get('/getUser', params).catch(err => {
      console.log('获取用户失败！');
    });
  }
}

export default UserApi;
