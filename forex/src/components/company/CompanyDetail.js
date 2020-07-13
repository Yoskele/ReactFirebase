import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';


const CompanyDetail = (props) => {
    // bring the company.
    const { getCompany } = useContext(ForexCompanyContext);
    const [ company, setCompany ] = useState('');

    
    useEffect( () => {
        async function findCompany() {
            const theCompany = await getCompany(props.match.params.name)
            .catch( err => {
                console.log(err);
            });
            setCompany(theCompany)
        }    
        findCompany();
        
    },[props.match.params.name, getCompany])
   
    return(
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{company.metatitle}</title>
                <meta name="description" content="Safe site Yooooooooo!" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            

            <div> Yosososososos</div>





            <div className="d-flex flex-wrap justify-content-center">
                <img src={company.logo} alt={company.name} style={{maxWidth:"350px", height:"200px"}} />
                <div  className="">
                    <p className="text-center p-2">
                        {company.infoBox}
                    </p>

                    <div className="d-flex flex-wrap justify-content-around">
                        <div className="mt-1"> {company.firstBenefit}</div>
                        <div className="mt-1"> {company.secondBenefit} </div>
                        <div className="mt-1"> {company.thirdBenefit} </div>
                    </div>
                    <button className="btn btn-primary flex-grow-1 w-100 mt-2" 
                        style={{    backgroundColor:'#0070ba',
                            backgroundImage: 'linear-gradient(100deg,#0070ba,#1546a0)',
                        }} 
                        > 
                            Besök {company.name}
                    </button>
                    <div className="card-footer text-center d-flex justify-content-around flex-wrap "> 
                        <p className="m-0"> Språk: 🇸🇪</p>
                        <label style={{fontSize:"0.75rem"}} className="m-0"> Riskvarning: 67-68% av privatinvesterare förlorar pengar vid CFD-handel med denna leverantör.</label>
                        <p className="m-0"> Demokonto:✔️</p>
                    </div>
                </div>
            </div>
            
            <div dangerouslySetInnerHTML={{ __html:company.firstContent }}
                className="mt-3"
            /> 
            <div className="container d-flex justify-content-center mt-3"> 
                 <img src={company.firstImageUrl} 
                    alt={company.name}
                    className="img-fluid rounded"
                    style={{maxWidth:"100%", height:'auto'}}
                /> 
            </div>
           

            <div dangerouslySetInnerHTML={{ __html:company.secondContent }}
                className="mt-3"
            />
            <div className="container d-flex justify-content-center mt-3"> 
                 <img src={company.secondImageUrl} 
                    alt={company.name}
                    className="img-fluid rounded"
                    style={{maxWidth:"100%", height:'auto'}}
                /> 
            </div>


            <div dangerouslySetInnerHTML={{ __html:company.thirdContent }}
                className="mt-3"
            />
            <div className="container d-flex justify-content-center mt-5"> 
                 <img src={company.thirdImageUrl} 
                    alt={company.name}
                    className="img-fluid rounded"
                    style={{maxWidth:"100%", height:'auto'}}
                /> 
            </div>


            <div className="w-100 d-flex flex-column align-items-center mt-3"> 
                <div style={{maxWidth:"800px", maxHeight:"400px"}}>
                    <img src={company.tradingPlatformUrl}
                        alt={company.name} 
                        className="img-fluid"
                    />
                </div>
            </div>
            <h3 className="mt-4"> {company.secondtitle} </h3>
            <div className="mt-4" dangerouslySetInnerHTML={{ __html:company.secondcontent }} /> 




            <div class="fb-comments" data-href="http://localhost:3000/recension/Hycm" data-numposts="100" data-width=""></div>




        </React.Fragment>
    )
}

export default CompanyDetail;