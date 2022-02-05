import { useReducer, useEffect } from "react";
import AdminBoard from "./AdminBoard";
import { getAuth } from "helpers/getAuth";
import { useNavigate } from "react-router-dom";
import useHealthData from "hooks/useHealthData";
import MaterialTable from "material-table";

function HealthTable() {
  const navigate = useNavigate();
  const {
    state,
    columns,
    editRow,
    deleteRow,
    addRow,
    healthData,
    setHealthData,
  } = useHealthData();

  useEffect(() => {
    if (!getAuth()) {
      return navigate("/admin");
    }
  }, []);

  return (
    <AdminBoard updateCards={state.healthRegions}>
      <MaterialTable
        title="Public Health Regions (Ontario)"
        columns={columns}
        data={healthData}
        options={{
          exportButton: true,
          actionsColumnIndex: -1,
          selection: true,
          filtering: true,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              // setTimeout(() => {
              addRow(newData).then(() => {
                setHealthData((prevState) => {
                  return [...healthData, newData];
                });
                resolve();
              });
              // }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              // setTimeout(() => {
              editRow(newData).then(() => {
                const dataUpdate = [...healthData];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setHealthData([...dataUpdate]);
                // console.log(`newData+++++++++>`,newData);
                resolve();
              });

              // }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              // setTimeout(() => {
              deleteRow(oldData).then(() => {
                const dataDelete = [...healthData];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setHealthData([...dataDelete]);
                resolve();
              });
              // }, 1000);
            }),
        }}
        actions={[
          {
            tooltip: "Remove All Selected Users",
            icon: "delete",
            onClick: (evt, data) => {
              data.forEach((item) => {
                deleteRow(item);
              });
            },
          },
        ]}
      />
      ;
    </AdminBoard>
  );
}

export default HealthTable;

/* function Editable() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: "Name", field: "name" },
    {
      title: "Surname",
      field: "surname",
      initialEditValue: "initial edit value",
    },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth Place",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    },
  ]);

  const [data, setData] = useState([
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  ]);

  return (
    <MaterialTable
      title="Editable Preview"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
 */
