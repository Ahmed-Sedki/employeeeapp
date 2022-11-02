import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

function EmployeeUpdate() {
    const {
        employees,
        setList,
        selectedEmployee,
        setSelectedEmployee
    } = useContext(AppContext);
    const handleChange = (e) => {
        setSelectedEmployee({
            ...selectedEmployee,
            [e.target.name] : e.target.value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();     
        setList([
            ...employees.filter(emp => emp.id !== selectedEmployee.id),
            selectedEmployee
        ])

    }
    return (
        <div>

            <h3>EmployeeUpdate</h3>
            <p>
                {JSON.stringify(selectedEmployee)}
            </p>
            <form onSubmit={handleSubmit}>
                <input id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    value={selectedEmployee?.firstName}
                    type="text"
                    placeholder='First Name'
                />
                <input id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={selectedEmployee?.lastName}
                    type="text"
                    placeholder='Last Name'
                />
                <button type='submit' className="btn btn-primary">Update</button>
            </form>

        </div>
    )
}

export default EmployeeUpdate