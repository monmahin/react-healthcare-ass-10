import React, {  useEffect, useState} from 'react';
import {  Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Booking = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState([]);
    const [singleService,setSingleService]=useState({})
    useEffect(() => {
        const url = '/healthcare.json';
        fetch(url)
            .then(res => res.json())
        .then(data=>setService(data))
    },[])
    
    useEffect(() => {
        const info = service.find(serve => serve.id === serviceId)
        setSingleService(info)
    }, [service])
    
    return (
        <div className="mt-5">
            <div className="card mb-3 mx-auto container" >
            <h1 className="card-title">{singleService?.title} Department</h1>
  <div className="row g-0 align-items-center">
    <div className="col-md-6 h-100">
      <img src={singleService?.image} className="img-fluid" alt=""/>
    </div>
    <div className="col-md-6 ">
      <div className="card-body text-start h-100">
        
        <p className="card-text">{singleService?.serviceInfo}</p>
                            <h2>Price List</h2>
                            
  <table class="table table-info">
  <tbody>
    <tr>
      <td>Hospital admit fee</td>
      
      <th>{ singleService?.price}</th>
    </tr>
    <tr>
      <td>Consultation with doctor</td>
      
      <th>{ singleService?.price}</th>
    </tr>
    <tr>
      <td >Repeated Consultation</td>
      <th>{ singleService?.price}</th>
    </tr>
    <tr>
      <td>Full Body checkup</td>
      <th>{ singleService?.price}</th>
    </tr>
  </tbody>
                            </table>
<HashLink to='/home#sevices'><button className="btn btn-primary">Go to Service</button></HashLink>                            
        
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Booking;