import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTripStore = create(
  persist(
    (set) => ({
      searchTerm: "",
      selectedLocation: null,
      markers: [],
      routes: [],

      setSearchTerm: (value) => set({ searchTerm: value }),
      setSelectedLocation: (location) => set({ selectedLocation: location }),

      handleSelect: (item) =>
        set(() => ({
          selectedLocation: {
            id: item.id,
            name: item.name,
            country: item.country,
            lat: item.latitude,
            lon: item.longitude,
          },
          searchTerm: item.name,
        })),

      addMarker: () =>
        set((state) => {
          if (!state.selectedLocation) return state;
          return {
            markers: [
              ...state.markers,
              {
                ...state.selectedLocation,
                nights: 0,
              },
            ],
            selectedLocation: null,
            searchTerm: "",
          };
        }),

      deleteItem: (id) =>
        set((state) => ({
          markers: state.markers.filter((item) => item.id !== id),
        })),

      updateNights: (id, operator) =>
        set((state) => ({
          markers: state.markers.map((item) =>
            item.id === id
              ? { ...item, nights: Math.max(0, item.nights + operator) }
              : item
          ),
        })),
    }),
    {
      name: "trip-storage",
      partialize: (state) => ({ markers: state.markers }),
    }
  )
);

export default useTripStore;
