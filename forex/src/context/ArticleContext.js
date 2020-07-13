import React, { createContext, useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
    const [ articles, setArticles ] = useState([]);
    const getArticles = async() => {  
        let articleArray = [];
        const firebaseData = await firebase.firestore().collection("Articles").get();
        firebaseData.forEach( doc => {
            articleArray.push( { id:doc.id, data: doc.data() });
        })
        setArticles(articleArray)
    };
    useEffect( () =>{
        getArticles();
    },[])
    return(
        <ArticleContext.Provider value={{ articles }}>
            { props.children }
        </ArticleContext.Provider>
    )
}

export default ArticleContextProvider;