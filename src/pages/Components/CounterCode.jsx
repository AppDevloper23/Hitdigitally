import React from 'react'
import Counter from './Counter'

const CounterCode = () => {
  return (
    <>

      <div className="count-display section-fluid-200 section-inner-padding-100 section-inner-gray-gradient-bg-reverse">
        <div className="box-wrapper">
          <div className="count-wrapper pos-relative">
            <div className="container-fluid">
              <div className="row align-items-center justify-contents-between">
                <div className="col-xl-5 offset-xl-0 col-md-10 offset-md-1 col-sm-12">
                  <div className="content text-lg-start text-center">
                    <h3 className="title">We’r <span>10,000</span> project
                      complete & <span>100%</span> client
                      satisfaction.</h3>
                  </div>
                </div>
                <div className="col">
                  <ul className="counter-items counter-items-style-1">
                    <Counter />
                  </ul>
                </div>
              </div>
            </div>
            <div className="dotline-animate">
              <span className="blue"></span>
              <span className="orange"></span>
              <span className="blue"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CounterCode;
