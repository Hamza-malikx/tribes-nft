import React from "react";
import "../LoginProcess.css";
import loginverify from "../../../assets/images/verify.png";
import { Link } from "react-router-dom";
const LoginStepFour = () => {
  return (
    <>
      <div class="verification_step_four_section">
        <div class="verification_step_four_container">
          <div class="verification_step_four_figure">
            <img src={loginverify} />
          </div>
          <div class="verification_step_four_heading">
            <p>Congratulations</p>
            <span>
              Your 2-Step Verification process is successfully completed
            </span>
          </div>

          <div class="verification_step_four_btn">
            <Link to="/dashboard">Continue to Dashboard</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginStepFour;
