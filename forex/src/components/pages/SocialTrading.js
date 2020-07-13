import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';
// Seo reasons
import {Helmet} from "react-helmet";
// Components 


// Images 
import demoAccount from '../../imagesFolder/demoaccount.jpg';

import CompanyBigCard from '../company/CompanyBigCard';


const SocialTrading = (props) => {

    const { companies, getCompany } = useContext(ForexCompanyContext);

    const [ loading, setLoading ] = useState(false);



    const [ etoro, setEtoro ] = useState("");
    

    useEffect( () => {
        const getEtoro = async () => {
            const firebaseData = await getCompany('Etoro')
            .catch( err => {
                console.log(err)
            })
            setEtoro(firebaseData)
            if(firebaseData !== undefined){
                // If we Found a company
                setLoading(true);
            }
        }
        getEtoro();
    },[getCompany])

    let etoroBanner;
    if(loading){
        etoroBanner =  
        <div className=" card  mt-4 p-3" key={etoro.id}>
            <div className="d-flex flex-wrap ">
                <img src={etoro.logo}
                    alt={etoro.name}
                    style={{width:"300px", height:"120px"}}
                    className=""
                />
                <div style={{fontSize:"0.8rem", width:"550px"}} className="d-none d-xl-block">
                    <ul className="nopadding h-100" 
                        dangerouslySetInnerHTML={{ __html:etoro.possetiveList }}
                    >
                    

                    </ul>
                </div>
                <div className=" d-flex flex-grow-1 flex-column justify-content-around align-items-center text-center"
                    style={{minWidth:"250px"}}
                >
                    <h6 className="" >{etoro.name}</h6>
                    <b>{etoro.rating}</b>
                    <Link to={{
                        pathname:`/recension/${etoro.name}`,
                    }}>Read more </Link>
                </div>
            
                <button className="btn btn-primary flex-grow-1 w-100 mt-2 mt-md-0" 
                style={{    backgroundColor:'#0070ba',
                    backgroundImage: 'linear-gradient(100deg,#0070ba,#1546a0)'}} 
                > 
                    Besök {etoro.name}
                </button>
            </div>
            
            <div className="card-footer text-center mt-2 mt-md-0"> 
                <div className="row "> 
                    <p className="m-0 col-sm"> Språk: 🇸🇪</p>
                    <p className="m-0 col-sm"> Demokonto:✔️</p>
                    <p className="m-0 col-sm"> Minsta första insättning:<b>€ 100 </b> </p>
                </div>
                <label style={{fontSize:"0.75rem"}} className="m-0"> Riskvarning: 67-68% av privatinvesterare förlorar pengar vid CFD-handel med denna leverantör. </label>
            </div>
        </div>
    }

    return(
        <React.Fragment>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Social Trading</title>
                <meta name="description" content="Safe site Yooooooooo!" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container   card align-items-center  p-3 text-center mt-2">
                <img src={etoro.logo} alt="AvaTrade Demo" style={{width:"170px", height:'80px'}} className="rounded  img-fluid" />
                <button className="btn btn-primary mt-3">Demokonto </button>
                <label style={{fontSize:"0.7rem"}} className="mt-2">{etoro.warningLabel}</label>
            </div>

            <div className="container mt-2"> 
                <h1> Social Trading </h1>
                <p>
                    Social trading går ut på att handlare kommunicerar med varandra och delar med sig av sina
                    erfarenheter och strategier. Oavsett om handlaren är oerfaren eller varit inom branschen under
                    en lång tid kan andras kunskaper bidra till än bättre affärsbeslut.
                </p>
                <p>
                    eToro insåg tidigt behovet av en social plattform där handlare kunde få tillgång till varandras
                    kunskap, strategier och tips.
                </p>
            </div>

            <div className="container mt-5"> 
                <h3> Hur fungerar Social Trading? </h3>
                <img src={demoAccount} alt="demokonto" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid" />
                <p>
                    Handlare som inte har tillräcklig kunskap, är nya och osäkra eller helt enkelt saknar tid att
                    sätta sig in i trading kan välja att följa en annan handlares satsningar i realtid och
                </p>
            </div>

            <div className="container mt-5"> 
                <h3> Vilka handlare kan man skugga? </h3>
                <p>
                    De handlare som anmäler sig att de är villiga att dela med sig av sina kunskaper och låter
                    andra handlare få insyn i deras portföljer kan
                </p>
            </div>

            
            
                
            <div className="container mt-5"> 
                <h3> HUR SOCIAL TRADING FUNGERAR </h3>
                
               
                <p>
                    Ett demokonto ger dig en unik möjlighet att testa handel på ett verklighetstroget sätt utan att
                    riskera dina egna pengar och XXX rekommenderar starkt alla, oavsett om du är ny eller
                    erfaren handlare att använda dig av det kostnadsfria demokontot innan satsning av eget
                    kapital..
                </p>
            </div>

            {etoroBanner}
            <div className="container mt-5"> 
                <h4> Social Trading Nivåer </h4>
                <b>See</b>
                <p>
                    Man kan välja att endast titta vad alla andra traders gör och få indikationer och tips
                    härifrån. Detta kallas "See".
                </p>
                <b>Follow</b>
                <p>
                    Man kan välja att följa vissa traders mer specifikt. Om ni hittar traders som ni anser är
                    väldigt duktiga så kan ni följa deras trades och lära från deras taktik. Detta kallas "Follow".
                </p>
                <b>Copy</b>
                <p>
                    Man kan också kopiera andra traders direkt. När ni hittar en trader som är riktigt bra
                    så kan ni antingen kopiera vissa trades som denne har gjort, detta kallas "Copy".
                    <br/>
                    Alternativt kopiera dennes taktik helt och hållet på flera trades, dett kallas "Copy
                    Trader".
                </p>
            </div>
            <div className="container mt-5"> 
                <h2> SOCIAL TRADING GURUS </h2>
                <p>
                    För traders som inte har så mycket erfaranhet eller som bara vill lära sig ännu mer
                    om forex trading så kan ni välja era favorit traders och följa dessa. Att hitta en eller
                    flera riktigt duktiga traders sk "Gurus" är ett intressant sätt att tjäna pengar på. Ni lär
                    er genom att följa eller kopiera deras trades och tjänar då samtidigt pengar på det.
                    <br/>
                    När ni blir riktigt duktiga och erfarna traders så kan ni själva bli social trading gurus.
                    Ni ansöker då till om att gå med i "Guru Program" och får därefter del av commission
                    från era följare. De som kopierar era trades får ni betalt för helt enkelt.
                </p>
            </div>
            <div className="container mt-5"> 
                <h3> Forex Social Trading Online Summering </h3>
                <p>
                    Genom att jobba tillsammans på ett sätt som tidigare inte varit möjligt så ges nu en
                    helt ny kapacitetsnivå i form av denna gemensamma kunskap. Många anser att
                    Social Trading är framtiden för forex trading.
                </p>
                <p>
                    Social forex trading är också ett bra sätt att lära sig hur forex trading fungerar. Hur
                    tänker en framgångsrik handlare? Social trading är ett bra sätt att få en inblick i just
                    detta.
                </p>
                <p>
                    Ni kan prova social trading med ett kostnadsfritt konto hos eToro och testa
                    själva..
                </p>
            </div>
            <CompanyBigCard />
           

        </React.Fragment>
    )
}
export default SocialTrading;