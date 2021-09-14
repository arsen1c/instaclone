import React from 'react';
import Content from './Content';

export default function Home() {
  return (
    <div className="flex flex-col sm:mx-2 items-center">
     <div className="w-full sm:w-96 md:w-96">
        <Content />
     </div>
    </div>
  )
}