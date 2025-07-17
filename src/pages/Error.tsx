import '../App.css';

function Error() {
    return (
        <div className="page-frame">
            <div className="page-container">
                <div className="error-container">
                    <h1>Oops! Something went wrong.</h1>
                    <p>We couldn't find the page you were looking for.</p>
                    <p>Please check the URL or go back to the home page.</p>
                    <a href="/">Go to Home</a>
                </div>
            </div>
        </div>

    )
}

export default Error;