
import './App.scss';

import Header from './components/Header';
import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import GameCard from './components/gameCard/GameCard';
import Footer from './components/Footer';




export const SearchContext = React.createContext();




function App() { 

  const[searchValue, setSearchValue] = React.useState('');
  
  return (
    <div className="wrapper clear">
            
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
       
      
      <Header />
        
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue}/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path = '/GameCard' element={<GameCard />}></Route>
          <Route path='*' element={<NotFound/>} />
           

        </Routes>
        <Footer/>
  </SearchContext.Provider>
          </div>
  );
}

export default App;
