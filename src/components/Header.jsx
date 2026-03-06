import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex gap-10">
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </header>
    )
}

export default Header;