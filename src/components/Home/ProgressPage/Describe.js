import React from 'react';
import './Describe.css'
const Describe = () => {
    return (
        <div className='describe row'>
            <div className='col-md-7 mt-5 p-5'>
                <h6>Landscape Construction</h6>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='mt-3'>
                    <h6>Landscape Maintenance</h6>
                    <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='mt-3'>
                    <h6>Master Plan</h6>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='mt-3'>
                    <h6>Landscape Design</h6>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className='col-md-5'>
                <div class="modern-form" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',borderRadius:'10px'}}>
                    <fieldset class='float-label-field'>
                        <label for="txtName"></label>
                        <input id="txtName" placeholder='Your Name' type='text' />
                    </fieldset>

                    <fieldset class='float-label-field'>
                        <label for="txtEmail" ></label>
                        <input id="txtEmail" placeholder='Example@gmail.com' type='text' />
                    </fieldset>
                    <fieldset class='float-label-field'>
                        <label for="txtPassword"></label>
                        <textarea placeholder="Drop you Comment" name="" id="txtPassword" cols="50" rows="5"></textarea>
                    </fieldset>
                    <button className='btn btn-primary'>send</button>
                </div>
            </div>
        </div>
    );
};

export default Describe;