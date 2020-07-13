import React, { useState, useContext, useEffect } from 'react';

// Seo reasons
import {Helmet} from "react-helmet";

// Images
import demoAccount from '../../imagesFolder/demoaccount.jpg';


import { ForexCompanyContext } from '../../context/ForexCompanyContext';

const DemoAccount = () => {
    
    // Get a random company 
    const { companies } = useContext(ForexCompanyContext);
    const { getCompany } = useContext(ForexCompanyContext);
    
    const [ bannerCompany, setBannerCompany ] = useState('');
    
    const top4DemoAccounts = companies.slice(0,3);
    const demoList = top4DemoAccounts.length ? (
        top4DemoAccounts.map( account => {
            return(
                <div key={account.id} 
                    className="col-sm-2 d-flex flex-column justify-content-between p-2 m-3"
                    style={{maxWidth:"340px", height:'230px', border:"1px solid lightgray", borderRadius:"5px"}}
                >
                    <img src={account.data.logo}
                        alt="markets" 
                        className="rounded m-auto"
                        style={{width:"150px", height:"100px"}} />
                    <button className="btn btn-primary mt-3">Demokonto </button>
                    <label style={{fontSize:"0.7rem"}} className="mt-2 text-center">{account.data.warningLabel}</label>
                </div>
            )
        })
    ) : (
        <div>No accounts...</div>
    )


    const getRandomCompany = async (name) =>{
        const theCompany = await getCompany('AvaTrade')
        .catch( err => {
            console.log(err);
        })
        setBannerCompany(theCompany);
    }
    useEffect( () => {
        getRandomCompany()
    },[])


    return(
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>DemoKonotooo</title>
                <meta name="description" content="Safe site Yooooooooo!" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="container   card align-items-center  p-3 text-center mt-2">
                <img src={bannerCompany.logo} alt="AvaTrade Demo" style={{width:"170px", height:'80px'}} className="rounded  img-fluid" />
                <button className="btn btn-primary mt-3">Demokonto </button>
                <label style={{fontSize:"0.7rem"}} className="mt-2">{bannerCompany.warningLabel}</label>
            </div>

            <div className="container mt-4"> 
                <h1> Demokonto </h1>
                <p>
                     De flesta mäklarföretagen erbjuder ett gratis demokonto laddat med virtuella pengar. Med det
                     här testkontot kan du som ny oerfaren handlare lära dig att använda handelsplattformen och
                     träna på hur handel går till. Men om du är en erfaren handlare kan även du ha nytta av ett
                     demokonto för t.ex. testa nya tradingstrategier eller vid handel av ett nytt finansiellt
                     instrument.
                </p>
            </div>
           
            <div className="container mt-5"> 
                <h3> Vad är ett trading demokonto? </h3>
                <img src={demoAccount} alt="demokonto" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid" />
                <p>
                    Innan du sätter igång och satsar dina egna pengar kan du träna på ett demokonto som är en
                    kopia av den riktiga handelsplattformen där det går att investera och se hur värdet på
                    tillgången kan både höjas och sänkas vid kursutvecklingen.
                </p>
                <p>
                    Eftersom det är en simulerad marknadsmiljö förlorar du inte dina egna pengar eller om du går
                    med plus så kan du inte konvertera dessa låtsaspengar till riktiga pengar eftersom all träning
                    sker med virtuella pengar, m.a.o. låtsaspengar.
                </p>
                <p>
                    Ett demokonto ger dig en unik möjlighet att testa handel på ett verklighetstroget sätt utan att
                    riskera dina egna pengar och XXX rekommenderar starkt alla, oavsett om du är ny eller
                    erfaren handlare att använda dig av det kostnadsfria demokontot innan satsning av eget
                    kapital..
                </p>
            </div>


            <div className="container mt-5"> 
                <h3> Varför ska man använda ett demokonto? </h3>
                <p>
                    Den främsta fördelen med ett demokonto är att du inte kan förlora ditt riktiga kapital eftersom
                    pengarna som används är så kallade låtsaspengar. Andra fördelar är att du kan tryggt och
                    säkert lära dig att använda handelsplattformen och de olika verktygen, lära dig att analysera
                    diagram och träna på olika placeringsstrategier.
                </p>
                <p>
                    På ett demokonto har du tillgång till ett stort antal olika marknader inom aktier, index,
                    kryptovalutor, råvaror och valuta. Handel inom de olika marknaderna skiljer sig åt och därför
                    är ett demokonto ett suveränt verktyg för att bekanta dig med det valda objektets
                    handelsplattform.
                </p>
            </div>
            <div className="container mt-5"> 
                <h3> Att skapa ett demokonto </h3>
                <p>
                    Det är enkelt att öppna ett kostnadsfritt demokonto hos våra rekommenderade online mäklare.
                    Det enda du ska ange är få uppgifter om dig som namn, kontaktuppgifter och e-postadress.
                </p>
                <p>
                    Handelsplattformarna skiljer sig åt mellan mäklarna och det kan vara en bra idé att testa ett
                    demokonto på mer än en mäklare och sedan välja den som du tycker är mest passande för dina
                    behov.
                </p>
            </div>

            <div className="row justify-content-around">
                {demoList}
            </div>
        </React.Fragment>
    )
}

export default DemoAccount;