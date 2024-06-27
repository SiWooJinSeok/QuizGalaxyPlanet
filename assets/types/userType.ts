export interface UserType {
  id: number;
  email: string;
  nickname: string;
  profile_image?: string;
  introduction?: string;
}

export interface ResponseUserType extends UserType {
  accessToken: string;
  refreshToken?: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface SignUpType extends LoginType {
  nickname: string;
}
