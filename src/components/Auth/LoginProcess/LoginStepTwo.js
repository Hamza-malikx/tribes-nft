import React from "react";
import "../LoginProcess.css";
import loginphone from "../../../assets/images/phone.png";
import { Link } from "react-router-dom";
const LoginStepTwo = () => {
  return (
    <>
      <div class="verification_step_two_section">
        <div class="verification_step_two_container">
          <div class="verification_step_two_heading">
            <p>Let’s set up your phone</p>
          </div>
          <div class="verification_step_two_bread_crums">
            <span>Step 1 of 2</span>
          </div>
          <div class="verification_step_two_box">
            <p>Enter the phone number you would like to use</p>
            <form>
              <div class="verification_step_two_input_field">
                <figure>
                  <img src={loginphone} />
                </figure>
                <select>
                  <option></option>
                </select>
                <input type="text" placeholder="mobile number" />
              </div>
              <div class="verification_step_two_option_field">
                <span>How do you want to get codes?</span>
                <div class="verification_step_two_option_field_data_main">
                  <div class="verification_step_two_option_field_data">
                    <input type="radio" />
                    <span>Text Message</span>
                  </div>
                  <div class="verification_step_two_option_field_data">
                    <input type="radio" />
                    <span>Phone Call</span>
                  </div>
                </div>
              </div>
            </form>
            <div class="verification_step_two_btn">
              <Link to="loginstepthree">Next</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginStepTwo;
