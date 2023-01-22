import React from 'react';
import '../BotonClear/BotonClear.css';

const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;