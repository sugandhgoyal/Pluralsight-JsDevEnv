var numeral = require('numeral');
import './index.css';

var courseValue= numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
