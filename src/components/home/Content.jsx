import React, { useState, useEffect } from 'react'

export default function Content(props) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(res => {
        if (!res.ok) {
          throw new Error('Could not fetch the resource');
        }

        return res.json();
      })
      .then(json => {
        setLoading(false);
        return setData(json)
      })
      .catch(err => {
        setError(() => {
          setLoading(false);
          return setError(err.message)
        });
        console.log(err);
      });
  }, []);

  // console.log('Data:', data);

  return (
    <div className="max-w-96 mt-16 h-auto overflow-hidden">
      { error && <div>{error}</div> }
      { loading && (<div>Loading</div>) }
      { data && 
        [...data].reverse().map(post => (
          <div key={post.id} className="shadow-sm mb-4 rounded border b-1 post-card md:w-96 bg-white justify-center pb-2">
            <div className="post-head flex items-center py-2 px-4">
              <img
                src={post.pfp}
                alt=""
                className="object-cover h-10 w-10 bg-contain overflow-hidden rounded-3xl"
              />
              {/* Make this a Link tag */}
              <div className="username ml-4 font-bold">
                {post.username}
              </div>
            </div>
            <img
              src={post.image}
              alt=""
              className="object-cover max-w-96 max-h-98 overflow-hidden"
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
              {post.likes} likes
            </div>
            <span className="font-bold px-3">arsen1c</span>
            <span>{post.caption}</span>
          </div>
        ))
      }
    </div>
  )
}