import { NavLink } from "react-router-dom"

export default function Navbar() {


    return (
    <header>
        <h2>Youtube</h2>

        <nav>
            {/* home will be a link */}
            <NavLink to="/"><h3>Home</h3></NavLink>
            
            {/* about will be a link */}
            <NavLink to="/about"><h3>About</h3></NavLink>
        </nav>
    </header>

    )
    
}