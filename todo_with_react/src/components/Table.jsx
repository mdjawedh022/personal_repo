import React from "react";
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
const Table = ({ rows,deleteRow }) => {
  return (
    <div className="table-wrapper">
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
          {rows.map((row, i) => {
          const statusChar=row.status.charAt(0).toUpperCase()+row.status.slice(1)
            return (
            <tr key={i}>
              <td>{row.page}</td>
              <td className="expand">{row.description}</td>
              <td>
                <span className={`label label-${row.status}`}>{statusChar}</span>
              </td>
              <td>
                <span className="actions">
                  <BsFillTrashFill className="delete-btn" onClick={()=>deleteRow(i)} />
                  <BsFillPencilFill />
                </span>
              </td>
            </tr>
         ) })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
