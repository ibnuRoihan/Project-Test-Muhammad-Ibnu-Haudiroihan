import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Ideas } from './Page/ideas'
import { Work } from './Page/work'
import { About } from './Page/About'
import { Services } from './Page/Services'
import { Careers } from './Page/Careers'
import { Contacts } from './Page/Contacts'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/work' element={<Work/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/ideas' element={<Ideas/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
    </Router>
  )
}

export default App
