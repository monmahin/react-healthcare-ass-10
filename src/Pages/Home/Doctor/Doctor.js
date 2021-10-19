import React from 'react';

const Doctor = ({doctor}) => {
    const {drName,docImg}=doctor
    return (
        <div className="col-md-4 col-sm-6 col-12">
            
            <img className="docImg-thumbnail w-100" height='75%' src={docImg} alt="" />
            <h3>{drName}</h3>
        </div>
    );
};

export default Doctor;