import create, { SetState } from "zustand";

interface StoreState {
  mainWidth: number;
}

interface StoreActions {
  setMainWidth: (width: number) => void;
}

type CustomStore = StoreState & StoreActions;

export const useWidthStore = create<CustomStore>(
  (set: SetState<StoreState>) => ({
    mainWidth: 1126,
    setMainWidth: (width) => set({ mainWidth: width })
  })
);
