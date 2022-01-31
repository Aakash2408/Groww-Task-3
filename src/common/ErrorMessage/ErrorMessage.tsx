import './ErrorMessage.css';

import React from 'react';
import { Link } from 'react-router-dom';

function ErrorMessage(props: { message: string }) {
    return (
        <div className="error-message">
            <div className="error-container">
                <span className="message">
                      Uh Oh! Page Not Found
                    <h1>{props.message}</h1>
                    <Link to="/" className='backtoHome'>Home Page</Link>
                </span>
            </div>
        </div>
    )
}

export default ErrorMessage
