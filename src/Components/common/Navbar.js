import { NavLink } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {


    return (
    <header>
        <h2>Youtube</h2>

       
            <NavLink to="/"><h3>Home</h3></NavLink>
            <NavLink to="/about"><h3>About</h3></NavLink>
    
    
    </header>

    )
    
}