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

function ProvidersV2() {
    return (
        <Layout>
            <HeaderV2 />
            <SearchInput />
            <SectionHeader sectionHeaderText="Providers near you"></SectionHeader>
            <ServiceItemCard />
            <SectionHeader sectionHeaderText="Signup as a provider"></SectionHeader>
        </Layout>
    );
}

export default ProvidersV2;