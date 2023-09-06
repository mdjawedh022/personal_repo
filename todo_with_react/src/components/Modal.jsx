import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ closeModal,onSubmit,defualtValue}) => {
  const [formState,SetFormState]=useState(defualtValue || {
    page:"",
    description:"",
    status:"live",
  })
 const [errors,setError]=useState("")
const validateForm=()=>{
  if(formState.page && formState.description && formState.status){
    setError("")
    return true
  } else {
    let errorFields=[];
     for(const [key,value] of Object.entries(formState)){
      if(!value){
        errorFields.push(key)
      }
     }
     setError(errorFields.join(","));
    return false
  }
}

  const handleChange=(e)=>{
    SetFormState({
      ...formState,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!validateForm()) return
    onSubmit(formState)
    closeModal()
    // console.log(formState);
  }
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();}}
    >
      <div className="modal">
        <form action="">
          <div className="form-group">
            <label htmlFor="page">Page</label>
            <input type="text" name="page" onChange={handleChange} value={formState.page} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" onChange={handleChange} value={formState.description}/>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status" value={formState.status} onChange={handleChange}>
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div  className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
