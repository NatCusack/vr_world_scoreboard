import React from 'react'
import { Container, Card, CardHeader, Button, CardText, Row, Col } from 'reactstrap';

export const Home = () => {

  return (
    <Container className="HomePage" color="red">
      <br />
      <Row>
        <Col sm="6">
        <Card border="primary">
          <CardHeader>
            <b><strong>Superhot VR</strong></b>
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
            <b><strong>Beat Saber</strong></b>
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
            <b><strong>Arizona Sunshine</strong></b>
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
            <b><strong>Pistol Whip</strong></b>
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
