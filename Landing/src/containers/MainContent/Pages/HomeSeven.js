import React, { Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Counter from '../Sections/Counter';
import Pricing from '../Sections/Pricing';
import Client from '../Sections/Client';
import Faq from '../Sections/Faq';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
// Removed: import ModalVideo from 'react-modal-video';
// Removed: import 'react-modal-video/scss/modal-video.scss';

class HomeSeven extends Component {

    componentDidMount() {
        if (this.props.islight === true) {
            this.props.UpdateLight();
        }
    }

    render() {
        return (
            <AUX>
                <section className="home-slider" id="home">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{ backgroundImage: "url('images/slide-1.jpg')" }}>
                                <div className="bg-overlay"></div>
                                <div className="home-center">
                                    <div className="home-desc-center">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-md-10 text-center text-white">
                                                    <h1 className="mt-5 pt-5 home-title">
                                                        We help startups launch their awesome website
                                                    </h1>
                                                    <p className="home-subtitle mx-auto pt-2">
                                                        It is a long established fact that a reader will be of a page when looking at its layout.
                                                    </p>
                                                    <div className="mt-5">
                                                        <Link to="#" className="btn btn-custom">Free Signup</Link>
                                                    </div>
                                                    {/* Removed video modal trigger and component */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ backgroundImage: "url('images/slide-2.jpg')" }}>
                                <div className="bg-overlay"></div>
                                <div className="home-center">
                                    <div className="home-desc-center">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-md-10 text-center text-white">
                                                    <h1 className="mt-5 pt-5 home-title">
                                                        We help startups launch their awesome website
                                                    </h1>
                                                    <p className="home-subtitle mx-auto pt-2">
                                                        It is a long established fact that a reader will be of a page when looking at its layout.
                                                    </p>
                                                    <div className="mt-5">
                                                        <Link to="#" className="btn btn-custom">Free Signup</Link>
                                                    </div>
                                                    <Link to="https://vimeo.com/108096448" className="pt-4 video-play-icon watch-overview d-inline-block text-white">
                                                        Watch the overview &nbsp;<i className="mdi mdi-chevron-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ backgroundImage: "url('images/slide-3.jpg')" }}>
                                <div className="bg-overlay"></div>
                                <div className="home-center">
                                    <div className="home-desc-center">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-md-10 text-center text-white">
                                                    <h1 className="mt-5 pt-5 home-title">
                                                        We help startups launch their awesome website
                                                    </h1>
                                                    <p className="home-subtitle mx-auto pt-2">
                                                        It is a long established fact that a reader will be of a page when looking at its layout.
                                                    </p>
                                                    <div className="mt-5">
                                                        <Link to="#" className="btn btn-custom">Free Signup</Link>
                                                    </div>
                                                    <Link to="https://vimeo.com/108096448" className="pt-4 video-play-icon watch-overview d-inline-block text-white">
                                                        Watch the overview &nbsp;<i className="mdi mdi-chevron-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="mdi mdi-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="mdi mdi-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>

                <Features />
                <Counter />
                <Services />
                <Pricing />
                <Client />
                <Faq />
            </AUX>
        );
    }
}

const mapStatetoProps = state => {
    return {
        islight: state.ui_red.islight
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLight: () => dispatch({ type: actionTypes.ISLIGHT, value: true })
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeSeven);