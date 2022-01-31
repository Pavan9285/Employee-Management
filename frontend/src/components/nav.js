import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">Employees</Link></li>
                <li><Link to="/add">Add Employee</Link></li>
                <li><Link to="/update">Update Employee</Link></li>
            </ul>
        </div>
    )
}