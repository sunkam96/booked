import './Common.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router";
import Views from '../common/util';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import theme from './theme';

function CommonHeader(props: any) {
    const PAGES_WITH_BACKLINK = [Views.AVAILABILITY, Views.CONFIRM, Views.BOOKED];
    const showBack = PAGES_WITH_BACKLINK.includes(props.view);
    const providerName = props?.bookingData?.provider?.name ?? '';
    const logoUrl = props?.bookingData?.provider?.logoUrl;
    let backLink = `/${providerName}`;
    switch (props.view) {
        case Views.SERVICES:
            break;
        case Views.ERROR:
            break;
        case Views.AVAILABILITY:
            backLink = `/${providerName}/services`;
            break;
        case Views.CONFIRM:
            backLink = `/${providerName}/availability`;
            break;
        case Views.BOOKED:
            backLink = `/${providerName}/confirm`;
            break;
        case Views.AUTH:
            backLink = `/${providerName}/services`;
            break;
        default:
            backLink = `/${providerName}`;
            break;
    }

    return (
        <AppBar position="static" color="primary" sx={{ marginBottom: '16px' }}>
            <Toolbar>
                {showBack && (
                    <IconButton edge="start" color="inherit" component={Link} to={backLink} sx={{ mr: 2 }}>
                        <ArrowBackIcon />
                    </IconButton>
                )}
                {logoUrl && providerName && (
                    <Avatar src={logoUrl} alt={providerName} sx={{ marginRight: 2 }} />
                )}
                {logoUrl && providerName && (
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {providerName}
                    </Typography>
                )}
            </Toolbar>
        </AppBar>
    );
}

function CommonLabel(props: any) {

    return (
        <Typography
            variant="h5"
            component="div"
            sx={{
                textAlign: 'center',
                color: theme.palette.text.primary, // Dynamically sourced from the theme
                fontWeight: 'bold',
                marginBottom: '16px',
            }}
        >
            {props.label}
        </Typography>
    );
}

export { CommonHeader, CommonLabel };