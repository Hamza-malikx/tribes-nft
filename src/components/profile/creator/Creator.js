import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./creator.module.css";
import profile from "../../../assets/images/Profile Pic.png";
import uploadIcon from "../../../assets/icons/ant-design_upload-outlined.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Rating from "@mui/material/Rating";
import "./creator.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Creator = () => {
  const [totalUsers, setTotalUsers] = useState(true);
  const [state, setState] = useState({
    opacity: {
      uv: 1,
      pv: 1,
    },
  });
  const handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = state;

    setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = state;

    setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };
  const { opacity } = state;
  const navigate = useHistory();
  const clickHandler = () => {
    navigate.push("/profile");
  };
  const data = [
    {
      name: "January",
      downloads: 2400,
    },
    {
      name: "February",
      downloads: 1398,
    },
    {
      name: "March",
      downloads: 9800,
    },
    {
      name: "April",
      downloads: 3908,
    },
    {
      name: "May",
      downloads: 4800,
    },
    {
      name: "June",
      downloads: 3800,
    },
    {
      name: "July",
      downloads: 4300,
    },
  ];
  const navigateToPublish = () => {
    navigate.push("/publish");
  };
  return (
    <div className={styles.creator}>
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
              <a href="https://www.tribalnetwork.org">View Portfolio</a>
              <button onClick={clickHandler}>Switch to Shopper Account</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.analytics}>
        <div className={styles.analyticsWrapper}>
          <div className={styles.analyticsLeft}>
            <div className={styles.downloadAnalyticsWrapper}>
              <h2>Download Analytics</h2>
              <div className={styles.tab}>
                <Tabs
                  defaultActiveKey="asset1"
                  id="uncontrolled-tab-example"
                  className=""
                >
                  <Tab eventKey="asset1" title="Asset 1">
                    <div>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          data={data}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <Legend
                            verticalAlign="top"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            height={36}
                            align={"right"}
                            iconType={"diamond"}
                          />

                          <CartesianGrid vertical={false} horizontal={false} />
                          <XAxis
                            dataKey="name"
                            axisLine={{ stroke: "#E5E5E5", strokeWidth: 1 }}
                            tick={{ fill: "#fff" }}
                          />
                          <YAxis
                            axisLine={{ stroke: "#E5E5E5", strokeWidth: 1 }}
                            tickLine={true}
                            tick={{ fill: "#fff" }}
                          />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="downloads"
                            stroke="rgba(40, 225, 253, 1)"
                            dot={{ fill: "#000" }}
                            activeDot={{ r: 8 }}
                            strokeWidth={3}
                            strokeOpacity={opacity.downloads}
                            isAnimationActive={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Tab>
                  <Tab eventKey="asset2" title="Asset 2">
                    <div>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          data={data}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <Legend
                            verticalAlign="top"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            height={36}
                            align={"right"}
                            iconType={"diamond"}
                          />

                          <CartesianGrid vertical={false} horizontal={false} />
                          <XAxis
                            dataKey="name"
                            axisLine={{ stroke: "#E5E5E5", strokeWidth: 1 }}
                            tick={{ fill: "#fff" }}
                          />
                          <YAxis
                            axisLine={{ stroke: "#E5E5E5", strokeWidth: 1 }}
                            tickLine={true}
                            tick={{ fill: "#fff" }}
                          />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="downloads"
                            stroke="rgba(40, 225, 253, 1)"
                            dot={{ fill: "#000" }}
                            activeDot={{ r: 8 }}
                            strokeWidth={3}
                            strokeOpacity={opacity.downloads}
                            isAnimationActive={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className={styles.assetData}>
              <h2>Asset Data</h2>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <td>Title</td>
                      <td>Rating</td>
                      <td>Total Downloads</td>
                      <td>Total Donations</td>
                      <td>Total Sales</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Asset 1</td>
                      <td className={styles.rating}>
                        <Rating name="read-only" value={4} readOnly />
                      </td>
                      <td>420</td>
                      <td>-</td>
                      <td>$420</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.uplaodNewAssets} onClick={navigateToPublish}>
              <div className={styles.uplaodNewAssetsWrapper}>
                <h6>Upload New Asset</h6>
                <img src={uploadIcon} alt="" />
              </div>
            </div>
            <div className={styles.teammates}>
              <h2>Teammates</h2>
              <div className={styles.userListInner}>
                <ul>
                  <li>
                    <div className={styles.profileWrapper}>
                      <img src={profile} alt="" />
                      <span className={styles.online}></span>
                    </div>
                    <div>
                      <p className={styles.name}>YOU</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.profileWrapper}>
                      <img src={profile} alt="" />
                      <span className={styles.online}></span>
                    </div>
                    <div>
                      <p className={styles.name}>Carl_The_Snail</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.profileWrapper}>
                      <img src={profile} alt="" />
                      {/* <span className={styles.online}></span> */}
                    </div>
                    <div>
                      <p className={styles.name}>Joey Trey</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
