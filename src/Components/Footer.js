import React from 'react';
import { Col, Container, Row, Footer,Fa,Button } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="black" className="font-small pt-0 fixed-bottom u-text-center">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="mb-5 flex-center">
                                <Button href="https://www.facebook.com/renardeinside" outline tag="a" color="white"> <Fa className="mx-0" icon="facebook" /></Button>
                                <Button href="https://www.linkedin.com/in/ivan-trusov-37853679/" outline  tag="a" color="white"> <Fa className="mx-0" icon="linkedin" /></Button>
                                <Button href="https://github.com/renardeinside" outline tag="a" color="white"> <Fa className="mx-0" icon="github" /></Button>
                                {/*<a className="fb-ic mx-lg-auto" href="https://www.facebook.com/renardeinside"><i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>*/}
                                {/*<a className="li-ic mx-lg-auto" href="https://www.linkedin.com/in/ivan-trusov-37853679/"><i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>*/}
                                {/*<a className="gh-ic mx-lg-auto" href="https://github.com/renardeinside"><i className="fa fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>*/}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default FooterPage;
