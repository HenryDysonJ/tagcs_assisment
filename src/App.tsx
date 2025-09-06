import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import ProtectedRoute from './routes/prodectRoute';
import Dashboard from './pages/dashboard/dashboard';
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
    </>
  )
}

export default App
