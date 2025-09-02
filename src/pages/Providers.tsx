import { fetchAllProviders } from '../firestore';
import { useEffect, useState } from 'react';
import { Provider } from '../data';
import { Link } from "react-router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Layout from '../common/Layout';
import { CommonHeader, CommonLabel } from '../common/Common';
import Views from '../common/util';
import theme from '../common/theme';

function Providers(props: any) {
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
            <CommonHeader view={Views.SERVICES} showLogo={false} />
            <CommonLabel label="Providers" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
                {providers.map((provider, index) => (
                    <div className="provider-card-container" key={index}>
                        <Link
                            key={index}
                            to={`/${provider.name}/services`}
                            className="provider-link"
                        >
                            <Card className="provider-card">
                                <CardContent>
                                    <Typography sx={{ fontWeight: 600, fontSize: 20, color: theme.palette.primary.main }}>
                                        {provider.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 16, color: theme.palette.text.secondary, marginTop: '8px' }}>
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