import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import Login from './components/auth/Login'
import AdminDashboard from './components/auth/AdminDashboard';
import CreateForexCompany from './components/auth/CreateForexCompany';
import Index from './components/Index';
import ForexCompanies from './components/auth/ForexCompanies';
import ForexCompanyDetail from './components/auth/ForexCompanyDetail';

import ArticleList from './components/auth/articles/ArticleList';
import CreateArticle from './components/auth/articles/CreateArticle'
import ArticleDetail from './components/auth/articles/ArticleDetail';
import CompanyDetail from './components/company/CompanyDetail';
import Commodities from './components/pages/Commodities';
import DemoAccount from './components/pages/DemoAccount';
import SocialTrading from './components/pages/SocialTrading';
import Etf from './components/pages/Etf';
import Currnecies from './components/pages/Currencies';
import CfdHandel from './components/pages/CfdHandel';
import Handelsmaklare from './components/pages/Handelsmaklare';
import DayTrading from './components/pages/DayTrading';
import MetaTrader4 from './components/pages/MetaTrader4';
import Kryptovaluta from './components/pages/Kryptovaluta';
import Gold from './components/pages/Gold';
import Oil from './components/pages/Oil';
import OmOss from './components/pages/OmOss';
const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/admin/login/" component={Login} />
        <Route exact path="/admin/" component={AdminDashboard} />
        <Route exact path="/admin/create/article" component={CreateArticle} />
        <Route exact path="/admin/create/forex-company/" component={CreateForexCompany} />
        <Route exact path="/admin/forex-companies/" component={ForexCompanies} />
        <Route exact path="/admin/edit/forex-company/:name/" component={ForexCompanyDetail} />
        
        <Route exact path="/admin/articles/" component={ArticleList} />
        <Route exact path="/admin/create/article/" component={CreateArticle} />
        <Route exact path="/admin/article/:title/" component={ArticleDetail} />
        
        <Route exact path="/recension/:name/" component={CompanyDetail} />
        <Route exact path="/ravaror/" component={Commodities} />


        <Route exact path="/demokonto/" component={DemoAccount} />
        <Route exact path="/social-trading/" component={SocialTrading} />
        <Route exact path="/etf/" component={Etf} />
        <Route exact path="/valutor/" component={Currnecies} />
        
        <Route exact path="/cfd-handel/" component={CfdHandel} />
        <Route exact path="/cfd-maklare/" component={Handelsmaklare} />
        <Route exact path="/day-trading/" component={DayTrading} />
        <Route exact path="/meta-trader-4/" component={MetaTrader4} />
        <Route exact path="/kryptovaluta/" component={Kryptovaluta} />
        <Route exact path="/guld/" component={Gold} />
        <Route exact path="/olja/" component={Oil} />
        <Route exact path="/om-oss/" component={OmOss} />
    </Switch>
)

export default Routes;