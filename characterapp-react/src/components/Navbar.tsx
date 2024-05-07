import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">Character App - React</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-link" to="items">Items</Link>
            <Link className="nav-link" to={`character/2`}>Go See Aurynie</Link>
            </div>
        </div>
        </div>
    </nav>
}