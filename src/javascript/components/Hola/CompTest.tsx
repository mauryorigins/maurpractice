// ---Dependencys
import React from 'react';


// --------------------------------------TYPES-----------------------------
interface Props {
    title: string
}
// --------------------------------------COMPONENT-----------------------------
function CompTest( props: Props) {
    return (
      <div className="seccion-cool">
        <h1>
          <span>Nombre:</span>
          {`Alumno ${props.title}`}
        </h1>
        <section>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nulla err</p>    
        </section>
        <img src="https://www.nawpic.com/media/2020/cool-anime-nawpic-4-e1605119776631.jpg" alt="pruebas" />
      </div>
    )
}

export default CompTest;
