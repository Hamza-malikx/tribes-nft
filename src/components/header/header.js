import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/logos/GOS-4-removebg-preview 1.png";
import shop from "../../assets/images/Vector (1).png";
import library from "../../assets/images/fluent_library-20-regular.png";
import group from "../../assets/images/team.png";
import profile from "../../assets/images/carbon_user-avatar.png";
import cart from "../../assets/images/cart.png";
import settings from "../../assets/images/clarity_settings-line.png";
import searchIcon from "../../assets/images/search.png";
const Header = (props) => {
  // console.log(props);
  let location = useLocation();
  const [search, setSearch] = useState(false);
  const [team, setTeam] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const [prof, setProf] = useState(false);
  const [shopp, setShop] = useState(false);
  const [balance, setBalance] = useState(false);
  const locationChecker = () => {
    if (location.pathname === "/team") {
      setTeam(true);
      setSearch(false);
      setDashboard(false);
      setProf(false);
      setShop(false);
      setBalance(false);
    } else if (location.pathname === "/search") {
      setTeam(false);
      setSearch(true);
      setDashboard(false);
      setProf(false);
      setShop(false);
      setBalance(false);
    } else if (location.pathname === "/dashboard") {
      setTeam(false);
      setSearch(false);
      setDashboard(true);
      setProf(false);
      setShop(false);
      setBalance(false);
    } else if (location.pathname === "/Transactions") {
      setTeam(false);
      setSearch(false);
      setDashboard(false);
      setProf(true);
      setShop(false);
      setBalance(false);
    } else if (location.pathname === "/shop") {
      setTeam(false);
      setSearch(false);
      setDashboard(false);
      setProf(false);
      setShop(true);
      setBalance(false);
    } else if (location.pathname === "/nftBalance") {
      setTeam(false);
      setSearch(false);
      setDashboard(false);
      setProf(false);
      setShop(false);
      setBalance(true);
    }
  };
  useEffect(() => {
    locationChecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <div className={`${styles.activeItem} ${styles.shopAct}`}>
                <img src={shop} alt="" />
                <p>Shop</p>
              </div>
            </>
          ) : (
            <Link to="/shop">
              <img src={shop} alt="" />
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
            <Link to="/nftBalance">
              <img src={library} alt="" />
            </Link>
          )}
        </div>
        <div>
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
        </div>
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
          {dashboard === true ? (
            <>
              <div className={`${styles.activeItem} ${styles.activeItemSp}`}>
                <img src={cart} alt="" />
                <p>Dashboard</p>
              </div>
            </>
          ) : (
            <Link to="/dashboard">
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
            <Link to="/Transactions">
              <img src={profile} alt="" />
            </Link>
          )}
        </div>
        <div>
          <Link to="/dashboard">
            <img src={settings} alt="" />
          </Link>
        </div>
        {/* <div className={styles.rightContent}>
          <div></div>
          <div></div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
