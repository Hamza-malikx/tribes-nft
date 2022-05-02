import React from "react";
import styles from "./search.module.css";
import Accordion from "react-bootstrap/Accordion";
import searchIcon from "./fluent_search-48-filled.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./search.css";
import prof from "./Ellipse 72.png";
const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <div className={styles.searchWrapper}>
          <div className={styles.left}>
            <h4>Filters</h4>
            <div className="searchLeftAccordian">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Collection</Accordion.Header>
                  <Accordion.Body>
                    <form>
                      <label className="sq-radio">
                        Crypto Punks
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="sq-radio">
                        Cool Cats NFT
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="sq-radio">
                        Doodles
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="sq-radio">
                        Mutant Ape Yacht Club
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.searchBar}>
              {/* <label for="gsearch">Search Google:</label> */}
              <input type="search" id="gsearch" name="gsearch"></input>
              <img src={searchIcon} alt="" className={styles.searchIcon} />
            </div>
            <div className="tabs">
              <Tabs
                defaultActiveKey="person"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="person" title="Person">
                  <div className={`${styles.content} content`}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className={styles.wrap}>
                            <img src={prof} alt="" />
                            <h6>Peter_the_Anteater #1</h6>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Modi in, temporibus explicabo sed ratione
                          voluptates, odio possimus perferendis similique
                          suscipit iure aliquid ut, provident minima deserunt
                          vero voluptatem vitae distinctio.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Tab>
                <Tab eventKey="assets" title="Assets">
                  <div className={`${styles.content} content`}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className={styles.wrap}>
                            <img src={prof} alt="" />
                            <h6>xys</h6>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Modi in, temporibus explicabo sed ratione
                          voluptates, odio possimus perferendis similique
                          suscipit iure aliquid ut, provident minima deserunt
                          vero voluptatem vitae distinctio.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Tab>
                <Tab eventKey="project" title="Project">
                  <div className={`${styles.content} content`}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className={styles.wrap}>
                            <img src={prof} alt="" />
                            <h6>Peter_the_Anteater #1</h6>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Modi in, temporibus explicabo sed ratione
                          voluptates, odio possimus perferendis similique
                          suscipit iure aliquid ut, provident minima deserunt
                          vero voluptatem vitae distinctio.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
