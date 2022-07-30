import React from "react";
import "./settings.css";
import Profile from "./Profile";
import SideBar from "./SideBar";
import Password from "./Password";
import Email from "./Email";
import CreditCard from "./CreditCard";
import Billing from "./Billing";
import Policies from "./Policies";
import Crypto from "./Crypto";
const Settings = () => {
  return (
    <section className="profile_page_section">
      <div className="custom_container">
        <div className="profile_page_section_main">
          <div className="profile_page_main_heading">
            <h6>Account Settings</h6>
          </div>
          <div className="inner_container">
            <div className="pofile_page_main_box">
              <SideBar />
              <div className="profile_tabs_data_section">
                <Profile />
                <Password />
                <Email />
                <CreditCard />
                <Crypto />
                <Billing />
                <Policies />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
