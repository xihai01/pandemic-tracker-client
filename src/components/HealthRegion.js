import "./HealthRegion.css";
import { handleClick } from "../helpers/handleClick";
import classNames from "classnames";
import * as d3 from "d3";
import axios from "axios";

/**
 *
 * @param {*} props => { pathData }
 * component takes in a SVG path data string and renders a health region
 */
export default function HealthRegion(props) {
  const { setRestriction, setStatus, phuID, tooltipData, stageID } = props;
  // render health region with a fill color depending on stage #
  const pathClass = classNames("path", {
    "path--stage_one": stageID === 1,
    "path--stage_two": stageID === 2,
    "path--stage_three": stageID === 3,
  });
  return (
    <path
      className={pathClass}
      onClick={() => {
        handleClick(setRestriction, setStatus, phuID);
      }}
      onMouseOver={() => {
        // display region name and key covid stats when hovered over
        d3.select("#tooltip")
          .style("opacity", 1)
          .style("background-color", "burlywood")
          .text(tooltipData);
      }}
      onMouseOut={() => {
        d3.select("#tooltip").style("opacity", 0);
      }}
      onMouseMove={(event) => {
        d3.select("#tooltip")
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY + 10 + "px");
        console.log([event.pageX, event.pageY]);
      }}
      d={props.pathData}
    />
  );
}
