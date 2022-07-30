import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./cart.module.css";
import zombies from "../../assets/images/shirtless-zombies-pack-3d-model-low-poly-rigged-fbx-ma-unitypackage-uasset 2.png";
import avengers from "../../assets/images/avengersheader 1.png";
import { Link } from "react-router-dom";
const Cart = () => {
  const history = useHistory();
  const contShoppingHandler = () => {
    history.push("/store");
  };
  const checkoutHandler = () => {
    history.push("/checkout");
  };
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeroWrap}>
        <h3>Shopping Cart</h3>
        <div className={styles.btnWrap}>
          <button onClick={contShoppingHandler}>Continue Shopping</button>
          <button onClick={checkoutHandler}>Checkout</button>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.tableWrap}>
          <div className={styles.tableHeader}>
            <div className={styles.items}>Items</div>
            <div className={styles.restCols}>Software Used</div>
            <div className={styles.restCols}>Price</div>
            <div className={styles.restCols}>Product Details</div>
          </div>
          <div className={styles.tableBody}>
            <div className={styles.tableBodyRow}>
              <div className={styles.items}>
                <div className={styles.itemsWrapper}>
                  <img src={zombies} alt="" />
                  <div className={styles.itemsRight}>
                    <div>
                      <h6>Shirtless Zombies</h6>
                    </div>
                    <div className={styles.actions}>
                      <div className={styles.delete}>delete</div>
                      <div className={styles.addToWishlist}>
                        Add to Wishlist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.restCols}>
                <h6>Blender</h6>
              </div>
              <div className={styles.restCols}>
                <p>$15.99</p>
              </div>
              <div className={styles.restCols}>
                <p>Digital</p>
              </div>
            </div>
            <div className={styles.tableBodyRow}>
              <div className={styles.items}>
                <div className={styles.itemsWrapper}>
                  <img src={zombies} alt="" />
                  <div className={styles.itemsRight}>
                    <div>
                      <h6>Shirtless Zombies</h6>
                    </div>
                    <div className={styles.actions}>
                      <div className={styles.delete}>delete</div>
                      <div className={styles.addToWishlist}>
                        Add to Wishlist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.restCols}>
                <h6>Blender</h6>
              </div>
              <div className={styles.restCols}>
                <p>$15.99</p>
              </div>
              <div className={styles.restCols}>
                <p>Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.totalAndTopPickWrap}>
        <div className={styles.totalAndTopPickWrapLeft}>
          <div className={styles.totalAndTopPickWrapLeftRow}>
            <div>
              <h6>Subtotals</h6>
            </div>
            <div>
              <h6>$35.98</h6>
            </div>
          </div>
          <div className={styles.totalAndTopPickWrapLeftRow}>
            <div>
              <h6>Discount</h6>
              <h5>10% of order*</h5>
            </div>
            <div>
              <h6>Applied</h6>
            </div>
          </div>
          <div className={styles.totalAndTopPickWrapLeftRow}>
            <div>
              <h6>Estimated Total</h6>
            </div>
            <div>
              <h6>$35.98</h6>
            </div>
          </div>
        </div>
        <div className={styles.totalAndTopPickWrapRight}>
          <h5>Top Picks For You</h5>
          <div className={styles.topPickWrap}>
            <div className={styles.topPickCards}>
              <img src={avengers} alt="" />
              <div className={styles.topPickCardsContentWrap}>
                <p>Avenger Characters Package</p>
                <p>$29.95</p>
              </div>
            </div>
            <div className={styles.topPickCards}>
              <img src={avengers} alt="" />
              <div className={styles.topPickCardsContentWrap}>
                <p>Avenger Characters Package</p>
                <p>$29.95</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.storage}>
        Want more storage?
        <Link to="/cloud-storage">Try our Cloud Storage </Link>
      </div>
    </div>
  );
};

export default Cart;
