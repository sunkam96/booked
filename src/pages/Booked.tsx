import '../App.css'
import { CommonHeaderProps } from '../model';
import CommonHeader from '../common/CommonHeader';

const headerProps: CommonHeaderProps = {
    showBack: true,
    backLink: "/confirm",
    headerText: "2Chainz",
}

function Booked(props: any){
    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader {...headerProps}/>
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