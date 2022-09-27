import axios from "axios";
import { useState } from "react";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    EmpID: "",
    EmpName: "",
    EmpEmail: "",
    MgnID: "",
  });
  const handleFormSubmit = async (e) => {
    let response = await axios.post("http://localhost:3004/posts", formData);

    if (response) {
      alert("data submitted successfully");
    } else {
      alert("something went wrong");
    }
    setFormData({
      EmpID: "",
      EmpName: "",
      EmpEmail: "",
      MgnID: "",
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="margin-left">Skill-Matrix</h1>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Employee ID
            </label>
            <input
              type="employee Id"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="search by EmpID"
              value={formData.EmpID}
              onChange={(e) =>
                setFormData({ ...formData, EmpID: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Employee Name
            </label>
            <input
              type="emp Name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Please insert Employee Name"
              value={formData.EmpName}
              onChange={(e) =>
                setFormData({ ...formData, EmpName: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Manager ID
            </label>
            <input
              type="manager ID"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="please insert Manager Id"
              value={formData.MgnID}
              onChange={(e) =>
                setFormData({ ...formData, MgnID: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Employee Email
            </label>
            <input
              type="emp Email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Please insert Employee Email"
              value={formData.EmpEmail}
              onChange={(e) =>
                setFormData({ ...formData, EmpEmail: e.target.value })
              }
            />
          </div>
          <div class="mb-7">
            <button
              type="button"
              class="btn btn-primary btn-lg"
              onClick={handleFormSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
