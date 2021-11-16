import { PayloadsCator } from '@/models/App.model';
import { constantRoutes } from "@/router";



const payloads: PayloadsCator = {
  root: {
    loading: false,
    asyncRoutes: [],
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
