import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Componentes
import SimpleRandomCard from '../functions/SimpleRandomCard';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';
// Seo reasons
import {Helmet} from "react-helmet";
// Images
import CurrneciesImage from '../../imagesFolder/valutor.png'
import CompanyBigCard from '../company/CompanyBigCard';

const CfdHandel = () => {
    const { companies } = useContext(ForexCompanyContext);
    return(
        <React.Fragment>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Cfd handel</title>
                <meta name="description" content="Safe site Yooooooooo!" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <SimpleRandomCard />
            <div className="p-3">
                <h1>Cfd Handel </h1>
                <img src={CurrneciesImage} alt="demokonto" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />
                <p>
                    CFD (Contract for difference, kontrakt på mellanskillnaden) är en relativt ny finansiell
                    produkt. CFD startades i England i början av 1990-talet och några år senare öppnades CFD:s
                    upp även för privata investerare och blev snabbt populärt bland investerare på London Stock
                    Exchange (LSE). Handel av CFD:s kom till Sverige 2007. Hela världen är öppen för den som
                    vill investera inom CFD:ar. I utbudet av aktier, råvaror, jordbruksvaror, valutor, kryptovaluta,
                    börshandlade fonder, obligationer och index finns det alltid något som passar alla.
                </p>
                <p>
                    Det går att tjäna pengar med CFD-handel oavsett om marknaden går upp eller ner. Ett
                    kontrakt upprättas mellan dig och mäklaren. Genom att välja en lång position tror du att
                    kurserna kommer att stiga och genom att välja en kort position tror du att kurserna kommer att
                    sjunka. Du kan alltså tjäna pengar i både en upp- och en nedgång. Du bestämmer vilka objekt
                    du vill satsa på och hur lång löptiden ska vara. Ju större risk du tar desto större är chansen att
                    tjäna bra med pengar, men som i all finansiell handel finns det också en risk att du kan förlora
                    dina investerade pengar. Tänk på att i CFD-handel används hävstångseffekten. Ett sätt att
                    skydda dig mot för stora förluster är att använda dig av stop-loss.
                </p>
                <p> <b> Viktigt: </b>Du äger inte den underliggande tillgången utan du satsar på hur kursen kommer att
                utvecklas.</p>
            </div>

            <div className="p-3">
                <h3> Fördelar med CFD</h3>
                <ul>
                    <li>
                        Det finns ett stort utbud av CFD:ar. 
                    </li>
                    <li> 
                        Det är enkelt att handla med CFD:ar och det går snabbt att avsluta sin position.
                    </li>
                    <li> 
                        CFD:ar rekommenderas för daytraders för hävstångseffekten gör att små
                        kursändringar får stor genomslagskraft på det satsade kapitalet.
                    </li>
                    <li> 
                        Det är enkelt att handla med CFD:ar. Investeraren kan, sekund för sekund, följa
                        värdeförändringarna på sitt konto och när en viss förutbestämd nivå har uppnåtts går
                        det snabbt att avsluta sin position.
                    </li>
                    <li> 
                        Kontrakten handlas med hävstång. Vid även en liten kursändring kan vinsterna bli
                        rejält stora i förhållande till det satsade kapitalet.
                    </li>
                    <li> 
                        Investerare med begränsat kapital får tillgång till den finansiella marknaden och
                        därmed chansen till att öka sitt kapital.
                    </li>
                    <li> 
                        Det går att handla på både en stigande och fallande marknad.
                    </li>
                    <li>
                        Du behöver inte göra en massa pappersarbete i samband med köp och sälj eftersom du
                        inte äger objektet utan satsar på värdeskillnaden. 
                    </li>
                </ul>
            </div>

            <CompanyBigCard />

            <div className="p-3">
                <h3> Nackdelar med CFD </h3>
                <ul>
                    <li> 
                        Om du vill ha inflytande och rösträtt i ett företag ska du absolut inte handla med CFD:ar,
                        eftersom du inte äger tillgången.
                    </li>
                    <li>
                        Kontrakten handlas med hävstång. Du kan förlora hela ditt satsade kapital.
                    </li>
                </ul>
            </div>
            <div className="p-3">
                <h3>Planera din CFD-trading</h3>
                <p>
                    Det viktigaste för att du ska lyckas med trading är att du förbereder dig väl. Här är några
                    punkter som du ska tänka på.
                </p>
                <ul>
                    <li> 
                        Tänk igenom din ekonomiska situation och hur mycket du kan avvara till startkapitalet. Du
                        måste vara beredd på att du kan förlora hela ditt satsade kapital. Investera därför enbart det du
                        har råd att förlora.
                    </li>
                    <li>
                        Fundera på vilken marknad du vill in i. Välj sedan högst ett par objekt som du vill
                        koncentrera dig på. Om du väljer för många objekt är det svårt att hålla kolla på positionerna
                        och det är lätt att gripas av panik om kurserna svänger kraftigt och risken för misstag ökar.
                    </li>
                    <li> 
                        Bli inte för girig. När du har gjort en fin vinst – stäng positionen!
                    </li>
                    <li> 
                        När du har nått ditt mål ta ut en del av vinsterna. Det är lätt hänt att tappa omdömet efter en
                        bra tradingdag. Börja inte chansa på allt möjligt utan ta ut vinsten och unna dig själv något kul
                        för pengarna.
                    </li>
                    <li> 
                        Använd dig av företagens demokonton för att få en uppfattning om hur din investering
                        kommer att te sig vid olika positioner.
                    </li>
                </ul>
            </div>
            <div className="container mt-2 row"> 
                    <div className="rounded p-4 d-flex flex-column justify-content-around m-3 col-sm" 
                        style={{width:"300px", backgroundColor:"#333"}}>
                        <h4 style={{lineHeight:"1.8", fontStyle:"italic", color:"white"}}>Nybörjare på Forex Trading? Prova med ett demokonto.</h4>
                        <Link to="/demokonto/"
                            className="w-50 p-2 rounded text-center"
                            style={{backgroundColor:"#007bff", color:"white"}}
                        > 
                            Las mera
                        </Link>
                    </div>

                    <div className="rounded p-4 d-flex flex-column justify-content-around m-3 col-sm" 
                        style={{width:"300px", backgroundColor:"#644f4a"}}>
                            
                        <h4 style={{lineHeight:"1.8", fontStyle:"italic", color:"white"}}>Lär dig allt om Social trading</h4>
                        <Link to="/social-trading/"
                            className="w-50 p-2 rounded text-center"
                            style={{backgroundColor:"#007bff", color:"white"}}
                        > 
                            Las mera
                        </Link>
                    </div>
                </div>
           
            <div className="p-3">
                <h3> Vanliga tradingmisstag</h3>
                <ul>
                    <li> 
                        Att man inte har planerat sin volymstyrka på kontraktet.
                    </li>
                    <li> 
                        Att man stänger av sin position för tidigt eller för sent.
                    </li>
                    <li> 
                        Att man öppnar för många positioner.
                    </li>
                    <li> 
                        Att man inte tar hjälp av ett övnings-/demokonto.
                    </li>
                    <li> 
                        Att man använder fel investeringsstrategi när det är stora ekonomiska event runt om i
                        världen. Tänk på att kurserna kan svänga kraftigt då.
                    </li>
                </ul>
                <p>
                    Tänk på att CFD:s handlas med hävstång och kan resultera i förluster där du kan förlora ditt
                    satsade kapital och därför passar inte CFD alla investerare.
                </p>
            </div>
            <div className="p-3">
                <h3>Hävstångseffekten </h3>
                <p>
                    I dag används hävstångseffekten inom t.ex. aktie-, valuta-, råvaru-, index- och
                    obligationshandel. Mäklare och investerare använder sig av hävstångseffekten för att öka på
                    kapitalet. Företag erbjuder olika nivåer på hävstången, allt från 1:1 och uppåt, beroende på
                    investerarens önskan. Hävstångseffekten är ett hjälpmedel för investerare med ett relativt litet
                    startkapital att kunna ge sig in i marknaden. Hävstångseffekten ökar vinsten men det är också
                    viktigt att komma ihåg att hävstångseffekten ökar förlusten om objektet minskar i värde. Ju
                    större hävstången är desto större är riskerna.
                </p>
            </div>
            <div className="p-3">
                <h3> Pending order</h3>
                <p>
                    Du lägger in en order på ett specifikt värde och datorn aktiverar din position när det önskade
                    värdeläget infinner sig.
                </p>
            </div>
            <div className="p-3">
                <h3>Stop-loss </h3>
                <p>
                    Om du vill skydda dig från att förlora hela ditt satsade kapital kan stop-loss, en order som
                    avslutar kontraktet när investeringens värde har fallit till en viss nivå, användas. Du
                    bestämmer i förväg nivån på stop-loss.
                </p>
            </div>
            <div className="p-3">
                <h3> Take-profit</h3>
                <p>
                    Du ställer in i förväg brytpunkten på kontraktsavslut. När du har nått den förvalda
                    brytpunkten bryts ditt kontrakt automatiskt.
                </p>
            </div>
            <SimpleRandomCard />
        </React.Fragment>
    )
}

export default CfdHandel;