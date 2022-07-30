import React from "react";
import "../LoginProcess.css";
import { Link } from "react-router-dom";
const LoginStepOne = () => {
  return (
    <>
      <div class="verification_step_one_section">
        <div class="custom_container">
          <div class="verification_step_one_box">
            <p>Set up 2-Step Verification to protect your device.</p>
            <div class="verification_step_one_btn">
              <Link to="/login">Not Now</Link>
              <Link to="/loginsteptwo">Set Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginStepOne;
