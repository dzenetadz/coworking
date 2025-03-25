import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Services extends Component {
  render() {
    return (
      <AUX>
        <section className="section" id="services">
          <div className="container">
            <div className="row justify-content-center pt-5">
              <div className="col-md-8">
                <div className="text-center">
                  <div className="title-icon">
                    <i className="mdi mdi-all-inclusive text-custom"></i>
                  </div>
                  <h3 className="section-title pt-5">Our Services</h3>
                  <p className="section-subtitle pt-3 text-muted">
                    Experience a vibrant coworking ecosystem tailored for success.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              {/* Service Box 1 */}
              <div className="col-md-4">
                <div className="service-box text-center p-4 mt-3">
                  <div className="service-icon">
                    <i className="mdi mdi-home-modern text-custom"></i>
                  </div>
                  <div className="service-desc pt-4">
                    <h5>Flexible Workspaces</h5>
                    <p className="pt-2 text-muted">
                      Dynamic spaces designed for focus and creativity, adaptable to your evolving needs.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service Box 2 */}
              <div className="col-md-4">
                <div className="service-box text-center p-4 mt-3">
                  <div className="service-icon">
                    <i className="mdi mdi-account-multiple text-custom"></i>
                  </div>
                  <div className="service-desc pt-4">
                    <h5>Community Networking</h5>
                    <p className="pt-2 text-muted">
                      Connect with professionals from diverse industries in an inspiring collaborative setting.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service Box 3 */}
              <div className="col-md-4">
                <div className="service-box text-center p-4 mt-3">
                  <div className="service-icon">
                    <i className="mdi mdi-briefcase text-custom"></i>
                  </div>
                  <div className="service-desc pt-4">
                    <h5>Business Support</h5>
                    <p className="pt-2 text-muted">
                      On-site services and professional resources to streamline your operations and boost growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Service Box 4 */}
              <div className="col-md-4">
                <div className="service-box text-center p-4 mt-3">
                  <div className="service-icon">
                    <i className="mdi mdi-headset text-custom"></i>
                  </div>
                  <div className="service-desc pt-4">
                    <h5>Dedicated Support</h5>
                    <p className="pt-2 text-muted">
                      Our friendly team is available 24/7 to assist with all your workspace and technical needs.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service Box 5 */}
              <div className="col-md-4">
                <div className="service-box text-center p-4 mt-3">
                  <div className="service-icon">
                    <i className="mdi mdi-coffee text-custom"></i>
                  </div>
                  <div className="service-desc pt-4">
                    <h5>Modern Amenities</h5>
                    <p className="pt-2 text-muted">
                      Enjoy high-speed internet, fully-equipped meeting rooms, cozy lounges, and more to keep you productive.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service Box 6 */}
              <div className="col-md-4">
                <div className="service-box text-center p-4 mt-3">
                  <div className="service-icon">
                    <i className="mdi mdi-settings text-custom"></i>
                  </div>
                  <div className="service-desc pt-4">
                    <h5>Seamless Integration</h5>
                    <p className="pt-2 text-muted">
                      Flexible packages and digital solutions that make joining our coworking community effortless.
                    </p>
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

export default Services;