import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { profile } from "./profileHandler"
import { loginHandler } from '../Login/loginHandler';
import { UserContext } from '../../UserContext';
import ProfileHistory from "./ProfileHistory"

// Renders the profile view
const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Fetches user data if user is still in session storage, but not in state.
  useEffect(() => {
    if(!user.translations) {
      if(!sessionStorage.getItem("username")) return navigate("/");
      
      loginHandler.fetchUser(sessionStorage.getItem("username"))
      .then(res => {
        setUser(res);
        sessionStorage.setItem("username", res.username);
      });
    }
  }, [user.translations, navigate, setUser])

  // Clears translations and updates user with new user object.
  const handleClearTranslations = () => {
    profile.clearTranslations(user.id).then(res => setUser(res));
  }

  // Clears user data in state and session. 
  const handleLogout = () => {
    sessionStorage.clear("username");
    setUser(null);
    navigate("/")
  }

  return (
    <div>
      {user.translations && <ProfileHistory translations={user.translations} />}
      <button onClick={() => handleClearTranslations()}>Clear Translations</button>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  )
}

export default Profile