import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvidor } from './context/AppContext';
//import Counter from './components/counter/Counter';
//import EmployeeAdd from './components/employeeAdd/EmployeeAdd';
//import EmployeeList from './components/employeeList/EmployeeList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvidor>
      <App />
    </AppProvidor>

  </React.StrictMode>
);

