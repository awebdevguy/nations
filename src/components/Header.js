import { FaRegMoon } from 'react-icons/fa'
import SearchBar from './SearchBar'
// FaMoon
//  FaRegMoon
// IoMoonOutline

const Header = ({ regions }) => (
  <div className='title-bar'>
    <p className='title'>Nations Of The World</p>
    <SearchBar regions={regions} />
    <button onClick={toggleDarkMode} className="button dark-mode-btn head-obj" href="#"><FaRegMoon />   Dark</button>
  </div>
)

export default Header

function toggleDarkMode () {
  const element = document.body;
  element.classList.toggle('dark-mode');
}