import { useReducer, useEffect } from "react";
import adminReducer, { SET_REGIONS } from "reducer/admin_reducer";
import axios from "axios";

export default function useHealthData() {
  const [state, dispatch] = useReducer(adminReducer, {
    healthRegions: [],
    loading: true,
    error: null,
    add: 0,
    delete: 0,
  });

  useEffect(() => {
    axios
      .get(`/admin/health_regions`, { withCredentials: true })
      .then((res) => {
        dispatch({ type: SET_REGIONS, healthRegions: res.data });
      })
      .catch();
  }, []);

  const columns = [
    { title: "Region code", field: "region_code" },
    { title: "Name", field: "region_name", filtering: false },
    { title: "Lockdown Stage", field: "stage_id" },
    {
      title: "Created On",
      field: "created_at",
      editable: "never",
      filtering: false,
    },
    {
      title: "Last Update",
      field: "updated_at",
      editable: "never",
      filtering: false,
    },
  ];

  function editRow(data) {
    return Promise.all([
      axios.put(
        `/admin/health_regions/${data.id}`,
        {
          region_name: data.region_name,
          region_code: data.region_code,
          stage_id: data.stage_id,
        },
        { withCredentials: true }
      ),
      axios.get(`/admin/health_regions`, { withCredentials: true }),
    ])
      .then(([res1, res2]) => {
        console.log(`data edited sucessfully`);
        dispatch({ type: SET_REGIONS, healthRegions: res2.data });
      })
      .catch(() => console.log(`error editing data in DB`));
  }

  function deleteRow(data) {
    return Promise.all([
      axios.delete(`/admin/health_regions/${data.id}`, {
        withCredentials: true,
      }),
      axios.get(`/admin/health_regions`, { withCredentials: true }),
    ])
      .then(([res1, res2]) => {
        console.log(`data deleted sucessfully`);
        dispatch({ type: SET_REGIONS, healthRegions: res2.data });
      })
      .catch(() => console.log(`error editing data in DB`));
  }

  function addRow(data) {
    return Promise.all([
      axios.post(
        `/admin/health_regions/`,
        {
          region_name: data.region_name,
          region_code: data.region_code,
          stage_id: data.stage_id,
        },
        { withCredentials: true }
      ),
      axios.get(`/admin/health_regions`, { withCredentials: true }),
    ])
      .then(([res1, res2]) => {
        console.log(`data created sucessfully`, res2.data);
        dispatch({ type: SET_REGIONS, healthRegions: res2.data });
      })
      .catch(() => console.log(`error creating data in DB`));
  }

  return {
    state,
    columns,
    editRow,
    addRow,
    deleteRow,
  };
}
