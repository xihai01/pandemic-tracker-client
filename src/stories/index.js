import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import * as d3 from "d3";

import HealthRegion from "../components/HealthRegion";

const path = d3.geoPath();

//let feature = path(data.features[0]);
storiesOf("HealthRegion", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("HealthRegion", () => (
    <HealthRegion />
  ));
