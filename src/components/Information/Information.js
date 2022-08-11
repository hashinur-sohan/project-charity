import React from 'react';
import { useState, useEffect } from 'react';
import './Information.css';

const Information = () => {
    const [schedule, setSchedule] = useState([]);
    useEffect( () =>{
      fetch('https://limitless-lowlands-32082.herokuapp.com/schedule')
      .then(res => res.json())
      .then(data => setSchedule(data))
    }, [])
    return (
        <div className='container'>
            <div >
                <h2 className='info-heading'>Scholar Information</h2>
                <div className='info-container'>
                {
                     schedule.map(infos=> <Info key={infos._id} infos={infos}></Info>)
                }
                </div>
            </div>
        </div>
    );
};
function Info(props){
    return(
        <div className='information'>
            <img src={props.infos.userImage} alt="" />
            <h3>Scholar Name: {props.infos.scholarName}</h3>
            <h4>Id: {props.infos._id}</h4>
            <h4>Phone: {props.infos.phone}</h4>
            {/* <h4>City: {props.infos.city}</h4> */}
            
            {/* <h4>Upazila: {props.infos.upazila}</h4> */}
            {/* <h4>Post Code: {props.infos.postCode}</h4> */}
            <h4>Status: {props.infos.status}</h4>
            {/* <h4>Scholar Email: {props.infos.scholarEmail}</h4> */}
            
            
        </div>
    )
}

export default Information;