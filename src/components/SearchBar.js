import { useContext } from 'react'
import { CountryContext } from './CountryContext'
import { FaSearch } from 'react-icons/fa'
import Input from './Input'
import Select from './Select';

const SearchBar = ({ regions }) => {

  const country = useContext(CountryContext);

  /** Handles Country search and Region selection. */
  function handleSearch(e) {
    try {
      e.preventDefault();
      
      if (e.target.tagName === 'FORM') {
        const searchID = e.target[1].value.toLowerCase();   /** search-input */
        scrollToCard(searchID);
      } 
      else if (e.target.tagName === 'SELECT') {
        const dat = country.data;                     /** Copy of original data. */
        const selectedID = e.target.value;            /** select-region */
        
        if (selectedID === 'All Regions') {
            country.setSelectedRegion(country.data);  /** All Regions, use full data. */
        } 
        else {
          const data = dat.filter(item => {           /** Reduce data to selected region. */
            return item.region === selectedID;
          });

          country.setSelectedRegion(data)             /** Use regionalized data. */
        }
        scrollToTop();                                /** Go to top of page on region selection. */                        
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
      <form className='search-form' onSubmit={handleSearch} action=''>
        <div className='search-input-container head-obj'>
          <button type="submit" className="button search-input-btn" href="#"><FaSearch /></button>
          <Input id='search-input' classname='search-input' type='text' placeholder='Search...' />
        </div>
        <Select action={e => handleSearch(e)} classname='search-region' regions={regions} name='option'/>
      </form>
  )
}

export default SearchBar

/** Scroll to the card where parameter is part of class name. */ 
/** Included class names are capital and country name. */
function scrollToCard (string) {
  let card = document.getElementById(string);   /** Exact ID. */
  card ? card.scrollIntoView(true) : card = document.querySelector(`[class*=${string}]`); card.scrollIntoView(true);    /** false: to bottom of screen, true: to top. */ 
  window.scrollBy(0, -104);     /** Scrolls back down to bottom of Header. */
}

/** Scroll to top of page. */
function scrollToTop () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
