import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import ButterAndBeyond from './pages/ButterAndBeyond'
import UrbanKart from './pages/UrbanKart'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/butterandbeyond" element={<ButterAndBeyond />} />
        <Route path="/work/urbankart" element={<UrbanKart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
