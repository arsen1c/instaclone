import React, { useState } from 'react'

export default function New() {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function isValidFile(file) {
    const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];

    const splited = file.name.split('.');
    const fileExt = splited[splited.length - 1];

    if (validExtensions.includes(fileExt)) return true;
    setPreview(null);
    return false;
  }

  function handleChange(e) {
    const file = e.target.files[0];
    
    if (!file) return;
    setLoading(true);

    if (isValidFile(file)) {
      const reader = new FileReader();
      const url = reader.readAsDataURL(file);

      reader.onloadend = (e) => setPreview(reader.result);
      console.log(url);
      return setError(false);
    } else {
      return setError(true);
    }
  }
  return (
    <div className="mt-14 mb-14 md:flex text-center w-full md:flex-col md:items-center">
      <div className="md:mt-6 md:pt-6 bg-white h-auto new md:w-96">
        <form action="" method='POST' className="p-4 upload-btn-wrapper bg-white w-full flex flex-col">
          <div className="group items-start text-left">
            <label htmlFor="caption" className="text-gray-500 text-xl mb-2 block z-0">Caption</label>
            <textarea 
              type="text" 
              name="caption" 
              className="text-gray-600 border-gradient border-gradient-purple max-h-96 outline-none p-2 w-full block" 
              placeholder="Eg: My cool new bag"
            />
          </div>
          <div className="m-3 upload-button border-1 border-red-100">
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
          <button type="submit" className="submit mt-4 rounded text-white w-full p-2">Submit</button>
        </form>
        
      </div>
    </div>
  )
}