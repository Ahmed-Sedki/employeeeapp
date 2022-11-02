import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

function EmployeeAdd() {
    const { employees, setList } = useContext(AppContext);

    const handleChange = (e) => {
        setValue({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleClear = () => {
        setValue({
            firstName: "",
            lastName: "",
        });
    };
    const [values, setValue] = useState({
        firstName: "",
        lastName: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        /*console.log({
                firstName : e.target.firstName.value,
                lastName: e.target.lastName.value
            });*/

        setList([
            ...employees,
            {
                id: employees.length + 1,
                ...values,
            },
        ]);
        setValue({
            firstName: "",
            lastName: "",
        });
    };
    return (
        <>
            <h3>Emplyee Add</h3>
            <form onSubmit={handleSubmit}>
                <p className="mb-3" id="firstName">
                    <input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="form-control"
                        aria-describedby="emailHelp"
                        required
                        type="text"
                        onChange={handleChange}
                        value={values?.firstName}
                    />
                </p>

                <p>
                    <input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        className="form-control"
                        aria-describedby="emailHelp"
                        required
                        type="text"
                        onChange={handleChange}
                        value={values?.lastName}
                    />
                </p>
                <button type="submit" className="btn btn-primary btn-group-vertical">
                    save
                </button>
                <p>
                    <button
                        onClick={handleClear}
                        type="button"
                        className="btn btn-danger btn-group-vertical"
                    >
                        clear
                    </button>
                </p>
            </form>
        </>
    );
}

export default EmployeeAdd;
