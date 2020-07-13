import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';

const ForexCompanies = (props) => {

    const { companies } = useContext(ForexCompanyContext);

    const companyList = companies.length ? (
        companies.map( company => {
            return(
                <div className="card p-2 mt-2 text-center" style={{ width: '18rem' }} key={company.id}>
                    <Link to={{
                        pathname: `/admin/edit/forex-company/${company.data.name}`,
                        state: {
                            company: company
                        }
                    }}>
                        <b> {company.data.name} </b>
                    </Link>
                </div>
            )
        })
    ) : (
        <div className="center"> No Companies...</div>
    )
    return(
        <React.Fragment>
            <h1> Companies list </h1>
                {companyList}
                <div className="container d-flex justify-content-between">
                    <Link to="/admin/" className="btn btn-dark mt-5"> Back to admin </Link>
                    <Link to="/admin/create/forex-company/" className="btn btn-success mt-5"> Create Company </Link>
                </div>
        </React.Fragment>
    );
};
export default ForexCompanies;