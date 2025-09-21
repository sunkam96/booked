import './RegisterProviderV2.css';
import Layout from '../common/Layout';
import HeaderV2 from '../common/Header';


function RegisterProviderFormInput(props: any) {
    return (
        <div className="register-provider-form-input">
            <div className="register-provider-form-input-label-typography">{props.label}</div>
            <input id={props.fieldName} className="register-provider-form-input-field" type="text" />
        </div>
    )
}

function UploadProfilePicture() {
    return (
        <div className="upload-profile-picture-container">
            <div className="upload-profile-picture-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27" fill="none">
                    <path d="M30.6666 22.8333C30.6666 23.5406 30.3856 24.2189 29.8855 24.719C29.3854 25.219 28.7072 25.5 27.9999 25.5H3.99992C3.29267 25.5 2.6144 25.219 2.1143 24.719C1.6142 24.2189 1.33325 23.5406 1.33325 22.8333V8.16667C1.33325 7.45942 1.6142 6.78115 2.1143 6.28105C2.6144 5.78095 3.29267 5.5 3.99992 5.5H9.33325L11.9999 1.5H19.9999L22.6666 5.5H27.9999C28.7072 5.5 29.3854 5.78095 29.8855 6.28105C30.3856 6.78115 30.6666 7.45942 30.6666 8.16667V22.8333Z" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.9999 20.1667C18.9454 20.1667 21.3333 17.7789 21.3333 14.8333C21.3333 11.8878 18.9454 9.5 15.9999 9.5C13.0544 9.5 10.6666 11.8878 10.6666 14.8333C10.6666 17.7789 13.0544 20.1667 15.9999 20.1667Z" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="register-provider-typography">Upload a Profile Picture</div>
        </div>
    )
}

function AddService() {
    return (
        <div className="add-service-container">
            <div className="upload-profile-picture-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M16.5 10.6667V21.3334M11.1666 16H21.8333M29.8333 16C29.8333 23.3638 23.8638 29.3334 16.5 29.3334C9.13616 29.3334 3.16663 23.3638 3.16663 16C3.16663 8.63622 9.13616 2.66669 16.5 2.66669C23.8638 2.66669 29.8333 8.63622 29.8333 16Z" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="register-provider-typography">Add Service</div>
        </div>
    )
}

function RegisterProviderV2() {
    return (
        <Layout>
            <HeaderV2 headerLabel="Sign up and start booking appointments today!" />
            <div className="register-provider-form-container">
                <RegisterProviderFormInput label="Name" fieldName="name" />
                <RegisterProviderFormInput label="Description" fieldName="description" />
                <RegisterProviderFormInput label="Email" fieldName="email" />
            </div>
            <UploadProfilePicture />
            <AddService />
            <div className="register-button-container">
                <button className="register-button">Register</button>
            </div>
        </Layout>
    );
}

export default RegisterProviderV2;