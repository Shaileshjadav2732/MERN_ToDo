import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Header from './components/Header.jsx';
import Profile from './pages/Profile.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import { Toaster } from 'react-hot-toast';
function App() {
  

  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/profile" element={<Profile/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/register" element={<Register/>} ></Route>
     
    </Routes>
    <Toaster/>
  </Router>
    
  
}

export default App
