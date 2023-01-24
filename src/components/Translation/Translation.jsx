import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { translation } from './translationHandler';
import { loginHandler } from '../Login/loginHandler';
import Navbar from '../Navbar';
import TranslationViewer from './TranslationViewer';

// Renders the translation view.
const Translation = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [signs, setSigns] = useState([]);

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

  // Checks input for errors, posts translations to API. 
  const handleSubmit = (e) => {
    e.preventDefault();

    if(input === "" || /[^a-zA-Z\s]/.test(input)) throw new Error("ERROR: Numbers and special characters aren't allowed.");
    if(Array.from(input).indexOf(" ") !== -1) setSigns(input.split(" "));
    if(Array.from(input).indexOf(" ") === -1) setSigns([input]);

    user.translations.push(input);
    translation.postTranslation(user.translations, user.id);
  }

  return (
    <>
    <Navbar user={user}/>
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} className="m-10 border w-44"/>
        <input type="submit" />
      </form>
      {signs[0] && <TranslationViewer signs={signs} />}
    </div>
    </>
  )
}

export default Translation;