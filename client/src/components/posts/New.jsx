import React, { useState } from 'react'
import imageCompression from 'browser-image-compression';
import { useHistory } from 'react-router-dom';
import { server } from '../../config';

export default function New() {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  function isValidFile(file) {
    const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];

    const splited = file.name.split('.');
    const fileExt = splited[splited.length - 1];

    if (validExtensions.includes(fileExt)) return true;
    setPreview(null);
    return false;
  }

  async function handleSubmit(e) {  
    e.preventDefault();
    let compressedFile;
    setDisabled((value) => !value);

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }

    try {
      if (!file) return new Error('File is necessary!');
      compressedFile = await imageCompression(file, options);
      // console.log(compressedFile);
    } catch(e) {
      console.log(e);
      return console.log('Error');
    }

    const fd = new FormData();
    fd.append('postImage', compressedFile);
    fd.append('caption', caption);

    fetch(`${server}/api/post`, {
      method: 'POST',
      credentials: 'include',
      body: fd
    })
    .then(res => res.json())
    .then(json => {
      setDisabled((value) => !value);
      console.log(json);
      return history.push('/');
    })
    .catch(err => {
      console.log(err.message);
      setDisabled((value) => !value);
    });
  }

  function handleCaption(e) {
    setCaption(() => e.target.value);
  }

  function handleChange(e) {
    const file = e.target.files[0];
    setFile(() => file);
    
    if (!file) return;
    setLoading(true);

    if (isValidFile(file)) {
      const reader = new FileReader();
      const url = reader.readAsDataURL(file);
      console.log(url);

      reader.onloadend = () => setPreview(reader.result);
      return setError(false);
    } else {
      return setError(true);
    }
  }
  return (
    <div className="mb-14 md:flex text-center w-full md:flex-col md:items-center">
      <div className="md:mt-6 md:pt-6 bg-white h-auto new md:w-96">
        <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit} className="p-4 upload-btn-wrapper bg-white w-full flex flex-col">
          <div className="group items-start text-left">
            <label htmlFor="caption" className="border-bottom border-b-4 text-gray-500 text-xl mb-2 inline z-0">Caption</label>
            <textarea 
              type="text" 
              name="caption" 
              className="text-gray-600 border-gradient border-gradient-purple max-h-96 outline-none p-2 w-full block" 
              placeholder="Eg: My cool new bag"
              onChange={handleCaption}
              value={caption}
            />
          </div>
          <div className="m-3 upload-button border-3 border-red-100">
            <input type="file" className="text-center" onChange={handleChange}/>
          </div>
          { error && (<div className="text-red-400">Invalid file type, only JPG, JPEG, PNG & GIF are allowed</div>) }
          { !preview && <div className="flex bg-white flex-col items-center uppercase opacity-10"><i className="fas fa-7x fa-image"></i></div> }
          { !preview && <div className="flex bg-white flex-col items-center uppercase opacity-20">preview</div> }
          { loading && (
            <div className="preview bg-white border-2 border-gray-300 flex flex-col items-center">
              { preview && <img src={preview} className="bg-white" alt="" /> }
            </div>
          )}
          <button disabled={disabled} style={disabled ? {opacity: 0.5} : null} type="submit" className="submit mt-4 rounded text-white w-full p-2">Submit</button>
        </form>
        
      </div>
    </div>
  )
}