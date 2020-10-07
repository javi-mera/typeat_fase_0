import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon-2x.png";
//import icon from "../../img/icons8-search-50.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export const MarkerIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
});
