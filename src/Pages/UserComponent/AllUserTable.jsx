import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Suspense } from "react";
import base_url from "../../../Global/template/Baseurl";
import SwalFunction from "../../../Global/template/Swal";
import DeleteUser from "../../../Global/template/SwalDelete";

const customStyle = {
  headRow: {
    style: {
      backgroundColor: "white",
      color: "black",
    },
  },
  headCells: {
    style: {
      fontSize: "0.8rem",
      fontWeight: " ",
      textTransform: "uppercase",
    },
  },
  cells: {
    style: {
      fontSize: "0.8rem",
    },
  },
};

function AllUserTable() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Active/Inactive",
      cell: (row) => 
      (
        <div className=" flex justify-center">
          <Button
            variant="contained"
            style={{
              backgroundColor: row.active
                ? "rgba(34, 197, 94, 0.16)"
                : "rgba(255, 86, 48, 0.16)",
              color: row.active ? "rgb(17, 141, 87)" : "rgb(183, 29, 24)",
              fontSize: "0.6rem",
              fontWeight: "700",
              padding: "3px",
            }}
            size="small"
          >
            {row.active ? "Active" : "Inactive"}
          </Button>
        </div>
      ),
    },

    {
      name: "Actions",
      cell: (row) => actionCell(row),
    },
  ];

  const [records, setRecords] = useState([{}]);
  const [filterrecords, setfilterrecords] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const [variantName, setVariantName] = React.useState([]);
  // const variants = Object.keys(records[0]);

  let accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    axios
      .get(`${base_url}/user/get`, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        setRecords(response.data);
        setfilterrecords(response.data);

        // setVariantName(Object.keys(response.data[0]));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          let axiosError = error.response.data.errorMessage;
          SwalFunction("warning", axiosError);
        } else if (error.request) {
          SwalFunction("error", "Network error. Please try again later.");
        } else {
          SwalFunction(
            "error",
            "An unexpected error occurred. Please try again later."
          );
        }
        navigate("/dashboard");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleFilter = (evt) => {
    const searchQuery = evt.target.value.toLowerCase();

    const newdata = filterrecords.filter((row) =>
      Object.values(row).some(
        (value) => value && value.toString().toLowerCase().includes(searchQuery)
      )
    );

    setRecords(newdata);
  };

  const handleDelete = (row) => {
    DeleteUser(row.id, records, setRecords);
  };

  const handleUpdate = (row) => {
    console.log("Update row with ID:", row.projectCode);

    navigate(`/edituser`, { state: { rowData: row } });
  };

  const actionCell = (row) => (
    <div className=" flex w-full">
      <Button
        variant="outlined"
        color="error"
        style={{
          cursor: "pointer",
          fontSize: "0.55rem",
          color: "blue",
          border: "1px solid blue",
        }}
        onClick={() => handleUpdate(row)}
      >
        Edit
      </Button>
      &nbsp; &nbsp;
      <Button
        variant="outlined"
        color="error"
        style={{ cursor: "pointer", fontSize: "0.6rem", color: "red" }}
        onClick={() => handleDelete(row)}
      >
        Delete
      </Button>
    </div>
  );

  if (loading) {
    return (
      <div
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="flex flex-row gap-2">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  function Loading() {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
        className="border-solid border-black-500 border-2 bg-white p-2 shadow-md border-r-2  mx-4"
      >
        <div class="flex items-center justify-center">
          <div class="rounded-lg bg-gray-200 ">
            <div class="flex">
              <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-gray">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  class="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                class="w-full max-w-[160px] bg-gray-200 pl-2 text-base font-medium outline-0"
                placeholder="Search"
                id=""
                onChange={handleFilter}
              />
              <input
                type="button"
                value="Search"
                class=" p-1.5 rounded-tr-lg rounded-br-lg text-white font-medium  transition-colors"
                style={{ backgroundColor: "#714B67" }}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="border-solid border-black-500 border-2 bg-white p-4 shadow-md border-r-2  mx-4">
        <br />
        {records.length === 0 && !loading && (
          <p>No records found. Please check your data or try again later.</p>
        )}

        <div style={{ backgroundColor: "Whitesmoke" }}>
          <Suspense fallback={<Loading />}>
            {records.length > 0 && (
              <DataTable
                columns={columns}
                data={records}
                customStyles={customStyle}
                pagination
                selectableRowsHighlight
                noHeaderd
                striped
              ></DataTable>
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default AllUserTable;
