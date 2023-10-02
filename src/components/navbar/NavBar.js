import './NavBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                home
            </Link>
            <ul>
                <CustomLink to="/about">about</CustomLink>
                <CustomLink to="/projects">projects</CustomLink>
                <CustomLink to="/contact">contact</CustomLink>            
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default NavBar;