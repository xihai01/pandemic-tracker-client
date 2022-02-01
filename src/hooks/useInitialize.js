import { useEffect, useState } from "react";
import useApplicationData from "./useApplicationData";
import { zoomMap } from "../helpers/handleZoom";

/**
 *
 * @param {none}
 * This function initializes the application by setting initial state and fetching for data
 */
export default function useInitialize() {
  // when svgLoad is true => meaning svg elm exists, then enable pan/zoom
  const [svgLoad, setSvgLoad] = useState(0);
  // load map data from api
  const { state } = useApplicationData();
  // mapData contains the geoJSON data we need
  const { mapData, stageObj, loading } = state;
  console.log(state);
  // enable pan/zoom only once
  useEffect(() => {
    zoomMap(svgLoad);
  }, [svgLoad]);

  return {
    svgLoad,
    setSvgLoad,
    mapData,
    stageObj,
    loading,
  };
}
