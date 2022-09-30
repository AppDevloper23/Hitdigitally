import React from 'react';
import CounterCode from './Components/CounterCode';
import Servicebox from './Components/Servicebox';
import Singleblog from './Components/Singleblog';
import Newsletter from './Components/Newsletter';

function Home() {

  return (
    <>
      <div className="offcanvas-overlay"></div>
      <div className="hero-display-section section-fluid-200">
        <div className="box-wrappr">
          <div className="hero-wrapper">
            <div className="hero-content">
              <span className="title-tag">Hit Digitally</span>
              <h2 className="title">We are <span>& creative</span> digital, enthusiastic</h2>
              <p>Hit Digitally is the rising digital marketing bureau that offers with the best
                compelling services to elevate any business.</p>
              <a href="/service" className="btn btn-lg btn-default icon-right">
                All Service’s <i className="icofont-double-right"></i></a>
            </div>
            <div className="hero-image">
              <img className="img-fluid" src="assets/images/hero/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <CounterCode />
      <Servicebox />
      <Singleblog />
      <Newsletter />
    </>
  )
}

export default Home;