import React, {useEffect }  from "react";
import { Link } from 'react-router-dom';
import firebase from "../../firebase/config";
//import { ForexCompanyContext } from "../../context/ForexCompanyContext";


// Components


const AdminDashboard = (props) => {

    //const { companies } = useContext(ForexCompanyContext);


    useEffect( () => {
        firebase.getUserState().then( user => {
            if(!user){
                // If we dont find a user we redirect him to login.
                console.log('before props.history.replace ', user);
                props.history.replace("/admin/login/");
            }
        })
    })

    return(
        <React.Fragment>
            <h1 className="text-center"> AdminDashboard </h1>
            <div  className="d-flex justify-content-around">
                <div className="card p-2" style={{ width: '18rem' }}>
                    <h5 className="text-center"> Forex companies </h5>
                    <Link to="/admin/forex-companies/" className="btn btn-info"> Go to companies </Link>
                </div>


                <div className="card p-2" style={{ width: '18rem' }}>
                    <h5 className="text-center">  Articles </h5>
                    <Link to="/admin/articles/" className="btn btn-info"> Go to articles </Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default AdminDashboard;