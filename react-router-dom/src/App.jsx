import About from './pages/About'
import {Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
      
    </div>
  )
}

export default App