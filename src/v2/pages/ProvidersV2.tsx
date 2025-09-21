import './ProvidersV2.css';
import Layout from '../common/Layout';
import HeaderV2 from '../common/Header';
import { SectionHeader } from '../common/Common';
import { Link } from "react-router";

function SearchInput() {
    return (
        <div className="search-input-container">
            <input id="search-input" className="search-input" type="text" placeholder='Search all'/>
        </div>
    )
}

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


const davidCardProps = {
    logoUrl: '/barber.webp',
    price: "$50",
    duration: "(1hr)",
    providerName: "David T",
    serviceName: "Haircut and Beard Trim",
    location: "Greenpoint, Brooklyn",
};

const chloeCardProps = {
    logoUrl: '/chloe.jpg',
    price: "$75",
    duration: "(90 mins)",
    providerName: "Chloe K",
    serviceName: "Manicure and Pedicure",
    location: "Williamsburg, Brooklyn",
};

function ProvidersV2() {
    return (
        <Layout>
            <HeaderV2 headerLabel="Book your next haircut and nail appointment now!" />
            <SearchInput />
            <SectionHeader sectionHeaderText="Providers near you"></SectionHeader>
            <div className="service-item-cards-list-container">
                <ServiceItemCard {...davidCardProps} />
                <ServiceItemCard {...chloeCardProps} />
            </div>
            <Link to="/v2/register">Signup as a provider today!</Link>
        </Layout>
    );
}

export default ProvidersV2;