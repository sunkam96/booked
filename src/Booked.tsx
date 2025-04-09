import './App.css'
import { CommonHeaderProps } from './CommonHeaderProps';
import CommonHeader from './CommonHeader';

const headerProps: CommonHeaderProps = {
    backLink: "/confirm",
    headerText: "2Chainz"
}

function Booked(){
    return (
      <div className="page-container">
        <CommonHeader {...headerProps}/>
        <BookedLabel/>
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