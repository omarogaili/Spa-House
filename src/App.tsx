import './App.css'
import { Orders } from './components/orders'
import Header from './components/header'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Admin from './pages/adminPanel'
import LoginForm from './components/inlogning'


function App() {

  return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element= {<LoginForm/>}></Route>
            <Route path='/admin-panel' element={<Admin />}></Route>
            < Route path='/orders' element={<Orders/> }/>
        </Routes>
        </BrowserRouter>
  )
}

export default App
