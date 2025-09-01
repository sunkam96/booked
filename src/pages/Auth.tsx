import '../App.css';
import { useLocation } from "react-router";
import Layout from '../common/Layout';

function Auth() {
    const location = useLocation();
    const { providerId } = location.state || {};

    return (
        <Layout>
            <h2 style={{ textAlign: 'center', color: '#1976d2', marginBottom: '16px' }}>
                Hello {providerId}
            </h2>
            <h3 style={{ textAlign: 'center', marginBottom: '24px' }}>
                Please grant permission to your calendar so appointments may be scheduled
            </h3>
            <a
                href={`http://localhost:3000/google?providerId=${providerId}`}
                style={{
                    color: '#1976d2',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                Login with Google
            </a>
        </Layout>
    );
}

export default Auth;