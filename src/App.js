import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './Style.scss';

function App() {
  return (
    <div className="App ">
      <Link to="/login" >login  </Link>
      <Link to="/signUp" >  signUp  </Link>
      <Link to="/home" >  Home</Link>
    <Routes>
<Route path='login' element={<Login></Login>}></Route>
<Route path='signUp' element={<SignUp></SignUp>}></Route>
<Route path='home' element={<Home></Home>}></Route>
    </Routes>
     
    </div>
  );
}

export default App;
