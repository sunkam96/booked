import './Common.css';

function HeaderText(props: any) {
    return (
        <div className="header-text-container">
            <div className="header-text-typography">{props.headerText}</div>
        </div>
    )
}

function HeaderLabel(props: any) {
    return (
        <div className="header-label-container">
            <div className="header-label-typography">{props.headerLabel}</div>
        </div>
    )
}

function HeaderV2(props: any) {
    return (
        <div className="header-container">
            <HeaderText headerText="Booked"></HeaderText>
            {props.headerLabel && <HeaderLabel headerLabel={props.headerLabel}></HeaderLabel>}
        </div>
    )
}

export default HeaderV2;