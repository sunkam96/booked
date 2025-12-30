import { Provider, ServiceItem } from './data';
import testData from './testdata.json';

interface TestDataServiceItem {
    name: string;
    price: number;
    duration: number;
    description: string;
}

interface TestDataProvider {
    name: string;
    email: string;
    phone: string;
    description: string;
    logo_url: string;
    services: TestDataServiceItem[];
}

export function parseTestDataToProviders(): Provider[] {
    return (testData as TestDataProvider[]).map((providerData) => {
        const serviceItems = providerData.services.map((service) => {
            return new ServiceItem(
                service.name,
                service.description,
                service.price,
                service.duration
            );
        });

        return new Provider(
            providerData.name,
            providerData.logo_url,
            providerData.description,
            providerData.email,
            serviceItems
        );
    });
}

export function getProviderByName(name: string): Provider | undefined {
    const providers = parseTestDataToProviders();
    return providers.find(provider => provider.name === name);
}

export function getAllProviders(): Provider[] {
    return parseTestDataToProviders();
}