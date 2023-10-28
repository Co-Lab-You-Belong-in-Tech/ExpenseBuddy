import { useState, createContext } from "react"

export const ExpenseBuddyContext = createContext({})

export default function ExpenseBuddyProvider({ children }) {
    const [ user, setUser ] = useState({ token: '', first_name: '', last_name: '', loggedIn: false })
    return <ExpenseBuddyContext.Provider value={{ user, setUser }}>{ children }</ExpenseBuddyContext.Provider>
}