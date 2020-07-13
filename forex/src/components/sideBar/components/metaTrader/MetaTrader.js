import React from 'react';
import { Link } from 'react-router-dom';
import MetaTraderImage from '../metaTrader/metaTrader.png';

const MetaTrader = () => {
    return(
        <Link to="/meta-trader-4/"
            className="w-75 row text-dark mt-3"
            style={{borderRadius:"5px", border:"1px solid lightgray"}}
        >
            <div className="col-4">
            <img src={MetaTraderImage} alt="Meta Trader" style={{width:"120px", height:'80px'}} className="rounded  img-fluid m-1" />
            </div>
            <div className="col-8 d-flex flex-column  justify-content-center ">
                <h6 className="align-middle">Handelsplattformen Meta Trader 4 </h6>
            </div>
        </Link>
    )
};

export default MetaTrader;