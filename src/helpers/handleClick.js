import axios from "axios";
import { GET_REGION } from "misc/phuToregion";

export const handleClick = function (setRestriction, setStatus, phuID) {
  // get restrictions and key covid stats data from api
  setStatus(true);
  Promise.all([
    axios.get(`/api/restrictions/${phuID}`),
    axios.get(`https://api.opencovid.ca/summary?loc=${GET_REGION[phuID]}`),
  ])
    .then(([restrictions, stats]) => {
      setStatus(false);
      setRestriction({
        restrictions: restrictions.data,
        stats: stats.data.summary[0],
      });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};
