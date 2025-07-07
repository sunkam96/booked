import '../App.css'
import {CommonHeader, CommonLabel} from '../common/Common';

function Booked(props: any){
  console.log('Booked props', props)
    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader showBack={true} backLink={"/confirm/"+props.bookingData.provider.id} headerText={props.bookingData.provider.name}/>
          <CommonLabel label={"Your appointment for "+props.bookingData.serviceItem.service+" is booked!"} />
        </div>
      </div>
    )
}

export default Booked