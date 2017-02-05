import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import _concat from 'lodash/concat'

const array = [1];
const other = _concat(array, 2, [3], [[4]]);

console.log(other);

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)
