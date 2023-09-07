import React from 'react';
import "./sidebar.css"
import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='s-sidebar'>
            <div className='s-top'>
                <Link to="/" style={{textDecoration: "none"}}>
                <span className='s-logo'>LamaAdmin</span>
                </Link>
            </div>
            <hr />
            <div className='s-center'>
                <ul>
                    
                    <li>
                        <GridViewIcon className='s-icon'/>
                        <span>Dashboard</span>
                    </li>
                    <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <AccountCircleOutlinedIcon className='s-icon'/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: "none"}}>
                    <li>
                        <ProductionQuantityLimitsOutlinedIcon className='s-icon'/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                    <Inventory2OutlinedIcon className='s-icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingSharpIcon className='s-icon'/>
                        <span>Delivery</span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className='s-icon'/>
                        <span>Notification</span>
                    </li>
                    <li>
                    <MonitorHeartOutlinedIcon className='s-icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                      <HubOutlinedIcon className='s-icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                       <SettingsSuggestOutlinedIcon className='s-icon'/>
                        <span>Settings</span>
                    </li>
                    <li>
                      <Person2OutlinedIcon  className='s-icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                      <LogoutOutlinedIcon className='s-icon'/>
                        <span>Logout</span>
                    </li>
                    
                </ul>
                <div className='s-bottoms'>
                    <div className='s-colorOption'></div>
                    <div className='s-colorOption'></div>
                  
                </div>
            </div>
            
        </div>
    );
}

export default Sidebar;
