import React from 'react';

const Footer = () => {

    // Change file
    return (
        <footer>
            <p id = "cv">
                <a id="down" href="Arturo_Rugh_CV.pdf" download>
                <i className="fas fa-file-download"></i>CV</a>
            </p>
            <p id = "mail-phone">
                <span>
                    <i className="far fa-envelope"></i>arturo.rugh@gmail.com</span>
                <span>
                    <i className="fas fa-phone"></i>+49 15-773-789-961</span>
            </p>
        </footer>
    )
};

export default Footer;

