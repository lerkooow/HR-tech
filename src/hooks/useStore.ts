import { create } from "zustand";

interface User {
  name: string;
  avatar: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logoutUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logoutUser: () => set(() => ({ user: null })),
}));
