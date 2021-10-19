import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
    const [Doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('healthcare.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div id="doctors" className="container">
        <br />
        
            <h1 className="text-primary my-5">Our Doctors {Doctors.length}</h1>
        <div className="row">
            {
                Doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)
            }
        </div>
    </div>
    );
};

export default Doctors;