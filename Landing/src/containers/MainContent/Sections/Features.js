import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Features extends Component {
  render() {
    return (
      <AUX>
        <section className="section" id="features">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <div className="title-icon">
                  <i className="mdi mdi-airplane"></i>
                </div>
                <h3 className="section-title pt-5">Our Features</h3>
                <p className="section-subtitle text-dark pt-3">
                  Discover an inspiring environment built to enhance creativity and productivity.
                </p>
              </div>
            </div>
            <div className="row vertical-content">
              <div className="col-md-6 pt-4">
                <img src="images/service-1.png" alt="" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <div className="features-box">
                  <div className="features-icon">
                    <i className="mdi mdi-eye text-custom"></i>
                  </div>
                  <div className="features-desc">
                    <h5>Flexible Workspaces</h5>
                    <p className="pt-2">
                      Experience modern, adaptable workstations designed to boost productivity and fuel creativity.
                    </p>
                    <Link to="#" className="text-custom features-more">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row vertical-content">
              <div className="col-md-6">
                <div className="features-box">
                  <div className="features-icon">
                    <i className="mdi mdi-chart-bubble text-custom"></i>
                  </div>
                  <div className="features-desc">
                    <h5>Community Networking</h5>
                    <p className="pt-2">
                      Connect and collaborate with diverse professionals in a vibrant community that sparks innovation.
                    </p>
                    <Link to="#" className="text-custom features-more">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-4">
                <img src="images/service-2.png" alt="" className="img-fluid rounded" />
              </div>
            </div>
            <div className="row vertical-content">
              <div className="col-md-6 pt-4">
                <img src="images/service-3.png" alt="" className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <div className="features-box">
                  <div className="features-icon">
                    <i className="mdi mdi-fingerprint text-custom"></i>
                  </div>
                  <div className="features-desc">
                    <h5>Innovative Services</h5>
                    <p className="pt-2">
                      Leverage our tailored services—from IT support to creative consultancy—designed to empower your business.
                    </p>
                    <Link to="#" className="text-custom features-more">
                      Read More <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AUX>
    );
  }
}

export default Features;