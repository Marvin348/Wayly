// import { createContext, useContext, useState, useEffect } from "react";

// const TripContext = createContext();

// export const TripProvider = ({ children }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState([]);
//   const [markers, setMarkers] = useState(() => {
//     const savedMarkers = localStorage.getItem("markers");
//     return savedMarkers ? JSON.parse(savedMarkers) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("markers", JSON.stringify(markers));
//   }, [markers]);

//   const handleSelect = (item) => {
//     setSelectedLocation({
//       id: item.id,
//       name: item.name,
//       country: item.country,
//       lat: item.latitude,
//       lon: item.longitude,
//     });
//     setSearchTerm(item.name);
//   };

//   const handlePlanLocation = () => {
//     if (!selectedLocation) return;
//     setMarkers((prev) => [...prev, selectedLocation]);
//     setSelectedLocation(null);
//     setSearchTerm("");
//   };

//   const deleteItem = (id) =>
//     setMarkers((prev) => prev.filter((item) => item.id !== id));

//   // const updateNights = (id, delta) =>
//   //   setMarkers((prev) =>
//   //     prev.map((item) =>
//   //       item.id === id
//   //         ? { ...prev, nights: Math.max(0, item.nights + delta) }
//   //         : item
//   //     )
//   //   );

//   return (
//     <TripContext.Provider
//       value={{
//         searchTerm,
//         setSearchTerm,
//         selectedLocation,
//         setSelectedLocation,
//         markers,
//         setMarkers,
//         handlePlanLocation,
//         handleSelect,
//         deleteItem,
//       }}
//     >
//       {children}
//     </TripContext.Provider>
//   );
// };

// export const useTrip = () => useContext(TripContext);
