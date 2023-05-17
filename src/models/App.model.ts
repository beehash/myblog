import {ArticleCator} from './Article.model'
export interface ThemeCator{
  color: string,
  inColor: string,
}
export interface UserParameterCator{
  name: string;
}

/**
 * User cator
 */
export interface UserCator {
  id: number;
  permissions: [];
  session: string;
  userId: string;
  username: string;
  inviteCode: string;
}
export interface RootCator {
  loading: boolean;
  asyncRoutes: {
    routes: RouteConfig[];
    complete: boolean;
  };
}
export interface PayloadsCator{
  root: RootCator;
  user: UserCator;
  article: ArticleCator;
  theme: ThemeCator;
}