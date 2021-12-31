import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
        <nav>
            <ul>
                <li>
                    <NavLink to='/about'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/around_town'>Around Town</NavLink>
                </li>
                <li>
                    <NavLink to='/rooms'>Rooms</NavLink>
                </li>
                <li>
                    <NavLink to='/reservations'>Reservations</NavLink> 
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;