import React from 'react'
import PostCard from './PostCard';

export default function Home(props) {
    return (
        <>
            <h1 className="text-center">Welcome to the Blog</h1>
            {props.posts.map( post => <PostCard key={post.id} post={post} />)}
        </>
    )
}
