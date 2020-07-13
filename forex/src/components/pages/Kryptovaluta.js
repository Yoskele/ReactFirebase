import React from 'react';

// Seo reasons
import {Helmet} from "react-helmet";
// Components
import RandomCard from '../functions/RandomCompany';
import SimpleRandomCard from '../functions/SimpleRandomCard';
// Images
import BitcoinImage from '../../imagesFolder/bitcoin.jpg';
import CompanyBigCard from '../company/CompanyBigCard';

const Kryptovaluta = () => {
    return(

        <React.Fragment>
            <Helmet>
                <title>Kryptovaluta</title>
                <meta name="description" content="Kryptovaluta!" />
            </Helmet>
            <RandomCard />
            <div className="p-3">
                <h1 className="mt-2"> Kryptovaluta</h1>
                <p>
                    Allt eftersom vi håller på och går över till att bli ett kontantlöst samhälle har kryptovalutorna
                    fått en större genomslagskraft hos allmänheten. Med hjälp av den digitala valutan, som inte är
                    reglerad av någon centralbank eller land, görs transaktioner med hjälp av kryptografiska
                    metoder. Kunden kan aldrig ta ut kryptovalutan för att stoppa den i sin plånbok.
                </p>
                
            </div>
            
            <div className="p-3">
                <h3 className="mt-2"> Populära kryptovalutor</h3>
                <img src={BitcoinImage} alt="BitcoinImage" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />
                <p>
                    Det finns idag över 1300 olika kryptovalutor och antalet förväntas stiga. Av dessa 1300 är det
                    endast ca 350 som har ett marknadsvärde på över 10 miljoner $, Cirka 30 har ett värde på över
                    1 miljard $ och endast 7 har ett värde som överstiger 10 miljarder $.
                </p>
               
            </div>

            <div className="p-3">
                <h4 className="mt-2">Fem kända kryptovalutor </h4>
                <p>
                    <b> Bitcoin (BTC)</b> grundades av Satoshi Nakamoto och lanserades 2009 och är den mest använda
                    och kändaste av kryptovalutorna. Valutan kom till för att underlätta transaktioner online utan
                    att en tredje part behövde involveras.
                </p>

                <p>
                    <b>Ethereums </b> valuta kallas för Ether (ETH) och är den näst största kryptovalutan som grundades
                    av programmeraren Vitalik Buterin med hjälp av crowdfunding 2015.
                </p>

                <p>
                    <b>Ripple (XRP)</b> grundades av Ryan Fugger 2012 och är den kryptovaluta som favoriseras av
                    banker.
                </p>

                <p>
                    <b>Litecoin (LTC) </b> lanserades 2011 och har den högsta transaktionshastigheten av de virtuella
                    valutorna.
                </p>

                <p>
                    <b> Monero (XMR) </b>som togs i bruk 2014 och man använder en särskild kryptering som gör alla
                    transaktionerna 100% säkra som inte går att spåra.
                </p>
            </div>
            <CompanyBigCard />
            <div className="p-3">
                <h3 className="mt-2"> Vad påverkar kryptovalutans värde?</h3>
                <p>
                    En vanlig valuta påverkas av landets ekonomiska och politiska tillstånd och handelsbalansen,
                    medan tillgång och efterfrågan styr kryptovalutans värde. Efterfrågan ökar allt eftersom fler
                    accepterar kryptovalutan som en betalningsmetod.
                </p>
            </div>


            <div className="p-3">
                <h3 className="mt-2">Är kryptovaluta laglig? </h3>
                <p>
                    Ja, kryptovalutan är laglig. Men det finns länder som är skeptiska till kryptovaluta och som
                    ogärna vill släppa ifrån sig valutamonopolen. De båda stormakterna USA och Kina har
                    försökt hindra att kryptovalutan ska få fäste i respektive land, men Kina verkar ha svängt om i
                    frågan och planerar att införa sin egen kryptovaluta på försök i en handfull städer. Länder som
                    Japan och Tyskland är positiva till den digitala valutan och vill att den ska ha en formell
                    juridisk status. EU går i tankarna på att utveckla en egen kryptovaluta för att konkurrera med
                    <br/>
                    Facebooks initierade Libra. Om EU går vidare med sina planer kommer deras digitala valuta
                    att vara stabil till skillnad från den volatila Bitcoin.
                </p>
            </div>

            <div className="p-3">
                <h3 className="mt-2"> Kryptovalutans framtid</h3>
                <p>
                    I takt med att fler länder håller på att bli kontantlösa och utvecklingen inom handel med
                    kryptovaluta fortskrider är det inte troligt att länder kommer att förbjuda den virtuella valutan
                    helt. En del av de existerande mindre kryptovalutorna kan dock komma att försvinna medan
                    de större kommer att ha lättare att överleva.
                </p>
            </div>

            <div className="p-3">
                <h3 className="mt-2">Investera i kryptovaluta </h3>
                <p>
                    Låt oss först påminna att det finns inga investeringar som är hundraprocent säkra. Alla
                    investeringar har sina risker. Kryptovalutan har en högre risk än till exempel aktier och fonder
                    eftersom kryptovalutamarknaden inte är reglerad av någon bank eller stat. Det som lockar
                    handlare är att det går att göra stora vinster på kryptovalutaspekulationen.
                </p>
            </div>

            <div className="p-3">
                <h4 className="mt-2">Fördelar med att investera i kryptovaluta </h4>
                <ul>
                    <li>
                        En investering kan ge en hög avkastning
                    </li>

                    <li>
                        Kryptovalutans värde styrs inte av någon centralbank eller nation utan av efterfrågan
                    </li>

                    <li>
                        Handel med kryptovaluta sker anonymt där varken köpare eller säljare behöver
                        identifiera sig.
                    </li>     
                </ul>
            </div>

            <div className="p-3">
                <h4 className="mt-2">Nackdelar med att investera i kryptovaluta </h4>
                <ul>
                    <li>
                        Kursändringarna kan vara mycket stora
                    </li>
                    <li>
                        Det är svårt att sätta sig in i hur kryptovalutan är uppbyggd.
                    </li>
                </ul>
            </div>
            <SimpleRandomCard />
            <div className="p-3">
                <h3 className="mt-2"> Kryptovaluta med CFD handel i Sverige</h3>
                <p>
                    Det finns många sätt att handla med kryptovaluta, men det som svenska daytraders föredrar är
                    CFD, som innebär att de satsar på valutans prisförändring. Handlaren satsar på antingen en
                    värdeökning eller en värdesänkning under en kort tid och med hjälp av hävstångseffekten kan
                    en liten värdeskillnad betyda en omfattande vinst eller om det går snett; en stor förlust.
                </p>
            </div>

            <div className="p-3">
                <h3 className="mt-2">Ska vinster från kryptovalutahandel beskattas? </h3>
                <p>
                    Ja, alla vinster gjorda med kryptovalutahandel ska deklareras på en K4-blankett som finns på
                    skatteverket, men kom ihåg att även förluster får dras av.
                </p>
            </div>
        </React.Fragment>
    )
};

export default Kryptovaluta;