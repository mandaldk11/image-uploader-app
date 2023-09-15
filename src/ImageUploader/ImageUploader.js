import React, { useState,useRef } from 'react'
import './ImageUploader.css'
export default function ImageUploader() {
    const [image,setImage]=useState('')
    const inputRef =useRef()

    const handleImage=()=>{
        inputRef.current.click()
    }
    const imageChangeHandler=(e)=>{
        // vimp  e.target.files[0]

       const file = e.target.files[0]
       setImage(file)
    }
    return (
        <div className='parentDiv'>
            <div className='childDiv'>  
            <h2 style={{textAlign:'center'}}><u>Image-Uploader</u></h2>   
                <div className='container' onClick={handleImage}>
                    {
                        // vimp- URL.createObjectURL(image)

                        image ?<div  className='container'><img src={URL.createObjectURL(image)} alt='upload-logo' /> </div>:<img src='Images/imageLogo.png' alt='upload-logo' />
                    }
                    
                    <input type="file"  className='input' ref={inputRef} onChange={imageChangeHandler}/>
                    
                </div>
                <div className='btnContainer'>
                <button className='button'  onClick={handleImage}>Upload-Image</button>
                </div>    
                        
            </div>
        </div>
    )
}
