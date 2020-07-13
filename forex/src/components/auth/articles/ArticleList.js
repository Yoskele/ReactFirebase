import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import firebaseUser from "../../../firebase/config";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const ArticleList = (props) => {

    // Bring all the articles to one state.

    const [ articles, setArticles ] = useState('');

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
        firebaseUser.getUserState().then( user => {
            if(!user){
                // If we dont find a user we redirect him to login.
                props.history.replace("/admin/login/");
            }
        })
    },[props.history])


    

    // Sort by alphabet.
    // const sortList = () => {
    //     const sort = [...articles].sort((a, b) => {
    //         return b.id - a.id;
    //     });
     
    // }


    return articles.length ? (
        <React.Fragment>
            <div className="d-flex justify-content-end">
                <h1 className="flex-grow-1"> Article List </h1>
                <button className="m-1"> Sort by Alphabet </button>
                <button className="m-1"> Sort by Date </button>
                {/* <button className="m-1" onClick={sortList} > Sort by Category </button> */}
            </div>
            
            <br/>
            <table className="table mt-3 w-75 m-auto">
                <thead className="thead-dark">
                    <tr className="row row-cols-3">
                    <th className="col">Title</th>
                    <th className="col">Category</th>
                    <th className="col">Date</th>
                    </tr>
                </thead>
                <tbody >
                    {articles.map( article => {
                        return(
                            <tr key={article.id}  className="row row-cols-3">
                                <td className="col"> 
                                    <Link to={{
                                        pathname: `/admin/article/${article.data.id}`,
                                        state: {
                                            article: article
                                        }
                                    }}>
                                        {article.data.title}
                                    </Link>
                                </td>
                                <td className="col"> {article.data.category}</td>
                                <td className="col"> {article.data.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="container d-flex justify-content-between">
                <Link to="/admin/" className="btn btn-dark mt-5"> Back to admin </Link>
                <Link to="/admin/create/article/" className="btn btn-success mt-5"> Create article </Link>
            </div>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <div> No articles </div>
            <div className="container d-flex justify-content-between">
                <Link to="/admin/" className="btn btn-dark mt-5"> Back to admin </Link>
                <Link to="/admin/create/article/" className="btn btn-success mt-5"> Create article </Link>
            </div>
        </React.Fragment>
        
    )

}

export default ArticleList;