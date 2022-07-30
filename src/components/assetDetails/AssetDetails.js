import React from "react";
import styles from "./assetDetails.module.css";
import shirtless from "../../assets/images/shirtless-zombies-pack-3d-model-low-poly-rigged-fbx-ma-unitypackage-uasset 2.png";
import shirtlessLeft from "../../assets/images/shirtless-zombies-pack-3d-model-low-poly-rigged-fbx-ma-unitypackage-uasset 1.png";
import thor from "../../assets/images/thors hammer 1.png";
import Slider from "react-slick";
const AssetDetails = () => {
  const vw = window.innerWidth;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: vw > 680 ? 2 : 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.details}>
      <div className={styles.assetTitleWrap}>
        <div className={styles.titleHeaderWrap}>
          <h6>Asset Title</h6>
          <button>Add to cart</button>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.left}>
            <div className={styles.leftImgWrap}>
              <img src={shirtlessLeft} alt="" className={styles.leftImg} />
              <div className={styles.imgText}>
                <h6>Text Here</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src={shirtless} alt="" />
            <img src={shirtless} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.descPublicInfoWrapper}>
        <div className={styles.leftDesc}>
          <h5>Description</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            turpis nec accumsan, purus convallis faucibus lorem natoque sed.
            Ornare magna at pretium enim erat mi felis. Augue fames lectus enim
            id mauris ut sed. Ut cursus sed cras euismod.
          </p>
          <h5>Reviews</h5>
          <h6>Username #1</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            turpis nec accumsan, purus convallis faucibus lorem natoque sed.
            Ornare magna at pretium enim erat mi felis. Augue fames lectus enim
            id mauris ut sed. Ut cursus sed cras euismod.
          </p>
          <div className={styles.slider}>
            <Slider {...settings}>
              <div>
                <img src={shirtless} alt="" />
              </div>
              <div>
                <img src={thor} alt="" />
              </div>
              <div>
                <img src={thor} alt="" />
              </div>
              <div>
                <img src={shirtless} alt="" />
              </div>
            </Slider>
          </div>
          <h6>Username #2</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            turpis nec accumsan, purus convallis faucibus lorem natoque sed.
          </p>
          <img src={shirtless} alt="" className={styles.video} />
        </div>
        <div className={styles.rightPublicInfo}>
          <h5>Publisher Info.</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            turpis nec accumsan, purus convallis faucibus lorem natoque sed.
            Ornare magna at pretium enim erat mi felis. Augue fames lectus enim
            id mauris ut sed. Ut cursus sed cras euismod.{" "}
          </p>
          <h5>Contact Info.</h5>
          <div className={styles.email}>
            <a
              href="mailto:publisher@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              publisher@gmail.com
            </a>
          </div>
          <div className={styles.site}>
            <a
              href="https://www.publisher.com"
              target="_blank"
              rel="noreferrer"
            >
              publisher.com
            </a>
          </div>
          <div className={styles.socialIconsWrapper}>
            <div className={styles.square}>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className={styles.square}>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className={styles.square}>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <h5 className={styles.tags}>Tags</h5>
          <p className={styles.tagsSpan}>
            <span>Lorem</span>,<span>ipsum</span>,<span>dolor</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;
