import React from 'react';

const NotFound = () => {
    const notFoundStyles = {
        textAlign: 'center', color: 'red', marginTop: '10%', fontWeight: 'bold', alignItems: 'center'
    }
    return (
        <div style={notFoundStyles}>
            <h2 >Sorry, we can't find the page!!</h2>
            <h4>404 Error</h4>
        </div>
    );
};

export default NotFound;