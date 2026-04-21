import './App.css'
import { Orders } from './components/orders'
import Header from './components/header'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Admin from './pages/adminPanel'


function App() {

  return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/'></Route>
            <Route path='/admin-panel' element={<Admin />}></Route>
        </Routes>
        </BrowserRouter>
  )
}

export default App
