import { Button } from '@material-ui/core'
import React from 'react';
import { useState } from 'react';

function Img_upload() {
    const [image,setImage]=useState(null);
    const [progress,setProgress]=useState(0);
    const [caption,setCaption]=useState('');
    const handleChange=(e)=>{
        if(e.target.files[0])
        setImage(e.target.files[0])
    }
    const handleUpload=(e)=>{
        const uploadTask=storage.ref(`images/${image.name}`).put(image)
    }
    return (
    <div>
        <input type='text' placeholder='enter caption here' onChange={event => setCaption(event.target.value)} value=''></input>
        <input type='file' onChange={handleChange}/>
        <Button onClick={handleUpload}></Button>
    </div>
  )
}

export default Img_upload