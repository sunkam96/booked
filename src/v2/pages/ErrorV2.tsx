import './ErrorV2.css';
import HeaderV2 from '../common/Header';
import Layout from '../common/Layout';

function ErrorV2(props: any) {
    return (
        <Layout>
            <HeaderV2 />
            <div className="error-message-container">
                <h1 className="error-message-title">Error page</h1>
                {props.errorDetails && <p className="error-message-description">{props.errorDetails}</p>}
                {!props.errorDetails && <p className="error-message-description">We're having trouble processing your request. Please try again later.</p>}
            </div>
        </Layout>
    );
}

export default ErrorV2;