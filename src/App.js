import useApplicationData from "./hooks/useApplicationData";
import useInitialize from "./hooks/useInitialize";
import HealthRegion from "./components/HealthRegion";
import HealthRegionList from "./components/HealthRegionList";
import { handleZoom, zoomMap } from "./helpers/handleZoom";
import { useState } from "react";
import * as d3 from "d3";
import "./App.css";
import Home from "./components/Home";
import AdminBoard from "components/admin/dashboard/AdminBoard";
import HealthTable from "components/admin/dashboard/HealthTable";
import AdminLogin from "components/admin/AdminLogin";
import Page404 from "components/admin/Page404";
import Stages from "components/admin/dashboard/Stages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // setup application for use
  const { svgLoad, setSvgLoad, mapData, stageObj, loading } = useInitialize();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/adminboard" element={<AdminBoard updateCards={true} />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/regions" element={<HealthTable />} />

        <Route
          path="/map"
          element={
            <HealthRegionList
              svgLoad={svgLoad}
              setSvgLoad={setSvgLoad}
              mapData={mapData}
              stageObj={stageObj}
              loading={loading}
            />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
