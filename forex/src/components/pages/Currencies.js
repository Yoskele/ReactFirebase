import React, { useContext } from 'react';
// Seo reasons
import {Helmet} from "react-helmet";
// Components
import RandomCompany from '../functions/RandomCompany';
import { ForexCompanyContext } from '../../context/ForexCompanyContext';
import CompanyBigCard from '../company/CompanyBigCard';
// Images
import CurrneciesImage from '../../imagesFolder/valutor.png';

const Currnecies = () => {
    const { companies } = useContext(ForexCompanyContext);
    return(
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Valuta</title>
                <meta name="description" content="Safe site Yooooooooo!" />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <RandomCompany />
            <div className="p-3">
                <h1> Valuta </h1>
                <p>
                    Syftet med valutahandel är att skaffa sig en så stor vinst som möjligt när man köper och säljer
                    två olika valutor. I princip kan man handla med vilka valutor som helst, men bland de mest
                    omsatta valutaparen är EUR/USD, GBP/USD och USD/JPY.
                </p>
            </div>

            <div className="p-3">
                <h3> Vad är valutahandel? </h3>
                <img src={CurrneciesImage} alt="demokonto" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />
                <p>
                    Handel med valuta kallas för Forex, Foreign Exchange och är den marknad som omsätter
                    mest. En del uppskattar att valutahandel omsätter cirka 5 biljoner dollar dagligen. När man
                    bedriver valutahandel innebär det att du köper en valuta och säljer en annan och därför pratar
                    man om valutapar. Valutapar skrivs t. ex. så här: EUR/GBP (basvaluta/motvaluta). Den första
                    valutan, i det här fallet euro, kallas för basvalutan och den andra är motvalutan (här det
                    brittiska pundet).
                </p>
                <b>När du handlar valutapar finns det två scenarier:</b>
                <div className="container p-2">
                    <li>
                        1. Du bestämmer dig för att köpa EUR/JPY. Du tror att euron stärks gentemot japanska
                        yenen och när det sker så har gjort en vinst. Enkelt sagt har du köpt basvalutan (EUR)
                        och sålt motvalutan (JPY). 
                    </li>
                    <li>
                        2. Du vill sälja EUR/JPY. Du gissar på att basvalutan försvagas gentemot motvalutan
                        och därför ska du sälja valutaparet. När värdet minskar kan du köpa tillbaka
                        basvalutan till ett förmånligare pris och därigenom göra vinst.
                    </li>
                </div>
            </div>
            <div className="p-3">
                <h3>När kan man handla valuta?  </h3>
                <p>
                    Det går i princip att handla med valuta dygnet runt eftersom när det är natt och stängt på ett
                    ställe så är det dag och öppet på ett annat ställe i världen. Veckans valutahandel börjar i
                    Australien och slutar i USA.
                </p>
            </div>

            <div className="p-3">
                <h3> Vilka handlar med valuta? </h3>
                <p>
                    Varje lands centralbank har i uppgift att hålla inflationen i landet på rimliga nivåer genom att
                    stabilisera landets valuta eller genom att ha en utländsk valutareserv och dessa kan uppnås
                    med hjälp av valutahandel. Även internationella företag som driver handel med andra länder
                    köper en viss valuta för att gardera sig mot för stora kursförändringar. Och sedan finns det
                    privatpersoner som spekulerar i syfte att skaffa sig vinster.
                </p>
            </div>

            <div className="p-3">
                <h3>  Vad påverkar valutamarknaden?</h3>
                <p>
                    Det som styr en valutas kursutveckling är tillgång och efterfrågan och de faktorer som
                    påverkar kurserna är bl. a. olika politiska och ekonomiska beslut, penningpolitiken som drivs i
                    ett land och valutaspekulationerna.
                </p>
            </div>

            <div className="p-3">
                <h3> Pips </h3>
                <p>
                    Termen pips, percentage in point, används i samband med kursförändringen i valutapar och
                    enheten skrivs med fyra decimaler, men det finns fall där fem decimaler används. Låt oss ta
                    EUR/USD som exempel; Ponera att EUR/USD säljs för 1, 1043 men går ner till 1,1039, då
                    har priset sjunkit med 4 pips och motsvarar i det här fallet 0,0004 $.
                </p>
            </div>
            
            <CompanyBigCard />
            <div className="p-3">
                <h3> Valutahandel och hävstång </h3>
                <p>
                    Handlare som har ett mindre kapital kan gå in och investera med hjälp av hävstång. Enkelt
                    uttryckt lånar handlaren pengar av mäklaren för att öka sitt kapital. Låt oss säga att
                    kursutvecklingen är 0,5% så ger ett litet insatt kapital på 100 $ endast 0,50 $ medan samma
                    procentandel på ett kapital på 100 000 $ ger 500 $ i vinst.
                </p>

                <p>
                    Handlare som har ett mindre kapital kan gå in och investera med hjälp av hävstång. Enkelt
                    uttryckt lånar handlaren pengar av mäklaren för att öka sitt kapital. Låt oss säga att
                    kursutvecklingen är 0,5% så ger ett litet insatt kapital på 100 $ endast 0,50 $ medan samma
                    procentandel på ett kapital på 100 000 $ ger 500 $ i vinst.
                </p>
            </div>

            <div className="p-3">
                <h3> Förkortningar på de vanligaste valutorna </h3>
                <b> Det är bra att känna till förkortningarna för de mest omsatta valutorna: </b>
                <li><b>USD</b>– amerikanska dollar</li>
                <li><b>EUR</b>– euro</li>
                <li><b>GBP</b>– engelska pund</li>
                <li><b>AUD</b>– australiska dollar</li>
                <li><b>CAD</b>– kanadensiska dollar</li>
                <li><b>CHF</b>– schweiziska franc</li>
                <li><b>JPY</b>– japanska yen</li>
            </div>

            <div className="p-3">
                <h3> Demokonto </h3>
                <p>
                    Valutamäklarna erbjuder demokonton laddade med låtsaspengar som du kan träna
                    valutahandel på. I början kan det te sig lite komplicerat men med lite träning kommer du att
                    ha baskunskaperna i hur valutahandel går till. Det fina med ett testkonto för valutahandel är
                    att du inte riskerar dina egna pengar.
                </p>
            </div>

            <div className="p-3">
                <h3> Ska vinster från valutahandel beskattas? </h3>
                <p>
                    Ja. Vinster från valutahandel räknas som kapitalinkomster och ska tas upp i den årliga
                    deklarationen. Kom ihåg att du kan göra avdrag för eventuella förluster.
               </p>
            </div>

        </React.Fragment>
    )
}


export default Currnecies;