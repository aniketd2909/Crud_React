import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import EmployeeList from "./Components/EmployeeList/EmployeeList";
import UpdateEmployee from "./Components/UpdateEmployee/UpdateEmployee";
import AddEmployee from "./Components/AddEmployee/AddEmployee";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/editEmployee/:id" element={<UpdateEmployee />}></Route>
          <Route path="/addEmployee" element={<AddEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
