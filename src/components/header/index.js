import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
  state = {
    isMenuClick: false
  };

  menuToggle = () => {
    this.setState({ isMenuClick: !this.state.isMenuClick });
  };

  render() {
    return (
      <header className="row">
        <div className="offset-by-one ten columns">
            <h1 className="logo"><b>SAMUEL ESHUN</b></h1>
            </div>

        <nav >
                <ul className="">
                    {/* <li><Link to="/">Home</Link> </li> */}
                    <li> <Link to="/about">About Me</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    {/* <li><Link to="/work">Blog</Link></li> */}
                    {/* <li><Link to="/work">Resume</Link></li> */}
                </ul>
        </nav>
        </header>
    );
  }
}

export default Header;
