import {fetchAllProviders} from '../firestore';
import {useEffect, useState} from 'react';
import {Provider} from '../data';



function Providers (props: any) {

    const [providers, setProviders] = useState<Provider[]>([]);

    useEffect(() => {
        fetchAllProviders().then((providersList: Provider[] | null) => {
            if (providersList != null) {
                setProviders(providersList);
            }
        })
        console.log("Fetched providers: ", providers);
    });

    return (
        <div className="page-frame">
            <div className="page-container">
                <ul>
                    {providers.map((provider, index) => (
                        <li key={index}>{provider.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Providers;