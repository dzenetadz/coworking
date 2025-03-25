import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Client extends Component {

    render() {
        return (
            <AUX>
                <section className="section bg-gray" id="client">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-account-circle"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Our Community</h3>
                                    <p className="section-subtitle pt-3 text-muted">
                                        We’re proud to host a diverse group of professionals, creatives, and startups who thrive in our coworking space.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted">
                                            <span>"</span>Working here has transformed my daily routine—flexible spaces and inspiring events keep me motivated.<span>"</span>
                                        </p>
                                        <p className="text-center mb-0 quote-icon text-custom">
                                            <i className="mdi mdi-format-quote-open"></i>
                                        </p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/client-1.png" alt="Testimonial 1" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted">
                                            <span>"</span>The community events here have helped me connect with like-minded professionals and grow my network.<span>"</span>
                                        </p>
                                        <p className="text-center mb-0 quote-icon text-custom">
                                            <i className="mdi mdi-format-quote-open"></i>
                                        </p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/client-2.png" alt="Testimonial 2" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted">
                                            <span>"</span>I love the vibrant coworking environment—it’s not just a workspace, it’s a community that feels like home.<span>"</span>
                                        </p>
                                        <p className="text-center mb-0 quote-icon text-custom">
                                            <i className="mdi mdi-format-quote-open"></i>
                                        </p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/client-3.png" alt="Testimonial 3" className="img-fluid rounded-circle d-block mx-auto" />
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

export default Client;