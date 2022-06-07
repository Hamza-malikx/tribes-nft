import React from "react";
import "../LoginSignup.css";
import { Link } from "react-router-dom";
import signupimg from "../../../assets/images/login-banner.png";
const Login = () => {
  return (
    <>
      <div class="home_custom_section_8_main">
        <div class="home_custom_section_8">
          <figure>
            <img src={signupimg} />
          </figure>
          <div class="home_custom_section_8_body_main">
            <div class="contact-sectionOne-box">
              <div class="contact-sectionOne-box-heading">
                <h3>LOGIN</h3>
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
                      placeholder="Email"
                      required=""
                      name="email"
                    />{" "}
                    <label class="error" generated="true" for="email"></label>
                  </div>
                  <div class="contact_us_form_fields">
                    <input
                      type="text"
                      placeholder="Password"
                      required=""
                      name="mobile"
                    />{" "}
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
                      Keeped me logged in for 5 days.
                    </p>
                  </div>
                  <div class="contact_us_form_submit_btn">
                    <Link
                      id="submit-recaptcha"
                      type="submit"
                      to="/loginstepone"
                    >
                      {" "}
                      LOGIN
                    </Link>
                  </div>
                </div>
              </form>
              <div class="login_create_account_btn">
                <Link to="/signup">Create An Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
