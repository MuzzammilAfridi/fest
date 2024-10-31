import React from 'react'
import Card from './Card'

const Event = ({enents}) => {
  return (
    <div>
        {enents.map((e)=>(
            console.log(e.name)
            
        ))}

        <Card enents={enents}/>
      
    </div>
  )
}

export default Event
