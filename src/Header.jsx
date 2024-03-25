import "./css/header/header.css";

function Header() {
    return (
        <header className="header container">
            <h1 className="header__title text-primary">Honey from the Bee</h1>
            <p className="header__text">Our apiary produces the best honey in the world</p>
            <button type="button" className="btn btn-primary">Kinds of honey</button>
        </header>
    )
}

export default Header;