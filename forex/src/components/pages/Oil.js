import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';
// Seo reasons
import {Helmet} from "react-helmet";
// Components
import RandomCard from '../functions/RandomCompany';

import SimpleRandomCard from '../functions/SimpleRandomCard';
// Images
import OilDrill from '../../imagesFolder/OilDrill.jpg';
import OilDollarImage from '../../imagesFolder/oilDollar.jpg';
import CompanyBigCard from '../company/CompanyBigCard';

const Oil = () => {
    return(

        <React.Fragment>
            <Helmet>
                <title>Handel med olja</title>
                <meta name="description" content="Handel med olja" />
            </Helmet>

            <div className="p-3">
                <h1> Handel med olja!</h1>
                <p>
                    I den här artikeln kommer vi att försöka se över den historiska betydelsen av olja, de faktorer
                    som påverkar dess pris som en strategisk råvara, samt en förenklad förklaring av hur olja
                    handlas på råvarumarknader. All handel med olja sker i amerikanska dollar och enheten som
                    används är fat.
                </p>
                
            </div>

            <div style={{height:"500px"}} >
                <TradingViewWidget symbol="USOIL"
                    autosize
                />
            </div>
            
            <div className="p-3">
                <h3 className="mt-2"> Olika sorters olja</h3>
                <p>
                    Det finns mer än 180 typer av olja, och de är indelade i enlighet med internationella
                    standarder som fastställts av specialiserade institutioner, den mest berömda är American
                    Petroleum Institute. Ju bättre kvalité oljan har desto högre är priset. Man brukar dela in oljan i
                    tre olika kategorier
                </p>
                <ul>
                    <li className="mt-1"> Brentolja som kommer från Nordsjön och är en s.k. referensolja för priser </li>
                    <li className="mt-1"> WTI-olja som utvinns i Nordamerika. </li>
                    <li className="mt-1"> Dubai/Oman som har den lägsta kvaliteten på grund av högt svavelinnehåll. </li>
                </ul>
            </div>

            <div className="p-3">
                <h3 className="mt-2"> Vikten av olja</h3>
                <p>
                    Oljans strategiska betydelse är inte svår att förstå eftersom den är den viktigaste energikällan i
                    form av bensin, diesel, oljor o.s.v. Dessutom är oljan viktig även inom industrin eftersom den
                    är en viktig ingrediens i många viktiga produkter som plast, kläder och solpaneler.
                </p>
            </div>
            
            <div className="p-3">
                <h2 className="mt-2">Vad driver oljepriset?</h2>
                <p>
                    Oljepriset påverkas av utbud och efterfrågan och dessa påverkas av en rad faktorer som
                    exempelvis rapporter från internationella organisationer oavsett om det är nuvarande eller
                    förväntad efterfrågan och politiska händelser. internationella konflikter och krig påverkar
                    också oljepriserna avsevärt, eftersom de ofta utgör ett massivt och oväntat hot för att störa
                    oljeförsörjningen till de globala marknaderna.
                </p>
                <p> Nedanstående organisationer förser marknaden med information om oljetillståndet. </p>
            </div>
      
            <div className="p-3">
                <h3 className="mt-2"> U.S. Energy Information Administration (EIA)</h3>
                <p> 
                    Det är en amerikansk oberoende informationsbyrå som utfärdar rapporter om oljelager,
                    petroleumderivat och naturgas. Energy Information Administration fungerar som en konsult
                    för den amerikanska regeringen vars uppgift är att samla in, tolka och analysera all
                    information relaterad till energimarknaderna, men har över tid förvandlats till en av de
                    viktigaste informationskällorna som alla investerare följer noga. Detta beror på vikten av
                    uppgifter som släppts ut av EIA, vilket huvudsakligen förklarar nivån på produktion,
                </p>
                <p>
                    konsumtion och förändring i lager i USA, som för närvarande är den största tillverkaren och
                    konsumenten av olja i världen.
                </p>
                <p>
                    Energy Information Administration utfärdar två veckorapporter, den första rapporten visar
                    rålager utöver priserna på petroleumderivat, medan den andra rapporten presenterar analyser
                    från byråns experter för att kommentera nyheterna som släppts. Energy Information
                    Administration tillhandahåller sina rapporter till alla och kan hittas på dess webbplats.
                </p>
            </div>

            <div className="p-3">
                <h3 className="mt-2">International Energy Agency (IEA)  </h3>
                <p>
                    IEA är ett rådgivande organ för Organization for International Cooperation and Development.
                    Dess främsta roll är att samla in och analysera data relaterad till energimarknaderna. De
                    utfärdar en rapport varje månad som inkluderar prognoser för efterfrågan och utbudsnivåer
                    och uppskattningar av oljepriser. Dessa rapporter kan erhållas via ett månadsabonnemang.
                </p>
               
            </div>

            <RandomCard />

            <div className="p-3">
                <h3 className="mt-2"> Faktorer som påverkar oljepriset </h3>
                <img src={OilDollarImage} alt="Cfd Gold" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />

                <p>
                    Tillgång och efterfrågan är de avgörande faktorerna för oljepriset, precis som på andra
                    råvaror. Efterfrågan bestäms utifrån ekonomisk tillväxt och befolkningstillväxt i olika och av
                    den anledningen växer oljeförbrukningen i olika takt varje år. Det mest framträdande
                    exemplet på detta är oljeboomen då priserna steg från $ 10 per fat tills det nådde mer än $ 140
                    per fat 2008. Den främsta drivkraften för dessa prisstegringar under den perioden var
                    utvecklingen i den kinesiska ekonomin, som växte i rasande takt och förvandlade Peking till
                    världens näst största oljekonsument.
                </p>
               <p>
                    Den globala tillgången som naturligtvis bestäms av produktionsnivåerna över hela världen, är
                    den andra faktorn som påverkar priset på olja. De kraftiga nedgångarna i oljepriset sedan 2013
                    är ett bra exempel på den avgörande roll som utbudssidan spelar för att bestämma
                    prisutvecklingen. Mer specifikt inträffade en boom i produktionen av skifferolja i USA, vilket
                    gjorde att USA blev den största oljeproducenten i världen, istället för Ryssland och
                    Saudiarabien, när de kunde producera mer än 12,5 miljoner fat per dag.
               </p>
               <p>
                    Ett annat sätt att påverka tillgången är helt enkelt att minska på produktionen och det var just
                    det som hände när OPEC med Ryssland i spetsen sänkte produktionen med 1,2–2 miljoner fat
                    per dag 2016. Avtalet resulterade i att priserna steg, vilket var vad de oljeproducerande
                    länderna var ute efter.
               </p>
            </div>

            <div className="p-3">
                <h3 className="mt-2"> Trada olja</h3>
                <p>
                    Det finns många sätt att trada med olja. Till att börja med så finns det flera marknader för
                    oljehandel och även olika kategorier för investerare. 
                    <br/>
                    Man kan säga att det finns två sorters
                    handlare på oljemarknaden; investerare som vill köpa oljan för diverse ändamål och
                    investerare för spekulativa ändamål. Den första gruppen inkluderar köpare och säljare som
                    handlar på de fysiska marknaderna, vilket innebär att produkten säljs av ett företag eller land
                    med ett produktionsöverskott, medan köpgruppen inkluderar länder eller institutioner som vill
                    köpa olja för att tillgodose deras olika behov för att säkra energikällor.
                </p>
               <p>
                    Den andra sorten är finansiell handel på futures- och elektroniska plattformsmarknader, och i
                    denna kategori ingår ett stort antal investerare som vill köpa och sälja olja i syfte att göra
                    vinster och utan att behöva köpa eller sälja oljan, med andra ord spekulerar de i priset utan att
                    äga den underliggande tillgången.
               </p>
            </div>

            <div className="p-3">
                <h3 className="mt-2">Oljehandelscentra</h3>
                <p>
                    Handlare som är intresserade av oljehandel kan göra detta genom många kanaler. Futures- och
                    optionsmarknaderna är huvudcentret för oljehandel, men de är mer lämpade för stora
                    investerare eftersom de kräver ett startkapital på minst 50 000 $ och stora kontraktstorlekar på
                    upp till 1 000 fat per transaktion. Det finns andra mer komplexa derivat, såsom ETF.
                </p>
               <p>
                    Investerare kan också köpa andelar i energiföretag, till exempel Exxon Mobil och British
                    Petroleum, då deras aktier stiger och faller parallellt med oljeprisrörelserna och utgör den
                    största inkomstkällan för dessa jättebolag.
               </p>
            </div>

           <CompanyBigCard />

            <div className="p-3">
                <h3 className="mt-2"> Handla olja online </h3>
                <p>
                    Internet har varit avgörande för den stora boomen inom finansiell handel de senaste åren,
                    eftersom det tillåter enskilda investerare att komma in på denna marknad smidigt och snabbt.
                </p>
               <p>
                    Investeraren behövde förr kontakta mäklaren för att informera honom om pris, kvantitet och
                    bekräfta inköpsorder, sedan informerar den behöriga medarbetaren om de tillgängliga priserna
                    och provisionen som mäklarföretaget kommer att debitera och andra villkor, och efter att ha
                    accepterat alla dessa uppgifter placera affären via mäklaren som var ansluten till
                    handelshallen på de officiella börserna. På samma sätt måste investeraren gå igenom alla
                    dessa steg igen när hen ville ändra eller sälja. 
               </p>
               <img src={OilDrill} alt="Cfd Gold" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />
               <p>
                    Dessa tråkiga och framförallt tidsödande rutinprocedurerna har blivit en del av det förflutna,
                    eftersom handlaren själv kan arbeta via en elektronisk plattform och placera sina order, ändra
                    eller sälja dem.
               </p>
               <p>
                    Oljemarknaden anses vara en av de viktigaste marknaderna som har gynnats av detta
                    teknologiska uppsving, där spekulanter med relativt litet kapital har kommit in på denna

                    marknad genom så kallad CFD-handel. CFD: erna ger oljehandlaren en chans att spekulera på
                    en prisförändring utan att fysiskt behöva äga oljan eller få problem med att lagra eller ta emot
                    faten. CFD: er kännetecknas också av enkelhet eftersom kontraktspriset är kopplat till
                    oljepriset på globala marknader, vilket naturligtvis underlättar köp- och säljbeslut på tydliga
                    ekonomiska och tekniska grunder.
                </p>

                <p>
                    I CFD-handel tillåter användning av så kallad hävstångseffekt, som låter låna pengar från
                    mäklarföretaget för att öppna positioner vars nominella värde överstiger det tillgängliga saldot
                    på handlarens konto. Exempelvis kräver handel med olja på officiella börser en garanti (kallas
                    marginalen) på upp till 50% av värdet på erbjudandet. Som vi förklarade tidigare kan
                    kontraktsvärdet uppgå till 1000 fat och därmed kan värdet på affären överstiga 50 000 $ (om
                    Brent råolja handlas till 50 $ per fat). I detta fall kommer näringsidkaren att behöva
                    tillhandahålla en marginal eller garanti på 25 000 $ (50% av kontraktets värde), vilket är
                    mycket pengar för den genomsnittliga investeraren.
                </p>


                <p>
                    CFD-mäklare däremot kan ge en hävstång på 1:100. Enligt detta exempel måste en
                    oljehandlare ge en marginal på högst 500 $ för att öppna en position med samma nominella
                    värde, det vill säga 50 000 $.
                </p>
                <p>
                    Det bör dock noteras att hävstångseffekten har sin baksida då den kan blåsa upp förluster i
                    samma utsträckning som de bidrar till att öka vinsten.
                </p>

                <p>
                    Det finns också fördelar med handel med CFD och det är att elektroniska handelsplattformar
                    tillåter investeringar i flera olika tillgångar samtidigt, vilket gör det möjligt att diversifiera
                    riskerna och minska handelskostnaderna. Genom handelsplattformen kan tradern till exempel
                    handla flera typer av olja (Brent eller Texas) samt investera i andelar i oljeföretag noterade på
                    börser som London och New York. Handlaren kan också diversifiera sina investeringar
                    utanför energisektorn genom att spekulera i till exempel i valuta eller guld.
                </p>

                <p>
                    Följaktligen möjliggjorde de låga marginalkraven också lägre minimikapitalkrav, eftersom
                    mäklarföretag tillåter handlare att öppna ett konto med ett belopp 100 $, jämfört med 50 000 $
                    och mer när de vill handla på officiella börser genom stora mäklare.
                </p>     
                <p>
                    Innan man bestämmer sig för att gå in i oljehandel är det viktigt att anlita en ansedd mäklare
                    som har licenserna i ordning. Mäklarbolagen som rekommenderas på den här sajten är
                    ansedda och flitigt använda av traders över hela världen.
                </p>
            </div>

            <div className="p-3">
                <h4 className="mt-2"> Riskvarning med CFD-handel med olja </h4>
                <p>
                    CFD-handel med olja passar inte alla då det är förknippat med hög risk. En trader ska aldrig
                    underskatta riskmomentet och därför inte spekulera med mer än hen har råd att förlora.
                    Ett bra tips är att använda mäklarnas gratis demokonton som är laddade med virtuella pengar,
                    för att träna upp sig i hur plattformen fungerar och även för att se hur fort prisförändringarna
                    sker.
                </p>
            </div>
            <SimpleRandomCard />
        </React.Fragment>
    )
};

export default Oil;