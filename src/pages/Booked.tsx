import '../App.css'
import {CommonHeader, CommonLabel} from '../common/Common';
import Views from '../common/util'

function Booked(props: any){
    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader bookingData={props.bookingData} view={Views.BOOKED}/>
          <CommonLabel label={"Your appointment for "+props.bookingData.serviceItem.service+" is booked!"} />
        </div>
      </div>
    )
}

export default Booked