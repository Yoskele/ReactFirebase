import React from 'react';
import { Link } from 'react-router-dom';
const DemoWithSocial = () => {
    return(
        <div className="container mt-2 row">
            <div className="rounded p-4 d-flex flex-column justify-content-around m-3 col-sm" 
                style={{width:"300px", backgroundColor:"#333"}}>
                <h4 style={{lineHeight:"1.8", fontStyle:"italic", color:"white"}}>Nybörjare på Forex Trading? Prova med ett demokonto.</h4>
                <a href="/demokonto/"
                    className="w-50 p-2 rounded text-center shineButton"
                    style={{backgroundColor:"#007bff", color:"white"}}
                > 
                    Las mera
                </a>
            </div>

            <div className="rounded p-4 d-flex flex-column justify-content-around m-3 col-sm" 
                style={{width:"300px", backgroundColor:"#644f4a"}}>
                    
                <h4 style={{lineHeight:"1.8", fontStyle:"italic", color:"white"}}>Lär dig allt om Social trading</h4>
                <Link to="/social-trading/"
                    className="w-50 p-2 rounded text-center shineButton"
                    style={{backgroundColor:"#007bff", color:"white"}}
                > 
                    Las mera
                </Link>
            </div>
        </div>
    )
}

export default DemoWithSocial;