import * as d3 from "d3";

export const setMapProjection = function (mapData, coords = []) {
  const projection = d3.geoAlbers();
  /*    .scale(1480)
    .translate([960/2, 480/2])
    .precision(.1); */
  // adjust projection to fit area of svg
  projection
    .precision(0)
    .rotate([90, 0, 0])
    .fitExtent(
      [
        [0, 0],
        [960, 480],
      ],
      mapData
    );
  return coords.length > 0 ? projection(coords) : projection;
};
