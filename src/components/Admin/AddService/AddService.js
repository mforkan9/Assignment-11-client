import React, { useState } from 'react';
import './AddService.css'
import img1 from './692-6927112_transparent-success-png-success-png-icon-png-download.png'
const AddService = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    const [serviceSuccess,setServiceSuccess] = useState(false)
    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('price',info.price)
        formData.append('description', info.description)

        fetch('https://evening-retreat-30393.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                setServiceSuccess(data)
            })
            .catch(error => {
                console.error(error)
            })
       e.preventDefault()
    }
    return (
        <div className='add-body'>
           { serviceSuccess 
            ?
             <div>
                 <img style={{height:'400px',width:'45%',marginLeft:'250px'}} src={img1} className='mt-3' alt="Success" srcset="" />
                 <h3 className='text-center text-success m-3'>Service Add Successful</h3>
            </div>
            :
            <form className='in-body' onSubmit={handleSubmit}>
                <div class="row mt-1 p-3">
                    <div class="col-md-6">
                        <h6 style={{ fontWeight: '700' }}>Service Name</h6>
                        <input onBlur={handleBlur} type="text" required class="form-control" placeholder="Service name" aria-label="First name" name="name" />
                    </div>
                    <div class="col-md-6">
                    <h6 style={{ fontWeight: '700' }}>Service Name</h6>
                        <input onBlur={handleBlur} type="text" required class="form-control" placeholder="Price" aria-label="Price" name="price" />
                    </div>

                    <div className='col-md-6 mt-3'>
                        <h6 style={{ fontWeight: '700' }}>Description</h6>
                        <textarea onBlur={handleBlur} style={{ borderRadius: '10px',width:'100%' }} name="description" required id="" cols="52" placeholder='Description' rows="6"></textarea>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <div class='file file--upload'>
                            <label for='input-file'>
                                <i class="zmdi zmdi-cloud-upload zmdi-hc-3x"></i>Upload
                            </label>
                            <input style={{ width: '150px' }} id='input-file' onChange={handleFileChange} type="file" required class="form-control" name="file" placeholder="file upload" aria-label="Last name" />
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className='btn btn-primary' type='submit' >submit</button>
                </div>
            </form> }
        </div>
    );
};

export default AddService;