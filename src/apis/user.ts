import fetch from '@/utils/fetch';
import { UserCator } from '@/models/App.model';

class UserApi {
  static getUser(params: {name: string}): Promise<UserCator>{
    return fetch.get('/api/getUser', params);
  }
}

export default UserApi;
