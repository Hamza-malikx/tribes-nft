import React, { useState } from "react";
import styles from "./library.module.css";
import searchIcon from "../../assets/icons/emojione_magnifying-glass-tilted-left (1).png";
import filterIcon from "../../assets/icons/mono-icons_filter.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./library.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import img from "../../assets/images/shirtless-zombies-pack-3d-model-low-poly-rigged-fbx-ma-unitypackage-uasset 2.png";
import { Link } from "react-router-dom";
const Library = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropDownHandler = () => {
    dropdown === false ? setDropdown(true) : setDropdown(false);
  };
  const [age, setAge] = React.useState("");
  const [age1, setAge1] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event: SelectChangeEvent) => {
    setAge1(event.target.value);
  };
  return (
    <div className={styles.library}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search by Name" />
          <img src={searchIcon} alt="" className={styles.searchIcon} />
          <img
            src={filterIcon}
            alt=""
            className={styles.filterIcon}
            onClick={dropDownHandler}
          />
          {dropdown === true ? (
            <>
              <div className={`${styles.dropdown} libraryDropDown`}>
                <Tabs
                  defaultActiveKey="category"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="category" title="Category">
                    <form className="lib">
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
                  </Tab>
                  <Tab eventKey="rating" title="Rating"></Tab>
                  <Tab eventKey="platform" title="Platform"></Tab>
                  <Tab eventKey="purchaseDate" title="Purchase Date"></Tab>
                </Tabs>
              </div>
            </>
          ) : null}
        </div>
        <div className={styles.storage}>
          Want more storage?
          <Link to="/cloud-storage">Try our Cloud Storage </Link>
        </div>
      </div>
      <div className={`${styles.filterWrapper} filterWrapper`}>
        <Select
          value={age}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChange}
        >
          <MenuItem value="">
            <div className={styles.dropDownContentWrapper}>
              <em>All Assets(5)</em>
              {/* <img src={downAngle} alt="" /> */}
            </div>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <div className="secondSelect">
          <label htmlFor="">Sort by: </label>
          <Select
            value={age1}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            onChange={handleChange1}
          >
            <MenuItem value="">
              <div className={styles.dropDownContentWrapper}>
                <em>Alphabetical</em>
                {/* <img src={downAngle} alt="" /> */}
              </div>
            </MenuItem>
            <MenuItem value={10}>Ascending</MenuItem>
            <MenuItem value={20}>Descending</MenuItem>
          </Select>
        </div>
      </div>
      <div className={styles.maps}>
        <ul>
          <li>
            <img src={img} alt="" />
            <h6>Scream Studios</h6>
            <h5>Shirtless Zombies</h5>
            <h4>Purchased Today</h4>
          </li>
          <li>
            <img src={img} alt="" />
            <h6>Scream Studios</h6>
            <h5>Shirtless Zombies</h5>
            <h4>Purchased Today</h4>
          </li>
          <li>
            <img src={img} alt="" />
            <h6>Scream Studios</h6>
            <h5>Shirtless Zombies</h5>
            <h4>Purchased Today</h4>
          </li>
          <li>
            <img src={img} alt="" />
            <h6>Scream Studios</h6>
            <h5>Shirtless Zombies</h5>
            <h4>Purchased Today</h4>
          </li>
          <li>
            <img src={img} alt="" />
            <h6>Scream Studios</h6>
            <h5>Shirtless Zombies</h5>
            <h4>Purchased Today</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Library;
