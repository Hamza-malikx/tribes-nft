import React from "react";
import styles from "./dashboard.module.css";
import art from "./art.png";
// import Footer from "../footer/Footer";
const Dashboard = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.container}>
          <div className={styles.dashboardWrapper}>
            <h2> Featured Assets</h2>
            <div className={styles.dashboardRow}>
              <div className={styles.dashboardLeftImg}>
                <div className={styles.dashboardLeftImgInner}>
                  <img
                    src={art}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <div className={styles.dashboardRightContent}>
                <div className={styles.dashboardRightContentWrap}>
                  <div className={styles.img}>
                    <img
                      src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Crypto Punks</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={styles.dashboardRightContentWrap}>
                  <div className={styles.img}>
                    <img
                      src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s0"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Cool Cats NFT</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={styles.dashboardRightContentWrap}>
                  <div className={styles.img}>
                    <img
                      src="https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Doodles</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondWrap}>
            <h2>Text Here</h2>
            <div className={styles.secondWrapRow}>
              <div className={styles.secondWrapleftImg}>
                <div className={styles.secondWrapleftImgInner}></div>
              </div>
              <div className={styles.secondWrapRight}>
                <div className={styles.secondWrapRightContentWrap}>
                  <div className={styles.img1}>
                    <img
                      src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Crypto Punks</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={styles.secondWrapRightContentWrap}>
                  <div className={styles.img1}>
                    <img
                      src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s0"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Cool Cats NFT</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.secondWrapRow}>
              <div className={styles.wrapwrap}>
                <div className={styles.secondWrapRightContentWrap1}>
                  <div className={styles.img1}>
                    <img
                      src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s0"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Mutant Ape Yacht Club</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.wrapwrap}>
                <div className={styles.secondWrapRightContentWrap1}>
                  <div className={styles.img1}>
                    <img
                      src="https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Doodles</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondWrap}>
            <h2>Text Here</h2>
            <div className={styles.secondWrapRow}>
              <div className={styles.secondWrapleftImg}>
                <div className={styles.secondWrapleftImgInner}></div>
              </div>
              <div className={styles.secondWrapRight}>
                <div className={styles.secondWrapRightContentWrap}>
                  <div className={styles.img1}>
                    <img
                      src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Crypto Punks</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={styles.secondWrapRightContentWrap}>
                  <div className={styles.img1}>
                    <img
                      src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s0"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Cool Cats NFT</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.secondWrapRow}>
              <div className={styles.wrapwrap}>
                <div className={styles.secondWrapRightContentWrap1}>
                  <div className={styles.img1}>
                    <img
                      src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s0"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Mutant Ape Yacht Club</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.wrapwrap}>
                <div className={styles.secondWrapRightContentWrap1}>
                  <div className={styles.img1}>
                    <img
                      src="https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0"
                      alt=""
                    />
                  </div>
                  <div className={styles.right}>
                    <h5>Doodles</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      {/* footer */}
    </>
  );
};

export default Dashboard;
