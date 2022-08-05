import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/logos/GOS-4-removebg-preview 1.png";
import shop from "../../assets/images/mdi_store-outline.png";
import library from "../../assets/images/fluent_library-20-regular.png";
import group from "../../assets/images/team.png";
import profile from "../../assets/images/carbon_user-avatar.png";
import cart from "../../assets/images/cart.png";
import settings from "../../assets/images/clarity_settings-line.png";
import searchIcon from "../../assets/images/search.png";
import Offcanvas from "react-bootstrap/Offcanvas";
const Header = (props) => {
  let location = useLocation();
  const [search, setSearch] = useState(false);
  const [team, setTeam] = useState(false);
  const [cartAg, setCart] = useState(true);
  const [prof, setProf] = useState(false);
  const [shopp, setShop] = useState(false);
  const [balance, setBalance] = useState(false);
  const [settingsState, setSettings] = useState(false);
  const locationChecker = () => {
    // if (location.pathname === "/team") {
    //   setTeam(true);
    //   setSearch(false);
    //   setCart(false);
    //   setProf(false);
    //   setShop(false);
    //   setBalance(false);
    //   setSettings(false);
    // } else
    if (location.pathname === "/search") {
      setTeam(false);
      setSearch(true);
      setCart(false);
      setProf(false);
      setShop(false);
      setBalance(false);
      setSettings(false);
    } else if (location.pathname === "/cart") {
      setTeam(false);
      setSearch(false);
      setCart(true);
      setProf(false);
      setShop(false);
      setBalance(false);
      setSettings(false);
    } else if (location.pathname === "/checkout") {
      setTeam(false);
      setSearch(false);
      setCart(true);
      setProf(false);
      setShop(false);
      setBalance(false);
      setSettings(false);
    } else if (
      location.pathname === "/profile" ||
      location.pathname === "/profile/creator"
    ) {
      setTeam(false);
      setSearch(false);
      setCart(false);
      setProf(true);
      setShop(false);
      setBalance(false);
      setSettings(false);
    } else if (location.pathname === "/store") {
      setTeam(false);
      setSearch(false);
      setCart(false);
      setProf(false);
      setShop(true);
      setBalance(false);
      setSettings(false);
    } else if (location.pathname === "/library") {
      setTeam(false);
      setSearch(false);
      setCart(false);
      setProf(false);
      setShop(false);
      setBalance(true);
      setSettings(false);
    } else if (location.pathname === "/settings") {
      setTeam(false);
      setSearch(false);
      setCart(false);
      setProf(false);
      setShop(false);
      setBalance(false);
      setSettings(true);
    } else {
      setTeam(false);
      setSearch(false);
      setCart(false);
      setProf(false);
      setShop(false);
      setBalance(false);
      setSettings(false);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    locationChecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    handleClose();
  }, [location]);
  return (
    <div className={styles.header}>
      <div className={styles.innerWrapper}>
        <div className={styles.logo}>
          <Link to="/dashboard">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div>
          {shopp === true ? (
            <>
              <div
                className={`${styles.activeItem} 
           
              `}
              >
                <img src={shop} alt="" />
                <p>Store</p>
              </div>
            </>
          ) : (
            <Link to="/store">
              <img src={shop} alt="" className={styles.nonActives} />
            </Link>
          )}
        </div>
        <div>
          {balance === true ? (
            <>
              <div className={`${styles.activeItem} `}>
                <img src={library} alt="" />
                <p>Library</p>
              </div>
            </>
          ) : (
            <Link to="/library">
              <img src={library} alt="" className={styles.nonActives} />
            </Link>
          )}
        </div>
        {/* <div>
          {team === true ? (
            <>
              <div className={styles.activeItem}>
                <img src={group} alt="" />
                <p>Team</p>
              </div>
            </>
          ) : (
            <Link to="/team">
              <img src={group} alt="" className={styles.nonActives} />
            </Link>
          )}
        </div> */}
        <div>
          {search === true ? (
            <>
              <div className={styles.activeItem}>
                <img src={searchIcon} alt="" />
                <p>Search</p>
              </div>
            </>
          ) : (
            <Link to="/search">
              <img src={searchIcon} alt="" className={styles.nonActives} />
            </Link>
          )}
        </div>

        <div>
          {cartAg === true ? (
            <>
              <div className={`${styles.activeItem} ${styles.activeItemCart}`}>
                <img src={cart} alt="" />
                <p>cart</p>
              </div>
            </>
          ) : (
            <Link to="/cart">
              <img src={cart} alt="" className={styles.nonActives} />
            </Link>
          )}
        </div>
        <div>
          {prof === true ? (
            <>
              <div className={`${styles.activeItem}`}>
                <img src={profile} alt="" />
                <p>Profile</p>
              </div>
            </>
          ) : (
            <Link to="/profile">
              <img src={profile} alt="" className={styles.nonActives} />
            </Link>
          )}
        </div>
        <div>
          {settingsState === true ? (
            <>
              <div className={`${styles.activeItem}`}>
                <img src={settings} alt="" />
                <p>Settings</p>
              </div>
            </>
          ) : (
            <Link to="/settings">
              <img src={settings} alt="" className={styles.nonActives} />
            </Link>
          )}
        </div>
        <button className={styles.hamburger} onClick={handleShow}>
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className={styles.logo}>
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className={styles.mobileNavWrapper}>
              <div>
                {shopp === true ? (
                  <>
                    <div
                      className={`${styles.activeItem} 
           
              `}
                    >
                      <img src={shop} alt="" />
                      <p>Store</p>
                    </div>
                  </>
                ) : (
                  <Link to="/store">
                    <img src={shop} alt="" className={styles.nonActives} />
                  </Link>
                )}
              </div>
              <div>
                {balance === true ? (
                  <>
                    <div className={`${styles.activeItem} `}>
                      <img src={library} alt="" />
                      <p>Library</p>
                    </div>
                  </>
                ) : (
                  <Link to="/library">
                    <img src={library} alt="" className={styles.nonActives} />
                  </Link>
                )}
              </div>
              {/* <div>
          {team === true ? (
            <>
              <div className={styles.activeItem}>
                <img src={group} alt="" />
                <p>Team</p>
              </div>
            </>
          ) : (
            <Link to="/team">
              <img src={group} alt="" className={styles.nonActives} />
            </Link>
          )}
        </div> */}
              <div>
                {search === true ? (
                  <>
                    <div className={styles.activeItem}>
                      <img src={searchIcon} alt="" />
                      <p>Search</p>
                    </div>
                  </>
                ) : (
                  <Link to="/search">
                    <img
                      src={searchIcon}
                      alt=""
                      className={styles.nonActives}
                    />
                  </Link>
                )}
              </div>

              <div>
                {cartAg === true ? (
                  <>
                    <div
                      className={`${styles.activeItem} ${styles.activeItemCart}`}
                    >
                      <img src={cart} alt="" />
                      <p>cart</p>
                    </div>
                  </>
                ) : (
                  <Link to="/cart">
                    <img src={cart} alt="" className={styles.nonActives} />
                  </Link>
                )}
              </div>
              <div>
                {prof === true ? (
                  <>
                    <div className={`${styles.activeItem}`}>
                      <img src={profile} alt="" />
                      <p>Profile</p>
                    </div>
                  </>
                ) : (
                  <Link to="/profile">
                    <img src={profile} alt="" className={styles.nonActives} />
                  </Link>
                )}
              </div>
              <div>
                {settingsState === true ? (
                  <>
                    <div className={`${styles.activeItem}`}>
                      <img src={settings} alt="" />
                      <p>Settings</p>
                    </div>
                  </>
                ) : (
                  <Link to="/settings">
                    <img src={settings} alt="" className={styles.nonActives} />
                  </Link>
                )}
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Header;
