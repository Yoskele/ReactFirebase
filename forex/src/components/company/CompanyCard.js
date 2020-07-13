import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';


const CompanyCard = (x) => {
    const { companies } = useContext(ForexCompanyContext);

    const companyList = companies.length ? (
        companies.map( company => {
            return(
                <div className=" card  mt-4 p-3" key={company.id} >
                    <div className="d-flex flex-wrap ">
                        <img src={company.data.logo}
                            alt={company.data.name}
                            style={{width:"300px", height:"120px"}}
                            className="img-fluid"
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
                       
                        <button className="btn btn-primary shineButton flex-grow-1 w-100 mt-2 mt-md-0" 
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
                            <p className="m-0 col-sm"> Minsta första insättning:<b>€ 100 </b> </p>
                        </div>
                        <label style={{fontSize:"0.75rem"}} className="m-0"> Riskvarning: 67-68% av privatinvesterare förlorar pengar vid CFD-handel med denna leverantör. </label>
                    </div>
                </div>
            )
        })
    ) : (
        <div>Loading...</div>
    )
    return(
        <div>
            <div>
                {companyList}
            </div>
            
        </div>
    )
}

export default CompanyCard;