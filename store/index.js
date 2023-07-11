import { create } from "zustand";
import { devtools } from "zustand/middleware";
// file base64 store.
let store = (set) => ({
  file: "",
  isLoading: false,
  setFile: (payload) =>
    set(() => ({
      file: payload,
    })),
  setLoading: (payload) =>
    set(() => ({
      isLoading: payload,
    })),
});
// with devtools
store = devtools(store);
export const useStore = create(store);
// export { useStoreFile };
