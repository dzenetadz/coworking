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

class HomeOne extends Component {
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
                                Discover the Perfect Coworking Experience
                                </h1>
                                <p className="home-subtitle mx-auto pt-2">
                                Work, connect, and grow in spaces designed for productivity and community. Find the flexibility you need, all in one inspiring location.
                                </p>
                                <div className="mt-5">
                                    <Link to="#" className="btn btn-custom">
                                        Free Signup
                                    </Link>
                                </div>
                                {/* Removed video modal trigger */}
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

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeOne);