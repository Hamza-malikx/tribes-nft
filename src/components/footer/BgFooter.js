import React from "react";
import { Link } from "react-router-dom";
import meta from "../../4984253-middle.png";
import eth from "../../kisspng-ethereum-portable-network-graphics-computer-icons-developers-icon-request-icon-ethereum-5cb941c220f890.5510979515556448661351.png";
import assessibility from "../../assets/icons/173800_accessibility_icon.png";
import Text from "antd/lib/typography/Text";
import { Menu, Layout } from "antd";
const { Header, Footer } = Layout;

const BgFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <Text style={{ display: "block" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            Download the MetaMask Extension to get started in our Decentralized
            Marketplace!
          </div>
          <div>
            <img src={meta} alt="" width="30" style={{ textAlign: "center" }} />
          </div>
        </div>
        {/* Download From{" "}
        <a
          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
          target="_blank"
        >
          here
        </a>
        <br /> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>Powered with Ethereum</div>
          <div>
            <img src={eth} alt="" width="30" height="25" />
          </div>
        </div>
        {/* <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div> */}
        <div>
          <Link to="/settings">Privacy Policy</Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0 5px",
          }}
        >
          <span>
            <img
              src={assessibility}
              alt=""
              style={{
                width: "18px",
                height: "18px",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            />
          </span>
          <Link to="/assessibility">Accessibility</Link>
        </div>
      </Text>
    </Footer>
  );
};

export default BgFooter;
