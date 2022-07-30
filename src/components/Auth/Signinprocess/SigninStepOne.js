import React from "react";
import "../SigninProcess.css";
import { Link } from "react-router-dom";
const SigninStepOne = () => {
  return (
    <>
      <div class="verification_step_five_section">
        <div class="verification_step_five_container">
          <div class="verification_step_five_heading">
            <span>
              If you want to set up 2-Step Verification later it will be
              available through your account settings.{" "}
            </span>
          </div>

          <div class="verification_step_five_btn">
            <a>Continue to Dashboard</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninStepOne;
