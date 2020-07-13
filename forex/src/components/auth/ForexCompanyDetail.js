import React, { useState, useContext, useRef, useEffect } from 'react';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { Link, Redirect } from 'react-router-dom';
const ForexCompanyDetail = (props) => {

    const [routeRedirect, setRedirect] = useState(false); 
    const [ isBusy, setIsBusy ] = useState(false);
    const [ isBusyUploadImage, setIsBusyUploadImage ] = useState(false);
    const [loading, setLoading] = useState("");
    const { getCompany, updateForexCompany } = useContext(ForexCompanyContext);

    // Company get set at UseEffect at findCompany.
    const [ company, setCompany ] = useState('');

    const metatitleRef = useRef(null)
    const metadescriptionRef = useRef(null)
    const nameRef = useRef(null)
    const infoBoxRef = useRef(null)
    const possetiveListRef = useRef(null)
    const firstBenefitRef = useRef(null)
    const secondBenefitRef = useRef(null)
    const thirdBenefitRef = useRef(null)

    const firstContentRef = useRef(null)
    const secondContentRef = useRef(null)
    const thirdContentRef = useRef(null)

    const warningLabelRef = useRef(null)
    const depositAmountRef = useRef(null)
    const ratingRef = useRef(null)
    const affiliateLinkRef = useRef(null)
    // Bring the company from firebase.
    const findCompany = async(companyName) => {
        const theCompany = await getCompany(companyName)
        .catch( err => {
            console.log(err);
        });
        setCompany(theCompany)
    }    
    useEffect( () => {
        findCompany(props.match.params.name);
    },[props.match.params.name])

    const [ logo, setLogo ] = useState({});
    const handleLogo = async(e) => {
        console.log('logo ', logo)
        setIsBusyUploadImage(true)
        // Bring Database.
        const logoStorage = firebase.storage().ref();
        // Bring the new File from input.
        const newLogo = e.target.files[0];
        // Store the old logo.
        logo["oldLogo"] = company.filePathLogo;
        // if We have an old file.
        if(company.logo){
            console.log('We have an old logo ');
            // Delete the old Logo.
            await logoStorage.child(logo["oldLogo"]).delete()
            .then( async() => {
                console.log('then...');

                // give a name for the file to storage.
                const logoName = logoStorage.child(`companiesImages/${company.name}/${newLogo.name}`);
                // Put the file in to storage.
                const fireBaseLogo = await logoName.put(newLogo);
                const logoUrl = await logoName.getDownloadURL();
                const filePathLogo = fireBaseLogo.ref.location.path;
                const updateLogo = {
                    logo:logoUrl,
                    filePathLogo:filePathLogo
                }
                const logoSent = await firebase.firestore().collection("ForexCompanies")
                .doc(company.name)
                .set(updateLogo, {merge:true} )
                .then( () => {
                    findCompany(company.name)
                    setIsBusyUploadImage(false);
                })
                .catch( err => {
                    console.log(err);
                })
                console.log("Logo saved successfully");
                return logoSent;
            })
        } else {
            console.log('No Image Before.')
        }
    }
    const [ firstImage, setFirstImage ] = useState({});
    const handleFirstImage = async(e) => {
        setIsBusyUploadImage(true);
        // if we have a old file delete it.
        const newImage = e.target.files[0];
        // Store the old file in forexImage Object.
        firstImage["oldImage"] = company.firstImagePath;
        const imageStorage = firebase.storage().ref();
        if(company.firstImageUrl){
            // Delete if we have an old image
            await imageStorage.child(firstImage["oldImage"]).delete()
            console.log('Deleted old Image.')
        }
        const imageName = imageStorage.child(`companiesImages/${company.name}/${newImage.name}`);
        // Put in the file to storage.
        const image = await imageName.put(newImage);
        // Bring the url.
        var imageUrl = await imageName.getDownloadURL();
        // get the path that we can insert in to the doc.
        var firstImagePath = image.ref.location.path;
        let updateImage= {
            firstImageUrl : imageUrl,
            firstImagePath : firstImagePath
        }
        const imageSent = await firebase.firestore().collection("ForexCompanies")
        .doc(company.name)
        .set(updateImage, {merge:true} )
        .then( () => {
            findCompany(company.name)
            setIsBusyUploadImage(false);
        })
        .catch( err => {
            console.log(err);
        })
        
       
        console.log('DOOOOONE MY MAN!')
    }
    

    const [ secondImage, setSecondImage ] = useState({});
    const handleSecondImage = async(e) => {
        setIsBusyUploadImage(true);
        // if we have a old file delete it.
        const newImage = e.target.files[0];
        // Store the old file in forexImage Object.
        secondImage["oldImage"] = company.secondImagePath;
        const imageStorage = firebase.storage().ref();
        if(company.secondImageUrl){
            // Delete if we have an old image
            await imageStorage.child(secondImage["oldImage"]).delete()
            console.log('Deleted old Image.')
        }

        const imageName = imageStorage.child(`companiesImages/${company.name}/${newImage.name}`);
        // Put in the file to storage.
        const image = await imageName.put(newImage);
        // Bring the url.
        var imageUrl = await imageName.getDownloadURL();
        // get the path that we can insert in to the doc.
        var secondImagePath = image.ref.location.path;
        let updateImage= {
            secondImageUrl : imageUrl,
            secondImagePath : secondImagePath
        }
        const imageSent = await firebase.firestore().collection("ForexCompanies")
        .doc(company.name)
        .set(updateImage, {merge:true} )
        .then( () => {
            findCompany(company.name)
            setIsBusyUploadImage(false);
        })
        .catch( err => {
            console.log(err);
        })
       
        console.log('DOOOOONE MY MAN!')
    }


    // Handle the 
    const [ thirdImage, setThirdImage ] = useState({});
    const handleThirdImage = async(e) => {
        setIsBusyUploadImage(true);
        let file = e.target.files[0];
        thirdImage["oldImage"] = company.thirdImagePath;
        const imageStorage = firebase.storage().ref();
        if(company.thirdImageUrl){
            // Delete if we have an old image
            await imageStorage.child(thirdImage["oldImage"]).delete()
            console.log('Deleted old Image.')
        }
        const imageName = imageStorage.child(`companiesImages/${company.name}/${file.name}`);
        // Put in the file to storage.
        const image = await imageName.put(file);
        // Bring the url.
        var imageUrl = await imageName.getDownloadURL();
        // get the path that we can insert in to the doc.
        var thirdImagePath = image.ref.location.path;
        let updateImage= {
            thirdImageUrl : imageUrl,
            thirdImagePath : thirdImagePath
        }
        const imageSent = await firebase.firestore().collection("ForexCompanies")
        .doc(company.name)
        .set(updateImage, {merge:true} )
        .then( () => {
            findCompany(company.name)
            setIsBusyUploadImage(false);
        })
        .catch( err => {
            console.log(err);
        })
        console.log('DOOOOONE MY MAN!')
    }






    // Delete Company.
    const deleteCompany = async() => {
        // Collect all images from the document.
        setIsBusy(true);

        let arrayImages = [company.filePathLogo, company.firstImagePath, company.secondImagePath, company.thirdImagePath];
        console.log('arrayImages ', arrayImages)
        const storageRef = firebase.storage().ref();
        arrayImages.forEach( async(image) => {
            try{
                await storageRef.child(image).delete().catch( err => {
                    console.log(err);
                });
            } catch{

            }
        })
        await firebase.firestore().collection("ForexCompanies").doc(company.name).delete()
        .catch( err => {
            console.log(err);
        })
        console.log('Company delete from Firebase!');
        setIsBusy(false);
        setRedirect(true);
    };

    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/admin/forex-companies" />  
    }
    const submitChange = async (e) =>{
        e.preventDefault();
        setIsBusy(true);
        // Save the url to object. // The Values comes straight from the Form.
        const updateCompany = {
            metatitle       : metatitleRef.current.value,
            metadescription : metadescriptionRef.current.value,
            name            : nameRef.current.value,
            firstContent    : firstContentRef.current.value,
            secondContent   : secondContentRef.current.value,
            thirdContent    : thirdContentRef.current.value,
            infoBox         : infoBoxRef.current.value,
            possetiveList   : possetiveListRef.current.value,
            firstBenefit    : firstBenefitRef.current.value,
            secondBenefit   : secondBenefitRef.current.value,
            thirdBenefit    : thirdBenefitRef.current.value,
            warningLabel    : warningLabelRef.current.value,
            depositAmount   : depositAmountRef.current.value,
            rating          : ratingRef.current.value,
            affiliateLink   : affiliateLinkRef.current.value,
        }
        console.log('updateCompany object ', updateCompany)
        await firebase.firestore().collection("ForexCompanies")
        .doc(company.name)
        .set(updateCompany, {merge:true} )
        .then( () => {
            setIsBusy(false);
        })
        .catch( err => {
            console.log(err);
        })
        console.log('Submited the form.');   
        window.location.reload(false);
    } 

    let updateForm;
    if(isBusy){
        updateForm = (
            <React.Fragment>
                <div className="processing container">
                    <p>Request is being processed <span className="process"> {loading}%</span></p>
                    <div className="loader">Loading...</div>
                </div>
            </React.Fragment>
        )
    } else {
        updateForm = (
            <React.Fragment>
                <h1> Hello {company.name}</h1>
                <br />

                <form onSubmit={submitChange}>
                        
                        <div className="m-5">
                            <h6> Meta Title: </h6>
                            <input 
                                type="text" 
                                ref={metatitleRef}
                                defaultValue={company.metatitle} 
                                className="w-100 border p-2"
                            />
                        </div>
                        <div className="m-5">
                            <h6> Meta Description: </h6>
                            <input 
                                type="text" 
                                ref={metadescriptionRef}
                                defaultValue={company.metadescription} 
                                className="w-100 border p-2"
                            />
                        </div>
                        <div className="m-5">
                            <h6> Name: </h6>
                            <input 
                                type="text" 
                                ref={nameRef}
                                defaultValue={company.name} 
                                className="w-100 border p-2"
                            />
                        </div>
                        <div className="m-5">
                            <h6> Info Box: </h6>
                            <textarea 
                                type="text" 
                                ref={infoBoxRef}
                                defaultValue={company.infoBox} 
                                className="w-100 border p-2"
                            />
                        </div>
                        <div className="m-5">
                            <h6> Possetive List: </h6>
                            <textarea 
                                type="text" 
                                ref={possetiveListRef}
                                defaultValue={company.possetiveList} 
                                className="w-100 border p-2"
                            />
                        </div>
                        <div className="d-flex flex-wrap  justify-content-around">
                            <div className="m-5">
                                <h6> First Benefit: </h6>
                                <input 
                                    type="text" 
                                    ref={firstBenefitRef}
                                    defaultValue={company.firstBenefit} 
                                    className="w-100 border p-2"
                                />
                            </div>
                            <div className="m-5">
                                <h6> Second Benefit: </h6>
                                <input 
                                    type="text" 
                                    ref={secondBenefitRef}
                                    defaultValue={company.secondBenefit} 
                                    className="w-100 border p-2"
                                />
                            </div>
                            <div className="m-5">
                                <h6> Third Benefit: </h6>
                                <input 
                                    type="text" 
                                    ref={thirdBenefitRef}
                                    defaultValue={company.thirdBenefit} 
                                    className="w-100 border p-2"
                                />
                            </div>
                        </div>
                        
                        <div className="m-5">
                            <h6> First Content: </h6>
                            <textarea 
                                type="text" 
                                ref={firstContentRef}
                                defaultValue={company.firstContent} 
                                className="w-100 border p-2"
                            />
                        </div>
                        
                        <div className="m-5">
                            <h6> Second Content: </h6>
                            <textarea 
                                type="text"
                                ref={secondContentRef}
                                defaultValue={company.secondContent} 
                                className="w-100 border p-2"
                            />
                        </div>

                        <div className="m-5">
                            <h6> Third Content: </h6>
                            <textarea 
                                type="text"
                                ref={thirdContentRef}
                                defaultValue={company.thirdContent} 
                                className="w-100 border p-2"
                            />
                        </div>

                        <div className="m-5">
                            <h6> Warning Label: </h6>
                            <input 
                                type="text" 
                                ref={warningLabelRef}
                                defaultValue={company.warningLabel} 
                                className="w-100 border p-2"
                            />
                        </div>
                        
                        <div className="m-5">
                            <h6> Deposit Amount: </h6>
                            <input 
                                type="text" 
                                ref={depositAmountRef}
                                defaultValue={company.depositAmount} 
                                className="w-100 border p-2"
                            />
                        </div>

                       
                        <div className="m-5">
                            <h6> Rating: </h6>
                            <input 
                                type="text" 
                                ref={ratingRef}
                                defaultValue={company.rating} 
                                className="w-100 border p-2"
                            />
                        </div>

                        <div className="m-5">
                            <h6> Affiliate Link: </h6>
                            <input 
                                type="text" 
                                ref={affiliateLinkRef}
                                defaultValue={company.affiliateLink} 
                                className="w-100 border p-2"
                            />
                        </div>
                        <div className="d-flex w-50 mx-auto justify-content-around">
                        <b 
                            onClick={ (e) => deleteCompany()}
                            className="btn btn-danger "
                        >  Delete {company.name} </b> 
                            <button 
                                onClick={submitChange}
                                className="btn btn-success"
                            > Update </button> 
                        </div>
                    </form>

            </React.Fragment>
        )
    }




    let updateImages;
    

    if(isBusyUploadImage){
        updateImages = (
            <React.Fragment>
                <div className="processing">
                    <h1> UPLOADING IMAGE!!!</h1>
                </div>
            </React.Fragment>
        )
    } else {
        updateImages = (
            <React.Fragment>
                <div className="row m-5 ">
                    <div className="card  border border-black m-3" >
                        <img src={company.logo} style={{width: "300px",  heigth:"300px"}}/>
                        <label> Logo </label>
                        <input type="file" onChange={handleLogo}  className="d-block mt-2" /> 
                    </div>
                    <div className="card  border border-black m-3">
                        <img src={company.firstImageUrl} alt="bla"  style={{width: "300px", heigth:"300px"}} />
                        <br />
                        <label> First Image </label>
                        <br />
                        <input type="file" onChange={handleFirstImage} /> 
                        <br />
                    </div>

                    <div className="card  border border-black m-3">
                        <img src={company.secondImageUrl} alt="bla"  style={{width: "300px", heigth:"300px"}} />
                        <br />
                        <label> Second Image </label>
                        <br />
                        <input type="file" onChange={handleSecondImage} /> 
                        <br />
                    </div>

                    <div className="card  border border-black m-3">
                        <img src={company.thirdImageUrl} alt="bla"  style={{width: "300px", heigth:"300px"}} />
                        <br />
                        <label> Third Image </label>
                        <br />
                        <input type="file" onChange={handleThirdImage} /> 
                        <br />
                    </div>




                  
                </div> 
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            {updateForm}
            {updateImages}
        </React.Fragment>
    );
}

export default ForexCompanyDetail;  