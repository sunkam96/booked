import './Common.css';


function SectionHeader(props: any) {
    return (
        <div className="section-header-container">
            <div className="section-header-typography">{props.sectionHeaderText}</div>
        </div>
    )
}

export {SectionHeader};