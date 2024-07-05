//create file uploader

import React, { useState } from 'react'

const FileUploader = () => {

    const [file,setFile] =useState(null);

    const handleChange = (e) =>{
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }
  return (
    <div>
        <input type='file' accept='image/*' onChange={handleChange}/>
        {file && <img src={URL.createObjectURL(file)} alt='Uploaded'/>}
    </div>
  )
}

export default FileUploader
