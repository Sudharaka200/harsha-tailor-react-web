import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/home/'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
