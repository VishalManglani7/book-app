function Header() {
    return (
    <header>
    <h1>Book App</h1>
    <nav className="menu">
        <a href="#UserAuth" className="headerText">New User Signup</a>
        <a href="#UserAuth" className="headerText">Existing User Login</a>
        <a href="#MyList" className="headerText">My List</a>
        <a href="#UpdateList" className="headerText">Add To List</a>
    </nav>
    </header>
    );
  }
  
  export default Header;