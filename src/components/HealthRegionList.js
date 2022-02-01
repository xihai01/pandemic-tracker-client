import { useState } from "react";
import HealthRegion from "./HealthRegion";
import { setMapProjection } from "helpers/setMapProjection";
import { DisplayRestrictions } from "./DisplayRestrictions";
import LegendAndCovidStats from "./LegendAndCovidStats";
import * as d3 from "d3";
import { CircularProgress } from "@material-ui/core";
import useMapTools from "hooks/useMapTools";
import Navbar from "./Navbar";
import { Button } from "@material-ui/core";
import { Container } from "@mui/material";
// import { Skeleton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";


const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Nunito",
    textAlign: "center",
    marginBottom: "20px",
  },
  headtitle: {
    fontWeight: "800",
    fontSize: '3em',
    marginLeft: "18px",
    paddingRight: "18px",
    color: "#829ab1",
  },
}));

/**
 *
 * @param {mapData} props
 * This component takes in mapData and renders each health region
 */
export default function HealthRegionList(props) {
  const classes = useStyles();
  // restriction holds restrictions data for health regions
  const [restriction, setRestriction] = useState({});
  const [status, setStatus] = useState(false);
  const { svgLoad, setSvgLoad, mapData, stageObj, loading } = props;
  // render tooltip and geoloc marker
  useMapTools(mapData, loading, restriction);
  // wait until mapData is loaded and ready for use
  if (!loading) {
    const path = d3.geoPath().projection(setMapProjection(mapData));

    const healthRegionList = mapData.features.map((data) => {
      // get the stage # and phuID for each health region
      let phuID = data.properties["PHU_ID"];
      let region_name = data.properties["NAME_ENG"];
      let stageID = stageObj[phuID];
      return (
        <HealthRegion
          key={data.properties.FID}
          pathData={path(data)}
          stageID={stageID}
          setRestriction={setRestriction}
          setStatus={setStatus}
          phuID={phuID}
          tooltipData={region_name}
        />
      );
    });
    console.log(loading);

    return (
      <Container maxWidth="2000px" className={classes.root} r>
        <div className="map-page">
          <Navbar />
          <div className={classes.title}>
            <h1 className={classes.headtitle}>Ontario's COVID Restrictions</h1>
            <h3>
              Click on a health region down below to display the restrictions in
              your area.
            </h3>
          </div>
          <div className="mapcontainer">
            {Object.keys(restriction).length === 0 && (
              <svg className="image">
                <g>{healthRegionList}</g>
              </svg>
            )}
            {Object.keys(restriction).length !== 0 && (
              <LegendAndCovidStats
              status={status}
                restriction={restriction}
                healthRegionList={healthRegionList}
              />
            )}
          </div>
          <br />

          <div className="zoom-button">
            <Button
              onClick={() => {
                console.log("hi");
                svgLoad ? setSvgLoad(0) : setSvgLoad(1);
              }}
              variant="contained"
            >
              Zoom In
            </Button>
          </div>
          <br />
          <DisplayRestrictions status={status} restriction={restriction} />
          <footer id="footer"></footer>
        </div>
      </Container>
    );
  } else {
    return (
      <div className="loading">
        <CircularProgress color="primary" size="250px" />
      </div>
    );
  }
}
