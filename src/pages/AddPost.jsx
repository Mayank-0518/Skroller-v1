import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8  bg-gradient-to-b from-indigo-800 to-black'>
      <div className=' flex mb-9 justify-center items-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500'>
        Create Your Post
      </div>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost