import React from 'react'

function Skeleton({item}) {
  return[...Array(item).keys()].map((keys)=>{

    return (
        <div className='animate-pulse' key={keys}>
          <div className="bg-gray-300 rounded-lg h-72"></div>
        </div>
    )
  })
}

export default Skeleton