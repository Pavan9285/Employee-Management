import { useState } from 'react';

export default function AddEmployee() {

    const [employee, setEmployee] = useState({
        code: "",
        name: "",
        departmet: "",
        gender: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
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
        e.preventDefault();
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='text-center' style={{ display: 'inline-block' }}>
            <h3>Add Employee</h3>
            <form onSubmit={handleSubmit}>
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
                    <input type="text"
                        placeholder="Enter employee departmet"
                        name="departmet" value={employee.departmet}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Gender</label>
                    <input type="radio" checked onChange={handleChange} value={employee.gender} name="gender" />
                    <input type="radio" onChange={handleChange} value={employee.gender} name="gender" />
                </div>

            </form>
        </div>
    )
}