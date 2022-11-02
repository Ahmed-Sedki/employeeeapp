import React from 'react'

export default function Employee({ employee, handleRemove, setSelectedEmployee }) {
const handleSelectedEmployee = (emp) => {
    setSelectedEmployee(emp);
}
    return (
        <div key={employee.id}>
            {employee.firstName} {employee.lastName}
            <button onClick={() => handleRemove(employee.id)} 
            className="btn btn-danger">Remove</button>
            <button onClick={() => handleSelectedEmployee(employee)}
            className="btn btn-primary">Select</button>


        </div>
    )
}
