import React from 'react';
import { Link } from 'react-router-dom';
import service from '../appwrite/config';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="p-4 group w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="relative w-full bg-white/40 backdrop-blur-lg rounded-xl shadow-xl group-hover:scale-105 transform transition-all">
        <img 
          src={service.getFilePreview(featuredImage)} 
          alt={title} 
          className="object-cover w-full h-[200px] rounded-xl"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
