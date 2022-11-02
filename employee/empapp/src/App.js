import { useContext, useState } from "react";
//import Counter from "./components/counter/Counter";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
// EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeList from "./components/employeeList/EmployeeList";
import EmployeeUpdate from "./components/employeeUpdate/EmployeeUpdate";
import AppContext from "./context/AppContext";

function App() {
  const { appName, employees, setList, selectedEmployee, setSelectedEmployee } = useContext(AppContext);


  return (
    <div>
      <h1>{appName}</h1>
      <h4 /*id="EmployeeList"*/>
        <EmployeeList />
      </h4>

      <EmployeeAdd />
      <EmployeeUpdate />
    </div>
  );
}

export default App;
