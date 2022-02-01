import * as d3 from "d3";

export const handleZoom = function (e) {
  d3.select(".image g").attr("transform", e.transform);
};

export const zoomMap = function (svgLoad) {
  if (svgLoad) {
    console.log("svg exists");
    // get module for zoom and pan behaviour
    let zoom = d3
      .zoom()
      .scaleExtent([1, 5])
      .translateExtent([
        [0, 0],
        [960, 480],
      ])
      .on("zoom", handleZoom);
    d3.select(".image").call(zoom);
  }
};
