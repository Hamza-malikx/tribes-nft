import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./publish.module.css";
import tick from "../../assets/images/tick.png";
import uploadIcon from "../../assets/icons/bx_bx-upload.png";
import googleDriveIcon from "../../assets/icons/whh_googledrive.png";
import dropboxIcon from "../../assets/icons/akar-icons_dropbox-fill.png";
const Publish = () => {
  const [success, setSuccess] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };
  return (
    <div className={styles.publish}>
      {success === true ? (
        <div className={styles.successWrapp}>
          <h3>Success!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src={tick} alt="" />
        </div>
      ) : (
        <>
          <h5>Asset Publishing</h5>
          <form onSubmit={submitHandler}>
            <label htmlFor="title">
              Title: <span>*</span>
            </label>
            <br />
            <input type="text" name="title" />
            <br />
            <label htmlFor="summary">Summary:</label>
            <br />
            <input type="text" name="summary" />
            <br />
            <label htmlFor="description">
              Description: <span>*</span>
            </label>
            <br />
            <textarea name="description" rows={6}></textarea>
            <label htmlFor="monization">
              Monization Method: <span>*</span>
            </label>
            <div className={styles.method}>
              <div className={styles.buttonWrap}>
                <button className={styles.free}>Free</button>
                <button className={styles.pay}>Pay</button>
              </div>
              <img src={tick} alt="" />
            </div>
            <br />
            <label htmlFor="media">
              Media: <span>*</span>
            </label>
            <br />
            <div className={styles.mediaWrap}>
              <img src={uploadIcon} alt="" />
              <img src={googleDriveIcon} alt="" />
              <img src={dropboxIcon} alt="" />
            </div>
            <div className={styles.sellerInformation}>
              <h6>Seller Information</h6>
              <label htmlFor="fullName">
                Full Name: <span>*</span>
              </label>
              <br />
              <input type="text" name="fullName" />
              <br />
              <label htmlFor="email">
                Emails: <span>*</span>
              </label>
              <br />
              <input type="email" name="email" />
              <br />
              <label htmlFor="number">
                Phone Number: <span>*</span>
              </label>
              <br />
              <input type="number" name="fullName" />
              <br />
              <label htmlFor="website">
                Website: <span>*</span>
              </label>
              <br />
              <input type="number" name="website" />
              <br />
              <label htmlFor="socialMedia">
                Social Media: <span>*</span>
              </label>
              <br />
              <input type="number" name="socialMedia" />
              <br />
              <h6>Company Information</h6>
              <label htmlFor="name">
                Name: <span>*</span>
              </label>
              <br />
              <input type="number" name="name" />
              <br />
              <label htmlFor="about/description">About/description:</label>
              <br />
              <textarea name="about/description" rows={6}></textarea>
              <label htmlFor="website">Website:</label>
              <br />
              <input type="text" name="website" />
              <br />
              <label htmlFor="Social Media">Social Media:</label>
              <br />
              <input type="text" name="social Media" />
              <br />
              <h6>Metadata</h6>
              <label htmlFor="tags">
                Tags: <span>*</span>
              </label>
              <br />
              <input type="text" name="tags" />
              <br />
              <label htmlFor="keywords">Tags:</label>
              <br />
              <input type="text" name="keywords" />
              <br />
              <label htmlFor="keywords">Category:</label>
              <br />
              <input type="text" name="category" />
              <br />
            </div>
            <label htmlFor="rInfo">
              Related Information: <span>*</span>
            </label>
            <br />
            <textarea
              name="rInfo"
              rows={6}
              className={styles.relatedInfo}
            ></textarea>
            <button type="submit" className={styles.submit}>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Publish;
