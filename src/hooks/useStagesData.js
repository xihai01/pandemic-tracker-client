import { useReducer, useEffect } from "react";
import adminReducer, { SET_STAGES } from "reducer/admin_reducer";
import axios from "axios";

export default function useStagesData() {
  const [state, dispatch] = useReducer(adminReducer, {
    stages: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    axios
      .get(`/admin/stages`, { withCredentials: true })
      .then((res) => {
        dispatch({ type: SET_STAGES, stages: res.data });
      })
      .catch();
  }, []);

  const columns = [
    { title: "Stage", field: "id", width: null },
    { title: "Color code", field: "color_code" },
    { title: "Indoor gatherings", field: "max_indoor_gathering" },
    { title: "Personal care", field: "personal_care" },
    { title: "Outdoor gatherings", field: "max_outdoor_gathering" },
    {
      title: "Ceremony",
      field: "ceremony",
      cellStyle: {
        width: 500,
        minWidth: 500,
      },
    },
    {
      title: "Entertainment",
      field: "entertainment",
      cellStyle: {
        width: 500,
        minWidth: 500,
      },
    },
    {
      title: "Food establishments",
      field: "food_establishments",
      cellStyle: {
        width: 300,
        minWidth: 300,
      },
    },

    {
      title: "Retail",
      field: "retail",
      cellStyle: {
        width: 300,
        minWidth: 300,
      },
    },
    {
      title: "Sports/Recreation",
      field: "sports_recreational",
      cellStyle: {
        width: 500,
        minWidth: 500,
      },
    },
    { title: "Created On", field: "created_at", editable: "never" },
    { title: "Last Update", field: "updated_at", editable: "never" },
    // cellStyle: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: 100} for ellipsis columns
  ];

  function editRow(data) {
    const {
      color_code,
      personal_care,
      entertainment,
      sports_recreational,
      ceremony,
      retail,
      food_establishments,
      max_outdoor_gathering,
      max_indoor_gathering,
    } = data;
    return Promise.all([
      axios.put(
        `/admin/stages/${data.id}`,
        {
          color_code,
          personal_care,
          entertainment,
          sports_recreational,
          ceremony,
          retail,
          food_establishments,
          max_outdoor_gathering,
          max_indoor_gathering,
        },
        { withCredentials: true }
      ),
      axios.get(`/admin/stages`, { withCredentials: true }),
    ])
      .then(([res1, res2]) => {
        console.log(`data edited sucessfully`);
        dispatch({ type: SET_STAGES, stages: res2.data });
      })
      .catch(() => console.log(`error editing data in DB`));
  }

  function deleteRow(data) {
    return Promise.all([
      axios.delete(`/admin/stages/${data.id}`, { withCredentials: true }),
      axios.get(`/admin/stages`, { withCredentials: true }),
    ])
      .then(([res1, res2]) => {
        console.log(`data deleted sucessfully`);
        dispatch({ type: SET_STAGES, stages: res2.data });
      })
      .catch(() => console.log(`error deleting data in DB`));
  }

  function addRow(data) {
    const {
      color_code,
      personal_care,
      entertainment,
      sports_recreational,
      ceremony,
      retail,
      food_establishments,
      max_outdoor_gathering,
      max_indoor_gathering,
    } = data;

    return Promise.all([
      axios.post(
        `/admin/stages`,
        {
          color_code,
          personal_care,
          entertainment,
          sports_recreational,
          ceremony,
          retail,
          food_establishments,
          max_outdoor_gathering,
          max_indoor_gathering,
        },
        { withCredentials: true }
      ),
      axios.get(`/admin/stages`, { withCredentials: true }),
    ])
      .then(([res1, res2]) => {
        console.log(`data created sucessfully`);
        dispatch({ type: SET_STAGES, stages: res2.data });
      })
      .catch(() => console.log(`error creating data in DB`));
  }

  return {
    state,
    editRow,
    addRow,
    columns,
    deleteRow,
  };
}
