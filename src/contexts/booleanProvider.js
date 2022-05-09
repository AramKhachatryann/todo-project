import {createContext, useContext, useState} from "react"

export const booleanContext = createContext(null)

const BooleanProvider = ({children}) => {
  const [temp, setTemp] = useState(false)

  return (
    <booleanContext.Provider value={{temp, setTemp}}>
      {children}
    </booleanContext.Provider>
  )
}

export const useBooleanContext = () => useContext(booleanContext)

export default BooleanProvider
