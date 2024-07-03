import { create } from "zustand";
import { UserType } from "../types/userType";

export interface UserStoreType {
  user: UserType;
  accessToken: string;
  email: string;
  setEmail: (email: string) => void;
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
  email: "",
  setEmail: (email: string) => set({ email }),
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
