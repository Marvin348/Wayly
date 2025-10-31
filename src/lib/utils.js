export const isValidLatLng = (point) =>
  point &&
  point.lat !== undefined &&
  point.lon !== undefined &&
  !isNaN(parseFloat(point.lat)) &&
  !isNaN(parseFloat(point.lon));

  export const getDayName = (date) => {
    return new Date(date).toLocaleDateString("de-DE", { weekday: "short" });
  };
