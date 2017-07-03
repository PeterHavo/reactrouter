import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
  
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" exact to="/" activeStyle={{background:'skyblue'}}>React App</NavLink>
        </div>
        <ul className="nav navbar-nav">
          <li ><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/Kempelen" activeStyle={{background:'#00c4cc'}}>Kempelen Hovoriaca Masina</NavLink></li>
          <li><NavLink to="/teachers" activeStyle={{background:'#00c4cc'}}>Teachers</NavLink></li>
          <li><NavLink to="/courses" activeStyle={{background:'#00c4cc'}}>Courses</NavLink></li>
          {/*<li><NavLink to="/test" activeStyle={{background:'#00c4cc'}}>Test</NavLink></li>*/}

        </ul>
      </div>
    </nav>
 
);







 export default Header;