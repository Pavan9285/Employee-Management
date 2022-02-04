import { useState } from 'react';

export default function AddEmployee() {

    const API = 'http://localhost:5000'

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
    })

    const [posted, setPosted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/register`, {
            method: 'post',
            body: JSON.stringify({
                code: employee.code,
                name: employee.name,
                departmet: employee.departmet,
                gender: employee.gender,
                bod: employee.bod,
                joining_date: employee.joining_date,
                prev_experience: employee.prev_experience,
                salary: employee.salary,
                address: employee.address
            }),
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => {
            return res.json()
        }).then(json => {
            if (json.errors) return;
            setPosted(true);

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

            setTimeout(() => {
                setPosted(false);
            }, 3000)
        })
    }

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value
        })
    }

    const dStyle = {
        display: 'grid',
        justifyContent: 'center'
    }

    const successStyle = {
        backgroundColor: 'green',
        color: 'yellow'
    }

    return (
        <div className='text-center' style={dStyle}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend><h3 style={{ color: 'orange' }}>Add Employee</h3></legend>
                    {posted && <div style={successStyle}>Employee register successfully!</div>}
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
                            value="male" name="gender" checked={employee.gender == "male"} />
                        <span>Male</span>
                        <input type="radio" onChange={handleChange}
                            value="female" name="gender" checked={employee.gender == "female"} />
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