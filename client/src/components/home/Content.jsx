import React, { useState, useEffect } from 'react'
import SkeletonPost from '../../skeletons/SkeletonPost.jsx';

export default function Content() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/api/allpost', {
      credentials: 'include'
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Unauthorized!');
        }
        if (!res.ok) {
          throw new Error('Could not fetch the resource');
        }

        return res.json();
      })
      .then(json => {
        setLoading(false);
        setError(null);
        return setData(json)
      })
      .catch(err => {
        setError(() => {
          setLoading(false);
          return setError(err.message)
        });
      });
  }, []);

  // console.log('Data:', data);

  return (
    <div className="">
      <div className="h-auto overflow-hidden">
        { error && <div>{error}</div> }
        { loading && [1,2,3,4,5].map(n => <SkeletonPost key={n} />) }
        
        {/*<SkeletonElement type="avatar"/>
          <SkeletonElement type="username"/>
          <SkeletonElement type="thumbnail"/>
          <SkeletonElement type="likes"/>
          <SkeletonElement type="caption"/>
          <SkeletonElement type="date"/>*/}

        { data && 
          [...data].reverse().map((post, idx) => (
            <div key={idx} className="shadow-sm mb-4 rounded border b-1 post-card md:w-96 bg-white justify-center pb-2">
              <div className="post-head light-border-bottom flex items-center py-2 px-4">
                <img
                  src={post.image_link}
                  alt=""
                  className="object-cover h-10 w-10 bg-contain overflow-hidden rounded-3xl"
                />
                {/* Make this a Link tag */}
                <div className="username ml-4 font-bold">
                  {'arsenic'}
                </div>
              </div>
              <div className="image items-center text-center content-center">
                <img
                  src={post.image_link}
                  alt=""
                  className="object-cover inline max-w-96 max-h-98 overflow-hidden"
                />
              </div>
              <div className="flex light-border-top opacity-80 justify-between post-actions px-3 pt-2">
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
              <div className="bottom px-3">
                <span className="font-bold pr-2">arsen1c</span>
                <span>{post.caption}</span>
                <div className="date text-sm text-gray-400 mt-2">{new Date(post.date).toLocaleString()}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}