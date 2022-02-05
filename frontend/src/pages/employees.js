import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Employees() {
    const API = 'http://localhost:5000';

    const [employee, setEmployee] = useState([]);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        fetch(`${API}/employees`, {
            method: 'get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => {
            return res.json();
        }).then(json => {
            setEmployee(json);
        })
    }, [deleted])

    const successStyle = {
        backgroundColor: 'green',
        color: 'yellow',
        display: 'inline'
    }

    const handleDelete = (id, name) => {
        const isDelete = window.confirm(`Are you sure you want to delete ${name}?`);
        if (isDelete) {
            fetch(`${API}/employee/delete/${id}`, {
                method: 'delete',
                headers: {
                    "Content-type": "application/json",
                }
            }).then(res => res.json())
                .then(() => {
                    setDeleted(true);
                })
        }
    }

    return (
        <div>
            <h4 style={{ color: 'orange' }}>Details</h4>
            {!employee[0] && <h2 style={successStyle}>No Employee details is present.</h2>}
            <table border="1" style={{ borderCollapse: "collapse", width: '100%' }}>
                <thead>
                    {employee[0] && <tr>
                        <th>Emp code</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Gender</th>
                        <th>BOD</th>
                        <th>Joining Date</th>
                        <th>Prev Exp</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>}
                </thead>
                <tbody>
                    {employee[0] && employee.map(e => {
                        return <tr key={e.id}>
                            <td>{e.code}</td>
                            <td>{e.name}</td>
                            <td>{e.departmet}</td>
                            <td>{e.gender}</td>
                            <td>{parseInt(e.bod.slice(0, 10).split("-").reverse()[0]) + 1}
                                {e.bod.slice(0, 8).split("-").reverse().join("-")}</td>
                            <td>{parseInt(e.joining_date.slice(0, 10).split("-").reverse()[0]) + 1}
                                {e.bod.slice(0, 8).split("-").reverse().join("-")}</td>
                            <td>{e.prev_experience}</td>
                            <td>{e.salary}</td>
                            <td>{e.address}</td>
                            <td>
                                <button style={{ backgroundColor: 'bisque' }}>
                                    <Link to={`/employee/${e.id}/edit`}>&#x270E;</Link>
                                </button>
                                {" "}
                                <button style={{ backgroundColor: 'red' }}
                                    onClick={() => handleDelete(e.id, e.name)}>
                                    &#x2716;
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div >

    )
}