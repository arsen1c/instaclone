import React from 'react'

export default function Content(props) {
  return (
    <div className="max-w-96 h-auto overflow-hidden">
      <div className="mb-4 rounded border b-1 post-card w-96 bg-white justify-center">
        <div className="post-head flex items-center py-2 px-4">
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F841798-lamborghini-aventador-super-veloce-cars-supercars-red.jpg&f=1&nofb=1" 
            alt=""
            className="h-10 w-10 bg-contain overflow-hidden rounded-3xl"
          />
          {/* Make this a Link tag */}
          <div className="username ml-4 font-bold">
            arsen1c
          </div>
        </div>
        <img 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThe-Magic-Islands-of-Lofoten-Norway-Europe-winter-morning-light-landscape-Desktop-HD-Wallpaper-For-PC-Tablet-And-Mobile-3840x2160-1920x1440.jpg&f=1&nofb=1" 
          alt=""
          className="w-96 overflow-hidden" 
        />
        <div className="flex opacity-70 justify-between post-actions px-3 py-2">
          <div className="main">
            <i className="far fa-heart text-2xl mr-4 cursor-pointer"></i>
            <i className="far fa-comment text-2xl mr-4 cursor-pointer"></i>
            <i className="far fa-paper-plane text-2xl cursor-pointer"></i>
          </div>
          <i className="far fa-bookmark text-2xl cursor-pointer"></i>
        </div>
      </div>

      <div className="mb-4 rounded border b-1 post-card w-96 bg-white justify-center">
        <div className="post-head flex items-center py-2 px-4">
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F841798-lamborghini-aventador-super-veloce-cars-supercars-red.jpg&f=1&nofb=1" 
            alt=""
            className="h-10 w-10 bg-contain overflow-hidden rounded-3xl"
          />
          {/* Make this a Link tag */}
          <div className="username ml-4 font-bold">
            arsen1c
          </div>
        </div>
        <img 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThe-Magic-Islands-of-Lofoten-Norway-Europe-winter-morning-light-landscape-Desktop-HD-Wallpaper-For-PC-Tablet-And-Mobile-3840x2160-1920x1440.jpg&f=1&nofb=1" 
          alt=""
          className="w-96 overflow-hidden" 
        />
        <div className="flex opacity-70 justify-between post-actions px-3 py-2">
          <div className="main">
            <i className="far fa-heart text-2xl mr-4 cursor-pointer"></i>
            <i className="far fa-comment text-2xl mr-4 cursor-pointer"></i>
            <i className="far fa-paper-plane text-2xl cursor-pointer"></i>
          </div>
          <i className="far fa-bookmark text-2xl cursor-pointer"></i>
        </div>
      </div>
     
    </div>
  )
}