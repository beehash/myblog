import { PayloadsCator } from '@/models/App.model';

const payloads: PayloadsCator = {
  root: {
    loading: false,
    asyncRoutes: {
      routes: [],
      complete: false,
    },
  },
  user: {
    id: 0,
    permissions: [],
    session: '',
    userId: '',
    username: 'beehash',
    inviteCode: '',
  },
  article: {
    id: 55,
  },
  theme: {
    color: '#125d98',
    inColor: '#eda268',
  },
}

export default payloads;
