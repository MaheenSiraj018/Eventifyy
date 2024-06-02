import React from 'react';
import './Header.css';
import logo from '../../assets/eventify (1).png'

const Header = () =>{

    return (
        <div className='chat-header'>
            <img src={logo} height='42em' alt='logo'/>
            <h1 className='chat-eventify'>Eventify</h1>
        </div>
    );
}

export default Header;