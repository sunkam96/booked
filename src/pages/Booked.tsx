import '../App.css'
import {CommonHeader, CommonLabel} from '../common/Common';
import {DEFAULT_TESTING_PROVIDER} from '../defaults'

function Booked(props: any){
    const providerName = props.bookingData.provider.name? props.bookingData.provider.name : DEFAULT_TESTING_PROVIDER

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