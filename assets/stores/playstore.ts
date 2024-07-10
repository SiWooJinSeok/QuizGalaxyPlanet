import { create } from "zustand";

interface PlayStoreType {
  score: number;
  setScore: (score: number) => void;
  categoryName: string;
  setCategoryName: (categoryName: string) => void;
  type: string;
  setType: (type: string) => void;
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

const playStore = create<PlayStoreType>((set) => ({
  score: 0,
  setScore: (score: number) => set({ score }),
  categoryName: "",
  setCategoryName: (categoryName: string) => set({ categoryName }),
  type: "",
  setType: (type: string) => set({ type }),
  modalVisible: false,
  setModalVisible: (modalVisible: boolean) => set({ modalVisible }),
}));

export default playStore;
