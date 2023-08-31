import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Table from './components/Table';

function App() {
  const [modalOpen,setModalOpen]=useState(false)
  const [rows,setRow]=useState([
    {page:"page 1",description:"this is the first page",status:"live"},
    {page:"page 2",description:"this is the second page",status:"draft"},
    {page:"page 3",description:"this is the third page",status:"error"}
  ])
    const handleDelete=(targetI)=>{
setRow(rows.filter((_, i)=>i!==targetI))
    }
    const handleSubmit=(newRow)=>{
 setRow([...rows,newRow])
    }
  return (
    <div className="App">
  <Table rows={rows} deleteRow={handleDelete}/>
  <button className='btn' onClick={()=>setModalOpen(true)}>Add</button>
{modalOpen &&   <Modal closeModal={()=>setModalOpen(false)} onSubmit={handleSubmit}/>}
 

    </div>
  );
}

export default App;
