import React from 'react'
import { useContext } from 'react'
import Navbar from "../components/Navbar"
import LoginInput from '../components/Start/LoginInput'
import { UserContext } from '../UserContext'

const StartPage = () => {
    const {user, setUser} = useContext(UserContext);
  return (
    <>
        <Navbar />
        <LoginInput />
        {/* {user !== "" && <div>
            {user.username}
        </div>} */}
    </>
  )
}

export default StartPage