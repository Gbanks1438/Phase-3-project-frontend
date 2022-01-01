import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
        <nav>
            <ul>
                <li className='nav-links'>
                    <NavLink to='/about'>About Us</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/around_town'>Around Town</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/rooms'>Rooms</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/reservations'>Reservations</NavLink> 
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;