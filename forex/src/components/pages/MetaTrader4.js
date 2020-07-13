import React from 'react';
// Seo reasons
import {Helmet} from "react-helmet";
// Components
import RandomCard from '../functions/RandomCompany';

import SimpleRandomCard from '../functions/SimpleRandomCard';
// Images
import metaTraderImage from '../../imagesFolder/metaTrader.png';
const MetaTrader4 = () => {
    return(

        <React.Fragment>
            <Helmet>
                <title>MetaTrader4</title>
                <meta name="description" content="MetaTrader4!" />
            </Helmet>
            <RandomCard />
            <div className="p-3">
                <h1 className="mt-2"> Handelsplattformen Meta Trader 4 </h1>
                <img src={metaTraderImage} alt="Meta Trader 4 " style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />
                <p>
                    Handeln online fick ett kraftigt uppsving när MetaTrader 4 introducerades 2005 och
                    småhandlare fick tillgång till samma verktyg och teknik som professionella stora handlare
                    hade.
                </p>
                <p>
                    Meta Trader 4 utveckaldes av MetaQuotes Software som har specialiserat sig på
                    investeringsprogramvara. De viktigaste fördelarna som plattformen erbjöd vid den tiden var
                    att den var gratis, och den gav experimentella versioner med virtuella pengar innan kunden
                    behövde satsa egna pengar. MetaTrader 4-funktionerna är användarvänliga, eftersom alla
                    huvudfunktioner kan utföras med några enkla klick.
                </p>

                <p>
                    Vissa hävdar att den viktigaste funktionen i MetaTrader 4 är tillgängligheten av ett enkelt
                    programmeringsspråk, MQL4, som gav en fin möjlighet för många handlare och utvecklare
                    att skapa ett oändligt antal robotindikatorer och experrådgivare. Terminalen fungerar som ett
                    Windows-kompatibelt program som gör det möjligt för slutanvändaren, utan behov av stora
                    programmeringsfärdigheter, att skriva robotar och skript för att automatisera
                    handelstransaktioner.
                </p>

                <p>
                    Med tiden har dessa tillägg skapat en stor mängd gratis och betalda verktyg och öppnat dörren
                    för utveckling av tusentals strategier, vilket i sin tur har underlättat inträdet av vanliga
                    människor till investeringsvärlden online.
                </p>
                <p>
                    2010 lanserade MetaQuotes den andra generationen av sin mest populära plattform, kallad
                    MetaTrader 5. Icke desto mindre har MetaTrader 4:s lyckade framgång varit ett hinder för
                    spridningen av MT5 och många mäklarföretag har slutat att erbjuda den nyare plattformen
                    efter att handlare avstått från att använda den.
                </p>
            </div>
            <SimpleRandomCard />
        </React.Fragment>
    )
};

export default MetaTrader4;