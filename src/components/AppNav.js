import './AppNav.css'

import axios from 'axios';
import { Link } from "react-router-dom";

const AppNav = (props) => {

    const handleLogOut = () => {
            axios.post("http://akademia108.pl/api/social-app/user/logout")
            .then((req)=>{
                console.log(req);
                if (req.data.message) {
                    props.setUser(null);
                    localStorage.setItem('user', null);
                }
                
            })
            .catch ((error) => {
                console.error(error);
            });
        
    }

    return (
        <nav className="mainNav">
            <ul>
                <li>                
                    <Link to="/">Home</Link>              
                </li>
                {!props.user && <li>
                    <Link to="/login">Login</Link>              
                </li>}
                {!props.user && <li>
                    <Link to="/signup">Sign Up</Link>              
                </li>}
                {props.user && <li>
                    <Link to="/" onClick={handleLogOut}>Log out</Link>              
                </li>}
            </ul>
        </nav>
    )
}


export default AppNav;