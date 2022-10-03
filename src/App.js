import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/signUp">Signup</Link>
     <Routes>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='signUp' element={<SignUp></SignUp>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
