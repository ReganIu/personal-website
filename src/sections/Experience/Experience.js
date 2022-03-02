import React from 'react';
import './Experience.css'
import Card from "react-bootstrap/Card"

class Experience extends React.Component {


    render(){
        return (
            <div>
                <div className='jumbotron-fluid' id="jumbotronExp">
                    <h1 id="expWord">Experience</h1>
                    
                    <div class="row h-100">
                        <div class="col"></div>
                        <div class="col-4">
                            <Card>
                                <img id="wattpadPic"  src={require('../../resources/Wattpad-Logo.png')} alt="wattpad-logo"/>
                                <Card.Header style={{fontFamily:'Lato', textAlign: 'center', fontSize: '5vh'}}>Wattpad</Card.Header>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">Associate Engineer </Card.Subtitle>
                                    <Card.Text>
                                        • Creator Journey | May 2021 - Dec 2021
                                    </Card.Text>
                                    <Card.Text>
                                        • Core Experience | Jan 2022 - Present
                                    </Card.Text>
                                    
                                </Card.Body> 
                            </Card>
                        </div>
                        <div class="col"></div>
                    </div>
                    
                </div>
            </div>      
        )
    }
}

export default Experience