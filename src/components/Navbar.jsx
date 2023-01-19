import React from 'react'

const Navbar = (props) => {
  return (
    <div className='font-lylas text-white bg-amber-400 w-full h-24 flex justify-between shadow-sm shadow-amber-800'>
        <h1 className='float-left text-3xl my-auto ml-44'>Lost in Translation</h1>
        {props.user && 
            <div className='my-auto mr-44 flex h-18'>
                <div className='flex bg-amber-500 rounded-2xl h-10 my-auto'>
                    <span className='ml-6 mr-12 my-auto'>{props.user}</span>
                </div>
            </div>
        }
    </div>
  )
}

export default Navbar