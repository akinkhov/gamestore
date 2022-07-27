import React from 'react';
import { SearchContext } from '../App';

import Card from '../components/Card';
import Categories from '../components/Categories';
import GameSkeleton from '../components/GameSkeleton';
import Pagination from '../components/pagination';


function Home() {
  const {searchValue} = React.useContext(SearchContext);
  const [games, setGames] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  const gameItems = games.filter(obj =>{
    if (obj.title.toLowerCase().includes(searchValue)){
      return true;
    }
    return false;

  }).map((obj) => <Card key = {obj.id} {...obj}/>);
  const skeletons = [...new Array(4)].map((_, index) => <GameSkeleton key={index}/>)
  
React.useEffect(() => {
  setIsLoading (true);
  fetch(`https://62cecd57826a88972d035cfa.mockapi.io/games?page=${currentPage}&limit=4&${
    categoryId > 0 ? `category=${categoryId}` : '' }`)
  .then((res) => {
    return res.json();
  })
  .then ((arr) => {
    setGames(arr);
    setIsLoading(false);
  });
}, [categoryId, currentPage]  
  );
  return (
    <div className='content'>
        <div className='__title'>
            <h1>games</h1>
        </div>
      
      <Categories value={categoryId} onClickCategory={(i)=>setCategoryId(i)}/>
      <div className='content__items '>

        {
            isLoading 
            ? skeletons 
            : gameItems 
        }</div>
      <Pagination onChangePage= {(number)=> setCurrentPage(number)}/>
      
      </div>
  )
}

export default Home;