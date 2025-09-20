import './ServiceItemCard.css';

function ServiceItemCard() {
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
            <div className="service-item-logo"></div>
            <div className="service-item-content">
                <div className="service-item-content-pricing">
                    <div className="service-item-content-price-typography">$50</div>
                    <div className="service-item-content-duration-typography">(1hr)</div>
                </div>
                <div className="service-item-content-divider"></div>
                <div className="service-item-content-description">
                    <div className="service-item-content-description-provider-name-typography">David T</div>
                    <div className="service-item-content-description-service-name-typography">Haircut and Beard Trim</div>
                    <div className="service-item-content-description-service-details-typography">Greenpoint, Brooklyn</div>
                </div>
            </div>
        </div>
    );
}

export default ServiceItemCard;