import React, { Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Counter from '../Sections/Counter';
import Pricing from '../Sections/Pricing';
import Client from '../Sections/Client';
import Faq from '../Sections/Faq';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
// Removed: import ReactTextRotator from 'react-text-rotator';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';

class HomeThree extends Component {
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
                                    We help startups launch their awesome website
                                </h1>
                                <p className="home-subtitle mx-auto pt-2">
                                    It is a long established fact that a reader will be of a page when looking at its layout.
                                </p>
                                <div className="mt-5">
                                    <Link to="#" className="btn btn-custom">Free Signup</Link>
                                </div>
                                <div className="">
                                    <img src="images/macbook.png" alt="" className="img-fluid center-block home-dashboard" />
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

const mapStatetoProps = state => ({
    islight: state.ui_red.islight
});

const mapDispatchtoProps = dispatch => ({
    UpdateLight: () => dispatch({ type: actionTypes.ISLIGHT, value: true })
});

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeThree);