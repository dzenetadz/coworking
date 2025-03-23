import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import EditButton from '../../../components/UI/EditButton'; 

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        {
          id: 1,
          price: '$50',
          title: 'Student',
          description:
            'Affordable access for students with basic amenities and community networking.',
        },
        {
          id: 2,
          price: '$150',
          title: 'Flex 10',
          description:
            'Enjoy 10 days of flexible coworking space access—ideal for short-term projects.',
        },
        {
          id: 3,
          price: '$300',
          title: 'Professional',
          description:
            'Full access with premium amenities, dedicated workspaces, and exclusive networking events.',
        },
      ],
    };
  }

  updatePlan = (updatedPlan) => {
    this.setState((prevState) => ({
      plans: prevState.plans.map((plan) =>
        plan.id === updatedPlan.id ? updatedPlan : plan
      ),
    }));
  };

  render() {
    const { plans } = this.state;
    return (
      <AUX>
        <section className="section bg-light" id="pricing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="text-center">
                  <div className="title-icon">
                    <i className="mdi mdi-cash"></i>
                  </div>
                  <h3 className="section-title pt-5">Our Pricing</h3>
                  <p className="section-subtitle pt-3 text-muted">
                    Choose the plan that fits your coworking needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              {plans.map((plan) => (
                <div key={plan.id} className="col-lg-4">
                  <div className="price-box p-5 bg-white text-center mt-4">
                    {/* <EditButton
                      title={plan.title}
                      description={plan.description}
                      price={plan.price}
                      onSave={(data) =>
                        this.updatePlan({ ...plan, ...data })
                      }
                    /> */}
                    <div className="plan-price">
                      <h2>{plan.price}</h2>
                    </div>
                    <div className="plan-name mt-4">
                      <h6>{plan.title}</h6>
                    </div>
                    <div className="plan-desc mt-4">
                      <p className="mb-0 text-muted">{plan.description}</p>
                    </div>
                    <div className="mt-5">
                      <Link to="signup" className="btn btn-custom btn-rounded">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AUX>
    );
  }
}

export default Pricing;