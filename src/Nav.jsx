import "./css/navbar/navbar.css";

function Nav() {
    return (
        <nav className="navbar">
            <ul className="navbar__menu nav container">
                <li className="nav__item nav-item">
                    <a className="nav-link active" href="#">Main</a>
                </li>
                <li className="nav__item nav-item">
                    <a className="nav-link" href="#">Kinds of honey</a>
                </li>
                <li className="nav__item nav-item">
                    <a className="nav-link" href="#">Callback</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;