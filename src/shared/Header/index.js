import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import shape1 from '../../images/icons/shape1.png';
import shape2 from '../../images/icons/shape2.png';

import './styles.scss';

function Header() {
  return (
    <header className="header">
      <Container className='h-100'>
        <div className="logo_container">
          <img src="https://static.flyadeal.com/assets/imgs/logo-flyadeal-white.svg" alt="" />
        </div>
        <Row className='h-100'>
          <Col className="header_inner" xs={12} lg={7}>
            <article className="header_inner-cont text-white h-100">
              <div className="arrow-shape">
                <img src={shape1} alt="" />
                <img src={shape2} alt="" />
              </div>
              <h1 className='h1 '><span className='d-block'>YOU WONT</span> FIND IT <span className='text-green'>CHEAPER</span>  ANYWHERE ELSE</h1>
              <p className=' text-white mt-2'>Starting January 1st 2019, we have found <span className="d-block">cheaper ways for you to ﬂy.</span></p>
              <small >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea soluta repellendus voluptatem ut magni quaerat dolor repellat fuga iure, necessitatibus dolores doloribus natus quo ullam omnis, voluptas et. Nisi, a.q </small>
            </article>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
