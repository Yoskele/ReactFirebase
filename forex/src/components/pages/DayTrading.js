import React  from 'react';

// Seo reasons
import {Helmet} from "react-helmet";
// Components
import RandomCard from '../functions/RandomCompany';
import SimpleRandomCard from '../functions/SimpleRandomCard';
// Images
import DayTradingImage from '../../imagesFolder/dayTrading.jpg';
import DemoWithSocial from '../htmlTemplates/DemoWithSocial';
import CompanyBigCard from '../company/CompanyBigCard';
const DayTrading = () => {
    return(

        <React.Fragment>
            <Helmet>
                <title>DayTrading</title>
                <meta name="description" content="DayTrading!" />
            </Helmet>
            <RandomCard />
            <div className="p-3">
                <h1 className="mt-2"> Vad är Trading? </h1>
                <p>
                    Trading, eller handel på svenska, går ut på att hitta bra köp- och säljtillfällen på den
                    finansiella marknaden. För att en affär ska bli lyckad gäller det att köpa ett instrument när det
                    är billigt och sälja när det är dyrt. Det låter enkelt, men på grund av att värdet på aktier,
                    råvaror och valutor ökar och minskar, kan det vara svårt att pricka in rätt tid för
                    handelstillfället.
                </p>
                <p>
                    En del hävdar att trading är ren spekulation, medan folk inom den finansiella världen menar
                    att en förutsättning för att trading ska lyckas är det viktigt med kunskaper om hur de olika
                    finansiella marknaderna fungerar. Ju mer kunskap desto klokare beslut och större vinster.
                </p>
            </div>
            
            <div className="p-3">
                <h3 className="mt-2"> Vad är Day Trading? </h3>
                <img src={DayTradingImage} alt="demokonto" style={{width:"350px", height:'250px'}} className="rounded float-right img-fluid m-1" />
                <p>
                    Inom den finansiella sfären kan kunden köpa värdepapper som aktier på antingen lång eller
                    kort sikt. En Day Trader går in på marknaden och köper ett objekt och har den endast under
                    en kort stund som kan bestå av sekunder, minuter eller högst några få timmar, men aldrig över
                    natten, och sedan säljer av den. Skillnaden mellan köpvärdet och säljvärdet blir antingen en
                    vinst eller en förlust beroende på om kursen har gått upp eller ner och på om handlaren har
                    haft en kort eller en lång position.
                </p>
                <p>
                    En Day Trader har som mål att göra vinst genom objektets värdeförändringar under samma
                    dag som köpet görs. Detta kan upplevas som stressigt och därför är det viktigt att lägga band
                    på sina känslor och inte gripas av panik. Kurserna kan gå upp och ner i en snabb takt och det
                    gäller att ha en i förväg plan att förhålla sig till.
                </p>
            </div>

            <div className="p-3">
                <h3 className="mt-2">Vilka marknader finns det för daytrading?  </h3>
                <p>
                    Det första en daytrader ska göra är att välja vilken marknad satsningarna ska göras på. Nedan
                    följer några populära marknader och som du kan läsa mer om du klickar på länkarna.
                </p>
                <h4> Aktier </h4>
                <p> 
                    Många nya handlare börjar ofta att handla med aktier då det finns ett stort utbud av dem. Vid
                    trading med aktier följer handlaren värdeförändringen för en enskild vald aktie.
                </p>

                <h4> Index </h4>
                <p> 
                    Handel med index är vanligt inom daytrading och då satsar handlaren på utvecklingen av en
                    hel grupp av aktier i stället för ett företag. Låt oss ta ett exempel. OMX30 är ett index över
                    Stockholmsbörsens trettio mest omsatta aktier. Vid indextrading satsar handlaren på den hela
                    sammantagna kursutvecklingen, inte på en enskild akties värdeutveckling.
                </p>

                <h4> CFD:er </h4>
                <p> 
                    Olika sorters CFD:er är vanliga val bland daytraders som kan satsa i både uppgång och
                    nedgång och inte behöver lägga ner kraft på pappersarbete eftersom den underliggande
                    tillgången inte ägs av handlaren.
                </p>

                <h4> Råvaror </h4>
                <p> 
                    Att handla med råvaror är nog det som människan har köpt och sålt längst. I den här
                    marknaden handlas det med metaller som guld och silver, jordbruksprodukter som vete,
                    socker och kaffe, energiprodukter som olja och gas, för att bara nämna några.
                </p>
                <CompanyBigCard />
                <h4> Valuta </h4>
                <p> 
                    Valutahandel har länge varit ett populärt val bland daytraders eftersom det finns många
                    valutapar att välja mellan. Varje gång man köper en valuta så säljer man samtidigt en annan
                    valuta. Valutamarknaden är den mest omsatta marknaden av alla och omsätter flera biljoner
                    dollar dagligen.
                </p>

                <h4> Kryptovaluta </h4>
                <p> 
                    Olika kryptovalutor har blivit allt populärare inom daytrading i takt med att fler digitala
                    valutor har tillkommit. Tänk på att värdet kan fluktuera kraftigt då många använder sig av det
                    i spekulativa investeringar.
                </p>
            </div>
            <div className="p-3">
                <h3 className="mt-2"> Daytrading strategier </h3>
                <p>
                    En lyckad handel kräver en genomtänkt strategi. Det finns många strategier att välja mellan
                    och här nedan presenteras i korthet tre trading strategier som är populära bland daghandlare.
                </p>
                <h4>Trendtrading</h4>
                <p>
                    Trendtrading följer marknadsrörelserna. Om en kurs är på uppåtgående tar handlaren en lång
                    position och när kursen är på nedåtgående tar handlaren en kort position. Positionen hålls
                    endast under den tiden som trenden håller i sig.
                </p>
                <h4> Swingtrading</h4>
                <p>
                    Inom swingtrading följer handlaren värdeutvecklingen i både upp och nedgångar under en
                    kort tid och när instrumentet har nått det önskade läget går handlaren ut. Under swingtrading
                    kan det finnas många upp- och nergångar innan säljningen genomförs.
                </p>
                <h4> Scalping</h4>
                <p>
                    Scalping kallas även för skalpning och i den strategin strävar handlaren efter att göra många
                    småvinster i ett och samma objekts kursutveckling. Handlaren köper och säljer allt eftersom
                    kursen går upp och ner. De gäller hela tiden att köpa när det går neråt och sälja när det har
                    stigit lite för att sedan vänta på nästa nerfallande trend och köpa där och sälja av när det har
                    stigit igen. På detta sätt gör handlaren många småvinster genom att följa en och samma objekt
                    under en begränsad tid. För handlaren kräver det att stenhård kontroll och gå ut innan det blir
                    för sent.
                </p>
            </div>

            <DemoWithSocial />

            <div className="p-3">
                <h3 className="mt-2"> Hur blir man en day trader? </h3>
                <p>
                    Om du har både intresse och tid så har du förutsättningar för att lyckas. Det finns ingen
                    officiell utbildning du kan ta för att bli en daytrader utan det gäller att förbereda sig så mycket
                    som möjligt på egen hand. Det finns bland annat mycket material på nätet och filmer på
                    Youtube som förklarar tänket kring handel och många mäklare online har gratis
                    undervisningsmaterial, artiklar och analyser som kunder kan ta del av. Kom ihåg att en trader
                    aldrig blir fullärd eftersom marknaden är i en ständig rörelse och nytt tillkommer hela tiden.
                </p>
                <p>
                    Nedanstående tio punkter kan vara en hjälp på väg innan du bestämmer dig för att ta steget ut
                    och bli en trader.
                </p>
                <ul>
                    <li>
                        1. Välj en mäklare som du vill använda.
                    </li>

                    <li> 
                        2. Om du har X summa pengar att handla för, se till att sätta in stop loss så att du inte
                        förlorar för mycket om det går åt fel håll.
                    </li>

                    <li> 
                        3. Ta lärdom av traders som har lyckats. Många erfarna traders delar med sig av sina
                        strategier och av sin kunskap i olika sorters grupper som t ex på Social Trading
                        plattformen hos eToro.
                    </li>

                    <li>
                        4. Lägg tid på att hålla dig uppdaterad om en marknad.
                    </li>

                    <li>
                        5. Låt inte känslorna styra under stress utan håll huvudet kallt och håll dig till din plan.
                    </li>

                    <li>
                        6. Lär dig av dina misstag så att du förhoppningsvis inte gör om dem.
                    </li>

                    <li> 
                        7. Ge inte upp! Alla inom trading har misslyckats några gånger och därför är det viktigt
                        att du försöker minimera förlusterna genom att endast satsa pengar som du har råd att
                        avvara.
                    </li>

                    <li> 
                        8. Bestäm köp- och säljvärde innan du gör köpet och håll dig till det.
                    </li>
                    <li> 
                        9. För trading-dagbok där du skriver ner dina köp och sälj och om det har hänt något och
                        vad du har lärt dig av det.
                    </li>

                    <li> 
                        10. Använd demokonton, som många mäklare erbjuder gratis, tills du har fått kunskap om
                        plattformen och hur det går till att köpa och sälja!
                    </li>
                </ul>
            </div>
            <SimpleRandomCard />
        </React.Fragment>
    )
};

export default DayTrading;