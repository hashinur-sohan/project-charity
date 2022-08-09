import React from 'react';
import { useState, useEffect } from 'react';
import './Information.css'

const Information = () => {
    const [schedule, setSchedule] = useState([]);
    useEffect( () =>{
      fetch('https://limitless-lowlands-32082.herokuapp.com/schedule')
      .then(res => res.json())
      .then(data => setSchedule(data))
    }, [])
    return (
        <div className='container'>
            <div className='info-container'>
                <h3>Scholar Information:</h3>
                 {schedule.map(scheduleInfo =><Information key={schedule.id}></Information>)}

            </div>
        </div>
    );
};

export default Information;