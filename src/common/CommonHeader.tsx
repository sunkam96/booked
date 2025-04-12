import '../App.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link } from "react-router";
import { CommonHeaderProps } from '../model';

function CommonHeader(props: CommonHeaderProps){
    return (
        <div className="header-container">
            <div className="header-left">
                <BackButton {...props}/>
            </div>
            <div className="header-right">
                <CommonLogo/>
                <CommonHeaderText {...props}/>
            </div>
        </div>
    )
}

function BackButton(props: CommonHeaderProps){
    return (
        <div className={props.showBack?"back-button": "back-button hide-visibility"}>
            <Link to={props.backLink}>
                <ArrowBackIcon style={{ color: 'black' }}/>
            </Link>
        </div>
    )
}

function CommonLogo(){
    return (
      <div className="logo-container">
      </div>
    )
}

function CommonHeaderText(props: CommonHeaderProps){
    return (
        <div className="header-text">
            <p><b>{props.headerText}</b></p>
        </div>
    )
}



export default CommonHeader