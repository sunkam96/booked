import '../App.css';
import { useLocation } from "react-router";
import Layout from '../common/Layout';

import { CommonHeader } from '../common/Common';
import Views from '../common/util';

function Auth() {
    const googleApiUrL = import.meta.env.VITE_GOOGLE_API_URL;
    const location = useLocation();
    const { providerId } = location.state || {};
    const bookingData = {
        provider: {
            name: providerId,
        },
    };
    return (
        <Layout>
            <CommonHeader bookingData={bookingData} view={Views.AUTH} />
            <h2>Hello {providerId}</h2>
            <h3>Please grant permission to your calendar so appointments may be scheduled</h3>
            <a href={`${googleApiUrL}/google?providerId=${providerId}`}>Login with Google</a>
        </Layout>
    );
}

export default Auth;