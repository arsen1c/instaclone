import React from 'react';
import SkeletonElement  from './SkeletonElement.jsx';

export default function SkeletonPost() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-post rounded pt-1 bg-gray-50">
        <SkeletonElement type="avatar"/>
        <SkeletonElement type="username"/>
        <SkeletonElement type="thumbnail"/>
        <SkeletonElement type="likes"/>
        <SkeletonElement type="caption"/>
        <SkeletonElement type="date"/>
      </div>
    </div>
  )
}