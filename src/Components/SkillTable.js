import { useState } from "react";

const SkillTable = () => {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
    console.log(setVal)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The from submited successfully:`)
  }
  console.log(val, "data-");

  return (
    <>
      <div class="d-grid gap-2 col-3 mx-auto">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={() => handleAdd()}
        >
          Add
        </button>
      </div>

      <div>
        {val.map((data, i) => {
          console.log(i);
          return (
            <table class="table">
              <thead>
                <tr value={data} onChange={(e) => handleChange(e, i)}>
                  <th scope="col">#</th>
                  <th scope="col">SkillName</th>
                  <th scope="col">SkillFamily</th>
                  <th scope="col">SelfRating</th>
                  <th scope="col">PrimarySkill</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{i}</th>
                  <td>
                    {" "}
                    <label>Please select a skill family</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="1">MicroSoft</option>
                      <option value="2">Devops</option>
                      <option value="3">Opensource</option>
                    </select>
                  </td>
                  <td>
                    {" "}
                    <label>Please Select a skill</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="1">Windowsa Admin</option>
                      <option value="2">Data Base</option>
                      <option value="3">PL/SQL</option>
                    </select>
                  </td>
                  <td>
                    {" "}
                    <label>Please Select a Rating</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                  <td>
                    {" "}
                    <label>Please select a Primary Skill</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => handleDelete(i)}
                    >
                      <i class="bi bi-trash">Delete</i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
        <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea">Aspirations</label>
      </div>
      <div className="d-grid gap-1 col-2 mx-auto" >
      <button type="button" onChange={(e) => setVal(e.target.value)} class="btn btn-outline-primary">Submit</button>
      </div>
      </div>
      </form>      
    </>
  );
};

export default SkillTable;
