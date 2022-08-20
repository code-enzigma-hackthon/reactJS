import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/landingPage.png'

import '../../App.css'

export default function ConfirmationPage() {
    return (
        <header style={ HeaderStyle }>
         <div className="buttons text-center">             
             <form action="/home">
                <p>
                    <label>Organizer Name</label><br/>
                    <input type="text" name="email" required />
                </p>
                <p>
                    <label>Conference Room</label><br/>
                    <input type="text" name="email" required />
                </p>
                <p>
                    <label>Booking Price</label><br/>
                    <input type="number" name="bookingprice" required />
                </p>
                <p>
                <button id="sub_btn" type="submit">Confirmation</button><br/>
                    <button id="sub_btn" type="cancel">Cancel</button>  </p>
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