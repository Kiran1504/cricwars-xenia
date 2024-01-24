import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import TeamInfo from './pages/TeamInfo'
import AdminPanel from './pages/AdminPanel'

function App() {

  return (
    <>
      <div><Navbar /></div>
      <Routes>
        <Route path="/" Component={TeamInfo} />
        <Route path='/user/admin' Component={AdminPanel} />
      </Routes>
    </>
  )
}

export default App
