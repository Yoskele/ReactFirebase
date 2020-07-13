import React, {useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from "firebase/app";
import firebaseUser from "../../../firebase/config";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { ProgressBar } from 'react-bootstrap'
const CreateArticle = (props) => {

    const [ category, setCategory ] = useState('')
    const [ url, setUrl ]                           = useState('');
    const [ metaTitle, setMetaTitle ]               = useState('');
    const [ metaDescription, setMetaDescription ]   = useState('');

    const [ name, setName ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');

    const [secondtitle, setSecondtitle ] = useState('');
    const [secondcontent, setSecondcontent] = useState('');
    
    const [ profileimage, setProfileimage ] = useState(null);
    const [ image, setImage ] = useState(null);

    const [ articleSaved, setArticleSaved ] = useState(false);
    const [ loading, setLoading ] = useState(0);
    const [ routeRedirect, setRouteRedirect ] = useState(false);

    useEffect( () => {
        firebaseUser.getUserState().then( user => {
            if(!user){
                // If we dont find a user we redirect him to login.
                console.log('before props.history.replace ', user);
                props.history.replace("/admin/login/");
            }
        })
    })

    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/admin/articles/" />
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setArticleSaved(true);
        setLoading(20);
        const imageStorage = firebase.storage().ref();
        if(profileimage){
            console.log('We have a profile Image')
            // Set name of the image.
            const storage = imageStorage.child(`articlesImages/${name + '-' + profileimage.name}`)
            // Save the image to storage.
            const imagePut = await storage.put(profileimage)
            var profileimageUrl = await storage.getDownloadURL();
            var profileimagePath = imagePut.ref.location.path;
        } else {
            var profileimageUrl = null;
            var profileimagePath = null;
        }
        setLoading(30);
        if(image){
            // Set name of the image.
            const storage = imageStorage.child(`articlesImages/${name + '-' + image.name}`)
            // Save the image to storage.
            const imagePut = await storage.put(image)
            var imageUrl = await storage.getDownloadURL();
            var imagePath = imagePut.ref.location.path;
        } else {
            var imageUrl = null;
            var imagePath = null;
        }
        setLoading(55);
        let date = new Date().toString();
        const fullDate = date.slice(0,15);
        let articleObject = {
            id : name,
            category : category.toLowerCase(),
            url : url,
            metaTitle : metaTitle,
            metaDescription : metaDescription,
            name : name,
            title: title,
            content: content,
            secondtitle : secondtitle,
            secondcontent : secondcontent,
            profileimageUrl : profileimageUrl,
            profileimagePath : profileimagePath,
            imageUrl : imageUrl,
            imagePath : imagePath,
            date : fullDate
        }
        setLoading(75);
        // Save Article to Firebase...
        const firestoreArticle = await firebase.firestore().collection("Articles")
        .doc(name)
        .set(articleObject)
        .catch( err => {
            console.log(err);
        })
        setLoading(100);
        console.log('Article Saved to Firebase...')
        setArticleSaved(false);
        setRouteRedirect(true);
    }

    // Show this message when the article is saved to firebase...
    let articleForm;
    if(articleSaved){
        articleForm = <div> <ProgressBar animated now={loading} /> </div>
    }else {
        articleForm = 
        <div>
            <h1> CreateArticle </h1>
            <form onSubmit={handleSubmit}>
                <div className="m-5">  
                    <h6 className="mt-2">Category:</h6>
                    <input 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setCategory( e.target.value ) } 
                    />
                </div>
               
                <div className="m-5">
                    <h6 className="mt-2"> Url: </h6>
                    <input 
                        type="text" 
                        className="w-100 border p-2"
                        required 
                        onChange={ (e) => setUrl( e.target.value ) } 
                    />
                </div>
               

                <div className="m-5">
                    <h6 className="mt-2"> metaTitle: </h6>
                    <input 
                        type="text" 
                        className="w-100 border p-2"
                        onChange={ (e) => setMetaTitle( e.target.value ) } 
                    />
                </div>
                

                <div className="m-5"> 
                    <h6 className="mt-2"> MetaDescription: </h6>
                    <input 
                        type="text" 
                        className="w-100 border p-2"
                        onChange={ (e) => setMetaDescription( e.target.value ) } 
                    />    
                </div>
                
                <div className="m-5">   
                    <h6 className="mt-5"> Profile Image </h6>
                    <input 
                        type="file"
                        className="w-100 border p-2"
                        onChange={ (e) => setProfileimage(e.target.files[0]) } 
                    />
                </div>
                <div className="m-5">   
                    <h6 className="mt-5">Name:</h6>
                    <input 
                        type="text"
                        className="w-100 border p-2"
                        onChange={ (e) => setName( e.target.value ) } 
                    />
                </div>

                <div className="m-5">   
                    <h6 className="mt-5">Title:</h6>
                    <input 
                        type="text"
                        className="w-100 border p-2"
                        onChange={ (e) => setTitle( e.target.value ) } 
                    />
                </div>
                
                <div className="m-5">    
                    <h6 className="mt-2">Content:</h6>
                    <textarea 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setContent( e.target.value ) } 
                    />
                </div>
 
                <div className="m-5">
                    <h6 className="mt-5"> Image </h6>
                    <input 
                        type="file"  
                        className="w-100 border p-2"
                        onChange={ (e) => setImage(e.target.files[0]) }
                     />      
                </div>
                
                <div className="m-5"> 
                    <h6 className="mt-5"> Second title:</h6>
                    <input 
                        type="text"  
                        className="w-100 border p-2"
                        onChange={ (e) => setSecondtitle( e.target.value ) }
                    />     
                </div>
               

                <div className="m-5">
                    <h6 className="mt-2">Second content:</h6>
                    <textarea 
                        type="text" 
                        className="w-100 border p-2" 
                        onChange={ (e) => setSecondcontent( e.target.value ) }
                    />
                </div>
                <br />
                <div className="container d-flex justify-content-between">

                    <Link to="/admin/articles/" 
                        className="btn btn-dark mt-5"> 
                        Back to Article list
                    </Link>


                    <input 
                        type="submit"
                        className="btn btn-success mt-5"
                        value="Save"
                        onSubmit={handleSubmit} 
                    />

                </div>
                
            </form>
                        
        </div>
    }


    return(
        <React.Fragment>
            {articleForm}
        </React.Fragment>
        
    )
};

export default CreateArticle;