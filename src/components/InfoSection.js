import ParaSection from './ParaSection'

const InfoSection = (props) => {
  return (
    <div className={props.classname}>
      <h3 className={'info-header'}>{props.name}</h3>
      <ParaSection quiz='Population: ' reply={props.population.toLocaleString()} />
      <ParaSection quiz='Region: ' reply={props.region} />
      <ParaSection quiz='Capital: ' reply={props.capital} />
    </div>
  )
}

export default InfoSection
