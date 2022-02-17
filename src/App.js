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
    <div className="App">
      <button onClick={()=> changeLanguage('ka')} >ქართული</button>
      <button onClick={()=> changeLanguage('en')}>English</button>
      <br/>
      <button onClick={changeLanguageBetween}>Change Language</button>
      <div className='testBackground'>
        <h1> {t('Welcome to React')} </h1>
      </div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/:productId" element={<Product />} />
      </Routes>

      
    </div>
  );
}

