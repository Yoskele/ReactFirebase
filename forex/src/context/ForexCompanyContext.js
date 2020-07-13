import React, { createContext, useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const ForexCompanyContext = createContext();

const ForexCompanyContextProvider = (props) => {


    // CREATE FOREX COMPANY!
    const CreateForex = async(forexCompany) =>{
        console.log('insinde createForex ', forexCompany)
        const storageRef = firebase.storage().ref();
        if(forexCompany.logo){
            const storageChild = storageRef.child(`companiesImages/${forexCompany.name}/${forexCompany.logo.name}` ); // california-super-lotto.png
            const forexLogo = await storageChild.put(forexCompany.logo);
            var forexLogoUrl = await storageChild.getDownloadURL();
            var filePathLogo = forexLogo.ref.location.path;
        } else {
            forexLogoUrl = null
            filePathLogo = null
        }

        if(forexCompany.firstImage){
            const storageChild = storageRef.child(`companiesImages/${forexCompany.name}/${forexCompany.firstImage.name}` ); // california-super-lotto.png
            const firstImagePut = await storageChild.put(forexCompany.firstImage);
            var firstImageUrl = await storageChild.getDownloadURL();
            var firstImagePath = firstImagePut.ref.location.path;
        } else {
            firstImageUrl = null
            firstImagePath = null
        }


        if(forexCompany.secondImage){
            const storeImage = storageRef.child(`companiesImages/${forexCompany.name}/${forexCompany.secondImage.name}`);
            const secondImagePut = await storeImage.put(forexCompany.secondImage);
            var secondImageUrl = await storeImage.getDownloadURL();
            var secondImagePath = secondImagePut.ref.location.path;
        }else {
            secondImageUrl = null
            secondImagePath = null
        }

        if(forexCompany.thirdImage){
            const storeImage = storageRef.child(`companiesImages/${forexCompany.name}/${forexCompany.thirdImage.name}`);
            const thirdImagePut = await storeImage.put(forexCompany.thirdImage);
            var thirdImageUrl = await storeImage.getDownloadURL();
            var thirdImagePath = thirdImagePut.ref.location.path;
        }else {
            thirdImageUrl = null
            thirdImagePath = null
        }

       



        // Set date we created the Company.
        let date = new Date().toString();
        const fullDate = date.slice(0,15);
        let newCompany = {
            metatitle           : forexCompany.metaTitle,
            metadescription     : forexCompany.metaDescription,
            name                : forexCompany.name,
            infoBox             : forexCompany.infoBox,
            firstBenefit        : forexCompany.firstBenefit,
            secondBenefit       : forexCompany.secondBenefit,
            thirdBenefit        : forexCompany.thirdBenefit,
            possetiveList       : forexCompany.possetiveList,
            firstContent        : forexCompany.firstContent,
            secondContent       : forexCompany.secondContent,
            thirdContent        : forexCompany.thirdContent,
            logo                : forexLogoUrl,
            filePathLogo        : filePathLogo,

           
            
            firstImageUrl       : firstImageUrl,
            firstImagePath      : firstImagePath,
            secondImageUrl      : secondImageUrl,
            secondImagePath     : secondImagePath,
            thirdImageUrl       : thirdImageUrl,
            thirdImagePath      : thirdImagePath,

            
            affiliateLink       : forexCompany.affiliateLink,
            warningLabel        : forexCompany.warningLabel,
            depositAmount       : forexCompany.depositAmount,
            rating              : forexCompany.rating,
            date                : fullDate,

        }
        const firestorePost = await firebase.firestore().collection("ForexCompanies")
        .doc(forexCompany.name)
        .set(newCompany)
        .catch( err => {
            console.log(err)
            return err;
        })
        console.log('Company Created!.')
        return firestorePost;
    }
    

    // Get Forex Companies 
    const [ companies, setCompanies ] = useState([]);

    const getForexCompanies = async() => {    
        let postsArray = [];
        const posts = await firebase.firestore().collection("ForexCompanies").get();
        posts.forEach( doc => {
            postsArray.push( { id:doc.id, data: doc.data() });
        });
        setCompanies(postsArray);
    };


    const getCompany = async(companyName) => {
        console.log('getting Company ', companyName);
        try{
            const company = await firebase.firestore()
            .collection("ForexCompanies")
            .doc(companyName)
            .get()
            const companyData = company.data(); // convert the data
            console.log('Found the company that you are looking for ', companyData)
            return companyData;
        }catch{

        }
        
    };



    // Pass in a list with names and get a lucky one.
    const randomCompany =  async (listName) => {
        console.log('listNameeeee ', companies)
        
        try{
            const company = await firebase.firestore()
            .collection("ForexCompanies")
            .doc('AvaTrade')
            .get()
            const companyData = company.data(); // convert the data

            return companyData;
        }catch{

        }
           



        // get the company from firebase.

        // return it 
    };

    useEffect( () => {
        getForexCompanies();
    },[])


    return(
        <ForexCompanyContext.Provider value={ { companies, CreateForex, getCompany, randomCompany } } >
                { props.children }
        </ForexCompanyContext.Provider>
    );
}

export default ForexCompanyContextProvider;