import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          home: "<6>Home</6>",
          calendar: "<1>Calendar</1>",
          summerjob: "<2>Summer Job</2>",
          places: "<3>Places</3>",
          settings: "<4>Settings</4>",
          aboutus: "<5>About Us</5>",
          username: "Username",
          password: "Password",
          login: "Log In",
          register: "Register",
          aboutFirstIndent:
            "<p>Welcome to <span>Loma Vibes Finland</span>, your go-to guide for exploring the best summer events, must-see destinations, and exciting places to visit across Finland! Our team is passionate about showcasing the beauty and vibrant culture of Finland, helping both locals and tourists make the most of their summer adventures.</p>",
          aboutSecondIndent:
            "<p>From the breathtaking landscapes of Lapland to the lively festivals in Helsinki, our mission is to bring you the latest information on everything Finland has to offer. Our app features real-time data on summer events, local attractions, and hidden gems, all conveniently integrated with Google Maps to help you navigate through Finland's most beautiful spots.</p>",
          aboutThirdIndent:
            "<p>Whether you're looking for outdoor activities, cultural experiences,or a relaxing retreat,<span>Loma Vibes Finland</span> ensures you'llnever miss out on the essence of a Finnish summer.</p>",
          AboutUsSubTitle: "Discover the essence of Finnish summer with us!",
          AboutUsTitle: "About Us",
        },
      },
      fi: {
        translation: {
          home: "<6>Koti</6>",
          calendar: "<1>Kalenttari</1>",
          summerjob: "<2>Kesä työtä</2>",
          places: "<3>Paikat</3>",
          settings: "<4>Asetukset</4>",
          aboutus: "<5>Tietoa meistä</5>",
          username: "Käyttäjätunnus",
          password: "Salasana",
          login: "Kirjaudu sisään",
          register: "Rekisteröidy",
          aboutFirstIndent:
            "<p>Tervetuloa <span>Loma Vibes Finlandiin</span>, oppaaseesi parhaisiin kesätapahtumiin, nähtävyyksiin ja jännittäviin paikkoihin ympäri Suomea! Tiimimme on intohimoinen esittelemään Suomen kauneutta ja elävää kulttuuria, auttaen sekä paikallisia että matkailijoita saamaan kaiken irti kesän seikkailuista.</p>",
          aboutSecondIndent:
            "<p>Lapin henkeäsalpaavista maisemista Helsingin vilkkaisiin festivaaleihin – tavoitteemme on tuoda sinulle ajankohtaisinta tietoa kaikesta, mitä Suomi tarjoaa. Sovelluksemme sisältää reaaliaikaisia tietoja kesätapahtumista, paikallisista nähtävyyksistä ja piilotetuista helmistä, kaikki kätevästi integroituna Google Mapsiin auttaakseen sinua suunnistamaan Suomen kauneimmissa kohteissa.</p>",

          aboutThirdIndent:
            "<p>Etsitpä sitten ulkoilma-aktiviteetteja, kulttuurielämyksiä tai rentouttavaa lomaa, <span>Loma Vibes Finland</span> varmistaa, että et jää paitsi suomalaisen kesän ytimestä.</p>",
          AboutUsSubTitle: "Löydä suomalaisen kesän ydin kanssamme!",
          AboutUsTitle: "Tietoa meistä",
        },
      },
    },
  });
