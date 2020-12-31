import React from 'react'
import './Contact.css'
import Pdf from "../../resources/ReganIuResume.pdf"

class Contact extends React.Component {
    render() {
        return (
            <div id="contactSection">
                <h1> Get in contact with me! </h1>
                <div class="icons">

                        <a id="resume-logo" href={Pdf} target = "blank">
                            <i class="fas fa-file-alt"></i>
                        </a>

                        <a id="linkedin-logo" href="https://www.linkedin.com/in/reganiu/" target ="blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        
                        <a id="github-logo" href="https://github.com/reganiu" target="blank">
                            <i class="fab fa-github-square"></i>
                        </a>

                        <a id="email-logo" href="mailto:regan.iu@outlook.com" target="blank">
                            <i class="fas fa-envelope-square"></i>
                        </a>
                    </div>
            </div>
        )
    }
}

export default Contact