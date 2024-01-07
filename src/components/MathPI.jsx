import React from 'react';
import pi, { doublePI, triplePI } from './math';

function MathPI() {
  return (
    <div>
      <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Eps 293</p>
      <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>JavaScript ES6 Import, Export and Modules</p>
      <ul>
        <li>{pi}</li>
        <li>{doublePI()}</li>
        <li>{triplePI()}</li>
      </ul>
    </div>
  );
}

export default MathPI;

/* 
Bisa Juga Pakai 
import * from './math';
Kalo Mau Semuanya

<li>{pi.default}</li>
<li>{pi.doublePI()}</li>
<li>{pi.triplePI()}</li>
*/
