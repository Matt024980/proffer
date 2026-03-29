import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Navbar from './components/NavBar/navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About page_name='About'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
