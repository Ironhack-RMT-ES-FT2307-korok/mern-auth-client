import { createContext, useState } from "react";
import service from "../services/service.config";

const AuthContext = createContext()

function AuthWrapper(props) {

  // ...
  const [ isUserActive, setIsUserActive ] = useState(false)
  const [ activeUserId, setActiveUserId ] = useState(null)

  const verifyToken = async () => {

    try {
      
      const response = await service.get("/auth/verify")
      console.log(response)

      setIsUserActive(true)
      setActiveUserId(response.data._id)

    } catch (error) {
      console.log(error)
      setIsUserActive(false)
      setActiveUserId(null)
    }

  }

  const passedContext = {
    verifyToken
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  )

}

export {
  AuthContext,
  AuthWrapper
}