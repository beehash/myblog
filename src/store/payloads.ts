import { constantRoutes } from "@/router";
const payloads = {
  rootState: {
    loading: false,
  },
  routeState: constantRoutes,
  user: {
    name: 'beehash',
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
