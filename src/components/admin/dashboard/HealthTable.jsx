import { useReducer, useEffect } from "react";
import AdminBoard from "./AdminBoard";
import { getAuth } from "helpers/getAuth";
import { useNavigate } from "react-router-dom";
import useHealthData from "hooks/useHealthData";
import MaterialTable from "material-table";

function HealthTable() {
  const navigate = useNavigate();
  const { state, columns, editRow, deleteRow, addRow } = useHealthData();

  useEffect(() => {
    if (!getAuth()) {
      return navigate("/admin");
    }
  }, []);

  return (
    <AdminBoard state={state}>
      <MaterialTable
        title="Public Health Regions (Ontario)"
        columns={columns}
        data={state.healthRegions}
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
              /* setData([...data, newData]); */
              addRow(newData).then(() => {
                resolve();
              });
              // }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              // setTimeout(() => {
              //     const dataUpdate = [...state];
              //     const index = oldData.tableData.id;
              //     dataUpdate[index] = newData;
              editRow(newData).then(() => {
                // console.log(`newData+++++++++>`,newData);
                resolve();
              });

              // }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              // setTimeout(() => {
              //     const dataDelete = [...data];
              //     const index = oldData.tableData.id;
              //     dataDelete.splice(index, 1);
              //     setData([...dataDelete]);
              deleteRow(oldData).then(() => {
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
