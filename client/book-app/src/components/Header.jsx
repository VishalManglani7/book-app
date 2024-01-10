import { Link } from "react-router-dom";

function Header() {

    return (
    <header>
   
    <h1>Book App</h1>
    <nav className="menu">
        <Link to="/UserAuth" className="headerText">New User Signup</Link>
        <Link to="/UserAuth" className="headerText">Existing User Login</Link>
        <Link to="/MyList" className="headerText">My List</Link>
        <Link to="/UpdateList" className="headerText">Add To List</Link>
    </nav>
    </header>
    );
  }
  
  export default Header;