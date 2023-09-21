
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import UserInfo from './components/Userinfo';
import IcanHelp from './components/IcanHelp'
import Landing from './pages/Landing';


function App() {
  return (
    <div className="App">
      <Header />

      {/* <UserInfo /> */}

      <Routes>
        
        <Route path='/userInfo' element={<UserInfo />} />
        <Route path='/icanhelp' element={<IcanHelp />} />
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
