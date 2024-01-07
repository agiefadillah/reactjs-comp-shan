import React from 'react';
import pi, { doublePI, triplePI } from './math';

function MathPI() {
  return (
    <div>
      <ul>
        <li>{pi}</li>
        <li>{doublePI()}</li>
        <li>{triplePI()}</li>
      </ul>
    </div>
  );
}

export default MathPI;
