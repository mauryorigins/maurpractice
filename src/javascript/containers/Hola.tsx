// ---Dependencys
import React from 'react';
import {Row, Col} from 'antd'
// ---Components
import CompTest from 'Comp/Hola/CompTest';
import ButtonOMG from 'Comp/Hola/ButtonOMG';

// ------------------------------------------ COMPONENT-----------------------------------------
function Hola() {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
        <CompTest title="cadena" />
        <ButtonOMG />
      </Col>
      
      <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
        <CompTest title="osdsd" />
        <ButtonOMG />
      </Col>
      
      <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
        <CompTest title="cosa" />
        <ButtonOMG />
      </Col>

      <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
        <CompTest title="cacadenadena" />
        <ButtonOMG /> 
      </Col>
    </Row>
  );
}

export default Hola;
