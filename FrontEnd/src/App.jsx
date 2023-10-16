import Greeting from './Components/Greeting/Greeting'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import './style.css'

export default function App() {

  return (
    <>
      <div className="main-container">
        <Greeting />
        <NavigationBar />
      </div>
    </>
  )
}