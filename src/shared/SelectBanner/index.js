import React, { useState } from 'react';
import { Radio } from '../Radio';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import './styles.scss';

import chair from '../../images/chair.png';
import cargo from '../../images/cargo.png';
import darkRoutes from '../../images/darkRoutes.png';
import onBudget from '../../images/onBudget.png';
import manOnChair from '../../images/manOnChair.png';
import bathRoomImg from '../../images/bathRoom.png';

function SelectBanner() {
  const [shareSeat, setShareSeat] = useState('No sharing');
  const [bathRoom, setBathRoom] = useState('Dont use');
  const [submit, setSubmit] = useState(false);
  return (
    <>
      <Container className=" SelectBanner-overlay" fluid>
        <Row className="h-100 mx-0 w-100 SelectBanner-background">
          <Col className="SelectBanner" lg={{ span: 10, offset: 1 }}>
            <article className="SelectBanner-inner text-white h-100 d-flex flex-column align-items-center  mt-4">
              <h4 className="h4 text-uppercase">select</h4>
              <h2 className="h2">TO CUSTOMIZE &amp; SAVE</h2>
              <Row className="w-100">
                <Col xs={12} md={4}>
                  <Card className="pr-1 mainBtn-cont" style={{ width: '100%' }}>
                    <Card.Img className="h-100" variant="top" src={cargo} />
                    <button className="mainBtn">Cargo Flight</button>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="pr-1  mainBtn-cont" style={{ width: '100%' }}>
                    <Card.Img className="h-100" variant="top" src={darkRoutes} />
                    <button className="mainBtn">Dark Routes</button>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="pr-1  mainBtn-cont" style={{ width: '100%' }}>
                    <Card.Img className="h-100" variant="top" src={onBudget} />
                    <button className="mainBtn">On Budget</button>
                  </Card>
                </Col>
              </Row>
            </article>
          </Col>
        </Row>
      </Container>
      <section>
        {!submit ? (
          <Container className="steps pt-4 w-100  mt-3">
            <Row className="">
              <Col className="justify-content-center d-flex" xs={{ span: 12, offset: 0 }} md={{ span: 8, offset: 2 }}>
                <h2 className=" steps_text">
                  <span>STEP ONE</span> Customize Your Flight
                </h2>
              </Col>
            </Row>
            <Row className="">
              <Col className="justify-content-center d-flex " xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 4 }}>
                <img className="w-100-mobile" src={chair} alt="" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="justify-content-center d-flex text_OnShape mainh5" xs={{ span: 12, offset: 0 }} md={{ span: 8, offset: 2 }}>
                <h5 className="">ON BUDGET</h5>
              </Col>
            </Row>
            <Row className="onbudget">
              <Col className=" left" xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 0 }}>
                <div className="d-flex align-items-center chairManImgs">
                  <img src={manOnChair} alt="" />
                </div>
                <div className="flex-column d-flex ml-4 align-items-center justify-content-center">
                  <div className="mainh5">
                    <h5 className="">SHARE YOU SEAT</h5>
                  </div>
                  <div className="flex-column d-flex align-items-start">
                    <Radio value="No sharing" selected={shareSeat} text="No sharing" onChange={setShareSeat} />
                    <Radio value="Share seat" selected={shareSeat} text="Share seat" onChange={setShareSeat} toolTip={true}/>
                    <Radio value="Share meal" selected={shareSeat} text="Share meal" onChange={setShareSeat} />
                  </div>
                </div>
              </Col>
              <Col className="right" xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 4 }}>
                <div className="d-flex align-items-center chairManImgs">
                  <img src={bathRoomImg} alt="" />
                </div>
                <div className="flex-column d-flex ml-4 align-items-center justify-content-center">
                  <div className="mainh5">
                    <h5 className="">PAY FOR BATHROOM</h5>
                  </div>
                  <div className="flex-column d-flex align-items-start">
                    <Radio value="Dont use" selected={bathRoom} text="Dont use, dont pay" onChange={setBathRoom} />
                    <Radio value="Pay for short time" selected={bathRoom} text="Pay for short time" onChange={setBathRoom} />
                    <Radio value="Pay for long time" selected={bathRoom} text="Pay for long time" onChange={setBathRoom} />
                  </div>
                </div>
              </Col>
              <Col className="subimtBtn" xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 4 }}>
                <button className="mainBtn" onClick={() => setSubmit(true)}>
                  Continue
                </button>
              </Col>
            </Row>
          </Container>
        ) : (
          <Row className="">
            <Col className="mt-5" lg={{ span: 6, offset: 3 }}>
              <Alert variant={'success'} onClose={() => setSubmit(false)} dismissible>
                Success, Thank you
              </Alert>
            </Col>
          </Row>
        )}
      </section>
      <>
  {
    
  }
</>
    </>
  );
}

export default SelectBanner;
