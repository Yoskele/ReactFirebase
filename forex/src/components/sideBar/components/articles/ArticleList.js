import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArticleContext } from '../../../../context/ArticleContext';


const ArticleList = () => {
    const { articles } = useContext(ArticleContext);
    console.log('articles ', articles)
    let shortedList = articles.slice(0,3);
    return(
        <div className="w-100">
            {shortedList.map( article => {
                return(
                    <Link to="/meta-trader-4/"
                        className="w-75 row text-dark mt-3 mx-auto"
                        style={{borderRadius:"5px", border:"1px solid lightgray"}}
                        key={article.id}
                        >
                        <div className="col-4">
                        <img src={article.data.profileimageUrl} alt="Meta Trader" style={{width:"120px", height:'80px'}} className="rounded  img-fluid m-1" />
                        </div>
                        <div className="col-8 d-flex flex-column  justify-content-center ">
                            <h6 className="align-middle">{article.data.title} </h6>
                        </div>
                    </Link>
                )
            })}
        </div>
    )

};


export default ArticleList;



