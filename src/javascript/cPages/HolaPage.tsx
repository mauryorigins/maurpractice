// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import Hola from 'Cont/Hola';

// ------------------------------------------ COMPONENT-----------------------------------------
const HolaPage = () => {
  return (
    <>
      <Helmet>
        <title>Hola</title>
      </Helmet>
      <Hola />
    </>
  );
};

export default HolaPage;
