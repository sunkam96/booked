import '../App.css';
import { CommonHeader, CommonLabel } from '../common/Common';
import Chip from '@mui/material/Chip';
import Layout from '../common/Layout';
import Views from '../common/util';

function Booked(props: any) {
    const handleChipClick = () => {
        window.open(props.eventLink, '_blank');
    };

    return (
        <Layout>
            <CommonHeader bookingData={props.bookingData} view={Views.BOOKED} />
            <CommonLabel label={"Your appointment for " + props.bookingData.serviceItem.service + " is booked!"} />
            <Chip
                label="View Appointment"
                onClick={handleChipClick}
                clickable
                color="primary"
                sx={{
                    marginTop: '16px',
                    padding: '8px 16px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                }}
            />
        </Layout>

    );
}

export default Booked;