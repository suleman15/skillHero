import { Link } from "react-router-dom"


export const Navbar = ()=>{
    return <nav className="flex gap-2">
        <Link to={"/"}>
        <img className="scale-95 w-10 h-10 hover:scale-100 transition-all hover:shadow-md"  src="/logo.jpg" />
        </Link>
        <Link to={"/"}>
        Home
        </Link>
        <Link to={"/courses"}>
        Courses
        </Link>
        <Link to={"/reviews"}>
        Reviews
        </Link>
        <Link to={"/login"}>
        Login
        </Link>
        <Link to={"/signUp"}>
        Sign Up
        </Link>
        
        
        
    </nav>
}