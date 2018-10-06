import React  from 'react';
import { Navbar, NavbarNav, NavItem, NavLink} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class NavbarFeatures extends React.Component {
    render() {
        return (
            <Router>
                <Navbar color="black" dark expand="xs">
                        <NavbarNav>
                            <div className="d-flex justify-content-center">
                                <NavItem><NavLink to="/" >About</NavLink></NavItem>
                                {/*<NavItem><NavLink to="#">Posts</NavLink></NavItem>*/}
                                {/*<NavItem><NavLink to="#">Projects</NavLink></NavItem>*/}
                            </div>
                        </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarFeatures;