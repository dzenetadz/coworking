import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Faq extends Component {
  render() {
    return (
      <AUX>
        <section className="section bg-light" id="faq">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="text-center">
                  <div className="title-icon">
                    <i className="mdi mdi-comment-question-outline"></i>
                  </div>
                  <h3 className="section-title pt-5">Frequently Asked Questions</h3>
                  <p className="section-subtitle pt-3 text-muted">
                    Find answers to the most common questions about our coworking space.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-6 faq-side">
                <div className="faq pt-5">
                  <p className="text-uppercase user-title mb-1">For Members</p>
                  <div className="faq-ans">
                    <h3 className="faq-title">
                      <i className="mdi mdi-help-circle"></i> What amenities are included?
                    </h3>
                    <p className="faq-sub-title text-muted pt-2">
                      Our memberships include high-speed Wi-Fi, meeting rooms, printing services, and complimentary coffee.
                    </p>
                  </div>
                </div>
                <div className="faq pt-5">
                  <p className="text-uppercase user-title mb-1">For Members</p>
                  <div className="faq-ans">
                    <h3 className="faq-title">
                      <i className="mdi mdi-help-circle"></i> How do I reserve a desk?
                    </h3>
                    <p className="faq-sub-title text-muted pt-2">
                    Booking a tour of our space! Schedule a visit with our team to explore the environment, and then choose the desk that suits you best.
                    </p>
                  </div>
                </div>
                <div className="faq pt-5">
                  <p className="text-uppercase user-title mb-1">For Members</p>
                  <div className="faq-ans">
                    <h3 className="faq-title">
                      <i className="mdi mdi-help-circle"></i> What are the membership plans?
                    </h3>
                    <p className="faq-sub-title text-muted pt-2">
                      We offer flexible plans to suit your needs—from daily passes to full-time memberships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 faq-side">
                <div className="faq pt-5">
                  <p className="text-uppercase user-title mb-1">For Partners</p>
                  <div className="faq-ans">
                    <h3 className="faq-title">
                      <i className="mdi mdi-help-circle"></i> How can I host an event at your space?
                    </h3>
                    <p className="faq-sub-title text-muted pt-2">
                      We welcome events that bring our community together. Contact our team for details and booking options.
                    </p>
                  </div>
                </div>
                <div className="faq pt-5">
                  <p className="text-uppercase user-title mb-1">For Partners</p>
                  <div className="faq-ans">
                    <h3 className="faq-title">
                      <i className="mdi mdi-help-circle"></i> What partnership opportunities are available?
                    </h3>
                    <p className="faq-sub-title text-muted pt-2">
                      We collaborate with local businesses, service providers, and startups to offer exclusive benefits and discounts.
                    </p>
                  </div>
                </div>
                <div className="faq pt-5">
                  <p className="text-uppercase user-title mb-1">For Partners</p>
                  <div className="faq-ans">
                    <h3 className="faq-title">
                      <i className="mdi mdi-help-circle"></i> Is there support for community initiatives?
                    </h3>
                    <p className="faq-sub-title text-muted pt-2">
                      Absolutely. We actively support community-driven projects and initiatives with dedicated resources and event spaces.
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

export default Faq;