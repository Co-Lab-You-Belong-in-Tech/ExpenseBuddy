import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Dashboard from './pages/Dashboard'
import AddTrip from './pages/AddTrip'
import AllTrips from './pages/AllTrips'
import AddExpense from './pages/AddExpense'
import AllExpenses from './pages/AllExpenses'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import AddOdom from "./pages/AddOdom"
import ComingSoon from "./pages/ComingSoon"
import TripSuccess from "./pages/TripSuccess"
import './style.css'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <Routes>
            <Route path='/' element={ <Dashboard /> } />
            <Route path='/trips/add' element={ <AddTrip /> } />
            <Route path='/trips/odom' element={ <AddOdom /> } />
            <Route path='/trips' element={ <AllTrips /> } />
            <Route path='/expenses/add' element={ <AddExpense /> } />
            <Route path='/expenses' element={ <AllExpenses /> } />
            <Route path='/reports' element={ <Reports /> } />
            <Route path='/settings' element={ <Settings /> } />
            <Route path='/comingsoon' element={ <ComingSoon /> } />
            <Route path='/success' element={ <TripSuccess /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
            
          </Routes>
          <NavigationBar />
        </div>
      </BrowserRouter>
    </>
  )
}