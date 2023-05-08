import { useContext, useEffect, useState } from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase.config";
import { Catagory } from "../../App";
import { onAuthStateChanged } from "firebase/auth";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Navbar = () => {
  const [users, setUsers] = useContext(Catagory)


  const [signin, setSignin] = useState(false)
  const [cUser, setCuser] = useState({})
  const [active, setActive] = useState("nav_menu");
  const [navbar, setNavbar] = useState(false);



  const Changebackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', Changebackground);
  const [toggleIcon, setToggleIcon] = useState("nav_toggler")
  const navToggle = () => {
    active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

    // toggle animation
    toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCuser(user)
        setSignin(true)
        setUsers(true)
      } else {
        setSignin(false)
        setUsers(false)
      }
    });
  }, [])
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {cUser.displayName}
    </Tooltip>
  );
  return (
    <nav className={navbar ? 'changeNav' : 'nav'}>
      <NavLink to='/' className="nav_brand no-underline text-2xl">Food-Code</NavLink>

      <ul className={active}>
        <li className="nav_item"><NavLink to='/' className="nav_link no-underline text-2xl ">Home</NavLink></li>
        <li className="nav_item"><NavLink to='/blog' className="nav_link no-underline text-2xl ">Blog</NavLink></li>
        <li className="nav_item"> {signin ? <NavLink to='/logout' className="nav_link no-underline text-2xl ">Logout</NavLink> : <NavLink to='/form' className="nav_link no-underline text-2xl ">Login</NavLink>}</li>
        {
          signin && <li className="nav_item"><div>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <div className="nav-img-"><img src={cUser.photoURL} alt="" /></div>
            </OverlayTrigger></div></li>
        }

      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

  );
};


export default Navbar;