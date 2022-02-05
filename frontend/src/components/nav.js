import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <ul className='nav-ul'>
                <li>
                    <NavLink to="/"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "yellow" : "black"
                            }
                        }}
                    >
                        Employees
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/employee/add"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "yellow" : "black"
                            }
                        }}
                    >
                        Add Employee
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}