import React from 'react';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setCategoryId } from '../redux/slices/filterSlice';
import Card from '../components/card/Card';
import Categories from '../components/Categories';
import GameSkeleton from '../components/card/GameSkeleton';
import Pagination from '../components/pagination';
import axios from 'axios';
import Slider from '../components/Slider';


function Home() {
const categoryId = useSelector( state => state.filter.categoryId);
const dispatch = useDispatch();

  const {searchValue} = React.useContext(SearchContext);
  const [games, setGames] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
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
  axios.get(`https://62cecd57826a88972d035cfa.mockapi.io/games?page=${currentPage}&limit=4&${
    categoryId > 0 ? `category=${categoryId}` : '' }`)
  .then((res) => {
    setGames(res.data);
    setIsLoading(false);
  });
}, [categoryId, currentPage]  
  );


  return (
    <div className='content'>
      <Slider/>
        <div className='__title'>
            <h1>ИГРЫ</h1>
        </div>
      
      <Categories value={categoryId} onClickCategory={(id)=>dispatch(setCategoryId(id))}/>
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