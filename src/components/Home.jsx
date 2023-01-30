import React, { useState, useEffect } from 'react'
import PostCard from './PostCard';

export default function Home(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${props.BASE_URL}/blog/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
    },[])

    return (
        <>
            <h1 className="text-center">Welcome to the Blog</h1>
            {posts.map( post => <PostCard key={post.id} post={post} />)}
        </>
    )
}
