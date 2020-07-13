import React from 'react';
import { Link } from 'react-router-dom';
import SocialTradingImage from '../socialTrading/socialTrading.jpg';

const SocialTrading = () => {
    return(
        <Link to="/social-trading/"
            className="w-75 row text-dark mt-3"
            style={{borderRadius:"5px", border:"1px solid lightgray"}}
        >
            <div className="col-4">
            <img src={SocialTradingImage} alt="Social Trading" style={{width:"120px", height:'80px'}} className="rounded  img-fluid m-1" />
            </div>
            <div className="col-8 d-flex flex-column  justify-content-center ">
                <h6 className="align-middle">Hur fungerar Social Trading? </h6>
            </div>
        </Link>
    )
};

export default SocialTrading;