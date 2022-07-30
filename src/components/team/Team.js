import React, { useState } from "react";
import styles from "./team.module.css";
import "./team.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Dropdown from "react-bootstrap/Dropdown";
import profile from "../../assets/images/profile2.jpg";
import copy from "../../assets/icons/Group (2).png";
import download from "../../assets/icons/Group (3).png";
import add from "../../assets/icons/Add (1).png";
const Team = () => {
  const [count, setCount] = useState(12);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles.team}>
      <div className={styles.usersList}>
        <div className={`${styles.userListWrapper} userListWrapper`}>
          <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="all" title="All">
              <div className={styles.userListInner}>
                <p className={styles.onlineUsers}>ONLINE (3)</p>
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
            </Tab>
            <Tab eventKey="squad" title="Squad"></Tab>
            <Tab eventKey="team1" title="Team 1"></Tab>
          </Tabs>
        </div>
      </div>
      <div className={styles.chatArea}>
        <div className={styles.chatAreaLeft}>
          <div className={styles.upperHeader}>
            <div className={styles.upperHeaderWrapper}>
              <div className={`textStyle ${styles.textStyle}`}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Normal Text
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className={`${styles.middle} middle`}>
                <div className={`fontFam ${styles.fontFam}`}>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Times New Roman
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className={styles.fontSizeCounter}>
                  <span className={styles.minus} onClick={dec}>
                    -
                  </span>
                  <span className={styles.score}>{count}</span>
                  <span className={styles.plus} onClick={inc}>
                    +
                  </span>
                </div>
                <div className={styles.type}>
                  <ul>
                    <li className={styles.bold}>B</li>
                    <li className={styles.italic}>I</li>
                    <li className={styles.underline}>U</li>
                    <li className={styles.a}>A</li>
                  </ul>
                </div>
              </div>
              <div className={styles.actions}>
                <div className={styles.copy}>
                  <img src={copy} alt="" />
                  {/* <i className="fa-solid fa-link"></i> */}
                </div>
                <div className={styles.download}>
                  <img src={download} alt="" />
                </div>
              </div>
              <div className={styles.profWraps}>
                <div className={styles.prof1}>
                  <img src={profile} alt="" />
                </div>
                <div className={styles.prof2}>
                  <img src={profile} alt="" />
                </div>
                <div className={styles.addCircle}>
                  {/* <img src={add} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.chats}>
              <div className={styles.userImg}>
                <img src={profile} alt="" />
              </div>
              <div className={styles.userChat}>
                <p className={styles.userChatData}>
                  Maxime numquam corrupti vel praesentium sunt suscipit saepe ea
                  ut. Omnis nulla quia non. Possimus dignissimos quia deleniti
                  maiores dolore dolores deserunt laborum porro. Nihil rerum
                  dolorem itaque. Eum error nulla reprehenderit laboriosam.
                </p>
                <p className={styles.stamp}>Novemeber 7, 1:25pm</p>
              </div>
            </div>
            <div className={styles.chats}>
              <div className={styles.userImg}>
                <img src={profile} alt="" />
              </div>
              <div className={styles.userChat}>
                <p className={styles.userChatData}>
                  Maxime numquam corrupti vel praesentium sunt suscipit saepe ea
                  ut. Omnis nulla quia non. Possimus dignissimos quia deleniti
                  maiores dolore dolores deserunt laborum porro. Nihil rerum
                  dolorem itaque. Eum error nulla reprehenderit laboriosam.
                </p>
                <p className={styles.stamp}>Novemeber 7, 1:25pm</p>
              </div>
            </div>
            <div className={styles.chats}>
              <div className={styles.userImg}>
                <img src={profile} alt="" />
              </div>
              <div className={styles.userChat}>
                <p className={styles.userChatData}>
                  Maxime numquam corrupti vel praesentium sunt suscipit saepe ea
                  ut. Omnis nulla quia non. Possimus dignissimos quia deleniti
                  maiores dolore dolores deserunt laborum porro. Nihil rerum
                  dolorem itaque. Eum error nulla reprehenderit laboriosam.
                </p>
                <p className={styles.stamp}>Novemeber 7, 1:25pm</p>
              </div>
            </div>
            <div className={styles.chats}>
              <div className={styles.userImg}>
                <img src={profile} alt="" />
              </div>
              <div className={styles.userChat}>
                <p className={styles.userChatData}>
                  Maxime numquam corrupti vel praesentium sunt suscipit saepe ea
                  ut. Omnis nulla quia non. Possimus dignissimos quia deleniti
                  maiores dolore dolores deserunt laborum porro. Nihil rerum
                  dolorem itaque. Eum error nulla reprehenderit laboriosam.
                </p>
                <p className={styles.stamp}>Novemeber 7, 1:25pm</p>
              </div>
            </div>
            <div className={styles.chats}>
              <div className={styles.userImg}>
                <img src={profile} alt="" />
              </div>
              <div className={styles.userChat}>
                <p className={styles.userChatData}>
                  Maxime numquam corrupti vel praesentium sunt suscipit saepe ea
                  ut. Omnis nulla quia non. Possimus dignissimos quia deleniti
                  maiores dolore dolores deserunt laborum porro. Nihil rerum
                  dolorem itaque. Eum error nulla reprehenderit laboriosam.
                </p>
                <p className={styles.stamp}>Novemeber 7, 1:25pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chatAreaRight}>
          <p className={styles.inProject}>In Project</p>
          <ul className={styles.chatAreaRightAllUsers}>
            <li>
              <p className={styles.rightName}>Joey Trey</p>
              <p className={styles.status}>Offline</p>
            </li>
            <li>
              <p className={styles.rightName}>Carl_The_Snail</p>
              <p className={styles.status}>Offline</p>
            </li>
            <li>
              <p className={styles.onRightName}>SassyStacy</p>
              <p className={styles.status}>Online</p>
            </li>
            <li>
              <p className={styles.onRightName}>TheMustardCat</p>
              <p className={styles.status}>Online</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
