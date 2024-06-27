import { create } from "zustand";
import { UserType } from "../types/userType";

export interface UserStoreType {
  user: UserType;
  accessToken: string;
  setUser: (user: UserType) => void;
  setAccessToken: (accessToken: string) => void;
  resetUser: () => void;
}

const userStore = create<UserStoreType>((set) => ({
  user: {
    id: 0,
    email: "",
    nickname: "",
    profile_image: "",
    introduction: "",
  },
  accessToken: "",
  setUser: (user: UserType) => set({ user }),
  setAccessToken: (accessToken: string) => set({ accessToken }),
  resetUser: () =>
    set({
      user: {
        id: 0,
        email: "",
        nickname: "",
        profile_image: "",
        introduction: "",
      },
    }),
}));

export default userStore;
