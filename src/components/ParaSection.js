// import Paragraph from "./Paragraph"

const ParaSection = ({ quiz, reply }) => {
  return (
    <div className='para-section'>
      <p className='para quiz'>{quiz}</p>
      <p className='para reply'>{reply}</p>
    </div>
  )
}

export default ParaSection
