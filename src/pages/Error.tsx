import '../App.css';
import Layout from '../common/Layout';
import { CommonHeader } from '../common/Common';
import Views from '../common/util';
import theme from '../common/theme';

function Error() {

    return (
        <Layout>
            <CommonHeader view={Views.ERROR} />
            <div className="error-container" style={{ textAlign: 'center' }}>
                <h1>Oops! Something went wrong.</h1>
                <p>We couldn't find the page you were looking for.</p>
                <p>Please check the URL or go back to the home page.</p>
                <a
                    href="/"
                    style={{
                        color: theme.palette.primary.main,
                        textDecoration: 'none',
                        fontWeight: 'bold',
                    }}
                >
                    Go to Home
                </a>
            </div>
        </Layout>
    );
}

export default Error;