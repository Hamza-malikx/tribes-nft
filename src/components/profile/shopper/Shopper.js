import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./shopper.module.css";
import profile from "../../../assets/images/Profile Pic.png";
import zombies from "../../../assets/images/shirtless-zombies-pack-3d-model-low-poly-rigged-fbx-ma-unitypackage-uasset 2.png";
import thor from "../../../assets/images/thors hammer 1.png";
import scythe from "../../../assets/images/bloody-scythe-3d-model-low-poly-obj-fbx 1.png";
import shark from "../../../assets/images/Battlefield-4-Megalodon 1.png";
import barn from "../../../assets/images/Barn 1.png";
const Shopper = () => {
  const navigate = useHistory();
  const clickHandler = () => {
    navigate.push("/profile/creator");
  };
  return (
    <div className={styles.shopper}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroWrapper}>
            <div className={styles.heroLeft}>
              <div className={styles.heroLeftImg}>
                <img src={profile} alt="" />
              </div>
              <div className={styles.heroLeftIntro}>
                <h3>Username</h3>
                <p>Age, Location</p>
                <p>Member Since</p>
                <h6>“Profile bio”</h6>
                <a href="#">EDIT PROFILE</a>
              </div>
            </div>
            <div className={styles.heroRight}>
              {/* <a href="https://www.tribalnetwork.org/viewprofile"> */}
              <a href="https://www.tribalnetwork.org">View Portfolio</a>
              <button onClick={clickHandler}>Switch to Creator Account</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.assets}>
        <h2>Recently Downloaded Assets</h2>
        <div className={styles.assetsWrapper}>
          <div className={styles.assetsWrapperInners}>
            <div>
              <img src={zombies} alt="" />
            </div>
            <p>Scream Studios</p>
            <h5>Shirtless Zombies</h5>
            <h6>Purchased Today</h6>
          </div>
          <div className={styles.assetsWrapperInners}>
            <div>
              <img src={thor} alt="" />
            </div>
            <p>Aesir 3D</p>
            <h5>Mjolnir - Thor’s Hammer</h5>
            <h6>Purchased Today</h6>
          </div>
        </div>
      </div>
      <div className={styles.assets}>
        <h2>Recommended Assets</h2>
        <div className={styles.assetsWrapper}>
          <div className={styles.assetsWrapperInners}>
            <div>
              <img src={scythe} alt="" />
            </div>
            <p>Scream Studios</p>
            <h5>Bloody Scythe</h5>
            {/* <h6>Purchased Today</h6> */}
          </div>
          <div className={styles.assetsWrapperInners}>
            <div>
              <img src={barn} alt="" />
            </div>
            <p>Pangaea Studios</p>
            <h5>Abandoned Farm House</h5>
            {/* <h6>Purchased Today</h6> */}
          </div>
          <div className={styles.assetsWrapperInners}>
            <div>
              <img src={shark} alt="" />
            </div>
            <p>ProtoDesigners</p>
            <h5>Ancient Megalodon</h5>
            {/* <h6>Purchased Today</h6> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopper;
