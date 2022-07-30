import React from "react";
import Chains from "components/Chains";
import NativeBalance from "components/NativeBalance";
import Account from "components/Account";

const Crypto = () => {
  return (
    <div className="cryptoRight" id="cryptoRight">
      <h6>Crypto</h6>
      <p>Types</p>
      <Chains />
      <p>Native Balance</p>
      <NativeBalance />
      <p>Account</p>
      <Account />
    </div>
  );
};

export default Crypto;
