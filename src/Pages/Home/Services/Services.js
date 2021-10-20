import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/healthcare.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id="services" className="container">
        <br />
        
            <h1 className="text-primary my-5">Our services {services.length}</h1>
        <div className="row g-5">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services;