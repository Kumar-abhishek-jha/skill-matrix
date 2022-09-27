import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EmployeeDashBoard = () => {
    const [data,setData]= useState([{}])
    useEffect(()=>{
        getEmployee();
        console.log(data);
    },)
    const getEmployee = async()=>{
        await axios.get("http://localhost:3004/posts").then((res)=>setData(res.data));
    };
  
  return (
    <div>
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">SkillFamily</th>
      <th scope="col">SkillName</th>
      <th scope="col">SelfRating</th>
      <th scope="col">PrimarySkill</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody> 
{
    data & data.map((employee)=>{
        return(
            <tr>
            <th scope="row">1</th>
            <td>  </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        )
    })
}
   

  </tbody>
</table>
    </div>
  )
}

export default EmployeeDashBoard
