import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import ExpenseBuddyProvider from './Context/ExpenseBuddyProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ExpenseBuddyProvider>
    <App />
  </ExpenseBuddyProvider>,
)
