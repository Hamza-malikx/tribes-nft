import { Suspense, lazy, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Loading from "./components/loading/Loading";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Layout } from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import NFTMarketTransactions from "components/NFTMarketTransactions";
import Header1 from "components/header/header";
import BgFooter from "components/footer/BgFooter";
const Shopper = lazy(() => import("components/profile/shopper/Shopper"));
const Login = lazy(() => import("components/Auth/login/Login"));
const Creator = lazy(() => import("components/profile/creator/Creator"));
const CreateAccount = lazy(() =>
  import("components/Auth/signUp/CreateAccount")
);
const LoginStepOne = lazy(() =>
  import("components/Auth/LoginProcess/LoginStepOne")
);
const LoginStepTwo = lazy(() =>
  import("components/Auth/LoginProcess/LoginStepTwo")
);
const LoginStepThree = lazy(() =>
  import("components/Auth/LoginProcess/LoginStepThree")
);
const LoginStepFour = lazy(() =>
  import("components/Auth/LoginProcess/LoginStepFour")
);

const Search = lazy(() => import("components/search/Search"));
// const Header1 = lazy(() => import("components/header/header"));
const Team = lazy(() => import("components/team/Team"));
const AssetDetails = lazy(() => import("components/assetDetails/AssetDetails"));
const Dashboard = lazy(() => import("components/dashboard/Dashboard"));
const SigninStepOne = lazy(() =>
  import("components/Auth/Signinprocess/SigninStepOne")
);
const SigninStepTwo = lazy(() =>
  import("components/Auth/Signinprocess/SigninStepTwo")
);
const SigninStepThree = lazy(() =>
  import("components/Auth/Signinprocess/SigninStepThree")
);
const SigninStepFour = lazy(() =>
  import("components/Auth/Signinprocess/SigninStepFour")
);
const Assessibility = lazy(() =>
  import("components/assessibility/Assessibility")
);
const Publish = lazy(() => import("components/publish/Publish"));
const Store = lazy(() => import("components/store/Store"));
const Library = lazy(() => import("components/library/Library"));
const Settings = lazy(() => import("components/settings/Settings"));
const Checkout = lazy(() => import("components/checkout/Checkout"));
const Cart = lazy(() => import("components/cart/Cart"));
const CloudStorage = lazy(() => import("components/cloudStorage/CloudStorage"));
const PrivacyPolicy = lazy(() =>
  import("components/privacyPolicy/PrivacyPolicy")
);
// const { Header, Footer } = Layout;
const styles = {
  content: {
    display: "flex",
    // justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "40px",
    // padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    // boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "0px 0px 15px 15px",
    height: "50px",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout
      style={{
        height: "100vh",
        overflow: "auto",
        backgroundImage: "linear-gradient(to right, #a9acc5, #c26296)",
      }}
    >
      <Router>
        <Header1 data={<NativeBalance />} />
        <div style={styles.content}>
          <Switch>
            <Suspense fallback={<Loading />}>
              {/* <Route path="/nftBalance">
              <NFTBalance />
            </Route> */}
              <Route exact path="/library">
                <Library />
              </Route>
              <Route exact path="/shop">
                <NFTTokenIds
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              </Route>
              {/* <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route> */}
              {/* <Route path="/team">
                <Team />
              </Route> */}
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/details">
                <AssetDetails />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              <Route exact path="/profile">
                <Shopper />
              </Route>
              <Route exact path="/store">
                <Store />
              </Route>
              <Route exact path="/profile/creator">
                <Creator />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <CreateAccount />
              </Route>
              <Route exact path="/loginstepone">
                <LoginStepOne />
              </Route>
              <Route exact path="/loginsteptwo">
                <LoginStepTwo />
              </Route>
              <Route exact path="/loginstepthree">
                <LoginStepThree />
              </Route>
              <Route exact path="/loginstepfour">
                <LoginStepFour />
              </Route>
              <Route exact path="/signinstepone">
                <SigninStepOne />
              </Route>
              <Route exact path="/signinsteptwo">
                <SigninStepTwo />
              </Route>
              <Route exact path="/signinstepthree">
                <SigninStepThree />
              </Route>
              <Route exact path="/signinstepfour">
                <SigninStepFour />
              </Route>
              <Route exact path="/publish">
                <Publish />
              </Route>
              <Route exact path="/cloud-storage">
                <CloudStorage />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/privacy-policy">
                <PrivacyPolicy />
              </Route>
              <Route exact path="/assessibility">
                <Assessibility />
              </Route>
            </Suspense>
          </Switch>

          {/* <Redirect exact from="/" to="/dashboard" /> */}
          {/* <Redirect exact from="*" to="/privacy-policy" /> */}
        </div>
        <BgFooter />
      </Router>
      <Router>
        {/* <Footer style={{ textAlign: "center" }}>
          <Text style={{ display: "block" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                Download the MetaMask Extension to get started in our
                Decentralized Marketplace!
              </div>
              <div>
                <img
                  src={meta}
                  alt=""
                  width="30"
                  style={{ textAlign: "center" }}
                />
              </div>
            </div>
            Download From{" "}
            <a
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
              target="_blank"
            >
              here
            </a>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>Powered with Ethereum</div>
              <div>
                <img src={eth} alt="" width="30" height="25" />
              </div>
            </div>
            <div>
              <a href="/privacy-policy" target="_blank">
                Privacy Policy
              </a>
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
              <a href="/assessibility" target="_blank">
                Accessibility
              </a>
            </div>
          </Text>
        </Footer> */}
      </Router>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <svg
      width="60"
      height="38"
      viewBox="0 0 50 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.6871 32.3986C43.5973 32.4884 43.53 32.5782 43.4402 32.6905C43.53 32.6007 43.5973 32.5109 43.6871 32.3986Z"
        fill="black"
      />
      <path
        d="M49.7037 14.3715C49.5241 6.2447 42.7891 -0.17592 34.6624 0.00367768C31.0031 0.0934765 27.4784 1.53026 24.8294 4.06708C22.113 1.46291 18.4986 0.00367768 14.727 0.00367768C6.71246 0.00367768 0.202047 6.49164 0 14.5511V14.6633C0 20.8146 2.24497 26.2698 4.26545 30.0189C5.11853 31.5904 6.08387 33.117 7.13901 34.5762C7.5431 35.115 7.8574 35.564 8.10435 35.8559L8.39619 36.2151L8.48599 36.3273L8.50844 36.3498L8.53089 36.3722C10.2146 38.3253 13.1555 38.5498 15.1087 36.8886C15.1311 36.8661 15.1536 36.8437 15.176 36.8212C17.1291 35.0701 17.3312 32.0843 15.625 30.1087L15.6026 30.0638L15.423 29.8618C15.2658 29.6597 15.0189 29.3455 14.727 28.9414C13.9188 27.8189 13.178 26.6515 12.5269 25.4392C10.8881 22.4309 9.42888 18.6145 9.42888 14.7531C9.49623 11.8347 11.9432 9.52236 14.8617 9.58971C17.7128 9.65705 19.9802 11.9694 20.0251 14.8205C20.0476 15.5389 20.2272 16.2348 20.5415 16.8859C21.4844 19.3104 24.2232 20.5227 26.6478 19.5798C28.4438 18.8839 29.6336 17.1553 29.6561 15.2246V14.596C29.7683 11.6775 32.2153 9.38766 35.1562 9.47746C37.94 9.56726 40.1625 11.8122 40.2748 14.596C40.2523 17.6941 39.2645 20.7472 38.1421 23.1718C37.6931 24.1371 37.1992 25.08 36.6379 25.978C36.4359 26.3147 36.2787 26.5617 36.1665 26.6964C36.1216 26.7862 36.0767 26.8311 36.0542 26.8535L36.0318 26.876L35.9869 26.9433C37.6033 24.9004 40.5442 24.5412 42.5871 26.1576C44.4953 27.6617 44.9443 30.3781 43.6198 32.4211L43.6422 32.4435V32.3986L43.6647 32.3762L43.732 32.2864C43.7769 32.1966 43.8667 32.1068 43.9565 31.9721C44.1361 31.7027 44.3606 31.3435 44.6525 30.8945C45.3933 29.6822 46.0668 28.4026 46.673 27.1229C48.1097 24.0249 49.6812 19.5349 49.6812 14.5286L49.7037 14.3715Z"
        fill="#041836"
      />
      <path
        d="M39.7135 25.1249C37.1094 25.1025 34.9991 27.2127 34.9766 29.8169C34.9542 32.4211 37.0645 34.5313 39.6686 34.5538C41.1503 34.5538 42.5647 33.8578 43.4626 32.6905C43.53 32.6007 43.5973 32.4884 43.6871 32.3986C45.1015 30.221 44.4729 27.3025 42.2953 25.9107C41.532 25.3943 40.634 25.1249 39.7135 25.1249Z"
        fill="#B7E803"
      />
    </svg>
  </div>
);

export default App;
