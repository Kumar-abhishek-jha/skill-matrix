import React from 'react'
import images from '../Images/nitor.jpg';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
const EmpDetails = () => {
  return (
    <>
    <div>
        <legend>Skill-Matrix</legend>
    </div>
    <div>
    <img src={images} alt="" />
    </div>
    <div>
    <div>
    <form className="SearchID">
          <label htmlFor="EmpID"> Employe ID </label>
          <br></br>
          <input
          className="form-control col-md-5"
            type="text"
            id="EmpID"
            name="EmpID"
            size="100"
            placeholder="Search by EmpID"
          />
        </form>
        <form className="SearchName">
          <label htmlFor="EmpID"> Employe Name </label>
          <br></br>
          <input
           className="form-control col-md-5"
            type="text"
            id="EmpID"
            name="EmpID"
            size="100"
            placeholder="Please Insert Employe Name"
          />
        </form>
        <form className="Manager-ID">
          <label htmlFor="EmpID">Manager ID</label>
          <br></br>
          <input
           className="form-control col-md-5"
            type="text"
            id="EmpID"
            name="EmpID"
            size="100"
            placeholder="Please insert ManagerID"
          />
        </form>
        
    </div>
    </div>
  
    </>
  )
}

export default EmpDetails
