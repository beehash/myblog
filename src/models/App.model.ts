export interface RootStateCator{
  loading: boolean,
}

export interface ThemeCator{
  color: string,
  inColor: string,
}
export interface UserParameterCator{
  name: string;
}

export interface UserCator {
  id: number;
  permission: [];
  session: string;
  userId: string;
  username: string;
}