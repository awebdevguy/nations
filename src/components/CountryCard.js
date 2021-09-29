import Image from './Image'
import InfoSection from './InfoSection'

const CountryCard = ({ classname, nation, index }) => {

  // const capital = nation.capital.toLowerCase();
  // const name = nation.name.toLowerCase();
  const capital = nation.capital;
  const name = nation.name;

  return (
    // eslint-disable-next-line no-sequences
    <div className={`${classname} ${capital} ${name}`} key={index} id={nation.name.toLowerCase()}>
      <Image classname='small-flag' source={nation.flag} />
      <InfoSection classname={'info-section'} name={nation.name} population={nation.population} region={nation.region} capital={nation.capital} />
    </div>
  )
}

export default CountryCard