import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <div className="d-flex " style={{backgroundColor:'aqua', height:'100px'}}>
            <Link to={'/login'} className="mx-5 mt-2 fs-4 fw-bold text-decoration-none text-dark">Login</Link>
            <Link to={'/signup'} className="mx-5 mt-2 fs-4 fw-bold text-decoration-none text-dark">SignUp</Link>
        </div>
    )
}