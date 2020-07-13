import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cookie.css'
const Cookie = () => {

    // If we have a cookie in the store set true
    const [ cookie, setCookie ] = useState(false);

    useEffect( () => {
        if (document.cookie.split(';').some((item) => item.trim().startsWith('cname'))) {
            setCookie(true);
        }
    },[])

    const acceptedCookie = () => {
        let cname = 'cname';
        let cvalue = 'yossi';
        var d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        setCookie(true);
    }

    let cookieBar;
    if(!cookie){
        cookieBar = 
            <div className="cookieContainer">
                <div className="cookieWrapper text-center"> 
                    <p>
                        handla-cfd.se använder cookies för säkerställa att våra användare har bästa möjliga upplevelsen.
                        <br/>
                        <Link to="/">Läs mer</Link>
                    </p>
                    
                    <div className="cookieButton" onClick={acceptedCookie}> Ok </div>
                </div>
            </div>
    } 

    return(
        <React.Fragment>
            {cookieBar}
        </React.Fragment>
    )
}

export default Cookie;