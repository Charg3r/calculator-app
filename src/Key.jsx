import React from 'react';
import { evaluate } from 'mathjs';

function calculate(operation, character) {
  if (character === '=')
    return evaluate(operation) === Infinity || evaluate(operation) === undefined ? '' : '' + evaluate(operation);
  else if (character === 'Clear') operation = '';
  else operation += character;
  return operation;
}

const Key = ({ character, classes, operation, setOperation }) => {
  return (
    <button className={classes} onClick={() => setOperation(calculate(operation, character))}>
      <div className='character'> {character} </div>
    </button>
  );
};

export default Key;
