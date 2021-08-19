import React from 'react'

export default function Content(props) {
  return (
    <div className="max-w-96 h-auto overflow-hidden">
    <div className="mb-4 rounded border b-1 post-card md:w-96 bg-white justify-center pb-2">
        <div className="post-head flex items-center py-2 px-4">
          <img 
            src="https://cdn.discordapp.com/attachments/491113748031864842/502707407307407370/IMG_20180901_102050-2.jpg" 
            alt=""
            className="h-10 w-10 bg-contain overflow-hidden rounded-3xl"
          />
          {/* Make this a Link tag */}
          <div className="username ml-4 font-bold">
            arsen1c
          </div>
        </div>
        <img 
          src="https://cdn.discordapp.com/attachments/491113748031864842/502707407307407370/IMG_20180901_102050-2.jpg" 
        alt=""
          className="max-w-96 h-auto overflow-hidden" 
        />
        <div className="flex opacity-80 justify-between post-actions px-3 pt-2">
          <div className="main">
            <i className="far fa-heart text-2xl mr-4 cursor-pointer"></i>
            <i className="far fa-comment text-2xl mr-4 cursor-pointer"></i>
            <i className="far fa-paper-plane text-2xl cursor-pointer"></i>
          </div>
          <i className="far fa-bookmark text-2xl cursor-pointer"></i>
        </div>
        <div className="likes font-bold px-3">
          10 likes
        </div>
        <span className="font-bold px-3">arsen1c</span>
        <span>New profile pic 🎉</span>
      </div>
      <div className="mb-4 rounded border b-1 post-card md:w-96 bg-white pb-2">
        <div className="post-head flex items-center py-2 px-4">
          <img 
            src="https://cdn.discordapp.com/attachments/491113748031864842/502707407307407370/IMG_20180901_102050-2.jpg" 
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
          className="max-w-96 h-auto overflow-hidden" 
        />
        <div className="flex opacity-80 justify-between post-actions px-3 pt-2">
          <div className="main">
            <i className="far fa-heart text-2xl mr-4 cursor-pointer"></i>
            <i className="far fa-comment text-2xl mr-4 cursor-pointer"></i>
            <i className="far fa-paper-plane text-2xl cursor-pointer"></i>
          </div>
          <i className="far fa-bookmark text-2xl cursor-pointer"></i>
        </div>
        <div className="likes font-bold px-3">
          10 likes
        </div>
        <span className="font-bold px-3">arsen1c</span>
        <span>Winter days are awesome 🎉🐛🐒</span>
      </div>
    </div>
  )
}