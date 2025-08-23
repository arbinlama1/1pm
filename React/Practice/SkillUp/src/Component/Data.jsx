import React from 'react'

function Data( {people}) {
  return (
    <>
      {
        people.map((item) =>(
            <div key={item.id}>
                <h1>{item.name}</h1>
                <h2>{item.address}</h2>
                <h3>{item.college}</h3>
            </div>
        ))
      }
    </>
  )
}

export default Data
