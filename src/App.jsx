import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Give from './components/Give'
import About from './components/About'
import Updates from './components/Updates'
import Events from './components/Events'
import Gallery from './components/Gallery'

function App() {
  return (
    <Router>
      <Box minH="100vh">
        <Navbar />
        <Box as="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/give" element={<Give />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
