
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CrudData from './Pages/CrudData';
import EmpEdit from './Pages/EmpEdit';
import EmpCreate from './Pages/EmpCreate';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<CrudData/>}/>
      <Route path="/empdata/:empid" element={<EmpEdit/>}/>
      <Route path="/empadd" element={<EmpCreate/>}/>
     </Routes>
    </div>
  );
}

export default App;
