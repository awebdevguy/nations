/*jshint esversion: 8 */

import { useContext, useEffect } from 'react'
import { CountryContext } from './components/CountryContext'
// import axios from 'axios'
import Header from './components/Header'
import ImagesContainer from './components/ImagesContainer'
import Footer from './components/Footer'

function App() {
  
  const country = useContext(CountryContext);
  const proxyURL = "https://quicors.herokuapp.com/";
  const countriesURL = "https://restcountries.com/v2/all?fields=name,nativeName,flag,population,region,capital,subregion,topLevelDomain,currencies,languages,borders";
  
  // const countriesURL = "https://restcountries.com/v2/all";
  const URL = proxyURL + countriesURL;
  const footerText = `Copyright \u00A9 2021 LCQ`


  /** Axios API Request. */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios(URL);
  //       country.setData(result.data);              /** This Data stays original. */ 
  //       country.setSelectedRegion(result.data);    /** This Data is manipulated for search and selecting regions. */ 
  //     } catch (e) {
  //       console.log(e);
  //     }  
  //   };
  //   fetchData();
  // }, []);


  /** Fetch API Request. */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        /** Remove any accents/diacretics from country names so it can be sorted correctly. */
        data.forEach (item => {
          item.name = item.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return data;
        });

        /** Sort by country name. */
        sortNames(data);

        country.setData(data);                /** This Data stays original. */ 
        country.setSelectedRegion(data);      /** This Data is manipulated for search and selecting regions. */ 
      } 
      catch (e) {
        console.log(e);
      }  
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

/** Select Regions. */
  const regions = ['All Regions', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar'];

  return (
    <div className="container">
      <Header regions={regions} />
      <ImagesContainer classname='images-container' />
      <Footer classname='footer' text={footerText} />
    </div>
  );
}

export default App;

/** Sort names. */
function sortNames (items) {

  items.sort(function(a, b) {
    var nameA = a.name.toLowerCase();   /** Ignore upper and lowercase. */ 
    var nameB = b.name.toLowerCase();   /** Ignore upper and lowercase. */
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;   /** Names must be equal. */
  });
}