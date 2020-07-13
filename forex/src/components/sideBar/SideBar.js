import React from 'react';
import MetaTrader from './components/metaTrader/MetaTrader';
import SocialTrading from './components/socialTrading/SocialTrading';
import CompanyBigCard from '../sideBar/components/company/CompanyBigCard';
import ArticleList from './components/articles/ArticleList';

const SideBar = () => {
    return(
        <React.Fragment>
            <MetaTrader />
            <SocialTrading />
            <ArticleList />
            <CompanyBigCard />
        </React.Fragment>
    );
}

export default SideBar;