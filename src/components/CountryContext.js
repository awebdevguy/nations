import React, { createContext, useState } from 'react'

export const CountryContext = createContext();

export const CountryProvider = ({children}) => {

    const [ name, setName ] = useState();
    const [ population, setPopulation ] = useState();
    const [ region, setRegion ] = useState();
    const [ capital, setCapital ] = useState();
    const [ nativeName, setNativeName ] = useState();
    const [ subRegion, setSubRegion ] = useState();
    const [ domain, setDomain ] = useState();
    const [ currencies, setCurrencies ] = useState([]);
    const [ languages, setLanguages ] = useState([]);
    const [ borders, setBorders ] = useState([]);
    const [ data, setData ] = useState([]);
    const [ selectedRegion, setSelectedRegion ] = useState([]);

  return (

    <CountryContext.Provider
      value={{
        name,
        population,
        region,
        capital,
        nativeName,
        subRegion,
        domain,
        currencies,
        languages,
        borders,
        data,
        selectedRegion,
        setName,
        setPopulation,
        setRegion,
        setCapital,
        setNativeName,
        setSubRegion,
        setDomain,
        setCurrencies,
        setLanguages,
        setBorders,
        setData,
        setSelectedRegion
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}

export default CountryContext
