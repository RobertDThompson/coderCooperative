import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './developergrid.css';

class Devs extends Component {
  render() {
    return (
      <Grid>
        <div className="container devgrid">
          <div className="row">
            <div className="col-lg-12">
                <h1 className="text-center devtext">Visit their work below</h1>
            </div>
          </div>
        </div>

        <Image src={require ("./images/coderCooperative-MAIN.png")}className="header-image img-responsive mx-auto d-block" />  

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={require ("./images/Scott.png")} className="profile-pic rounded-circle" />
            <p>A lager related to a colt 45, the Lone Star over the Labatts, and the miller light are what made America great! A St. Pauli Girl for a Jamaica Red Ale finds lice on the infected miller. Another Left Hand Milk.</p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={require ("./images/Sam.png")} className="profile-pic rounded-circle" />
            <p>Vdara new york, new york royal flush shooter haze probability: pit two pair flush breaking even fremont street? House edge the chandelier vegas givecamp full house sixth street the excalibur: straight pot payoff exposure?.</p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src={require ("./images/Jimmy.png")} className="profile-pic rounded-circle" />
            <p>Support challenges and opportunities, we must stand up inclusive vibrant social impact compelling. Scalable relief, academic; improve the world green space. The resistance preliminary thinking preliminary thinking relief society academic. Deep dive but effective.</p>
          </Col>
        </Row>

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} md={4} mdPush={2} className="person-wrapper">
            <Image src={require ("./images/Rob.png")} className="profile-pic rounded-circle" />
            <p>Mizzen spyglass rigging lanyard Yellow Jack jolly boat handsomely Sink me fathom code of conduct. Scourge of the seven seas piracy lugsail parrel trysail gangplank holystone spirits blow the man down fore. Blow the man down topsail league trysail barque mizzenmast wench swing the lead Jolly Roger interloper.</p>
          </Col>

          <Col xs={12} sm={4} md={4} mdPush={2}  className="person-wrapper">
            <Image src={require ("./images/Des.png")} className="profile-pic rounded-circle" />
            <p>Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tuakana ki te hii ika. I te hokinga mai o ona tuakana ki tatahi, ka kii atu a Maui, “ka taea e au te haramai i to koutou na taha ki te hii ika?” Engari, ko te whakautu o ona tuakana ki a ia ano, “Kao, he rangatahi noa iho koe”.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Devs;