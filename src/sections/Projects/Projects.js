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
                                <Card.Body>
                                    <Card.Title>Pokemon Card Recognizer</Card.Title>
                                    <Card.Text> A Pokemon Card recognition app to collectible card game hobbyists who would like to get more details on their collection. </Card.Text>
                                    <Button variant="primary" onClick={this.chatbotClick} style={{fontFamily:'Merriweather', color: 'white', backgroundColor:'black'}}> <i class="fab fa-github"></i> Github </Button>
                                </Card.Body> 
                            </Card>
                        </div>

                    
                        {/* project 2: conversationalist */}
                        <div class="col-sm-4">
                            <Card>
                                <img id="convoPic" variant="top" src={require('../../resources/projectpics/conversationalist.jpg')} alt=""/>
                                <Card.Body>
                                    <Card.Title>Conversationalist</Card.Title>
                                    <Card.Text> A text-to-speech Android application that helps users learn and improve their spoken language.</Card.Text>
                                    <Button variant="primary" onClick={this.conversationalistClick} style={{fontFamily:'Merriweather', color: 'white', backgroundColor:'black'}}> <i class="fab fa-github"></i> Github </Button>
                                </Card.Body>
                            </Card>
                        </div>

                        
                        {/* project 3: MERN exercise tracker */}
                        <div class="col-sm-4">
                            <Card>
                                <img id="exercisePic" variant="top" src={require('../../resources/projectpics/exercisetracker.png')} alt="" />
                                <Card.Body>
                                    <Card.Title>Exercise Tracker</Card.Title>
                                    <Card.Text> A web application built using MongoDB for the database, Express.js and Node.js for the backend, and React for the frontend that keeps track of the users' exercises. </Card.Text>
                                    <Button variant="primary" onClick={this.exerciseClick} style={{fontFamily:'Merriweather', color: 'white', backgroundColor:'black'}}> <i class="fab fa-github"></i> Github </Button>
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