function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <img 
            className="img-fluid" 
            src='src/img/chewbacca-nav-bar-icon.png' 
            alt="Chewbacca Logo" 
            style={{ width: '100px', height: '75px' }}
          />
          <div className="title"><h1>The Force</h1></div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
