import React from 'react';
import './Projects.css'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

class Projects extends React.Component {

    // constructor method to bind the methods for the projectCard links
    constructor (){
        super()
        this.conversationalistClick = this.conversationalistClick.bind(this)
        this.exerciseClick = this.exerciseClick.bind(this)
        this.chatbotClick = this.chatbotClick.bind(this)
    }

conversationalistClick = () => {
    window.open('https://github.com/ReganIu/Conversationalist')
}

exerciseClick = () => {
    window.open('https://github.com/ReganIu/Exercise-Tracker')
}

chatbotClick = () => {
    window.open('https://github.com/ReganIu/Simple-Chatbot')
}


    render(){
        return (
            <div>
                <div className='jumbotron-fluid' id="jumbotronProjects">
                    <h1 id="projectWord">Projects</h1>
                    
                    <div className="row">

                        {/* project 1: PokeRec */}
                        <div class="col-sm-4">
                            <Card>
                                <img id="pokePic" variant="top" src={require('../../resources/projectpics/pokerec.png')} alt=""/>
                                <Card.Header>Pokemon Card Recognizer</Card.Header>
                                <Card.Body>
                                    <Card.Subtitle> A Pokemon Card recognition app to collectible card game hobbyists who would like to get more details on their collection. </Card.Subtitle>
                                    <Button className="btn" variant="primary" onClick={this.chatbotClick} style={{fontFamily:'Lato', color: 'white', backgroundColor:'black'}}> <i class="fab fa-github"></i> Github </Button>
                                </Card.Body> 
                            </Card>
                        </div>

                    
                        {/* project 2: conversationalist */}
                        <div class="col-sm-4">
                            <Card>
                                <img id="convoPic" variant="top" src={require('../../resources/projectpics/conversationalist.jpg')} alt=""/>
                                <Card.Header>Conversationalist</Card.Header>
                                <Card.Body>
                                    <Card.Subtitle> A text-to-speech Android application that helps users learn and improve their spoken language.</Card.Subtitle>
                                    <Button className="btn" variant="primary" onClick={this.conversationalistClick} style={{fontFamily:'Lato', color: 'white', backgroundColor:'black'}}> <i class="fab fa-github"></i> Github </Button>
                                </Card.Body>
                            </Card>
                        </div>

                        
                        {/* project 3: MERN exercise tracker */}
                        <div class="col-sm-4">
                            <Card>
                                <img id="exercisePic" variant="top" src={require('../../resources/projectpics/exercisetracker.png')} alt="" />
                                <Card.Header>Exercise Tracker</Card.Header>
                                <Card.Body>
                                    <Card.Subtitle> A web application built using MERN stack that keeps track of the users' exercises. </Card.Subtitle>
                                    <Button className="btn" variant="primary" onClick={this.exerciseClick} style={{fontFamily:'Lato', color: 'white', backgroundColor:'black'}}> <i class="fab fa-github"></i> Github </Button>
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