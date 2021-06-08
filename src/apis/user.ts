import fetch from '@/utils/fetch';
import { Essay } from '@/models/Essay.model';

class UserApi {
  static getUser(params: {name: string}): Promise<Essay[]>{
    return fetch.get('/api/getUser', params);
  }
}

export default UserApi;
