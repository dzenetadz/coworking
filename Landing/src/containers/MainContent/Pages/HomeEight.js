import React, { Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Counter from '../Sections/Counter';
import Pricing from '../Sections/Pricing';
import Client from '../Sections/Client';
import Faq from '../Sections/Faq';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
// Removed: import ModalVideo from 'react-modal-video';
// Removed: import 'react-modal-video/scss/modal-video.scss';

class HomeEight extends Component {

    componentDidMount() {
        if (this.props.islight === true) {
            this.props.UpdateLight();
        }
    }

    render() {
        return (
            <AUX>
                <ScrollAnimation animateIn='fadeIn'>
                    <section className="home-bg-color" id="home">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 text-center text-white">
                                    <h1 className="mt-5 pt-5 home-title" data-aos="fade-up">
                                        We help startups launch their awesome website
                                    </h1>
                                    <p className="home-subtitle mx-auto pt-2" data-aos="fade-up">
                                        It is a long established fact that a reader will be of a page when looking at its layout.
                                    </p>
                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-custom" data-aos="fade-up">
                                            Free Signup
                                        </Link>
                                    </div>
                                    {/* Removed video modal trigger and component */}
                                    <div className="">
                                        <img src="images/macbook.png" alt="" className="img-fluid center-block home-dashboard" data-aos="fade-up" />
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
                </ScrollAnimation>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeEight);