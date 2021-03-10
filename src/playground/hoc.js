// Higher Order Component (HOC)
// -component that renders another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p>The info is: <strong>{props.info}</strong></p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p style={{ color: "red" }}>Private info do not share </p> }
            
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p style={{ color: "red" }}>Please Log In!</p>
            )}            
        </div>    
    )
};
const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is the detail"/>, document.getElementById('app'))