import './App.scss';
import './sass/minisass/childsass/test.scss';
import React, {useState} from 'react';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import { Routes, Route } from "react-router-dom";
import Product from './components/Product';
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Button } from 'react-bootstrap';
import ThemeContext from './themeContext';
import Registration from './components/Registration';
import CounterClass from './components/CounterClass';
import ResolutionTest from './components/ResolutionTest';

const resources = {
  en: {
    translation: require('./i18n/en.json')
  },
  ka: {
    translation: require('./i18n/ka.json')
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ka",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export default function App() {

  const [theme, setTheme] = useState('light');


  const {t} = useTranslation();
  
  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }
  const [lang, setLang] = useState('en');

  function changeLanguageBetween() {
    if (lang === 'en') {
      setLang('ka');
    }else {
      setLang('en');
    }
    i18n.changeLanguage(lang);
  }

  
  return (
    <ThemeContext.Provider value={
      {
        theme: theme,
        setTheme: setTheme
      }
    }>
      <div className="App container-xxl">
        {/* <div className='TranslationDiv'>
          <button onClick={()=> changeLanguage('ka')} >ქართული</button>
          <button onClick={()=> changeLanguage('en')}>English</button>
          <br/>
          <button onClick={changeLanguageBetween}>Change Language</button>
          <div className='testBackground'>
            <h1> {t('Welcome to React')} </h1>
          </div>
        </div> */}
        <Header/>
        <ResolutionTest/>
        {/* <CounterClass start={1000} /> */}
        {/* <Registration/> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="about" element={<About />} />
          <Route path="/:productId" element={<Product />} />
        </Routes>
        {/* <section className='GridSystemExample'>
          <h3>Grid System Example</h3>
          <div className='row'>
            <div className='col colExample'> Col 1 </div>
            <div className='col colExample'> Col 2 </div>
            <div className='col-7 colExample'> Col 3 </div>
          </div>
          <div className="flexBox">
            <div className="flexItem">
              Flex Item
            </div>
          </div>
        </section>
        <section className='BootstrapComponents'>
          <h3>Bootstrap Components</h3>
          <Button variant='success' > Button </Button>
        </section> */}
        
      </div>
    </ThemeContext.Provider>
  );
}

