import React from 'react';
import './featuredchart.css'
import { MoreVertOutlined } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import { KeyboardArrowUpOutlined } from '@mui/icons-material';

const Featuredchart = () => {
    return (
        <div className='f-featured'>
            <div className='f-top'>
                <h1 className='f-title'>Total Revenue</h1>
                <MoreVertOutlined fontSize='small' />
            </div>
            <div className='f-bottom'>
                <div className='f-featuredChart'>
                    <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
                </div>
                <p className='f-title'>Total sales made today</p>
                <p className='f-amount'>$420</p>
                <p className='f-desc'>
                    Previous transaction processing. Last payments may not be included
                </p>
                <div className='f-summary'>
                    <div className='f-item'>
                        <div className='f-resulttitle'>Target </div>
                        <div className='f-itemResult f-positive'><p style={{color:"gray"}}>:</p>
                            <KeyboardArrowDownOutlined fontSize='small' />
                            <div className='f-resultamount'>$12.4k</div>
                        </div>

                    </div>
                    
                    <div className='f-item'>
                    <div className='f-resulttitle'>Last week </div>
                        <div className='f-itemResult f-nagative'> <p style={{color:"gray"}}>:</p>
                            <KeyboardArrowDownOutlined fontSize='small' />
                            <div className='f-resultamount '> $12.4k</div>
                        </div>

                    </div>
                    <div className='f-item'>
                        <div className='f-resulttitle'>Last Month </div>
                        <div className='f-itemResult f-positive'> <p style={{color:"gray"}}>:</p>
                            <KeyboardArrowDownOutlined fontSize='small' />
                            <div className='f-resultamount'>$12.4k</div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Featuredchart;
