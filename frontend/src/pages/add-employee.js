import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddEmployee() {
    const navigate = useNavigate();
    const { id } = useParams();

    const API = 'http://localhost:5000';

    const [employee, setEmployee] = useState({
        code: "",
        name: "",
        departmet: "Technology",
        gender: "male",
        bod: "",
        joining_date: "",
        prev_experience: "",
        salary: "",
        address: ""
    });

    useEffect(() => {
        if (!id) return;

        fetch(`${API}/employees/${id}`, {
            method: 'get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => {
            return res.json();
        }).then(json => {
            if (json.errors) return;
            setEmployee({
                ...employee,
                code: json[0].code,
                name: json[0].name,
                departmet: json[0].departmet,
                gender: json[0].gender,
                bod: json[0].bod.slice(0, 10),
                joining_date: json[0].joining_date.slice(0, 10),
                prev_experience: json[0].prev_experience,
                salary: json[0].salary,
                address: json[0].address
            });
        })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        !id ? createEmployee() : updateEmployee()
    }

    const doFetch = (url, data, methodName, paramsValue) => {
        fetch(`${API}${url}`, {
            method: `${methodName}`,
            body: JSON.stringify({
                id: paramsValue,
                code: data.code,
                name: data.name,
                departmet: data.departmet,
                gender: data.gender,
                bod: data.bod,
                joining_date: data.joining_date,
                prev_experience: data.prev_experience,
                salary: data.salary,
                address: data.address
            }),
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => {
            if (!res.ok) return;
            return res.json
        }).then(json => {
            if (!json) return;

            // reset the form
            setEmployee({
                code: "",
                name: "",
                departmet: "Technology",
                gender: "male",
                bod: "",
                joining_date: "",
                prev_experience: "",
                salary: "",
                address: ""
            })
            navigate("/");
        })
    }

    const createEmployee = () => {
        doFetch("/register", employee, 'post');
    }

    const updateEmployee = () => {
        doFetch("/register", employee, 'put', `${id}`)
    }

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
    }

    const dStyle = {
        display: 'grid',
        justifyContent: 'center'
    }

    return (
        <div className='text-center' style={dStyle}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h3 style={{ color: 'orange' }}>
                            {!id ? 'Add Employee' : `Edit Employee`}
                        </h3>
                    </legend>
                    <div className="mb-3">
                        <label>Emp Code</label>
                        <input type="text"
                            placeholder="Enter employee code"
                            name="code" value={employee.code}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text"
                            placeholder="Enter employee name"
                            name="name" value={employee.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Departmet</label>
                        <select name='departmet' onChange={handleChange} value={employee.departmet}>
                            <option value="Admin">Admin</option>
                            <option value="Technology">Technology</option>
                            <option value="Accounts">Accounts</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label>Gender</label>
                        <input type="radio" onChange={handleChange}
                            value="male" name="gender" checked={employee.gender === "male"} />
                        <span>Male</span>
                        <input type="radio" onChange={handleChange}
                            value="female" name="gender" checked={employee.gender === "female"} />
                        <span>Female</span>
                    </div>

                    <div className="mb-3">
                        <label>BOD</label>
                        <input type="date"
                            name="bod" value={employee.bod}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Joining Date</label>
                        <input type="date"
                            name="joining_date" value={employee.joining_date}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Prev Experience</label>
                        <input type="number"
                            placeholder="Enter employee Prev Experience"
                            name="prev_experience" value={employee.prev_experience}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Salary</label>
                        <input type="number"
                            placeholder="Enter employee Salary"
                            name="salary" value={employee.salary}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Address</label>
                        <textarea type="text"
                            placeholder="Enter Address" rows="5" cols="40"
                            name="address" value={employee.address}
                            onChange={handleChange}
                        />
                    </div>

                    <button>SUBMIT</button>
                </fieldset>
            </form>
        </div>
    )
}