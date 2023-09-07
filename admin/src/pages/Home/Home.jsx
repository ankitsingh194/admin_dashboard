import React from 'react';
import Sidebar from '../../components/Sidebar';
import './home.css'
import Navbar from '../../components/Navbar';
import Widget from '../../components/widget/widget';
import Chart from '../../components/chart/chart';
import Featuredchart from '../../components/Featuredchart/Featuredchart';
import Tables from '../../components/table/Table';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                <div className='widgets'>
                    <Widget type="user" />
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance" />
                </div>
                <div className='charts'>
                <Featuredchart />
                <Chart  aspect={2 / 1} title="Last 6 Months (Revenue)" />  
                </div>
                <div className='listContainer'>
                    <div className='listTitle'>Latest Transactions</div>
                    <Tables />
                </div>
                
                
            </div>
        </div>
    );
}

export default Home;