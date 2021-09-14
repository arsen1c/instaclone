import React from 'react'
import './Skeleton.css'

export default function SkeletonElement({ type }) {
  const classes = `skeleton ${type}`;

  return (
    <div>
      <div className={classes}></div>
    </div>
  )
}