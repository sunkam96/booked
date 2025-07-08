import '../App.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link } from "react-router";

function CommonHeader(props: any){
    return (
        <div className="header-container">
            <div className="header-left">
                <BackButton {...props}/>
            </div>
            <div className="header-right">
                <CommonLogo {...props}/>
                <CommonHeaderText {...props}/>
            </div>
        </div>
    )
}

function BackButton(props: any){
    return (
        <div className={props.showBack?"back-button": "back-button hide-visibility"}>
            <Link to={props.backLink}>
                <ArrowBackIcon style={{ color: 'black' }}/>
            </Link>
        </div>
    )
}

function CommonLogo(props: any){
    const backgroundLogo = props.logoUrl? `url(${props.logoUrl})` :  `url(${"./assets/blankheroimage.svg"})`
    const styles = {
        background: `${backgroundLogo} no-repeat center center`,
    }
    return (
      <div className="logo-container" style={styles}>
      </div>
    )
}

function CommonHeaderText(props: any){
    return (
        <div className="header-text">
            <p><b>{props.headerText}</b></p>
        </div>
    )
}

function CommonLabel(props: any){
    return (
        <div className="label">
            {props.label}
        </div>
    )
}

export {CommonHeader, CommonLabel}