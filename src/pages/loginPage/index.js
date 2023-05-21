import React, { useState } from "react";
import WidgetWrapper from "../../components/WidgetWrapper";
import Navbar from "../../widgets/Navbar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const loginAttempt = async (event) => {
        event.preventDefault();
        const login = {email, password};
        const response = await fetch("https://jam-session.onrender.com/auth/login", {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json();
        console.log(data)
        // setTimeout(5000);     
        if (response.status === 200) {
            // alert('Successfully logged in');
            console.log(data)
            // setTimeout(5000);     
            window.location = `/users/${data.user._id}`;
        } else {
            alert(`Failed to login\nPlease check that your credentials are correct and try again `);
            window.location = '/';
        }
    };

    

  return (
    <>
    <WidgetWrapper>
        <form>
            <div>
                <h1>Login</h1>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type = "email"
                        id = "email"
                        value = {email}
                        required
                        autoComplete= "username"
                        onChange = {e => setEmail(e.target.value)} />
                    <section>
                    <label htmlFor="password">Password: </label>
                    <input
                        type = "password"
                        id = "password"
                        value = {password}
                        required
                        onChange = {e => setPassword(e.target.value)} />
                    </section>
                    <button
                        onClick = {loginAttempt}>
                        Login </button>
            </div>
        </form>
    </WidgetWrapper>
    </>
  );
};

export default LoginPage;