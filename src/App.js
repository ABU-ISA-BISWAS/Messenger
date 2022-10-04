import './App.css';
import './Pages/style.css';
import Login from './Pages/Login';
import { Link, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App ">
      <Link to="/login" >login here</Link>
    <Routes>
<Route path='login' element={<Login></Login>}></Route>
    </Routes>
     
    </div>
  );
}

export default App;
