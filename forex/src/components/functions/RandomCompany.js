import React, { useContext, useEffect } from 'react';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';
import { Link } from 'react-router-dom';

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
                <div className=" card  mt-4 p-1" key={company.id} >
                    <div className="d-flex flex-wrap ">
                        <img src={company.data.logo}
                            alt={company.data.name}
                            style={{width:"300px", height:"120px"}}
                            className=""
                        />
                        <div style={{fontSize:"0.8rem", width:"550px"}} className="d-none d-xl-block">
                            <ul className="nopadding h-100" 
                                dangerouslySetInnerHTML={{ __html:company.data.possetiveList }}
                            >
                            

                            </ul>
                        </div>
                        <div className=" d-flex flex-grow-1 flex-column justify-content-around align-items-center text-center"
                            style={{minWidth:"250px"}}
                        >
                            <h6 className="" >{company.data.name}</h6>
                            <b>{company.data.rating}</b>
                            <Link to={{
                                pathname:`/recension/${company.data.name}`,
                            }}>Läs Recension </Link>
                        </div>
                    
                        <button className="btn btn-primary flex-grow-1 w-100 mt-2 mt-md-0" 
                        style={{    backgroundColor:'#0070ba',
                            backgroundImage: 'linear-gradient(100deg,#0070ba,#1546a0)'}} 
                        > 
                            Besök {company.data.name}
                        </button>
                    </div>
                    
                    <div className="card-footer text-center mt-2 mt-md-0"> 
                        <div className="row "> 
                            <p className="m-0 col-sm"> Språk: 🇸🇪</p>
                            <p className="m-0 col-sm"> Demokonto:✔️</p>
                            <p className="m-0 col-sm"> Minsta första insättning:<b>{company.data.depositAmount}</b> </p>
                        </div>
                        <label style={{fontSize:"0.75rem"}} className="m-0"> Riskvarning: 67-68% av privatinvesterare förlorar pengar vid CFD-handel med denna leverantör. </label>
                    </div>
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