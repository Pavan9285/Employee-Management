import { useEffect, useState } from "react";

export default function Employees() {
    const API = 'http://localhost:5000';

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetch(`${API}/employees`, {
            method: 'get',
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => {
            return res.json();
        }).then(json => {
            if (json.errors) return;
            setEmployee(json);
        })
    }, [])

    // console.log(employee);


    return (
        <div>
            <h5>Details</h5>
            <table border="1" style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody>
                    {employee && employee.map(e => {
                        return <tr key={e.id}>
                            <td>{e.code}</td>
                            <td>{e.name}</td>
                            <td>{e.departmet}</td>
                            <td>{e.gender}</td>
                            <td>{e.bod}</td>
                            <td>{e.joining_date}</td>
                            <td>{e.prev_experience}</td>
                            <td>{e.salary}</td>
                            <td>{e.address}</td>
                            <td>Edit</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div >

    )
}