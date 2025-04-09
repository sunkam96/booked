import '../App.css'
import {Link } from "react-router"
import { CommonButtonProps } from './CommonButtonProps';

function CommonButton(props: CommonButtonProps){
    return(
      <div className="check-availability-button-container">
        <Link to={props.link}>
            <button className="check-availability-button">{props.buttonText}</button>
        </Link>
      </div>
    )
  }

  export default CommonButton;