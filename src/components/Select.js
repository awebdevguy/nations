
const Select = ({ action, classname, regions, name }) => {

/** Put the regions in an object array. */
/** Default is All Regions. */
  const options = regions.map((region, index) => {
    
    return index !== 0 ? (<option key={index} value={region}>{region}</option>)
     : (<option  key={index} defaultValue={region}>{region}</option>)
  });

  /** onChange is used to call function selecting region. */
  return (
    <div className='select-container head-obj'>
      <select onChange={action} className={classname} name={name} id="">{options}</select>
    </div>
  )
}

export default Select
