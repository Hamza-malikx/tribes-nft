import React from "react";

const CreditCard = () => {
  return (
    <>
      <div
        className="activity_logs_tab_content_box"
        id="activity_logs_tab_content"
      >
        <div className="credit_card_tab_header">
          <span>Credit Cards</span>
        </div>

        <div className="personal_info_tab_content">
          <form>
            <div className="personal_info_tab_content_list">
              <div className="credit_card_input_fields">
                <span>Select or add a preferred payment method</span>
                <div className="single_personal_info_tab_field">
                  <div className="single_personal_info_tab_input_field">
                    <select>
                      <option selected>Visa</option>
                    </select>
                  </div>
                </div>

                <div className="single_personal_info_tab_field">
                  <div className="single_personal_info_tab_input_field">
                    <input type="text" placeholder="Card #" />
                  </div>
                </div>
              </div>

              <div className="credit_card_input_fields_two">
                <div className="credit_card_input_fields_two_header">
                  <span>Card Expiration</span>
                  <a>Security ?</a>
                </div>
                <div className="credit_card_input_inner_fields_two">
                  <div className="single_personal_info_tab_field">
                    <div className="single_personal_info_tab_input_field">
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="single_personal_info_tab_field">
                    <div className="single_personal_info_tab_input_field">
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="single_personal_info_tab_field">
                    <div className="single_personal_info_tab_input_field">
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="credit_card_input_fields">
                <span>Billing Info</span>
                <div className="single_personal_info_inner_tab_field">
                  <div className="single_personal_info_tab_field">
                    <div className="single_personal_info_tab_input_field">
                      <input type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="single_personal_info_tab_field">
                    <div className="single_personal_info_tab_input_field">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>
                </div>

                <div className="single_personal_info_tab_field">
                  <div className="single_personal_info_tab_input_field">
                    <input type="text" placeholder="City" />
                  </div>
                </div>
                <div className="single_personal_info_tab_field">
                  <div className="single_personal_info_tab_input_field">
                    <input type="text" placeholder="Billing Address" />
                  </div>
                </div>

                <div className="single_personal_info_tab_field">
                  <div className="single_personal_info_tab_input_field">
                    <select>
                      <option selected>State/Province</option>
                    </select>
                  </div>
                </div>

                <div className="single_personal_info_inner_tab_field">
                  <div className="single_personal_info_tab_field">
                    <div className="single_personal_info_tab_input_field">
                      <input type="text" placeholder="Postal Code" />
                    </div>
                  </div>
                  <div className="single_personal_info_tab_field">
                    <div className="single_personal_info_tab_input_field">
                      <select>
                        <option selected>Country</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="single_personal_info_tab_field">
                  <div className="single_personal_info_tab_input_field">
                    <input type="text" placeholder="Phone #" />
                  </div>
                </div>
              </div>

              <div className="credit_card_tab_content_edit_btn">
                <button>Add Payment Method</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
