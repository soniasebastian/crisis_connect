import Home from './components/HomePage';
import './App.css';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
       <Home/>
   
   <Routes>
     <Route path='/' element={<Home/>}/>
   </Routes>
    </div>
  );
}

export default App;
