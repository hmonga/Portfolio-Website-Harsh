import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Portfolio from './Portfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App

