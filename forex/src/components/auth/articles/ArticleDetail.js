import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'react-bootstrap'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { Link } from 'react-router-dom';

const ArticleDetail = (props) => {
    let articleName = props.match.params.title;
    const [ article, setArticle ] = useState({});

    const categoryRef = useRef(null);
    const urlRef = useRef(article.url);

    const metatitleRef = useRef(null);
    const metaDescriptionRef = useRef(null);
    const nameRef = useRef(null);
    const titleRef = useRef(null);


    const contentRef = useRef(null);
    const secondtitleRef = useRef(null);

    const secondcontentRef = useRef(null);

    const [ isBusy, setIsBusy ] = useState(false);
    const [ loading, setLoading ] = useState(0);

    const [ isBusyUploadingImage, setIsBusyUploadingImage ] = useState(false);



    const getArticle = async() => {
        console.log('Getting Article...');
        console.log('article before ', article)
        const articleFirebase = await firebase.firestore()
        .collection("Articles")
        .doc(articleName)
        .get()
        const data = articleFirebase.data();
        setArticle(data)
    }


    useEffect( () => {
        getArticle();
    },[])
    
    const submitChange = async(e) => {
        e.preventDefault();
        console.log('Saving Article...')
        setIsBusy(true);
        setLoading(20);
        const updateArticle = {
            category        : categoryRef.current.value,
            url             : urlRef.current.value,
            metaTitle       : metatitleRef.current.value,
            metaDescription : metaDescriptionRef.current.value,
            title           : titleRef.current.value,
            content         : contentRef.current.value,
            secondtitle     : secondtitleRef.current.value,
            secondcontent   : secondcontentRef.current.value,
        }
        setLoading(40);
        // Send the new object to Firebase...
        await firebase.firestore().collection("Articles")
        .doc(article.name)
        .set(updateArticle, {merge:true})
        .then( () => {
            setIsBusy(false);
        })
        .catch( err => console.log(err))
        console.log('Article Saved...')
        window.location.reload(false);
    }
    
    const [ uploadProfile, setUploadProfile ] = useState({});
    const uploadProfileImage = async(e) => {
        setIsBusyUploadingImage(true);
        // Get the file.
        let file = e.target.files[0];
        const profileStorage = firebase.storage().ref();
        // Store the old file.
        uploadProfile["oldProfile"] = article.profileimagePath;
        console.log('uploadProfile ', uploadProfile)
        if(article.profileimageUrl){
           try {
                await profileStorage.child(uploadProfile["oldProfile"]).delete()
           } catch {
               
           }
        }
        // Imaged deleted now store the new image..
        // set the name of the file..
        const profileImage = profileStorage.child(`articlesImages/${article.name + '-' + file.name}`)
        const profile = await profileImage.put(file);
        // bring the url.
        const profileUrl = await profileImage.getDownloadURL();
        const profilePath = profile.ref.location.path;
        let updateProfile = {
            profileimageUrl : profileUrl,
            profileimagePath     : profilePath
        }
        const profileSent = await firebase.firestore().collection("Articles")
        .doc(article.name)
        .set(updateProfile, {merge:true})
        .then( () => {
            getArticle();
        })
        .catch( err => {
            console.log(err);
        })
        setIsBusyUploadingImage(false);
    }


    const [ image, setImage ] = useState({});
    const uploadImage = async(e) => {
        console.log('uploading image...');
        setIsBusyUploadingImage(true);
        let file = e.target.files[0];
        const storage = firebase.storage().ref();
        if(article.imageUrl){
            // Delete Image if we have one..
            image["oldImage"] = article.imagePath;
            try {
                await storage.child(image["oldImage"]).delete()
            } catch {

            }
        }
        const newImage = storage.child(`articlesImages/${article.name + '-' + file.name}`)
        const firebaseImage = await newImage.put(file);
        // bring the url.
        const imageUrl = await newImage.getDownloadURL();
        const imagePath = firebaseImage.ref.location.path;
        let updateProfile = {
            imageUrl : imageUrl,
            imagePath     : imagePath
        }
        const imageSent = await firebase.firestore().collection("Articles")
        .doc(article.name)
        .set(updateProfile, {merge:true})
        .then( () => {
            getArticle();
        })
        .catch( err => {
            console.log(err);
        })
        setIsBusyUploadingImage(false);
    }

    const deleteArticle = async(e) => {
        // Remove the images from Storage..
        const storage = firebase.storage().ref();
        try {
            await storage.child(article.profileimagePath).delete()
            await storage.child(article.imagePath).delete()
       } catch {
           
       }
        let name = article.name;
        console.log(name)
        await firebase.firestore().collection("Articles")
        .doc(article.name)
        .delete()
        console.log('Article is deleted!')
    }






















    


    let updateForm;
    if(isBusy){
        updateForm = (
            <div> <ProgressBar animated now={loading} /> </div>
        )
    }else {
        updateForm = (
            <div>
                <h1> Article: {article.name} </h1>

                <form onSubmit={submitChange}>
                    <div className="m-5">
                        <h6> Category: </h6>
                        <input 
                            type="text" 
                            ref={categoryRef}
                            defaultValue={article.category} 
                            className="w-100 border p-2"
                        />
                    </div>

                    <div className="m-5">
                        <h6> Url: </h6>
                        <input 
                            type="text" 
                            ref={urlRef}
                            defaultValue={article.url} 
                            className="w-100 border p-2"
                        />
                    </div>

                    <div className="m-5">
                        <h6> metaTitle: </h6>
                        <input 
                            type="text" 
                            ref={metatitleRef}
                            defaultValue={article.metaTitle} 
                            className="w-100 border p-2"
                        />
                    </div>

                    <div className="m-5">
                        <h6> MetaDescription: </h6>
                        <input 
                            type="text" 
                            ref={metaDescriptionRef}
                            defaultValue={article.metaDescription} 
                            className="w-100 border p-2"
                        />
                    </div>

                    <div className="m-5">
                        <h6> Name: </h6>
                        <input 
                            type="text" 
                            ref={nameRef}
                            defaultValue={article.name} 
                            className="w-100 border p-2"
                        />
                    </div>
                    <div className="m-5">
                        <h6> Title: </h6>
                        <input 
                            type="text" 
                            ref={titleRef}
                            defaultValue={article.title} 
                            className="w-100 border p-2"
                        />
                    </div>

                    <div className="m-5">
                        <h6> Content: </h6>
                        <input 
                            type="text" 
                            ref={contentRef}
                            defaultValue={article.content} 
                            className="w-100 border p-2"
                        />
                    </div>

                    <div className="m-5">
                        <h6> Second title: </h6>
                        <input 
                            type="text" 
                            ref={secondtitleRef}
                            defaultValue={article.secondtitle} 
                            className="w-100 border p-2"
                        />
                    </div>

                    <div className="m-5">
                        <h6> Second content: </h6>
                        <input 
                            type="text" 
                            ref={secondcontentRef}
                            defaultValue={article.secondcontent} 
                            className="w-100 border p-2"
                        />
                    </div>


                    <div className="d-flex w-50 mx-auto justify-content-around">
                    <Link to="/admin/articles/" className="btn btn-dark "> Back to articles </Link>
                        <b 
                            onClick={ (e) => deleteArticle()}
                            className="btn btn-danger "
                        >  Delete {article.name} </b> 
                            <button 
                                onClick={submitChange}
                                className="btn btn-success"
                            > Update </button> 
                        </div>
                </form>
            </div>
        )

    }

    let updateImage;
    if(isBusyUploadingImage){
        updateImage = 
            <div className="processing">
                <h1> UPLOADING IMAGE!!!</h1>
            </div>
    }else{
        updateImage = 
            <div>
                <h1>Images</h1>
                <div className="d-flex flex-wrap w-100">
                    <div className="m-5  ">
                        <div className="card  flex-column align-items-center justify-content-between border border-black m-3" style={{width: "300px", height:"300px"}}>
                            <img src={article.profileimageUrl} style={{width: "250px", height:"250px"}}/>
                            <label> Profile Image </label>
                            <input type="file" onChange={uploadProfileImage}  className="d-block mt-2" /> 
                        </div>
                    </div> 
                    <div className=" m-5 ">
                        <div className="card flex-column align-items-center justify-content-between border border-black m-3" style={{width: "300px", height:"300px"}}>
                            <img src={article.imageUrl} style={{width:"250px", height:"250px"}}/>
                            <label>  Image </label>
                            <input type="file" onChange={uploadImage}  className="d-block mt-2" /> 
                        </div>
                    </div> 
                </div> 
            </div>
    }

    return(
        <React.Fragment>
            {updateForm}
            {updateImage}
        </React.Fragment>
    )
}

export default ArticleDetail;