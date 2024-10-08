import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState({ cliched: !state.cliched });
  };

  const [activeLink, setActiveLink] = useState(null);
  const handleClass = (id) => {
    setActiveLink(id);
  }

  
  return (
    <>
      <nav>
        <a href="index.html">Logo</a>

          <ul id="navbar" className={state.cliched ? "#navbar active" : "#navbar"}>
            <li>
              <Link className={`link ${activeLink === '/' ? 'active' : ''}`} to="/" onClick={() => handleClass('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link className={`link ${activeLink === 'shop' ? 'active' : ''}`} to="/shop" onClick={() => handleClass('shop')}>
                Shop
              </Link>
            </li>
            <li>
              <Link className={`link ${activeLink === 'blog' ? 'active' : ''}`} to="/blog" onClick={() => handleClass('blog')}>
                Blog
              </Link>
            </li>
            <li>
              <Link className={`link ${activeLink === 'about' ? 'active' : ''}`} to="/about" onClick={() => handleClass('about')}>
                About
              </Link>
            </li>
            <li>
              <Link className={`link ${activeLink === 'contact' ? 'active' : ''}`} to="/contact" onClick={() => handleClass('contact')}>
                Contact
              </Link>
            </li>
          </ul>
        <div id="mobile" onClick={handleClick}>
          <i
            id="bar"
            className={state.cliched ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
