import React from 'react'
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  };
  const navigateToCampaigns = () => {
    navigate('/Campaigns')
  };
  const navigateToCharacters = () => {
    navigate('/Characters')
  };


  return (
    <nav className='navbar'>
      <ul>
        <li><h1>Email Trace</h1></li>
        <li><button onClick={navigateToHome}>Home</button></li>
        <li><button onClick={navigateToCampaigns}>Campaigns</button></li>
        <li><button onClick={navigateToCharacters}>Characters</button></li>
      </ul>
    </nav>
  )
}
export default NavBar;