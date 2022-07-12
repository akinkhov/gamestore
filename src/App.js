
import './App.scss';
import Card from './components/Card';
import Categories from './components/Categories';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Search from './components/Search';
import games from './assets/games.json';




function App() {
  return (
    <div className="wrapper clear">
      <Overlay/>  
      <Header/>
      <div className='content p-40'>
        <h1>games</h1>
          <Search/>
          </div>
          <Categories/>

          <div className='d-flex justify-between m-40'>

            {
                  games.map((obj) => (
                  <Card key={obj.id} {...obj}/> ) )
            }
          
          </div>
          </div>
  );
}

export default App;
