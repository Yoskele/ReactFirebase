import React from 'react';
import { Link } from 'react-router-dom';

import CompanyCard from './company/CompanyCard';
import DemoWithSocial from '../components/htmlTemplates/DemoWithSocial';
// images from root folder.
import commodityImage from '../../src/imagesFolder/testcomodities.jpg';

import valutor from '../../src/imagesFolder/valutor.png';
import stocks from '../../src/imagesFolder/stocks.jpg';

import Bitcoin from '../../src/imagesFolder/bitcoin.jpg';

const Index = () => {

    return( 
        <React.Fragment>
            <h1> Forex Trading </h1>
            <p>
                FxForex.se är den svenska guiden till forex trading. 
                Vi har funnits online sedan 2010 och vårt mål är detsamma nu som då,
                nämligen att ge er bästa möjliga vägledning och information kring valutahandel och 
                CFD handel på nätet.
            </p>

            <CompanyCard />

            <div style={{backgroundColor:"#F6F6F6"}} className="p-2"> 
                <div className="container mt-5"> 
                    <h3> Hävstång/leverage </h3>
                    <p>
                        Med hjälp av hävstång kan handlare, som har begränsat med kapital, öka på kapitalet genom
                        att låna av mäklaren. Hävstångseffekten gör att vinsterna blir större, men även eventuella
                        förluster blir också större. Hävstång kan tillämpas på både köp- och säljpositioner.
                    </p>
                </div>
            


                <div className="container mt-5"> 
                    <h3> Demokonto </h3>
                    <p>
                        En trader kan träna på ett gratis demokonto, som är laddat med virtuella pengar, för att lära sig
                        hur handelsplattformen fungerar, hur trading går till och träna på olika strategier. Vinster kan
                        inte tas ut och förluster drabbar inte handlaren på ett träningskonto.
                    </p>
                </div>
                <div className="container mt-5"> 
                    <h3> Social Trading </h3>
                    <p>
                        Social Trading går ut på att handlare över hela världen diskuterar med varandra, ger tips och
                        råd och delar med sig av sina investeringsstrategier på sociala handelsplattformar. Med hjälp
                        av varandras framgångar kan traders lyckas bättre med sin egen handel.
                    </p>
                </div>

                <DemoWithSocial />

            </div>  
            <div className="container mt-5"> 
               
                <h3> Råvaror </h3>
                <p>
                    Det finns hårda och mjuka råvaror. Den förstnämnda är metaller som guld och koppar och
                    energivaror, olja och gas. Mjuka råvaror utgörs av lantbruksprodukter som vete och kaffe.
                    Handel med råvaror görs oftast med terminskontrakt som innebär att priset avgörs i framtiden
                    beroende på utbud och efterfrågan.
                </p>
            </div>

            <div className="container mt-5"> 
                <h3> Valutor </h3>
                <img src={Bitcoin} alt="commodities"  style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid" />
                <p>
                    Valutahandel kallas även för Forexhandel, som innebär att när en valuta köps så säljs en
                    annan valuta och därför benämns de som valutapar, t. ex är EUR/USD och GBP/USD. Vid
                    valutaspekulering gissar handlaren antingen på en värdestegring eller värdeminskning.
                </p>
            </div>

            <div className="container mt-5"> 
                <h3> Aktier </h3>
                <p>
                    En aktie är en andel av ett aktiebolag t ex Volvo, ABB och Kungsleden. Vid handel av aktier
                    med CFD:er spekulerar handlaren om aktiens värdeutveckling, som kan både höjas och
                    sänkas. Aktie CFD:er handlas med hävstång.
                </p>
            </div>

            <div className="container mt-5"> 
                <h3> Kryptovalutor </h3>
                <p>
                    Kryptovaluta är en digital/virtuell valuta, som har blivit allt populärare när vi närmar oss det
                    kontantlösa samhället. Den virtuella valutan kontrolleras inte av någon centralbank och kan
                    inte tas ut och stoppas i den fysiska plånboken. Ex. på digital valuta är Bitcoin, Etherum och
                    Litecoin.
                </p>
            </div>
            <hr/>
            <div className="container  p-4 d-flex justify-content-around flex-wrap ">

                <Link to="/ravaror/"
                    className="d-flex flex-column text-center mt-2"
                    style={{width:"300px", height:'300px'}}
                >
                    <img src={commodityImage} alt="commodities"  style={{width:"300px", height:'300px'}} />
                    <p> Läs mera om råvaror </p>
                </Link>
                
                <Link to="/etf"
                    className=" d-flex flex-column text-center mt-2"
                    style={{width:"300px", height:'300px'}}
                >
                    <img src={stocks} alt="ETF"   style={{width:"300px", height:'300px'}} className="img-fluid"/>
                    <p>Läs mera om ETF:er </p>
                </Link>

                <Link to="/valutor/"
                    className="d-flex flex-column text-center mt-2"
                    style={{width:"300px", height:'300px'}}     
                >
                    <img src={valutor} alt="valutor" style={{width:"300px", height:'300px'}}/>
                    <p>Läs mera om valutor </p>
                </Link>
            </div>

        </React.Fragment>
    )
};

export default Index;