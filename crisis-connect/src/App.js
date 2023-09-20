import Home from './components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
       <Home/>
   
   <Routes>
     <Route path='/' element={<Home/>}/>
   </Routes>
    </div>
  );
}

export default App;
