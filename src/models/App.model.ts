import {ArticleCator} from './Article.model'
export interface ThemeCator{
  color: string,
  inColor: string,
}
export interface UserParameterCator{
  name: string;
}

export interface UserCator {
  id: number;
  permissions: [];
  session: string;
  userId: string;
  username: string;
}
export interface RootCator {
  loading: boolean;
  asyncRoutes: RouteConfig[];
}
export interface PayloadsCator{
  root: RootCator;
  user: UserCator;
  article: ArticleCator;
  theme: ThemeCator;
}