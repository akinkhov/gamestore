
import './App.scss';

import Header from './components/Header';
import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';






export const SearchContext = React.createContext();




function App() { 

  const[searchValue, setSearchValue] = React.useState('');
  
  return (
    <div className="wrapper clear">
            
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
       
      
      <Header />
        
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue}/>} />
          <Route path='/gamestore' element={<Home searchValue={searchValue}/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='*' element={<NotFound/>} />
           

        </Routes>
        
  </SearchContext.Provider>
          </div>
  );
}

export default App;
