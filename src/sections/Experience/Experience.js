import React from 'react';
import './Experience.css'
import Card from "react-bootstrap/Card"

class Experience extends React.Component {


    render(){
        return (
            <div>
                <div className='jumbotron-fluid' id="jumbotronExp">
                    <h1 id="expWord">Experience</h1>
                    
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">
                            <Card>
                                <img id="wattpadPic"  src={require('../../resources/Wattpad-Logo.png')} alt="wattpad-logo"/>
                                <Card.Header style={{ textAlign: 'center', fontSize: '5vh' }}>Wattpad</Card.Header>
                                <Card.Header>Associate Engineer</Card.Header>
                                <Card.Body>
                                    <Card.Subtitle style={{ paddingBottom: '10px' }}>
                                        • Creator Journey | May 2021 - Dec 2021
                                    </Card.Subtitle>
                                    <Card.Subtitle>
                                        • Core Experience | Jan 2022 - Present
                                    </Card.Subtitle>
                                </Card.Body> 
                            </Card>
                        </div>
                        <div class="col-sm-4"></div>
                    </div>
                    
                </div>
            </div>      
        )
    }
}

export default Experience