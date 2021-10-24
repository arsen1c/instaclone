import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { server } from '../../config';
import PostModal from '../modals/PostModal';
import Follow from './Follow.jsx';
import Avatar from 'react-avatar';

export default function Account() {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const [showModal, setShowModal] = useState(true);
  const [modalImg, setModalImg] = useState(null);
  const [isFollowed, setIsFollowed] = useState(false);

  function handleModal(img, value) {
    setModalImg(img);
    setShowModal(!value);
  }

  const handleFollow = (e) => {
    // add logic to make a request to the API {/friendship}
    setIsFollowed(value => !value);
  }

  useEffect(() => {
    // Make it user specific instead of /allpost
    fetch(`${server}/api/posts/${username}`, {
      credentials: 'include',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, DELETE',
    })
      .then(res => {
        if (!res.ok) {
          return new Error('Could not fetch data for that resource');
        }
        return res.json();
      })
      .then(json => {
        setLoading(false);
        return setData(json);
      })
      .catch(e => setError(() => {
        setLoading(false);
        return setError(e.message)
      }));
  }, [username]);
  
  return (
    <div>
      <div className="flex flex-col items-center">
        { error && (<div>{error}</div>) }
        { loading && (<div>Loading...</div>) }
        <div className="flex mt-4">
          { data && (
            <div className="flex flex-col items-center md:w-98 md:account-info md:items-center">
              <div className="pfp">
                <Avatar 
                name={data.user.username} 
                src={data.user.profile_image} 
                className="object-cover items-center md:h-48 md:w-48 h-28 w-28 rounded-full"/> 
              </div>
              <section className="account-stats flex items-center text-center flex-col">
                <div className="text-2xl my-2 w-80 ">
                  <h2>{data.user.username}</h2>

                </div>
                <div onClick={handleFollow} className="">
                  <Follow followed={isFollowed}/>
                </div>
                <div className="flex mt-3 justify-between">
                  <span className="mr-4"><span className="font-bold">{data.posts.length}</span> posts</span>
                  <span className="mr-4"><span className="font-bold">{data.user.followers.length}</span> followers</span>
                  <span><span className="font-bold">{data.user.following.length}</span> following</span>
                </div>
                <div className="mt-3">
                  <h1 className="font-bold">{data.user.name}</h1>
                </div>
              </section>
          </div>
          ) }
        </div>

        <div className="flex md:pt-12 mt-5 md:w-100 justify-center items-center mb-4">
        <PostModal imgLink={modalImg} onClose={() => handleModal(null, false)} show={showModal} data={data}/>
          {/*<article className="images justify-center">
            { data && [...data.posts].reverse().map(post => (
              <div key={post._id} className="card shadow-sm bg-cover cursor-pointer">
                <img 
                  src={post.image_link}
                  alt="" 
                  onClick={() => handleModal(post.image_link, true)}
                />
              </div>
            ))}
          </article>*/}
        </div>
      </div>
    </div>
  )
}