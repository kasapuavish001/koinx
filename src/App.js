import React from 'react';
import Allcoins from './component/AllCoins/Allcoins';
import Banner from './component/Banner/Banner';
import NavBar from './component/Navbar/NavBar';


const App = () => {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Allcoins/>
    </>
  );
};

export default App;