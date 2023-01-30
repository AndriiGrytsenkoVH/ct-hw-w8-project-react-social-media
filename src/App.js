import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import AlertMessage from "./components/AlertMessage";
import Login from "./components/Login";

function App() {

    const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('token')));
	console.log(Boolean(localStorage.getItem('token')))
    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

	const BASE_URL = "https://responsible-knowledgeable-restaurant.glitch.me";

	function logUserIn(newUsername){
        setLoggedIn(true);
		localStorage.setItem('username', newUsername)
    }

	function logUserOut(){
        setLoggedIn(false);
        localStorage.removeItem('token');
		localStorage.removeItem('username')
        flashMessage("You have logged out", "primary");
    }

    function flashMessage(message, category){
        setMessage(message);
        setCategory(category);
    }

	return (
		<>
			<Navbar loggedIn={loggedIn} logUserOut={logUserOut} />	
			<div className="container">
				{message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
				<Routes>
					<Route path='/' element={<Home BASE_URL={BASE_URL}/>} />
					<Route path='/register' element={<Register BASE_URL={BASE_URL} flashMessage={flashMessage} />} />

					<Route path='/login' element={<Login BASE_URL={BASE_URL} logUserIn={logUserIn} flashMessage={flashMessage} />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
