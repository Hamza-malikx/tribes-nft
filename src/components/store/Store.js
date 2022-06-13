import React, { useState } from "react";
import styles from "./store.module.css";
import searchIcon from "../../assets/icons/emojione_magnifying-glass-tilted-left (1).png";
import "./store.css";
import Accordion from "react-bootstrap/Accordion";
import { useHistory } from "react-router-dom";
import "./store.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Barn from "../../assets/images/Barn 1.png";
import zombies from "../../assets/images/shirtless-zombies-pack-3d-model-low-poly-rigged-fbx-ma-unitypackage-uasset 2.png";
import tracktor from "../../assets/images/tractor-min 1.png";
const Store = () => {
  const history = useHistory();
  const [searchResultState, setSearchResultState] = useState(false);
  const searchResultHandler = () => {
    searchResultState === true
      ? setSearchResultState(false)
      : setSearchResultState(true);
  };
  const detailsNavigator = () => {
    history.push("/details");
  };
  return (
    <div className={styles.store}>
      <div className={styles.storeWrapper}>
        <div className={styles.left}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
            <img src={searchIcon} alt="" className={styles.searchIcon} />
          </div>
          <div className="mainAccordian">
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Recently Viewed</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Shop By Category</Accordion.Header>
                <Accordion.Body>
                  <div class="innerAccordian">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <form>
                            <label className="sq-radio">
                              3D
                              <input type="radio" name="radio" />
                              <span className="checkmark"></span>
                            </label>
                          </form>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div class="innerAccordianInner">
                            <form>
                              <label className="sq-radio">
                                Animations
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="sq-radio">
                                Characters
                                <input
                                  type="radio"
                                  name="radio"
                                  onClick={searchResultHandler}
                                />
                                <span className="checkmark"></span>
                              </label>
                              <label className="sq-radio">
                                Environments
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="sq-radio">
                                Vehicles
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                            </form>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <form>
                            <label className="sq-radio">
                              2D
                              <input type="radio" name="radio" />
                              <span className="checkmark"></span>
                            </label>
                          </form>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div class="innerAccordianInner">
                            <form>
                              <label className="sq-radio">
                                Animations
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="sq-radio">
                                Characters
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="sq-radio">
                                Environments
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="sq-radio">
                                Vehicles
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                              </label>
                            </form>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Shop By Recommendation</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className={styles.right}>
          <div className="tabsRec">
            <Tabs
              defaultActiveKey="myStore"
              id="uncontrolled-tab-example"
              className="mb-5"
            >
              <Tab eventKey="myStore" title="My Store">
                <div className={styles.recommendation}>
                  <h2>Recommended</h2>
                  <div className={styles.recommendationInner}>
                    <div className={styles.recommendationInnerWrapper}>
                      <div className={styles.recommendationInnerBlocks}>
                        <h6>Abandoned Farm House</h6>
                        <img src={Barn} alt="" />
                        <div
                          className={styles.recommendationBlockDetailsWrapper}
                        >
                          <p>$39.99</p>
                          <button onClick={detailsNavigator}>Details</button>
                        </div>
                      </div>
                      <div className={styles.recommendationInnerBlocks}>
                        <h6>Shirtless Zombies</h6>
                        <img src={zombies} alt="" />
                        <div
                          className={styles.recommendationBlockDetailsWrapper}
                        >
                          <p>$19.99</p>
                          <button onClick={detailsNavigator}>Details</button>
                        </div>
                      </div>
                      <div className={styles.recommendationInnerBlocks}>
                        <h6>Abandoned Farm House</h6>
                        <img src={Barn} alt="" />
                        <div
                          className={styles.recommendationBlockDetailsWrapper}
                        >
                          <p>$39.99</p>
                          <button onClick={detailsNavigator}>Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.sale}>
                  <h6>On Sale</h6>
                  <div className={styles.saleWrapper}>
                    <div className={styles.saleBlock}>
                      <img src={tracktor} alt="" />
                      <p style={{ textAlign: "left" }}>Red Tractor</p>
                      <p style={{ textAlign: "right" }}>$12.99</p>
                    </div>
                    <div className={styles.saleBlock}>
                      <img src={tracktor} alt="" />
                      <p style={{ textAlign: "left" }}>Red Tractor</p>
                      <p style={{ textAlign: "right" }}>$12.99</p>
                    </div>
                    <div className={styles.saleBlock}>
                      <img src={tracktor} alt="" />
                      <p style={{ textAlign: "left" }}>Red Tractor</p>
                      <p style={{ textAlign: "right" }}>$12.99</p>
                    </div>
                    <div className={styles.saleBlock}>
                      <img src={tracktor} alt="" />
                      <p style={{ textAlign: "left" }}>Red Tractor</p>
                      <p style={{ textAlign: "right" }}>$12.99</p>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="categories" title="Categories"></Tab>
              <Tab eventKey="newReleases" title="New Releases"></Tab>
              <Tab eventKey="news" title="News"></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
