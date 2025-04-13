import '../App.css'
import {CommonHeader, CommonLabel} from '../common/Common';
import {DEFAULT_TESTING_PROVIDER} from '../data'
import {useParams} from "react-router";

function Booked(props: any){
  const {providerId} = useParams()
  const providerName = providerId? providerId : DEFAULT_TESTING_PROVIDER

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