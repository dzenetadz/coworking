import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pricing extends Component {
  render() {
    return (
      <AUX>
        <section className="section bg-light" id="pricing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="text-center">
                  <div className="title-icon">
                    <i className="mdi mdi-cash"></i>
                  </div>
                  <h3 className="section-title pt-5">Our Pricing</h3>
                  <p className="section-subtitle pt-3 text-muted">
                    Choose the plan that fits your coworking needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              {/* Student Plan */}
              <div className="col-lg-4">
                <div className="price-box p-5 bg-white text-center mt-4">
                  <div className="plan-price">
                    <h2>$50</h2>
                  </div>
                  <div className="plan-name mt-4">
                    <h6>Student</h6>
                  </div>
                  <div className="plan-desc mt-4">
                    <p className="mb-0 text-muted">
                      Affordable access for students with basic amenities and community networking.
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link to="signup" className="btn btn-custom btn-rounded">Sign Up</Link>
                  </div>
                </div>
              </div>
              {/* Flex Plan */}
              <div className="col-lg-4">
                <div className="price-box p-5 bg-white text-center mt-1">
                  <div className="plan-price">
                    <h2>$150</h2>
                  </div>
                  <div className="plan-name mt-4">
                    <h6>Flex 10</h6>
                  </div>
                  <div className="plan-desc mt-4">
                    <p className="mb-0 text-muted">
                      Enjoy 10 days of flexible coworking space access—ideal for short-term projects.
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link to="signup" className="btn btn-custom btn-rounded">Sign Up</Link>
                  </div>
                </div>
              </div>
              {/* Professional Plan */}
              <div className="col-lg-4">
                <div className="price-box p-5 bg-white text-center mt-4">
                  <div className="plan-price">
                    <h2>$300</h2>
                  </div>
                  <div className="plan-name mt-4">
                    <h6>Professional</h6>
                  </div>
                  <div className="plan-desc mt-4">
                    <p className="mb-0 text-muted">
                      Full access with premium amenities, dedicated workspaces, and exclusive networking events.
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link to="signup" className="btn btn-custom btn-rounded">Sign Up</Link>
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

export default Pricing;