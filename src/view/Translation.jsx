import React, { useContext, useState } from 'react'
import TranslationList from '../components/Translation/TranslationList';
import { UserContext } from '../UserContext';

const TranslationPage = () => {
  const { user, setUser } = useContext(UserContext);
  const regex = new RegExp(/[A-Za-z]/);
  const [input, setInput] = useState("");
  const [signs, setSigns] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(Array.from(input).indexOf(" ") !== -1) return setSigns(input.split(" "));
    setSigns([input]);

    //TODO: Hookup TranslationHandler

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} className="m-10 border w-44"/>
        <input type="submit" />
      </form>
      {signs[0] && <TranslationList signs={signs} />}
    </div>
  )
}

export default TranslationPage