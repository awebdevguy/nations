import CountryCard from './CountryCard'
import { useContext } from 'react'
import { CountryContext } from './CountryContext'

const ImagesContainer = ({ classname }) => {

  const country = useContext(CountryContext);
  const data = country.selectedRegion;

  return (
    <div className={classname}>
      {
        data.map((nation, index) => {
          return <CountryCard classname={'country-card'} nation={nation} key={index} />
        })
      }
    </div>
  );
}

export default ImagesContainer
