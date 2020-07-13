import React, { useContext } from 'react';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';

const CompanyMiniCard = () => {
    const { companies } = useContext(ForexCompanyContext);

    return(
        <div className="d-flex flex-wrap justify-content-around mb-2">
            { companies.map( company => {
                    return(
                        <div className="mt-4 d-flex flex-column justify-content-between align-items-center"
                            style={{width:'20rem', height:"300px", borderRadius:"10px", border:"1px solid lightgray"}}
                            key={company.id}
                            >
                           <img src={company.data.logo} alt={company.data.name} 
                                className="img-fluid mt-2 rounded"
                                style={{width:"250px", height:"120px"}}
                           />
                            <p>{company.data.rating}</p>
                            <a href={company.data.affiliateLink}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Besök {company.data.name}
                            </a>
                            <label style={{fontSize:'0.7rem'}} className="text-center"> {company.data.warningLabel} </label>
                        </div>
                    )
                })}
        </div>
    )
}
export default CompanyMiniCard;