import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ForexCompanyContextProvider from './context/ForexCompanyContext';
import ArticleContextProvider from './context/ArticleContext';
import SideBar from './components/sideBar/SideBar';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Cookie from './components/functions/cookie/Cookie';
ReactDOM.render(
  <BrowserRouter>
    <ForexCompanyContextProvider>
    <ArticleContextProvider>
      <div className="w-100"> 
        <nav>
          <Navbar />
        </nav>

        <div className="body-wrapper">
          {/* Create Main page  */}
          <div className="container-main">
            <div className=" main-wrapper  card">
              <App />
            </div>
            
          </div>
          <div className="container-sidebar">
            <SideBar />
          </div>
          
          <Cookie />

          <footer className="footer p-3 row mx-auto justify-content-center mt-4">
              <div className="col-lg-6 p-2 d-flex flex-column justify-content-center">
                <p>
                  Vi på XXX välkomnar våra läsares och besökares kommentarer och åsikter och du kan
                  kontakta oss i följande fall:
                </p>
                <ul>
                  <li>
                    om ni är ett mäklarföretag som vill lista era tjänster på vår webbplats. Vänligen notera
                    att vi på XXX är objektiva när vi bedömer mäklare eftersom vårt mål är att ge kunder
                    en rättvisande bild för att upprätthålla vår trovärdighet och för att bevara läsarnas
                    intressen,
                  </li>
                  <li>
                    i händelse av fel eller föråldrad information på sajten, inklusive detaljer om
                    mäklarföretag som har utvärderats på vår webbplats,
                  </li>

                  <li>
                    om du har några idéer eller kommentarer för att utveckla webbplatsen och förbättra
                    kvaliteten på de tjänster som tillhandahålls på den.
                  </li>
                </ul>
                <label>
                  Riskinformation: Handel med finansiella instrument är förknippat med hög risk. Värdet kan
                  både öka och minska och du kan förlora hela ditt investerade belopp.
                </label>
              </div>

              <div className="col-lg-6 p-2">
                <h6>Riskvarning</h6>
                <p>
                  Handel med finansiella instrument innebär en hög risk och kan leda till att hela det insatta
                  kapitalet förloras och är därför inte lämplig för alla investerare. Investera aldrig pengar som
                  du inte har råd att förlora. Innan du bestämmer dig för att handla bör du vara medveten om
                  alla risker som är förknippade med handel vare sig det är CFD, valutor, kryptovalutor,
                  råvaror, index m.m.
                </p>
                <p>
                  Ha alltid följande två regler i åtanke: Satsa aldrig mer pengar än du har råd att avvara!
                  Överskrid inte summan som du har bestämt att du kan satsa!
                </p>
                <p>
                  Viktigt: Den här webbplatsen ger endast information om den finansiella marknaden och hur
                  den fungerar. Informationen ska inte betraktas som råd gällande investeringar.
                </p>
                <Link to="/om-oss/">
                    Om oss
                  </Link>
                  <Link to="/om-oss/" className="ml-3">
                    Cookie Policy Integritet
                  </Link>
               
              </div>
          </footer>
        </div>


      </div>
    </ArticleContextProvider>
    </ForexCompanyContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
