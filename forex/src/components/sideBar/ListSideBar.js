import React, { useEffect } from 'react';


import metaTrader from '../../imagesFolder/metaTrader.png';
import socialTrading from '../../imagesFolder/socialTrading.jpg';

const ListSideBar = () => {

    useEffect( () =>{
        
    },[])

    return(
        <React.Fragment>
            <div className="card align-items-center p-2 m-3" style={{width: "20rem"}}>
                <img src={metaTrader} alt="meta trader 4"
                    style={{width:"250px", height:"200px"}}
                    className="card-img-top " 
                />
                <div className="card-body  d-flex flex-column justify-content-between">
                    <h5 className="card-title">Handelsplattformen Meta Trader 4</h5>
                    <button className="btn btn-primary  w-50"> Las mer </button>
                    
                </div>
            </div>

            <div className="card align-items-center p-2 m-3" style={{width: "20rem"}}>
                <img src={socialTrading} alt="meta trader 4"
                    style={{width:"250px", height:"200px"}}
                    className="card-img-top " 
                />
                <div className="card-body w-100  d-flex flex-column justify-content-between">
                    <h5 className="card-title">Hur fungerar social Trading</h5>
                    <button className="btn btn-primary w-50"> Las mer </button>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ListSideBar;
