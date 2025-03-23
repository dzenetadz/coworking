import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'JohnDoe',             
      email: 'john@example.com',        
      plan: 'Professional',          
      planDetails: 'You are currently subscribed to the Professional plan. Enjoy premium benefits, access to all coworking amenities, and exclusive member events.',
    };
  }
  
  render() {
    return (
      <AUX>
        <section className="section bg-light" id="account">
        <section className="" >
            <div className="container-fluid">
                <div className="col-lg-12">
                    <div className="home-icon">
                        <Link to="index_1" onClick={()=>this.props.UpdateLoginAgain()}  className="text-dark"><i id="my_icon" className="mdi mdi-home"></i></Link>
                         </div>
                    </div>
                </div>
        </section>
          <div className="container">
         
            <div className="row justify-content-center pt-5">
              <div className="col-md-8 text-center">
                <div className="title-icon">
                  <i className="mdi mdi-account-circle"></i>
                </div>
                <h3 className="section-title pt-5">My Account</h3>
                <p className="section-subtitle pt-3 text-muted">
                  Review your membership details and current plan.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="account-box p-4 bg-white rounded">
                  <h5 className="mb-3">User Details</h5>
                  <p><strong>Username:</strong> {this.state.username}</p>
                  <p><strong>Email:</strong> {this.state.email}</p>
                  <Link to="/account/edit" className="btn btn-custom btn-rounded mt-3">
                    Edit Profile
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="account-box p-4 bg-white rounded">
                  <h5 className="mb-3">Membership Plan</h5>
                  <p><strong>Plan:</strong> {this.state.plan}</p>
                  <p>{this.state.planDetails}</p>
                  <Link to="/pricing" className="btn btn-custom btn-rounded mt-3">
                    Change Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AUX>
    );
  }
}

export default Account;