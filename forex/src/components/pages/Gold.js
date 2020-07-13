import React from 'react';
import TradingViewWidget  from 'react-tradingview-widget';
// Seo reasons
import {Helmet} from "react-helmet";
// Components
import RandomCard from '../functions/RandomCompany';

// Images
import GoldImage from '../../imagesFolder/gold1.jpg';
import CompanyBigCard from '../company/CompanyBigCard';

const Gold = () => {
    return(

        <React.Fragment>
            <Helmet>
                <title>Handel med guld</title>
                <meta name="description" content="Handel med guld!" />
            </Helmet>
            <RandomCard />
            <div className="p-3">
                <h1 className="mt-2"> Handel med guld!</h1>
                <p>
                    Redan 2 000 f Kr bröts guld i gruvor för att förse marknaden med den eftertraktade metallen
                    och oavsett om guldet var i klimpar eller formade till föremål och smycken borgade de en
                    trygg framtid. Idag kan handlare välja mellan att köpa guld i fysisk form eller spekulera på
                    dess värdeutveckling med så kallade CFD:er.
                </p>
            </div>
            
            <div style={{height:"500px"}} >
                <TradingViewWidget symbol="XAUUSD"
                    autosize
                />
            </div>

            <div className="p-3">
                <h3 className="mt-2"> Fördelar med att handla med guld med CFD:er online</h3>
                <img src={GoldImage} alt="Cfd Gold" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />

                <ul>
                    <li className="mt-1"> Du kan satsa och göra en vinst i både en upp- och nedgång. </li>
                    <li className="mt-1">Du kan öka din budget med hävstångseffekten. </li>
                    <li className="mt-1">Mäklarnas handelsplattformar är lättanvända. </li>
                    <li className="mt-1">Du har tillgång till kundsupport.</li>
                    <li className="mt-1">Onlinemäklarna erbjuder gratis demokonton. </li>
                </ul>
            </div>
            <div className="p-3">
                <h3 className="mt-2">Vad påverkar guldpriset? </h3>
                
                <p>
                    Många vill veta när är det rätt tillfälle att köpa eller sälja guld, men sanningen att säga så är
                    det omöjligt att sia över hur guldvärdet kommer att se ut om x antal månader då olika globala
                    händelser kan få guldpriset att skjuta i höjden, men även minska i värde. Ändå är det många
                    handlare som dras till handel med guld då det går att tjäna stora pengar just på grund av
                    fluktuationerna och med CFD-handel kan handlaren göra fina vinster vid såväl en uppgång
                    som en nedgång.
                </p>
               <b> En del viktiga faktorer som påverkar guldets värde: </b>
               <ul>
                    <li className="mt-1"> 
                        <b> Tillgång och efterfrågan.</b> Tillgången till guld är begränsat och ju fler som vill köpa
                        det desto högre är priset.
                    </li>

                    <li className="mt-1"> 
                        <b>Politiska läget.  </b>Vid politisk oro representerar guldet stabilitet.
                    </li>

                    <li className="mt-1"> 
                        <b> Det ekonomiska läget.</b> Vid en högkonjunktur köps smycken och vid en lågkonjunktur
                        anses guldet vara en säker investering.
                    </li>

                    <li className="mt-1"> 
                        <b> Turbulens på finansmarknaderna.</b> Guld anses vara en bättre investering när det
                        råder osäkerhet vid andra investeringsmarknader.
                    </li>

                    <li className="mt-1"> 
                        <b> US dollarns värde.</b> US valutan har alltid påverkat guldets prisutveckling.
                    </li>

                    <li className="mt-1"> 
                        <b> Ränteläget.</b> Låga räntor driver upp guldpriset eftersom räntebärande värdepapper
                        minskar sin attraktionsförmåga.
                    </li>
                </ul>
            </div>
            
            <CompanyBigCard />

            <div className="p-3">
                <h3 className="mt-2"> Hur handlar man guld?</h3>
                <p> 
                    Att handla med guld online är enkelt. Fyra nedanstående steg är det enda som behövs för att
                    du ska komma igång med att handla med guld.
                </p>
                <ul>
                    <li className="mt-1"> Välj en ansedd mäklare!</li>
                    <li className="mt-1"> Öppna ett konto och sätt in önskat belopp!</li>
                    <li className="mt-1"> Välj positionsstorlek!</li>
                    <li className="mt-1"> Spekulera på antingen en upp- eller nedgång!</li>
                </ul>
                <p>
                    <b> Ett tips:</b> Innan du börjar investera egna pengar är det bra att träna på att handla guld på
                    mäklarnas demokonton, som är laddade med virtuella pengar, för att på så sätt lära dig att
                    hantera handelsplattformen och testa olika strategier.
                </p>
            </div>

            <div className="p-3">
                <h5 className="mt-2">Riskvarning </h5>
                
                <p>
                    Guldhandel med CFD:er innebär en risk då du kan förlora hela ditt satsade kapital och passar
                    därför inte alla investerare. Du bör aldrig investera mer än du har råd att avvara.
                </p>
               
            </div>
        </React.Fragment>
    )
};

export default Gold;