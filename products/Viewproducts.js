import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Viewproducts = () => {
  const currentLogin = JSON.parse(localStorage.getItem("logged"));

  const navigate = useNavigate();
  const localData = JSON.parse(
    localStorage.getItem(`${currentLogin.firstName} product`) || "[]"
  );
  console.log(localData);
  const [del, setDel] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const deleteData = localData.filter((data) => data.id !== id);
        setDel(deleteData);
        localStorage.setItem(
          `${currentLogin.firstName} product`,
          JSON.stringify(deleteData)
        );
      }
    });
  };

  return (
    <div>
      <h1>
        heoo
        <button className="btn btn-success" onClick={() => navigate("/add")}>
          Add
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => navigate("/dashboard")}
        >
          DashBoard
        </button>
      </h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {localData.length > 0 ? (
            localData.map((e) => (
              <tr>
                <th scope="row">{e.id}</th>
                <td>{e.productName}</td>
                <td>{e.details}</td>
                <td>{e.price}</td>

                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate(`update/${e.id}`)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <>
              <h1 className="text-center text-danger">no data found</h1>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Viewproducts;
