import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal-conatainer">
      <div className="modal">
        <form action="">
          <div className="form-group">
            <label htmlFor="page">Page</label>
            <input type="text" name="page" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
