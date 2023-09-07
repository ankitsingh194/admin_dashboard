import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Database from '../../components/database/Database';
import "./list.css"

const List = () => {
    return (
        <div className='list'> 
            <Sidebar  />
            
            
           
            <div className='listContainers'>
                <Navbar />
                <Database />
                
            </div> 
            </div>
    
    );
}

export default List;
