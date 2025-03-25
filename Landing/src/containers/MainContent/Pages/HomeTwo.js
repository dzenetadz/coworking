import React, { Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Counter from '../Sections/Counter';
import Pricing from '../Sections/Pricing';
import Client from '../Sections/Client';
import Faq from '../Sections/Faq';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import Typing from 'react-typing-animation';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
// Removed: import ModalVideo from 'react-modal-video';
// Removed: import 'react-modal-video/scss/modal-video.scss';

class HomeTwo extends Component {
    componentDidMount() {
        if (this.props.islight === true) {
            this.props.UpdateLight();
        }
    }

    render() {
        return (
            <AUX>
                <section className="home-bg-color" id="home">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center text-white">
                                <h1 className="mt-5 pt-5 home-title">
                                    <Typing speed={50}>
                                        We help startups launch their awesome website
                                        <Typing.Reset count={1} delay={1000} />
                                        We are Creative
                                        <Typing.Reset count={1} delay={1000} />
                                        We are Modern
                                    </Typing>
                                </h1>
                                <p className="home-subtitle mx-auto pt-2">
                                    It is a long established fact that a reader will be of a page when looking at its layout.
                                </p>
                                <div className="mt-5">
                                    <Link to="#" className="btn btn-custom">
                                        Free Signup
                                    </Link>
                                </div>
                                {/* Removed the video modal trigger and component */}
                                {/* Removed: <span onClick={this.openModal} className="pt-4 video-play-icon watch-overview d-inline-block text-white">
                                    Watch the overview &nbsp;<i className="mdi mdi-chevron-right"></i>
                                </span> */}
                                <div className="">
                                    <img
                                        src="images/macbook.png"
                                        alt=""
                                        className="img-fluid center-block home-dashboard"
                                    />
                                </div>
                            </div>
                        </div>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeTwo);