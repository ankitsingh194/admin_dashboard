import React from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import GamepadOutlinedIcon from '@mui/icons-material/GamepadOutlined';



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search...' />
                   <SearchOutlinedIcon />

                </div>
                <div className='items'>
                    <div className='item'>
                    <LanguageOutlinedIcon className='icon'/>
                     <span>English</span>
                    </div>
                    <div className='item'>
                        <DarkModeOutlinedIcon className='icon'/>
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <div className='counter'>1</div>
                        
                    </div>
                    <div className='item'>
                        <MarkChatUnreadOutlinedIcon className='icon'/>
                        <div className='counter'>2</div>
                        
                    </div>
                    <div className='item'>
                      
                        <GamepadOutlinedIcon className='icon'/>
                        
                    </div>
                    <div className='item'>
                    <ListOutlinedIcon className='icon' />  
                        
                    </div>
                    <img 
                    src="https://c0.wallpaperflare.com/preview/110/649/170/hair-boy-man-suite.jpg" 
                    alt='profilepic'
                     className='avatar'>

                    </img>
                   
                </div>
            </div>
            
        </div>
    );
}

export default Navbar;
