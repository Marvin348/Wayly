import partlyCloudyDay from "@/assets/weathericons/partlyCloudyDay.svg";
import partlyCloudyNight from "@/assets/weathericons/partlyCloudyNight.svg";
import rainy from "@/assets/weathericons/rainy.svg";
import thunderstorm from "@/assets/weathericons/thunderstorm.svg";
import showers from "@/assets/weathericons/showers.svg";
import clearDay from "@/assets/weathericons/clearDay.svg";

export const weatherConditions = {
  0: { label: "Klarer Himmel", icon: clearDay },
  1: { label: "Überwiegend klar", icon: partlyCloudyDay },
  2: { label: "Teilweise bewölkt", icon: partlyCloudyDay },
  3: { label: "Bewölkt", icon: rainy },
  45: { label: "Nebel", icon: partlyCloudyNight },
  51: { label: "Leichter Regen", icon: showers },
  61: { label: "Regen", icon: rainy },
  71: { label: "Schnee", icon: showers },
  80: { label: "Leichte Regenschauer", icon: rainy },
  95: { label: "Gewitter", icon: thunderstorm },
};
