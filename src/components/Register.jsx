import React ,{ useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Register (props) {

    const [redirect, setRedirect] = useState(false);

    function handleRegister(event){

        event.preventDefault();

        let password = event.target.password.value;
        let confirmPass = event.target.confirmPass.value;

        if (password !== confirmPass){
            this.props.flashMessage('Passwords do not match', 'danger');
        } else {
            // Set up the request
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let formData = JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password
            })

            fetch(`${props.BASE_URL}/auth/users`, {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        props.flashMessage(data.error, "danger")
                    } else {
                        console.log(data)
                        props.flashMessage(`${data.username} has been created`, 'success')
                        setRedirect(true)
                    }
                })
        }

    }


    return (
        <>
            {redirect ? <Navigate to='/' /> :
            <>
                <h3 className="text-center">Register</h3>
                <form action="" onSubmit={handleRegister}>
                    <div className="form-group">
                        <input type="text" className="form-control my-3" placeholder='Enter Email' name='email' />
                        <input type="text" className="form-control my-3" placeholder='Enter Username' name='username' />
                        <input type="password" className="form-control my-3" placeholder='Enter Password' name='password' />
                        <input type="password" className="form-control my-3" placeholder='Confirm Password' name='confirmPass' />

                        <input type="submit" value="Register" className="btn btn-success w-100" />
                    </div>
                </form>
            </>
            }
        </>
    )
}
