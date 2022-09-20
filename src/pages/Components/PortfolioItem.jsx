import React, {useState} from "react";
import CustomModal from "./Modal";

const PortfolioItem = ({ id, tabImage, tabLinks, modalhding, modalpara }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="col-xl-4 col-md-6 mb-25 filter-item shopify" key={id}>
        <a href={tabLinks} className="project-single-item">
          <div className="image img-responsive">
            <img src={tabImage} alt="" />
          </div>
          <div className="content">
            <div className="inner">
              <div className="text">
                <button
                  className="title"
                  type="button"
                  onClick={() => setShow(!show)}
                >
                  Read More
                </button><br></br>
                <span className="catagory">Portfolio, Project</span>
              </div>
              <div className="icon">
                <img
                  className="img-fluid"
                  src="/assets/images/icons/right-arrow-white.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </a>
      </div>
      <CustomModal show={show} modalhding={modalhding} modalpara={modalpara} setShow={() => setShow(!show)} />
    </>
  );
};

export default PortfolioItem;
