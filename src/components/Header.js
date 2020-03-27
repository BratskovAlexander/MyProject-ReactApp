import React from "react";
import Button from '@material-ui/core/Button';

function Header() {
  return (
    <>
      <div className="header">
        <div>LOGO</div>
        <nav>
          <ul className="nav-menu">
            <li><Button color="primary">Primary</Button></li>
            <li><Button color="primary">menu</Button></li>
            <li><Button color="primary">about us</Button></li>
            <li><Button color="primary">contacts</Button></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
