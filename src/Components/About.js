import React  from 'react';
import {Button,Fa} from 'mdbreact';

class AboutContent extends React.Component {
    render() {
        return (
            <div className="container-fluid align-items-center mt-lg-5 mt-xs-5">
                <p className="text-center h1-responsive">Hello, my name is Ivan!</p>
                <div className="avatar container-fluid align-items-center mb-3">
                    <img
                src="../assets/my_photo.jpg"
                alt="avatar" className="rounded-circle img-responsive mx-auto d-block" id="photo">
                </img></div>
                <p className="text-center h6-responsive">
                  I am a machine learning engineer from Moscow.<br/>
                    I create models and data pipelines.
                </p>
                <div className="row justify-content-center">
                <Button tag="a" href="mailto:ivan.trusov.contact@gmail.com" color="dark" rounded outline><Fa icon="envelope" className="mr-1"/> contact me</Button>
                </div>
            </div>
        );
    }
}

export default AboutContent;

