import '../App.css'
import {Link } from "react-router"
import { CommonButtonProps } from '../model';

function CommonButton(props: CommonButtonProps){
    if(props.onClick){
        return(
            <div className="common-button-container">
              <Link to={props.link}>
                  <button className="common-button" onClick={props.onClick}>{props.buttonText}</button>
              </Link>
            </div>
          )
    }
    else {
        return(
            <div className="common-button-container">
              <Link to={props.link}>
                  <button className="common-button">{props.buttonText}</button>
              </Link>
            </div>
          )
    }
    
}

  export default CommonButton;