import '../common/Common.css';
import Layout from '../common/Layout';
import HeaderV2 from '../common/Header';
import { SectionHeader } from '../common/Common';
import ServiceItemCard from '../common/ServiceItemCard';

function SearchInput() {
    return (
        <div className="search-input-container">
            <input id="search-input" className="search-input" type="text" placeholder='Search all'/>
        </div>
    )
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
            <HeaderV2 />
            <SearchInput />
            <SectionHeader sectionHeaderText="Providers near you"></SectionHeader>
            <div className="service-item-cards-list-container">
                <ServiceItemCard {...davidCardProps} />
                <ServiceItemCard {...chloeCardProps} />
            </div>
           <SectionHeader sectionHeaderText="Signup as a provider"></SectionHeader>
        </Layout>
    );
}

export default ProvidersV2;