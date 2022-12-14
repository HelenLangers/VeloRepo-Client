import React, {useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import ImageSlider from '../Components/ImageSlider/ImageSlider';
import '../Components/ImageSlider/slider.css'
import { ReactUTCDatepicker } from "react-utc-datepicker";
import Spinner from '../Components/Spinner';


function OneItemPage({userData, setUserData}) {
  
  const navigate = useNavigate();
  const location = useLocation()
  const {item} = location.state;
  const {searchStartDate} = location.state;
  const {searchEndDate} = location.state;
  const { id } = useParams()
  // const [searchStartDate, setSearchStartDate] = useState('')
  // const [searchEndDate, setSearchEndDate] = useState('')

  // const [selectedStartDate, setSelectedStartDate] = useState(searchStartDate)
  // const [selectedEndDate, setSelectedEndDate] = useState(selectedEndDate)

  const SliderData = [
    {
      image: 'https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw3498dd9d/images/hi-res/85245_LCUB.jpg?sw=1914&sh=1914&sfrm=png&q=95&bgcolor=f5f5f5'
    },
    {
      image: 'https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw49a83c36/images/hi-res/85245_LCUB_MZ2.jpg?sw=1736&sh=1736&sfrm=png&q=95&bgcolor=f5f5f5'
    },
    {
      image: 'https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwb99b9863/images/hi-res/85245_LCUB_MZ1.jpg?sw=1736&sh=1736&sfrm=png&q=95&bgcolor=f5f5f5'
    }
  ]

  const onSubmit = async(e) => {

    const dataToSubmit = {
      startDate : searchStartDate,
      endDate : searchEndDate,
      fireBaseId : userData.fireBaseId,
      itemId : parseInt(id)
    }


    const requestOptions = {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit)
    }

    const response = await fetch("http://localhost:8080/bookings", requestOptions);

    if(response.ok) {
      const responseJson = await response.json()
      const copyOfUserData = {...userData}
      copyOfUserData.borrowedItems.push(responseJson)
      console.log(copyOfUserData)
      await setUserData(copyOfUserData) 
      navigate("/kit")
    }
  }


  return (
    <>
      <div className='mainContainerNoHeader'>
        <h1>The {item.brand} {item.name}</h1>
          <div className='imageCarousel'>
            <ImageSlider SliderData={SliderData}/>
          </div>
          <div className='twoColumns'>
        <div className='itemDescription'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget faucibus arcu. Vivamus volutpat vitae augue ut euismod. Nulla arcu neque, maximus eget nulla non, auctor gravida velit. Nunc at molestie massa. Sed a bibendum ex. Fusce suscipit ex nec metus varius, non rhoncus purus ullamcorper. Ut tempus velit consectetur arcu mattis dictum. Sed sed ullamcorper ligula. Aliquam eget ultrices tortor. Integer eleifend sagittis ligula. Aenean convallis quis tellus ut consequat. Proin erat ligula, pharetra at odio ut, pretium fermentum purus. Suspendisse potenti. </p>
        </div>

        <div className='rightColumn'>
      <h3>Book this item</h3>
      {/* <ReactUTCDatepicker format="YYYY-MM-DDT00:00:00.000+00:00" selected={searchStartDate} onChange={(date) => setSearchStartDate(date)} />
      <ReactUTCDatepicker format="YYYY-MM-DDT00:00:00.000+00:00" selected={searchEndDate} onChange={(date) => setSearchEndDate(date)} /> */}
      

      <button type="submit" className="submitButton" onClick={onSubmit}>
                Book Item
              </button>
      </div> 
        </div>


      </div>
    </>
  )
}

export default OneItemPage