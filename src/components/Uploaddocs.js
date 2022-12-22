import React from 'react'
import uploadimg from '../images/upload.png';
import Subheader from './Subheader';
import { useState } from 'react';

function Uploaddocs() { 
    
    const [file, setFile] = useState(false);
    const [selectedFile, setSelectedFile] = useState();

    function toggleChange(event) {
        event.preventDefault();
        setSelectedFile(event.target.files[0]);
        setFile(true);
    }

    function close() {
        setSelectedFile(null);
        setFile(false);
    }

    return (
        <div>
            <div className='upload_docs'>
                <Subheader title={'Activity'} subtitle={'Upload Docs'} />

                <div class="card-header pt-10" className='docs_inner'>
                    <div class="d-flex align-items-center">

                        <div class="symbol symbol-circle me-5">
                            <div class="symbol-label bg-transparent text-primary border border-secondary border-dashed">

                                <span class="svg-icon svg-icon-2x svg-icon-primary">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.302 11.35L12.002 20.55H21.202C21.802 20.55 22.202 19.85 21.902 19.35L17.302 11.35Z" fill="currentColor" />
                                        <path opacity="0.3" d="M12.002 20.55H2.802C2.202 20.55 1.80202 19.85 2.10202 19.35L6.70203 11.45L12.002 20.55ZM11.302 3.45L6.70203 11.35H17.302L12.702 3.45C12.402 2.85 11.602 2.85 11.302 3.45Z" fill="currentColor" />
                                    </svg>
                                </span>

                            </div>
                        </div>


                        <div class="d-flex flex-column">
                            <h2 class="mb-1">File Upload</h2>
                            <div class="text-muted fw-bold">
                                <a href="#">All activities</a>
                                <span class="mx-3">|</span>
                                <a href="#">File Manager</a>
                                <span class="mx-3">|</span>250 Items
                                <span class="mx-3">|</span>20 MB Per file</div>
                        </div>

                    </div>
                </div>

                <div className='upload_cont'>
                    <div className='upload_cont_inner'>
                        <div>
                            <label htmlFor="inputTag" style={{ cursor: 'pointer' }}>
                                <img src={uploadimg} height="70" alt="upload file here" />
                                <span style={{ color: '#2f3030', marginLeft: '7px' }}>Select File</span> <br />
                                <input id="inputTag" onChange={toggleChange} style={{ display: 'none' }} type="file" />
                                <br />
                            </label>
                        </div>
                        {file && selectedFile != null ? <div className="file_container">${selectedFile.name}
                            <div className='close' onClick={close}>x</div>
                        </div> : ''}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Uploaddocs