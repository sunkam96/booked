import './App.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link } from "react-router";
import { CommonHeaderProps } from './CommonHeaderProps';

function CommonHeader(props: CommonHeaderProps){
    return (
        <div className="header-container">
            <BackButton {...props}/>
            <CommonLogo/>
            <CommonHeaderText {...props}/>
        </div>
    )
}

function BackButton(props: CommonHeaderProps){
    return (
        <div className="back-button">
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