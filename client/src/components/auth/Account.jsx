import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Account() {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    // Make it user specific instead of /allpost
    fetch(`http://localhost:4000/api/posts/${username}`, {
      credentials: 'include',
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
    <div className="flex flex-col items-center">
      { error && (<div>{error}</div>) }
      { loading && (<div>Loading...</div>) }
      <div className="flex mt-5 flex-col justify-center items-center">
        { data && (
          <div className="flex md:w-98 account-info items-center">
          <div className="pfp">
            <img 
              src="https://cdn.discordapp.com/attachments/491113748031864842/502707407307407370/IMG_20180901_102050-2.jpg" 
              alt="" 
              className="object-cover h-48 w-48 rounded-full"
            />
          </div>
          <section className="ml-24 account-stats flex flex-col">
            <div className="text-2xl">
              <h2>{data.user.username}</h2>
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

      <div className="flex border-t pt-12 mt-5 md:w-100 justify-center items-center mb-4">
        <article className="images justify-center">
          { data && [...data.posts].reverse().map(post => (
            <div key={post._id} className="card shadow-sm cursor-pointer">
              <img 
                src={post.image_link}
                alt="" 
              />
            </div>
          ))}
        </article>
      </div>
    </div>
  )
}