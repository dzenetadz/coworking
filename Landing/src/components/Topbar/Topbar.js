import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Topbar extends Component{
    
    render(){
        return(
            <AUX>
                 <div className="topbar"> 
                    <div className="container"> 
                        <div className="float-left">             
                        </div>
                        <div className="float-right">
                            <ul className="list-inline social pb-0 pt-2">
                                <li className="list-inline-item pl-2"><Link to="#" className="text-white"><i className="mdi mdi-facebook"></i></Link></li>
                                <li className="list-inline-item pl-2"><Link to="#" className="text-white"><i className="mdi mdi-twitter"></i></Link></li>
                                <li className="list-inline-item pl-2"><Link to="#" className="text-white"><i className="mdi mdi-instagram"></i></Link></li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
        </AUX>
        );
    }
}

export default Topbar;   