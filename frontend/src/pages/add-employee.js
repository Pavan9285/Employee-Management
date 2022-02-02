import { useState } from 'react';

export default function AddEmployee() {

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



    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(employee))
        // doFetch({
        //     method: "post",
        //     body: JSON.stringify({
        //         article: {
        //             title: article.title,
        //             body: article.body,
        //             description: article.description,
        //             tagList: article.tags.split(",")
        //         }
        //     })
        // })
    }

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value
        })
    }

    return (
        <div className='text-center' style={{ display: 'grid', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend><h3 style={{ color: 'orange' }}>Add Employee</h3></legend>

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
                        <input type="bod"
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