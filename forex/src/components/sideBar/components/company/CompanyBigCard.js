import React, { useState, useContext, useEffect } from 'react';
import { ForexCompanyContext } from '../../../../context/ForexCompanyContext';
import { Link } from 'react-router-dom';
/* This is for the sidebar */
const CompanyBigCard = () => {
    const { companies } = useContext(ForexCompanyContext);

    let shortList = companies.slice(2,4)
    let bigList = companies.slice(0,6);
    const [ displaySmallList, setDisplaySmallList ] = useState(true);

    let list;
    if(displaySmallList){
        list = shortList.map( company => {
            return(
                <div className="mt-4 mx-auto d-flex flex-column justify-content-between align-items-center"
                    style={{width:'20rem', height:"300px", borderRadius:"10px", border:"1px solid lightgray"}}
                    key={company.id}
                    >
                    <img src={company.data.logo} alt={company.data.name} 
                        className="img-fluid mt-2 rounded"
                        style={{width:"250px", height:"120px"}}
                    />
                    <p>{company.data.rating}</p>
                    
                    <Link to={{
                                pathname:`/recension/${company.data.name}`,
                            }}
                            className="mt-2"
                    >
                        Läs Recension 
                    </Link>

                    <a href={company.data.affiliateLink}
                        className="btn btn-primary mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Besök {company.data.name}
                    </a>
                    <label style={{fontSize:'0.7rem'}} className="text-center"> {company.data.warningLabel} </label>
                </div> 
            )
        })
    } else {
        list = bigList.map( company => {
            return(
                <div className="mt-4 mx-auto d-flex flex-column justify-content-between align-items-center"
                    style={{width:'20rem', height:"300px", borderRadius:"10px", border:"1px solid lightgray"}}
                    key={company.id}
                    >
                    <img src={company.data.logo} alt={company.data.name} 
                        className="img-fluid mt-2 rounded"
                        style={{width:"250px", height:"120px"}}
                    />
                    <p>{company.data.rating}</p>
                    <Link to={{
                                pathname:`/recension/${company.data.name}`,
                            }}
                            className="mt-2"
                    >
                        Läs Recension 
                    </Link>

                    <a href={company.data.affiliateLink}
                        className="btn btn-primary mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Besök {company.data.name}
                    </a>
                    <label style={{fontSize:'0.7rem'}} className="text-center"> {company.data.warningLabel} </label>
                </div> 
            )
        })
    }


    const showFullList = () => {
        setDisplaySmallList(!displaySmallList)
    }

    useEffect( () => {

    },[])

    return(
        <div className="text-center">
            <div className="row">
                {list}
            </div>
            <button className="btn btn-primary text-center w-50 mt-3" onClick={showFullList}>Visa fler </button>
        </div>
        
    )
};

export default CompanyBigCard;

