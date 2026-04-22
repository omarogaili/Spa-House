import {  Link } from 'react-router-dom';
export default function Header(){
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/admin-panel'>admin</Link>
            <Link to ='/orders'>Orders</Link>
        </nav>
    )
}