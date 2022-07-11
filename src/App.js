
import './App.scss';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';
import Search from './components/Search';




function App() {
  return (
    <div className="wrapper clear">
      <Overlay/>  
      <Header/>
      <div className='content p-40'>
        <h1>games</h1>
          <Search/>
          
          </div>
           

          <div className='d-flex justify-between m-40'>
         
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
          </div>
  );
}

export default App;
