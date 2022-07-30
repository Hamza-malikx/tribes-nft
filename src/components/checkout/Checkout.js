import React, { useState } from "react";
import styles from "./checkout.module.css";
import tick from "../../assets/images/discountGreenTick.png";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
const Checkout = () => {
  const [btnState, setBtnState] = useState(false);
  const creditHandler = () => {
    setBtnState(false);
  };
  const paypalHandler = () => {
    setBtnState(true);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutHeroWrapper}>
        <div className={styles.paymentOptionWrapper}>
          <h5>Payment Options:</h5>
          <div className={styles.paymentBtnWrapper}>
            <button
              className={btnState === false ? `${styles.activeTab}` : null}
              onClick={creditHandler}
            >
              Credit
            </button>
            <button
              className={
                btnState === true
                  ? `${styles.activeTab}`
                  : `${styles.paypalBtn}`
              }
              onClick={paypalHandler}
            >
              PayPal
            </button>
          </div>
        </div>
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            centered
            className="checkoutModal"
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h2>How Much Credit Would You Like to Add?</h2>
              <div className="modalBtnWrap">
                <button>$5</button>
                <button>$10</button>
                <button>$20</button>
                <button>$50</button>
                <button>$100</button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button variant="secondary" onClick={handleClose}>
                Close
              </button>
              <button variant="primary" onClick={handleClose}>
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className={styles.accountCredit}>
          <h5>Account Credit:</h5>
          <input type="text" placeholder="" />
          <div className={styles.accountCreditBtnWrapper}>
            <span>Apply</span>
            <button onClick={handleShow}>Add Credit</button>
          </div>
        </div>
      </div>
      {btnState === false ? (
        <>
          <div className={styles.cardsInfo}>
            <div className={styles.cardsInfoInner}>
              <label htmlFor="Card Holder">Card Holder</label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="Card Number">Card Number</label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="exp">Exp. Date</label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="Cvv">CVV</label>
              <br />
              <input type="text" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.paypalInfo}>
            <div className={styles.paypalInfoInner}>
              <button>Link PayPal</button>
            </div>
          </div>
        </>
      )}

      <div className={styles.line}></div>
      <div className={styles.discount}>
        <h5>Discount Code:</h5>
        <div className={styles.applyWrap}>
          <input type="text" />
          <span>Apply</span>
        </div>
        <div className={styles.applyBelowWrap}>
          <div className={styles.leftTable}>
            <div className={`${styles.rows} ${styles.rowsItem}`}>
              <div className={styles.rowsLeft}>
                <div className={styles.leftITems}>Items</div>
              </div>
              <div className={styles.rowsRight}>
                <div className={styles.rightItems}>
                  <div className={styles.rightItemsName}>Shirtless Zombies</div>
                  <div className={styles.rightItemsPrice}>$15.99</div>
                </div>
                <div className={styles.rightItems}>
                  <div className={styles.rightItemsName}>Shirtless Zombies</div>
                  <div className={styles.rightItemsPrice}>$15.99</div>
                </div>
              </div>
            </div>
            <div className={styles.rows}>
              <div className={styles.rowsLeft}>Total before Tax:</div>
              <div className={styles.rowsRightOth}>$15.99</div>
            </div>
            <div className={styles.rows}>
              <div className={styles.rowsLeft}>Estimated Tax:</div>
              <div className={styles.rowsRightOth}>$15.99</div>
            </div>
            <div className={styles.rows}>
              <div className={styles.rowsLeft}>Estimated Total:</div>
              <div className={styles.rowsRightOth}>$15.99</div>
            </div>
            <div className={styles.rows}>
              <div className={styles.rowsLeft}>Discount:</div>
              <div className={styles.rowsRightOth}>10% of order*</div>
            </div>
            <div className={styles.rows}>
              <div className={styles.rowsLeft}>Final Amount Due:</div>
              <div className={styles.rowsRightOth}>$15.99</div>
            </div>
          </div>
          <div className={styles.rightDiscount}>
            <h6>Applied Discount Code(s):</h6>
            <div className={styles.rightDiscountWrapper}>
              <div className={styles.rightDiscountContent}>
                <p>Tribal321new</p>
                <p>10% off</p>
              </div>
              <div className={styles.rightDiscountIcon}>
                <img src={tick} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.paymentBtnWrap}>
          <button className={styles.placeOrderBtn}>Place order</button>
          <button className={styles.cancelBtn}>
            Cancel or Continue Shopping
          </button>
        </div>
        <div className={styles.storage}>
          Want more storage?
          <Link to="/cloud-storage">Try our Cloud Storage </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
