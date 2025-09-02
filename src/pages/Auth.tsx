import '../App.css';
import { useLocation } from "react-router";
import Layout from '../common/Layout';
import { CommonHeader, CommonLabel } from '../common/Common';
import Views from '../common/util';
import Typography from '@mui/material/Typography';
import theme from '../common/theme';

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
            <CommonLabel label={`Hello ${providerId}`} />
            <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '16px' }}>
                Please grant permission to your calendar so appointments may be scheduled
            </Typography>
            <Typography
                variant="body1"
                component="a"
                href={`${googleApiUrL}/google?providerId=${providerId}`}
                sx={{
                    display: 'block',
                    textAlign: 'center',
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    fontWeight: 'bold',
                }}
            >
                Login with Google
            </Typography>
        </Layout>
    );
}

export default Auth;