import React from 'react';
import "./widget.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({type}) => {

    const amount = 100;
    const deff = 30;

    let data;
      switch(type){
        case "user":
           data={
            title:"USERS",
            isMoney:false,
            link:"See all users",
            icon: <Person2OutlinedIcon className='icon' style={{
                backgroundColor:"rgba(255,0,0,0.2)",
                color:"red",
                borderRadius:"20%"
            }}/>
               
           };
           break;
           case "order":
           data={
            title:"ORDERS",
            isMoney:false,
            link:"See all orders",
            icon: <ShoppingCartOutlinedIcon className='icon'  style={{
                backgroundColor:"rgba(218,165,32,0.2)",
                color:"goldenrod",
                borderRadius:"20%"
            }}/>
               
           };
           break;
           case "earning":
           data={
            title:"EARNING",
            isMoney:true,
            link:"See net earning",
            icon: <AttachMoneyOutlinedIcon  className='icon'  style={{
                backgroundColor:"rgba(0,128,0,0.2)",
                color:"green",
                borderRadius:"20%"
            }}/>
               
           };
           break;
           case "balance":
           data={
            title:"BALANCE",
            isMoney:true,
            link:"See details",
            icon: <AccountBalanceOutlinedIcon className='icon'  style={{
                backgroundColor:"rgba(128,0,128,0.2)",
                color:"purple",
                borderRadius:"20%"
            }}/>
               
           };
           break;


      }
    return (
        <div className='w-widget'>
            <div className='w-left'>
                <span className='w-title'>{data.title}</span>
                <span className='w-counters'>{data.isMoney && "$"} {amount} </span>
                <span className='w-link'>{data.link}</span>
            </div>
            <div className='w-right'>
                <div className='w-percentage w-positive'>
                    <KeyboardArrowUpIcon />
                    {deff} %
                    
                </div>
                {data.icon}

            </div>
            
            
        </div>
    );
}

export default Widget;
