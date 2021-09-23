import React, { useState } from "react";

export default function Modal({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);

  const handleModal = (img) => {
    setImage(img);
    setShowModal(true);
  }

  return (
    <>
       <div className="flex md:pt-12 mt-5 md:w-100 justify-center items-center mb-4">
          <article className="images justify-center">
            { data && [...data.posts].reverse().map(post => (
              <div key={post._id} className="card shadow-sm bg-cover cursor-pointer">
                <img 
                  src={post.image_link}
                  alt="" 
                  onClick={() => handleModal(post.image_link)}
                />
              </div>
            ))}
          </article>
        </div>
      {showModal ? (
        <>
          <div
            className="justify-center max-w-96 items-center flex overflow-x-hidden overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/*body*/}
                <div className="p-2 ">
                  <img src={image} alt="" className="max-h-96"/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}