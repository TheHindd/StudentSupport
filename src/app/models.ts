export interface LoginForm {
  password: string;
  username: string;
}
export interface TokenModel{
  access: string;
  refresh: string;
}

export interface UserProfile {
  exp:number;
  iat: number;
  jti:string;
  token_type: string;
  user_id: string;
}
