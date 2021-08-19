import React from 'react'

export default function Account() {
  return (
    <div>
      <div className="flex mt-5 flex-col justify-center items-center">
        <div className="flex md:w-98 account-info items-center">
          <div className="pfp">
            <img 
              src="https://cdn.discordapp.com/attachments/491113748031864842/502707407307407370/IMG_20180901_102050-2.jpg" 
              alt="" 
              className="h-48 w-48 rounded-full"
            />
          </div>
          <section className="ml-24 account-stats flex flex-col">
            <div className="text-2xl">
              <h2>arsen1c</h2>
            </div>
            <div className="flex mt-3 justify-between">
              <span className="mr-4"><span className="font-bold">13</span> posts</span>
              <span className="mr-4"><span className="font-bold">53</span> followers</span>
              <span><span className="font-bold">85</span> following</span>
            </div>
            <div className="mt-3">
              <h1 className="font-bold">Aashish</h1>
            </div>
          </section>
        </div>
      </div>

      <div className="images flex mt-5 flex-col items-center mb-4">
        <article className="border-t md:w-100 md:max-w-100 image-grid grid grid-cols-3 pt-10 gap-x-2 gap-y-3">
          <div className="image h-60 w-80 shadow-lg rounded">
            <img 
              src="https://cdn.discordapp.com/attachments/491113748031864842/527389566089560064/IMG_20181225_150313282_HDR.jpg" 
              alt="" 
            />
          </div>
          <div className="bg-contain image h-60 w-80 shadow-lg rounded">
            <img 
              src="https://cdn.discordapp.com/attachments/491113748031864842/505748471676928003/IMG_20181027_122025-3.jpg" 
              alt="" 
            />
          </div>
          <div className="bg-contain image h-60 w-80 shadow-lg rounded">
            <img 
              src="https://cdn.discordapp.com/attachments/561813227298750477/877946822902022144/F1l58sofFm2x85ll4XPgYdOe0qsugrX_LCWUm6U9IKXjbL-5hrE1i6uVR_cUzs606qSu3Rv6sPKbHPbDeNMyH4uBAcYA8Gi4tyWo.png" 
              alt="" 
            />
          </div>
          <div className="bg-contain image h-60 w-80 shadow-lg rounded">
            <img
              src="https://cdn.discordapp.com/attachments/491113748031864842/531401921278509066/image0.jpg" 
              alt="" 
            />
          </div>

        </article>
      </div>
    </div>
  )
}