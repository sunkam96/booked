import './ProvidersV2.css';
import Layout from '../common/Layout';
import HeaderV2 from '../common/Header';
import { SectionHeader } from '../common/Common';
import { Link, useNavigate } from "react-router";
import { getAllProviders } from '../../data/testutil';
import { Description } from '@mui/icons-material';

function SearchInput() {
    return (
        <div className="search-input-container">
            <input id="search-input" className="search-input" type="text" placeholder='Search all'/>
        </div>
    )
}

function ProviderItemCard(props: any) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/v2/${props.providerName}/services`);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
        }
    };

    return (
        <div 
            className="provider-item-card-container"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label="Select service"
        >
            <div className="provider-item-logo" style={{
                    backgroundImage: `url('${props.logoUrl}')`
                }}></div>
            <div className="provider-item-content">
                {/* <div className="provider-item-content-pricing">
                    <div className="provider-item-content-price-typography">{props.price}</div>
                    <div className="provider-item-content-duration-typography">{props.duration}</div>
                </div> */}
                {/* <div className="provider-item-content-divider"></div> */}
                <div className="provider-item-content-description">
                    <div className="provider-item-content-description-service-name-typography">{props.providerName} - {props.description}</div>
                    {/* <div className="provider-item-content-description-service-name-typography">{props.serviceName}</div> */}
                    <div className="provider-item-content-description-service-details-typography">{props.location}</div>
                </div>
            </div>
        </div>
    );
}


function ProvidersV2() {
    return (
        <Layout>
            <HeaderV2 headerLabel="Book your next haircut and nail appointment now!" />
            <SearchInput />
            <SectionHeader sectionHeaderText="Providers near you"></SectionHeader>
            <div className="provider-item-cards-list-container">
                {getAllProviders()
                    .map((provider) => {
                        return {
                                logoUrl: provider.logoUrl,
                                providerName: provider.name,
                                description: provider.description,
                                location: provider.location
                            }
                        })
                    .map((props, index) => (
                        <ProviderItemCard key={index} {...props} />))}
            </div>
            <Link to="/v2/register">Signup as a provider today!</Link>
        </Layout>
    );
}

export default ProvidersV2;