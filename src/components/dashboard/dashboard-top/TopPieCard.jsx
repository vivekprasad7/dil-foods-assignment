import React from 'react'

const TopPieCard = ({colors, percentFillValue, cardInfo}) => {

    const { title, value, cards} = cardInfo
    
  return (
    <div className=''>
        <div>
            <h5>{title}</h5>
            <div>{value}</div>
            <p>{text}</p>
        </div>

        
           
        
    </div>
  )
}

export default TopPieCard