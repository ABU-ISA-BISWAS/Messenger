import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './Style.scss';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          
        </Route>
        
      </Routes>
     
    </BrowserRouter>
    
  );
}

export default App;
