import '../App.css';
import Layout from '../common/Layout';

function Error() {
    return (
        <Layout>
            <div className="error-container" style={{ textAlign: 'center' }}>
                <h1>Oops! Something went wrong.</h1>
                <p>We couldn't find the page you were looking for.</p>
                <p>Please check the URL or go back to the home page.</p>
                <a href="/" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}>
                    Go to Home
                </a>
            </div>
        </Layout>
    );
}

export default Error;