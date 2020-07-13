import React, { useContext, useEffect } from 'react';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';


const RandomCompany = (props) => {
    const { companies } = useContext(ForexCompanyContext);
    let number = Math.floor(Math.random()*companies.length);
    let roof;
    let randomCompany;
    if(number === 0 ){
        randomCompany = companies.slice(number,1);
    }else {
        roof = number + 1;
        randomCompany = companies.slice(number,roof);
    }
    

    // We are maping even though we have only one company... Due to that the company is inside an Array.
    const bannerCompany = randomCompany.length ? (
        randomCompany.map( company => {
            return(
                <div className="container   card align-items-center  p-3 text-center mt-2" key={company.id}>
                    <img src={company.data.logo} alt={company.data.name} style={{width:"170px", height:'80px'}} className="rounded  img-fluid" />
                    <p className="mt-2">{company.data.rating}</p>
                    <button className="btn btn-primary ">Besök {company.data.name} </button>
                    <label style={{fontSize:"0.7rem"}} className="mt-2">{company.data.warningLabel}</label>
                </div>
            )
        })
    ) : (
        <div>Loading...</div>
    );
  
    useEffect( () => {

    },[])
    

    return(
        <React.Fragment>
            <div className="container ">
                {bannerCompany}
            </div>
        </React.Fragment>
    )
}

export default RandomCompany;