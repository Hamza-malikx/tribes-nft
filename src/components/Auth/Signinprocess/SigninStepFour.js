import React from "react";
import "../SigninProcess.css";
import { Link } from "react-router-dom";
import signincomplete from "../../../assets/images/signindone.png";
const SigninStepFour = () => {
  return (
    <>
      <div class="verification_step_eight_section">
        <div class="verification_step_eight_container">
          <div class="verification_step_eight_heading">
            <p>Email Verified </p>
          </div>
          <div class="verification_step_eight_figure">
            <img src={signincomplete} />
          </div>
          <div class="verification_step_eight_btn">
            <Link to="/">Continue to DLinkshboard</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninStepFour;
