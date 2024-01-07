import React from 'react';
import { tambah, kali, kurang, bagi } from './calculator_Eps294';

function MathPIQuiz() {
  return (
    <div>
      <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Eps 294</p>
      <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>JavaScript ES6 Import, Export and Modules Quiz</p>
      <ul>
        <li>{tambah(1, 2)}</li>
        <li>{kali(2, 3)}</li>
        <li>{kurang(7, 2)}</li>
        <li>{bagi(5, 2)}</li>
      </ul>
    </div>
  );
}

export default MathPIQuiz;

/* 
Bisa Juga Pakai 
import * from './math';
Kalo Mau Semuanya

<li>{pi.default}</li>
<li>{pi.doublePI()}</li>
<li>{pi.triplePI()}</li>
*/
