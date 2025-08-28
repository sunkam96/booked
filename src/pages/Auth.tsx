import '../App.css';
import { useLocation } from "react-router";

function Auth() {
    const location = useLocation();
    const { providerId } = location.state || {};

    return (
        <div className="page-frame">
            <div className="page-container">
                <h2>Hello {providerId}</h2>
                <h3>Please grant permission to your calendar so appointments may be scheduled</h3>
                <a href={`${process.env.GOOGLE_API_URL}/google?providerId=${providerId}`}>Login with Google</a>
            </div>
        </div>
    );
}

export default Auth;