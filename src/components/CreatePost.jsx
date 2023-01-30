import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost(props) {

    const navigate = useNavigate();
    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You must be logged in to view this page', 'danger');
            navigate('/login');
        }
    })

    const handleSubmit = async event => {
        event.preventDefault();

        let title = event.target.title.value
        let content = event.target.content.value
        let token = localStorage.getItem('token')


        let myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        myHeaders.append('Authorization', `Bearer ${token}`)


        let requestBody = JSON.stringify({title, content})
        let response = await fetch(`${props.BASE_URL}/blog/posts`, {
            method: 'POST',
            headers: myHeaders,
            body: requestBody 
        })

        if (response.ok){
            let data = await response.json()
            props.flashMessage(`${data.title} has been created`, 'primary');

        }else{
            props.flashMessage("There was an issue, please try again", "warning")
        }
    }

    return (
        <>
            <h3 className="text-center">Create A New Post</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control my-3" placeholder='Enter Title of Post' name='title'/>
                    <input type="text" className="form-control my-3" placeholder='Enter Body of Post' name='content'/>

                    <input type="submit" value="Create Post" className="btn btn-success w-100" />
                </div>
            </form>
        </>
    )
}
