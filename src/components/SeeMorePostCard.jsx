import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

export default function SeeMorePostCard(props) {

    const params = useParams();
    let post = props.posts.find( p => p.id == params.postID);
    let notFound = Object.is(post, undefined);
    if (notFound){ props.flashMessage(`Post with id:${params.postID} does not exist`, 'danger')}

    return (
        <>
            {notFound ? <Navigate to='/' /> :
                <>
                    <h1 className='text-center'>{`${post.title}`}</h1>
                    <h3 className="text-center">By {post.author.username}</h3>
                    <p>{post.content}</p>
                </>
            }
        </>
    )
}
