
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from '../pages/SignUp'
import Login from '../pages/userLogin'
import Navbar from '../components/Navbar';
import {Routes, Route} from 'react-router-dom'


function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      
    </>
  )
}

export default App
