import React from 'react'

import '../../App.css'
import BackgroundImage from '../../assets/images/landingPage.png'

export default function SignUpPage() {

    return (
        <header style={ HeaderStyle }>
            <div className="buttons text-center">
                <form action="/home">
                    <p>
                        <label>Email Id</label><br/>
                        <input type="email" name="email" required />
                    </p>
                    <p>
                        <label>Employee Id</label><br/>
                        <input type="number" name="employeeId" required />
                    </p>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" requiredc />
                    </p>
                    <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Register</button>
                    </p>
                </form>
                <footer>
                
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