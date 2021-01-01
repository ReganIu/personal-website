import React from 'react'
import './Contact.css'
import Pdf from "../../resources/ReganIuResume.pdf"

class Contact extends React.Component {
    render() {
        return (
            <div id="contactSection">
                <h1> Get in contact with me! </h1>
                <div class="icons">
                        <div class="row">
                            <div class="col-sm-3">
                                <a id="resume-logo" href={Pdf} target = "blank">
                                    <i class="fas fa-file-alt"></i>
                                </a>
                            </div>
                            <div class="col-sm-3">
                                <a id="linkedin-logo" href="https://www.linkedin.com/in/reganiu/" target ="blank">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>    
                            <div class="col-sm-3">
                                <a id="github-logo" href="https://github.com/reganiu" target="blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                            <div class="col-sm-3">
                                <a id="email-logo" href="mailto:regan.iu@outlook.com" target="blank">
                                    <i class="far fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Contact