import React, { useState } from "react";
import "../LoginProcess.css";
import { Link } from "react-router-dom";

const LoginStepThree = () => {
  return (
    <>
      <div class="verification_step_three_section">
        <div class="verification_step_three_container">
          <div class="verification_step_three_heading">
            <p>Let’s set up your phone</p>
          </div>
          <div class="verification_step_three_bread_crums">
            <span>Step 2 of 2</span>
          </div>
          <div class="verification_step_three_box">
            <p>Enter the code that was sent to your mobile device</p>
            <form>
              <div class="container1 verification_step_three_input_field">
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
              </div>
              <div class="verification_step_three_btn">
                <button>Resend Code</button>
                <Link to="/loginstepfour">Verify Code</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginStepThree;
