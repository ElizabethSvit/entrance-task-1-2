import ymaps from 'ymaps';
import {initMap} from "./map";

ymaps.ready(function() {
  initMap(ymaps, "map");
  console.log("inited");
});
