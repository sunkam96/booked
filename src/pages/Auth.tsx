import '../App.css';
import { useLocation } from "react-router";

function Auth() {
    const location = useLocation();
    const { providerId } = location.state || {};
    const googleApiUrL = import.meta.env.VITE_GOOGLE_API_URL;
    return (
        <div className="page-frame">
            <div className="page-container">
                <h2>Hello {providerId}</h2>
                <h3>Please grant permission to your calendar so appointments may be scheduled</h3>
                <a href={`${googleApiUrL}/google?providerId=${providerId}`}>Login with Google</a>
            </div>
        </div>
    );
}

export default Auth;