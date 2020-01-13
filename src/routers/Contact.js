import React, { useEffect } from 'react';

import LateralBar from './../components/LateralBar'

const Contact = () => {

    useEffect(() => {
        document.title = "Contact";
    }, []);

    return (
        <div className="container" id="contact" >
            <LateralBar screen={window.screen.height} />
            <form action="https://formspree.io/arturo.rugh@gmail.com" method="POST">
                <legend>Complete the Form.JS and send the data</legend>
                <fieldset>
                <p>export</p>
                    <p>const</p>
                    <p>Form</p>
                    <p>=</p>
                    <p>{"{"}</p>
                    <label className = "name">name:
                        <input type="text" name="name" placeholder='send(your.name),' onClick={(e) => e.preventDefault()} />
                    </label><br />
                    <label>e_mail:
                        <input type="email" name="_replyto" placeholder='send(your.e-mail),' />
                    </label><br />
                    <label>message:
                        <input type="text" name="message" placeholder='send(your.message),' />
                    </label>
                    <p>{"};"}</p>
                </fieldset>
                <button type="submit">
                    <p>send</p></button>
            </form>
        </div>
    )
}

export default Contact;