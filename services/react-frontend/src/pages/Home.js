import React from 'react'
import { Container, Card, CardImg, CardHeader, Button, CardText, Row, Col } from 'reactstrap';
import SHlogo from '../assets/SuperHot.jpg'
import BSlogo from '../assets/BeatSaber.JPEG'
import ASlogo from '../assets/ArizonaSunshine.JPEG'
import PWlogo from '../assets/PistolWhip.png'

export const Home = () => {

  const imgStyle = {
    maxHeight: 105,
    maxWidth: 70,
  }

  return (
    <Container className="HomePage" color="red">
      <br />
      <Row>
        <Col sm="6">
        <Card border="primary">
          <CardHeader>
            <b><strong><CardImg top width="100%" style={imgStyle} src={SHlogo} /> &nbsp; Superhot VR</strong></b>
          </CardHeader>
          <Card body>
              <CardText>
                <strong>Superhot is the first person shooter where...</strong>
              </CardText>
              <Button href="/about/superhot">Click Here For More Game Info</Button>
              <br />
            <Button href="/superhot">View Highscore Table</Button>
          </Card>
        </Card>
      </Col>
        <br />

        <Col sm="6">
          <Card border="primary">
          <CardHeader>
          <b><strong><CardImg top width="100%" style={imgStyle} src={BSlogo} /> &nbsp; Beat Saber</strong></b>
          </CardHeader>
            <Card body>
              <CardText>
                <strong>Beat Saber is a VR rhythm game where...</strong>
              </CardText>
              <Button href="/about/beatsaber">Click Here For More Game Info</Button>
              <br />
              <Button href="/beatsaber">View Highscore Table</Button>
          </Card>
          </Card>
        </Col>
        <br />
      </Row>
      <br />

      <Row>
        <Col sm="6">
          <Card border="primary">
          <CardHeader>
          <b><strong><CardImg top width="100%" style={imgStyle} src={ASlogo} /> &nbsp; Arizona Sunshine</strong></b>
          </CardHeader>
            <Card body>
              <CardText>
                  <strong>Built exclusively for VR, Arizona Sunshine puts...</strong>
              </CardText>
                <Button href="/about/arizonasunshine">Click Here For More Game Info</Button>
                <br />
                <Button href="/arizonasunshine">View Highscore Table</Button>
            </Card>
          </Card>
        </Col>

        <Col sm="6">
          <Card border="primary">
          <CardHeader>
          <b><strong><CardImg top width="100%" style={imgStyle} src={PWlogo} /> &nbsp;Pistol Whip</strong></b>
          </CardHeader>
            <Card body>
              <CardText>
                <strong>Pistol Whip is an unstoppable...</strong>            
              </CardText>
              <Button href="/about/pistolwhip">Click Here For More Game Info</Button>
              <br />
              <Button href="/pistolwhip">View Highscore Table</Button>
            </Card>
          </Card>
          <br/>
        </Col>
      </Row>

    </Container>
  );
};

export default Home
