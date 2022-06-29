import { useState, useRef, useEffect } from 'react';
import * as S from './imageUpload.styles'

export default function ImageUpload(props){

    const [file, setFile] = useState('');
    const [previewURL, setPreviewURL] = useState('');
    const [preview,setPreview] = useState(null);

    const fileRef= useRef();

    useEffect(() => {
        if(file !== '') 
          setPreview(<img style={{widit: '5rem', height: '5rem'}} src={previewURL}></img>);
          props.setImgUrl(<img style={{widit: '5rem', height: '5rem', objectFit:'cover'}} src={previewURL}></img>)
        return () => {
        }
        
      }, [previewURL])
    
    const handleFileOnChange = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
        setFile(file);
        setPreviewURL(reader.result);
        // props.setImgUrl(reader.result)
    }
    if(file)
        reader.readAsDataURL(file);
    }
      
    const handleFileButtonClick = (e) => {
        e.preventDefault();
        fileRef.current.click();
      }

    return (
    <>
        <div>
        {preview}	
        </div>
        <aside className = "side">
        <input ref = {fileRef} hidden = {true} id = "file" type='file' onChange={handleFileOnChange}></input>
        <div style = {{padding : 10}}>
            <button onClick = {handleFileButtonClick}>UPLOAD</button>
        </div>
        </aside>
    </>
    )
}