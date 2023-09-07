import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar.jsx'
import Navbar from '../../components/Navbar.jsx'
import './new.css'
import camera from '../../public/images/addicon.png'
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = ({inputs, title}) => {
    const [file, setfile] = useState("");

    

    return (
        <div className='new'> 
        <Sidebar />
        <div className='newcontainer'>
            <Navbar />
            <div className='n-top'>
                <h1>{title}</h1>
            </div>
            <div className='n-bottom'>
                <div className='n-left'>
                    <img 
                    src={file ? URL.createObjectURL(file): camera } 
                    alt=''
                    />
                </div>
                <div className='n-right'>
                    <form>
                    <div className='formInput'>
                            <label htmlFor='file'>Image: <DriveFolderUploadOutlined className='n-icon'/></label>
                            <input type='file' id='file'  style={{display:"none"}}/>
                        </div>
                        {inputs.map((input) => (
                        <div className='formInput' key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder} />
                        </div>
                        ))}
                        
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default New;
