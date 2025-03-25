import React, { Component } from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Footer extends Component {
    
    constructor() {
        super();
        this.state = { 
            email:'', 
            name:'', 
            subject:'', 
            message:'', 
            email_err:'', 
            name_err:'', 
            subject_err:'', 
            message_err:'', 
            return_msg:'', 
            flag : false 
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({ email: e.target.value });
        var EmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e.target.value === '') 
            this.setState({ email_err: 'Required Field' });
        else if(EmailReg.test(e.target.value)) 
            this.setState({ email_err: '' });
        else 
            this.setState({ email_err: 'Enter Valid Email' });
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value });
        if(e.target.value === '') 
            this.setState({ name_err: 'Required Field' });
        else 
            this.setState({ name_err: '' });
    }
    
    handleChangeSubject(e) {
        this.setState({ subject: e.target.value });
        if(e.target.value === '') 
            this.setState({ subject_err: 'Required Field' });
        else 
            this.setState({ subject_err: '' });
    }
    
    handleChangeMessage(e) {
        this.setState({ message: e.target.value });
        if(e.target.value === '') 
            this.setState({ message_err: 'Required Field' });
        else 
            this.setState({ message_err: '' });
    }

    handleSubmit1() {
        if(this.state.name === '') 
            this.setState({ name_err: 'Required Field' });
        if(this.state.email === '')
            this.setState({ email_err: 'Required Field' });
        if(this.state.subject === '')
            this.setState({ subject_err: 'Required Field' });
        if(this.state.message === '')
            this.setState({ message_err: 'Required Field' });

        if(this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '') {
            this.setState({ return_msg: 'Please complete all fields', flag: true });
        } else {
            this.setState({ return_msg: 'Your message has been sent successfully!', flag: true });
        }
    }
    
    render() {
        return (
            <AUX>
                <section className="pt-5 bg-dark" id="contact">
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-lock-open-outline"></i>
                                    </div>
                                    <h3 className="section-title text-white pt-5">Get in Touch</h3>
                                    <p className="section-subtitle pt-3 text-white">
                                        Have questions about our coworking space? Reach out to us to schedule a tour or learn more about our flexible workspaces and vibrant community.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="row mt-5">
                                    <div className="col-lg-4">
                                        <div className="single-contact text-center text-white"> 
                                            <i className="mdi mdi-cellphone"></i>
                                            <h4>Phone</h4>
                                            <p>033-676-675</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single-contact text-center text-white"> 
                                            <i className="mdi mdi-map-marker"></i>
                                            <h4>Address</h4>
                                            <p>Kolodvorska 899, Sarajevo</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single-contact text-center text-white"> 
                                            <i className="mdi mdi-email-outline"></i>
                                            <h4>Email</h4>
                                            <p>info@wecowork.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-8 bg-white p-5 mt-4 rounded">
                                <div className="custom-form">
                                    <div id="message">
                                        {this.state.flag ? 
                                            <div className="alert alert-success">
                                                <strong>{this.state.return_msg}</strong>
                                            </div>
                                        : null}
                                    </div>
                                    <form method="post" name="contact-form" id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6 mt-3">
                                                <input type="text" id="name" value={this.state.name} onChange={this.handleChangeName} className="form-control" placeholder="First Name" /> 
                                                <span id="err">{this.state.name_err}</span>
                                            </div>
                                            <div className="col-lg-6 mt-3">
                                                <input type="text" id="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Enter Email" />
                                                <span id="err">{this.state.email_err}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 mt-3">
                                                <input type="text" id="subject" value={this.state.subject} onChange={this.handleChangeSubject} className="form-control" placeholder="Subject" />
                                                <span id="err">{this.state.subject_err}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 mt-3">
                                                <textarea name="comments" id="comments" value={this.state.message} onChange={this.handleChangeMessage} rows="6" className="form-control" placeholder="Your Message..."></textarea>
                                                <span id="err">{this.state.message_err}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <input type="button" id="submit" name="send" onClick={this.handleSubmit1} className="submitBnt btn btn-custom" value="Submit" /> 
                                            <div id="simple-msg"></div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                <p className="text-center submit-terms mb-0 mt-3">
                                                    Your inquiry will help us better serve you. We look forward to welcoming you to our community.
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 pt-5 pb-2">
                            <div className="col-md-12">
                                <div className="text-white footer-alt">
                                    <div className="float-right">
                                        <ul className="list-inline social pb-0">
                                            <li className="list-inline-item pl-2">
                                                <Link to="#" className="text-white">
                                                    <i className="mdi mdi-facebook"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item pl-2">
                                                <Link to="#" className="text-white">
                                                    <i className="mdi mdi-twitter"></i>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item pl-2">
                                                <Link to="#" className="text-white">
                                                    <i className="mdi mdi-instagram"></i>
                                                </Link>
                                            </li>
                                        </ul>
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

export default Footer;