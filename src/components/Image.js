
const Image = ({ classname, source }) => {
  return (
    <a href={source} target='_blank' rel='noreferrer'>
      <img className={classname} src={source} alt='flag'/>
    </a>
  )
}

export default Image
