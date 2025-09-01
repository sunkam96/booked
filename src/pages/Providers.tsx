import { fetchAllProviders } from '../firestore';
import { useEffect, useState } from 'react';
import { Provider } from '../data';
import { Link } from "react-router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Layout from '../common/Layout';

function Providers(props: any) {
    props;
    const [providers, setProviders] = useState<Provider[]>([]);

    useEffect(() => {
        fetchAllProviders().then((providersList: Provider[] | null) => {
            if (providersList != null) {
                setProviders(providersList);
            }
        });
    }, []);

    return (
        <Layout>
            <h2 style={{ textAlign: 'center', color: '#1976d2', marginBottom: '24px' }}>Providers</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
                {providers.map((provider, index) => (
                    <div className="provider-card-container" key={index}>
                        <Link
                            key={index}
                            to={`/${provider.name}/services`}
                                className="provider-link" >
                            <Card className="provider-card">
                                <CardContent>
                                    <Typography sx={{ fontWeight: 600, fontSize: 20, color: '#1976d2' }}>
                                        {provider.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 16, color: '#555', marginTop: '8px' }}>
                                        {provider.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Providers;