import Home from './components/HomePage';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import UserInfo from './components/Userinfo';
import IcanHelp from './components/IcanHelp';
import IneedHelp from "./pages/IneedHelp";
import UserInfoForm from "./pages/UserInfoForm";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <userInfo/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/userInfo' element={<UserInfo/>}/>
                <Route path='/ineedhelp' element={<IneedHelp/>}/>
                <Route path='/icanhelp' element={<IcanHelp/>}/>
                <Route path="/userinforeg" element={<UserInfoForm/>}/>
            </Routes>
        </div>
    );
}

export default App;
