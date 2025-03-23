import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Counter extends Component{
    
    render(){
        return(
            <AUX>
             <section className="section bg-custom">
                <div className="container">
                    <div className="row justify-content-center" id="counter">
                        <div className="col-md-3 text-white text-center pt-3 pb-3">
                            <div className="counter-icon">
                                <i className="mdi mdi-table"></i>
                            </div>
                            <h1 className="counter-value" data-count="120">0</h1>
                            <h5 className="counter-name">Desks Available</h5>
                        </div>

                        <div className="col-md-3 text-white text-center pt-3 pb-3">
                            <div className="counter-icon">
                                <i className="mdi mdi-calendar"></i>
                            </div>
                            <h1 className="counter-value" data-count="490">10</h1>
                            <h5 className="counter-name">Events Hosted</h5>
                        </div>

                        <div className="col-md-3 text-white text-center pt-3 pb-3">
                            <div className="counter-icon">
                                <i className="mdi mdi-domain"></i>
                            </div>
                            <h1 className="counter-value" data-count="27">608</h1>
                            <h5 className="counter-name">Partner Companies</h5>
                        </div>
                        <div className="col-md-3 text-white text-center pt-3 pb-3"> 
                            <div className="counter-icon">
                                <i className="mdi mdi-account-multiple"></i>
                            </div>                       
                            <h1 className="counter-value" data-count="800">2</h1>
                            <h5 className="counter-name">Community Members</h5>
                        </div>
                    </div>
                </div>
           </section>
           </AUX>
        );
    }
}

export default Counter;   