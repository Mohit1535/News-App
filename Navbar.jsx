import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      search:""
  }
}
postSearch(e){
e.preventDefault()
this.props.changeSearch(this.state.search)
this.setState({search:""})
}
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark background sticky-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-light" to="/">News App </NavLink>
            <button
              className="navbar-toggler text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active text-light" aria-current="page" to="/All">All</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active text-light" aria-current="page" to="/Politics">Politics</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active text-light" aria-current="page" to="/Crime">Crime</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active text-light" aria-current="page" to="/Science">Science</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active text-light" aria-current="page" to="/Technology">Technology</NavLink>
                </li>
                <li className="nav-item dropdown ">
                  <NavLink
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >Sports
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item " to="/Cricket">Cricket</NavLink></li>
                    <li><NavLink className="dropdown-item " to="/IPL">IPL</NavLink></li>
                    
                    <li><NavLink className="dropdown-item " to="/Economics">Economics</NavLink></li>
                    
                    <li><NavLink className="dropdown-item " to="/India">India</NavLink></li>
                    
                  </ul>
                </li>

                <li className="nav-item dropdown ">
                  <NavLink
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >Language
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item " to="/Cricket"onClick={()=>this.props.changeLanguage("en")}>English</NavLink></li>
                    <li><NavLink className="dropdown-item " to="/IPL" onClick={()=>this.changeLanguage("hi")}>Hindi</NavLink></li>
                    
                   
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active text-light" aria-current="page" to="/Other">Other</NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={(e)=>{this.postSearch(e)}}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name='search' onChange={(e)=>this.setState({search:e.target.value})}
                />
                <button className="btn btn-outline-success text-light" type="submit">Search</button>
              </form>
              
            </div>
          </div>
        </nav>
      </>
    );
  }
} 