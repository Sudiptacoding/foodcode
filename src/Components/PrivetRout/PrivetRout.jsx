import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({isSignIN , children}) => {
    if(!isSignIN){
        return <Navigate to='/form' replace></Navigate>
    }
    return children
};

export default PrivetRout;