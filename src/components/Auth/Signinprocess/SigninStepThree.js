import React from "react";
import "../SigninProcess.css";
import { Link } from "react-router-dom";

const SigninStepThree = () => {
  return (
    <>
      <div class="verification_step_seven_section">
        <div class="verification_step_seven_container">
          <div class="verification_step_seven_box">
            <p>
              Enter the code that we sent to your email address at
              TrentJBaker@dayrep.com.
            </p>
            <form>
              <div class="container1 verification_step_three_input_field">
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
                <input type="text" className="inputs" maxLength={1} />
              </div>
              <div class="verification_step_seven_btn">
                <button>Resend Code</button>
                <Link to="/signinstepfour">Verify Code</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninStepThree;
