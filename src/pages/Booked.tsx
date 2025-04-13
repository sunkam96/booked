import '../App.css'
import CommonHeader from '../common/CommonHeader';
import {DEFAULT_TESTING_PROVIDER} from '../data'
import {useParams} from "react-router";

function Booked(props: any){
  const {providerId} = useParams()
  const providerName = providerId? providerId : DEFAULT_TESTING_PROVIDER

    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader showBack={true} backLink={"/confirm/"+providerName} headerText={providerName}/>
          <BookedLabel bookingData={props.bookingData} setBookingData={props.setBookingData}/>
        </div>
      </div>
    )
}

function BookedLabel(props: any){
  return (
      <div className="label">
          <p>Your appointment for {props.bookingData.serviceItem.service} is booked!</p>
      </div>
  )
}

export default Booked