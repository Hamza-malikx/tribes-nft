import React from "react";
import styles from "./cloudStorage.module.css";
import { useHistory } from "react-router-dom";
const CloudStorage = () => {
  const history = useHistory();
  const clickHandler = () => {
    // history.push("/library");
    history.goBack();
  };
  return (
    <div className={styles.cloudWrapper}>
      <div className={styles.cloudWrapperInner}>
        <h6>Would you like to add cloud storage to you cart?</h6>
        <h6>It’s only $0.99!</h6>
      </div>
      <div className={styles.btnWrappers}>
        <button className={styles.notNow} onClick={clickHandler}>
          Not Now
        </button>
        <button className={styles.purchase}>Purchase</button>
      </div>
    </div>
  );
};

export default CloudStorage;
