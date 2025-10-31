import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRoutesStore = create(
  persist(
    (set) => ({
      routes: [],

      addRoute: (newRoute) =>
        set((state) => ({
          routes: [
            ...state.routes,
            {
              id: crypto.randomUUID(),
              markers: newRoute,
            },
          ],
        })),

      clearRoutes: () => set({ routes: [] }),
    }),
    {
      name: "routes-storage",
      partialize: (state) => ({ routes: state.routes }),
    }
  )
);

export default useRoutesStore;
