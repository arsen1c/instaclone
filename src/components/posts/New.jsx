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
    <div className="mt-14 h-screen bg-gray-100 flex flex-col items-center">
      <div className="mt-6 pt-6 bg-white h-auto new w-96">
        <form action="" method='POST' className="upload-btn-wrapper bg-white w-full flex flex-col">
          <div className="group items-start text-left m-4">
            <input type="text" name="caption" className="p-2 w-full block" required/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="caption" className="block">Caption</label>
          </div>
          <div className="">
            <button className="btn cursor-pointer text-center my-10">Upload a file</button>
            <input type="file" className="bg-red-300 text-center" onChange={handleChange}/>
          </div>
        </form>
        { error && (<div>Invalid file</div>) }
        { !preview && <div className="flex bg-white flex-col items-center uppercase opacity-40 my-4">preview</div> }
        { loading && (
          <div className="preview bg-white border-4 border-gray-300 flex flex-col items-center">
            { preview && <img src={preview} className="bg-white" alt="" /> }
          </div>
        )}
      </div>
    </div>
  )
}