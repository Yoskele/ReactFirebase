import React, { useContext, useState,  } from 'react';
//import { Redirect, withRouter } from 'react-router';
import { ForexCompanyContext} from '../../context/ForexCompanyContext';
import { Link } from 'react-router-dom';

const CreateForexCompany = (props) => {

    const {CreateForex} = useContext(ForexCompanyContext);

    const [ metaTitle, setMetaTitle ]                   = useState('');
    const [ metaDescription, setMetaDescription ]       = useState('');
    const [ name, setName ]                             = useState('');

    const [ infoBox, setInfoBox ]                       = useState('');
    const [ firstBenefit, setFirstBenefit]              = useState('');
    const [ secondBenefit, setSecondBenefit]            = useState('');
    const [ thirdBenefit, setThirdBenefit]              = useState('');
    const [ possetiveList, setPossetiveList ]            = useState('');
    const [ firstContent, setFirstContent ]             = useState('');
    const [ secondContent, setSecondContent ]           = useState('');
    const [ thirdContent, setThirdContent ]             = useState('');
    const [ logo, setLogo ]                             = useState(null);

    const [ firstImage, setFirstImage ]                 = useState(null);
    const [ secondImage, setSecondImage ]               = useState(null);
    const [ thirdImage, setThirdImage ]                 = useState(null);


    const [ companySaved, setCompanySaved ]             = useState(false);
    const [ warnigLabel, setWarningLabel ]              = useState('');
    const [ depositAmount, setDepositAmount]            = useState('');
    const [ rating, setRating ]                         = useState('');
    const [ affiliateLink, setAffiliateLink ]           = useState('');
   

    const submitForm = async(e) => {
        e.preventDefault();
        setCompanySaved(true)
        let forexCompany = {
            metaTitle       : metaTitle,
            metaDescription : metaDescription,
            name            : name,
            logo            : logo,
            infoBox         : infoBox,
            firstBenefit    : firstBenefit,
            secondBenefit   : secondBenefit,
            thirdBenefit    : thirdBenefit,
            possetiveList   : possetiveList,
            firstImage      : firstImage,
            secondImage     : secondImage,
            thirdImage      : thirdImage,
            firstContent    : firstContent,
            secondContent   : secondContent,
            thirdContent    : thirdContent,
            depositAmount   : depositAmount,
            rating          : rating,
            warningLabel    : warnigLabel,
            affiliateLink   : affiliateLink,
           
        }   
        await CreateForex(forexCompany);
        setCompanySaved(false)
    }

    let companyForm;
    if(companySaved){
        companyForm =   <div> Saving... </div> 
    }else {
        companyForm = 
        <div>
             <form onSubmit={submitForm}>
                <h1>Create Forex Company </h1>
               
                <div className="m-5">  
                    <h6 className="mt-2">MetaTitle:</h6>
                    <input 
                        required
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setMetaTitle( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">MetaDescription:</h6>
                    <input 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setMetaDescription( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">Name:</h6>
                    <input 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setName( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">Logo:</h6>
                    <input 
                        required
                        type="file"  
                        className="w-100 border p-2"
                        onChange={ (e) => setLogo( e.target.files[0] ) } 
                    />
                </div>
                <div className="d-flex flex-wrap  justify-content-around">
                    
                    <div className="m-5">
                        <h6> First benefit: </h6>
                        <input 
                            type="text"  
                            className="w-100 border p-2"
                            onChange={ (e) => setFirstBenefit( e.target.value ) } 
                        />
                    </div>
                    <div className="m-5">
                        <h6> Second benefit: </h6>
                        <input 
                            type="text"  
                            className="w-100 border p-2"
                            onChange={ (e) => setSecondBenefit( e.target.value ) } 
                        />
                    </div>
                    <div className="m-5">
                        <h6> Third benefit: </h6>
                        <input 
                            type="text"  
                            className="w-100 border p-2"
                            onChange={ (e) => setThirdBenefit( e.target.value ) } 
                        />
                    </div>
                </div>
                <div className="m-5">
                    <h6> Possetive List: </h6>
                    <textarea 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setPossetiveList( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">Info box:</h6>
                    <textarea 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setInfoBox( e.target.value ) } 
                    />
                </div>
               
                <div className="m-5">  
                    <h6 className="mt-2">First Content:</h6>
                    <textarea 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setFirstContent( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">First Image:</h6>
                    <input 
                        type="file"  
                        className="w-100 border p-2"
                        onChange={ (e) => setFirstImage( e.target.files[0] ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">Second Content:</h6>
                    <textarea 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setSecondContent( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2"> Second Image:</h6>
                    <input 
                        type="file"  
                        className="w-100 border p-2"
                        onChange={ (e) => setSecondImage( e.target.files[0] ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">Third Content:</h6>
                    <textarea 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setThirdContent( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2"> Third Image:</h6>
                    <input 
                        type="file"  
                        className="w-100 border p-2"
                        onChange={ (e) => setThirdImage( e.target.files[0] ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">Warning label:</h6>
                    <input 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setWarningLabel( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">Deposit Amount:</h6>
                    <input 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setDepositAmount( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">Rating:</h6>
                    <input 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setRating( e.target.value ) } 
                    />
                </div>
                <div className="m-5">  
                    <h6 className="mt-2">Affiliate Link:</h6>
                    <input 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setAffiliateLink( e.target.value ) } 
                    />
                </div>
                
               


                <div className="container d-flex justify-content-between">
                    <Link to="/admin/forex-companies/" 
                        className="btn btn-dark mt-5"> 
                        Back to Company list
                    </Link>

                    <input 
                        type="submit"
                        className="btn btn-success mt-5"
                        value="Save"
                        onSubmit={submitForm} 
                    />
                </div>
            </form>   
        </div>
    }
    return(
        <React.Fragment>
            {companyForm}
        </React.Fragment>
    );
};
export default CreateForexCompany;
