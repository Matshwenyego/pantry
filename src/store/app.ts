import {create} from 'zustand';

interface AppState {
  isLoading: boolean;
  setLoadingState: () => void;
}

const useAppStore = create<AppState>(set => ({
  isLoading: false,
  setLoadingState: () => set(state => ({isLoading: !state.isLoading})),
}));

export default useAppStore;
