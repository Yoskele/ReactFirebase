import React from 'react';
import { Link } from 'react-router-dom';
// Components

import RandomCompany from '../functions/RandomCompany';
import SimpleRandomCard from '../functions/SimpleRandomCard';
import CompanyBigCard from '../company/CompanyBigCard';
// Seo reasons
import {Helmet} from "react-helmet";

// Images
import arrowUp from '../../imagesFolder/arrowUp.png';
const Etf = () => {
    return(
        <React.Fragment>
             <Helmet>
                <meta charSet="utf-8" />
                <title>ETF:S</title>
                <meta name="description" content="Safe site Yooooooooo!" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <RandomCompany />
            <div className="p-3">
                <h1> Vad är ETF:er? </h1>
                <p>
                    Handel med råvaror är den äldsta formen av handel människor emellan och idag investerar
                    åtskilliga personer i olika jordbruksprodukter, energivaror och metaller tack vare att online
                    mäklare har via sina handelsplattformar gjort det lätt för handlare att handla positioner
                    hemifrån.
                </p>
            </div>

            <div className="p-3">
                <h3>ETF-handel med CFD:er  </h3>
                
                <p>
                    Fördelar med att handla ETF:er med CFD- handel är att handlaren kan välja mellan att
                    spekulera på antingen en upp- eller nedgång och göra en fin vinst med hjälp av hävstången.
                </p>
                <p>
                    En annan fördel är att de olika tillgångarna i fonden balanserar varandra genom att ett
                    instrument kan gå upp medan en sjunker i värde. Låt oss ta ett exempel med en råvarufond
                    innehållande tio olika tillgångar; några av råvarorna stiger i värde medan några av dem
                    sjunker i värdet och i slutändan betyder det att värdeutvecklingen inte är så brant.
                </p>
            </div>

            <div className="p-3">
                <h4> Varför är ETF-handel populärt?</h4>
            </div>
            <div className="p-3">
                <h4>ETF värde </h4>
                <img src={arrowUp} alt="demokonto" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid" />
            </div>
            <div className="p-3">
                <h4> Är det klokt att investera i ETF:er?</h4>
            </div>
            <div className="p-3">
                <h4> Hur kommer man igång med ETF-handel?</h4>
            </div>
            <div className="p-3">
                <h4> Tre skäl till att investera i TEF:er</h4>
            </div>
            <div className="p-3">
                <h4>Hur väljer man mäklare för ETF-handel? </h4>
                <p>
                    Det är viktigaste är att mäklaren du väljer är licensierad av en betrodd tillsynsmyndighet. De
                    handelsmäklare som rekommenderas på den här sajten är både licensierade och reglerade av
                    europeiska tillsynsmyndigheter och de är även registrerade hos svenska Finansinspektionen,
                    FI.
                </p>
                <p>
                    Välj ut ett par mäklare och använd deras <Link to="/demokonto/">gratis demokonton </Link> så att du kan träna på hur det är
                    att använda plattformen, lära dig olika strategier för ETF-handel och ta även kontakt med
                    kundsupporten för att se servicenivån. När du tycker att du har hittat den rätta mäklaren är det
                    dags att öppna ett riktigt handelskonto.
              </p>
            </div>
            <div className="p-3">
                <h2> Varför skall du handla ETFs med AvaTrade </h2>
                <p>
                    AvaTrade var en av de första Forex-mäklarna som presenterade ETFs för CFD-
                    handel. Vi erbjuder mer än 25 olika ETFs för handel på MetaTrader 4 och AvaTrader,
                    representerat av nyckel indextrackers, nischade industrier och regioner världen över.
                    Som en av de största mäklarna så finns det många fördelar med att handla ETFs
                    med AvaTrade:
                </p>
                <div className="container p-2">
                    <li> <b>Handla med självförtroende </b> – AvaTrade är en internationellt reglerad mäklare. </li>
                    <li> <b> Stor variation av instrument</b>  – välj mellan olika instrument att handla på med CFDs. </li>
                    <li> <b>Konkurrenskraftiga spreads</b>  </li>
                    <li> <b> Utlåningsrätt </b> – Få utlåningsrätt på upp till 20:1 på dina handelsaktioner.</li>
                    <li> <b>Korthandel tillgängligt </b>  – dra nytta av när marknaden sjunker.</li>
                    <li> <b>Bemästra dina handelsfärdigheter </b>  – Hög kvalitet på utbildningsmaterial och dagliga
    marknadsanalyser.</li>
                    <li> <b> Bäst i klassen kundservice </b> – flerspråkig live support. </li>
                </div>
            </div>

            <CompanyBigCard />

            <div className="p-3">
                <h3> Vad är ETF-handel</h3>
                <p>
                    En ETF är en samling av tillgångar som satts samman för att tillåta handlare att
                    handla på några marknader samtidigt. Korgarna är vanligtvis sammanslagna med
                    vanliga egenskaper som energi, jordbruksinstrument och andra. Om du vill handla en
                    aktie, vara och obligationer tillsammans så kan du enkelt handla på ETF-marknaden.
                    Några ETFs spårar prestandan av ett visst lands kapitalmarknad. Exempel på detta
                    är <b>MSCI  Brasilianska Indexfonden, MSCI Sydkoreanska Indexfonden </b> och andra.
                    ETFs gör det också möjligt att investera i vissa industrisektorer. Exempel på detta
                    som AvaTrade erbjuder är <b> Dow-Jones Amerikanska
                    Fastighetsindexfonden</b> och <b> Utvalda Energi Sektorn SPDR.</b> Det är viktigt att
                    poängtera att alla ETFs handlas som CFDs.
                    <br/>
                    <br/>
                    ETFs handlas som en korg av tillgångar, aktier, varor och mer sammanslagna per
                    bransch. Om du spekulerar på att energimarknaden som exempel skall gå upp så
                    kan du investera i några olika handelsaktioner samtidigt. En klar fördel med ETFs är
                    att de ofta balanserar varandra ut; om ett instruments värde sjunker så kan ett annat
                    gå upp och balansera ut det. Om priset på råolja sjunker som en del av energikorgen
                    så kan en aktie i samma korg väga upp för förlusten.
                </p>
            </div>

            <div className="p-3">
                <h3> Hur handlar du ETFs med AvaTrade </h3>
                <p>
                    Eftersom ETFs spelar på bredden av marknaden så behöver du en mäklare som
                    erbjuder handel på alla dessa marknader med bra villkor. ETFs kräver att man
                    känner marknaderna bra nog för att bestämma sig för när man går in på den och när
                    man lämnar. Man behöver också veta hur varje instrument påverkar varandra.
                    AvaTrade vet om att ETFs är speciella och hjälper dig att ligga steget före och
                    använda prisförändringar till din fördel
                    AvaTrade erbjuder ett brett utbud av mer än 25 populära ETFs att handla på som
                    CFDs, vilket ger handlare förmågan att handla långt eller kort med en utlåningsrätt på
                    upp till 20:1.
                </p>
            </div>
            <SimpleRandomCard />
        </React.Fragment>
    )
}


export default Etf;