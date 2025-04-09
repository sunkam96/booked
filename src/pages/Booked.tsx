import '../App.css'
import { CommonHeaderProps } from '../common/CommonHeaderProps';
import CommonHeader from '../common/CommonHeader';

const headerProps: CommonHeaderProps = {
    backLink: "/confirm",
    headerText: "2Chainz"
}

function Booked(){
    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader {...headerProps}/>
          <BookedLabel/>
        </div>
      </div>

    )
}

function BookedLabel(){
  return (
      <div className="label">
          <p>Your appointment is booked!</p>
      </div>
  )
}

export default Booked