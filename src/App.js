import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// my components
import NavbarFeatures from './Components/Navigation';
import FooterPage from './Components/Footer';
import AboutContent from './Components/About';


class App extends Component {
    render() {
        return (
            <div>
                <NavbarFeatures/>
                <AboutContent/>
                <FooterPage/>
            </div>


        )
    }
}

export default App;
