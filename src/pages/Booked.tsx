import '../App.css';
import { CommonHeader, CommonLabel } from '../common/Common';
import Views from '../common/util';
import Chip from '@mui/material/Chip';

function Booked(props: any) {
    const handleChipClick = () => {
        window.open(props.eventLink, '_blank');
    };

    return (
        <div className="page-frame">
            <div className="page-container">
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
            </div>
        </div>
    );
}

export default Booked;