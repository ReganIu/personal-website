import React from 'react';
import "./IntroAnimated2.css"

class Intro extends React.Component {
    render() {


        return (    
            <div className="jumbotron-fluid " id="jumbotronIntro">
                <div class="animated-title">
                    <div class="text-top">
                        <div>
                            <span>hey,</span>
                            <span>i'm regan</span>
                        </div>
                    </div>
                    <div class="text-bottom">
                        <div>check out my website!</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro