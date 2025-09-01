import '../App.css';
import { CommonHeader, CommonLabel } from '../common/Common';
import Layout from '../common/Layout';
import Views from '../common/util';

function Booked(props: any) {
    return (
        <Layout>
            <CommonHeader bookingData={props.bookingData} view={Views.BOOKED} />
            <CommonLabel label={`Your appointment for ${props.bookingData.serviceItem.service} is booked!`} />
        </Layout>
    );
}

export default Booked;