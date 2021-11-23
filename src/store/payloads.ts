import { PayloadsCator } from '@/models/App.model';

const payloads: PayloadsCator = {
  root: {
    loading: false,
    asyncRoutes: {
      routes: [],
      success: false,
    },
  },
  user: {
    id: 0,
    permissions: [],
    session: '',
    userId: '',
    username: 'beehash',
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
