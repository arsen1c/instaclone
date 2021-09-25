import React from 'react'

const NotFollowed = () => {
  return(
    <div className="text-center w-28 cursor-pointer bg-blue-500 text-white text-sm rounded shadow p-1">
      follow
    </div>
  )
}

const Followed = () => {
  return(
    <div className="text-center w-28 cursor-pointer bg-white text-gray-700 text-sm rounded shadow p-1">
      following
    </div>
  )
}

export default function Follow({ followed }) {
  return (
    <div>
      { followed ? (<Followed />)  : (<NotFollowed />) }
    </div>
  )
}