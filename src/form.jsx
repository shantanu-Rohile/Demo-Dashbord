import React, { useState } from 'react'
import './form.css'
function Form({addNewComments}) {
  let [formData, setFormData]=useState({
    fullName:"",
    taskName:"",
    datandtime:""
  });

  let onHandleChange=((event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setFormData(
      (currData)=>{
      return{
        ...currData,
        [name]:value
      }
      }
    )
  })

  let onChangeSubmit=(()=>{
    if(!formData.fullName ){
      alert("Wrong credentials");
      return;
    }else if(!formData.taskName){
      alert("Wrong credentials");
      return;
    }else if(!formData.datandtime){
      alert("Wrong credentials");
      return;
    }
    console.log("Button is Clicked")
    console.log(formData)
    addNewComments(formData)
    setFormData({
      fullName:"",
      taskName:"",
      datandtime:""
    })
  })
  return (
    <div>
       <h1>Admin Page</h1>
     <label htmlFor="name">Name </label>
     <input type="text" name="fullName" id="name" placeholder='Name of the devotee' value={formData.fullName} onChange={onHandleChange}/>
     <br />
     <br />
     <label htmlFor="task">Task </label>
     <input type="text" name="taskName" id="task" placeholder='Task' value={formData.taskName}  onChange={onHandleChange}/>
     <br />
     <br />
     <label htmlFor="date">Date and Time </label>
     <input type="datetime-local" name="datandtime" id="date" placeholder='Name of the devotee' value={formData.datandtime}  onChange={onHandleChange}/>
     <br />
     <br />
     <button type='submit' onClick={onChangeSubmit}>Submit</button>
    </div>

  )
}

export default Form;
