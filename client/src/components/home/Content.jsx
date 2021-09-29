import React, { useState, useEffect } from 'react'
import SkeletonPost from '../../skeletons/SkeletonPost.jsx'; 
import { Link, Redirect } from 'react-router-dom';
import { server } from '../../config';
import { SendIcon, HeartIcon, MessageIcon, PocketIcon } from '../../icons/index.js';

export default function Content() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState(false);

  const handleLike = (e, postId) => {
    console.log(postId)
    return setLike(() => !like);
    // return setTimeout(() => , 200);
  }

  useEffect(() => {
    console.log('Fetching new data');
    fetch(`${server}/api/feed`, {
      credentials: 'include',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, DELETE, PUT',
    })
      .then(res => {
        console.log(typeof(res.status));
        if (res.status === 401) {
          throw new Error('Unauthorized')
        }
        if (!res.ok) {
          throw new Error('Could not fetch the resource');
        }

        return res.json();
      })
      .then(json => {
        setLoading(false);
        setError(null);
        console.log(json.feedPosts);
        return setData(json.feedPosts)
      })
      .catch(err => {
        setError(() => {
          setLoading(false);
          return setError(err.message)
        });
      });
  }, [like]);

  // console.log('Data:', data);

  return (
    <div className="">
      <div className="h-auto overflow-hidden">
        { error && <Redirect to={{ pathname: '/login' }}/> }
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
                <Link to={"/" + post.author} className="username ml-4 font-bold">
                  {post.author}
                </Link>
              </div>
              <div className="image items-center text-center content-center">
                <img
                  src={post.image_link}
                  alt=""
                  className="object-cover inline max-w-96 max-h-98 overflow-hidden"
                />
              </div>
              <div className="flex light-border-top opacity-80 justify-between post-actions px-3 pt-2">
                <div className="main flex">
                  <span onClick={(e) => handleLike(e, post._id)}>
                    <HeartIcon id={post._id}/>
                  </span>
                  <MessageIcon className="cursor-pointer"/>
                  <SendIcon className="cursor-pointer"/>
                </div>
                <PocketIcon />
              </div>
              <div className="likes font-bold px-3">
                {post.likes} likes
              </div>
              <div className="bottom px-3">
                <span className="font-bold pr-2"><Link to={"/" + post.author}>{post.author}</Link></span>
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