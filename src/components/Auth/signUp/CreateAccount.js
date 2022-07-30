import React from "react";
import "../LoginSignup.css";
import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login-banner.png";
const CreateAccount = () => {
  return (
    <>
      <div class="home_custom_section_8_main">
        <div class="home_custom_section_8">
          <figure>
            <img src={loginImg} alt="" />
          </figure>
          <div class="home_custom_section_8_body_main">
            <div class="contact-sectionOne-box">
              <div class="contact-sectionOne-box-heading">
                <h3>CREATE YOUR ACCOUNT</h3>
              </div>
              <form
                method="POST"
                action="website/new_contact_us"
                id="quick_contact_new_recap"
                novalidate="novalidate"
              >
                <div class="contac_page_form_content">
                  <div class="contact_us_form_fields">
                    <input
                      type="text"
                      placeholder="Username"
                      required=""
                      name="username"
                    />{" "}
                    <label class="error" generated="true" for="email"></label>
                  </div>
                  <div class="contact_us_form_fields">
                    <input
                      type="text"
                      placeholder="Email"
                      required=""
                      name="email"
                    />{" "}
                    <label for="mobile" generated="true" class="error"></label>
                  </div>
                  <div class="contact_us_form_fields">
                    <input
                      type="text"
                      placeholder="Password"
                      required=""
                      name="password"
                    />{" "}
                    <label for="mobile" generated="true" class="error"></label>
                  </div>
                  <div class="contact_us_form_fields">
                    <div class="contact_us_form_inner_fields">
                      <span>Continent of Residence</span>
                      <select>
                        <option selected>Select Continent</option>
                      </select>
                    </div>
                    <label for="mobile" generated="true" class="error"></label>
                  </div>
                  <div class="signup_single_checkbox_field">
                    <div class="signup_single_checkbox_content">
                      <label class="signup_custom_checkbox_input">
                        <input type="checkbox" />
                        <span class="checked_input_style">
                          <i class="fas fa-check"></i>
                        </span>
                      </label>
                    </div>
                    <p class="checked_text_style">
                      By clicking the box, you are confirming you are 13 years
                      of age or older.
                    </p>
                  </div>
                  <div class="contact_us_form_submit_btn">
                    <Link
                      to="/signinsteptwo"
                      id="submit-recaptcha"
                      type="submit"
                    >
                      Create Account
                    </Link>
                  </div>
                </div>
              </form>
              <div class="login_create_account_btn">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
