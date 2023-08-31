import React from "react";
import "./Table.css";
import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs"
const Table = () => {
  return (
    <div  className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Page</th>
            <th className="expand">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
             <td>Home</td>
             <td>This is the main Page 1</td>
             <td><span className="label label-live">Live</span></td>
             <td><span className="actions">
                <BsFillTrashFill className="delete-btn"/>
                <BsFillPencilFill/>
                </span>
                </td>
            </tr>
            <tr>
             <td>page 2</td>
             <td>This is the main Page 2</td>
             <td><span className="label label-draft">Draft</span></td>
             <td><span className="actions">
                <BsFillTrashFill className="delete-btn"/>
                <BsFillPencilFill/>
                </span>
                </td>
            </tr>
            <tr>
             <td>page 3</td>
             <td>This is the main Page 3</td>
             <td><span className="label label-error">Error</span></td>
             <td><span className="actions">
                <BsFillTrashFill className="delete-btn"/>
                <BsFillPencilFill/>
                </span>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
