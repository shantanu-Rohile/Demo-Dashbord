import React, { useState } from 'react'
import Form from './form'
import './Comments.css'

export default function Comment() {
    let[comments,setComment]=useState([{
        fullName:"Rohan",
        taskName:"Cleaning",
        datandtime:"2025-01-16T11:59"
    }])

    let addNewComments=(comment)=>{
         setComment((currData)=>[...currData,comment])
         console.log("Added new Comments")
    }
  return (
    <div>
       <Form addNewComments={addNewComments}/>
       <hr />
       {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span><strong>Name:</strong> {comment.fullName}</span>
          <br />
          <span><strong>Task:</strong> {comment.taskName}</span>
          <br />
          <span><strong>Date & Time:</strong> {comment.datandtime}</span>
          <br />
        </div>
      ))}
    </div>
  )
}
