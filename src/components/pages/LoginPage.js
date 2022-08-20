import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/landingPage.png'
import {useState} from 'react';
  
import '../../App.css'


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [post, setPost] = React.useState(null);
    
    const handleSubmit = event => {
        event.preventDefault()    
        console.log('form submitted ✅'+email);       
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          console.log(persons);
        })
      };
        return (
        <header style={ HeaderStyle }>
         <div className="buttons text-center">
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required  onChange={event => setEmail(event.target.value)}/>
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required onChange={event => setPassword(event.target.value)}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default LoginPage;