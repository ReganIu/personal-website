import React from 'react';
import './Projects.css'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

class Projects extends React.Component {

    // constructor method to bind the methods for the projectCard links
    constructor (){
        super()
        this.conversationalistClick = this.conversationalistClick.bind(this)
    }

conversationalistClick = () => {
    window.open('https://github.com/ReganIu/Conversationalist')
}


    render(){
        return (
            <div>
                <div className='jumbotron-fluid' id="jumbotronProjects">
                    <h1 id="projectWord">Projects</h1>
                    
                    <div className="row">
                        <div className="column">
                            <Card>
                                <Card.Img variant="top" src={'../../resources/background/picture.png'}/>
                                <Card.Body>
                                    <Card.Text> A text-to-speech Android application that helps users learn and improve their spoken language.</Card.Text>
                                    <Button variant="primary" onClick={this.conversationalistClick}> Github </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>


                </div>
                
            </div>
        )
    }
}

export default Projects