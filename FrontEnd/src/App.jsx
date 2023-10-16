import { NavigationBar } from './Components/NavigationBar/NavigationBar'
import { NavItem } from './Components/NavigationBar/NavItem'
import { ReactComponent as HomeIcon } from './Icons/Home.svg'
import { ReactComponent as TripsIcon } from './Icons/Trips.svg'
import { ReactComponent as AddIcon } from './Icons/Add.svg'
import { ReactComponent as ReportsIcon } from './Icons/Reports.svg'
import { ReactComponent as ExpensesIcon } from './Icons/Expenses.svg'
import './style.css'


function App() {

  return (
    <>
      <div className="main-container">
        <NavigationBar>
          <NavItem icon={<HomeIcon />} />
          <NavItem icon={<TripsIcon />} />
          <NavItem icon={<AddIcon />} />
          <NavItem icon={<ReportsIcon />} />
          <NavItem icon={<ExpensesIcon />} />
        </NavigationBar>
      </div>
    </>
  )
}

export default App
