import React, { useContext } from 'react';
// Seo reasons
import {Helmet} from "react-helmet";
// Images
import commoditiesImage from '../../imagesFolder/testcomodities.jpg';
import RandomCard from '../../components/functions/RandomCompany';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';
import CompanyBigCard from '../company/CompanyBigCard';

const Commodities = () => {
    const { companies } = useContext(ForexCompanyContext);
    return(
        <React.Fragment>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Råvaruhandel</title>
                <meta name="description" content="Safe site Yooooooooo!" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <RandomCard />
            <div className="p-3">
                <h1> Råvaruhandel </h1>
                <p>
                    Handel med råvaror är den äldsta formen av handel människor emellan och idag investerar
                    åtskilliga personer i olika jordbruksprodukter, energivaror och metaller tack vare att online
                    mäklare har via sina handelsplattformar gjort det lätt för handlare att handla positioner
                    hemifrån.
                </p>

                <h3 className="mt-5">Vad är råvaror? </h3>
                <p>
                    Råvaror delas in i två kategorier; mjuka råvaror, som består av jordbruksprodukter, och hårda
                    råvaror, som består av metaller och energivaror. All råvaruhandel sker i enheter; olja handlas
                    på fat (BBL), vete handlas i balar (BU), kaffe i pounds (LBS), guld i (OZS) o.s.v.
                </p>
               
                <h3 className="mt-5"> Råvaruhandel med CFD:er</h3>
                <img src={commoditiesImage} alt="demokonto" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />
                <p>
                    Råvaror handlas med CFD:er, vilket innebär att handlare inte äger det underliggande
                    instrumentet utan satsar bara på råvarans värdeutveckling. Traders behöver således inte vara
                    rädda för att de har några ton vete väntandes på sig i ett annat land.
                    <br/>
                    Råvaruhandel med CFD via onlinemäklare görs med hävstång, vilket innebär att det satsade
                    kapitalet ökar i värde och med det även de potentiella vinsterna eller förlusterna.
                </p>

                <h3 className="mt-5">  Varför är råvaruhandel populärt?</h3>
                <p>
                    En del handlare anser att handel med råvaror är enklare jämfört med andra sorter finansiella
                    instrument eftersom handlaren behöver endast ta i beräkning utbud vs efterfrågan. Låt oss ta
                    två exempel. Om det har konstaterats mindre gynnsamma väderförhållanden går
                    jordbruksprodukternas värde upp i pris och vid högkonjunktur går priserna på metall, som
                    järn, upp eftersom det behövs till byggindustrin.
                </p>

                <h3 className="mt-5">Råvarans värde</h3>
                <p>
                    Många händelser, som odlarna eller gruvägarna inte kan förutse påverkar prisförändringarna
                    på råvarumarknaden. Utbudet kan helt plötsligt minska eller öka på grund av ekonomiska och
                    politiska händelser runt om i världen och inte minst väderförhållandena kan ställa till stora
                    skador i sista stund. Om tillgången minskar och inte är i nivå med efterfrågan rusar priserna i
                    höjden och om tillgången överskrider efterfrågan sjunker priserna på världsmarknaden.
                </p>

                <h3 className="mt-5"> Är det klokt att investera i råvaror?</h3>
                <p>
                    Råvaror är något som människan är beroende av oavsett om det är låg- eller högkonjunktur.
                    Frågan är bara hur mycket råvaror som behövs. Detta innebär att en råvaras värde kan
                    <br/>
                    störtdyka, men den förlorar aldrig hela värdet. Som i orostider ökar handeln med guld, men
                    när tiderna bli bättre sjunker värdet en del men den förlorar inte hela värdet eftersom
                    efterfrågan alltid finns där.
                </p>
                <div className="d-flex flex-wrap justify-content-around">
            </div>
              <CompanyBigCard />
                <h3 className="mt-5"> Hur kommer man igång med råvaruhandel?</h3>
                <p>
                    För att komma igång med råvaruhandel ska du först välja ut en och öppna ett kundkonto hos
                    dem. När du har gjort en insättning väljer du en av råvarorna.
                    Om det är första gången du ska handla med råvaror är det en god idé att pröva råvarutrading
                    på ett demokonto laddade med virtuella pengar som de flesta onlinemäklarna erbjuder. Med
                    hjälp av demokontot lär du dig att hantera handelsplattformen och hur själva handeln går till.
                    När du har fått kläm på hur trading går till kan du handla med dina riktiga pengar.
                </p>
                <h3 className="mt-5">Hur investerar man i råvaror?</h3>
                <p>
                    Det finns många sätt att handla i råvaror som aktier, ETF:er, derivat o.s.v. Som nämnts
                    tidigare är CFD, kontrakt på mellanskillnaden, ett populärt sätt att investera på
                    råvarumarknaden. Handlaren investerar på prisförändringen mellan köp- och säljpriset. Det
                    viktigaste är att handlaren inte äger det underliggande instrumentet, så det kommer inte att
                    dyka några lass med socker hem till handlaren.
                </p>

                <h3 className="mt-5"> Tre skäl till att investera i råvaror</h3>
                <p>
                    Det går att skriva en hel bok om varför råvaruhandel är en bra bransch att investera i, men
                    tyvärr finns det inte plats för att gå in djupare i det men följande skäl är bara tre av många:
                </p>
                <ul> 
                    <li> 
                        Det kommer alltid att finnas behov av råvaror eftersom de tillhör människans
                        basbehov.
                    </li>
                    <li> 
                        Råvaror är ett skydd mot inflationen. När priset på olika varor stiger, ökar även värdet
                        på råvarorna som varorna är gjorda av.
                    </li>
                    <li> 
                        Startkapitalet kan vara mindre då CFD:er handlas med hävstång, vilket gör
                        handelskapitalet blir större.
                    </li>
                </ul>
                <h3 className="mt-5">Hur väljer man mäklare för råvaruhandel?</h3>
                <p> 
                    XXX har recenserat fem onlinemäklare, som har kunder runt hela världen och omsätter
                    enorma summor varje månad. Deras webbsajter finns även på svenska, vilket är ett måste för
                    att du som kund ska få rätt information. När sammanställningen gjordes tittade vi på att
                    företagen var reglerade och licensierade, följde branschlagar och regler och hade gott rykte.
                </p>
            </div>
        </React.Fragment>
    )
}


export default Commodities;