import '../App.css'
import {CommonHeader, CommonLabel} from '../common/Common';

function Booked(props: any){
    const providerName = props.bookingData.provider.name

    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader showBack={true} backLink={"/confirm/"+providerName} headerText={providerName}/>
          <CommonLabel label={"Your appointment for "+props.bookingData.serviceItem.service+" is booked!"} />
        </div>
      </div>
    )
}

export default Booked