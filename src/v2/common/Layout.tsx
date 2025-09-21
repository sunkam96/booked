import './Common.css';

function Layout(props: any) {
    return (
        <div className="app-container">
            {props.children}
        </div>
    )
}

export default Layout;