import React from 'react'

const Navbar: React.FC = () => {
    return ( <nav>
    <div className="nav-wrapper teal lighten-2">
      <a href="/" className="brand-logo">Typescript + React</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">ToDo</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </div>
  </nav>
    )
}


export default Navbar;