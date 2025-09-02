import '../App.css';
import Layout from '../common/Layout';
import { CommonHeader, CommonLabel } from '../common/Common';
import Views from '../common/util';
import theme from '../common/theme';
import Typography from '@mui/material/Typography';

function Error(props: any) {

    return (
        <Layout>
            <CommonHeader view={Views.ERROR} />
            <CommonLabel label="Error" />
            {
                props.errorMessage && (
                     <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            textAlign: 'center',
                            color: theme.palette.text.secondary,
                        }}
                    >
                        {props.errorMessage}
                    </Typography>
                )
            }
            {
                !props.errorMessage && (
                     <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            textAlign: 'center',
                            color: theme.palette.text.secondary,

                        }}
                    >
                        Oops! Something went wrong. No page was found matching this url.
                    </Typography>
                )
            }
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
        </Layout>
    );
}

export default Error;