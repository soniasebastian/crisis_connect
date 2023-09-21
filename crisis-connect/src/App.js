import Home from './components/HomePage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import UserInfo from './components/Userinfo';
import IcanHelp from './components/IcanHelp'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <userInfo />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userInfo' element={<UserInfo />} />
        <Route path='/icanhelp' element={<IcanHelp />} />
      </Routes>
    </div>
  );
}

export default App;
