import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
            <h2 className='orgName'><span>BD Charity</span> <br/> <span> Foundation</span> </h2>
            <div>
                <a href="/home">Home</a>
                <a href="/information">Information</a>
                <a href="/scholar_schedule">Scholar Schedule</a>
                <a href="/donation">Donation</a>
            </div>
        </nav>
        
    );
};

export default Header;