import React, { useState } from "react";
import WidgetWrapper from "../../components/WidgetWrapper";
import Navbar from "../../widgets/Navbar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const loginAttempt = async () => {
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
        if (response.status === 200) {
            alert('Successfully logged in');
        } else {
            alert(`Failed to login status code: ${response.status}`);
        }
    };

    

  return (
    <>
    <Navbar />
    <WidgetWrapper>
        <form>
            <div>
                <h1>Login</h1>
                    <label for="email">Email: </label>
                    <input 
                        type = "email"
                        id = "email"
                        value = {email}
                        required
                        autoComplete= "username"
                        onChange = {e => setEmail(e.target.value)} />
                    <section>
                    <label for="password">Password: </label>
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