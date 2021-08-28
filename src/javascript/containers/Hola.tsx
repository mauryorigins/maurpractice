// ---Dependencys
import React from 'react';
import {Row, Col} from 'antd'
// ---Components
import CompTest from 'Comp/Hola/CompTest';

// ------------------------------------------ COMPONENT-----------------------------------------
function Hola() {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
        <CompTest title="cadena" />
      </Col>
      
      <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
       <CompTest title="osdsd" />
      </Col>
      
      <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
        <CompTest title="cosa" />
      </Col>

      <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
        <CompTest title="cacadenadena" />  
      </Col>
       </Row>
  );
}

export default Hola;
