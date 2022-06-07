import React from "react";
import "../SigninProcess.css";
import { Link } from "react-router-dom";
import prcessingimg from "../../../assets/images/progress.png";
const SigninStepTwo = () => {
  return (
    <>
      <div class="verification_step_six_section">
        <div class="verification_step_six_container">
          <div class="verification_step_six_heading">
            <p>
              Please verify{" "}
              <Link to="/signinstepthree">TrentJBaker@dayrep.com</Link>{" "}
            </p>
            <span>
              Please check for an email from TOGS and click the link to complete
              setting up your account.
            </span>
          </div>
          <div class="verification_step_six_figure">
            <img src={prcessingimg} />
          </div>
          <div class="verification_step_six_progress_text">
            <p>Waiting for email verification . . .</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninStepTwo;
