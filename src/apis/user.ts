import fetch from '@/utils/fetch';

interface User{
  name: string;
}
class UserApi {
  static getUser(params: {name: string}): Promise<User>{
    return fetch.get('/api/getUser', params);
  }
}
export default UserApi;
