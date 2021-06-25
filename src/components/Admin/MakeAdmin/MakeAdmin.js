import React, { useState } from 'react';
import './MakeAdmin.css'
import img1 from './images.jpg'
const MakeAdmin = () => {
    const [adminInfo,setAdminInfo] = useState({})
    const [addSuccess,setAddSuccess] = useState(false)
    const handleAdminBlur = (e) =>{
        const newAdmin = {...adminInfo}
        newAdmin[e.target.name] = e.target.value
        setAdminInfo(newAdmin)
    }
    const handleAdminSubmit = (e) =>{
        const addedAdmin = adminInfo
        fetch('https://evening-retreat-30393.herokuapp.com/adminAdded',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addedAdmin)
        })
            .then(res => res.json())
            .then(data => setAddSuccess(data.insertedCount > 0))
        e.preventDefault()
    }
    return (
        <div className='adminBody'>
          { addSuccess 
          ?
           <div>
               <img style={{height:'200px',width:'30%',marginLeft:'250px'}} src={img1} alt="" srcset="" />
               <h3 className='text-center text-success'> <i>Admin add successful </i> </h3>
           </div>
            :
            <form onSubmit={handleAdminSubmit} className='mt-5 p-5'>
               <h5>Email</h5>
               <input onBlur={handleAdminBlur} type="email" placeholder="example@gmail.com" required className='adminform' name='email'/>
               <button type="submit" className='btn btn-primary'>Added</button>
           </form>
           }
        </div>
    );
};

export default MakeAdmin;