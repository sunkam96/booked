import '../App.css'
import {CommonHeader, CommonLabel} from '../common/Common';

function Booked(props: any){
    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader showBack={true} backLink={"/"+props.bookingData.provider.name + "/confirm"} headerText={props.bookingData.provider.name}/>
          <CommonLabel label={"Your appointment for "+props.bookingData.serviceItem.service+" is booked!"} />
        </div>
      </div>
    )
}

export default Booked