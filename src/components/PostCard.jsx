import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard(props) {
    return (
        <div className="card my-1">
            <div className="card-body">
                <h5 className="card-title">{ props.post.title }</h5>
                <p className="card-text">{ props.post.content }</p>
                <Link className='btn btn-primary' to={`/posts/${props.post.id}`}>See More</Link>
            </div>
        </div>
    )
}
