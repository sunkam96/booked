import './ServiceItemCard.css';

function ServiceItemCard(props: any) {
    const handleClick = () => {
        console.log('Service item clicked!');
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
        }
    };

    return (
        <div 
            className="service-item-card-container"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label="Select service"
        >
            <div className="service-item-logo" style={{
                    backgroundImage: `url('${props.logoUrl}')`
                }}></div>
            <div className="service-item-content">
                <div className="service-item-content-pricing">
                    <div className="service-item-content-price-typography">{props.price}</div>
                    <div className="service-item-content-duration-typography">{props.duration}</div>
                </div>
                <div className="service-item-content-divider"></div>
                <div className="service-item-content-description">
                    <div className="service-item-content-description-provider-name-typography">{props.providerName}</div>
                    <div className="service-item-content-description-service-name-typography">{props.serviceName}</div>
                    <div className="service-item-content-description-service-details-typography">{props.location}</div>
                </div>
            </div>
        </div>
    );
}

export default ServiceItemCard;