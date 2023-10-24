import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Greeting from './Components/Greeting/Greeting'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Dashboard from './pages/Dashboard'
import AddTrip from './pages/AddTrip'
import AllTrips from './pages/AllTrips'
import AddExpense from './pages/AddExpense'
import AllExpenses from './pages/AllExpenses'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import './style.css'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <Greeting />
          <Routes>
            <Route path='/' element={ <Dashboard /> } />
            <Route path='/trips/add' element={ <AddTrip /> } />
            <Route path='/trips' element={ <AllTrips /> } />
            <Route path='/expenses/add' element={ <AddExpense /> } />
            <Route path='/expenses' element={ <AllExpenses /> } />
            <Route path='/reports' element={ <Reports /> } />
            <Route path='/settings' element={ <Settings /> } />
          </Routes>
          <NavigationBar />
        </div>
      </BrowserRouter>
    </>
  )
}