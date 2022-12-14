import React from 'react'
import '../Assets/homePage.css'
import {Link} from 'react-router-dom'

function OwnItemBlock({item, searchStartDate, searchEndDate}) {

  return (
    <>
    <Link to ={`/kit/browse/${item.id}`} className='blockLink' state={{item: item, searchEndDate:searchEndDate, searchStartDate:searchStartDate}}>
      <div className='itemBlock'>
        <h3 className='blockHeader'>{item.brand}</h3>
        <h3 className='blockHeader'>{item.name}</h3>
        <p className='blockText'></p>
      </div>
    </Link>
    </>
  )
}

export default OwnItemBlock