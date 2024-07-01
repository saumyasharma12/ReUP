import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Mininav from './Components/Mininav/Mininav';
import Banner from './Components/Banner/Banner';
import Grid from './Components/Grid/Grid';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>   
      <Mininav/>
      <Banner/>
      <Grid/>
      <Footer/>
    </div>
  )
}

export default App