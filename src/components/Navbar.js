import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning navbar_header">
        <div className="container-fluid">
          <a className="navbar-brand text-dark px-5" href="/">
            <h2 className="p-2">Rick&Morty</h2>
          </a>

          <div className="navbar-nav">
           
          <a className="nav-link text-dark" aria-current="page" href="/">
          Search by Input
            </a>
             <a className="nav-link text-dark" aria-current="page" href="/episodes">
             Search by Dropdown
            </a>
            
          </div>
        
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
