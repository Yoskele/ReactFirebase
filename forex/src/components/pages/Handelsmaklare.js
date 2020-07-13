import React from 'react';
// Seo reasons
import {Helmet} from "react-helmet";
// Components
import RandomCard from '../functions/RandomCompany';
import SimpleRandomCard from '../functions/SimpleRandomCard';

// Images
import ArrowUpImage from '../../imagesFolder/arrowUp.png';
import CompanyCard from '../company/CompanyCard';
const Handelsmaklare = () => {
    return(

        <React.Fragment>
            <Helmet>
                <title>Handelsmäklare</title>
                <meta name="description" content="HandelsMaklare!" />
            </Helmet>
            <RandomCard />
            <div className="p-3">
                <h1 className="mt-2"> Handelsmäklare </h1>
                <p>
                    Innan du börjar handla behöver du välja en mäklare, vilket kan vålla lite huvudbry då det kan
                    vara svårt att veta hur man ska gå tillväga för att hitta information. Men det lönar sig att lägga
                    ner tid på att grundligt gå över utbudet av mäklare.
                </p>
                <p>
                    För att underlätta sökningen har vi sammanställt information om fem ansedda mäklare;
                    AvaTrade, eToro, Plus500, Fortrade och HYCM. Samtliga är licensierade för handel och är
                    även registrerade hos svenska Finansinspektionen, FI, vilket betyder att dessa företag har
                    tillstånd att erbjuda finansiella tjänster för kunder i Sverige. Finansinspektionen kontrollerar
                    ständigt att företagen håller sig till de uppsatta kraven.
                </p>
            </div>
            <div className="p-3">
                <h3>Handelsmäklare online </h3>
                <img src={ArrowUpImage} alt="demokonto" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />
                <p>
                    Handel av råvaror och aktier var länge begränsat till en liten skara investerare, men i början av
                    1990-talet när datorerna började dyka upp i vart och vartannat hem öppnades den globala
                    marknaden upp för allmänheten. Allt eftersom den tekniska utvecklingen fortskred började
                    mäklare etablera sig online och förse handlare med elektroniska handelsplattformar.
                </p>
                <p>
                    När mäklarna började erbjuda spekulation på finansiella instrument fick fler människor upp
                    ögonen för det nya sättet att handla med underliggande instrument. Den största fördelen var
                    att handlaren kunde spekulera på instrumentets prisutveckling och behövde aldrig oroa sig för
                    att äga t. ex. tio ton vete och all den huvudvärk som medföljer med att sälja det vidare.
                    Handlaren fick även tillgång till hela världens marknad istället för att vara hänvisad endast till
                    den lokala marknaden. Tillgången till den globala marknaden ledde till att
                    investeringsmöjligheterna formligen exploderade.
                </p>
                <p>
                    Nackdelen med att handla online via globala mäklarföretag är att det finns risk för
                    bedrägerier. För att undvika oseriösa mäklarföretag är det viktigt att endast anlita ansedda
                    mäklarföretag som är licensierade av betrodda tillsynsmyndigheter.
                </p>
            </div>

            <div className="p-3">
                <h3>Vad är en licensierad handelsmäklare? </h3>
                <p>
                    För att få en framgångsrik och lyckad handel är det viktigt att du väljer en mäklare som är
                    seriös och ansedd. Det första som tyder på att företaget är legitimt är att kolla upp att det är
                    licensierat av ett europeiskt kontrollorgan som t. ex CySEC (Cyprus Securities and Exchange
                    Commission). CySEC är ett välkänt kontrollorgan som utfärdar licenser för seriösa företag
                    som vill operera inom EU och EES eller av Storbritanniens FCA (Financial Conduct
                    Authority) mål är bland annat att skydda kunder genom reglering och licensiering av
                    finansiella företag.
                </p>
                <p>
                    Innan ett företag får en licens måste det uppfylla en rad regler och bestämmelser och när alla
                    kraven har uppfyllts är företaget under ständig kontroll av tillsynsmyndigheten. Eventuella
                    oegentligheter straffas genom prickningar, böter och i grova fall med en indragen licens och
                    förbud att agera på marknaden.
                </p>
                <p>
                    De mäklare som rekommenderas på den här sajten är licensierade och har rätt att erbjuda
                    handel online med CFD:er och valuta s.k. forex. Vi uppmanar dock dig att alltid kontrollera
                    att en mäklare är licensierad innan du börja trada för det finns alltid en risk att något företag
                    har fråntagits sin licens.
                </p>
            </div>

            <CompanyCard />

            <div className="p-3">
                <h3>Välja handelsmäklare </h3>
                <p>
                    När vi letade fram de fem främsta mäklarna inom online handel tittade vi på nedanstående
                    punkter som är viktiga att ta i beaktande i val av mäklare:
                </p>
                <ul>
                    <li> 
                        <b> Licensierad mäklare.</b> Det är viktigt att företaget följer lagar och regler så att du som
                        kund inte råkar illa ut.
                    </li>
                    <li> 
                        <b>Webbplats på svenska. </b> Det är viktigt att du som kund får informationen på ditt
                        modersmål för att kunna ta de bästa möjliga besluten. (Det finns många suveräna
                        licensierade handelsplatser på engelska, men vi har medvetet valt att koncentrera oss
                        på dem som erbjuder svenska på sina webbplatser.)
                    </li>
                    <li> 
                        <b> Kundtjänst. </b>Det ska vara lätt att kontakta företaget och få support vid behov.
                    </li>
                    <li> 
                        <b> Utbildning.</b> Inom finansbranschen händer hela tiden något och en bra mäklare förser
                        sina kunder med bl. a. färska nyheter och utbildningar i olika strategier.
                    </li>
                    <li> 
                        <b>Realtidskurser. </b> En mäklare ska ha realtidskurser. 
                    </li>
                    <li> 
                        <b> Gratis demokonto. </b> Att kunna testa sig fram med ett testkonto är guld värt innan man
                        bestämmer sig för att satsa sina egna pengar, så ta tillvara möjligheten att pröva olika
                        strategier med ett gratis demokonto.
                    </li>
                </ul>
            </div>

            <div className="p-3">
                <h3>Första steget </h3>
                <p>
                    När du har valt en mäklare, se till att öppna ett demokonto så att du kan känna dig för om det
                    är rätt val för dig. Bekanta dig med handelsplattformen och lägg några positioner med de
                    virtuella pengarna som medföljer demokontot för att lära dig hur handel går till. Se även till
                    att kontakta kundsupport med eventuella frågor.
                </p>
                <p>
                    Om du känner att mäklaren motsvarar dina förväntningar och du känner dig nöjd med både
                    handelsplattformen och supporten kan du satsa egna pengar, men om du känner att mäklaren
                    inte passar dig är det bara att öppna ett demokonto hos en annan mäklare och testa om det är
                    ett bättre alternativ. Det är viktigt att du känner dig bekväm med mäklaren innan du satsar
                    egna pengar.
                </p>
            </div>
            <SimpleRandomCard />
        </React.Fragment>
    )
};

export default Handelsmaklare;