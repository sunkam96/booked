import './Common.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link } from "react-router";
import Views from '../common/util'

function CommonHeader(props: any){
    console.log("CommonHeader props: ", props);
    const showBack = props.view !== Views.SERVICES;
    const providerName = props.bookingData?.provider?.name ?? '';
    const logoUrl = props.bookingData.provider?.logoUrl ?? '';
    var backLink = `/${providerName}`;
    switch(props.view){
        case Views.SERVICES:
            backLink = "/";
            break;
        case Views.AVAILABILITY:
            backLink = `/${providerName}/services`;
            break;
        case Views.CONFIRM:
            backLink = `/${providerName}/availability`;
            break;
        case Views.BOOKED:
            backLink = `/${providerName}/confirm`;
            break;
        default:
            backLink = `/${providerName}`;
            break;
    }

    return (
        <div className="header-container">
            <div className="header-left">
                <BackButton showBack={showBack} backLink={backLink}/>
            </div>
            <div className="header-right">
                <CommonLogo logoUrl={logoUrl}/>
                <CommonHeaderText headerText={providerName} />
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