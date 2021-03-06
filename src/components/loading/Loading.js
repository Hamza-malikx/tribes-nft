import React from "react";
import styles from "./loading.module.css";
import loader from "../../assets/images/loading.gif";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loader} alt="" />
    </div>
  );
};

export default Loading;
