import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSeartch] = useState('');
    
    return (
        <div className="header">
        <div className="header__left">
            <MenuIcon />
            <Link to="/">
            <img className="header__logo" src="https://nilepost.co.ug/wp-content/uploads/2019/03/youtube.png" alt=""/>
            </Link>
        </div>
        
        <div className="header__input">
             <input onChange={e => setInputSeartch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
             <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton"/>
             </Link>
        </div>
           <div className="header__icons">
           <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon" />
            <NotificationsIcon className="header__icon"/>
            <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEH0touzW9sfg/profile-displayphoto-shrink_800_800/0/1574228760576?e=1616630400&v=beta&t=Yp-NyBGkj3XbTB_7AWbLugllAZRQAhf22lv3V5P2eDM" alt="Bongani Masango" />
           </div>
            
        </div>
    )
}

export default Header
