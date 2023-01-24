import React from 'react'
const uuid = require('uuid');

// Displays the user's translation history.
const ProfileHistory = (props) => {
  return (
    <div>
        {props.translations.map(translation => <p key={uuid.v4()}>{translation}</p>)}
    </div>
  )
}

export default ProfileHistory