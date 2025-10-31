import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DEFAULT_LOCATION } from "@/constants/api";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import useTripStore from "@/store/useTripStore";

const FitBounds = ({ markers }) => {
  const map = useMap();

  useEffect(() => {
    if (!markers || markers.length === 0) return;

    const bounds = markers.map((m) => [m.lat, m.lon]);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [markers, map]);

  return null;
};

const MapView = () => {
  const markers = useTripStore((state) => state.markers);

  console.log(markers);

  return (
    <MapContainer
      center={[DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lon]}
      zoom={DEFAULT_LOCATION.zoom}
      scrollWheelZoom={false}
      className=" h-[25rem] md:h-full w-full z-50"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(({ id, lat, lon, name }) => (
        <Marker key={id} position={[parseFloat(lat), parseFloat(lon)]}>
          <Popup>{name || DEFAULT_LOCATION.name}</Popup>
        </Marker>
      ))}

      {markers.length > 1 && (
        <>
          <Polyline
            positions={markers.map((m) => [m.lat, m.lon])}
            color="black"
            weight={8}
            opacity={0.6}
          />
          <Polyline
            positions={markers.map((m) => [m.lat, m.lon])}
            color="white"
            weight={4}
          />
        </>
      )}

      <FitBounds markers={markers} />
    </MapContainer>
  );
};
export default MapView;
