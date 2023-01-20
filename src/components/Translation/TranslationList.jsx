import React from 'react'
const uuid = require('uuid');

const TranslationList = (props) => {
    const getSignPath = char => `assets/signs/${char}.png`;

  return (
    <div className="flex flex-wrap">
        {props.signs.map(word =>
        {if(props.signs.indexOf(word) === 0) {
            return <div className="flex" key={uuid.v4()}>
                {Array.from(word).map(char => 
                <img src={getSignPath(char)} className="h-24" key={uuid.v4()}/>
                )}
        </div>}

        return <div className="flex ml-20">
            {Array.from(word).map(char => 
            <img src={getSignPath(char)} className="h-24" key={uuid.v4()}/>
            )}
        </div>
        }
        )}
    </div>
  )
}

export default TranslationList