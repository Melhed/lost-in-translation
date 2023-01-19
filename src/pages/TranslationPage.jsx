import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

const TranslationPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>{user.username}</div>
  )
}

export default TranslationPage